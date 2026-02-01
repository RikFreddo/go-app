// ==========================================
// GO SCRIPT v0.31 - BETA REFACTOR
// ==========================================

// ==========================================
// 1. VARIABILI GLOBALI E STATO
// ==========================================
// Qui definiamo tutte le variabili che mantengono lo stato dell'applicazione

let playDeck = [];           // Mazzo corrente per la sessione di flashcard
let currentCard = null;      // La carta attualmente visualizzata
let deck = [];               // Coda delle carte da mostrare
let userProgress = {};       // Oggetto che traccia i progressi delle flashcard (id -> stato)
let userSentenceProgress = {}; // Oggetto che traccia i progressi delle frasi (id -> stato)
let previousScreen = 'main-menu'; // Ricorda l'ultima schermata per il tasto "Indietro"
let appMode = 'flashcards';  // Modalità corrente: 'flashcards' o 'tree' (Albero)

// Variabili specifiche per la modalità Frasi
let sentenceDeck = [];       // Mazzo corrente per le frasi
let currentSentence = null;  // La frase attualmente visualizzata
let isSentFlipped = false;   // Stato della carta frase (girata o no)
let isFlipped = false;       // Stato della flashcard (girata o no)

// ==========================================
// 2. INIZIALIZZAZIONE
// ==========================================
// Codice eseguito all'avvio dell'applicazione

window.onload = function () {
    try {
        loadSettings(); // Carica tema e impostazioni salvate
        loadProgress(); // Carica i progressi dell'utente dal LocalStorage
        goToHome();     // Porta l'utente alla schermata iniziale
    } catch (e) {
        console.error("Errore durante l'inizializzazione:", e);
    }
};

// ==========================================
// 3. SISTEMA DI NAVIGAZIONE (ROUTER)
// ==========================================
// Gestisce il passaggio da una schermata all'altra

function showScreen(screenId) {
    // Lista di tutte le schermate possibili nell'HTML
    const screens = [
        'main-menu', 'config-menu', 'settings-menu', 'game-screen',
        'progress-menu', 'sent-progress-menu', 'reset-menu',
        'sentence-screen', 'unlock-menu', 'tree-screen', 'cheat-menu'
    ];

    // Nasconde tutte le schermate
    screens.forEach(s => {
        const el = document.getElementById(s);
        if (el) el.style.display = 'none';
    });

    // Mostra solo la schermata richiesta
    const target = document.getElementById(screenId);
    if (target) {
        target.style.display = 'flex';

        // Gestione della barra in alto (Top Bar)
        // La mostriamo ovunque tranne che nel menu principale
        if (screenId === 'main-menu') {
            document.getElementById('topBar').style.display = 'none';
        } else {
            document.getElementById('topBar').style.display = 'flex';
        }
    }
}

// Torna al menu principale
function goToHome() {
    showScreen('main-menu');
}

// Torna alla schermata precedente salvata
function goBack() {
    showScreen(previousScreen);
}

// Funzione intelligente per chiudere i menu sovrapposti
function closeMenu(id) {
    document.getElementById(id).style.display = 'none';

    // Gestione speciale per la chiusura dell'Albero ('tree-screen')
    if (id === 'tree-screen') {
        const gameScreen = document.getElementById('game-screen');
        // Controlliamo se il gioco è attivo sotto l'overlay dell'albero
        const isGameRunning = gameScreen && gameScreen.style.display === 'flex';

        if (!isGameRunning) {
            // Se il gioco NON è attivo (es. siamo venuti dal menu principale), torniamo alla Home
            showScreen('main-menu');
            appMode = 'flashcards'; // Resettiamo la modalità
        }
        // Se il gioco è attivo, chiudiamo solo l'overlay e rimaniamo nel gioco
    }
}

// ==========================================
// 4. MENU E CONFIGURAZIONE SESSIONI
// ==========================================
// Logica per i menu di selezione e avvio

// Apre il menu di configurazione per le Flashcards
function showConfigMenu() {
    appMode = 'flashcards'; // Imposta modalità flashcard
    renderCheckboxes('topic-options', 'lang-options'); // Genera le checkbox
    document.getElementById('config-title').innerText = "Start Session";
    document.getElementById('start-btn').innerText = "START";
    document.getElementById('start-btn').style.backgroundColor = ""; // Colore default
    showScreen('config-menu');
}

