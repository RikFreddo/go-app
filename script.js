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
    const screens = ['main-menu', 'config-menu', 'settings-menu', 'game-screen', 'progress-menu', 'reset-menu', 'sentence-screen'];
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

// --- 2. GENERATORE DI FRASI INTELLIGENTE ---
function startSentenceMode() {
    // 1. Raccogli tutte le carte "Perfette"
    let knownCards = [];
    Object.keys(decks).forEach(k => {
        knownCards = [...knownCards, ...decks[k].cards.filter(c => userProgress[c.id] === 'perfect')];
    });

    // 2. Dividi per Lingua
    let pool = { zh: [], ja: [], ar: [] };
    knownCards.forEach(c => { if(pool[c.lang]) pool[c.lang].push(c); });

    // 3. Verifica requisiti minimi per lingua (almeno 1 pronome e 1 verbo)
    let viableLangs = [];
    ['zh', 'ja', 'ar'].forEach(l => {
        let hasPronoun = pool[l].some(c => c.pos === 'pronoun');
        let hasVerb = pool[l].some(c => c.pos && c.pos.startsWith('verb'));
        if(hasPronoun && hasVerb) viableLangs.push(l);
    });

    if(viableLangs.length === 0) {
        alert("Non hai ancora abbastanza vocaboli 'Perfetti'!\n\nStudia i mazzi Grammatica e Cibo/Viaggio per sbloccare pronomi e verbi.");
        return;
    }

    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    generateNextSentence(pool, viableLangs);
}

function generateNextSentence(pool, viableLangs) {
    document.getElementById('sentenceSolution').style.visibility = 'hidden';
    document.getElementById('btnShowSent').style.display = 'block';
    document.getElementById('sentControls').style.display = 'none';

    let lang = viableLangs[Math.floor(Math.random() * viableLangs.length)];
    let words = pool[lang];

    // Filtra per POS
    let pronouns = words.filter(c => c.pos === 'pronoun');
    let verbs = words.filter(c => c.pos && c.pos.startsWith('verb'));
    
    // Seleziona un verbo a caso
    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
    let verb = rand(verbs);
    let subj = rand(pronouns);
    
    // LOGICA SEMANTICA: Cosa può fare questo verbo?
    let validObjects = [];
    
    if (verb.pos === 'verb_eat') {
        validObjects = words.filter(c => c.pos === 'food');
    } else if (verb.pos === 'verb_drink') {
        validObjects = words.filter(c => c.pos === 'drink');
    } else if (verb.pos === 'verb_move') {
        // Andare -> Luogo
        validObjects = words.filter(c => c.pos === 'place');
    } else {
        // Verbi generali (Vedere, Essere, Avere, Piacere) -> Tutto tranne pronomi e verbi
        validObjects = words.filter(c => ['noun', 'place', 'food', 'drink', 'adj'].includes(c.pos));
    }

    // Se non abbiamo oggetti validi per quel verbo (es. sai dire "Mangiare" ma non sai "Mela"), riprova
    if (validObjects.length === 0) {
        // Riprova con un altro tentativo (o cambia lingua se sfortunato, ma qui semplifichiamo richiamando la funzione)
        // Per evitare loop infiniti, se fallisce usiamo un fallback generico se possibile
        return generateNextSentence(pool, viableLangs);
    }

    let obj = rand(validObjects);
    let sentenceParts = [];
    let translation = "";

    // COSTRUZIONE FRASE
    if (lang === 'zh') {
        // Cinese: SVO
        sentenceParts = [subj, verb, obj];
        translation = `${subj.meaning} ${verb.meaning} ${obj.meaning}`;
        // Fix traduzioni specifiche
        if(verb.meaning === 'Andare') translation = `${subj.meaning} va a ${obj.meaning}`;
        if(verb.meaning === 'Essere') translation = `${subj.meaning} è ${obj.meaning}`;
        if(verb.meaning === 'Stare a / In') translation = `${subj.meaning} è a ${obj.meaning}`;

    } else if (lang === 'ja') {
        // Giapponese: SOV
        let partWa = { word: 'は', meaning: '(sogg.)', lang: 'ja' };
        let partObj = { word: 'を', meaning: '(ogg.)', lang: 'ja' }; // Default
        
        if (verb.pos === 'verb_move') partObj = { word: 'に', meaning: 'a', lang: 'ja' }; // Moto a luogo
        if (verb.word === '好き') partObj = { word: 'が', meaning: '(sogg. logico)', lang: 'ja' }; // Mi piace (Ga)

        sentenceParts = [subj, partWa, obj, partObj, verb];
        translation = `${subj.meaning} ... ${obj.meaning} ... ${verb.meaning}`;

    } else if (lang === 'ar') {
        // Arabo: VSO (Verb + Subj + Obj)
        let prep = {word:'', meaning:''};
        if(verb.pos === 'verb_move' || obj.pos === 'place') {
            // Se non c'è già una preposizione nel verbo, aggiungiamo "fi" (in) o "ila" (a)
            // Semplificazione: se luogo, mettiamo "in/a"
             if(verb.word !== 'يَذْهَبُ') prep = words.find(w => w.pos === 'prep') || {word:'فِي', meaning:'in'};
             else prep = {word:'إِلَى', meaning:'a'}; // Va -> A
        }

        sentenceParts = [verb, subj];
        if(prep.word) sentenceParts.push(prep);
        sentenceParts.push(obj);
        translation = `${verb.meaning} ${subj.meaning} ${prep.meaning} ${obj.meaning}`;
    }

    renderSentence(sentenceParts, translation, lang);
    window.lastPool = pool; 
    window.lastViable = viableLangs;
}

