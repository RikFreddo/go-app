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

// Expose to window for testing
if (typeof window !== 'undefined') {
    window.getAllCards = typeof getAllCards !== 'undefined' ? getAllCards : undefined;
    window.saveProgress = typeof saveProgress !== 'undefined' ? saveProgress : undefined;
    window.loadProgress = typeof loadProgress !== 'undefined' ? loadProgress : undefined;
    window.shuffleArray = typeof shuffleArray !== 'undefined' ? shuffleArray : undefined;
    window.capitalize = typeof capitalize !== 'undefined' ? capitalize : undefined;
    window.getLangNameFull = typeof getLangNameFull !== 'undefined' ? getLangNameFull : undefined;
    window.getLangName = typeof getLangName !== 'undefined' ? getLangName : undefined;
    window.getLangFlag = typeof getLangFlag !== 'undefined' ? getLangFlag : undefined;
    window.getLangColor = typeof getLangColor !== 'undefined' ? getLangColor : undefined;
    window.updateLangStyle = typeof updateLangStyle !== 'undefined' ? updateLangStyle : undefined;
}
