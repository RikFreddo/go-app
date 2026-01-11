// ==========================================
// GO - SCRIPT PRINCIPALE (v5.5 FIXED)
// ==========================================

// --- VARIABILI GLOBALI ---
let playDeck = [];       // Il mazzo "fuso" per la sessione corrente
let currentCard = null;  // La carta attualmente a schermo
let deck = [];           // Le carte rimaste da giocare nella sessione
let isFlipped = false;   // Stato della carta (fronte/retro)
let userProgress = {};   // Memoria progressi { "id": "perfect/reading/..." }
let previousScreen = 'main-menu'; // Per il tasto "Indietro"
let currentSentenceText = ""; // Per l'audio delle frasi

// --- AVVIO ---
window.onload = function() {
    loadSettings();
    loadProgress();
    goToHome(); 
};

// ==========================================
// 1. NAVIGAZIONE E UI
// ==========================================
function showScreen(screenId) {
    // Nascondi tutte le schermate
    const screens = ['main-menu', 'config-menu', 'settings-menu', 'game-screen', 'progress-menu', 'reset-menu', 'sentence-screen'];
    screens.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.style.display = 'none';
    });
    
    // Mostra quella richiesta
    const target = document.getElementById(screenId);
    if(target) {
        target.style.display = 'flex';
        
        // Gestione Top Bar (nascosta solo in Home)
        const topBar = document.getElementById('topBar');
        if (topBar) {
            topBar.style.display = (screenId === 'main-menu') ? 'none' : 'flex';
        }
    }
}

function goToHome() { showScreen('main-menu'); }
function goBack() { showScreen(previousScreen); }

// Mostra menu Configurazione Flashcards
function showConfigMenu() {
    previousScreen = 'main-menu';
    renderCheckboxes('topic-options', 'lang-options');
    showScreen('config-menu');
}

// Mostra menu Impostazioni
function showSettingsMenu() {
    // Ricorda da dove veniamo
    if (document.getElementById('game-screen').style.display === 'flex') previousScreen = 'game-screen';
    else if (document.getElementById('config-menu').style.display === 'flex') previousScreen = 'config-menu';
    else if (document.getElementById('sentence-screen').style.display === 'flex') previousScreen = 'sentence-screen';
    else previousScreen = 'main-menu';
    
    updateThemeButtons();
    showScreen('settings-menu');
}

// ==========================================
// 2. MOTORE FLASHCARDS (Config & Gioco)
// ==========================================

// Genera le checkbox in base ai tag nel database
function renderCheckboxes(topicId, langId) {
    const topicContainer = document.getElementById(topicId);
    const langContainer = document.getElementById(langId);
    if(!topicContainer || !langContainer) return;

    topicContainer.innerHTML = "";
    langContainer.innerHTML = "";

    let topics = new Set();
    let langs = new Set();

    // Estrai tag unici
    Object.keys(decks).forEach(key => {
        let t = decks[key].tags;
        if (!t) return;
        if(t[0]) topics.add(t[0]);
        if(t[1]) langs.add(t[1]);
    });

    // Capisci se siamo nel menu reset (default unchecked) o config (default checked)
    const isReset = topicId.includes('reset');
    const defaultChecked = !isReset; 

    // Renderizza Argomenti
    topics.forEach(topic => {
        let prettyName = capitalize(topic);
        topicContainer.innerHTML += `
            <label class="chk-label">
                <input type="checkbox" name="topic" value="${topic}" ${defaultChecked ? 'checked' : ''}>
                ${prettyName}
            </label>
        `;
    });

    // Renderizza Lingue
    langs.forEach(lang => {
        let prettyName = getLangNameFull(lang);
        langContainer.innerHTML += `
            <label class="chk-label">
                <input type="checkbox" name="lang" value="${lang}" ${defaultChecked ? 'checked' : ''}>
                ${prettyName}
            </label>
        `;
    });
}

