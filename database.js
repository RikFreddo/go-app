const decks = {
    // ==========================================
    // 1. GRAMMATICA (ESTESA & COERENTE)
    // ==========================================
    "grammatica_zh": {
        title: "Grammatica (Cinese)",
        tags: ["grammatica", "zh"],
        cards: [
            // Pronomi
            { id: "g_zh1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_zh2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", meaning: "Tu", type: "base", pos: "pronoun" },
            { id: "g_zh9", lang: "zh", level: 1, word: "他", pronunciation: "tā", meaning: "Lui", type: "base", pos: "pronoun" },
            { id: "g_zh10", lang: "zh", level: 1, word: "她", pronunciation: "tā", meaning: "Lei", type: "base", pos: "pronoun" },
            
            // Verbi Base
            { id: "g_zh3", lang: "zh", level: 1, word: "是", pronunciation: "shì", meaning: "Essere", type: "base", pos: "verb_general" },
            { id: "g_zh4", lang: "zh", level: 1, word: "在", pronunciation: "zài", meaning: "Stare a / In", type: "base", pos: "prep" },
            { id: "g_zh5", lang: "zh", level: 1, word: "看", pronunciation: "kàn", meaning: "Guardare / Leggere", type: "base", pos: "verb_general" },
            { id: "g_zh11", lang: "zh", level: 1, word: "买", pronunciation: "mǎi", meaning: "Comprare", type: "base", pos: "verb_general" }, // Comprare biglietto/cibo
            { id: "g_zh12", lang: "zh", level: 1, word: "要", pronunciation: "yào", meaning: "Volere", type: "base", pos: "verb_general" }, // Volere cibo/viaggio
            { id: "g_zh13", lang: "zh", level: 1, word: "爱", pronunciation: "ài", meaning: "Amare", type: "base", pos: "verb_general" }, // Amare natura/persone

            // Verbi Specifici
            { id: "g_zh6", lang: "zh", level: 1, word: "吃", pronunciation: "chī", meaning: "Mangiare", type: "base", pos: "verb_eat" },
            { id: "g_zh7", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "g_zh8", lang: "zh", level: 1, word: "喝", pronunciation: "hē", meaning: "Bere", type: "base", pos: "verb_drink" },

            // Aggettivi (Utili per descrivere Natura e Cibo)
            { id: "g_zh14", lang: "zh", level: 2, word: "大", pronunciation: "dà", meaning: "Grande", type: "base", pos: "adj" },
            { id: "g_zh15", lang: "zh", level: 2, word: "好", pronunciation: "hǎo", meaning: "Buono / Bene", type: "base", pos: "adj" },
            { id: "g_zh16", lang: "zh", level: 2, word: "好吃", pronunciation: "hǎochī", meaning: "Delizioso (cibo)", type: "derivato", pos: "adj" },
            { id: "g_zh17", lang: "zh", level: 2, word: "漂亮", pronunciation: "piàoliang", meaning: "Bello/a", type: "base", pos: "adj" },
            { id: "g_zh18", lang: "zh", level: 2, word: "热", pronunciation: "rè", meaning: "Caldo", type: "base", pos: "adj" },
            { id: "g_zh19", lang: "zh", level: 2, word: "冷", pronunciation: "lěng", meaning: "Freddo", type: "base", pos: "adj" }
        ]
    },

    "grammatica_ja": {
        title: "Grammatica (Giapponese)",
        tags: ["grammatica", "ja"],
        cards: [
            // Pronomi
            { id: "g_ja1", lang: "ja", level: 1, word: "私", pronunciation: "わたし", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ja2", lang: "ja", level: 1, word: "あなた", pronunciation: "あなた", meaning: "Tu", type: "base", pos: "pronoun" },
            { id: "g_ja8", lang: "ja", level: 1, word: "彼", pronunciation: "かれ", meaning: "Lui", type: "base", pos: "pronoun" },
            { id: "g_ja9", lang: "ja", level: 1, word: "彼女", pronunciation: "かのじょ", meaning: "Lei", type: "base", pos: "pronoun" },

            // Verbi
            { id: "g_ja3", lang: "ja", level: 1, word: "見る", pronunciation: "みる", meaning: "Guardare", type: "base", pos: "verb_general" },
            { id: "g_ja4", lang: "ja", level: 1, word: "食べる", pronunciation: "たべる", meaning: "Mangiare", type: "base", pos: "verb_eat" },
            { id: "g_ja6", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "g_ja7", lang: "ja", level: 1, word: "飲む", pronunciation: "のむ", meaning: "Bere", type: "base", pos: "verb_drink" },
            { id: "g_ja10", lang: "ja", level: 1, word: "買う", pronunciation: "かう", meaning: "Comprare", type: "base", pos: "verb_general" }, // Comprare biglietto/mela

            // Aggettivi / Stati
            { id: "g_ja5", lang: "ja", level: 1, word: "好き", pronunciation: "すき", meaning: "Piacere (Mi piace)", type: "base", pos: "adj" }, // Grammaticalmente è agg. in JP
            { id: "g_ja11", lang: "ja", level: 2, word: "美味しい", pronunciation: "おいしい", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "g_ja12", lang: "ja", level: 2, word: "大きい", pronunciation: "おおきい", meaning: "Grande", type: "base", pos: "adj" },
            { id: "g_ja13", lang: "ja", level: 2, word: "綺麗", pronunciation: "きれい", meaning: "Bello / Pulito", type: "base", pos: "adj" },
            { id: "g_ja14", lang: "ja", level: 2, word: "暑い", pronunciation: "あつい", meaning: "Caldo (clima)", type: "base", pos: "adj" },
            { id: "g_ja15", lang: "ja", level: 2, word: "寒い", pronunciation: "さむい", meaning: "Freddo (clima)", type: "base", pos: "adj" }
        ]
    },

    "grammatica_ar": {
        title: "Grammatica (Arabo)",
        tags: ["grammatica", "ar"],
        cards: [
            // Pronomi
            { id: "g_ar1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ar2", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", meaning: "Lui", type: "base", pos: "pronoun" },
            { id: "g_ar9", lang: "ar", level: 1, word: "هِيَ", pronunciation: "hiya", meaning: "Lei", type: "base", pos: "pronoun" },
            { id: "g_ar10", lang: "ar", level: 1, word: "أَنْتَ", pronunciation: "anta", meaning: "Tu (m)", type: "base", pos: "pronoun" },

            // Verbi (3a persona singolare maschile usata come base)
            { id: "g_ar3", lang: "ar", level: 1, word: "فِي", pronunciation: "fi", meaning: "In / Dentro", type: "base", pos: "prep" },
            { id: "g_ar4", lang: "ar", level: 1, word: "يَرَى", pronunciation: "yarā", meaning: "Vede", type: "base", pos: "verb_general" },
            { id: "g_ar6", lang: "ar", level: 1, word: "يَذْهَبُ", pronunciation: "yadhhabu", meaning: "Va", type: "base", pos: "verb_move" },
            { id: "g_ar7", lang: "ar", level: 1, word: "يَأْكُلُ", pronunciation: "ya'kulu", meaning: "Mangia", type: "base", pos: "verb_eat" },
            { id: "g_ar8", lang: "ar", level: 1, word: "يَشْرَبُ", pronunciation: "yashrabu", meaning: "Beve", type: "base", pos: "verb_drink" },
            { id: "g_ar11", lang: "ar", level: 1, word: "يَشْتَرِي", pronunciation: "yashtarī", meaning: "Compra", type: "base", pos: "verb_general" },
            { id: "g_ar12", lang: "ar", level: 1, word: "يُرِيدُ", pronunciation: "yurīdu", meaning: "Vuole", type: "base", pos: "verb_general" },
            { id: "g_ar13", lang: "ar", level: 1, word: "يُحِبُّ", pronunciation: "yuḥibbu", meaning: "Ama / Gli piace", type: "base", pos: "verb_general" },

            // Aggettivi
            { id: "g_ar5", lang: "ar", level: 1, word: "كَبِير", pronunciation: "kabīr", meaning: "Grande", type: "base", pos: "adj" },
            { id: "g_ar14", lang: "ar", level: 2, word: "جَمِيل", pronunciation: "jamīl", meaning: "Bello", type: "base", pos: "adj" },
            { id: "g_ar15", lang: "ar", level: 2, word: "لَذِيذ", pronunciation: "ladhīdh", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "g_ar16", lang: "ar", level: 2, word: "حَارّ", pronunciation: "ḥārr", meaning: "Caldo", type: "base", pos: "adj" },
            { id: "g_ar17", lang: "ar", level: 2, word: "بَارِد", pronunciation: "bārid", meaning: "Freddo", type: "base", pos: "adj" }
        ]
    },

    // ==========================================
    // 2. CIBO (ELEMENTI DA MANGIARE/BERE)
    // ==========================================
    "cibo_zh": {
        title: "Cibo (Cinese)",
        tags: ["cibo", "zh"],
        cards: [
            { id: "c_zh1", lang: "zh", level: 1, word: "饭", pronunciation: "fàn", meaning: "Riso / Cibo", type: "base", pos: "food" },
            { id: "c_zh2", lang: "zh", level: 1, word: "茶", pronunciation: "chá", meaning: "Tè", type: "base", pos: "drink" },
            { id: "c_zh3", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", meaning: "Acqua", type: "base", pos: "drink" },
            { id: "c_zh4", lang: "zh", level: 1, word: "苹果", pronunciation: "píngguǒ", meaning: "Mela", type: "base", pos: "food" },
            { id: "c_zh5", lang: "zh", level: 1, word: "肉", pronunciation: "ròu", meaning: "Carne", type: "base", pos: "food" }
        ]
    },
    "cibo_ja": {
        title: "Cibo (Giapponese)",
        tags: ["cibo", "ja"],
        cards: [
            { id: "c_ja1", lang: "ja", level: 1, word: "ご飯", pronunciation: "ごはん", meaning: "Riso / Pasto", type: "base", pos: "food" },
            { id: "c_ja2", lang: "ja", level: 1, word: "お茶", pronunciation: "おちゃ", meaning: "Tè", type: "base", pos: "drink" },
            { id: "c_ja3", lang: "ja", level: 1, word: "水", pronunciation: "みず", meaning: "Acqua", type: "base", pos: "drink" },
            { id: "c_ja4", lang: "ja", level: 1, word: "肉", pronunciation: "にく", meaning: "Carne", type: "base", pos: "food" },
            { id: "c_ja5", lang: "ja", level: 1, word: "魚", pronunciation: "さかな", meaning: "Pesce", type: "base", pos: "food" }
        ]
    },
    "cibo_ar": {
        title: "Cibo (Arabo)",
        tags: ["cibo", "ar"],
        cards: [
            { id: "c_ar1", lang: "ar", level: 1, word: "خُبْز", pronunciation: "khubz", meaning: "Pane", type: "base", pos: "food" },
            { id: "c_ar2", lang: "ar", level: 1, word: "شَاي", pronunciation: "shāy", meaning: "Tè", type: "base", pos: "drink" },
            { id: "c_ar3", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", meaning: "Acqua", type: "base", pos: "drink" },
            { id: "c_ar4", lang: "ar", level: 1, word: "تُفَّاح", pronunciation: "tuffāḥ", meaning: "Mela", type: "base", pos: "food" },
            { id: "c_ar5", lang: "ar", level: 1, word: "لَحْم", pronunciation: "laḥm", meaning: "Carne", type: "base", pos: "food" }
        ]
    },

    // ==========================================
    // 3. NATURA (COMPLETE)
    // ==========================================
    "natura_zh": {
        title: "Natura (Cinese)",
        tags: ["natura", "zh"], 
        cards: [
            { id: "zh1", lang: "zh", level: 1, word: "木", pronunciation: "mù", meaning: "Albero", type: "base", pos: "noun" },
            { id: "zh2", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "zh3", lang: "zh", level: 1, word: "火", pronunciation: "huǒ", meaning: "Fuoco", type: "base", pos: "noun" },
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", meaning: "Montagna", type: "base", pos: "place" },
            { id: "zh10", lang: "zh", level: 1, word: "雨", pronunciation: "yǔ", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", meaning: "Cielo", type: "base", pos: "place" },
            { id: "zh13", lang: "zh", level: 2, word: "林", pronunciation: "lín", meaning: "Bosco", type: "derivato", requires: ["zh1"], pos: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", meaning: "Fiume", type: "derivato", requires: ["zh2"], pos: "place" },
            { id: "zh16", lang: "zh", level: 2, word: "海", pronunciation: "hǎi", meaning: "Mare", type: "derivato", requires: ["zh2"], pos: "place" },
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", meaning: "Vulcano", type: "derivato", requires: ["zh3", "zh7"], pos: "place" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", meaning: "Fiore", type: "derivato", requires: ["zh1"], pos: "noun" },
            { id: "zh29", lang: "zh", level: 3, word: "沙漠", pronunciation: "shāmò", meaning: "Deserto", type: "derivato", requires: ["zh2", "zh4"], pos: "place" },
            { id: "zh40", lang: "zh", level: 4, word: "森林", pronunciation: "sēnlín", meaning: "Foresta", type: "derivato", requires: ["zh13", "zh14"], pos: "place" },
            { id: "zh41", lang: "zh", level: 4, word: "地图", pronunciation: "dìtú", meaning: "Mappa", type: "derivato", requires: ["zh4"], pos: "noun" },
            { id: "zh42", lang: "zh", level: 4, word: "空气", pronunciation: "kōngqì", meaning: "Aria", type: "derivato", requires: ["zh12"], pos: "noun" }
        ]
    },
    "natura_ja": {
        title: "Natura (Giapponese)",
        tags: ["natura", "ja"],
        cards: [
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", meaning: "Fiume", type: "base", pos: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", meaning: "Montagna", type: "base", pos: "place" },
            { id: "ja3", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "ja6", lang: "ja", level: 1, word: "空", pronunciation: "そら", meaning: "Cielo", type: "base", pos: "place" },
            { id: "ja9", lang: "ja", level: 1, word: "木", pronunciation: "き", meaning: "Albero", type: "base", pos: "noun" },
            { id: "ja11", lang: "ja", level: 1, word: "海", pronunciation: "うみ", meaning: "Mare", type: "base", pos: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", meaning: "Fiore", type: "base", pos: "noun" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", meaning: "Vulcano", type: "derivato", requires: ["ja2"], pos: "place" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", meaning: "Foresta", type: "base", requires: ["ja9"], pos: "place" }
        ]
    },
    "natura_ar": {
        title: "Natura (Arabo)",
        tags: ["natura", "ar"],
        cards: [
            { id: "ar4", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "ar12", lang: "ar", level: 2, word: "أَرْض", pronunciation: "arḍ", meaning: "Terra", type: "derivato", requires: ["ar1"], pos: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", meaning: "Sole", type: "derivato", requires: ["ar2"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر", pronunciation: "baḥr", meaning: "Mare", type: "derivato", requires: ["ar5"], pos: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "jabal", meaning: "Montagna", type: "derivato", requires: ["ar7"], pos: "place" },
            { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "shajara", meaning: "Albero", type: "derivato", requires: ["ar8"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "ghāba", meaning: "Foresta", type: "derivato", requires: ["ar23"], pos: "place" }
        ]
    },

    // ==========================================
    // 4. VIAGGIO (COMPLETE)
    // ==========================================
    "viaggio_zh": {
        title: "Viaggio (Cinese)",
        tags: ["viaggio", "zh"],
        cards: [
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_zh2", lang: "zh", level: 1, word: "车", pronunciation: "chē", meaning: "Auto", type: "base", pos: "noun" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", meaning: "Macchina", type: "base", pos: "noun" },
            { id: "v_zh8", lang: "zh", level: 1, word: "票", pronunciation: "piào", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", meaning: "Aereo", type: "derivato", requires: ["v_zh3", "v_zh4"], pos: "noun" },
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", meaning: "Treno", type: "derivato", requires: ["v_zh2"], pos: "noun" }, 
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", meaning: "Stazione", type: "derivato", requires: ["v_zh2"], pos: "place" },
            { id: "v_zh12", lang: "zh", level: 3, word: "机票", pronunciation: "jīpiào", meaning: "Biglietto Aereo", type: "derivato", requires: ["v_zh4", "v_zh8"], pos: "noun" },
            { id: "v_zh14", lang: "zh", level: 3, word: "护照", pronunciation: "hùzhào", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", meaning: "Ingresso", type: "derivato", requires: ["v_zh9"], pos: "place" },
            { id: "v_zh17", lang: "zh", level: 3, word: "旅馆", pronunciation: "lǚguǎn", meaning: "Hotel", type: "base", pos: "place" }
        ]
    },
    "viaggio_ja": {
        title: "Viaggio (Giapponese)",
        tags: ["viaggio", "ja"],
        cards: [
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_ja2", lang: "ja", level: 1, word: "車", pronunciation: "くるま", meaning: "Auto", type: "base", pos: "noun" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ja7", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ja12", lang: "ja", level: 2, word: "切符", pronunciation: "きっぷ", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_ja13", lang: "ja", level: 3, word: "パスポート", pronunciation: "ぱすぽーと", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", meaning: "Entrata", type: "base", pos: "place" }
        ]
    },
    "viaggio_ar": {
        title: "Viaggio (Arabo)",
        tags: ["viaggio", "ar"],
        cards: [
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", meaning: "Viaggio", type: "derivato", requires: ["v_ar1"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", meaning: "Aeroporto", type: "derivato", requires: ["v_ar2"], pos: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", meaning: "Aereo", type: "derivato", requires: ["v_ar2"], pos: "noun" },
            { id: "v_ar11", lang: "ar", level: 3, word: "جَوَاز", pronunciation: "jawāz", meaning: "Passaporto", type: "derivato", requires: ["v_ar9"], pos: "noun" },
            { id: "v_ar14", lang: "ar", level: 3, word: "فُنْدُق", pronunciation: "funduq", meaning: "Hotel", type: "base", pos: "place" }
        ]
    }
};
