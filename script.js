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
        if (!localStorage.getItem('v0.18_clean')) {
            console.log("Pulizia dati v0.18...");
            localStorage.removeItem('go_flashcards_progress'); 
            localStorage.setItem('v0.18_clean', 'true');
            alert("App aggiornata alla v0.18 (IPA Edition)!\nDatabase ampliato con fonetica.");
        }
        loadSettings();
        loadProgress();
        goToHome(); 
    } catch(e) {
        console.error("Errore avvio:", e);
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
    if (typeof decks === 'undefined') return alert("Errore DB");
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
    if (unlockableCards.length > 0) {
        unlockableCards.sort((a, b) => (userProgress[b.id] ? 1 : 0) - (userProgress[a.id] ? 1 : 0));
        let maxNew = Math.min(unlockableCards.length, SESSION_SIZE - 5); 
        if (reviewCards.length < 5) maxNew = SESSION_SIZE;
        deckBuilder = unlockableCards.slice(0, maxNew);
    }
    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && reviewCards.length > 0) deckBuilder = [...deckBuilder, ...reviewCards.slice(0, slotsLeft)];
    if (deckBuilder.length === 0) return alert("Tutto completato!");
    deck = shuffleArray(deckBuilder);
    showScreen('game-screen');
    loadNextCard();
}

function loadNextCard() {
    if (deck.length === 0) {
        if(confirm("Ancora?")) prepareSessionDeck(); else showConfigMenu(); return;
    }
    currentCard = deck[0];
    isFlipped = false;
    const el = document.getElementById('flashcard');
    el.classList.remove('flipped');
    document.getElementById('instructionText').innerText = "Tocca";
    
    // Render immediato
    document.getElementById('langTag').innerText = getLangName(currentCard.lang);
    document.getElementById('wordDisplay').innerText = currentCard.word;
    updateLangStyle(currentCard.lang);
    document.getElementById('backWordDisplay').innerText = currentCard.word;
    
    // FIX UNDEFINED & IPA RESTORE
    document.getElementById('pronunciationDisplay').innerText = currentCard.pronunciation || ""; 
    // RIPRISTINATO IPA: Se c'è ipa nel DB, mostralo tra slash, altrimenti vuoto
    document.getElementById('ipaDisplay').innerText = currentCard.ipa ? `/${currentCard.ipa}/` : ""; 
    
    document.getElementById('meaningDisplay').innerText = currentCard.meaning;
    
    let st = userProgress[currentCard.id];
    let statusLabel = st === 'perfect' ? "RIPASSO" : (st ? "IN CORSO" : "NUOVA");
    let colorStyle = st === 'perfect' ? "color:#2ecc71;" : (st ? "color:#3498db;" : "color:#e67e22;");
    document.getElementById('typeTag').innerHTML = `<span style="${colorStyle} font-weight:bold;">${statusLabel}</span>`;
    
    updateCount();
}

function flipCard(){ if(isFlipped)return; document.getElementById('flashcard').classList.add('flipped'); isFlipped=true; document.getElementById('instructionText').innerText="Esito?"; }
function handleResult(r){ if(!currentCard)return; userProgress[currentCard.id]=r; saveProgress(); if(r==='perfect')deck.shift(); else {let m=deck.shift(); deck.splice(Math.min(deck.length,3),0,m);} loadNextCard(); }

// Frasi
function startSentenceMode() {
    if (typeof sentenceBank === 'undefined') return alert("Errore DB");
    let validSentences = sentenceBank.filter(s => {
        if (!s.requires) return true;
        return s.requires.every(reqId => userProgress[reqId] === 'perfect');
    });
    if (validSentences.length === 0) return alert("Nessuna frase disponibile! Sblocca i fondamentali.");
    sentenceDeck = shuffleArray(validSentences);
    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    loadNextSentence();
}
function loadNextSentence() {
    if (sentenceDeck.length === 0) { if(confirm("Finite! Ancora?")) startSentenceMode(); else goToHome(); return; }
    currentSentence = sentenceDeck[0];
    isSentFlipped = false;
    document.getElementById('sentFlashcard').classList.remove('flipped');
    document.getElementById('s_instructionText').innerText = "Tocca";
    document.getElementById('s_langTag').innerText = getLangNameFull(currentSentence.lang);
    document.getElementById('s_langTag').style.color = getLangColor(currentSentence.lang);
    let dir = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr';
    document.getElementById('s_wordDisplay').innerText = currentSentence.text;
    document.getElementById('s_wordDisplay').style.direction = dir;
    document.getElementById('s_backWordDisplay').innerText = currentSentence.text;
    document.getElementById('s_backWordDisplay').style.direction = dir;
    document.getElementById('s_pronunciationDisplay').innerText = currentSentence.pronunciation || "";
    document.getElementById('s_meaningDisplay').innerText = currentSentence.translation;
    document.getElementById('sentStatus').innerText = "Frasi: " + sentenceDeck.length;
}
function flipSentenceCard(){ if(isSentFlipped)return; document.getElementById('sentFlashcard').classList.add('flipped'); isSentFlipped=true; document.getElementById('s_instructionText').innerText="Esito?"; }
function handleSentenceResult(r){ userSentenceProgress[currentSentence.id]=r; saveProgress(); if(r==='perfect')sentenceDeck.shift(); else {let m=sentenceDeck.shift(); sentenceDeck.push(m);} loadNextSentence(); }

