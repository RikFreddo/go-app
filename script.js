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
    loadSettings();
    loadProgress();
    goToHome(); 
};

// --- 1. NAVIGAZIONE ---
function showScreen(screenId) {
    const screens = ['main-menu', 'config-menu', 'settings-menu', 'game-screen', 'progress-menu', 'sent-progress-menu', 'reset-menu', 'sentence-screen', 'unlock-menu'];
    screens.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.style.display = 'none';
    });
    const target = document.getElementById(screenId);
    if(target) {
        target.style.display = 'flex';
        if (screenId === 'main-menu') document.getElementById('topBar').style.display = 'none';
        else document.getElementById('topBar').style.display = 'flex';
    }
}
function goToHome() { showScreen('main-menu'); }
function goBack() { showScreen(previousScreen); }

// --- 2. MODALITÀ FRASI ---
function startSentenceMode() {
    if (typeof sentenceBank === 'undefined') return alert("Database Frasi non trovato.");

    let validSentences = sentenceBank.filter(s => {
        if (!s.requires) return true;
        return s.requires.every(reqId => userProgress[reqId] === 'perfect');
    });

    if (validSentences.length === 0) {
        alert("Nessuna frase disponibile!\nSblocca le parole 'Fondamentali' e 'Società' per vedere le frasi.");
        return;
    }

    sentenceDeck = shuffleArray(validSentences);
    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    setTimeout(() => loadNextSentence(), 50);
}

function loadNextSentence() {
    if (sentenceDeck.length === 0) {
        if(confirm("Frasi disponibili terminate! Vuoi ricominciare?")) startSentenceMode();
        else goToHome();
        return;
    }

    currentSentence = sentenceDeck[0];
    isSentFlipped = false;
    
    const cardEl = document.getElementById('sentFlashcard');
    if(cardEl) cardEl.classList.remove('flipped');
    const ctrls = document.getElementById('sentControls');
    if(ctrls) ctrls.classList.remove('controls-active');
    document.getElementById('s_instructionText').innerText = "Tocca per girare";

    try {
        const langEl = document.getElementById('s_langTag');
        const frontEl = document.getElementById('s_wordDisplay');
        const backEl = document.getElementById('s_backWordDisplay');
        const pronEl = document.getElementById('s_pronunciationDisplay');
        const meanEl = document.getElementById('s_meaningDisplay');
        const statusEl = document.getElementById('sentStatus');

        if(langEl) {
            langEl.innerText = getLangNameFull(currentSentence.lang);
            langEl.style.color = getLangColor(currentSentence.lang);
        }
        
        let dir = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr';
        if(frontEl) { frontEl.innerText = currentSentence.text; frontEl.style.direction = dir; }
        if(backEl) { backEl.innerText = currentSentence.text; backEl.style.direction = dir; }

        if(pronEl) pronEl.innerText = currentSentence.pronunciation;
        if(meanEl) meanEl.innerText = currentSentence.translation;
        if(statusEl) statusEl.innerText = "Frasi nel mazzo: " + sentenceDeck.length;

    } catch(e) { console.error(e); }
}

function flipSentenceCard() {
    if (isSentFlipped) return;
    const cardEl = document.getElementById('sentFlashcard');
    if(cardEl) cardEl.classList.add('flipped');
    isSentFlipped = true;
    const ctrls = document.getElementById('sentControls');
    if(ctrls) ctrls.classList.add('controls-active');
    document.getElementById('s_instructionText').innerText = "Esito?";
}

function handleSentenceResult(result) {
    if (!isSentFlipped) return;
    userSentenceProgress[currentSentence.id] = result;
    saveProgress();
    if (result === 'perfect') sentenceDeck.shift();
    else {
        let missed = sentenceDeck.shift();
        sentenceDeck.push(missed);
    }
    loadNextSentence();
}

window.speakSentenceScript = function() {
    if (!currentSentence) return;
    let t = currentSentence.text;
    if (currentSentence.lang === 'ar') t = t.replace(/\s/g, ''); 
    let s = new SpeechSynthesisUtterance(t);
    if(currentSentence.lang==='zh') s.lang='zh-CN';
    if(currentSentence.lang==='ja') s.lang='ja-JP';
    if(currentSentence.lang==='ar') s.lang='ar-SA';
    window.speechSynthesis.speak(s);
};

