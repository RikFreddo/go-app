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

let lastSessionConfig = null; // Memorizza l'ultima configurazione di sessione per i filtri

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

    // Salva la configurazione per i filtri statistiche
    lastSessionConfig = { topics: st, langs: sl };

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

// Seleziona o Deseleziona tutti i checkbox di un certo tipo (topic o lang)
function toggleAll(name, state) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    checkboxes.forEach(cb => cb.checked = state);
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

function showGlobalProgress(filter = 'all') {
    // Gestione filtri visuali
    document.querySelectorAll('#progress-menu .filter-btn').forEach(b => b.classList.remove('active'));
    let btnId = 'btn-stats-' + filter;
    if (document.getElementById(btnId)) document.getElementById(btnId).classList.add('active');

    let allCards = [];

    // Logica di Filtro
    if (filter === 'session') {
        if (!lastSessionConfig) {
            alert("Nessuna sessione recente trovata. Mostro tutte le carte.");
            allCards = getAllCards();
            document.getElementById('btn-stats-all').classList.add('active');
            if (document.getElementById('btn-stats-session')) document.getElementById('btn-stats-session').classList.remove('active');
        } else {
            // Raccoglie solo i mazzi della sessione corrente
            Object.keys(decks).forEach(k => {
                let d = decks[k];
                if (lastSessionConfig.topics.includes(d.tags[0]) && lastSessionConfig.langs.includes(d.tags[1])) {
                    allCards = [...allCards, ...d.cards];
                }
            });
        }
    } else if (filter === 'all') {
        allCards = getAllCards();
    } else {
        // Filtro per lingua
        allCards = getAllCards().filter(c => c.lang === filter);
    }

    let displayCards = allCards;

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

