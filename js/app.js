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