function renderSentence(parts, translation, lang) {
    const container = document.getElementById('sentenceDisplay');
    container.innerHTML = "";
    document.getElementById('sentLangTag').innerText = getLangNameFull(lang);
    document.getElementById('sentLangTag').style.color = getLangColor(lang);
    document.getElementById('sentTranslation').innerText = translation;
    
    currentSentenceText = parts.map(p => p.word).join(''); 

    parts.forEach(part => {
        if(!part.word) return;
        let span = document.createElement('span');
        span.className = 'clickable-word';
        span.innerText = part.word;
        span.setAttribute('data-meaning', part.meaning);
        span.onclick = function() {
            this.classList.add('show-hint');
            setTimeout(() => this.classList.remove('show-hint'), 2000);
        };
        container.appendChild(span);
    });
}

function revealSentence() {
    document.getElementById('sentenceSolution').style.visibility = 'visible';
    document.getElementById('btnShowSent').style.display = 'none';
    document.getElementById('sentControls').style.display = 'grid';
}

function nextSentence() {
    if(window.lastPool) generateNextSentence(window.lastPool, window.lastViable);
    else startSentenceMode();
}

function speakSentence() {
    let text = currentSentenceText;
    let langCode = document.getElementById('sentLangTag').innerText;
    let speech = new SpeechSynthesisUtterance(text);
    if (langCode.includes('Cinese')) speech.lang = 'zh-CN';
    if (langCode.includes('Giapponese')) speech.lang = 'ja-JP';
    if (langCode.includes('Arabo')) {
         speech.lang = 'ar-SA';
         text = text.replace(/\s/g, ''); 
         speech.text = text;
    }
    window.speechSynthesis.speak(speech);
}

// --- FLASHCARD ENGINE & UTILS (Uguale a prima) ---
function renderCheckboxes(topicId, langId) {
    const topicContainer = document.getElementById(topicId);
    const langContainer = document.getElementById(langId);
    if(!topicContainer || !langContainer) return;
    topicContainer.innerHTML = ""; langContainer.innerHTML = "";
    let topics = new Set(); let langs = new Set();
    Object.keys(decks).forEach(key => {
        let t = decks[key].tags;
        if (!t) return;
        if(t[0]) topics.add(t[0]);
        if(t[1]) langs.add(t[1]);
    });
    const isReset = topicId.includes('reset');
    const defaultChecked = !isReset; 
    topics.forEach(topic => {
        let prettyName = capitalize(topic);
        topicContainer.innerHTML += `<label class="chk-label"><input type="checkbox" name="topic" value="${topic}" ${defaultChecked ? 'checked' : ''}>${prettyName}</label>`;
    });
    langs.forEach(lang => {
        let prettyName = getLangNameFull(lang);
        langContainer.innerHTML += `<label class="chk-label"><input type="checkbox" name="lang" value="${lang}" ${defaultChecked ? 'checked' : ''}>${prettyName}</label>`;
    });
}

function startCustomSession() {
    const container = document.getElementById('config-menu');
    let selectedTopics = Array.from(container.querySelectorAll('input[name="topic"]:checked')).map(cb => cb.value);
    let selectedLangs = Array.from(container.querySelectorAll('input[name="lang"]:checked')).map(cb => cb.value);
    if(selectedTopics.length === 0 || selectedLangs.length === 0) return alert("Seleziona opzioni!");

    playDeck = [];
    Object.keys(decks).forEach(key => {
        let deckData = decks[key];
        if (selectedTopics.includes(deckData.tags[0]) && selectedLangs.includes(deckData.tags[1])) {
            playDeck = [...playDeck, ...deckData.cards];
        }
    });

    if (playDeck.length === 0) return alert("Nessuna carta.");
    prepareSessionDeck();
}