// Apre il menu di configurazione per l'Albero
function showTreeMode() {
    appMode = 'tree'; // Imposta modalità albero
    renderCheckboxes('topic-options', 'lang-options');
    document.getElementById('config-title').innerText = "View Knowledge Tree";
    document.getElementById('start-btn').innerText = "🌳 SHOW TREE";
    document.getElementById('start-btn').style.backgroundColor = "#27ae60"; // Colore verde
    showScreen('config-menu');
}

// Avvia la sessione (o apre l'albero) in base alla configurazione scelta
function startCustomSession() {
    if (typeof decks === 'undefined') return alert("Errore: Database non trovato.");

    const c = document.getElementById('config-menu');
    // Raccoglie i valori delle checkbox selezionate
    let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value);
    let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value);

    // --- RAMO 1: MODALITÀ ALBERO ---
    if (appMode === 'tree') {
        if (sl.length === 0) return alert("Seleziona almeno una lingua!");
        let selectedLang = sl[0]; // Prende la prima lingua selezionata
        document.getElementById('config-menu').style.display = 'none'; // Chiude config
        document.getElementById('tree-screen').style.display = 'flex'; // Apre Albero
        renderTree(selectedLang);
        return;
    }

    // --- RAMO 2: MODALITÀ FLASHCARD ---
    if (st.length === 0 || sl.length === 0) return alert("Seleziona Argomenti e Lingue!");

    // Costruisce il mazzo filtrando le carte dal database
    playDeck = [];
    Object.keys(decks).forEach(k => {
        let d = decks[k];
        // Se il mazzo ha sia il tag argomento che il tag lingua richiesti, lo aggiungiamo
        if (st.includes(d.tags[0]) && sl.includes(d.tags[1])) {
            playDeck = [...playDeck, ...d.cards];
        }
    });

    if (playDeck.length === 0) return alert("Nessuna carta trovata con questi filtri.");

    prepareSessionDeck(); // Prepara la sessione di gioco
}

// Genera dinamicamente le checkbox per argomenti e lingue
function renderCheckboxes(tid, lid) {
    const tc = document.getElementById(tid); // Contenitore Topic
    const lc = document.getElementById(lid); // Contenitore Lingue
    if (!tc || !lc) return;

    tc.innerHTML = "";
    lc.innerHTML = "";

    let t = new Set(); // Set per argomenti unici
    let l = new Set(); // Set per lingue uniche

    // Scansiona tutti i deck disponibili per trovare i tag
    Object.keys(decks).forEach(k => {
        let d = decks[k].tags;
        if (d) { t.add(d[0]); l.add(d[1]); }
    });

    // Se siamo nel menu reset, non selezioniamo nulla di default, altrimenti tutto selezionato
    let chk = !tid.includes('reset') ? 'checked' : '';

    t.forEach(v => tc.innerHTML += `<label class="chk-label"><input type="checkbox" name="topic" value="${v}" ${chk}>${capitalize(v)}</label>`);
    l.forEach(v => lc.innerHTML += `<label class="chk-label"><input type="checkbox" name="lang" value="${v}" ${chk}>${getLangNameFull(v)}</label>`);
}

// ==========================================
// 5. MOTORE FLASHCARDS (CORE GAME)
// ==========================================
// Gestisce la logica di gioco delle flashcard

function prepareSessionDeck() {
    const SESSION_SIZE = 20; // Numero massimo di carte per sessione

    // 1. Filtra le carte sbloccabili (quelle i cui requisiti sono soddisfatti)
    let unlockableCards = playDeck.filter(c => {
        if (userProgress[c.id] === 'perfect') return false; // Già masterata, non prioritaria qui
        if (c.requires) {
            let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
            // Controlla se tutti i prerequisiti sono "perfect"
            if (!reqs.every(reqId => userProgress[reqId] === 'perfect')) return false;
        }
        return true;
    });

    // 2. Divide in Nuove e In Apprendimento
    let learningCards = unlockableCards.filter(c => userProgress[c.id]);
    let newCards = unlockableCards.filter(c => !userProgress[c.id]);
    let reviewCards = playDeck.filter(c => userProgress[c.id] === 'perfect'); // Carte da ripassare

    // Mescola i gruppi
    shuffleArray(learningCards);
    shuffleArray(newCards);
    shuffleArray(reviewCards);

    // 3. Costruisce il mazzo della sessione
    let candidates = [...learningCards, ...newCards];
    let deckBuilder = [];

    // Prende carte prioritarie fino a riempire quasi la sessione
    if (candidates.length > 0) deckBuilder = candidates.slice(0, Math.min(candidates.length, SESSION_SIZE - 5));

    // Riempie lo spazio rimanente con carte di ripasso
    let slotsLeft = SESSION_SIZE - deckBuilder.length;
    if (slotsLeft > 0 && reviewCards.length > 0) {
        deckBuilder = [...deckBuilder, ...reviewCards.slice(0, slotsLeft)];
    }

    if (deckBuilder.length === 0) return alert("Hai completato tutto! Fai un reset o aggiungi argomenti.");

    deck = shuffleArray(deckBuilder); // Mescola il mazzo finale
    showScreen('game-screen');
    loadNextCard();
}