// Avvia la sessione Flashcards
function startCustomSession() {
    // 1. Leggi le checkbox selezionate
    const container = document.getElementById('config-menu');
    let selectedTopics = Array.from(container.querySelectorAll('input[name="topic"]:checked')).map(cb => cb.value);
    let selectedLangs = Array.from(container.querySelectorAll('input[name="lang"]:checked')).map(cb => cb.value);

    if(selectedTopics.length === 0 || selectedLangs.length === 0) {
        alert("Seleziona almeno un argomento e una lingua!");
        return;
    }

    // 2. Crea il mazzo unificato
    playDeck = [];
    Object.keys(decks).forEach(key => {
        let deckData = decks[key];
        let dTopic = deckData.tags[0];
        let dLang = deckData.tags[1];
        if (selectedTopics.includes(dTopic) && selectedLangs.includes(dLang)) {
            playDeck = [...playDeck, ...deckData.cards];
        }
    });

    if (playDeck.length === 0) {
        alert("Nessuna carta trovata con questa combinazione.");
        return;
    }

    // 3. Prepara le carte da giocare
    prepareSessionDeck();
}

function prepareSessionDeck() {
    const SESSION_SIZE = 20; 

    // Filtra carte nuove (non perfect) che rispettano i requisiti
    let newCards = playDeck.filter(card => {
        if (userProgress[card.id] === 'perfect') return false; 
        if (card.requires) {
            let reqs = Array.isArray(card.requires) ? card.requires : [card.requires];
            let allMet = reqs.every(reqId => userProgress[reqId] === 'perfect');
            if (!allMet) return false; 
        }
        return true;
    });

    // Filtra carte già fatte per il ripasso
    let doneDeck = playDeck.filter(card => userProgress[card.id] === 'perfect');
    shuffleArray(doneDeck);

    // Costruisci il mazzo della sessione (deckBuilder)
    let deckBuilder = [];
    if (newCards.length > 0) {
        let maxNew = Math.min(newCards.length, SESSION_SIZE - 5); 
        if (doneDeck.length < 5) maxNew = SESSION_SIZE;
        deckBuilder = newCards.slice(0, maxNew);
    }

    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && doneDeck.length > 0) {
        let reviewFill = doneDeck.slice(0, slotsLeft);
        deckBuilder = [...deckBuilder, ...reviewFill];
    }

    if (deckBuilder.length === 0) {
        alert("Hai completato tutte le carte selezionate! Ottimo lavoro.");
        return;
    }

    // Mescola e avvia
    deck = shuffleArray(deckBuilder);
    showScreen('game-screen');
    loadNextCard();
}

function loadNextCard() {
    if (deck.length === 0) {
        if(confirm("Sessione finita! Vuoi farne un'altra?")) {
            prepareSessionDeck();
        } else {
            showConfigMenu();
        }
        return;
    }

    currentCard = deck[0];
    isFlipped = false;

    const cardElement = document.getElementById('flashcard');
    cardElement.classList.remove('flipped');
    document.getElementById('controls').classList.remove('controls-active');
    document.getElementById('instructionText').innerText = "Tocca la carta per vedere la soluzione";

    // Popola i dati a schermo
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
    document.getElementById('instructionText').innerText = "Come è andata?";
}

function handleResult(result) {
    if (!isFlipped) return; 
    
    // Salva risultato
    userProgress[currentCard.id] = result;
    saveProgress();

    if (result === 'perfect') {
        deck.shift(); // Rimuovi
    } else {
        // Rimetti nel mazzo per ripetere
        let missedCard = deck.shift();
        let insertPos = Math.min(deck.length, Math.floor(Math.random() * 5) + 3);
        deck.splice(insertPos, 0, missedCard);
    }
    loadNextCard();
}

