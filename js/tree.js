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