// --- NUOVA DASHBOARD FRASI ---
function showSentenceProgress() {
    const list = document.getElementById('sent-progress-list');
    list.innerHTML = "";
    
    // Calcolo Statistiche
    let stats = { total: 0, perfect: 0, hard: 0, locked: 0 };
    
    if (typeof sentenceBank !== 'undefined') {
        stats.total = sentenceBank.length;
        
        // Prima crea la dashboard
        const dashboard = document.createElement('div');
        dashboard.className = 'stats-dashboard';
        dashboard.style.marginTop = "0"; // Override margin per adattarsi al menu
        
        sentenceBank.forEach(s => {
            let status = userSentenceProgress[s.id];
            
            // Controlla se è sbloccata
            let isLocked = false;
            if (s.requires && !s.requires.every(reqId => userProgress[reqId] === 'perfect')) {
                isLocked = true;
                stats.locked++;
            } else if (!status) {
                // Sbloccata ma non fatta
            } else if (status === 'perfect') {
                stats.perfect++;
            } else {
                stats.hard++;
            }

            // Aggiungi alla lista SOLO se ha uno stato o è sbloccata
            if(status || !isLocked) {
                const item = document.createElement('div');
                item.className = 'prog-item';
                if(isLocked) item.classList.add('status-locked');
                
                let icon = isLocked ? '🔒' : (status==='perfect' ? '<span class="dot dot-green"></span>' : (status ? '<span class="dot dot-yellow"></span>' : '<span class="dot dot-grey"></span>'));
                
                item.innerHTML = `
                    <div class="prog-info">
                        <div class="prog-word" style="font-size:1rem; color:${getLangColor(s.lang)}">${s.text}</div>
                        <div class="prog-meaning" style="font-size:0.8rem;">${s.translation}</div>
                    </div>
                    <div class="prog-status">${icon}</div>
                `;
                list.appendChild(item);
            }
        });

        // Inserisci i dati nella dashboard
        dashboard.innerHTML = `
            <div class="stat-box"><span class="stat-num">${stats.total}</span><span class="stat-label">Totali</span></div>
            <div class="stat-box"><span class="stat-num" style="color:#2ecc71;">${stats.perfect}</span><span class="stat-label">Perfette</span></div>
            <div class="stat-box"><span class="stat-num" style="color:#f1c40f;">${stats.hard}</span><span class="stat-label">Difficili</span></div>
            <div class="stat-box"><span class="stat-num" style="color:#aaa;">${stats.locked}</span><span class="stat-label">Bloccate</span></div>
        `;
        
        // Inserisci dashboard PRIMA della lista
        list.parentElement.insertBefore(dashboard, list);
    }

    showScreen('sent-progress-menu');
}
function closeSentProgress() { 
    // Rimuovi la dashboard vecchia se esiste per non duplicarla
    const menu = document.getElementById('sent-progress-menu');
    const oldDash = menu.querySelector('.stats-dashboard');
    if(oldDash) oldDash.remove();
    showScreen('sentence-screen'); 
}