function loadNextCard() {
    // Se il mazzo è finito
    if (deck.length === 0) {
        if (confirm("Sessione completata! Vuoi farne un'altra?")) prepareSessionDeck();
        else showConfigMenu();
        return;
    }

    currentCard = deck[0];
    isFlipped = false;

    // Reset visuale della carta
    const el = document.getElementById('flashcard');
    el.style.transition = 'none';
    el.classList.remove('flipped');
    void el.offsetWidth; // Force reflow

    // Popola i contenuti HTML
    document.getElementById('instructionText').innerText = "Tocca per girare";
    document.getElementById('langTag').innerText = getLangName(currentCard.lang);
    document.getElementById('wordDisplay').innerText = currentCard.word;
    updateLangStyle(currentCard.lang);

    // Retro della carta
    document.getElementById('backWordDisplay').innerText = currentCard.word;
    document.getElementById('pronunciationDisplay').innerText = currentCard.pronunciation || "";
    document.getElementById('ipaDisplay').innerText = currentCard.ipa ? `/${currentCard.ipa}/` : "";
    document.getElementById('meaningDisplay').innerText = currentCard.meaning;

    // Etichetta stato della carta
    let st = userProgress[currentCard.id];
    let statusLabel = st === 'perfect' ? "MASTERED" : (st ? "LEARNING" : "NEW");
    let colorStyle = st === 'perfect' ? "color:#2ecc71;" : (st ? "color:#3498db;" : "color:#e67e22;");
    document.getElementById('typeTag').innerHTML = `<span style="${colorStyle} font-weight:bold;">${statusLabel}</span>`;

    updateCount(); // Aggiorna contatore carte

    // Riabilita transizioni
    setTimeout(() => { el.style.transition = ''; }, 50);
}

function flipCard() {
    if (isFlipped) return;
    document.getElementById('flashcard').classList.add('flipped');
    isFlipped = true;
    document.getElementById('instructionText').innerText = "Come ti è sembrata?";
}

function handleResult(r) {
    if (!currentCard) return;
    userProgress[currentCard.id] = r; // Salva il risultato
    saveProgress();

    // Logica di ripetizione distanziata semplificata per la sessione
    if (r === 'perfect') {
        deck.shift(); // Rimuove la carta dal mazzo corrente
    } else {
        // Se sbagliata o incerta, la rimette nel mazzo tra 3 posizioni
        let m = deck.shift();
        deck.splice(Math.min(deck.length, 3), 0, m);
    }
    loadNextCard();
}

function updateCount() {
    document.getElementById('deckStatus').innerText = "Carte: " + deck.length;
}

// ==========================================
// 6. MOTORE FRASI (SENTENCES MODE)
// ==========================================
// Gestisce la modalità studio delle frasi

function startSentenceMode() {
    if (typeof sentenceBank === 'undefined') return alert("Errore Database Frasi.");

    // Filtra frasi fattibili (solo quelle dove conosci tutte le parole richieste)
    let validSentences = sentenceBank.filter(s => {
        if (!s.requires) return true;
        return s.requires.every(reqId => userProgress[reqId] === 'perfect');
    });

    if (validSentences.length === 0) return alert("Nessuna frase disponibile! Sblocca prima le parole fondamentali.");

    sentenceDeck = shuffleArray(validSentences);
    previousScreen = 'main-menu';
    showScreen('sentence-screen');
    loadNextSentence();
}