function prepareSessionDeck() {
    const SESSION_SIZE = 20; 
    let newCards = playDeck.filter(card => {
        if (userProgress[card.id] === 'perfect') return false; 
        if (card.requires) {
            let reqs = Array.isArray(card.requires) ? card.requires : [card.requires];
            if (!reqs.every(reqId => userProgress[reqId] === 'perfect')) return false; 
        }
        return true;
    });
    let doneDeck = playDeck.filter(card => userProgress[card.id] === 'perfect');
    shuffleArray(doneDeck);
    let deckBuilder = [];
    if (newCards.length > 0) {
        let maxNew = Math.min(newCards.length, SESSION_SIZE - 5); 
        if (doneDeck.length < 5) maxNew = SESSION_SIZE;
        deckBuilder = newCards.slice(0, maxNew);
    }
    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && doneDeck.length > 0) deckBuilder = [...deckBuilder, ...doneDeck.slice(0, slotsLeft)];
    if (deckBuilder.length === 0) return alert("Tutto completato!");
    deck = shuffleArray(deckBuilder);
    showScreen('game-screen');
    loadNextCard();
}

function loadNextCard() {
    if (deck.length === 0) {
        if(confirm("Finito! Ancora?")) prepareSessionDeck();
        else showConfigMenu();
        return;
    }
    currentCard = deck[0];
    isFlipped = false;
    const cardElement = document.getElementById('flashcard');
    cardElement.classList.remove('flipped');
    document.getElementById('controls').classList.remove('controls-active');
    document.getElementById('instructionText').innerText = "Tocca per girare";

    setTimeout(() => {
        document.getElementById('langTag').innerText = getLangName(currentCard.lang);
        document.getElementById('wordDisplay').innerText = currentCard.word;
        updateLangStyle(currentCard.lang);
        document.getElementById('backWordDisplay').innerText = currentCard.word;
        document.getElementById('pronunciationDisplay').innerText = currentCard.pronunciation;
        document.getElementById('ipaDisplay').innerText = currentCard.ipa ? `/${currentCard.ipa}/` : ''; 
        document.getElementById('meaningDisplay').innerText = currentCard.meaning;
        let status = userProgress[currentCard.id];
        let typeText = currentCard.type === 'base' ? 'Base' : 'Composto';
        if(status === 'perfect') typeText = "RIPASSO • " + typeText;
        else if(status) typeText = "IN CORSO (" + status + ") • " + typeText;
        else typeText = "NUOVA • " + typeText;
        document.getElementById('typeTag').innerText = `Liv. ${currentCard.level || 1} • ${typeText}`;
    }, 200);
    updateCount();
}

function flipCard() {
    if (isFlipped) return;
    document.getElementById('flashcard').classList.add('flipped');
    isFlipped = true;
    document.getElementById('controls').classList.add('controls-active');
    document.getElementById('instructionText').innerText = "Esito?";
}
function handleResult(result) {
    if (!isFlipped) return; 
    userProgress[currentCard.id] = result;
    saveProgress();
    if (result === 'perfect') deck.shift(); 
    else {
        let missedCard = deck.shift();
        deck.splice(Math.min(deck.length, Math.floor(Math.random() * 5) + 3), 0, missedCard);
    }
    loadNextCard();
}

// Backup & Reset
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userProgress));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", "go_backup.json");
    document.body.appendChild(dl); dl.click(); dl.remove();
}
function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try { userProgress = JSON.parse(e.target.result); saveProgress(); alert("Fatto!"); } 
        catch (err) { alert("Errore file."); }
    };
    reader.readAsText(file);
}
function showResetMenu() { renderCheckboxes('reset-topic-options', 'reset-lang-options'); showScreen('reset-menu'); }
function performReset() {
    const container = document.getElementById('reset-menu');
    let st = Array.from(container.querySelectorAll('input[name="topic"]:checked')).map(cb => cb.value);
    let sl = Array.from(container.querySelectorAll('input[name="lang"]:checked')).map(cb => cb.value);
    if(st.length===0 && sl.length===0) return alert("Seleziona cosa cancellare.");
    if(!confirm("Sicuro di cancellare?")) return;
    Object.keys(decks).forEach(key => {
        let d = decks[key];
        if (st.includes(d.tags[0]) || sl.includes(d.tags[1])) d.cards.forEach(c => delete userProgress[c.id]);
    });
    saveProgress(); alert("Reset completato."); showSettingsMenu();
}

