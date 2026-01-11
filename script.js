// Variabili globali
let playDeck = [];
let currentCard = null;
let deck = [];
let userProgress = {}; 
let previousScreen = 'main-menu';
let currentSentenceText = ""; 

window.onload = function() {
    loadSettings();
    loadProgress();
    goToHome(); 
};

// --- 1. NAVIGAZIONE ---
function showScreen(screenId) {
    const screens = ['main-menu', 'config-menu', 'settings-menu', 'game-screen', 'progress-menu', 'reset-menu', 'sentence-screen', 'unlock-menu'];
    screens.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.style.display = 'none';
    });
    
    const target = document.getElementById(screenId);
    if(target) {
        target.style.display = 'flex';
        if (screenId === 'main-menu') {
            document.getElementById('topBar').style.display = 'none';
        } else {
            document.getElementById('topBar').style.display = 'flex';
        }
    }
}
function goToHome() { showScreen('main-menu'); }
function goBack() { showScreen(previousScreen); }

function showConfigMenu() {
    previousScreen = 'main-menu';
    renderCheckboxes('topic-options', 'lang-options');
    showScreen('config-menu');
}

function showSettingsMenu() {
    if (document.getElementById('game-screen').style.display === 'flex') previousScreen = 'game-screen';
    else if (document.getElementById('config-menu').style.display === 'flex') previousScreen = 'config-menu';
    else if (document.getElementById('sentence-screen').style.display === 'flex') previousScreen = 'sentence-screen';
    else previousScreen = 'main-menu';
    updateThemeButtons();
    showScreen('settings-menu');
}

// --- 2. GENERATORE DI FRASI INTELLIGENTE (FIXED) ---
function startSentenceMode() {
    let knownCards = [];
    Object.keys(decks).forEach(k => {
        knownCards = [...knownCards, ...decks[k].cards.filter(c => userProgress[c.id] === 'perfect')];
    });

    let pool = { zh: [], ja: [], ar: [] };
    knownCards.forEach(c => { if(pool[c.lang]) pool[c.lang].push(c); });

    let viableLangs = [];
    ['zh', 'ja', 'ar'].forEach(l => {
        let hasPronoun = pool[l].some(c => c.pos === 'pronoun');
        let hasVerb = pool[l].some(c => c.pos && c.pos.startsWith('verb'));
        if(hasPronoun && hasVerb) viableLangs.push(l);
    });

    if(viableLangs.length === 0) {
        alert("Non hai ancora abbastanza vocaboli 'Perfetti'!\n\nStudia i mazzi Grammatica e Cibo/Viaggio (o usa il tasto 'Sblocca Tutto' nelle impostazioni).");
        return;
    }

    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    generateNextSentence(pool, viableLangs);
}

// Helper per pulire le traduzioni (es. "Stare a / In" -> "In")
function clean(meaning) {
    if (!meaning) return "";
    let parts = meaning.split('/');
    // Prendi la parte più corta o la prima, spesso è la più diretta
    return parts[0].trim();
}