function loadNextSentence() {
    if (sentenceDeck.length === 0) {
        if (confirm("Frasi finite! Riavviare?")) startSentenceMode();
        else goToHome();
        return;
    }

    currentSentence = sentenceDeck[0];
    isSentFlipped = false;

    const cardEl = document.getElementById('sentFlashcard');
    cardEl.style.transition = 'none';
    cardEl.classList.remove('flipped');
    void cardEl.offsetWidth;

    document.getElementById('s_instructionText').innerText = "Tocca per tradurre";
    document.getElementById('s_langTag').innerText = getLangNameFull(currentSentence.lang);
    document.getElementById('s_langTag').style.color = getLangColor(currentSentence.lang);

    // Imposta direzione testo (RTL per Arabo)
    let dir = (currentSentence.lang === 'ar') ? 'rtl' : 'ltr';
    document.getElementById('s_wordDisplay').innerText = currentSentence.text;
    document.getElementById('s_wordDisplay').style.direction = dir;
    document.getElementById('s_backWordDisplay').innerText = currentSentence.text;
    document.getElementById('s_backWordDisplay').style.direction = dir;

    document.getElementById('s_pronunciationDisplay').innerText = currentSentence.pronunciation || "";
    document.getElementById('s_meaningDisplay').innerText = currentSentence.translation;
    document.getElementById('sentStatus').innerText = "Frasi: " + sentenceDeck.length;

    setTimeout(() => { cardEl.style.transition = ''; }, 50);
}

function flipSentenceCard() {
    if (isSentFlipped) return;
    document.getElementById('sentFlashcard').classList.add('flipped');
    isSentFlipped = true;
    document.getElementById('s_instructionText').innerText = "Avevi capito?";
}

function handleSentenceResult(r) {
    userSentenceProgress[currentSentence.id] = r;
    saveProgress();

    if (r === 'perfect') sentenceDeck.shift();
    else {
        let m = sentenceDeck.shift();
        sentenceDeck.push(m); // Rimette in fondo
    }
    loadNextSentence();
}

// Mostra statistiche frasi
function showSentenceProgress() {
    const list = document.getElementById('sent-progress-list');
    list.innerHTML = "";

    // Calcola statistiche
    let s = { t: sentenceBank.length, p: 0, h: 0, l: 0 };

    // Crea lista frasi
    sentenceBank.forEach(x => {
        let st = userSentenceProgress[x.id];
        let loc = false; // Bloccata?

        if (x.requires && !x.requires.every(k => userProgress[k] === 'perfect')) {
            loc = true; s.l++;
        } else if (st === 'perfect') s.p++;
        else if (st) s.h++;

        // Mostra solo se sbloccata o tentata
        if (st || !loc) {
            const i = document.createElement('div');
            i.className = 'prog-item';
            if (loc) i.classList.add('status-locked');

            let ic = loc ? '🔒' : (st === 'perfect' ? '<span class="dot dot-green"></span>' : '<span class="dot dot-yellow"></span>');

            i.innerHTML = `<div class="prog-info"><div class="prog-word" style="color:${getLangColor(x.lang)}">${x.text}</div><div class="prog-meaning">${x.translation}</div></div><div class="prog-status">${ic}</div>`;
            list.appendChild(i);
        }
    });

    // Aggiunge dashboard in cima
    const d = document.createElement('div');
    d.className = 'stats-dashboard';
    d.style.marginTop = "0";
    d.innerHTML = `<div class="stat-box"><span class="stat-num">${s.t}</span><span class="stat-label">Tot</span></div><div class="stat-box"><span class="stat-num" style="color:#2ecc71;">${s.p}</span><span class="stat-label">Perf</span></div><div class="stat-box"><span class="stat-num" style="color:#f1c40f;">${s.h}</span><span class="stat-label">Hard</span></div><div class="stat-box"><span class="stat-num" style="color:#aaa;">${s.l}</span><span class="stat-label">Lock</span></div>`;
    list.parentElement.insertBefore(d, list);

    showScreen('sent-progress-menu');
}

function closeSentProgress() {
    const m = document.getElementById('sent-progress-menu');
    const d = m.querySelector('.stats-dashboard');
    if (d) d.remove();
    showScreen('sentence-screen'); // Torna alla sessione frasi
}

// ==========================================
// 7. ALBERO DELLA CONOSCENZA (KNOWLEDGE TREE)
// ==========================================
// Gestisce la visualizzazione ad albero delle dipendenze