// ==========================================
// 3. GENERATORE DI FRASI (Sentence Mode)
// ==========================================
function startSentenceMode() {
    // 1. Raccogli tutte le carte "Perfette"
    let knownCards = [];
    Object.keys(decks).forEach(k => {
        knownCards = [...knownCards, ...decks[k].cards.filter(c => userProgress[c.id] === 'perfect')];
    });

    // 2. Dividi per POS e Lingua
    let pool = {
        zh: { pronouns: [], verbs: [], places: [], nouns: [], preps: [] },
        ja: { pronouns: [], verbs: [], places: [], nouns: [], adjs: [] },
        ar: { pronouns: [], verbs: [], places: [], nouns: [], preps: [] }
    };

    knownCards.forEach(c => {
        if(pool[c.lang] && c.pos) {
            if(pool[c.lang][c.pos + 's']) {
                pool[c.lang][c.pos + 's'].push(c);
            }
        }
    });

    // 3. Verifica requisiti minimi
    let viableLangs = [];
    ['zh', 'ja', 'ar'].forEach(l => {
        let p = pool[l];
        // Serve almeno: 1 Pronome + 1 Verbo + (1 Luogo O 1 Nome)
        if(p.pronouns.length > 0 && p.verbs.length > 0 && (p.places.length > 0 || p.nouns.length > 0)) {
            viableLangs.push(l);
        }
    });

    if(viableLangs.length === 0) {
        alert("Non hai ancora abbastanza vocaboli 'Perfetti'!\n\nStudia i mazzi Grammatica e Natura/Viaggio per sbloccare Verbi, Luoghi e Pronomi.");
        return;
    }

    // 4. Avvia
    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    generateNextSentence(pool, viableLangs);
}

function generateNextSentence(pool, viableLangs) {
    document.getElementById('sentenceSolution').style.visibility = 'hidden';
    document.getElementById('btnShowSent').style.display = 'block';
    document.getElementById('sentControls').style.display = 'none';

    let lang = viableLangs[Math.floor(Math.random() * viableLangs.length)];
    let p = pool[lang];
    let sentenceParts = [];
    let translation = "";
    const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Logica Template
    if (lang === 'zh') {
        let subj = rand(p.pronouns);
        let verb = rand(p.verbs);
        let obj = rand([...p.places, ...p.nouns]);
        
        sentenceParts = [subj, verb, obj];
        translation = `${subj.meaning} ${verb.meaning} ${obj.meaning}`;
        if(verb.word === '去' && obj.pos === 'place') translation = `${subj.meaning} va a ${obj.meaning}`;
        else if(verb.word === '在' && obj.pos === 'place') translation = `${subj.meaning} è a/in ${obj.meaning}`;

    } else if (lang === 'ja') {
        let subj = rand(p.pronouns);
        let verb = rand(p.verbs);
        let obj = rand(p.places) || rand(p.nouns);
        
        let partWa = { word: 'は', meaning: '(sogg.)', lang: 'ja' };
        let partDest = { word: 'に', meaning: 'a', lang: 'ja' }; // Default
        if (verb.word === '食べる' || verb.word === '見る') partDest = { word: 'を', meaning: '(ogg.)', lang: 'ja' };

        sentenceParts = [subj, partWa, obj, partDest, verb];
        translation = `${subj.meaning} ... ${obj.meaning} ... ${verb.meaning}`;

    } else if (lang === 'ar') {
        let subj = rand(p.pronouns);
        let verb = rand(p.verbs);
        let obj = rand(p.places) || rand(p.nouns);
        let prep = (obj.pos === 'place') ? (rand(p.preps) || {word: 'في', meaning: 'in'}) : {word:'', meaning:''}; 

        sentenceParts = [subj, verb];
        if(prep.word) sentenceParts.push(prep);
        sentenceParts.push(obj);
        
        translation = `${subj.meaning} ${verb.meaning} ${prep.meaning} ${obj.meaning}`;
    }

    renderSentence(sentenceParts, translation, lang);
    
    // Trick per passare i dati al prossimo click
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

// ==========================================
// 4. GESTIONE DATI (Backup & Reset)
// ==========================================
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userProgress));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", "go_backup_" + new Date().toISOString().slice(0,10) + ".json");
    document.body.appendChild(dl); dl.click(); dl.remove();
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            userProgress = JSON.parse(e.target.result);
            saveProgress();
            alert("Backup importato con successo!");
        } catch (err) { alert("Errore file."); }
    };
    reader.readAsText(file);
}

function showResetMenu() {
    renderCheckboxes('reset-topic-options', 'reset-lang-options');
    showScreen('reset-menu');
}

