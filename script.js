// ==========================================
// GO SCRIPT v0.23 - ENGLISH EDITION
// ==========================================

// Variabili globali
let playDeck = [];
let currentCard = null;
let deck = [];
let userProgress = {}; 
let userSentenceProgress = {}; 
let previousScreen = 'main-menu';

// Variabili per Frasi
let sentenceDeck = [];
let currentSentence = null;
let isSentFlipped = false;

window.onload = function() {
    try {
        if (!localStorage.getItem('v0.23_en_check')) {
            localStorage.setItem('v0.23_en_check', 'true');
            console.log("Update v0.23: English version loaded.");
        }
        loadSettings();
        loadProgress();
        goToHome(); 
    } catch(e) {
        console.error("Startup Error:", e);
    }
};

function showScreen(screenId) {
    const screens = ['main-menu', 'config-menu', 'settings-menu', 'game-screen', 'progress-menu', 'sent-progress-menu', 'reset-menu', 'sentence-screen', 'unlock-menu'];
    screens.forEach(s => { const el = document.getElementById(s); if(el) el.style.display = 'none'; });
    const target = document.getElementById(screenId);
    if(target) {
        target.style.display = 'flex';
        if (screenId === 'main-menu') document.getElementById('topBar').style.display = 'none';
        else document.getElementById('topBar').style.display = 'flex';
    }
}
function goToHome() { showScreen('main-menu'); }
function goBack() { showScreen(previousScreen); }

function startCustomSession() {
    if (typeof decks === 'undefined') return alert("Database Error");
    const c = document.getElementById('config-menu');
    let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value);
    let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value);
    if (st.length === 0 || sl.length === 0) return alert("Please select options!");
    
    playDeck = [];
    Object.keys(decks).forEach(k => {
        let d = decks[k];
        if (st.includes(d.tags[0]) && sl.includes(d.tags[1])) playDeck = [...playDeck, ...d.cards];
    });
    if (playDeck.length === 0) return alert("No cards found for this selection.");
    prepareSessionDeck();
}

function prepareSessionDeck() {
    const SESSION_SIZE = 20; 

    // 1. Filtra le carte sbloccabili
    let unlockableCards = playDeck.filter(c => {
        if (userProgress[c.id] === 'perfect') return false; 
        if (c.requires) {
            let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
            if (!reqs.every(reqId => userProgress[reqId] === 'perfect')) return false; 
        }
        return true;
    });

    // 2. Separa "In Corso" da "Nuove"
    let learningCards = unlockableCards.filter(c => userProgress[c.id]); 
    let newCards = unlockableCards.filter(c => !userProgress[c.id]);     

    // 3. Filtra carte per il Ripasso
    let reviewCards = playDeck.filter(c => userProgress[c.id] === 'perfect');

    // 4. Shuffle Mix
    shuffleArray(learningCards);
    shuffleArray(newCards);
    shuffleArray(reviewCards);

    // 5. Build Deck
    let candidates = [...learningCards, ...newCards];
    let deckBuilder = [];
    let isReviewMode = false;

    if (candidates.length > 0) {
        let maxNew = Math.min(candidates.length, SESSION_SIZE - 5); 
        if (reviewCards.length < 5) maxNew = SESSION_SIZE; 
        deckBuilder = candidates.slice(0, maxNew);
    } else {
        isReviewMode = true;
    }

    // 6. Fill with Review
    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && reviewCards.length > 0) {
        deckBuilder = [...deckBuilder, ...reviewCards.slice(0, slotsLeft)];
    }

    if (deckBuilder.length === 0) return alert("All completed! Please Reset or add topics.");
    if (isReviewMode) alert("REVIEW MODE activated.");

    deck = shuffleArray(deckBuilder);
    showScreen('game-screen');
    loadNextCard();
}