function generateNextSentence(pool, viableLangs) {
    // RESET UI
    document.getElementById('sentenceSolution').style.visibility = 'hidden';
    document.getElementById('btnShowSent').style.display = 'block';
    document.getElementById('sentControls').style.display = 'none';
    document.getElementById('sentControls').classList.remove('controls-active'); // Importante reset

    let lang = viableLangs[Math.floor(Math.random() * viableLangs.length)];
    let words = pool[lang];

    let pronouns = words.filter(c => c.pos === 'pronoun');
    let verbs = words.filter(c => c.pos && c.pos.startsWith('verb'));
    
    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
    let verb = rand(verbs);
    let subj = rand(pronouns);
    
    let validObjects = [];
    if (verb.pos === 'verb_eat') validObjects = words.filter(c => c.pos === 'food');
    else if (verb.pos === 'verb_drink') validObjects = words.filter(c => c.pos === 'drink');
    else if (verb.pos === 'verb_move') validObjects = words.filter(c => c.pos === 'place');
    else validObjects = words.filter(c => ['noun', 'place', 'food', 'drink', 'adj'].includes(c.pos));

    // Se non trova oggetti, riprova (safety)
    if (validObjects.length === 0) return generateNextSentence(pool, viableLangs);

    let obj = rand(validObjects);
    let sentenceParts = [];
    let translation = "";

    // Logica specifica per lingua
    if (lang === 'zh') {
        // Cinese: SVO
        sentenceParts = [subj, verb, obj];
        translation = `${clean(subj.meaning)} ${clean(verb.meaning)} ${clean(obj.meaning)}`;
        
        // Piccoli fix grammaticali italiani nella traduzione
        if(verb.meaning.includes('Andare')) translation = `${clean(subj.meaning)} va a ${clean(obj.meaning)}`;
        if(verb.meaning.includes('Essere')) translation = `${clean(subj.meaning)} è ${clean(obj.meaning)}`;
        if(verb.meaning.includes('Stare')) translation = `${clean(subj.meaning)} è in ${clean(obj.meaning)}`;

    } else if (lang === 'ja') {
        // Giapponese: SOV
        let partWa = { word: 'は', meaning: '(sogg.)', lang: 'ja' };
        let partObj = { word: 'を', meaning: '(ogg.)', lang: 'ja' };
        if (verb.pos === 'verb_move') partObj = { word: 'に', meaning: 'a', lang: 'ja' };
        if (verb.word === '好き') partObj = { word: 'が', meaning: '(sogg.)', lang: 'ja' }; // Ga per 'piace'
        
        sentenceParts = [subj, partWa, obj, partObj, verb];
        
        // Traduzione Italiana: SVO (non seguiamo l'ordine giapponese nella traduzione!)
        if (verb.word === '好き') translation = `A ${clean(subj.meaning)} piace ${clean(obj.meaning)}`;
        else translation = `${clean(subj.meaning)} ... ${clean(verb.meaning)} ... ${clean(obj.meaning)}`;

    } else if (lang === 'ar') {
        // Arabo: VSO (Standard)
        // Ordine Visuale: Verbo -> Soggetto -> (Prep) -> Oggetto
        
        let prep = {word:'', meaning:''};
        // Se è moto a luogo o stato in luogo, serve preposizione
        if(verb.pos === 'verb_move' || obj.pos === 'place') {
             if(verb.word !== 'يَذْهَبُ') prep = words.find(w => w.pos === 'prep') || {word:'فِي', meaning:'in'};
             else prep = {word:'إِلَى', meaning:'a'}; // Va -> A
        }

        sentenceParts = [verb, subj];
        if(prep.word) sentenceParts.push(prep);
        sentenceParts.push(obj);

        // TRADUZIONE ITALIANA: SVO (Riordiniamo per chiarezza!)
        // Anche se la frase araba è VSO, in italiano leggiamo "Io vado a casa"
        let prepText = prep.word ? clean(prep.meaning) + " " : "";
        translation = `${clean(subj.meaning)} ${clean(verb.meaning)} ${prepText}${clean(obj.meaning)}`;
    }

    renderSentence(sentenceParts, translation, lang);
    window.lastPool = pool; 
    window.lastViable = viableLangs;
}

function renderSentence(parts, translation, lang) {
    const container = document.getElementById('sentenceDisplay');
    container.innerHTML = "";
    
    // SETUP GRAFICO LINGUA
    document.getElementById('sentLangTag').innerText = getLangNameFull(lang);
    document.getElementById('sentLangTag').style.color = getLangColor(lang);
    document.getElementById('sentTranslation').innerText = translation;
    
    // GESTIONE ARABO RTL
    if (lang === 'ar') {
        container.classList.add('rtl-text');
    } else {
        container.classList.remove('rtl-text');
    }

    currentSentenceText = parts.map(p => p.word).join(''); 

    parts.forEach(part => {
        if(!part.word) return;
        let span = document.createElement('span');
        span.className = 'clickable-word';
        span.innerText = part.word;
        // Tooltip pulito
        span.setAttribute('data-meaning', clean(part.meaning));
        span.onclick = function() { this.classList.add('show-hint'); setTimeout(() => this.classList.remove('show-hint'), 2000); };
        container.appendChild(span);
    });
}

// FIX: Ora questa funzione SBLOCCA i tasti!
function revealSentence() {
    document.getElementById('sentenceSolution').style.visibility = 'visible';
    document.getElementById('btnShowSent').style.display = 'none';
    const controls = document.getElementById('sentControls');
    controls.style.display = 'grid';
    // Questa riga era quella mancante che causava il blocco!
    controls.classList.add('controls-active'); 
}