function performReset() {
    const container = document.getElementById('reset-menu');
    let selectedTopics = Array.from(container.querySelectorAll('input[name="topic"]:checked')).map(cb => cb.value);
    let selectedLangs = Array.from(container.querySelectorAll('input[name="lang"]:checked')).map(cb => cb.value);

    if(selectedTopics.length===0 && selectedLangs.length===0) return alert("Seleziona cosa cancellare.");

    if(!confirm("⚠️ ATTENZIONE ⚠️\nStai per cancellare definitivamente i progressi selezionati.\nConfermi?")) return;

    let count = 0;
    Object.keys(decks).forEach(key => {
        let d = decks[key];
        // Se il mazzo rientra nei criteri (Topic O Lingua selezionata)
        if (selectedTopics.includes(d.tags[0]) || selectedLangs.includes(d.tags[1])) {
            d.cards.forEach(card => {
                if(userProgress[card.id]) {
                    delete userProgress[card.id];
                    count++;
                }
            });
        }
    });

    saveProgress();
    alert(`Reset completato. Cancellate ${count} carte.`);
    showSettingsMenu();
}

// ==========================================
// 5. PROGRESSI & UTILS
// ==========================================
function showGlobalProgress() {
    // Se non c'è un mazzo attivo, mostra tutto
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

        item.innerHTML = `
            <div class="prog-info">
                <div class="prog-word" style="color:${getLangColor(card.lang)}">${card.word}</div>
                <div class="prog-meaning">${card.meaning}</div>
            </div>
            <div class="prog-status">${icon}</div>
        `;
        listContainer.appendChild(item);
    });

    document.getElementById('stat-total').innerText = stats.total;
    document.getElementById('stat-perfect').innerText = stats.perfect;
    document.getElementById('stat-learning').innerText = stats.learning;
    document.getElementById('stat-locked').innerText = stats.locked;

    showScreen('progress-menu');
}

function closeProgress() {
    if (playDeck.length > 0) showScreen('game-screen');
    else showConfigMenu();
}

function getAllCards() {
    let all = [];
    Object.keys(decks).forEach(k => all = [...all, ...decks[k].cards]);
    return all;
}

// --- PERSISTENZA ---
function saveProgress() { localStorage.setItem('go_flashcards_progress', JSON.stringify(userProgress)); }
function loadProgress() { const d = localStorage.getItem('go_flashcards_progress'); if (d) userProgress = JSON.parse(d); }

// --- TEMI ---
function setTheme(mode) { localStorage.setItem('go_theme_mode', mode); applyTheme(mode); updateThemeButtons(); }
function applyTheme(mode) {
    const body = document.body;
    const desc = document.getElementById('theme-desc');
    if(mode === 'auto') {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) body.classList.add('dark-mode');
        else body.classList.remove('dark-mode');
        if(desc) desc.innerText = "Sincronizzato con dispositivo";
    } else if (mode === 'dark') {
        body.classList.add('dark-mode');
        if(desc) desc.innerText = "Modalità Scura";
    } else {
        body.classList.remove('dark-mode');
        if(desc) desc.innerText = "Modalità Chiara";
    }
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

// --- UTILS ---
function shuffleArray(arr) { for(let i=arr.length-1; i>0; i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function getLangNameFull(c) { if(c==='zh') return '🇨🇳 Cinese'; if(c==='ja') return '🇯🇵 Giapponese'; if(c==='ar') return '🇸🇦 Arabo'; return c; }
function getLangName(c) { if(c==='zh') return 'Cn'; if(c==='ar') return 'Ar'; if(c==='ja') return 'Jp'; return c; }
function getLangColor(c) { if(c==='zh') return '#e74c3c'; if(c==='ar') return '#27ae60'; if(c==='ja') return '#8e44ad'; return '#333'; }
function updateLangStyle(c) { document.getElementById('langTag').style.color = getLangColor(c); }
function updateCount() { document.getElementById('deckStatus').innerText = "Carte: " + deck.length; }
window.speakWordScript = function() { 
    if (!currentCard) return; 
    let t = currentCard.word; 
    if (currentCard.lang === 'ar') t = t.replace(/\s/g, ''); 
    let s = new SpeechSynthesisUtterance(t); 
    if(currentCard.lang==='zh') s.lang='zh-CN'; 
    if(currentCard.lang==='ja') s.lang='ja-JP'; 
    if(currentCard.lang==='ar') s.lang='ar-SA'; 
    window.speechSynthesis.speak(s); 
};