function loadNextCard() {
    if (deck.length === 0) {
        if(confirm("Session finished! Another one?")) prepareSessionDeck(); else showConfigMenu(); return;
    }
    currentCard = deck[0];
    isFlipped = false;
    
    const el = document.getElementById('flashcard');
    el.style.transition = 'none';
    el.classList.remove('flipped');
    void el.offsetWidth; 
    
    document.getElementById('instructionText').innerText = "Tap card to flip";
    
    document.getElementById('langTag').innerText = getLangName(currentCard.lang);
    document.getElementById('wordDisplay').innerText = currentCard.word;
    updateLangStyle(currentCard.lang);
    document.getElementById('backWordDisplay').innerText = currentCard.word;
    document.getElementById('pronunciationDisplay').innerText = currentCard.pronunciation || ""; 
    document.getElementById('ipaDisplay').innerText = currentCard.ipa ? `/${currentCard.ipa}/` : ""; 
    document.getElementById('meaningDisplay').innerText = currentCard.meaning;
    
    let st = userProgress[currentCard.id];
    // TRADUZIONE STATI
    let statusLabel = st === 'perfect' ? "MASTERED" : (st ? "LEARNING" : "NEW");
    let colorStyle = st === 'perfect' ? "color:#2ecc71;" : (st ? "color:#3498db;" : "color:#e67e22;");
    document.getElementById('typeTag').innerHTML = `<span style="${colorStyle} font-weight:bold;">${statusLabel}</span>`;
    
    updateCount();

    setTimeout(() => {
        el.style.transition = ''; 
    }, 50);
}

function flipCard(){ if(isFlipped)return; document.getElementById('flashcard').classList.add('flipped'); isFlipped=true; document.getElementById('instructionText').innerText="How well did you know it?"; }
// ==========================================
// LOGICA DI INIEZIONE DINAMICA (CROSS-MAZZO)
// ==========================================

function handleResult(r) {
    if (!currentCard) return;

    // 1. Salva il progresso
    userProgress[currentCard.id] = r;
    saveProgress();

    // 2. Gestione del mazzo
    if (r === 'perfect') {
        // Rimuovi la carta corrente
        deck.shift();

        // --- ATTIVAZIONE INIEZIONE DINAMICA ---
        // Se la carta è "mastered", cerchiamo subito i suoi "figli" in TUTTI i mazzi
        injectRelatedCards(currentCard.id);
        
    } else {
        // Se sbagli o è difficile, rimettila poco dopo (index 3)
        let m = deck.shift();
        deck.splice(Math.min(deck.length, 3), 0, m);
    }

    // 3. Carica la prossima
    loadNextCard();
}

// Funzione che cerca in TUTTO il database (decks) le carte derivate
function injectRelatedCards(motherId) {
    // Range di inserimento: tra la 2° e la 6° carta da ora
    const MIN_DIST = 2;
    const MAX_DIST = 6;

    console.log(`Searching children for: ${motherId}...`);

    // Scansioniamo tutti i mazzi nel database globale 'decks'
    Object.keys(decks).forEach(deckKey => {
        const d = decks[deckKey];
        
        d.cards.forEach(card => {
            // Se la carta richiede la "madre" appena imparata
            if (card.requires && card.requires.includes(motherId)) {
                
                // Controlliamo se ora è DAVVERO sbloccabile (tutti i requisiti soddisfatti)
                if (isCardUnlocked(card)) {
                    
                    // Se l'utente la conosce già "perfect", ignorala (non serve iniettarla)
                    if (userProgress[card.id] === 'perfect') return;

                    // --- LOGICA DI INIEZIONE ---
                    
                    // 1. Cerchiamo se è già nel mazzo corrente
                    let existingIndex = deck.findIndex(c => c.id === card.id);

                    // Calcola una posizione casuale vicina
                    let insertIndex = Math.floor(Math.random() * (MAX_DIST - MIN_DIST + 1)) + MIN_DIST;
                    // Assicuriamoci che l'indice non superi la lunghezza del mazzo
                    if (insertIndex > deck.length) insertIndex = deck.length;

                    if (existingIndex !== -1) {
                        // CASO A: È già nel mazzo
                        // Se è troppo lontana (> insertIndex), la spostiamo vicino
                        if (existingIndex > insertIndex) {
                            console.log(`PULLING CLOSER: ${card.word} (from ${existingIndex} to ${insertIndex})`);
                            deck.splice(existingIndex, 1); // Rimuovi da là
                            deck.splice(insertIndex, 0, card); // Inserisci qua
                        }
                    } else {
                        // CASO B: Non è nel mazzo (Sorpresa!)
                        console.log(`INJECTING NEW: ${card.word} at ${insertIndex}`);
                        deck.splice(insertIndex, 0, card);
                    }
                }
            }
        });
    });
}

