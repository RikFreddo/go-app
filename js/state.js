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

// Expose getters for testing
if (typeof window !== 'undefined') {
    window.getState = () => ({
        playDeck, currentCard, deck, userProgress, userSentenceProgress,
        previousScreen, appMode, sentenceDeck, currentSentence,
        isSentFlipped, isFlipped
    });
}
