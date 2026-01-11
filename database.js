const decks = {
    // ==========================================
    // 1. GRAMMATICA (COLLANTE PER LE FRASI)
    // ==========================================
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
            { id: "g_zh7", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb" }
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
            { id: "g_ja6", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb" }
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
            { id: "g_ar6", lang: "ar", level: 1, word: "يَذْهَبُ", pronunciation: "yadhhabu", meaning: "Va (Lui va)", type: "base", pos: "verb" }
        ]
    },

    // ==========================================
    // 2. NATURA (COMPLETE)
    // ==========================================
    "natura_zh": {
        title: "Natura (Cinese)",
        tags: ["natura", "zh"], 
        cards: [
            { id: "zh1", lang: "zh", level: 1, word: "木", pronunciation: "mù", ipa: "mu˥˩", meaning: "Legno / Albero", type: "base", pos: "noun" },
            { id: "zh2", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯HN", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "zh3", lang: "zh", level: 1, word: "火", pronunciation: "huǒ", ipa: "xwɔHN", meaning: "Fuoco", type: "base", pos: "noun" },
            { id: "zh4", lang: "zh", level: 1, word: "土", pronunciation: "tǔ", ipa: "tʰuHN", meaning: "Terra / Suolo", type: "base", pos: "noun" },
            { id: "zh5", lang: "zh", level: 1, word: "日", pronunciation: "rì", ipa: "ʐ̩˥˩", meaning: "Sole / Giorno", type: "base", pos: "noun" },
            { id: "zh6", lang: "zh", level: 1, word: "月", pronunciation: "yuè", ipa: "yɛ˥˩", meaning: "Luna / Mese", type: "base", pos: "noun" },
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", ipa: "ʂan˥", meaning: "Montagna", type: "base", pos: "place" },
            { id: "zh8", lang: "zh", level: 1, word: "田", pronunciation: "tián", ipa: "tʰjɛn˧˥", meaning: "Campo coltivato", type: "base", pos: "place" },
            { id: "zh10", lang: "zh", level: 1, word: "雨", pronunciation: "yǔ", ipa: "yHN", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "zh11", lang: "zh", level: 1, word: "風", pronunciation: "fēng", ipa: "fəŋ˥", meaning: "Vento", type: "base", pos: "noun" },
            { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", ipa: "tʰjɛn˥", meaning: "Cielo", type: "base", pos: "place" },
            { id: "zh13", lang: "zh", level: 2, word: "林", pronunciation: "lín", ipa: "lin˧˥", meaning: "Bosco", type: "derivato", requires: ["zh1"], pos: "place" },
            { id: "zh14", lang: "zh", level: 2, word: "森", pronunciation: "sēn", ipa: "sən˥", meaning: "Foresta", type: "derivato", requires: ["zh13"], pos: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "Fiume", type: "derivato", requires: ["zh2"], pos: "place" },
            { id: "zh16", lang: "zh", level: 2, word: "海", pronunciation: "hǎi", ipa: "xaɪ̯HN", meaning: "Mare", type: "derivato", requires: ["zh2"], pos: "place" },
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", ipa: "xwɔHN ʂan˥", meaning: "Vulcano", type: "derivato", requires: ["zh3", "zh7"], pos: "place" },
            { id: "zh18", lang: "zh", level: 2, word: "天气", pronunciation: "tiānqì", ipa: "tʰjɛn˥ tɕʰi˥˩", meaning: "Tempo atmosferico", type: "derivato", requires: ["zh12"], pos: "noun" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa˥", meaning: "Fiore", type: "derivato", requires: ["zh1"], pos: "noun" },
            { id: "zh21", lang: "zh", level: 2, word: "云", pronunciation: "yún", ipa: "yn˧˥", meaning: "Nuvola", type: "derivato", requires: ["zh10"], pos: "noun" },
            { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", ipa: "ɕɥɛHN", meaning: "Neve", type: "derivato", requires: ["zh10"], pos: "noun" },
            { id: "zh26", lang: "zh", level: 3, word: "自然", pronunciation: "zìrán", ipa: "tsɹ̩˥˩ ʐan˧˥", meaning: "Natura", type: "derivato", requires: ["zh12", "zh4"], pos: "noun" },
            { id: "zh29", lang: "zh", level: 3, word: "沙漠", pronunciation: "shāmò", ipa: "ʂá mwô", meaning: "Deserto", type: "derivato", requires: ["zh2", "zh4"], pos: "place" },
            { id: "zh30", lang: "zh", level: 3, word: "电", pronunciation: "diàn", ipa: "tjɛn˥˩", meaning: "Elettricità / Fulmine", type: "base", requires: ["zh10", "zh8"], pos: "noun" },
            { id: "zh31", lang: "zh", level: 3, word: "雷", pronunciation: "léi", ipa: "leɪ̯˧˥", meaning: "Tuono", type: "derivato", requires: ["zh10", "zh8"], pos: "noun" },
            { id: "zh32", lang: "zh", level: 3, word: "地理", pronunciation: "dìlǐ", ipa: "ti˥˩ liHN", meaning: "Geografia", type: "derivato", requires: ["zh4"], pos: "noun" },
            { id: "zh33", lang: "zh", level: 3, word: "季节", pronunciation: "jìjié", ipa: "tɕi˥˩ tɕjɛ˧˥", meaning: "Stagione", type: "derivato", requires: ["zh8"], pos: "noun" },
            { id: "zh34", lang: "zh", level: 3, word: "春", pronunciation: "chūn", ipa: "tʂʰwən˥", meaning: "Primavera", type: "base", requires: ["zh5"], pos: "noun" },
            { id: "zh35", lang: "zh", level: 3, word: "夏", pronunciation: "xià", ipa: "ɕja˥˩", meaning: "Estate", type: "base", requires: ["zh5"], pos: "noun" },
            { id: "zh36", lang: "zh", level: 3, word: "秋", pronunciation: "qiū", ipa: "tɕʰjoʊ̯˥", meaning: "Autunno", type: "base", requires: ["zh3"], pos: "noun" },
            { id: "zh37", lang: "zh", level: 3, word: "冬", pronunciation: "dōng", ipa: "tʊŋ˥", meaning: "Inverno", type: "base", requires: ["zh22"], pos: "noun" },
            { id: "zh38", lang: "zh", level: 4, word: "灾害", pronunciation: "zāihài", ipa: "tsaɪ̯˥ xaɪ̯˥˩", meaning: "Disastro / Calamità", type: "derivato", requires: ["zh3", "zh2"], pos: "noun" },
            { id: "zh39", lang: "zh", level: 4, word: "洪水", pronunciation: "hóngshuǐ", ipa: "xʊŋ˧˥ ʂweɪ̯HN", meaning: "Inondazione", type: "derivato", requires: ["zh2"], pos: "noun" },
            { id: "zh40", lang: "zh", level: 4, word: "森林", pronunciation: "sēnlín", ipa: "sən˥ lin˧˥", meaning: "Foresta (Termine completo)", type: "derivato", requires: ["zh13", "zh14"], pos: "place" },
            { id: "zh41", lang: "zh", level: 4, word: "地图", pronunciation: "dìtú", ipa: "ti˥˩ tʰu˧˥", meaning: "Mappa", type: "derivato", requires: ["zh4"], pos: "noun" },
            { id: "zh42", lang: "zh", level: 4, word: "空气", pronunciation: "kōngqì", ipa: "kʰʊŋ˥ tɕʰi˥˩", meaning: "Aria / Atmosfera", type: "derivato", requires: ["zh12"], pos: "noun" }
        ]
    },

    "natura_ja": {
        title: "Natura (Giapponese)",
        tags: ["natura", "ja"],
        cards: [
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", ipa: "kawa", meaning: "Fiume", type: "base", pos: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", ipa: "jama", meaning: "Montagna", type: "base", pos: "place" },
            { id: "ja3", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "ja4", lang: "ja", level: 1, word: "雪", pronunciation: "ゆき", ipa: "jɯki", meaning: "Neve", type: "base", pos: "noun" },
            { id: "ja5", lang: "ja", level: 1, word: "風", pronunciation: "かぜ", ipa: "kaze", meaning: "Vento", type: "base", pos: "noun" },
            { id: "ja6", lang: "ja", level: 1, word: "空", pronunciation: "そら", ipa: "soɾa", meaning: "Cielo", type: "base", pos: "place" },
            { id: "ja7", lang: "ja", level: 1, word: "日", pronunciation: "ひ", ipa: "çi", meaning: "Sole / Giorno", type: "base", pos: "noun" },
            { id: "ja8", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "tsɯ̥ki", meaning: "Luna", type: "base", pos: "noun" },
            { id: "ja9", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "kʲi", meaning: "Albero", type: "base", pos: "noun" },
            { id: "ja11", lang: "ja", level: 1, word: "海", pronunciation: "うみ", ipa: "ɯmi", meaning: "Mare", type: "base", pos: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", ipa: "hana", meaning: "Fiore", type: "base", pos: "noun" },
            { id: "ja14", lang: "ja", level: 2, word: "天気", pronunciation: "てんき", ipa: "teŋkʲi", meaning: "Tempo atmosferico", type: "derivato", requires: ["ja6"], pos: "noun" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", ipa: "kazaɴ", meaning: "Vulcano", type: "derivato", requires: ["ja2"], pos: "place" },
            { id: "ja16", lang: "ja", level: 2, word: "花火", pronunciation: "はなび", ipa: "hanabi", meaning: "Fuochi d'artificio", type: "derivato", requires: ["ja13"], pos: "noun" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", ipa: "moɾi", meaning: "Foresta", type: "base", requires: ["ja9"], pos: "place" },
            { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", ipa: "kɯmo", meaning: "Nuvola", type: "base", requires: ["ja3"], pos: "noun" },
            { id: "ja20", lang: "ja", level: 2, word: "桜", pronunciation: "さくら", ipa: "sakɯɾa", meaning: "Ciliegio", type: "base", requires: ["ja9", "ja13"], pos: "noun" },
            { id: "ja24", lang: "ja", level: 3, word: "自然", pronunciation: "しぜん", ipa: "ɕizeɴ", meaning: "Natura", type: "derivato", pos: "noun" },
            { id: "ja27", lang: "ja", level: 3, word: "環境", pronunciation: "かんきょう", ipa: "kaŋkʲoː", meaning: "Ambiente", type: "derivato", pos: "noun" },
            { id: "ja32", lang: "ja", level: 3, word: "地理", pronunciation: "ちり", ipa: "tɕiɾi", meaning: "Geografia", type: "derivato", requires: ["ja2"], pos: "noun" },
            { id: "ja33", lang: "ja", level: 3, word: "電気", pronunciation: "でんき", ipa: "deŋkʲi", meaning: "Elettricità", type: "derivato", requires: ["ja3"], pos: "noun" },
            { id: "ja34", lang: "ja", level: 3, word: "雷", pronunciation: "かみなり", ipa: "kaminaɾi", meaning: "Tuono", type: "base", requires: ["ja3"], pos: "noun" },
            { id: "ja35", lang: "ja", level: 3, word: "春", pronunciation: "はる", ipa: "haɾɯ", meaning: "Primavera", type: "base", requires: ["ja7"], pos: "noun" },
            { id: "ja36", lang: "ja", level: 3, word: "夏", pronunciation: "なつ", ipa: "natsɯ", meaning: "Estate", type: "base", requires: ["ja7"], pos: "noun" },
            { id: "ja37", lang: "ja", level: 3, word: "秋", pronunciation: "あき", ipa: "aki", meaning: "Autunno", type: "base", requires: ["ja9"], pos: "noun" },
            { id: "ja38", lang: "ja", level: 3, word: "冬", pronunciation: "ふゆ", ipa: "fɯjɯ", meaning: "Inverno", type: "base", requires: ["ja4"], pos: "noun" },
            { id: "ja39", lang: "ja", level: 4, word: "季節", pronunciation: "きせつ", ipa: "kʲisetsɯ", meaning: "Stagione", type: "derivato", requires: ["ja35", "ja36"], pos: "noun" },
            { id: "ja40", lang: "ja", level: 4, word: "災害", pronunciation: "さいがい", ipa: "saigai", meaning: "Disastro / Calamità", type: "derivato", requires: ["ja1"], pos: "noun" },
            { id: "ja41", lang: "ja", level: 4, word: "地震", pronunciation: "じしん", ipa: "dʑiɕiɴ", meaning: "Terremoto", type: "derivato", requires: ["ja3"], pos: "noun" },
            { id: "ja42", lang: "ja", level: 4, word: "地図", pronunciation: "ちず", ipa: "tɕizɯ", meaning: "Mappa", type: "derivato", requires: ["ja2"], pos: "noun" },
            { id: "ja43", lang: "ja", level: 4, word: "大気", pronunciation: "たいき", ipa: "taikʲi", meaning: "Atmosfera", type: "derivato", requires: ["ja14"], pos: "noun" },
            { id: "ja44", lang: "ja", level: 4, word: "太陽", pronunciation: "たいよう", ipa: "taijoː", meaning: "Sole (Stella)", type: "derivato", requires: ["ja7"], pos: "noun" }
        ]
    },

    "natura_ar": {
        title: "Natura (Arabo)",
        tags: ["natura", "ar"],
        cards: [
            { id: "ar1", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", ipa: "ʔ-r-dˤ", meaning: "Radice: Terra", type: "base", pos: "noun" },
            { id: "ar2", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", ipa: "ʃ-m-s", meaning: "Radice: Sole", type: "base", pos: "noun" },
            { id: "ar3", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", ipa: "q-m-r", meaning: "Radice: Luna", type: "base", pos: "noun" },
            { id: "ar4", lang: "ar", level: 1, word: "م ا ء", pronunciation: "mā'", ipa: "maːʔ", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "ar5", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", ipa: "b-ħ-r", meaning: "Radice: Mare", type: "base", pos: "noun" },
            { id: "ar6", lang: "ar", level: 1, word: "ن ه ر", pronunciation: "N-H-R", ipa: "n-h-r", meaning: "Radice: Scorrere/Fiume", type: "base", pos: "noun" },
            { id: "ar7", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", ipa: "d͡ʒ-b-l", meaning: "Radice: Montagna", type: "base", pos: "noun" },
            { id: "ar8", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", ipa: "ʃ-d͡ʒ-r", meaning: "Radice: Albero", type: "base", pos: "noun" },
            { id: "ar9", lang: "ar", level: 1, word: "ج و", pronunciation: "J-W", ipa: "d͡ʒ-w", meaning: "Radice: Aria/Atmosfera", type: "base", pos: "noun" },
            { id: "ar10", lang: "ar", level: 1, word: "ز ر ع", pronunciation: "Z-R-'", ipa: "z-r-ʕ", meaning: "Radice: Piantare/Coltivare", type: "base", pos: "noun" },
            { id: "ar11", lang: "ar", level: 1, word: "ح ي ي", pronunciation: "H-Y-Y", ipa: "ħ-j-j", meaning: "Radice: Vita", type: "base", pos: "noun" },
            { id: "ar34", lang: "ar", level: 1, word: "ف ص ل", pronunciation: "F-S-L", ipa: "f-sˤ-l", meaning: "Radice: Separare/Stagione", type: "base", pos: "noun" },
            { id: "ar35", lang: "ar", level: 1, word: "خ ر ط", pronunciation: "Kh-R-T", ipa: "x-r-tˤ", meaning: "Radice: Mappare", type: "base", pos: "noun" },
            { id: "ar12", lang: "ar", level: 2, word: "أَرْض", pronunciation: "arḍ", ipa: "ʔar.dˤ", meaning: "Terra / Suolo", type: "derivato", requires: ["ar1"], pos: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", ipa: "ʃams", meaning: "Sole", type: "derivato", requires: ["ar2"], pos: "noun" },
            { id: "ar15", lang: "ar", level: 2, word: "قَمَر", pronunciation: "qamar", ipa: "qa.mar", meaning: "Luna", type: "derivato", requires: ["ar3"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر", pronunciation: "baḥr", ipa: "baħr", meaning: "Mare", type: "derivato", requires: ["ar5"], pos: "place" },
            { id: "ar18", lang: "ar", level: 2, word: "نَهْر", pronunciation: "nahr", ipa: "nahr", meaning: "Fiume", type: "derivato", requires: ["ar6"], pos: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "jabal", ipa: "d͡ʒa.bal", meaning: "Montagna", type: "derivato", requires: ["ar7"], pos: "place" },
            { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "shajara", ipa: "ʃa.d͡ʒa.ra", meaning: "Albero", type: "derivato", requires: ["ar8"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "ghāba", ipa: "ɣaː.ba", meaning: "Foresta", type: "derivato", requires: ["ar23"], pos: "place" },
            { id: "ar32", lang: "ar", level: 3, word: "بُحَيْرَة", pronunciation: "buḥayra", ipa: "bu.ħaj.ra", meaning: "Lago", type: "derivato", requires: ["ar17"], pos: "place" },
            { id: "ar36", lang: "ar", level: 3, word: "جَوّ", pronunciation: "jaww", ipa: "d͡ʒaww", meaning: "Tempo atmosferico / Aria", type: "derivato", requires: ["ar9"], pos: "noun" },
            { id: "ar37", lang: "ar", level: 3, word: "مَزْرَعَة", pronunciation: "mazra'a", ipa: "maz.ra.ʕa", meaning: "Fattoria / Campo", type: "derivato", requires: ["ar10"], pos: "place" },
            { id: "ar38", lang: "ar", level: 3, word: "حَيَاة", pronunciation: "ḥayāh", ipa: "ħa.jaːh", meaning: "Vita", type: "derivato", requires: ["ar11"], pos: "noun" },
            { id: "ar39", lang: "ar", level: 3, word: "حَيَوَان", pronunciation: "ḥayawān", ipa: "ħa.ja.waːn", meaning: "Animale", type: "derivato", requires: ["ar11"], pos: "noun" },
            { id: "ar40", lang: "ar", level: 3, word: "أَحْيَاء", pronunciation: "aḥyā'", ipa: "ʔaħ.jaːʔ", meaning: "Biologia", type: "derivato", requires: ["ar11"], pos: "noun" },
            { id: "ar41", lang: "ar", level: 3, word: "فَصْل", pronunciation: "faṣl", ipa: "fasˤl", meaning: "Stagione", type: "derivato", requires: ["ar34"], pos: "noun" },
            { id: "ar42", lang: "ar", level: 3, word: "خَرِيطَة", pronunciation: "kharīṭa", ipa: "xa.riː.tˤa", meaning: "Mappa", type: "derivato", requires: ["ar35"], pos: "noun" }
        ]
    },

    // ==========================================
    // 3. VIAGGIO (COMPLETE)
    // ==========================================
    "viaggio_zh": {
        title: "Viaggio (Cinese)",
        tags: ["viaggio", "zh"],
        cards: [
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy˥˩", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_zh2", lang: "zh", level: 1, word: "车", pronunciation: "chē", ipa: "tʂʰɤ˥", meaning: "Veicolo / Auto", type: "base", pos: "noun" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯˥", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", ipa: "tɕi˥", meaning: "Macchina / Meccanismo", type: "base", pos: "noun" },
            { id: "v_zh8", lang: "zh", level: 1, word: "票", pronunciation: "piào", ipa: "pʰjaʊ̯˥˩", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_zh9", lang: "zh", level: 1, word: "门", pronunciation: "mén", ipa: "mən˧˥", meaning: "Porta / Cancello", type: "base", pos: "place" },
            { id: "v_zh10", lang: "zh", level: 1, word: "路", pronunciation: "lù", ipa: "lu˥˩", meaning: "Strada", type: "base", pos: "place" },
            { id: "v_zh11", lang: "zh", level: 1, word: "包", pronunciation: "bāo", ipa: "paʊ̯˥", meaning: "Borsa / Pacco", type: "base", pos: "noun" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", ipa: "feɪ̯˥ tɕi˥", meaning: "Aeroplano", type: "derivato", requires: ["v_zh3", "v_zh4"], pos: "noun" },
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", ipa: "xwɔHN tʂʰɤ˥", meaning: "Treno", type: "derivato", requires: ["v_zh2"], pos: "noun" }, 
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", ipa: "tʂʰɤ˥ tʂan˥˩", meaning: "Stazione", type: "derivato", requires: ["v_zh2"], pos: "place" },
            { id: "v_zh12", lang: "zh", level: 3, word: "机票", pronunciation: "jīpiào", ipa: "tɕi˥ pʰjaʊ̯˥˩", meaning: "Biglietto Aereo", type: "derivato", requires: ["v_zh4", "v_zh8"], pos: "noun" },
            { id: "v_zh13", lang: "zh", level: 3, word: "车票", pronunciation: "chēpiào", ipa: "tʂʰɤ˥ pʰjaʊ̯˥˩", meaning: "Biglietto treno/bus", type: "derivato", requires: ["v_zh2", "v_zh8"], pos: "noun" },
            { id: "v_zh14", lang: "zh", level: 3, word: "护照", pronunciation: "hùzhào", ipa: "xu˥˩ tʂaʊ̯˥˩", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_zh15", lang: "zh", level: 3, word: "行李", pronunciation: "xíngli", ipa: "ɕiŋ˧˥ liHN", meaning: "Bagaglio", type: "derivato", requires: ["v_zh1"], pos: "noun" },
            { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", ipa: "mən˧˥ kʰoʊ̯HN", meaning: "Ingresso / Uscita", type: "derivato", requires: ["v_zh9"], pos: "place" },
            { id: "v_zh17", lang: "zh", level: 3, word: "旅馆", pronunciation: "lǚguǎn", ipa: "lyHN kwanHN", meaning: "Hotel", type: "base", pos: "place" }
        ]
    },

    "viaggio_ja": {
        title: "Viaggio (Giapponese)",
        tags: ["viaggio", "ja"],
        cards: [
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", ipa: "ikɯ", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_ja2", lang: "ja", level: 1, word: "車", pronunciation: "くるま", ipa: "kɯɾɯma", meaning: "Auto / Veicolo", type: "base", pos: "noun" },
            { id: "v_ja3", lang: "ja", level: 1, word: "旅", pronunciation: "たび", ipa: "tabi", meaning: "Viaggio", type: "base", pos: "noun" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", ipa: "eki", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ja8", lang: "ja", level: 1, word: "鉄", pronunciation: "てつ", ipa: "tetsɯ", meaning: "Ferro", type: "base", pos: "noun" },
            { id: "v_ja9", lang: "ja", level: 1, word: "地", pronunciation: "ち", ipa: "tɕi", meaning: "Suolo / Terra", type: "base", pos: "noun" },
            { id: "v_ja10", lang: "ja", level: 1, word: "下", pronunciation: "した", ipa: "ɕita", meaning: "Sotto / Giù", type: "base", pos: "noun" },
            { id: "v_ja5", lang: "ja", level: 2, word: "旅行", pronunciation: "りょこう", ipa: "ɾʲokoː", meaning: "Viaggiare", type: "derivato", requires: ["v_ja1", "v_ja3"], pos: "noun" },
            { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", ipa: "deɴɕa", meaning: "Treno", type: "derivato", requires: ["v_ja2"], pos: "noun" },
            { id: "v_ja7", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", ipa: "hoteɾɯ", meaning: "Hotel", type: "base", pos: "place" }, 
            { id: "v_ja11", lang: "ja", level: 2, word: "地下鉄", pronunciation: "ちかてつ", ipa: "tɕikatetsɯ", meaning: "Metropolitana", type: "derivato", requires: ["v_ja8", "v_ja9", "v_ja10"], pos: "noun" },
            { id: "v_ja12", lang: "ja", level: 2, word: "切符", pronunciation: "きっぷ", ipa: "kʲippɯ", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_ja13", lang: "ja", level: 3, word: "パスポート", pronunciation: "ぱすぽーと", ipa: "pasɯpoːto", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_ja14", lang: "ja", level: 3, word: "荷物", pronunciation: "にもつ", ipa: "nimotsɯ", meaning: "Bagaglio", type: "base", pos: "noun" },
            { id: "v_ja15", lang: "ja", level: 3, word: "バス", pronunciation: "ばす", ipa: "basɯ", meaning: "Autobus", type: "base", pos: "noun" },
            { id: "v_ja16", lang: "ja", level: 3, word: "タクシー", pronunciation: "たくしー", ipa: "takɯɕiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", ipa: "iɾigɯtɕi", meaning: "Entrata", type: "base", pos: "place" }
        ]
    },

    "viaggio_ar": {
        title: "Viaggio (Arabo)",
        tags: ["viaggio", "ar"],
        cards: [
            { id: "v_ar1", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", ipa: "s-f-r", meaning: "Radice: Viaggiare", type: "base", pos: "noun" },
            { id: "v_ar2", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", ipa: "tˤ-j-r", meaning: "Radice: Volare", type: "base", pos: "noun" },
            { id: "v_ar3", lang: "ar", level: 1, word: "ح ج ز", pronunciation: "H-J-Z", ipa: "ħ-d͡ʒ-z", meaning: "Radice: Prenotare/Bloccare", type: "base", pos: "noun" },
            { id: "v_ar8", lang: "ar", level: 1, word: "ر ك ب", pronunciation: "R-K-B", ipa: "r-k-b", meaning: "Radice: Salire a bordo", type: "base", pos: "noun" },
            { id: "v_ar9", lang: "ar", level: 1, word: "ج و ز", pronunciation: "J-W-Z", ipa: "d͡ʒ-w-z", meaning: "Radice: Passare", type: "base", pos: "noun" },
            { id: "v_ar10", lang: "ar", level: 1, word: "ح ق ب", pronunciation: "H-Q-B", ipa: "ħ-q-b", meaning: "Radice: Borsa/Trasportare", type: "base", pos: "noun" },
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", ipa: "sa.far", meaning: "Viaggio", type: "derivato", requires: ["v_ar1"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", ipa: "ma.tˤaːr", meaning: "Aeroporto", type: "derivato", requires: ["v_ar2"], pos: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", ipa: "tˤaː.ʔi.ra", meaning: "Aereo", type: "derivato", requires: ["v_ar2"], pos: "noun" },
            { id: "v_ar7", lang: "ar", level: 2, word: "حَجْز", pronunciation: "ḥajz", ipa: "ħad͡ʒz", meaning: "Prenotazione", type: "derivato", requires: ["v_ar3"], pos: "noun" },
            { id: "v_ar11", lang: "ar", level: 3, word: "جَوَاز", pronunciation: "jawāz", ipa: "d͡ʒa.waːz", meaning: "Passaporto", type: "derivato", requires: ["v_ar9"], pos: "noun" },
            { id: "v_ar12", lang: "ar", level: 3, word: "رَاكِب", pronunciation: "rākib", ipa: "raː.kib", meaning: "Passeggero", type: "derivato", requires: ["v_ar8"], pos: "noun" },
            { id: "v_ar13", lang: "ar", level: 3, word: "حَقِيبَة", pronunciation: "ḥaqība", ipa: "ħa.qiː.ba", meaning: "Valigia", type: "derivato", requires: ["v_ar10"], pos: "noun" },
            { id: "v_ar14", lang: "ar", level: 3, word: "فُنْدُق", pronunciation: "funduq", ipa: "fun.duq", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ar15", lang: "ar", level: 3, word: "تَذْكِرَة", pronunciation: "tadhkira", ipa: "tað.ki.ra", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_ar16", lang: "ar", level: 3, word: "سَيَّارَة", pronunciation: "sayyāra", ipa: "saj.jaː.ra", meaning: "Macchina / Auto", type: "base", pos: "noun" }
        ]
    }
};
