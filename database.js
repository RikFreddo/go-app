const decks = {
    // === GRAMMATICA ===
    "grammatica_zh": {
        title: "Grammatica (Cinese)", tags: ["grammatica", "zh"],
        cards: [
            { id: "g_zh1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_zh2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", meaning: "Tu", type: "base", pos: "pronoun" },
            { id: "g_zh3", lang: "zh", level: 1, word: "是", pronunciation: "shì", meaning: "Essere", type: "base", pos: "verb" },
            { id: "g_zh4", lang: "zh", level: 1, word: "在", pronunciation: "zài", meaning: "Stare a / In", type: "base", pos: "prep" },
            { id: "g_zh5", lang: "zh", level: 1, word: "看", pronunciation: "kàn", meaning: "Guardare", type: "base", pos: "verb" },
            { id: "g_zh6", lang: "zh", level: 1, word: "吃", pronunciation: "chī", meaning: "Mangiare", type: "base", pos: "verb" },
            { id: "g_zh7", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb" },
            { id: "g_zh8", lang: "zh", level: 1, word: "喝", pronunciation: "hē", meaning: "Bere", type: "base", pos: "verb" },
            { id: "g_zh11", lang: "zh", level: 1, word: "买", pronunciation: "mǎi", meaning: "Comprare", type: "base", pos: "verb" },
            { id: "g_zh12", lang: "zh", level: 1, word: "要", pronunciation: "yào", meaning: "Volere", type: "base", pos: "verb" },
            { id: "g_zh13", lang: "zh", level: 1, word: "爱", pronunciation: "ài", meaning: "Amare", type: "base", pos: "verb" },
            { id: "g_zh14", lang: "zh", level: 2, word: "大", pronunciation: "dà", meaning: "Grande", type: "base", pos: "adj" },
            { id: "g_zh15", lang: "zh", level: 2, word: "好", pronunciation: "hǎo", meaning: "Buono", type: "base", pos: "adj" },
            { id: "g_zh16", lang: "zh", level: 2, word: "好吃", pronunciation: "hǎochī", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "g_zh17", lang: "zh", level: 2, word: "漂亮", pronunciation: "piàoliang", meaning: "Bello", type: "base", pos: "adj" }
        ]
    },
    "grammatica_ja": {
        title: "Grammatica (Giapponese)", tags: ["grammatica", "ja"],
        cards: [
            { id: "g_ja1", lang: "ja", level: 1, word: "私", pronunciation: "わたし", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ja2", lang: "ja", level: 1, word: "あなた", pronunciation: "あなた", meaning: "Tu", type: "base", pos: "pronoun" },
            { id: "g_ja3", lang: "ja", level: 1, word: "見る", pronunciation: "みる", meaning: "Guardare", type: "base", pos: "verb" },
            { id: "g_ja4", lang: "ja", level: 1, word: "食べる", pronunciation: "たべる", meaning: "Mangiare", type: "base", pos: "verb" },
            { id: "g_ja5", lang: "ja", level: 1, word: "好き", pronunciation: "すき", meaning: "Piacere", type: "base", pos: "adj" },
            { id: "g_ja6", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb" },
            { id: "g_ja7", lang: "ja", level: 1, word: "飲む", pronunciation: "のむ", meaning: "Bere", type: "base", pos: "verb" },
            { id: "g_ja10", lang: "ja", level: 1, word: "買う", pronunciation: "かう", meaning: "Comprare", type: "base", pos: "verb" },
            { id: "g_ja11", lang: "ja", level: 2, word: "美味しい", pronunciation: "おいしい", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "g_ja12", lang: "ja", level: 2, word: "大きい", pronunciation: "おおきい", meaning: "Grande", type: "base", pos: "adj" },
            { id: "g_ja13", lang: "ja", level: 2, word: "綺麗", pronunciation: "きれい", meaning: "Bello", type: "base", pos: "adj" }
        ]
    },
    "grammatica_ar": {
        title: "Grammatica (Arabo)", tags: ["grammatica", "ar"],
        cards: [
            { id: "g_ar1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ar2", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", meaning: "Lui", type: "base", pos: "pronoun" },
            { id: "g_ar3", lang: "ar", level: 1, word: "فِي", pronunciation: "fi", meaning: "In / Dentro", type: "base", pos: "prep" },
            { id: "g_ar4", lang: "ar", level: 1, word: "يَرَى", pronunciation: "yarā", meaning: "Vede", type: "base", pos: "verb" },
            { id: "g_ar5", lang: "ar", level: 1, word: "كَبِير", pronunciation: "kabīr", meaning: "Grande", type: "base", pos: "adj" },
            { id: "g_ar6", lang: "ar", level: 1, word: "يَذْهَبُ", pronunciation: "yadhhabu", meaning: "Va", type: "base", pos: "verb" },
            { id: "g_ar7", lang: "ar", level: 1, word: "يَأْكُلُ", pronunciation: "ya'kulu", meaning: "Mangia", type: "base", pos: "verb" },
            { id: "g_ar8", lang: "ar", level: 1, word: "يَشْرَبُ", pronunciation: "yashrabu", meaning: "Beve", type: "base", pos: "verb" },
            { id: "g_ar11", lang: "ar", level: 1, word: "يَشْتَرِي", pronunciation: "yashtarī", meaning: "Compra", type: "base", pos: "verb" },
            { id: "g_ar12", lang: "ar", level: 1, word: "يُرِيدُ", pronunciation: "yurīdu", meaning: "Vuole", type: "base", pos: "verb" },
            { id: "g_ar14", lang: "ar", level: 2, word: "جَمِيل", pronunciation: "jamīl", meaning: "Bello", type: "base", pos: "adj" },
            { id: "g_ar15", lang: "ar", level: 2, word: "لَذِيذ", pronunciation: "ladhīdh", meaning: "Delizioso", type: "base", pos: "adj" }
        ]
    },

    // === CIBO ===
    "cibo_zh": {
        title: "Cibo (Cinese)", tags: ["cibo", "zh"],
        cards: [
            { id: "c_zh1", lang: "zh", level: 1, word: "饭", pronunciation: "fàn", meaning: "Riso", type: "base" },
            { id: "c_zh2", lang: "zh", level: 1, word: "茶", pronunciation: "chá", meaning: "Tè", type: "base" },
            { id: "c_zh3", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", meaning: "Acqua", type: "base" },
            { id: "c_zh4", lang: "zh", level: 1, word: "苹果", pronunciation: "píngguǒ", meaning: "Mela", type: "base" },
            { id: "c_zh5", lang: "zh", level: 1, word: "肉", pronunciation: "ròu", meaning: "Carne", type: "base" }
        ]
    },
    "cibo_ja": {
        title: "Cibo (Giapponese)", tags: ["cibo", "ja"],
        cards: [
            { id: "c_ja1", lang: "ja", level: 1, word: "ご飯", pronunciation: "ごはん", meaning: "Riso", type: "base" },
            { id: "c_ja2", lang: "ja", level: 1, word: "お茶", pronunciation: "おちゃ", meaning: "Tè", type: "base" },
            { id: "c_ja3", lang: "ja", level: 1, word: "水", pronunciation: "みず", meaning: "Acqua", type: "base" },
            { id: "c_ja4", lang: "ja", level: 1, word: "りんご", pronunciation: "りんご", meaning: "Mela", type: "base" },
            { id: "c_ja5", lang: "ja", level: 1, word: "肉", pronunciation: "にく", meaning: "Carne", type: "base" },
            { id: "c_ja6", lang: "ja", level: 1, word: "魚", pronunciation: "さかな", meaning: "Pesce", type: "base" }
        ]
    },
    "cibo_ar": {
        title: "Cibo (Arabo)", tags: ["cibo", "ar"],
        cards: [
            { id: "c_ar1", lang: "ar", level: 1, word: "خُبْز", pronunciation: "khubz", meaning: "Pane", type: "base" },
            { id: "c_ar2", lang: "ar", level: 1, word: "شَاي", pronunciation: "shāy", meaning: "Tè", type: "base" },
            { id: "c_ar3", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", meaning: "Acqua", type: "base" },
            { id: "c_ar4", lang: "ar", level: 1, word: "تُفَّاح", pronunciation: "tuffāḥ", meaning: "Mela", type: "base" },
            { id: "c_ar5", lang: "ar", level: 1, word: "لَحْم", pronunciation: "laḥm", meaning: "Carne", type: "base" }
        ]
    },

    // === NATURA ===
    "natura_zh": {
        title: "Natura (Cinese)", tags: ["natura", "zh"], 
        cards: [
            { id: "zh1", lang: "zh", level: 1, word: "木", pronunciation: "mù", meaning: "Albero", type: "base" },
            { id: "zh2", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", meaning: "Acqua", type: "base" },
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", meaning: "Montagna", type: "base" },
            { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", meaning: "Cielo", type: "base" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", meaning: "Fiore", type: "base" }
        ]
    },
    "natura_ja": {
        title: "Natura (Giapponese)", tags: ["natura", "ja"],
        cards: [
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", meaning: "Fiume", type: "base" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", meaning: "Montagna", type: "base" },
            { id: "ja6", lang: "ja", level: 1, word: "空", pronunciation: "そら", meaning: "Cielo", type: "base" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", meaning: "Fiore", type: "base" }
        ]
    },
    "natura_ar": {
        title: "Natura (Arabo)", tags: ["natura", "ar"],
        cards: [
            { id: "ar4", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", meaning: "Acqua", type: "base" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", meaning: "Sole", type: "base" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر", pronunciation: "baḥr", meaning: "Mare", type: "base" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "jabal", meaning: "Montagna", type: "base" },
            { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "shajara", meaning: "Albero", type: "base" }
        ]
    },

    // === VIAGGIO ===
    "viaggio_zh": {
        title: "Viaggio (Cinese)", tags: ["viaggio", "zh"],
        cards: [
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base" },
            { id: "v_zh2", lang: "zh", level: 1, word: "车", pronunciation: "chē", meaning: "Auto", type: "base" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", meaning: "Aereo", type: "base" },
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", meaning: "Stazione", type: "base" },
            { id: "v_zh17", lang: "zh", level: 3, word: "旅馆", pronunciation: "lǚguǎn", meaning: "Hotel", type: "base" }
        ]
    },
    "viaggio_ja": {
        title: "Viaggio (Giapponese)", tags: ["viaggio", "ja"],
        cards: [
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base" },
            { id: "v_ja2", lang: "ja", level: 1, word: "車", pronunciation: "くるま", meaning: "Auto", type: "base" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", meaning: "Stazione", type: "base" },
            { id: "v_ja7", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", meaning: "Hotel", type: "base" },
            { id: "v_ja12", lang: "ja", level: 2, word: "切符", pronunciation: "きっぷ", meaning: "Biglietto", type: "base" }
        ]
    },
    "viaggio_ar": {
        title: "Viaggio (Arabo)", tags: ["viaggio", "ar"],
        cards: [
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", meaning: "Aeroporto", type: "base" },
            { id: "v_ar11", lang: "ar", level: 3, word: "جَوَاز", pronunciation: "jawāz", meaning: "Passaporto", type: "base" },
            { id: "v_ar14", lang: "ar", level: 3, word: "فُنْدُق", pronunciation: "funduq", meaning: "Hotel", type: "base" }
        ]
    }
};

// ==========================================
// BANCO FRASI (Pre-scritte e corrette)
// ==========================================
const sentenceBank = [
    // --- CINESE ---
    { id: "s_zh1", lang: "zh", text: "我吃苹果", pronunciation: "Wǒ chī píngguǒ", translation: "Io mangio la mela", requires: ["g_zh1", "g_zh6", "c_zh4"] },
    { id: "s_zh2", lang: "zh", text: "你好", pronunciation: "Nǐ hǎo", translation: "Ciao (Tu bene)", requires: ["g_zh2", "g_zh15"] },
    { id: "s_zh3", lang: "zh", text: "苹果很好吃", pronunciation: "Píngguǒ hěn hǎochī", translation: "La mela è deliziosa", requires: ["c_zh4", "g_zh16"] },
    { id: "s_zh4", lang: "zh", text: "我要水", pronunciation: "Wǒ yào shuǐ", translation: "Voglio dell'acqua", requires: ["g_zh1", "g_zh12", "c_zh3"] },
    { id: "s_zh5", lang: "zh", text: "我在车站", pronunciation: "Wǒ zài chēzhàn", translation: "Io sono in stazione", requires: ["g_zh1", "g_zh4", "v_zh7"] },
    { id: "s_zh6", lang: "zh", text: "他去旅馆", pronunciation: "Tā qù lǚguǎn", translation: "Lui va all'hotel", requires: ["g_zh9", "g_zh7", "v_zh17"] },
    { id: "s_zh7", lang: "zh", text: "大山", pronunciation: "Dà shān", translation: "Grande montagna", requires: ["g_zh14", "zh7"] },
    { id: "s_zh8", lang: "zh", text: "我爱中国菜", pronunciation: "Wǒ ài Zhōngguó cài", translation: "Amo il cibo cinese", requires: ["g_zh1", "g_zh13", "c_zh1"] },
    { id: "s_zh9", lang: "zh", text: "你看花吗？", pronunciation: "Nǐ kàn huā ma?", translation: "Guardi i fiori?", requires: ["g_zh2", "g_zh5", "zh19"] },
    { id: "s_zh10", lang: "zh", text: "我要买票", pronunciation: "Wǒ yào mǎi piào", translation: "Voglio comprare un biglietto", requires: ["g_zh1", "g_zh12", "g_zh11", "v_zh8"] },
    { id: "s_zh11", lang: "zh", text: "飞机很大", pronunciation: "Fēijī hěn dà", translation: "L'aereo è grande", requires: ["v_zh5", "g_zh14"] },
    { id: "s_zh12", lang: "zh", text: "她是漂亮的", pronunciation: "Tā shì piàoliang de", translation: "Lei è bella", requires: ["g_zh10", "g_zh3", "g_zh17"] },
    { id: "s_zh13", lang: "zh", text: "我想喝茶", pronunciation: "Wǒ xiǎng hē chá", translation: "Vorrei bere del tè", requires: ["g_zh1", "g_zh8", "c_zh2"] },
    { id: "s_zh14", lang: "zh", text: "这是肉", pronunciation: "Zhè shì ròu", translation: "Questa è carne", requires: ["g_zh3", "c_zh5"] },
    { id: "s_zh15", lang: "zh", text: "我坐火车", pronunciation: "Wǒ zuò huǒchē", translation: "Prendo il treno", requires: ["g_zh1", "v_zh6"] },

    // --- GIAPPONESE ---
    { id: "s_ja1", lang: "ja", text: "私はりんごを食べます", pronunciation: "Watashi wa ringo o tabemasu", translation: "Io mangio la mela", requires: ["g_ja1", "c_ja4", "g_ja4"] },
    { id: "s_ja2", lang: "ja", text: "これは水です", pronunciation: "Kore wa mizu desu", translation: "Questa è acqua", requires: ["c_ja3"] },
    { id: "s_ja3", lang: "ja", text: "駅に行きます", pronunciation: "Eki ni ikimasu", translation: "Vado alla stazione", requires: ["v_ja4", "g_ja6"] },
    { id: "s_ja4", lang: "ja", text: "山は大きいです", pronunciation: "Yama wa ookii desu", translation: "La montagna è grande", requires: ["ja2", "g_ja12"] },
    { id: "s_ja5", lang: "ja", text: "お茶が好きです", pronunciation: "Ocha ga suki desu", translation: "Mi piace il tè", requires: ["c_ja2", "g_ja5"] },
    { id: "s_ja6", lang: "ja", text: "花はきれいです", pronunciation: "Hana wa kirei desu", translation: "Il fiore è bello", requires: ["ja13", "g_ja13"] },
    { id: "s_ja7", lang: "ja", text: "肉を食べます", pronunciation: "Niku o tabemasu", translation: "Mangio carne", requires: ["c_ja5", "g_ja4"] },
    { id: "s_ja8", lang: "ja", text: "切符を買います", pronunciation: "Kippu o kaimasu", translation: "Compro un biglietto", requires: ["v_ja12", "g_ja10"] },
    { id: "s_ja9", lang: "ja", text: "空を見て", pronunciation: "Sora o mite", translation: "Guarda il cielo", requires: ["ja6", "g_ja3"] },
    { id: "s_ja10", lang: "ja", text: "ご飯はおいしい", pronunciation: "Gohan wa oishii", translation: "Il riso è delizioso", requires: ["c_ja1", "g_ja11"] },
    { id: "s_ja11", lang: "ja", text: "車で行く", pronunciation: "Kuruma de iku", translation: "Andare in auto", requires: ["v_ja2", "g_ja6"] },
    { id: "s_ja12", lang: "ja", text: "ホテルはどこですか", pronunciation: "Hoteru wa doko desu ka", translation: "Dov'è l'hotel?", requires: ["v_ja7"] },
    { id: "s_ja13", lang: "ja", text: "魚が好きです", pronunciation: "Sakana ga suki desu", translation: "Mi piace il pesce", requires: ["c_ja6", "g_ja5"] },
    { id: "s_ja14", lang: "ja", text: "水を飲みます", pronunciation: "Mizu o nomimasu", translation: "Bevo acqua", requires: ["c_ja3", "g_ja7"] },
    { id: "s_ja15", lang: "ja", text: "川はきれいです", pronunciation: "Kawa wa kirei desu", translation: "Il fiume è bello", requires: ["ja1", "g_ja13"] },

    // --- ARABO ---
    { id: "s_ar1", lang: "ar", text: "أَنَا آكُلُ تُفَّاح", pronunciation: "Ana ākulu tuffāḥ", translation: "Io mangio la mela", requires: ["g_ar1", "g_ar7", "c_ar4"] },
    { id: "s_ar2", lang: "ar", text: "هُوَ يَشْرَبُ مَاء", pronunciation: "Huwa yashrabu mā'", translation: "Lui beve acqua", requires: ["g_ar2", "g_ar8", "c_ar3"] },
    { id: "s_ar3", lang: "ar", text: "أَلْجَبَل كَبِير", pronunciation: "Al-jabal kabīr", translation: "La montagna è grande", requires: ["ar19", "g_ar5"] },
    { id: "s_ar4", lang: "ar", text: "أُرِيدُ شَاي", pronunciation: "Urīdu shāy", translation: "Voglio del tè", requires: ["g_ar12", "c_ar2"] },
    { id: "s_ar5", lang: "ar", text: "هُوَ فِي الْفُنْدُق", pronunciation: "Huwa fī al-funduq", translation: "Lui è nell'hotel", requires: ["g_ar2", "g_ar3", "v_ar14"] },
    { id: "s_ar6", lang: "ar", text: "يَذْهَبُ إِلَى الْمَطَار", pronunciation: "Yadhhabu ilā al-maṭār", translation: "Va all'aeroporto", requires: ["g_ar6", "v_ar5"] },
    { id: "s_ar7", lang: "ar", text: "أَلْخُبْز لَذِيذ", pronunciation: "Al-khubz ladhīdh", translation: "Il pane è delizioso", requires: ["c_ar1", "g_ar15"] },
    { id: "s_ar8", lang: "ar", text: "يَرَى شَجَرَة", pronunciation: "Yarā shajara", translation: "Vede un albero", requires: ["g_ar4", "ar23"] },
    { id: "s_ar9", lang: "ar", text: "أُحِبُّ الْبَحْر", pronunciation: "Uḥibbu al-baḥr", translation: "Amo il mare", requires: ["ar17"] },
    { id: "s_ar10", lang: "ar", text: "يَشْتَرِي جَوَاز", pronunciation: "Yashtarī jawāz", translation: "Compra un passaporto", requires: ["g_ar11", "v_ar11"] },
    { id: "s_ar11", lang: "ar", text: "أَنَا فِي الْبَيْت", pronunciation: "Ana fī al-bayt", translation: "Io sono a casa", requires: ["g_ar1", "g_ar3"] },
    { id: "s_ar12", lang: "ar", text: "هَذَا لَحْم", pronunciation: "Hādhā laḥm", translation: "Questa è carne", requires: ["c_ar5"] },
    { id: "s_ar13", lang: "ar", text: "أَلشَّمْس جَمِيلَة", pronunciation: "Ash-shams jamīla", translation: "Il sole è bello", requires: ["ar14", "g_ar14"] },
    { id: "s_ar14", lang: "ar", text: "يُرِيدُ مَاء", pronunciation: "Yurīdu mā'", translation: "Vuole acqua", requires: ["g_ar12", "c_ar3"] },
    { id: "s_ar15", lang: "ar", text: "جَبَل جَمِيل", pronunciation: "Jabal jamīl", translation: "Bella montagna", requires: ["ar19", "g_ar14"] }
];
