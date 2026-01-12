const decks = {
    // ============================================================
    // 1. FONDAMENTALI (IL "LIVELLO 0" - I MATTONCINI UNIVERSALI)
    // ============================================================
    // Qui ci sono Radici, Radicali e Concetti Base che servono per TUTTI gli altri mazzi.
    
    "fondamentali_zh": {
        title: "Fondamentali (Cinese)", tags: ["fondamentali", "zh"],
        cards: [
            // PERSONE & CORPO
            { id: "rad_uomo", lang: "zh", level: 1, word: "人", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna", lang: "zh", level: 1, word: "女", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino", lang: "zh", level: 1, word: "子", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca", lang: "zh", level: 1, word: "口", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore", lang: "zh", level: 1, word: "心", meaning: "Cuore", type: "base", pos: "noun" },
            
            // ELEMENTI NATURALI (Spostati qui perché servono ovunque)
            { id: "rad_albero", lang: "zh", level: 1, word: "木", meaning: "Albero/Legno", type: "base", pos: "noun" },
            { id: "rad_acqua", lang: "zh", level: 1, word: "水", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "rad_fuoco", lang: "zh", level: 1, word: "火", meaning: "Fuoco", type: "base", pos: "noun" },
            { id: "rad_terra", lang: "zh", level: 1, word: "土", meaning: "Terra/Suolo", type: "base", pos: "noun" },
            { id: "rad_sole", lang: "zh", level: 1, word: "日", meaning: "Sole/Giorno", type: "base", pos: "noun" },
            { id: "rad_luna", lang: "zh", level: 1, word: "月", meaning: "Luna/Mese", type: "base", pos: "noun" },
            { id: "rad_pioggia", lang: "zh", level: 1, word: "雨", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "rad_campo", lang: "zh", level: 1, word: "田", meaning: "Campo", type: "base", pos: "place" },

            // OGGETTI & AZIONI BASE
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", meaning: "Tetto (Radicale)", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", meaning: "Porta", type: "base", pos: "place" },
            { id: "rad_veicolo", lang: "zh", level: 1, word: "车", meaning: "Veicolo/Auto", type: "base", pos: "noun" },
            { id: "rad_forza", lang: "zh", level: 1, word: "力", meaning: "Forza", type: "base", pos: "noun" },
            
            // CONCETTI ASTRATTI
            { id: "base_grande", lang: "zh", level: 1, word: "大", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo", lang: "zh", level: 1, word: "小", meaning: "Piccolo", type: "base", pos: "adj" },
            { id: "base_mezzo", lang: "zh", level: 1, word: "中", meaning: "Centro/Mezzo", type: "base", pos: "adj" }
        ]
    },

    "fondamentali_ja": {
        title: "Fondamentali (Giapponese)", tags: ["fondamentali", "ja"],
        cards: [
            // PERSONE
            { id: "rad_uomo_ja", lang: "ja", level: 1, word: "人", pronunciation: "ひと", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna_ja", lang: "ja", level: 1, word: "女", pronunciation: "おんな", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino_ja", lang: "ja", level: 1, word: "子", pronunciation: "こ", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca_ja", lang: "ja", level: 1, word: "口", pronunciation: "くち", meaning: "Bocca", type: "base", pos: "noun" },
            
            // ELEMENTI NATURALI
            { id: "rad_albero_ja", lang: "ja", level: 1, word: "木", pronunciation: "き", meaning: "Albero", type: "base", pos: "noun" },
            { id: "rad_acqua_ja", lang: "ja", level: 1, word: "水", pronunciation: "みず", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "rad_fuoco_ja", lang: "ja", level: 1, word: "火", pronunciation: "ひ", meaning: "Fuoco", type: "base", pos: "noun" },
            { id: "rad_terra_ja", lang: "ja", level: 1, word: "土", pronunciation: "つち", meaning: "Terra", type: "base", pos: "noun" },
            { id: "rad_sole_ja", lang: "ja", level: 1, word: "日", pronunciation: "ひ", meaning: "Sole/Giorno", type: "base", pos: "noun" },
            { id: "rad_luna_ja", lang: "ja", level: 1, word: "月", pronunciation: "つき", meaning: "Luna", type: "base", pos: "noun" },
            { id: "rad_pioggia_ja", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "rad_cielo_ja", lang: "ja", level: 1, word: "空", pronunciation: "そら", meaning: "Cielo/Vuoto", type: "base", pos: "place" },

            // OGGETTI
            { id: "rad_veicolo_ja", lang: "ja", level: 1, word: "車", pronunciation: "くるま", meaning: "Auto/Veicolo", type: "base", pos: "noun" },
            { id: "rad_porta_ja", lang: "ja", level: 1, word: "門", pronunciation: "もん", meaning: "Cancello/Porta", type: "base", pos: "place" },
            
            // CONCETTI
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "だい", meaning: "Grande (Concetto)", type: "base", pos: "adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "しょう", meaning: "Piccolo (Concetto)", type: "base", pos: "adj" }
        ]
    },

    "fondamentali_ar": {
        title: "Fondamentali (Arabo)", tags: ["fondamentali", "ar"],
        cards: [
            // RADICI UNIVERSALI (Servono per Natura, Viaggio, Cibo, Verbi)
            { id: "root_ktb", lang: "ar", level: 1, word: "ك ت ب", pronunciation: "K-T-B", meaning: "Radice: Scrivere", type: "base", pos: "root" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ ك ل", pronunciation: "'-K-L", meaning: "Radice: Mangiare", type: "base", pos: "root" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش ر ب", pronunciation: "Sh-R-B", meaning: "Radice: Bere", type: "base", pos: "root" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك ب ر", pronunciation: "K-B-R", meaning: "Radice: Grande", type: "base", pos: "root" },
            
            // RADICI TEMATICHE (Spostate dai mazzi specifici)
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", meaning: "Radice: Terra", type: "base", pos: "root" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", meaning: "Radice: Sole", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", meaning: "Radice: Luna", type: "base", pos: "root" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", meaning: "Radice: Mare", type: "base", pos: "root" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", meaning: "Radice: Montagna", type: "base", pos: "root" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", meaning: "Radice: Albero", type: "base", pos: "root" },
            { id: "root_sfr", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", meaning: "Radice: Viaggio", type: "base", pos: "root" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", meaning: "Radice: Volare", type: "base", pos: "root" },
            
            // PAROLE BASE (Non radici, ma fondamentali)
            { id: "base_ma", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", meaning: "Acqua", type: "base", pos: "noun" }
        ]
    },

    // ==========================================
    // 2. NATURA (Tutto Livello 2+, derivato dai Fondamentali)
    // ==========================================
    "natura_zh": {
        title: "Natura (Cinese)", tags: ["natura", "zh"], 
        cards: [
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", meaning: "Montagna", type: "base", pos: "place" }, // Montagna è anche un radicale a sé
            { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", meaning: "Cielo", type: "base", pos: "place" }, // Grande + Uno
            // Derivati (Usano id dei fondamentali)
            { id: "zh13", lang: "zh", level: 2, word: "林", pronunciation: "lín", meaning: "Bosco", type: "derivato", requires: ["rad_albero"], pos: "place" },
            { id: "zh14", lang: "zh", level: 2, word: "森", pronunciation: "sēn", meaning: "Foresta", type: "derivato", requires: ["rad_albero"], pos: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", meaning: "Fiume", type: "derivato", requires: ["rad_acqua"], pos: "place" },
            { id: "zh16", lang: "zh", level: 2, word: "海", pronunciation: "hǎi", meaning: "Mare", type: "derivato", requires: ["rad_acqua"], pos: "place" },
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco", "zh7"], pos: "place" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", meaning: "Fiore", type: "derivato", requires: ["rad_albero"], pos: "noun" }, // Semplificazione (ha il radicale erba, ma usiamo albero per ora)
            { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", meaning: "Neve", type: "derivato", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh30", lang: "zh", level: 3, word: "电", pronunciation: "diàn", meaning: "Elettricità", type: "base", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh31", lang: "zh", level: 3, word: "雷", pronunciation: "léi", meaning: "Tuono", type: "derivato", requires: ["rad_pioggia", "rad_campo"], pos: "noun" },
            { id: "zh34", lang: "zh", level: 3, word: "春", pronunciation: "chūn", meaning: "Primavera", type: "base", requires: ["rad_sole"], pos: "noun" },
            { id: "zh36", lang: "zh", level: 3, word: "秋", pronunciation: "qiū", meaning: "Autunno", type: "base", requires: ["rad_fuoco"], pos: "noun" }
        ]
    },
    "natura_ja": {
        title: "Natura (Giapponese)", tags: ["natura", "ja"],
        cards: [
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", meaning: "Fiume", type: "base", pos: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", meaning: "Montagna", type: "base", pos: "place" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", meaning: "Foresta", type: "base", requires: ["rad_albero_ja"], pos: "place" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco_ja", "ja2"], pos: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", meaning: "Fiore", type: "base", pos: "noun" },
            { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", meaning: "Nuvola", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" },
            { id: "ja35", lang: "ja", level: 3, word: "春", pronunciation: "はる", meaning: "Primavera", type: "base", requires: ["rad_sole_ja"], pos: "noun" }
        ]
    },
    "natura_ar": {
        title: "Natura (Arabo)", tags: ["natura", "ar"],
        cards: [
            // Derivati dalle radici fondamentali
            { id: "ar12", lang: "ar", level: 2, word: "أَرْض", pronunciation: "arḍ", meaning: "Terra/Suolo", type: "derivato", requires: ["root_ard"], pos: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", meaning: "Sole", type: "derivato", requires: ["root_shms"], pos: "noun" },
            { id: "ar15", lang: "ar", level: 2, word: "قَمَر", pronunciation: "qamar", meaning: "Luna", type: "derivato", requires: ["root_qmr"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر", pronunciation: "baḥr", meaning: "Mare", type: "derivato", requires: ["root_bhr"], pos: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "jabal", meaning: "Montagna", type: "derivato", requires: ["root_jbl"], pos: "place" },
            { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "shajara", meaning: "Albero", type: "derivato", requires: ["root_shjr"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "ghāba", meaning: "Foresta", type: "derivato", requires: ["ar23"], pos: "place" }
        ]
    },

    // ==========================================
    // 3. VIAGGIO (Derivati dai Fondamentali)
    // ==========================================
    "viaggio_zh": {
        title: "Viaggio (Cinese)", tags: ["viaggio", "zh"],
        cards: [
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", meaning: "Macchina", type: "base", requires: ["rad_albero"], pos: "noun" }, // Spesso contiene legno
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", meaning: "Aereo", type: "derivato", requires: ["v_zh3", "v_zh4"], pos: "noun" },
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", meaning: "Treno", type: "derivato", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" }, // Veicolo di Fuoco!
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", meaning: "Stazione", type: "derivato", requires: ["rad_veicolo"], pos: "place" },
            { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", meaning: "Ingresso/Uscita", type: "derivato", requires: ["rad_porta", "rad_bocca"], pos: "place" } // Porta + Bocca
        ]
    },
    "viaggio_ja": {
        title: "Viaggio (Giapponese)", tags: ["viaggio", "ja"],
        cards: [
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", meaning: "Treno", type: "derivato", requires: ["rad_veicolo_ja"], pos: "noun" },
            { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", meaning: "Entrata", type: "base", requires: ["rad_bocca_ja"], pos: "place" }
        ]
    },
    "viaggio_ar": {
        title: "Viaggio (Arabo)", tags: ["viaggio", "ar"],
        cards: [
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", meaning: "Viaggio", type: "derivato", requires: ["root_sfr"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", meaning: "Aeroporto", type: "derivato", requires: ["root_tyr"], pos: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", meaning: "Aereo", type: "derivato", requires: ["root_tyr"], pos: "noun" }
        ]
    },

    // ==========================================
    // 4. CIBO & GRAMMATICA (Aggiornati)
    // ==========================================
    "cibo_zh": { title: "Cibo (Cinese)", tags: ["cibo", "zh"], cards: [ { id: "c_zh2", lang: "zh", level: 1, word: "茶", pronunciation: "chá", meaning: "Tè", type: "base", pos: "drink" }, { id: "c_zh4", lang: "zh", level: 1, word: "苹果", pronunciation: "píngguǒ", meaning: "Mela", type: "base", pos: "food" } ] },
    "cibo_ar": { title: "Cibo (Arabo)", tags: ["cibo", "ar"], cards: [ { id: "c_ar1", lang: "ar", level: 1, word: "خُبْز", pronunciation: "khubz", meaning: "Pane", type: "base", pos: "food" }, { id: "c_ar2", lang: "ar", level: 1, word: "شَاي", pronunciation: "shāy", meaning: "Tè", type: "base", pos: "drink" }, { id: "c_ar4", lang: "ar", level: 1, word: "تُفَّاح", pronunciation: "tuffāḥ", meaning: "Mela", type: "base", pos: "food" } ] },
    "grammatica_zh": { title: "Grammatica (Cinese)", tags: ["grammatica", "zh"], cards: [ { id: "g_zh1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", meaning: "Io", type: "base", pos: "pronoun" }, { id: "g_zh2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", meaning: "Tu", type: "derivato", requires:["rad_uomo"], pos: "pronoun" }, { id: "g_zh6", lang: "zh", level: 1, word: "吃", pronunciation: "chī", meaning: "Mangiare", type: "derivato", requires:["rad_bocca"], pos: "verb_eat" } ] },
    "grammatica_ar": { title: "Grammatica (Arabo)", tags: ["grammatica", "ar"], cards: [ { id: "g_ar1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", meaning: "Io", type: "base", pos: "pronoun" }, { id: "g_ar7", lang: "ar", level: 1, word: "يَأْكُلُ", pronunciation: "ya'kulu", meaning: "Mangia", type: "derivato", requires: ["root_akl"], pos: "verb_eat" } ] }
};

// ==========================================
// BANCO FRASI
// ==========================================
const sentenceBank = [
    { id: "s_zh1", lang: "zh", text: "我吃苹果", pronunciation: "Wǒ chī píngguǒ", translation: "Io mangio la mela", requires: ["g_zh1", "g_zh6", "c_zh4"] },
    { id: "s_zh2", lang: "zh", text: "那是火山", pronunciation: "Nà shì huǒshān", translation: "Quello è un vulcano", requires: ["zh17"] },
    { id: "s_zh3", lang: "zh", text: "我坐火车", pronunciation: "Wǒ zuò huǒchē", translation: "Prendo il treno", requires: ["g_zh1", "v_zh6"] },
    { id: "s_ar1", lang: "ar", text: "أَنَا آكُلُ تُفَّاح", pronunciation: "Ana ākulu tuffāḥ", translation: "Io mangio la mela", requires: ["g_ar1", "g_ar7", "c_ar4"] },
    { id: "s_ar2", lang: "ar", text: "أُحِبُّ الْبَحْر", pronunciation: "Uḥibbu al-baḥr", translation: "Amo il mare", requires: ["ar17"] }, // Richiede Mare (che richiede radice Mare)
    { id: "s_ja1", lang: "ja", text: "川はきれいです", pronunciation: "Kawa wa kirei desu", translation: "Il fiume è bello", requires: ["ja1"] }
];
