// ==========================================
// GO SCRIPT v0.29 - FIXED NAVIGATION
// ==========================================

let playDeck = [];
let currentCard = null;
let deck = [];
let userProgress = {}; 
let userSentenceProgress = {}; 
let previousScreen = 'main-menu';
let appMode = 'flashcards'; // Variabile per ricordare se siamo in modalità Albero o Flashcard

let sentenceDeck = [];
let currentSentence = null;
let isSentFlipped = false;

window.onload = function() {
    try {
        loadSettings();
        loadProgress();
        goToHome(); 
    } catch(e) { console.error(e); }
};

function showScreen(screenId) {
    // Nasconde tutte le schermate possibili
    const screens = ['main-menu', 'config-menu', 'settings-menu', 'game-screen', 'progress-menu', 'sent-progress-menu', 'reset-menu', 'sentence-screen', 'unlock-menu', 'tree-screen', 'cheat-menu'];
    screens.forEach(s => { const el = document.getElementById(s); if(el) el.style.display = 'none'; });
    
    // Mostra quella richiesta
    const target = document.getElementById(screenId);
    if(target) {
        target.style.display = 'flex';
        // Gestione della barra in alto
        if (screenId === 'main-menu') document.getElementById('topBar').style.display = 'none';
        else document.getElementById('topBar').style.display = 'flex';
    }
}

function goToHome() { showScreen('main-menu'); }
function goBack() { showScreen(previousScreen); }

// ==========================================
// MENU E AVVIO
// ==========================================

function showConfigMenu() { 
    appMode = 'flashcards'; // Resetta su flashcards
    renderCheckboxes('topic-options', 'lang-options');
    document.getElementById('config-title').innerText = "Start Session";
    document.getElementById('start-btn').innerText = "START";
    document.getElementById('start-btn').style.backgroundColor = ""; 
    showScreen('config-menu'); 
}

function showTreeMode() {
    appMode = 'tree'; // Imposta su albero
    renderCheckboxes('topic-options', 'lang-options');
    document.getElementById('config-title').innerText = "View Knowledge Tree";
    document.getElementById('start-btn').innerText = "🌳 SHOW TREE";
    document.getElementById('start-btn').style.backgroundColor = "#27ae60";
    showScreen('config-menu');
}

function startCustomSession() {
    if (typeof decks === 'undefined') return alert("Database Error");
    const c = document.getElementById('config-menu');
    let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value);
    let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value);
    
    // --- MODALITÀ ALBERO ---
    if (appMode === 'tree') {
        if (sl.length === 0) return alert("Please select a language!");
        let selectedLang = sl[0]; // Prende la prima lingua
        document.getElementById('config-menu').style.display = 'none'; // Chiude config
        document.getElementById('tree-screen').style.display = 'flex'; // Apre Albero
        renderTree(selectedLang);
        return;
    }

    // --- MODALITÀ FLASHCARD ---
    if (st.length === 0 || sl.length === 0) return alert("Please select options!");
    playDeck = [];
    Object.keys(decks).forEach(k => {
        let d = decks[k];
        if (st.includes(d.tags[0]) && sl.includes(d.tags[1])) playDeck = [...playDeck, ...d.cards];
    });
    if (playDeck.length === 0) return alert("No cards found.");
    prepareSessionDeck();
}

// ==========================================
// FLASHCARD ENGINE
// ==========================================