// Helper per verificare se una carta ha TUTTI i requisiti soddisfatti
function isCardUnlocked(card) {
    if (!card.requires) return true;
    // Controlla se ogni ID nell'array 'requires' ha stato 'perfect'
    return card.requires.every(reqId => userProgress[reqId] === 'perfect');
}

// Frasi
function startSentenceMode() {
    if (typeof sentenceBank === 'undefined') return alert("Database Error");
    let validSentences = sentenceBank.filter(s => {
        if (!s.requires) return true;
        return s.requires.every(reqId => userProgress[reqId] === 'perfect');
    });
    if (validSentences.length === 0) return alert("No sentences available! Unlock fundamental words first.");
    
    sentenceDeck = shuffleArray(validSentences);
    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    loadNextSentence();
}

function loadNextSentence() {
    if (sentenceDeck.length === 0) { if(confirm("Sentences finished! Restart?")) startSentenceMode(); else goToHome(); return; }
    currentSentence = sentenceDeck[0];
    isSentFlipped = false;
    
    const cardEl = document.getElementById('sentFlashcard');
    cardEl.style.transition = 'none';
    cardEl.classList.remove('flipped');
    void cardEl.offsetWidth;

    document.getElementById('s_instructionText').innerText = "Tap card to translate";
    document.getElementById('s_langTag').innerText = getLangNameFull(currentSentence.lang);
    document.getElementById('s_langTag').style.color = getLangColor(currentSentence.lang);
    let dir = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr';
    document.getElementById('s_wordDisplay').innerText = currentSentence.text;
    document.getElementById('s_wordDisplay').style.direction = dir;
    document.getElementById('s_backWordDisplay').innerText = currentSentence.text;
    document.getElementById('s_backWordDisplay').style.direction = dir;
    document.getElementById('s_pronunciationDisplay').innerText = currentSentence.pronunciation || "";
    document.getElementById('s_meaningDisplay').innerText = currentSentence.translation;
    document.getElementById('sentStatus').innerText = "Sentences: " + sentenceDeck.length;

    setTimeout(() => {
        cardEl.style.transition = ''; 
    }, 50);
}

function flipSentenceCard(){ if(isSentFlipped)return; document.getElementById('sentFlashcard').classList.add('flipped'); isSentFlipped=true; document.getElementById('s_instructionText').innerText="Did you understand?"; }
function handleSentenceResult(r){ userSentenceProgress[currentSentence.id]=r; saveProgress(); if(r==='perfect')sentenceDeck.shift(); else {let m=sentenceDeck.shift(); sentenceDeck.push(m);} loadNextSentence(); }