function showGlobalProgress() {
    let targetDeck = (playDeck.length > 0) ? playDeck : getAllCards();
    let stats = { total: 0, perfect: 0, learning: 0, locked: 0 };
    const listContainer = document.getElementById('progress-list');
    listContainer.innerHTML = "";
    stats.total = targetDeck.length;

    targetDeck.forEach(card => {
        let isLocked = false;
        if (card.requires) {
            let reqs = Array.isArray(card.requires) ? card.requires : [card.requires];
            if(!reqs.every(r => userProgress[r] === 'perfect')) isLocked = true;
        }
        let status = userProgress[card.id];
        if (isLocked) stats.locked++;
        else if (status === 'perfect') stats.perfect++;
        else if (status) stats.learning++;

        const item = document.createElement('div');
        item.className = 'prog-item';
        if (isLocked) item.classList.add('status-locked');
        let icon = isLocked ? '🔒' : (status==='perfect'?'<span class="dot dot-green"></span>':(status?'<span class="dot dot-blue"></span>':'<span class="dot dot-grey"></span>'));
        item.innerHTML = `<div class="prog-info"><div class="prog-word" style="color:${getLangColor(card.lang)}">${card.word}</div><div class="prog-meaning">${card.meaning}</div></div><div class="prog-status">${icon}</div>`;
        listContainer.appendChild(item);
    });
    document.getElementById('stat-total').innerText = stats.total;
    document.getElementById('stat-perfect').innerText = stats.perfect;
    document.getElementById('stat-learning').innerText = stats.learning;
    document.getElementById('stat-locked').innerText = stats.locked;
    showScreen('progress-menu');
}
function closeProgress() { if (playDeck.length > 0) showScreen('game-screen'); else showConfigMenu(); }
function getAllCards() { let all = []; Object.keys(decks).forEach(k => all = [...all, ...decks[k].cards]); return all; }
function saveProgress() { localStorage.setItem('go_flashcards_progress', JSON.stringify(userProgress)); }
function loadProgress() { const d = localStorage.getItem('go_flashcards_progress'); if (d) userProgress = JSON.parse(d); }
function setTheme(mode) { localStorage.setItem('go_theme_mode', mode); applyTheme(mode); updateThemeButtons(); }
function applyTheme(mode) {
    const body = document.body;
    if(mode === 'auto') {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) body.classList.add('dark-mode');
        else body.classList.remove('dark-mode');
    } else if (mode === 'dark') body.classList.add('dark-mode');
    else body.classList.remove('dark-mode');
}
function updateThemeButtons() {
    const m = localStorage.getItem('go_theme_mode') || 'auto';
    ['light','dark','auto'].forEach(k => {
        const b = document.getElementById('theme-'+k);
        if(b) (m===k) ? b.classList.add('active') : b.classList.remove('active');
    });
}
function loadSettings() {
    const m = localStorage.getItem('go_theme_mode') || 'auto';
    applyTheme(m);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(localStorage.getItem('go_theme_mode')==='auto') applyTheme('auto');
    });
}
function shuffleArray(arr) { for(let i=arr.length-1; i>0; i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function getLangNameFull(c) { if(c==='zh') return '🇨🇳 Cinese'; if(c==='ja') return '🇯🇵 Giapponese'; if(c==='ar') return '🇸🇦 Arabo'; return c; }
function getLangName(c) { if(c==='zh') return 'Cn'; if(c==='ar') return 'Ar'; if(c==='ja') return 'Jp'; return c; }
function getLangColor(c) { if(c==='zh') return '#e74c3c'; if(c==='ar') return '#27ae60'; if(c==='ja') return '#8e44ad'; return '#333'; }
function updateLangStyle(c) { document.getElementById('langTag').style.color = getLangColor(c); }
function updateCount() { document.getElementById('deckStatus').innerText = "Carte: " + deck.length; }
window.speakWordScript = function() { if (!currentCard) return; let t = currentCard.word; if (currentCard.lang === 'ar') t = t.replace(/\s/g, ''); let s = new SpeechSynthesisUtterance(t); if(currentCard.lang==='zh') s.lang='zh-CN'; if(currentCard.lang==='ja') s.lang='ja-JP'; if(currentCard.lang==='ar') s.lang='ar-SA'; window.speechSynthesis.speak(s); };
