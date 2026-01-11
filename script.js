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

// --- 2. MODALITÀ FRASI (BANK MODE) ---
function startSentenceMode() {
    // Controllo sicurezza: database.js è caricato?
    if (typeof sentenceBank === 'undefined') {
        alert("Errore: Il database delle frasi non è caricato. Ricarica la pagina.");
        return;
    }

    let validSentences = sentenceBank.filter(s => {
        if (!s.requires) return true;
        // Controlla se l'utente ha sbloccato tutte le parole necessarie
        return s.requires.every(reqId => userProgress[reqId] === 'perfect');
    });

    if (validSentences.length === 0) {
        alert("Nessuna frase disponibile!\n\nDevi sbloccare ('Perfect') le parole usate nelle frasi.\nVai su 'Flashcards' o usa 'Sblocca Tutto' nelle impostazioni.");
        return;
    }

    sentenceDeck = shuffleArray(validSentences);
    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    
    // Piccolo ritardo per assicurarsi che la pagina sia renderizzata prima di scrivere
    setTimeout(() => {
        loadNextSentence();
    }, 50);
}

function loadNextSentence() {
    if (sentenceDeck.length === 0) {
        if(confirm("Hai completato tutte le frasi disponibili! Vuoi ricominciare?")) {
            startSentenceMode();
        } else {
            goToHome();
        }
        return;
    }

    currentSentence = sentenceDeck[0];
    isSentFlipped = false;
    
    // UI Reset
    const cardEl = document.getElementById('sentFlashcard');
    if(cardEl) cardEl.classList.remove('flipped');
    
    const ctrls = document.getElementById('sentControls');
    if(ctrls) ctrls.classList.remove('controls-active');
    
    document.getElementById('s_instructionText').innerText = "Tocca per girare";

    // Popola dati con controllo esistenza elementi
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
        
        if(frontEl) {
            frontEl.innerText = currentSentence.text;
            frontEl.style.direction = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr';
        }

        if(backEl) {
            backEl.innerText = currentSentence.text;
            backEl.style.direction = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr';
        }

        if(pronEl) pronEl.innerText = currentSentence.pronunciation;
        if(meanEl) meanEl.innerText = currentSentence.translation;
        if(statusEl) statusEl.innerText = "Frasi: " + sentenceDeck.length;

    } catch(e) {
        console.error("Errore nel caricamento frase: ", e);
        alert("Si è verificato un errore nel mostrare la frase.");
    }
}

function flipSentenceCard() {
    if (isSentFlipped) return;
    const cardEl = document.getElementById('sentFlashcard');
    if(cardEl) cardEl.classList.add('flipped');
    
    isSentFlipped = true;
    
    const ctrls = document.getElementById('sentControls');
    if(ctrls) ctrls.classList.add('controls-active');
    
    document.getElementById('s_instructionText').innerText = "Come è andata?";
}

function handleSentenceResult(result) {
    if (!isSentFlipped) return;
    
    userSentenceProgress[currentSentence.id] = result;
    saveProgress();

    if (result === 'perfect') {
        sentenceDeck.shift();
    } else {
        let missed = sentenceDeck.shift();
        sentenceDeck.push(missed);
    }
    loadNextSentence();
}

// Audio Frasi
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