function nextSentence() { if(window.lastPool) generateNextSentence(window.lastPool, window.lastViable); else startSentenceMode(); }

function speakSentence() {
    let text = currentSentenceText;
    let langCode = document.getElementById('sentLangTag').innerText;
    let speech = new SpeechSynthesisUtterance(text);
    if (langCode.includes('Cinese')) speech.lang = 'zh-CN';
    if (langCode.includes('Giapponese')) speech.lang = 'ja-JP';
    if (langCode.includes('Arabo')) { speech.lang = 'ar-SA'; text = text.replace(/\s/g, ''); speech.text = text; }
    window.speechSynthesis.speak(speech);
}

// --- 3. GESTIONE DATI ---
// (Le funzioni showUnlockMenu, performUnlock, exportData, etc rimangono uguali a prima. 
// Assicurati di includerle se copi tutto il file.)

function showUnlockMenu() { renderCheckboxes('unlock-topic-options', 'unlock-lang-options'); showScreen('unlock-menu'); }
function performUnlock() {
    const container = document.getElementById('unlock-menu');
    let st = Array.from(container.querySelectorAll('input[name="topic"]:checked')).map(cb => cb.value);
    let sl = Array.from(container.querySelectorAll('input[name="lang"]:checked')).map(cb => cb.value);
    if(st.length===0 && sl.length===0) return alert("Seleziona cosa sbloccare.");
    if(!confirm("Sbloccare tutto?")) return;
    let c=0; Object.keys(decks).forEach(k=>{let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(card=>{userProgress[card.id]='perfect'; c++;})});
    saveProgress(); alert(`${c} carte sbloccate.`); showSettingsMenu();
}
function exportData() { const d="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(userProgress)); const a=document.createElement('a'); a.href=d; a.download="go_backup.json"; document.body.appendChild(a); a.click(); a.remove(); }
function importData(i) { const f=i.files[0]; if(!f)return; const r=new FileReader(); r.onload=e=>{try{userProgress=JSON.parse(e.target.result);saveProgress();alert("Fatto!");}catch(x){alert("Errore");}}; r.readAsText(f); }
function showResetMenu() { renderCheckboxes('reset-topic-options', 'reset-lang-options'); showScreen('reset-menu'); }
function performReset() { const c=document.getElementById('reset-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0&&sl.length===0) return alert("Seleziona!"); if(!confirm("Reset?"))return; Object.keys(decks).forEach(k=>{let d=decks[k]; if(st.includes(d.tags[0])||sl.includes(d.tags[1])) d.cards.forEach(x=>delete userProgress[x.id])}); saveProgress(); alert("Reset OK"); showSettingsMenu(); }

// --- UTILS & FLASHCARDS ---
function renderCheckboxes(tid, lid) {
    const tc=document.getElementById(tid); const lc=document.getElementById(lid);
    if(!tc||!lc)return; tc.innerHTML=""; lc.innerHTML="";
    let t=new Set(); let l=new Set();
    Object.keys(decks).forEach(k=>{let d=decks[k].tags; if(d){t.add(d[0]); l.add(d[1]);}});
    let chk = !tid.includes('reset') ? 'checked' : '';
    t.forEach(v=>tc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="topic" value="${v}" ${chk}>${capitalize(v)}</label>`);
    l.forEach(v=>lc.innerHTML+=`<label class="chk-label"><input type="checkbox" name="lang" value="${v}" ${chk}>${getLangNameFull(v)}</label>`);
}

// ... (Il resto delle funzioni del gioco Flashcard rimane identico: startCustomSession, prepareSessionDeck, loadNextCard, flipCard, handleResult, showGlobalProgress, etc.)
// Assicurati di non cancellarle!
function startCustomSession(){const c=document.getElementById('config-menu'); let st=Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x=>x.value); let sl=Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x=>x.value); if(st.length===0||sl.length===0)return alert("Opzioni?"); playDeck=[]; Object.keys(decks).forEach(k=>{let d=decks[k]; if(st.includes(d.tags[0])&&sl.includes(d.tags[1])) playDeck=[...playDeck,...d.cards]}); if(playDeck.length===0)return alert("Nessuna carta"); prepareSessionDeck();}
function prepareSessionDeck(){let newC=playDeck.filter(c=>{if(userProgress[c.id]==='perfect')return false; if(c.requires){let r=Array.isArray(c.requires)?c.requires:[c.requires]; if(!r.every(x=>userProgress[x]==='perfect'))return false;} return true;}); let doneC=playDeck.filter(c=>userProgress[c.id]==='perfect'); shuffleArray(doneC); let db=[]; if(newC.length>0){let m=Math.min(newC.length,15); if(doneC.length<5)m=20; db=newC.slice(0,m);} let slots=20-db.length; if(slots>0&&doneC.length>0) db=[...db,...doneC.slice(0,slots)]; if(db.length===0)return alert("Finito!"); deck=shuffleArray(db); showScreen('game-screen'); loadNextCard();}
function loadNextCard(){if(deck.length===0){if(confirm("Ancora?"))prepareSessionDeck();else showConfigMenu(); return;} currentCard=deck[0]; isFlipped=false; const el=document.getElementById('flashcard'); el.classList.remove('flipped'); document.getElementById('controls').classList.remove('controls-active'); document.getElementById('instructionText').innerText="Tocca"; setTimeout(()=>{document.getElementById('langTag').innerText=getLangName(currentCard.lang); document.getElementById('wordDisplay').innerText=currentCard.word; updateLangStyle(currentCard.lang); document.getElementById('backWordDisplay').innerText=currentCard.word; document.getElementById('pronunciationDisplay').innerText=currentCard.pronunciation; document.getElementById('ipaDisplay').innerText=currentCard.ipa?`/${currentCard.ipa}/`:''; document.getElementById('meaningDisplay').innerText=currentCard.meaning; let st=userProgress[currentCard.id]; let t=currentCard.type==='base'?'Base':'Composto'; if(st==='perfect')t="RIPASSO • "+t; else if(st)t="IN CORSO ("+st+") • "+t; else t="NUOVA • "+t; document.getElementById('typeTag').innerText=`Liv. ${currentCard.level||1} • ${t}`;},200); updateCount();}
function flipCard(){if(isFlipped)return; document.getElementById('flashcard').classList.add('flipped'); isFlipped=true; document.getElementById('controls').classList.add('controls-active'); document.getElementById('instructionText').innerText="Esito?";}
function handleResult(r){if(!isFlipped)return; userProgress[currentCard.id]=r; saveProgress(); if(r==='perfect')deck.shift(); else {let m=deck.shift(); deck.splice(Math.min(deck.length,Math.floor(Math.random()*5)+3),0,m);} loadNextCard();}

function showGlobalProgress(){let td=playDeck.length>0?playDeck:getAllCards(); let s={t:0,p:0,l:0,loc:0}; const lc=document.getElementById('progress-list'); lc.innerHTML=""; s.t=td.length; td.forEach(c=>{let loc=false; if(c.requires){let r=Array.isArray(c.requires)?c.requires:[c.requires]; if(!r.every(x=>userProgress[x]==='perfect'))loc=true;} let st=userProgress[c.id]; if(loc)s.loc++; else if(st==='perfect')s.p++; else if(st)s.l++; let i=loc?'🔒':(st==='perfect'?'<span class="dot dot-green"></span>':(st?'<span class="dot dot-blue"></span>':'<span class="dot dot-grey"></span>')); lc.innerHTML+=`<div class="prog-item ${loc?'status-locked':''}"><div class="prog-info"><div class="prog-word" style="color:${getLangColor(c.lang)}">${c.word}</div><div class="prog-meaning">${c.meaning}</div></div><div class="prog-status">${i}</div></div>`;}); document.getElementById('stat-total').innerText=s.t; document.getElementById('stat-perfect').innerText=s.p; document.getElementById('stat-learning').innerText=s.l; document.getElementById('stat-locked').innerText=s.loc; showScreen('progress-menu');}
function closeProgress(){if(playDeck.length>0)showScreen('game-screen'); else showConfigMenu();}
function getAllCards(){let a=[]; Object.keys(decks).forEach(k=>a=[...a,...decks[k].cards]); return a;}
function saveProgress(){localStorage.setItem('go_flashcards_progress',JSON.stringify(userProgress));}
function loadProgress(){const d=localStorage.getItem('go_flashcards_progress'); if(d)userProgress=JSON.parse(d);}
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
