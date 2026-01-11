const decks = {
    // === GRAMMATICA BASE (COLLANTE) ===
    "grammatica_zh": {
        title: "Grammatica (Cinese)",
        tags: ["grammatica", "zh"],
        cards: [
            { id: "g_zh1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_zh2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", meaning: "Tu", type: "base", pos: "pronoun" },
            { id: "g_zh3", lang: "zh", level: 1, word: "是", pronunciation: "shì", meaning: "Essere", type: "base", pos: "verb" },
            { id: "g_zh4", lang: "zh", level: 1, word: "在", pronunciation: "zài", meaning: "Stare a / In", type: "base", pos: "prep" },
            { id: "g_zh5", lang: "zh", level: 1, word: "看", pronunciation: "kàn", meaning: "Guardare", type: "base", pos: "verb" },
            { id: "g_zh6", lang: "zh", level: 1, word: "吃", pronunciation: "chī", meaning: "Mangiare", type: "base", pos: "verb" },
        ]
    },
    "grammatica_ja": {
        title: "Grammatica (Giapponese)",
        tags: ["grammatica", "ja"],
        cards: [
            { id: "g_ja1", lang: "ja", level: 1, word: "私", pronunciation: "わたし", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ja2", lang: "ja", level: 1, word: "あなた", pronunciation: "あなた", meaning: "Tu", type: "base", pos: "pronoun" },
            { id: "g_ja3", lang: "ja", level: 1, word: "見る", pronunciation: "みる", meaning: "Guardare", type: "base", pos: "verb" },
            { id: "g_ja4", lang: "ja", level: 1, word: "食べる", pronunciation: "たべる", meaning: "Mangiare", type: "base", pos: "verb" },
            { id: "g_ja5", lang: "ja", level: 1, word: "好き", pronunciation: "すき", meaning: "Piacere (Mi piace)", type: "base", pos: "adj" },
        ]
    },
    "grammatica_ar": {
        title: "Grammatica (Arabo)",
        tags: ["grammatica", "ar"],
        cards: [
            { id: "g_ar1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ar2", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", meaning: "Lui", type: "base", pos: "pronoun" },
            { id: "g_ar3", lang: "ar", level: 1, word: "فِي", pronunciation: "fi", meaning: "In / Dentro", type: "base", pos: "prep" },
            { id: "g_ar4", lang: "ar", level: 1, word: "يَرَى", pronunciation: "yarā", meaning: "Vede", type: "base", pos: "verb" },
            { id: "g_ar5", lang: "ar", level: 1, word: "كَبِير", pronunciation: "kabīr", meaning: "Grande", type: "base", pos: "adj" },
        ]
    },

    // === NATURA (AGGIORNATO CON POS) ===
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
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", meaning: "Fiore", type: "derivato", requires: ["zh1"], pos: "noun" },
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
        ]
    },

    // === VIAGGIO (AGGIORNATO CON POS) ===
    "viaggio_zh": {
        title: "Viaggio (Cinese)",
        tags: ["viaggio", "zh"],
        cards: [
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_zh2", lang: "zh", level: 1, word: "车", pronunciation: "chē", meaning: "Auto", type: "base", pos: "noun" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", meaning: "Aereo", type: "derivato", pos: "noun" },
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", meaning: "Stazione", type: "derivato", pos: "place" },
            { id: "v_zh14", lang: "zh", level: 3, word: "护照", pronunciation: "hùzhào", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_zh17", lang: "zh", level: 3, word: "旅馆", pronunciation: "lǚguǎn", meaning: "Hotel", type: "base", pos: "place" },
        ]
    },
    "viaggio_ja": {
        title: "Viaggio (Giapponese)",
        tags: ["viaggio", "ja"],
        cards: [
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_ja2", lang: "ja", level: 1, word: "車", pronunciation: "くるま", meaning: "Auto", type: "base", pos: "noun" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ja7", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ja13", lang: "ja", level: 3, word: "パスポート", pronunciation: "ぱすぽーと", meaning: "Passaporto", type: "base", pos: "noun" },
        ]
    },
    "viaggio_ar": {
        title: "Viaggio (Arabo)",
        tags: ["viaggio", "ar"],
        cards: [
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", meaning: "Viaggio", type: "derivato", pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", meaning: "Aeroporto", type: "derivato", pos: "place" },
            { id: "v_ar14", lang: "ar", level: 3, word: "فُنْدُق", pronunciation: "funduq", meaning: "Hotel", type: "base", pos: "place" },
        ]
    }
};