// Statistiche Frasi
function showSentenceProgress() {
    const list = document.getElementById('sent-progress-list');
    list.innerHTML = "";
    let count = 0;

    // Cerca nei Sentence Bank le frasi fatte
    if (typeof sentenceBank !== 'undefined') {
        sentenceBank.forEach(s => {
            let status = userSentenceProgress[s.id];
            if(status) {
                count++;
                const item = document.createElement('div');
                item.className = 'prog-item';
                let icon = (status==='perfect') ? '<span class="dot dot-green"></span>' : (status==='hard' ? '<span class="dot dot-yellow"></span>' : '<span class="dot dot-red"></span>');
                
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
    }

    if(count === 0) list.innerHTML = "<p style='color:#666'>Nessuna frase completata.</p>";
    showScreen('sent-progress-menu');
}
function closeSentProgress() { showScreen('sentence-screen'); }


// --- RESTO (SETTINGS, UNLOCK, FLASHCARD) ---
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
function startCustomSession(){const c=document.getElementById('config-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0||sl.length===0)return alert("Opzioni?"); playDeck=[]; Object.keys(decks).forEach(k=>{let d=decks[k]; if(st.includes(d.tags[0])&&sl.includes(d.tags[1])) playDeck=[...playDeck,...d.cards]}); if(playDeck.length===0)return alert("Nessuna carta"); prepareSessionDeck();}
function prepareSessionDeck(){let newC=playDeck.filter(c=>{if(userProgress[c.id]==='perfect')return false; if(c.requires){let r=Array.isArray(c.requires)?c.requires:[c.requires]; if(!r.every(x=>userProgress[x]==='perfect'))return false;} return true;}); let doneC=playDeck.filter(c=>userProgress[c.id]==='perfect'); shuffleArray(doneC); let db=[]; if(newC.length>0){let m=Math.min(newC.length,15); if(doneC.length<5)m=20; db=newC.slice(0,m);} let slots=20-db.length; if(slots>0&&doneC.length>0) db=[...db,...doneC.slice(0,slots)]; if(db.length===0)return alert("Finito!"); deck=shuffleArray(db); showScreen('game-screen'); loadNextCard();}
function loadNextCard(){if(deck.length===0){if(confirm("Ancora?"))prepareSessionDeck();else showConfigMenu(); return;} currentCard=deck[0]; isFlipped=false; const el=document.getElementById('flashcard'); el.classList.remove('flipped'); document.getElementById('controls').classList.remove('controls-active'); document.getElementById('instructionText').innerText="Tocca"; setTimeout(()=>{document.getElementById('langTag').innerText=getLangName(currentCard.lang); document.getElementById('wordDisplay').innerText=currentCard.word; updateLangStyle(currentCard.lang); document.getElementById('backWordDisplay').innerText=currentCard.word; document.getElementById('pronunciationDisplay').innerText=currentCard.pronunciation; document.getElementById('ipaDisplay').innerText=currentCard.ipa?`/${currentCard.ipa}/`:''; document.getElementById('meaningDisplay').innerText=currentCard.meaning; let st=userProgress[currentCard.id]; let t=currentCard.type==='base'?'Base':'Composto'; if(st==='perfect')t="RIPASSO • "+t; else if(st)t="IN CORSO ("+st+") • "+t; else t="NUOVA • "+t; document.getElementById('typeTag').innerText=`Liv. ${currentCard.level||1} • ${t}`;},200); updateCount();}
function flipCard(){if(isFlipped)return; document.getElementById('flashcard').classList.add('flipped'); isFlipped=true; document.getElementById('controls').classList.add('controls-active'); document.getElementById('instructionText').innerText="Esito?";}
function handleResult(r){if(!isFlipped)return; userProgress[currentCard.id]=r; saveProgress(); if(r==='perfect')deck.shift(); else {let m=deck.shift(); deck.splice(Math.min(deck.length,Math.floor(Math.random()*5)+3),0,m);} loadNextCard();}
function showGlobalProgress(){let td=playDeck.length>0?playDeck:getAllCards(); let s={t:0,p:0,l:0,loc:0}; const lc=document.getElementById('progress-list'); lc.innerHTML=""; s.t=td.length; td.forEach(c=>{let loc=false; if(c.requires){let r=Array.isArray(c.requires)?c.requires:[c.requires]; if(!r.every(x=>userProgress[x]==='perfect'))loc=true;} let st=userProgress[c.id]; if(loc)s.loc++; else if(st==='perfect')s.p++; else if(st)s.l++; let i=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':(st?'<span class="dot dot-blue"></span>':'<span class="dot dot-grey"></span>')); lc.innerHTML+=`<div class="prog-item ${loc?'status-locked':''}"><div class="prog-info"><div class="prog-word" style="color:${getLangColor(c.lang)}">${c.word}</div><div class="prog-meaning">${c.meaning}</div></div><div class="prog-status">${i}</div></div>`;}); document.getElementById('stat-total').innerText=s.t; document.getElementById('stat-perfect').innerText=s.p; document.getElementById('stat-learning').innerText=s.l; document.getElementById('stat-locked').innerText=s.loc; showScreen('progress-menu');}
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
function getLangNameFull(c){if(c==='zh')return '🇨🇳 Cinese'; if(c==='ja')return '🇯🇵 Giapponese'; if(c==='ar')return '🇸🇦 Arabo'; return c;}
function getLangName(c){if(c==='zh')return 'Cn'; if(c==='ar')return 'Ar'; if(c==='ja')return 'Jp'; return c;}
function getLangColor(c){if(c==='zh')return '#e74c3c'; if(c==='ar')return '#27ae60'; if(c==='ja')return '#8e44ad'; return '#333';}
function updateLangStyle(c){document.getElementById('langTag').style.color=getLangColor(c);}
function updateCount(){document.getElementById('deckStatus').innerText="Carte: "+deck.length;}
window.speakWordScript=function(){if(!currentCard)return; let t=currentCard.word; if(currentCard.lang==='ar')t=t.replace(/\s/g,''); let s=new SpeechSynthesisUtterance(t); if(currentCard.lang==='zh')s.lang='zh-CN'; if(currentCard.lang==='ja')s.lang='ja-JP'; if(currentCard.lang==='ar')s.lang='ar-SA'; window.speechSynthesis.speak(s);}