// Utils
function showSentenceProgress(){ const list=document.getElementById('sent-progress-list'); list.innerHTML=""; let s={t:sentenceBank.length,p:0,h:0,l:0}; const d=document.createElement('div'); d.className='stats-dashboard'; d.style.marginTop="0"; sentenceBank.forEach(x=>{ let st=userSentenceProgress[x.id]; let loc=false; if(x.requires&&!x.requires.every(k=>userProgress[k]==='perfect')){loc=true;s.l++;} else if(st==='perfect')s.p++; else if(st)s.h++; if(st||!loc){const i=document.createElement('div'); i.className='prog-item'; if(loc)i.classList.add('status-locked'); let ic=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':'<span class="dot dot-yellow"></span>'); i.innerHTML=`<div class="prog-info"><div class="prog-word" style="color:${getLangColor(x.lang)}">${x.text}</div><div class="prog-meaning">${x.translation}</div></div><div class="prog-status">${ic}</div>`; list.appendChild(i);} }); d.innerHTML=`<div class="stat-box"><span class="stat-num">${s.t}</span><span class="stat-label">Tot</span></div><div class="stat-box"><span class="stat-num" style="color:#2ecc71;">${s.p}</span><span class="stat-label">Perf</span></div><div class="stat-box"><span class="stat-num" style="color:#f1c40f;">${s.h}</span><span class="stat-label">Hard</span></div><div class="stat-box"><span class="stat-num" style="color:#aaa;">${s.l}</span><span class="stat-label">Lock</span></div>`; list.parentElement.insertBefore(d,list); showScreen('sent-progress-menu'); }
function closeSentProgress(){ const m=document.getElementById('sent-progress-menu'); const d=m.querySelector('.stats-dashboard'); if(d)d.remove(); showScreen('sentence-screen'); }

// Standard
function showConfigMenu() { previousScreen = 'main-menu'; renderCheckboxes('topic-options', 'lang-options'); showScreen('config-menu'); }
function showSettingsMenu() { previousScreen='main-menu'; updateThemeButtons(); showScreen('settings-menu'); }
function showUnlockMenu() { renderCheckboxes('unlock-topic-options', 'unlock-lang-options'); showScreen('unlock-menu'); }
function performUnlock() { const c=document.getElementById('unlock-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0&&sl.length===0)return alert("Select items!"); if(!confirm("Unlock all selected?"))return; let cnt=0; Object.keys(decks).forEach(k=>{let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>{ userProgress[x.id]='perfect'; cnt++; });}); saveProgress(); alert(cnt+" cards unlocked."); showSettingsMenu(); }
function exportData() { let d={f:userProgress,s:userSentenceProgress}; const a=document.createElement('a'); a.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(d)); a.download="go_backup.json"; document.body.appendChild(a); a.click(); a.remove(); }
function importData(i) { const f=i.files[0]; if(!f)return; const r=new FileReader(); r.onload=e=>{ try{ let d=JSON.parse(e.target.result); if(d.f){userProgress=d.f; userSentenceProgress=d.s||{};} else userProgress=d; saveProgress(); alert("Import Successful"); }catch(x){alert("Import Error");}}; r.readAsText(f); }
function showResetMenu(){renderCheckboxes('reset-topic-options', 'reset-lang-options'); showScreen('reset-menu');}
function performReset(){ const c=document.getElementById('reset-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0&&sl.length===0)return alert("Select items!"); if(!confirm("Reset progress?"))return; Object.keys(decks).forEach(k=>{ let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>{ delete userProgress[x.id]; delete userSentenceProgress[x.id]; }); }); saveProgress(); alert("Reset Complete"); showSettingsMenu(); }
function renderCheckboxes(tid, lid) { const tc=document.getElementById(tid); const lc=document.getElementById(lid); if(!tc||!lc)return; tc.innerHTML=""; lc.innerHTML=""; let t=new Set(); let l=new Set(); Object.keys(decks).forEach(k=>{let d=decks[k].tags; if(d){t.add(d[0]); l.add(d[1]);}}); let chk = !tid.includes('reset') ? 'checked' : ''; t.forEach(v=>tc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="topic" value="${v}" ${chk}>${capitalize(v)}</label>`); l.forEach(v=>lc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="lang" value="${v}" ${chk}>${getLangNameFull(v)}</label>`); }
function showGlobalProgress(){let td=playDeck.length>0?playDeck:getAllCards(); let s={t:td.length,p:0,l:0,loc:0}; const lc=document.getElementById('progress-list'); lc.innerHTML=""; td.forEach(c=>{let loc=false; if(c.requires&&!c.requires.every(x=>userProgress[x]==='perfect'))loc=true; let st=userProgress[c.id]; if(loc)s.loc++; else if(st==='perfect')s.p++; else if(st)s.l++; let i=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':(st?'<span class="dot dot-blue"></span>':'<span class="dot dot-grey"></span>')); lc.innerHTML+=`<div class="prog-item ${loc?'status-locked':''}"><div class="prog-info"><div class="prog-word" style="color:${getLangColor(c.lang)}">${c.word}</div><div class="prog-meaning">${c.meaning}</div></div><div class="prog-status">${i}</div></div>`;}); document.getElementById('stat-total').innerText=s.t; document.getElementById('stat-perfect').innerText=s.p; document.getElementById('stat-learning').innerText=s.l; document.getElementById('stat-locked').innerText=s.loc; showScreen('progress-menu');}
function closeProgress(){if(playDeck.length>0)showScreen('game-screen'); else showConfigMenu();}
function getAllCards(){let a=[]; Object.keys(decks).forEach(k=>a=[...a,...decks[k].cards]); return a;}
function saveProgress(){localStorage.setItem('go_flashcards_progress',JSON.stringify(userProgress)); localStorage.setItem('go_sentences_progress',JSON.stringify(userSentenceProgress));}
function loadProgress(){const d=localStorage.getItem('go_flashcards_progress'); if(d)userProgress=JSON.parse(d); const s=localStorage.getItem('go_sentences_progress'); if(s)userSentenceProgress=JSON.parse(s);}
function setTheme(m){localStorage.setItem('go_theme_mode',m); applyTheme(m); updateThemeButtons();}
function applyTheme(m){const b=document.body; if(m==='auto'){if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)b.classList.add('dark-mode');else b.classList.remove('dark-mode');}else if(m==='dark')b.classList.add('dark-mode');else b.classList.remove('dark-mode');}
function updateThemeButtons(){const m=localStorage.getItem('go_theme_mode')||'auto'; ['light','dark','auto'].forEach(k=>{const b=document.getElementById('theme-'+k); if(b)(m===k)?b.classList.add('active'):b.classList.remove('active');});}
function loadSettings(){const m=localStorage.getItem('go_theme_mode')||'auto'; applyTheme(m); window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{if(localStorage.getItem('go_theme_mode')==='auto')applyTheme('auto');});}
function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}
// TRADUZIONE LINGUE
function getLangNameFull(c){if(c==='zh')return '🇨🇳 Chinese'; if(c==='ja')return '🇯🇵 Japanese'; if(c==='ar')return '🇸🇦 Arabic'; return c;}
function getLangName(c){if(c==='zh')return 'Cn'; if(c==='ar')return 'Ar'; if(c==='ja')return 'Jp'; return c;}
function getLangColor(c){if(c==='zh')return '#e74c3c'; if(c==='ar')return '#27ae60'; if(c==='ja')return '#8e44ad'; return '#333';}
function updateLangStyle(c){document.getElementById('langTag').style.color=getLangColor(c);}
function updateCount(){document.getElementById('deckStatus').innerText="Cards: "+deck.length;}
// ==========================================
// FUNZIONE AUDIO AGGIORNATA (Gestisce sia Parole che Frasi)
// ==========================================
window.speakWordScript = function() {
    // CASO 1: Siamo nella schermata delle FRASI (Sentence Mode)
    // Controlliamo se la schermata 'sentence-screen' è visibile
    const sentScreen = document.getElementById('sentence-screen');
    if (sentScreen && sentScreen.style.display === 'flex') {
        if (!currentSentence) return; // Se non c'è una frase caricata, esci
        
        let t = currentSentence.text; // Prende il testo della frase
        let s = new SpeechSynthesisUtterance(t);
        
        // Imposta la lingua corretta per la frase
        if (currentSentence.lang === 'zh') s.lang = 'zh-CN';
        else if (currentSentence.lang === 'ja') s.lang = 'ja-JP';
        else if (currentSentence.lang === 'ar') s.lang = 'ar-SA';
        else s.lang = 'en-US'; // Fallback per altre lingue
        
        window.speechSynthesis.speak(s);
        return; // IMPORTANTE: Esce qui per non eseguire il codice delle carte sotto
    }

    // CASO 2: Siamo nella schermata delle CARTE (Flashcard Mode)
    if (!currentCard) return;
    
    let t = currentCard.word;
    // Fix specifico per l'arabo (rimuove spazi extra che a volte bloccano l'audio su mobile)
    if (currentCard.lang === 'ar') t = t.replace(/\s/g, ''); 
    
    let s = new SpeechSynthesisUtterance(t);
    if (currentCard.lang === 'zh') s.lang = 'zh-CN';
    else if (currentCard.lang === 'ja') s.lang = 'ja-JP';
    else if (currentCard.lang === 'ar') s.lang = 'ar-SA';
    
    window.speechSynthesis.speak(s);
}

// ==========================================
// FUNZIONI ALBERO DELLA CONOSCENZA (TREE VIEW)
// ==========================================

// ==========================================
// FUNZIONI ALBERO CON FILTRO LINGUA
// ==========================================

function showTreeMode() {
    const unlockedIds = Object.keys(userProgress).filter(id => userProgress[id] === 'perfect');
    if (unlockedIds.length === 0) return alert("Unlock some cards perfectly first!");

    previousScreen = 'main-menu';
    showScreen('tree-screen');
    
    // Di default apriamo il Cinese (o la lingua che preferisci, es 'zh')
    renderTree('zh');
}

function renderTree(filterLang) {
    const container = document.getElementById('tree-container');
    container.innerHTML = "";
    
    // Aggiorna lo stile dei bottoni
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    let btnId = 'btn-tree-' + filterLang;
    if(document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');

    const allCards = getAllCards();
    const unlockedIds = Object.keys(userProgress).filter(id => userProgress[id] === 'perfect');

    // 1. Filtra le RADICI in base alla lingua scelta
    let rootCards = allCards.filter(c => {
        // Controllo Lingua
        if (filterLang !== 'all' && c.lang !== filterLang) return false;

        // Controllo Sblocco
        if (!unlockedIds.includes(c.id)) return false; 
        
        // Controllo se è una radice (Base o Genitori non sbloccati)
        if (!c.requires) return true; 
        let parentsUnlocked = c.requires.some(req => unlockedIds.includes(req));
        return !parentsUnlocked; 
    });

    // Ordina alfabetico
    rootCards.sort((a,b) => a.word.localeCompare(b.word));

    const ul = document.createElement('ul');
    ul.className = 'tree';

    let totalNodes = 0;

    if (rootCards.length === 0) {
        container.innerHTML = `<p style="text-align:center; margin-top:20px; color:#999;">No mastered roots found for this language.</p>`;
        document.getElementById('tree-stats').innerText = "Roots: 0";
        return;
    }

    // 2. Genera l'albero
    rootCards.forEach(root => {
        let li = document.createElement('li');
        li.appendChild(createNodeElement(root));
        
        let childrenHTML = findChildrenRecursive(root.id, allCards, unlockedIds);
        if (childrenHTML) {
            li.appendChild(childrenHTML);
        }
        
        ul.appendChild(li);
        totalNodes++;
    });

    container.appendChild(ul);
    document.getElementById('tree-stats').innerText = `Roots: ${rootCards.length} (Tap items to listen)`;
}

// Crea l'elemento grafico del nodo
function createNodeElement(card) {
    let span = document.createElement('span');
    span.className = 'tree-node';
    span.innerHTML = `<span class="node-lang">${getLangFlag(card.lang)}</span> ${card.word} <span class="node-meaning">(${card.meaning})</span>`;
    // Click per sentire l'audio (opzionale)
    span.onclick = () => {
        let s = new SpeechSynthesisUtterance(card.word);
        if(card.lang === 'zh') s.lang = 'zh-CN';
        if(card.lang === 'ja') s.lang = 'ja-JP';
        if(card.lang === 'ar') s.lang = 'ar-SA';
        window.speechSynthesis.speak(s);
    };
    return span;
}

// Funzione ricorsiva per trovare i figli
function findChildrenRecursive(parentId, allCards, unlockedIds) {
    // Trova tutte le carte sbloccate che richiedono QUESTO parentId
    let children = allCards.filter(c => 
        unlockedIds.includes(c.id) && 
        c.requires && 
        c.requires.includes(parentId)
    );

    if (children.length === 0) return null;

    let ul = document.createElement('ul');
    children.forEach(child => {
        let li = document.createElement('li');
        li.appendChild(createNodeElement(child));
        
        // Ricorsione: il figlio ha a sua volta figli?
        let grandChildren = findChildrenRecursive(child.id, allCards, unlockedIds);
        if (grandChildren) {
            li.appendChild(grandChildren);
        }
        ul.appendChild(li);
    });
    return ul;
}

// Helper piccola per le bandiere
function getLangFlag(lang) {
    if(lang === 'zh') return '🇨🇳';
    if(lang === 'ja') return '🇯🇵';
    if(lang === 'ar') return '🇸🇦';
    return lang;
}