function prepareSessionDeck() {
    const SESSION_SIZE = 20; 
    let unlockableCards = playDeck.filter(c => {
        if (userProgress[c.id] === 'perfect') return false; 
        if (c.requires) {
            let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
            if (!reqs.every(reqId => userProgress[reqId] === 'perfect')) return false; 
        }
        return true;
    });
    let learningCards = unlockableCards.filter(c => userProgress[c.id]); 
    let newCards = unlockableCards.filter(c => !userProgress[c.id]);     
    let reviewCards = playDeck.filter(c => userProgress[c.id] === 'perfect');
    
    shuffleArray(learningCards); shuffleArray(newCards); shuffleArray(reviewCards);
    
    let candidates = [...learningCards, ...newCards];
    let deckBuilder = [];
    if (candidates.length > 0) deckBuilder = candidates.slice(0, Math.min(candidates.length, SESSION_SIZE - 5));
    
    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && reviewCards.length > 0) deckBuilder = [...deckBuilder, ...reviewCards.slice(0, slotsLeft)];
    
    if (deckBuilder.length === 0) return alert("All completed! Reset or add topics.");
    deck = shuffleArray(deckBuilder);
    showScreen('game-screen');
    loadNextCard();
}

function loadNextCard() {
    if (deck.length === 0) { if(confirm("Finished! Another?")) prepareSessionDeck(); else showConfigMenu(); return; }
    currentCard = deck[0]; isFlipped = false;
    const el = document.getElementById('flashcard'); el.style.transition = 'none'; el.classList.remove('flipped'); void el.offsetWidth;
    document.getElementById('instructionText').innerText = "Tap card to flip";
    document.getElementById('langTag').innerText = getLangName(currentCard.lang);
    document.getElementById('wordDisplay').innerText = currentCard.word;
    updateLangStyle(currentCard.lang);
    document.getElementById('backWordDisplay').innerText = currentCard.word;
    document.getElementById('pronunciationDisplay').innerText = currentCard.pronunciation || ""; 
    document.getElementById('ipaDisplay').innerText = currentCard.ipa ? `/${currentCard.ipa}/` : ""; 
    document.getElementById('meaningDisplay').innerText = currentCard.meaning;
    let st = userProgress[currentCard.id];
    let statusLabel = st === 'perfect' ? "MASTERED" : (st ? "LEARNING" : "NEW");
    let colorStyle = st === 'perfect' ? "color:#2ecc71;" : (st ? "color:#3498db;" : "color:#e67e22;");
    document.getElementById('typeTag').innerHTML = `<span style="${colorStyle} font-weight:bold;">${statusLabel}</span>`;
    updateCount();
    setTimeout(() => { el.style.transition = ''; }, 50);
}
function flipCard(){ if(isFlipped)return; document.getElementById('flashcard').classList.add('flipped'); isFlipped=true; document.getElementById('instructionText').innerText="How well did you know it?"; }
function handleResult(r) {
    if (!currentCard) return; userProgress[currentCard.id] = r; saveProgress();
    if (r === 'perfect') { deck.shift(); } else { let m = deck.shift(); deck.splice(Math.min(deck.length, 3), 0, m); }
    loadNextCard();
}

// ==========================================
// FUNZIONI ALBERO (CON FIX PER I PALLINI VUOTI)
// ==========================================

function openTreeOverlay() {
    if(!currentCard) return;
    document.getElementById('tree-screen').style.display = 'flex';
    renderTree(currentCard.lang); 
}