// Apre l'overlay dell'albero direttamente dal gioco
function openTreeOverlay() {
    if (!currentCard) return;
    document.getElementById('tree-screen').style.display = 'flex';
    renderTree(currentCard.lang);
}

function renderTree(filterLang) {
    const container = document.getElementById('tree-container');
    container.innerHTML = "";

    // Aggiorna bottoni filtro lingua
    document.querySelectorAll('#tree-screen .filter-btn').forEach(b => b.classList.remove('active'));
    let btnId = 'btn-tree-' + filterLang;
    if (document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');

    const allCards = getAllCards();
    const unlockedIds = Object.keys(userProgress).filter(id => userProgress[id] === 'perfect');

    // Trova le "Radici Visive" (Parent Cards)
    let rootCards = allCards.filter(c => {
        if (c.lang !== filterLang) return false; // Solo lingua selezionata
        if (!c.requires) return true; // È una radice vera (nessun requisito)

        let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
        // È una radice visiva se i suoi genitori NON sono stati ancora masterati/sbloccati
        // (Così l'albero mostra dove ti sei fermato)
        let parentsUnlocked = reqs.some(req => unlockedIds.includes(req));
        return !parentsUnlocked;
    });

    rootCards.sort((a, b) => a.word.localeCompare(b.word));

    const ul = document.createElement('ul');
    ul.className = 'tree';

    if (rootCards.length === 0) {
        container.innerHTML = `<p style="text-align:center; margin-top:20px; color:#999;">Nessuna carta trovata.</p>`;
        return;
    }

    // Costruisce l'albero ricorsivamente
    rootCards.forEach(root => {
        let li = document.createElement('li');
        li.appendChild(createNodeElement(root));

        let childrenHTML = findChildrenRecursive(root.id, allCards);
        if (childrenHTML) li.appendChild(childrenHTML);

        ul.appendChild(li);
    });

    container.appendChild(ul);
    document.getElementById('tree-stats').innerText = `Radici: ${rootCards.length}`;
}

// Crea l'elemento visuale per un nodo dell'albero
function createNodeElement(card) {
    let span = document.createElement('span');
    span.className = 'tree-node';
    if (card.grammar) span.classList.add('g-' + card.grammar); // Colora per grammatica

    // Tratteggiato se non è "perfect"
    if (userProgress[card.id] !== 'perfect') span.classList.add('node-locked');

    span.innerHTML = `<span class="node-lang">${getLangFlag(card.lang)}</span> ${card.word} <span class="node-meaning">(${card.meaning})</span>`;

    // Audio al click
    span.onclick = () => {
        let s = new SpeechSynthesisUtterance(card.word);
        if (card.lang === 'zh') s.lang = 'zh-CN';
        if (card.lang === 'ja') s.lang = 'ja-JP';
        if (card.lang === 'ar') s.lang = 'ar-SA';
        window.speechSynthesis.speak(s);
    };
    return span;
}

// Trova ricorsivamente i figli di una carta
function findChildrenRecursive(parentId, allCards) {
    let children = allCards.filter(c => {
        if (!c.requires) return false;
        let reqs = Array.isArray(c.requires) ? c.requires : [c.requires];
        return reqs.includes(parentId); // Se richiede il parentId, è un figlio
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
// 8. IMPOSTAZIONI E GESTIONE DATI
// ==========================================

function showSettingsMenu() {
    previousScreen = 'main-menu';
    updateThemeButtons();
    showScreen('settings-menu');
}

// --- GESTIONE TEMA ---
function loadSettings() {
    const m = localStorage.getItem('go_theme_mode') || 'auto';
    applyTheme(m);
    // Listener per il cambio preferenze sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('go_theme_mode') === 'auto') applyTheme('auto');
    });
}

function setTheme(m) {
    localStorage.setItem('go_theme_mode', m);
    applyTheme(m);
    updateThemeButtons();
}

function applyTheme(m) {
    const b = document.body;
    if (m === 'auto') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) b.classList.add('dark-mode');
        else b.classList.remove('dark-mode');
    } else if (m === 'dark') {
        b.classList.add('dark-mode');
    } else {
        b.classList.remove('dark-mode');
    }
}

function updateThemeButtons() {
    const m = localStorage.getItem('go_theme_mode') || 'auto';
    ['light', 'dark', 'auto'].forEach(k => {
        const b = document.getElementById('theme-' + k);
        if (b) (m === k) ? b.classList.add('active') : b.classList.remove('active');
    });
}

