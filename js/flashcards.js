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