// Utils
function showSentenceProgress(){ const list=document.getElementById('sent-progress-list'); list.innerHTML=""; let s={t:sentenceBank.length,p:0,h:0,l:0}; const d=document.createElement('div'); d.className='stats-dashboard'; d.style.marginTop="0"; sentenceBank.forEach(x=>{ let st=userSentenceProgress[x.id]; let loc=false; if(x.requires&&!x.requires.every(k=>userProgress[k]==='perfect')){loc=true;s.l++;} else if(st==='perfect')s.p++; else if(st)s.h++; if(st||!loc){const i=document.createElement('div'); i.className='prog-item'; if(loc)i.classList.add('status-locked'); let ic=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':'<span class="dot dot-yellow"></span>'); i.innerHTML=`<div class="prog-info"><div class="prog-word" style="color:${getLangColor(x.lang)}">${x.text}</div><div class="prog-meaning">${x.translation}</div></div><div class="prog-status">${ic}</div>`; list.appendChild(i);} }); d.innerHTML=`<div class="stat-box"><span class="stat-num">${s.t}</span><span class="stat-label">Tot</span></div><div class="stat-box"><span class="stat-num" style="color:#2ecc71;">${s.p}</span><span class="stat-label">Perf</span></div><div class="stat-box"><span class="stat-num" style="color:#aaa;">${s.l}</span><span class="stat-label">Bloc</span></div>`; list.parentElement.insertBefore(d,list); showScreen('sent-progress-menu'); }
function closeSentProgress(){ const m=document.getElementById('sent-progress-menu'); const d=m.querySelector('.stats-dashboard'); if(d)d.remove(); showScreen('sentence-screen'); }

// Standard
function showConfigMenu() { previousScreen = 'main-menu'; renderCheckboxes('topic-options', 'lang-options'); showScreen('config-menu'); }
function showSettingsMenu() { previousScreen='main-menu'; updateThemeButtons(); showScreen('settings-menu'); }
function showUnlockMenu() { renderCheckboxes('unlock-topic-options', 'unlock-lang-options'); showScreen('unlock-menu'); }
function performUnlock() { const c=document.getElementById('unlock-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0&&sl.length===0)return alert("Seleziona!"); if(!confirm("Sbloccare tutto?"))return; let cnt=0; Object.keys(decks).forEach(k=>{let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>{ userProgress[x.id]='perfect'; cnt++; });}); saveProgress(); alert(cnt+" carte sbloccate."); showSettingsMenu(); }
function exportData() { let d={f:userProgress,s:userSentenceProgress}; const a=document.createElement('a'); a.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(d)); a.download="backup.json"; document.body.appendChild(a); a.click(); a.remove(); }
function importData(i) { const f=i.files[0]; if(!f)return; const r=new FileReader(); r.onload=e=>{ try{ let d=JSON.parse(e.target.result); if(d.f){userProgress=d.f; userSentenceProgress=d.s||{};} else userProgress=d; saveProgress(); alert("Fatto"); }catch(x){alert("Errore");}}; r.readAsText(f); }
function showResetMenu(){renderCheckboxes('reset-topic-options', 'reset-lang-options'); showScreen('reset-menu');}
function performReset(){ const c=document.getElementById('reset-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0&&sl.length===0)return alert("Seleziona!"); if(!confirm("Reset?"))return; Object.keys(decks).forEach(k=>{ let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>{ delete userProgress[x.id]; delete userSentenceProgress[x.id]; }); }); saveProgress(); alert("Reset OK"); showSettingsMenu(); }
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
function getLangNameFull(c){if(c==='zh')return '🇨🇳 Cinese'; if(c==='ja')return '🇯🇵 Giapponese'; if(c==='ar')return '🇸🇦 Arabo'; return c;}
function getLangName(c){if(c==='zh')return 'Cn'; if(c==='ar')return 'Ar'; if(c==='ja')return 'Jp'; return c;}
function getLangColor(c){if(c==='zh')return '#e74c3c'; if(c==='ar')return '#27ae60'; if(c==='ja')return '#8e44ad'; return '#333';}
function updateLangStyle(c){document.getElementById('langTag').style.color=getLangColor(c);}
function updateCount(){document.getElementById('deckStatus').innerText="Carte: "+deck.length;}
window.speakWordScript=function(){if(!currentCard)return; let t=currentCard.word; if(currentCard.lang==='ar')t=t.replace(/\s/g,''); let s=new SpeechSynthesisUtterance(t); if(currentCard.lang==='zh')s.lang='zh-CN'; if(currentCard.lang==='ja')s.lang='ja-JP'; if(currentCard.lang==='ar')s.lang='ar-SA'; window.speechSynthesis.speak(s);}