// --- IMPORT / EXPORT / RESET ---

function exportData() {
    let d = { f: userProgress, s: userSentenceProgress }; // f = flashcards, s = sentences
    const a = document.createElement('a');
    a.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(d));
    a.download = "go_backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function importData(i) {
    const f = i.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = e => {
        try {
            let d = JSON.parse(e.target.result);
            // Supporto vecchia versione (solo flashcards) e nuova (oggetto con f e s)
            if (d.f) { userProgress = d.f; userSentenceProgress = d.s || {}; }
            else userProgress = d;

            saveProgress();
            alert("Backup importato con successo!");
        } catch (x) { alert("Errore nel file di backup."); }
    };
    r.readAsText(f);
}

function showResetMenu() {
    renderCheckboxes('reset-topic-options', 'reset-lang-options');
    showScreen('reset-menu');
}

function performReset() {
    const c = document.getElementById('reset-menu');
    let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value);
    let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value);

    if (st.length === 0 && sl.length === 0) return alert("Seleziona cosa resettare!");
    if (!confirm("Sei sicuro di voler resettare i progressi selezionati?")) return;

    Object.keys(decks).forEach(k => {
        let d = decks[k];
        if (st.includes(d.tags[0]) || sl.includes(d.tags[1]))
            d.cards.forEach(x => {
                delete userProgress[x.id];
                delete userSentenceProgress[x.id];
            });
    });

    saveProgress();
    alert("Reset Completato.");
    showSettingsMenu();
}

// --- CHEAT MODE (SBLOCCO TOTALE) ---

function showCheatMenu() {
    renderCheckboxes('cheat-topic-options', 'cheat-lang-options');
    showScreen('cheat-menu');
}

function performUnlock() {
    const c = document.getElementById('cheat-menu');
    let st = Array.from(c.querySelectorAll('input[name="topic"]:checked')).map(x => x.value);
    let sl = Array.from(c.querySelectorAll('input[name="lang"]:checked')).map(x => x.value);

    if (st.length === 0 && sl.length === 0) return alert("Seleziona cosa sbloccare!");
    if (!confirm("Sbloccare tutte le carte selezionate?")) return;

    let cnt = 0;
    Object.keys(decks).forEach(k => {
        let d = decks[k];
        if (st.includes(d.tags[0]) || sl.includes(d.tags[1])) {
            d.cards.forEach(x => {
                userProgress[x.id] = 'perfect';
                cnt++;
            });
        }
    });

    saveProgress();
    alert(cnt + " carte sbloccate.");
    closeMenu('cheat-menu');
    showSettingsMenu();
}

// ==========================================
// 9. STATISTICHE GLOBALI
// ==========================================

