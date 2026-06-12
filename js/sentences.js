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