// --- RESTO (SETTINGS, ETC) ---
function showConfigMenu() { previousScreen = 'main-menu'; renderCheckboxes('topic-options', 'lang-options'); showScreen('config-menu'); }
function showSettingsMenu() { 
    if(document.getElementById('sentence-screen').style.display==='flex') previousScreen='sentence-screen';
    else if(document.getElementById('game-screen').style.display==='flex') previousScreen='game-screen';
    else previousScreen='main-menu';
    updateThemeButtons(); showScreen('settings-menu'); 
}
function showUnlockMenu() { renderCheckboxes('unlock-topic-options', 'unlock-lang-options'); showScreen('unlock-menu'); }
function performUnlock() {
    const c=document.getElementById('unlock-menu');
    let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value);
    let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value);
    if(st.length===0&&sl.length===0)return alert("Seleziona!");
    if(!confirm("Sbloccare tutto?"))return;
    let cnt=0;
    Object.keys(decks).forEach(k=>{
        let d=decks[k];
        if(st.includes(d.tags[0])||sl.includes(d.tags[1])) {
            d.cards.forEach(x=>{ userProgress[x.id]='perfect'; cnt++; });
        }
    });
    saveProgress(); alert(cnt+" carte sbloccate."); showSettingsMenu();
}
function exportData() { 
    let d = { flashcards: userProgress, sentences: userSentenceProgress };
    let u = "data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(d));
    let a=document.createElement('a'); a.href=u; a.download="go_backup.json"; document.body.appendChild(a); a.click(); a.remove();
}
function importData(i) {
    const f=i.files[0]; if(!f)return;
    const r=new FileReader();
    r.onload=e=>{
        try {
            let d=JSON.parse(e.target.result);
            if(d.flashcards) { userProgress=d.flashcards; userSentenceProgress=d.sentences||{}; }
            else { userProgress=d; }
            saveProgress(); alert("Fatto!");
        } catch(x){alert("Errore");}
    };
    r.readAsText(f);
}
function showResetMenu(){renderCheckboxes('reset-topic-options', 'reset-lang-options'); showScreen('reset-menu');}
function performReset(){
    const c=document.getElementById('reset-menu');
    let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value);
    let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value);
    if(st.length===0&&sl.length===0)return alert("Seleziona!");
    if(!confirm("Reset?"))return;
    Object.keys(decks).forEach(k=>{
        let d=decks[k];
        if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>{ delete userProgress[x.id]; delete userSentenceProgress[x.id]; });
    });
    saveProgress(); alert("Reset OK"); showSettingsMenu();
}
function renderCheckboxes(tid, lid) {
    const tc=document.getElementById(tid); const lc=document.getElementById(lid);
    if(!tc||!lc)return; tc.innerHTML=""; lc.innerHTML="";
    let t=new Set(); let l=new Set();
    Object.keys(decks).forEach(k=>{let d=decks[k].tags; if(d){t.add(d[0]); l.add(d[1]);}});
    let chk = !tid.includes('reset') ? 'checked' : '';
    t.forEach(v=>tc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="topic" value="${v}" ${chk}>${capitalize(v)}</label>`);
    l.forEach(v=>lc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="lang" value="${v}" ${chk}>${getLangNameFull(v)}</label>`);
}
function startCustomSession() {
    const c = document.getElementById('config-menu');
    let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value);
    let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value);
    if (st.length === 0 || sl.length === 0) return alert("Seleziona opzioni!");
    playDeck = [];
    Object.keys(decks).forEach(k => {
        let d = decks[k];
        if (st.includes(d.tags[0]) && sl.includes(d.tags[1])) playDeck = [...playDeck, ...d.cards];
    });
    if (playDeck.length === 0) return alert("Nessuna carta.");
    prepareSessionDeck();
}
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
    let reviewCards = playDeck.filter(c => userProgress[c.id] === 'perfect');
    shuffleArray(reviewCards);
    let deckBuilder = [];
    let isReviewMode = false;
    if (unlockableCards.length > 0) {
        unlockableCards.sort((a, b) => {
            let statA = userProgress[a.id] ? 1 : 0;
            let statB = userProgress[b.id] ? 1 : 0;
            return statB - statA; 
        });
        let maxNew = Math.min(unlockableCards.length, SESSION_SIZE - 5); 
        if (reviewCards.length < 5) maxNew = SESSION_SIZE;
        deckBuilder = unlockableCards.slice(0, maxNew);
    } else {
        isReviewMode = true;
    }
    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && reviewCards.length > 0) deckBuilder = [...deckBuilder, ...reviewCards.slice(0, slotsLeft)];
    if (deckBuilder.length === 0) return alert("Tutto completato!");
    if (isReviewMode) alert("🎉 Carte nuove finite! Avvio ripasso.");
    deck = shuffleArray(deckBuilder);
    showScreen('game-screen');
    loadNextCard();
}
function loadNextCard() {
    if (deck.length === 0) {
        if(confirm("Ancora?")) prepareSessionDeck();
        else showConfigMenu();
        return;
    }
    currentCard = deck[0];
    isFlipped = false;
    const el = document.getElementById('flashcard');
    el.classList.remove('flipped');
    document.getElementById('controls').classList.remove('controls-active');
    document.getElementById('instructionText').innerText = "Tocca";
    setTimeout(() => {
        document.getElementById('langTag').innerText = getLangName(currentCard.lang);
        document.getElementById('wordDisplay').innerText = currentCard.word;
        updateLangStyle(currentCard.lang);
        document.getElementById('backWordDisplay').innerText = currentCard.word;
        document.getElementById('pronunciationDisplay').innerText = currentCard.pronunciation;
        document.getElementById('ipaDisplay').innerText = currentCard.ipa ? `/${currentCard.ipa}/` : ''; 
        document.getElementById('meaningDisplay').innerText = currentCard.meaning;
        let st = userProgress[currentCard.id];
        let statusLabel = "";
        let colorStyle = "";
        if (st === 'perfect') { statusLabel = "RIPASSO"; colorStyle = "color: #2ecc71; font-weight:bold;"; } 
        else if (st) { statusLabel = "IN CORSO"; colorStyle = "color: #3498db; font-weight:bold;"; } 
        else { statusLabel = "NUOVA"; colorStyle = "color: #e67e22; font-weight:bold;"; }
        let typeText = currentCard.type === 'base' ? 'Base' : 'Composto';
        document.getElementById('typeTag').innerHTML = `<span style="${colorStyle}">${statusLabel}</span> • Liv. ${currentCard.level||1} • ${typeText}`;
    }, 200);
    updateCount();
}
function flipCard(){if(isFlipped)return; document.getElementById('flashcard').classList.add('flipped'); isFlipped=true; document.getElementById('controls').classList.add('controls-active'); document.getElementById('instructionText').innerText="Esito?";}
function handleResult(r){if(!isFlipped)return; userProgress[currentCard.id]=r; saveProgress(); if(r==='perfect')deck.shift(); else {let m=deck.shift(); deck.splice(Math.min(deck.length,Math.floor(Math.random()*5)+3),0,m);} loadNextCard();}
function showGlobalProgress(){let td=playDeck.length>0?playDeck:getAllCards(); let s={t:0,p:0,l:0,loc:0}; const lc=document.getElementById('progress-list'); lc.innerHTML=""; s.t=td.length; td.forEach(c=>{let loc=false; if(c.requires){let r=Array.isArray(c.requires)?c.requires:[c.requires]; if(!r.every(x=>userProgress[x]==='perfect'))loc=true;} let st=userProgress[c.id]; if(loc)s.loc++; else if(st==='perfect')s.p++; else if(st)s.l++; let i=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':(st?'<span class="dot dot-blue"></span>':'<span class="dot dot-grey"></span>')); lc.innerHTML+=`<div class="prog-item ${loc?'status-locked':''}"><div class="prog-info"><div class="prog-word" style="color:${getLangColor(c.lang)}">${c.word}</div><div class="prog-meaning">${c.meaning}</div></div><div class="prog-status">${i}</div></div>`;}); document.getElementById('stat-total').innerText=s.t; document.getElementById('stat-perfect').innerText=s.p; document.getElementById('stat-learning').innerText=s.l; document.getElementById('stat-locked').innerText=s.loc; showScreen('progress-menu');}
function closeProgress(){if(playDeck.length>0)showScreen('game-screen'); else showConfigMenu();}
function getAllCards(){let a=[]; Object.keys(decks).forEach(k=>a=[...a,...decks[k].cards]); return a;}
function setTheme(m){localStorage.setItem('go_theme_mode',m); applyTheme(m); updateThemeButtons();}
function applyTheme(m){const b=document.body; if(m==='auto'){if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)b.classList.add('dark-mode');else b.classList.remove('dark-mode');}else if(m==='dark')b.classList.add('dark-mode');else b.classList.remove('dark-mode');}
function updateThemeButtons(){const m=localStorage.getItem('go_theme_mode')||'auto'; ['light','dark','auto'].forEach(k=>{const b=document.getElementById('theme-'+k); if(b)(m===k)?b.classList.add('active'):b.classList.remove('active');});}
function loadSettings(){const m=localStorage.getItem('go_theme_mode')||'auto'; applyTheme(m); window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{if(localStorage.getItem('go_theme_mode')==='auto')applyTheme('auto');});}
function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}
function getLangNameFull(c){if(c==='zh')return '🇨🇳 Cinese'; if(c==='ja')return '🇯🇵 Giapponese'; if(c==='ar')return '🇸🇦 Arabo'; return c;}
function getLangName(c){if(c==='zh')return 'Cn'; if(c==='ar')return 'Ar'; if(c==='ja')return 'Jp'; return c;}
function getLangColor(c){if(c==='zh')return '#e74c3c'; if(c==='ar')return '#27ae60'; if(c==='ja')return '#8e44ad'; return '#333';}
function updateLangStyle(c){document.getElementById('langTag').style.color=getLangColor(c);}
function updateCount(){document.getElementById('deckStatus').innerText="Carte: "+deck.length;}
window.speakWordScript=function(){if(!currentCard)return; let t=currentCard.word; if(currentCard.lang==='ar')t=t.replace(/\s/g,''); let s=new SpeechSynthesisUtterance(t); if(currentCard.lang==='zh')s.lang='zh-CN'; if(currentCard.lang==='ja')s.lang='ja-JP'; if(currentCard.lang==='ar')s.lang='ar-SA'; window.speechSynthesis.speak(s);}