function renderTree(filterLang) {
    const container = document.getElementById('tree-container');
    container.innerHTML = "";
    
    // Aggiorna bottoni
    document.querySelectorAll('#tree-screen .filter-btn').forEach(b => b.classList.remove('active'));
    let btnId = 'btn-tree-' + filterLang;
    if(document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');

    const allCards = getAllCards();
    const unlockedIds = Object.keys(userProgress).filter(id => userProgress[id] === 'perfect');

    // Filtra le radici
    let rootCards = allCards.filter(c => {
        if (c.lang !== filterLang) return false;
        
        // MOSTRA TUTTO! (Ho rimosso il filtro che nascondeva le carte bloccate)
        // Se vuoi nascondere i bloccati, riabilita la riga sotto:
        // if (!unlockedIds.includes(c.id)) return false; 
        
        if (!c.requires) return true; 
        
        // Fix per array/stringhe
        let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
        
        // È una radice visiva se i genitori non sono stati sbloccati
        // (Così vedi la carta anche se il "padre" non c'è ancora)
        let parentsUnlocked = reqs.some(req => unlockedIds.includes(req));
        return !parentsUnlocked; 
    });

    rootCards.sort((a,b) => a.word.localeCompare(b.word));

    const ul = document.createElement('ul');
    ul.className = 'tree';

    if (rootCards.length === 0) {
        container.innerHTML = `<p style="text-align:center; margin-top:20px; color:#999;">No cards found.</p>`;
        return;
    }

    rootCards.forEach(root => {
        let li = document.createElement('li');
        li.appendChild(createNodeElement(root));
        let childrenHTML = findChildrenRecursive(root.id, allCards);
        if (childrenHTML) li.appendChild(childrenHTML);
        ul.appendChild(li);
    });

    container.appendChild(ul);
    document.getElementById('tree-stats').innerText = `Roots: ${rootCards.length}`;
}

function createNodeElement(card) {
    let span = document.createElement('span');
    span.className = 'tree-node';
    if (card.grammar) span.classList.add('g-' + card.grammar);
    
    // Mostra tratteggiato se non è "Mastered"
    if (userProgress[card.id] !== 'perfect') span.classList.add('node-locked');

    span.innerHTML = `<span class="node-lang">${getLangFlag(card.lang)}</span> ${card.word} <span class="node-meaning">(${card.meaning})</span>`;
    
    // Audio solo al click
    span.onclick = () => {
        let s = new SpeechSynthesisUtterance(card.word);
        if(card.lang === 'zh') s.lang = 'zh-CN';
        if(card.lang === 'ja') s.lang = 'ja-JP';
        if(card.lang === 'ar') s.lang = 'ar-SA';
        window.speechSynthesis.speak(s);
    };
    return span;
}

function findChildrenRecursive(parentId, allCards) {
    let children = allCards.filter(c => {
        if (!c.requires) return false;
        let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
        return reqs.includes(parentId);
    });

    if (children.length === 0) return null;

    let ul = document.createElement('ul');
    children.forEach(child => {
        let li = document.createElement('li');
        li.appendChild(createNodeElement(child));
        let grandChildren = findChildrenRecursive(child.id, allCards);
        if (grandChildren) li.appendChild(grandChildren);
        ul.appendChild(li);
    });
    return ul;
}

// ==========================================
// FIX: FUNZIONE CHIUSURA INTELLIGENTE
// ==========================================
function closeMenu(id) {
    document.getElementById(id).style.display = 'none';
    
    // SE STIAMO CHIUDENDO L'ALBERO ('tree-screen')
    if (id === 'tree-screen') {
        // Controlla se sotto c'è il gioco aperto
        const gameScreen = document.getElementById('game-screen');
        const isGameRunning = gameScreen && gameScreen.style.display === 'flex';
        
        if (!isGameRunning) {
            // Se il gioco NON c'è (quindi veniamo dal Menu), TORNA ALLA HOME
            showScreen('main-menu');
            appMode = 'flashcards'; // Reset modalità
        }
        // Se il gioco c'è, non fa nulla (così vedi il gioco sotto)
    }
}

// UTILS
function showSettingsMenu() { previousScreen='main-menu'; updateThemeButtons(); showScreen('settings-menu'); }
function showSentenceProgress(){ const list=document.getElementById('sent-progress-list'); list.innerHTML=""; let s={t:sentenceBank.length,p:0,h:0,l:0}; const d=document.createElement('div'); d.className='stats-dashboard'; d.style.marginTop="0"; sentenceBank.forEach(x=>{ let st=userSentenceProgress[x.id]; let loc=false; if(x.requires&&!x.requires.every(k=>userProgress[k]==='perfect')){loc=true;s.l++;} else if(st==='perfect')s.p++; else if(st)s.h++; if(st||!loc){const i=document.createElement('div'); i.className='prog-item'; if(loc)i.classList.add('status-locked'); let ic=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':'<span class="dot dot-yellow"></span>'); i.innerHTML=`<div class="prog-info"><div class="prog-word" style="color:${getLangColor(x.lang)}">${x.text}</div><div class="prog-meaning">${x.translation}</div></div><div class="prog-status">${ic}</div>`; list.appendChild(i);} }); d.innerHTML=`<div class="stat-box"><span class="stat-num">${s.t}</span><span class="stat-label">Tot</span></div><div class="stat-box"><span class="stat-num" style="color:#2ecc71;">${s.p}</span><span class="stat-label">Perf</span></div><div class="stat-box"><span class="stat-num" style="color:#f1c40f;">${s.h}</span><span class="stat-label">Hard</span></div><div class="stat-box"><span class="stat-num" style="color:#aaa;">${s.l}</span><span class="stat-label">Lock</span></div>`; list.parentElement.insertBefore(d,list); showScreen('sent-progress-menu'); }
function closeSentProgress(){ const m=document.getElementById('sent-progress-menu'); const d=m.querySelector('.stats-dashboard'); if(d)d.remove(); showScreen('sentence-screen'); }
function startSentenceMode() { if (typeof sentenceBank === 'undefined') return alert("Database Error"); let validSentences = sentenceBank.filter(s => { if (!s.requires) return true; return s.requires.every(reqId => userProgress[reqId] === 'perfect'); }); if (validSentences.length === 0) return alert("No sentences available! Unlock fundamental words first."); sentenceDeck = shuffleArray(validSentences); previousScreen = 'main-menu'; showScreen('sentence-screen'); loadNextSentence(); }
function loadNextSentence() { if (sentenceDeck.length === 0) { if(confirm("Sentences finished! Restart?")) startSentenceMode(); else goToHome(); return; } currentSentence = sentenceDeck[0]; isSentFlipped = false; const cardEl = document.getElementById('sentFlashcard'); cardEl.style.transition = 'none'; cardEl.classList.remove('flipped'); void cardEl.offsetWidth; document.getElementById('s_instructionText').innerText = "Tap card to translate"; document.getElementById('s_langTag').innerText = getLangNameFull(currentSentence.lang); document.getElementById('s_langTag').style.color = getLangColor(currentSentence.lang); let dir = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr'; document.getElementById('s_wordDisplay').innerText = currentSentence.text; document.getElementById('s_wordDisplay').style.direction = dir; document.getElementById('s_backWordDisplay').innerText = currentSentence.text; document.getElementById('s_backWordDisplay').style.direction = dir; document.getElementById('s_pronunciationDisplay').innerText = currentSentence.pronunciation || ""; document.getElementById('s_meaningDisplay').innerText = currentSentence.translation; document.getElementById('sentStatus').innerText = "Sentences: " + sentenceDeck.length; setTimeout(() => { cardEl.style.transition = ''; }, 50); }
function flipSentenceCard(){ if(isSentFlipped)return; document.getElementById('sentFlashcard').classList.add('flipped'); isSentFlipped=true; document.getElementById('s_instructionText').innerText="Did you understand?"; }
function handleSentenceResult(r){ userSentenceProgress[currentSentence.id]=r; saveProgress(); if(r==='perfect')sentenceDeck.shift(); else {let m=sentenceDeck.shift(); sentenceDeck.push(m);} loadNextSentence(); }
function showCheatMenu() { renderCheckboxes('cheat-topic-options', 'cheat-lang-options'); showScreen('cheat-menu'); }
function performUnlock() { const c = document.getElementById('cheat-menu'); let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value); let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value); if (st.length === 0 && sl.length === 0) return alert("Select items!"); if (!confirm("Unlock all selected?")) return; let cnt = 0; Object.keys(decks).forEach(k => { let d = decks[k]; if (st.includes(d.tags[0]) || sl.includes(d.tags[1])) { d.cards.forEach(x => { userProgress[x.id] = 'perfect'; cnt++; }); } }); saveProgress(); alert(cnt + " cards unlocked."); closeMenu('cheat-menu'); showSettingsMenu(); }
function exportData() { let d={f:userProgress,s:userSentenceProgress}; const a=document.createElement('a'); a.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(d)); a.download="go_backup.json"; document.body.appendChild(a); a.click(); a.remove(); }
function importData(i) { const f=i.files[0]; if(!f)return; const r=new FileReader(); r.onload=e=>{ try{ let d=JSON.parse(e.target.result); if(d.f){userProgress=d.f; userSentenceProgress=d.s||{};} else userProgress=d; saveProgress(); alert("Import Successful"); }catch(x){alert("Import Error");}}; r.readAsText(f); }
function showResetMenu(){renderCheckboxes('reset-topic-options', 'reset-lang-options'); showScreen('reset-menu');}
function performReset(){ const c=document.getElementById('reset-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0&&sl.length===0)return alert("Select items!"); if(!confirm("Reset progress?"))return; Object.keys(decks).forEach(k=>{ let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>{ delete userProgress[x.id]; delete userSentenceProgress[x.id]; }); }); saveProgress(); alert("Reset Complete"); showSettingsMenu(); }
function renderCheckboxes(tid, lid) { const tc=document.getElementById(tid); const lc=document.getElementById(lid); if(!tc||!lc)return; tc.innerHTML=""; lc.innerHTML=""; let t=new Set(); let l=new Set(); Object.keys(decks).forEach(k=>{let d=decks[k].tags; if(d){t.add(d[0]); l.add(d[1]);}}); let chk = !tid.includes('reset') ? 'checked' : ''; t.forEach(v=>tc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="topic" value="${v}" ${chk}>${capitalize(v)}</label>`); l.forEach(v=>lc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="lang" value="${v}" ${chk}>${getLangNameFull(v)}</label>`); }
function showGlobalProgress(filterLang='all'){ document.querySelectorAll('#progress-menu .filter-btn').forEach(b=>b.classList.remove('active')); let btnId='btn-stats-'+filterLang; if(document.getElementById(btnId))document.getElementById(btnId).classList.add('active'); let allCards=getAllCards(); let displayCards=allCards; if(filterLang!=='all'){displayCards=allCards.filter(c=>c.lang===filterLang);} displayCards.sort((a,b)=>{if(a.lang!==b.lang)return a.lang.localeCompare(b.lang); return a.word.localeCompare(b.word);}); let stats={t:displayCards.length,p:0,l:0,loc:0}; const list=document.getElementById('progress-list'); list.innerHTML=""; displayCards.forEach(c=>{ let parentsOk=true; if(c.requires){parentsOk=c.requires.every(reqId=>userProgress[reqId]==='perfect');} let st=userProgress[c.id]; let isLocked=!parentsOk; if(isLocked)stats.loc++; else if(st==='perfect')stats.p++; else if(st)stats.l++; let iconHtml=''; let itemClass='prog-item'; if(isLocked){iconHtml='🔒'; itemClass+=' status-locked';} else if(st==='perfect'){iconHtml='<span class="dot dot-green"></span>';} else if(st){iconHtml='<span class="dot dot-yellow"></span>';} else {iconHtml='<span class="dot dot-grey"></span>';} let div=document.createElement('div'); div.className=itemClass; div.innerHTML=`<div class="prog-info"><div class="prog-word" style="color:${getLangColor(c.lang)}">${c.word} <span style="font-size:0.7em; opacity:0.7;">${isLocked?'':(c.pronunciation||'')}</span></div><div class="prog-meaning">${c.meaning}</div></div><div class="prog-status">${iconHtml}</div>`; if(!isLocked){div.onclick=()=>{let s=new SpeechSynthesisUtterance(c.word); if(c.lang==='zh')s.lang='zh-CN'; if(c.lang==='ja')s.lang='ja-JP'; if(c.lang==='ar')s.lang='ar-SA'; window.speechSynthesis.speak(s);};} list.appendChild(div);}); document.getElementById('stat-total').innerText=stats.t; document.getElementById('stat-perfect').innerText=stats.p; document.getElementById('stat-learning').innerText=stats.l; document.getElementById('stat-locked').innerText=stats.loc; showScreen('progress-menu');}
function closeProgress(){ showScreen('main-menu'); }
function getAllCards(){let a=[]; Object.keys(decks).forEach(k=>a=[...a,...decks[k].cards]); return a;}
function saveProgress(){localStorage.setItem('go_flashcards_progress',JSON.stringify(userProgress)); localStorage.setItem('go_sentences_progress',JSON.stringify(userSentenceProgress));}
function loadProgress(){const d=localStorage.getItem('go_flashcards_progress'); if(d)userProgress=JSON.parse(d); const s=localStorage.getItem('go_sentences_progress'); if(s)userSentenceProgress=JSON.parse(s);}
function setTheme(m){localStorage.setItem('go_theme_mode',m); applyTheme(m); updateThemeButtons();}
function applyTheme(m){const b=document.body; if(m==='auto'){if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)b.classList.add('dark-mode');else b.classList.remove('dark-mode');}else if(m==='dark')b.classList.add('dark-mode');else b.classList.remove('dark-mode');}
function updateThemeButtons(){const m=localStorage.getItem('go_theme_mode')||'auto'; ['light','dark','auto'].forEach(k=>{const b=document.getElementById('theme-'+k); if(b)(m===k)?b.classList.add('active'):b.classList.remove('active');});}
function loadSettings(){const m=localStorage.getItem('go_theme_mode')||'auto'; applyTheme(m); window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{if(localStorage.getItem('go_theme_mode')==='auto')applyTheme('auto');});}
function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}
function getLangNameFull(c){if(c==='zh')return '🇨🇳 Chinese'; if(c==='ja')return '🇯🇵 Japanese'; if(c==='ar')return '🇸🇦 Arabic'; return c;}
function getLangName(c){if(c==='zh')return 'Cn'; if(c==='ar')return 'Ar'; if(c==='ja')return 'Jp'; return c;}
function getLangFlag(lang) { if(lang === 'zh') return '🇨🇳'; if(lang === 'ja') return '🇯🇵'; if(lang === 'ar') return '🇸🇦'; return lang; }
function getLangColor(c){if(c==='zh')return '#e74c3c'; if(c==='ar')return '#27ae60'; if(c==='ja')return '#8e44ad'; return '#333';}
function updateLangStyle(c){document.getElementById('langTag').style.color=getLangColor(c);}
function updateCount(){document.getElementById('deckStatus').innerText="Cards: "+deck.length;}
window.speakWordScript=function(){ const sentScreen=document.getElementById('sentence-screen'); if(sentScreen&&sentScreen.style.display==='flex'){if(!currentSentence)return; let t=currentSentence.text; let s=new SpeechSynthesisUtterance(t); if(currentSentence.lang==='zh')s.lang='zh-CN'; else if(currentSentence.lang==='ja')s.lang='ja-JP'; else if(currentSentence.lang==='ar')s.lang='ar-SA'; else s.lang='en-US'; window.speechSynthesis.speak(s); return;} if(!currentCard)return; let t=currentCard.word; if(currentCard.lang==='ar')t=t.replace(/\s/g,''); let s=new SpeechSynthesisUtterance(t); if(currentCard.lang==='zh')s.lang='zh-CN'; else if(currentCard.lang==='ja')s.lang='ja-JP'; else if(currentCard.lang==='ar')s.lang='ar-SA'; window.speechSynthesis.speak(s);}