function showGlobalProgress(filterLang = 'all') {
    // Gestione filtri visuali
    document.querySelectorAll('#progress-menu .filter-btn').forEach(b => b.classList.remove('active'));
    let btnId = 'btn-stats-' + filterLang;
    if (document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');

    let allCards = getAllCards();
    let displayCards = allCards;
    if (filterLang !== 'all') {
        displayCards = allCards.filter(c => c.lang === filterLang);
    }

    // Ordinamento: Lingua -> Alfabetico
    displayCards.sort((a, b) => {
        if (a.lang !== b.lang) return a.lang.localeCompare(b.lang);
        return a.word.localeCompare(b.word);
    });

    let stats = { t: displayCards.length, p: 0, l: 0, loc: 0 };
    const list = document.getElementById('progress-list');
    list.innerHTML = "";

    displayCards.forEach(c => {
        let parentsOk = true;
        if (c.requires) { parentsOk = c.requires.every(reqId => userProgress[reqId] === 'perfect'); }

        let st = userProgress[c.id];
        let isLocked = !parentsOk;

        if (isLocked) stats.loc++;
        else if (st === 'perfect') stats.p++;
        else if (st) stats.l++;

        // Costruzione Elemento Lista
        let iconHtml = '';
        let itemClass = 'prog-item';
        if (isLocked) { iconHtml = '🔒'; itemClass += ' status-locked'; }
        else if (st === 'perfect') { iconHtml = '<span class="dot dot-green"></span>'; }
        else if (st) { iconHtml = '<span class="dot dot-yellow"></span>'; }
        else { iconHtml = '<span class="dot dot-grey"></span>'; }

        let div = document.createElement('div');
        div.className = itemClass;
        // Mostra pronuncia solo se sbloccato
        div.innerHTML = `<div class="prog-info"><div class="prog-word" style="color:${getLangColor(c.lang)}">${c.word} <span style="font-size:0.7em; opacity:0.7;">${isLocked ? '' : (c.pronunciation || '')}</span></div><div class="prog-meaning">${c.meaning}</div></div><div class="prog-status">${iconHtml}</div>`;

        if (!isLocked) {
            div.onclick = () => {
                let s = new SpeechSynthesisUtterance(c.word);
                if (c.lang === 'zh') s.lang = 'zh-CN';
                if (c.lang === 'ja') s.lang = 'ja-JP';
                if (c.lang === 'ar') s.lang = 'ar-SA';
                window.speechSynthesis.speak(s);
            };
        }
        list.appendChild(div);
    });

    // Aggiorna contatori in alto
    document.getElementById('stat-total').innerText = stats.t;
    document.getElementById('stat-perfect').innerText = stats.p;
    document.getElementById('stat-learning').innerText = stats.l;
    document.getElementById('stat-locked').innerText = stats.loc;

    showScreen('progress-menu');
}

function closeProgress() {
    showScreen('main-menu');
}

// ==========================================
// 10. UTILITY E HELPER
// ==========================================

function getAllCards() {
    let a = [];
    Object.keys(decks).forEach(k => a = [...a, ...decks[k].cards]);
    return a;
}

function saveProgress() {
    localStorage.setItem('go_flashcards_progress', JSON.stringify(userProgress));
    localStorage.setItem('go_sentences_progress', JSON.stringify(userSentenceProgress));
}

function loadProgress() {
    const d = localStorage.getItem('go_flashcards_progress');
    if (d) userProgress = JSON.parse(d);
    const s = localStorage.getItem('go_sentences_progress');
    if (s) userSentenceProgress = JSON.parse(s);
}

// Algoritmo di mescolamento di Fisher-Yates
function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Helper per nomi e bandiere lingue
function getLangNameFull(c) {
    if (c === 'zh') return '🇨🇳 Chinese';
    if (c === 'ja') return '🇯🇵 Japanese';
    if (c === 'ar') return '🇸🇦 Arabic';
    return c;
}

function getLangName(c) {
    if (c === 'zh') return 'Cn';
    if (c === 'ar') return 'Ar';
    if (c === 'ja') return 'Jp';
    return c;
}

function getLangFlag(lang) {
    if (lang === 'zh') return '🇨🇳';
    if (lang === 'ja') return '🇯🇵';
    if (lang === 'ar') return '🇸🇦';
    return lang;
}

function getLangColor(c) {
    if (c === 'zh') return '#e74c3c';
    if (c === 'ar') return '#27ae60';
    if (c === 'ja') return '#8e44ad';
    return '#333';
}

function updateLangStyle(c) {
    document.getElementById('langTag').style.color = getLangColor(c);
}

// Helper per la sintesi vocale chiamata dall'HTML
window.speakWordScript = function () {
    const sentScreen = document.getElementById('sentence-screen');

    // Se siamo nella schermata frasi
    if (sentScreen && sentScreen.style.display === 'flex') {
        if (!currentSentence) return;
        let t = currentSentence.text;
        let s = new SpeechSynthesisUtterance(t);
        if (currentSentence.lang === 'zh') s.lang = 'zh-CN';
        else if (currentSentence.lang === 'ja') s.lang = 'ja-JP';
        else if (currentSentence.lang === 'ar') s.lang = 'ar-SA';
        else s.lang = 'en-US';
        window.speechSynthesis.speak(s);
        return;
    }

    // Se siamo nella schermata flashcard normale
    if (!currentCard) return;
    let t = currentCard.word;
    // Fix per arabo: rimuove spazi extra per pronuncia migliore
    if (currentCard.lang === 'ar') t = t.replace(/\s/g, '');
    let s = new SpeechSynthesisUtterance(t);
    if (currentCard.lang === 'zh') s.lang = 'zh-CN';
    else if (currentCard.lang === 'ja') s.lang = 'ja-JP';
    else if (currentCard.lang === 'ar') s.lang = 'ar-SA';
    window.speechSynthesis.speak(s);
}