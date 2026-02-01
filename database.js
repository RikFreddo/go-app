const database = {
    // ==========================================
    // 1. BASICS (Numeri, Colori, Pronomi)
    // ==========================================
    "fondamentali_zh": {
        title: "Fondamentali (Cinese)",
        tags: ["basics", "zh"],
        cards: [
            // --- NUMERI ---
            { id: "num_zh1", lang: "zh", level: 1, word: "一", pronunciation: "yī", ipa: "i⁵⁵", meaning: "Uno", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh2", lang: "zh", level: 1, word: "二", pronunciation: "èr", ipa: "aɻ⁵¹", meaning: "Due", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh3", lang: "zh", level: 1, word: "三", pronunciation: "sān", ipa: "san⁵⁵", meaning: "Tre", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh4", lang: "zh", level: 1, word: "四", pronunciation: "sì", ipa: "sz̩⁵¹", meaning: "Quattro", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh5", lang: "zh", level: 1, word: "五", pronunciation: "wǔ", ipa: "u²¹⁴", meaning: "Cinque", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh6", lang: "zh", level: 1, word: "六", pronunciation: "liù", ipa: "ljoʊ̯⁵¹", meaning: "Sei", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh7", lang: "zh", level: 1, word: "七", pronunciation: "qī", ipa: "tɕʰi⁵⁵", meaning: "Sette", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh8", lang: "zh", level: 1, word: "八", pronunciation: "bā", ipa: "pa⁵⁵", meaning: "Otto", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh9", lang: "zh", level: 1, word: "九", pronunciation: "jiǔ", ipa: "tɕjoʊ̯²¹⁴", meaning: "Nove", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh10", lang: "zh", level: 1, word: "十", pronunciation: "shí", ipa: "ʂɻ̩³⁵", meaning: "Dieci", type: "base", pos: "num", grammar: "num" },
            { id: "num_zh0", lang: "zh", level: 1, word: "零", pronunciation: "líng", ipa: "liŋ³⁵", meaning: "Zero", type: "base", pos: "num", grammar: "num" },

            // --- PRONOMI ---
            { id: "g_zh_pron_1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", ipa: "wɔ²¹⁴", meaning: "Io / Me", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_zh_pron_2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", ipa: "ni²¹⁴", meaning: "Tu", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_zh_pron_3", lang: "zh", level: 1, word: "他", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "Lui", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_zh_pron_4", lang: "zh", level: 1, word: "她", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "Lei", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_zh_pron_5", lang: "zh", level: 1, word: "我们", pronunciation: "wǒmen", ipa: "wɔ²¹⁴ mən", meaning: "Noi", type: "base", pos: "pron", grammar: "pron" },

            // --- COLORI ---
            { id: "col_zh1", lang: "zh", level: 1, word: "白", pronunciation: "bái", ipa: "paɪ̯³⁵", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_zh2", lang: "zh", level: 1, word: "黑", pronunciation: "hēi", ipa: "xeɪ̯⁵⁵", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_zh3", lang: "zh", level: 1, word: "红", pronunciation: "hóng", ipa: "xʊŋ³⁵", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_zh4", lang: "zh", level: 1, word: "蓝", pronunciation: "lán", ipa: "lan³⁵", meaning: "Blu", type: "base", pos: "adj" },
            { id: "col_zh5", lang: "zh", level: 1, word: "绿", pronunciation: "lǜ", ipa: "ly⁵¹", meaning: "Verde", type: "base", pos: "adj" },

            // --- RADICALI / BASI ---
            { id: "rad_uomo", lang: "zh", level: 1, word: "人", pronunciation: "rén", ipa: "ʐən³⁵", meaning: "Persona (Radicale)", type: "base", pos: "noun" },
            { id: "rad_bocca", lang: "zh", level: 1, word: "口", pronunciation: "kǒu", ipa: "kʰoʊ̯²¹⁴", meaning: "Bocca (Radicale)", type: "base", pos: "noun" },
            { id: "rad_albero", lang: "zh", level: 1, word: "木", pronunciation: "mù", ipa: "mu⁵¹", meaning: "Albero / Legno (Radicale)", type: "base", pos: "noun" },
            { id: "rad_acqua", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯²¹⁴", meaning: "Acqua (Radicale)", type: "base", pos: "noun" },
            { id: "rad_fuoco", lang: "zh", level: 1, word: "火", pronunciation: "huǒ", ipa: "xwɔ²¹⁴", meaning: "Fuoco (Radicale)", type: "base", pos: "noun" },
            { id: "rad_terra", lang: "zh", level: 1, word: "土", pronunciation: "tǔ", ipa: "tʰu²¹⁴", meaning: "Terra / Suolo (Radicale)", type: "base", pos: "noun" },
            { id: "rad_sole", lang: "zh", level: 1, word: "日", pronunciation: "rì", ipa: "ʐɻ̩⁵¹", meaning: "Sole / Giorno (Radicale)", type: "base", pos: "noun" },
            { id: "rad_luna", lang: "zh", level: 1, word: "月", pronunciation: "yuè", ipa: "ɥɛ⁵¹", meaning: "Luna / Mese (Radicale)", type: "base", pos: "noun" },
            { id: "rad_donna", lang: "zh", level: 1, word: "女", pronunciation: "nǚ", ipa: "ny²¹⁴", meaning: "Donna / Femminile (Radicale)", type: "base", pos: "noun" },
            { id: "rad_bambino", lang: "zh", level: 1, word: "子", pronunciation: "zǐ", ipa: "ts̩²¹⁴", meaning: "Bambino / Seme (Radicale)", type: "base", pos: "noun" },
            { id: "rad_mano", lang: "zh", level: 1, word: "手", pronunciation: "shǒu", ipa: "ʂoʊ̯²¹⁴", meaning: "Mano (Radicale)", type: "base", pos: "noun" },
            { id: "rad_cuore", lang: "zh", level: 1, word: "心", pronunciation: "xīn", ipa: "ɕin⁵⁵", meaning: "Cuore (Radicale)", type: "base", pos: "noun" },
            { id: "rad_parola", lang: "zh", level: 1, word: "言", pronunciation: "yán", ipa: "jɛn³⁵", meaning: "Discorso / Parola (Radicale)", type: "base", pos: "noun" },
            { id: "rad_pioggia", lang: "zh", level: 1, word: "雨", pronunciation: "yǔ", ipa: "y²¹⁴", meaning: "Pioggia (Radicale)", type: "base", pos: "noun" },
            { id: "rad_veicolo", lang: "zh", level: 1, word: "车", pronunciation: "chē", ipa: "ʈʂʰɤ⁵⁵", meaning: "Macchina / Veicolo (Radicale)", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", pronunciation: "mén", ipa: "mən³⁵", meaning: "Porta / Cancello (Radicale)", type: "base", pos: "noun" },

            // ALTRI RADICALI UTILI PER DERIVAZIONI
            { id: "base_grande", lang: "zh", level: 1, word: "大", pronunciation: "dà", ipa: "ta⁵¹", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo", lang: "zh", level: 1, word: "小", pronunciation: "xiǎo", ipa: "ɕjɑʊ̯²¹⁴", meaning: "Piccolo", type: "base", pos: "adj" },
            { id: "base_buono", lang: "zh", level: 1, word: "好", pronunciation: "hǎo", ipa: "xɑʊ̯²¹⁴", meaning: "Buono", type: "derived", requires: ["rad_donna", "rad_bambino"], pos: "adj" }, // Donna + Bambino = Buono
            { id: "base_nascere", lang: "zh", level: 1, word: "生", pronunciation: "shēng", ipa: "ʂəŋ⁵⁵", meaning: "Nascere / Vita", type: "base", pos: "verb" },
            { id: "rad_campo", lang: "zh", level: 1, word: "田", pronunciation: "tián", ipa: "tʰjɛn³⁵", meaning: "Campo (Radicale)", type: "base", pos: "noun" },
            { id: "rad_forza", lang: "zh", level: 1, word: "力", pronunciation: "lì", ipa: "li⁵¹", meaning: "Forza / Potere (Radicale)", type: "base", pos: "noun" },
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", pronunciation: "mián", ipa: "mjɛn³⁵", meaning: "Tetto (Radicale)", type: "base", pos: "noun" }, // Spesso non appare da solo, ma utile per logica
            { id: "rad_metallo", lang: "zh", level: 1, word: "金", pronunciation: "jīn", ipa: "tɕin⁵⁵", meaning: "Oro / Metallo", type: "base", pos: "noun" },
            { id: "rad_erba", lang: "zh", level: 1, word: "艹", pronunciation: "cǎo", ipa: "tsɑʊ̯²¹⁴", meaning: "Erba (Radicale)", type: "base", pos: "noun" },
            { id: "base_filo", lang: "zh", level: 1, word: "丝", pronunciation: "sī", ipa: "sz̩⁵⁵", meaning: "Seta / Filo", type: "base", pos: "noun" },
            { id: "base_mezzo", lang: "zh", level: 1, word: "中", pronunciation: "zhōng", ipa: "ʈʂʊŋ⁵⁵", meaning: "Mezzo / Centro", type: "base", pos: "noun" },
            { id: "base_uscire", lang: "zh", level: 1, word: "出", pronunciation: "chū", ipa: "ʈʂʰu⁵⁵", meaning: "Uscire", type: "base", pos: "verb" },
            { id: "rad_elettricita", lang: "zh", level: 2, word: "电", pronunciation: "diàn", ipa: "tjɛn⁵¹", meaning: "Elettricità", type: "base", pos: "noun" },

            // PARTICELLE GRAMMATICALI (Nascoste o visibili)
            { id: "g_zh_part_1", lang: "zh", level: 1, word: "的", pronunciation: "de", ipa: "d̥ə", meaning: "Particella Possessiva (de)", type: "base", pos: "part", grammar: "part" },
            { id: "g_zh_part_2", lang: "zh", level: 1, word: "吗", pronunciation: "ma", ipa: "ma", meaning: "Particella Interrogativa (ma)", type: "base", pos: "part", grammar: "part" },
            { id: "g_zh_part_3", lang: "zh", level: 1, word: "了", pronunciation: "le", ipa: "lə", meaning: "Particella Passato/Cambiamento (le)", type: "base", pos: "part", grammar: "part" },
            { id: "g_zh_part_4", lang: "zh", level: 1, word: "很", pronunciation: "hěn", ipa: "xən²¹⁴", meaning: "Molto (Marcatore Agg)", type: "base", pos: "adv", grammar: "adv" },
            { id: "g_zh_part_5", lang: "zh", level: 1, word: "和", pronunciation: "hé", ipa: "xɤ³⁵", meaning: "E (Congiunzione)", type: "base", pos: "conj", grammar: "conj" },
            { id: "g_zh_cl_1", lang: "zh", level: 1, word: "个", pronunciation: "gè", ipa: "kɤ⁵¹", meaning: "Classificatore Generale", type: "base", pos: "part", grammar: "cl" },
            { id: "g_zh_neg_1", lang: "zh", level: 1, word: "不", pronunciation: "bù", ipa: "pu⁵¹", meaning: "Non", type: "base", pos: "adv", grammar: "adv" },
            { id: "g_zh_neg_2", lang: "zh", level: 1, word: "没", pronunciation: "méi", ipa: "meɪ̯³⁵", meaning: "Non (avere)", type: "base", pos: "adv", grammar: "adv" },
            { id: "g_zh_dem_1", lang: "zh", level: 1, word: "这", pronunciation: "zhè", ipa: "ʈʂɤ⁵¹", meaning: "Questo", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_zh_dem_2", lang: "zh", level: 1, word: "那", pronunciation: "nà", ipa: "na⁵¹", meaning: "Quello", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_zh_dem_3", lang: "zh", level: 1, word: "这里", pronunciation: "zhèlǐ", ipa: "ʈʂɤ⁵¹ li²¹⁴", meaning: "Qui", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_zh_int_1", lang: "zh", level: 1, word: "什么", pronunciation: "shénme", ipa: "ʂən³⁵ mə", meaning: "Cosa", type: "base", pos: "pron", grammar: "int" },
            { id: "g_zh_int_2", lang: "zh", level: 1, word: "哪儿", pronunciation: "nǎr", ipa: "naɻ²¹⁴", meaning: "Dove", type: "base", pos: "pron", grammar: "int" },
            { id: "g_zh_cl_4", lang: "zh", level: 1, word: "本", pronunciation: "běn", ipa: "pən²¹⁴", meaning: "Classificatore per Libri", type: "base", pos: "part", grammar: "cl" }, // Aggiunto per "liǎng běn shū"
            { id: "g_zh_cl_2", lang: "zh", level: 1, word: "只", pronunciation: "zhī", ipa: "ʈʂɻ̩⁵⁵", meaning: "Classificatore per Animali", type: "base", pos: "part", grammar: "cl" } // Aggiunto per "yī zhī niǎo"

        ]
    },

    "fondamentali_ja": {
        title: "Fondamentali (Giapponese)",
        tags: ["basics", "ja"],
        cards: [
            // --- NUMERI ---
            { id: "num_ja1", lang: "ja", level: 1, word: "一", pronunciation: "いち", ipa: "itɕi", meaning: "Uno", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja2", lang: "ja", level: 1, word: "二", pronunciation: "に", ipa: "ni", meaning: "Due", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja3", lang: "ja", level: 1, word: "三", pronunciation: "さん", ipa: "saɴ", meaning: "Tre", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja4", lang: "ja", level: 1, word: "四", pronunciation: "よん", ipa: "joɴ", meaning: "Quattro", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja5", lang: "ja", level: 1, word: "五", pronunciation: "ご", ipa: "ɡo", meaning: "Cinque", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja6", lang: "ja", level: 1, word: "六", pronunciation: "ろく", ipa: "ɾokɯ", meaning: "Sei", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja7", lang: "ja", level: 1, word: "七", pronunciation: "なな", ipa: "nana", meaning: "Sette", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja8", lang: "ja", level: 1, word: "八", pronunciation: "はち", ipa: "hatɕi", meaning: "Otto", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja9", lang: "ja", level: 1, word: "九", pronunciation: "きゅう", ipa: "kjuː", meaning: "Nove", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja10", lang: "ja", level: 1, word: "十", pronunciation: "じゅう", ipa: "dʑɯː", meaning: "Dieci", type: "base", pos: "num", grammar: "num" },
            { id: "num_ja0", lang: "ja", level: 1, word: "零", pronunciation: "れい", ipa: "ɾei", meaning: "Zero", type: "base", pos: "num", grammar: "num" },

            // --- PRONOMI ---
            { id: "g_ja_pron_1", lang: "ja", level: 1, word: "私", pronunciation: "わたし", ipa: "wataɕi", meaning: "Io", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ja_pron_2", lang: "ja", level: 1, word: "あなた", pronunciation: "あなた", ipa: "anata", meaning: "Tu", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ja_pron_3", lang: "ja", level: 1, word: "彼", pronunciation: "かれ", ipa: "kaɾe", meaning: "Lui", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ja_pron_4", lang: "ja", level: 1, word: "彼女", pronunciation: "かのじょ", ipa: "kanodʑo", meaning: "Lei", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ja_pron_5", lang: "ja", level: 1, word: "私たち", pronunciation: "わたしたち", ipa: "wataɕitatɕi", meaning: "Noi", type: "base", pos: "pron", grammar: "pron" },

            // --- COLORI ---
            { id: "col_ja1", lang: "ja", level: 1, word: "白", pronunciation: "しろ", ipa: "ɕiɾo", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ja2", lang: "ja", level: 1, word: "黒", pronunciation: "くろ", ipa: "kɯɾo", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ja3", lang: "ja", level: 1, word: "赤", pronunciation: "あか", ipa: "aka", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ja4", lang: "ja", level: 1, word: "青", pronunciation: "あお", ipa: "ao", meaning: "Blu", type: "base", pos: "adj" },
            { id: "col_ja5", lang: "ja", level: 1, word: "緑", pronunciation: "みどり", ipa: "midoɾi", meaning: "Verde", type: "base", pos: "adj" },

            // --- RADICALI / BASI ---
            { id: "rad_uomo_ja", lang: "ja", level: 1, word: "人", pronunciation: "ひと", ipa: "hito", meaning: "Persona (Radicale)", type: "base", pos: "noun" },
            { id: "rad_bocca_ja", lang: "ja", level: 1, word: "口", pronunciation: "くち", ipa: "kɯtɕi", meaning: "Bocca (Radicale)", type: "base", pos: "noun" },
            { id: "rad_albero_ja", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "ki", meaning: "Albero (Radicale)", type: "base", pos: "noun" },
            { id: "rad_acqua_ja", lang: "ja", level: 1, word: "水", pronunciation: "みず", ipa: "mizɯ", meaning: "Acqua (Radicale)", type: "base", pos: "noun" },
            { id: "rad_fuoco_ja", lang: "ja", level: 1, word: "火", pronunciation: "ひ", ipa: "hi", meaning: "Fuoco (Radicale)", type: "base", pos: "noun" },
            { id: "rad_terra_ja", lang: "ja", level: 1, word: "土", pronunciation: "つち", ipa: "tsɯtɕi", meaning: "Terra (Radicale)", type: "base", pos: "noun" },
            { id: "rad_sole_ja", lang: "ja", level: 1, word: "日", pronunciation: "ひ", ipa: "hi", meaning: "Sole (Radicale)", type: "base", pos: "noun" },
            { id: "rad_luna_ja", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "tsɯki", meaning: "Luna (Radicale)", type: "base", pos: "noun" },
            { id: "rad_donna_ja", lang: "ja", level: 1, word: "女", pronunciation: "おんな", ipa: "onːa", meaning: "Donna (Radicale)", type: "base", pos: "noun" },
            { id: "rad_bambino_ja", lang: "ja", level: 1, word: "子", pronunciation: "こ", ipa: "ko", meaning: "Bambino (Radicale)", type: "base", pos: "noun" },
            { id: "rad_mano_ja", lang: "ja", level: 1, word: "手", pronunciation: "て", ipa: "te", meaning: "Mano (Radicale)", type: "base", pos: "noun" },
            { id: "rad_cuore_ja", lang: "ja", level: 1, word: "心", pronunciation: "こころ", ipa: "kokoɾo", meaning: "Cuore (Radicale)", type: "base", pos: "noun" },
            { id: "rad_parola_ja", lang: "ja", level: 1, word: "言", pronunciation: "こと", ipa: "koto", meaning: "Parola (Radicale)", type: "base", pos: "noun" },
            { id: "rad_pioggia_ja", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Pioggia (Radicale)", type: "base", pos: "noun" },
            { id: "rad_veicolo_ja", lang: "ja", level: 1, word: "車", pronunciation: "くるま", ipa: "kɯɾɯma", meaning: "Veicolo (Radicale)", type: "base", pos: "noun" },
            { id: "rad_porta_ja", lang: "ja", level: 1, word: "門", pronunciation: "もん", ipa: "moɴ", meaning: "Porta (Radicale)", type: "base", pos: "noun" },
            { id: "rad_orecchio_ja", lang: "ja", level: 1, word: "耳", pronunciation: "みみ", ipa: "mimi", meaning: "Orecchio (Radicale)", type: "base", pos: "noun" },
            { id: "rad_pietra_ja", lang: "ja", level: 1, word: "石", pronunciation: "いし", ipa: "iɕi", meaning: "Pietra (Radicale)", type: "base", pos: "noun" },
            { id: "rad_erba_ja", lang: "ja", level: 1, word: "草", pronunciation: "くさ", ipa: "kɯsa", meaning: "Erba (Radicale)", type: "base", pos: "noun" },
            { id: "rad_insetto_ja", lang: "ja", level: 1, word: "虫", pronunciation: "むし", ipa: "mɯɕi", meaning: "Insetto (Radicale)", type: "base", pos: "noun" },
            { id: "rad_tetto_ja", lang: "ja", level: 1, word: "屋根", pronunciation: "やね", ipa: "yane", meaning: "Tetto (Radicale)", type: "base", pos: "noun" },

            // ALTRE BASI UTILI
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "だい", ipa: "dai", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "しょう", ipa: "ɕoː", meaning: "Piccolo", type: "base", pos: "adj" },
            { id: "base_nascere_ja", lang: "ja", level: 1, word: "生", pronunciation: "せい", ipa: "sei", meaning: "Vita / Nascita", type: "base", pos: "noun" },
            { id: "rad_campo_ja", lang: "ja", level: 1, word: "田", pronunciation: "た", ipa: "ta", meaning: "Campo", type: "base", pos: "noun" },
            { id: "rad_forza_ja", lang: "ja", level: 1, word: "力", pronunciation: "ちから", ipa: "tɕikaɾa", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_metallo_ja", lang: "ja", level: 1, word: "金", pronunciation: "きん", ipa: "kiɴ", meaning: "Oro / Metallo", type: "base", pos: "noun" },
            { id: "rad_elettricita_ja", lang: "ja", level: 2, word: "電気", pronunciation: "でんき", ipa: "deŋki", meaning: "Elettricità", type: "base", pos: "noun" },
            { id: "base_mezzo_ja", lang: "ja", level: 1, word: "中", pronunciation: "なか", ipa: "naka", meaning: "Mezzo / Dentro", type: "base", pos: "noun" },
            { id: "base_uscire_ja", lang: "ja", level: 1, word: "出る", pronunciation: "でる", ipa: "deɾɯ", meaning: "Uscire", type: "base", pos: "verb" },
            { id: "base_entrare_ja", lang: "ja", level: 1, word: "入る", pronunciation: "はいる", ipa: "haiɾɯ", meaning: "Entrare", type: "base", pos: "verb" },
            { id: "base_sotto_ja", lang: "ja", level: 1, word: "下", pronunciation: "した", ipa: "ɕita", meaning: "Sotto", type: "base", pos: "noun" },
            { id: "rad_mangiare_ja", lang: "ja", level: 1, word: "食", pronunciation: "しょく", ipa: "ɕokɯ", meaning: "Mangiare (Radicale)", type: "base", pos: "noun" },

            // PARTICELLE GRAMMATICALI
            { id: "g_ja_part_1", lang: "ja", level: 1, word: "は", pronunciation: "wa", ipa: "wa", meaning: "Marcatore Tema (wa)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_2", lang: "ja", level: 1, word: "を", pronunciation: "o", ipa: "o", meaning: "Marcatore Oggetto (o)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_3", lang: "ja", level: 1, word: "に", pronunciation: "ni", ipa: "ni", meaning: "Destinazione (ni)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_4", lang: "ja", level: 1, word: "で", pronunciation: "de", ipa: "de", meaning: "Luogo/Mezzo (de)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_5", lang: "ja", level: 1, word: "の", pronunciation: "no", ipa: "no", meaning: "Possessivo (no)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_6", lang: "ja", level: 1, word: "が", pronunciation: "ga", ipa: "ɡa", meaning: "Marcatore Soggetto (ga)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_7", lang: "ja", level: 1, word: "か", pronunciation: "ka", ipa: "ka", meaning: "Interrogativo (ka)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_8", lang: "ja", level: 1, word: "と", pronunciation: "to", ipa: "to", meaning: "E / Con (to)", type: "base", pos: "part", grammar: "part" },
            { id: "g_ja_part_9", lang: "ja", level: 1, word: "も", pronunciation: "mo", ipa: "mo", meaning: "Anche (mo)", type: "base", pos: "part", grammar: "part" },

            { id: "g_ja_aux_1", lang: "ja", level: 1, word: "です", pronunciation: "desu", ipa: "desɯ", meaning: "Essere (Cortese)", type: "base", pos: "aux", grammar: "aux" },
            { id: "g_ja_aux_2", lang: "ja", level: 1, word: "ます", pronunciation: "masu", ipa: "masɯ", meaning: "Verbo (Cortese)", type: "base", pos: "aux", grammar: "aux" },
            { id: "g_ja_aux_3", lang: "ja", level: 1, word: "あります", pronunciation: "arimasu", ipa: "aɾimasɯ", meaning: "Esistere (Inanimato)", type: "base", pos: "aux", grammar: "aux" },
            { id: "g_ja_aux_4", lang: "ja", level: 1, word: "います", pronunciation: "imasu", ipa: "imasɯ", meaning: "Esistere (Animato)", type: "base", pos: "aux", grammar: "aux" },

            { id: "g_ja_dem_1", lang: "ja", level: 1, word: "これ", pronunciation: "kore", ipa: "koɾe", meaning: "Questo", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ja_dem_2", lang: "ja", level: 1, word: "それ", pronunciation: "sore", ipa: "soɾe", meaning: "Codesto", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ja_dem_3", lang: "ja", level: 1, word: "あれ", pronunciation: "are", ipa: "aɾe", meaning: "Quello", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ja_dem_4", lang: "ja", level: 1, word: "ここ", pronunciation: "koko", ipa: "koko", meaning: "Qui", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ja_dem_5", lang: "ja", level: 1, word: "そこ", pronunciation: "soko", ipa: "soko", meaning: "Lì", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ja_dem_6", lang: "ja", level: 1, word: "あそこ", pronunciation: "asoko", ipa: "asoko", meaning: "Laggiù", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ja_int_1", lang: "ja", level: 1, word: "何", pronunciation: "nani", ipa: "nani", meaning: "Cosa", type: "base", pos: "pron", grammar: "int" },
            { id: "g_ja_int_2", lang: "ja", level: 1, word: "誰", pronunciation: "dare", ipa: "daɾe", meaning: "Chi", type: "base", pos: "pron", grammar: "int" },
            { id: "g_ja_int_3", lang: "ja", level: 1, word: "どこ", pronunciation: "doko", ipa: "doko", meaning: "Dove", type: "base", pos: "pron", grammar: "int" }
        ]
    },

    "fondamentali_ar": {
        title: "Fondamentali (Arabo)",
        tags: ["basics", "ar"],
        cards: [
            // --- NUMERI ---
            { id: "num_ar1", lang: "ar", level: 1, word: "وَاحِد", pronunciation: "wāḥid", ipa: "waːħid", meaning: "Uno", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar2", lang: "ar", level: 1, word: "اِثْنَان", pronunciation: "ithnān", ipa: "iθnaːn", meaning: "Due", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar3", lang: "ar", level: 1, word: "ثَلَاثَة", pronunciation: "thalātha", ipa: "θalaːθa", meaning: "Tre", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar4", lang: "ar", level: 1, word: "أَرْبَعَة", pronunciation: "arba'a", ipa: "ʔarbaʕa", meaning: "Quattro", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar5", lang: "ar", level: 1, word: "خَمْسَة", pronunciation: "khamsa", ipa: "xamsa", meaning: "Cinque", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar6", lang: "ar", level: 1, word: "سِتَّة", pronunciation: "sitta", ipa: "sitːa", meaning: "Sei", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar7", lang: "ar", level: 1, word: "سَبْعَة", pronunciation: "sab'a", ipa: "sabʕa", meaning: "Sette", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar8", lang: "ar", level: 1, word: "ثَمَانِيَة", pronunciation: "thamāniya", ipa: "θamaːnija", meaning: "Otto", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar9", lang: "ar", level: 1, word: "تِسْعَة", pronunciation: "tis'a", ipa: "tisʕa", meaning: "Nove", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar10", lang: "ar", level: 1, word: "عَشَرَة", pronunciation: "'ashara", ipa: "ʕaʃara", meaning: "Dieci", type: "base", pos: "num", grammar: "num" },
            { id: "num_ar0", lang: "ar", level: 1, word: "صِفْر", pronunciation: "ṣifr", ipa: "sˤifr", meaning: "Zero", type: "base", pos: "num", grammar: "num" },

            // --- PRONOMI ---
            { id: "g_ar_pron_1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", ipa: "ʔana", meaning: "Io", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ar_pron_2", lang: "ar", level: 1, word: "أَنْتَ", pronunciation: "anta", ipa: "ʔanta", meaning: "Tu (m)", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ar_pron_3", lang: "ar", level: 1, word: "أَنْتِ", pronunciation: "anti", ipa: "ʔanti", meaning: "Tu (f)", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ar_pron_4", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", ipa: "huwa", meaning: "Lui", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ar_pron_5", lang: "ar", level: 1, word: "هِيَ", pronunciation: "hiya", ipa: "hija", meaning: "Lei", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ar_pron_6", lang: "ar", level: 1, word: "نَحْنُ", pronunciation: "naḥnu", ipa: "naħnu", meaning: "Noi", type: "base", pos: "pron", grammar: "pron" },
            { id: "g_ar_pron_7", lang: "ar", level: 1, word: "هُم", pronunciation: "hum", ipa: "hum", meaning: "Loro", type: "base", pos: "pron", grammar: "pron" },

            // --- COLORI ---
            { id: "col_ar1", lang: "ar", level: 1, word: "أَبْيَض", pronunciation: "abyaḍ", ipa: "ʔabjadˤ", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ar2", lang: "ar", level: 1, word: "أَسْوَد", pronunciation: "aswad", ipa: "ʔaswad", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ar3", lang: "ar", level: 1, word: "أَحْمَر", pronunciation: "aḥmar", ipa: "ʔaħmar", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ar4", lang: "ar", level: 1, word: "أَزْرَق", pronunciation: "azraq", ipa: "ʔazraq", meaning: "Blu", type: "base", pos: "adj" },
            { id: "col_ar5", lang: "ar", level: 1, word: "أَخْضَر", pronunciation: "akhḍar", ipa: "ʔaxdˤar", meaning: "Verde", type: "base", pos: "adj" },

            // --- RADICI / BASI ---
            { id: "root_ktb", lang: "ar", level: 1, word: "ك-ت-ب", pronunciation: "K-T-B", meaning: "Scrivere (Radice)", type: "root", pos: "root" },
            { id: "root_drs", lang: "ar", level: 1, word: "د-ر-س", pronunciation: "D-R-S", meaning: "Studiare (Radice)", type: "root", pos: "root" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك-ب-ر", pronunciation: "K-B-R", meaning: "Grande (Radice)", type: "root", pos: "root" },
            { id: "root_sghr", lang: "ar", level: 1, word: "ص-غ-ر", pronunciation: "S-Gh-R", meaning: "Piccolo (Radice)", type: "root", pos: "root" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ-ك-ل", pronunciation: "A-K-L", meaning: "Mangiare (Radice)", type: "root", pos: "root" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش-ر-ب", pronunciation: "Sh-R-B", meaning: "Bere (Radice)", type: "root", pos: "root" },
            { id: "root_kwn", lang: "ar", level: 1, word: "ك-و-n", pronunciation: "K-W-N", meaning: "Essere (Radice)", type: "root", pos: "root" },
            { id: "root_mlk", lang: "ar", level: 1, word: "م-ل-ك", pronunciation: "M-L-K", meaning: "Possedere (Radice)", type: "root", pos: "root" },

            // Radici Natura
            { id: "root_ard", lang: "ar", level: 1, word: "أ-ر-ض", pronunciation: "A-R-D", meaning: "Terra (Radice)", type: "root", pos: "root" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش-م-س", pronunciation: "Sh-M-S", meaning: "Sole (Radice)", type: "root", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق-م-ر", pronunciation: "Q-M-R", meaning: "Luna (Radice)", type: "root", pos: "root" },
            { id: "root_my", lang: "ar", level: 1, word: "م-ي", pronunciation: "M-Y", meaning: "Acqua (Radice)", type: "root", pos: "root" }, // O M-W-H
            { id: "base_ma", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", ipa: "maːʔ", meaning: "Acqua", type: "base", pos: "noun" },

            // PARTICELLE GRAMMATICALI
            { id: "g_ar_part_1", lang: "ar", level: 1, word: "ال", pronunciation: "al-", ipa: "al", meaning: "Il/La (Definito)", type: "base", pos: "part", grammar: "det" },
            { id: "g_ar_prep_1", lang: "ar", level: 1, word: "فِي", pronunciation: "fī", ipa: "fiː", meaning: "In", type: "base", pos: "prep", grammar: "prep" },
            { id: "g_ar_prep_2", lang: "ar", level: 1, word: "إِلَى", pronunciation: "ilā", ipa: "ʔilaː", meaning: "A / Verso", type: "base", pos: "prep", grammar: "prep" },
            { id: "g_ar_prep_3", lang: "ar", level: 1, word: "مِنْ", pronunciation: "min", ipa: "min", meaning: "Da", type: "base", pos: "prep", grammar: "prep" },
            { id: "g_ar_prep_4", lang: "ar", level: 1, word: "عَلَى", pronunciation: "'alā", ipa: "ʕalaː", meaning: "Su", type: "base", pos: "prep", grammar: "prep" },
            { id: "g_ar_prep_5", lang: "ar", level: 1, word: "بِـ", pronunciation: "bi-", ipa: "bi", meaning: "Con (strumento) / In", type: "base", pos: "prep", grammar: "prep" },
            { id: "g_ar_prep_6", lang: "ar", level: 1, word: "مَعَ", pronunciation: "ma'a", ipa: "maʕa", meaning: "Con (compagnia)", type: "base", pos: "prep", grammar: "prep" },

            { id: "g_ar_conj_1", lang: "ar", level: 1, word: "وَ", pronunciation: "wa", ipa: "wa", meaning: "E (Congiunzione)", type: "base", pos: "conj", grammar: "conj" },
            { id: "g_ar_neg_1", lang: "ar", level: 1, word: "لَا", pronunciation: "lā", ipa: "laː", meaning: "No / Non", type: "base", pos: "adv", grammar: "adv" },
            { id: "g_ar_neg_2", lang: "ar", level: 1, word: "لَيْسَ", pronunciation: "laysa", ipa: "lajsa", meaning: "Non essere", type: "base", pos: "verb", grammar: "neg" },

            { id: "g_ar_dem_1", lang: "ar", level: 1, word: "هَذَا", pronunciation: "hādhā", ipa: "haːðaː", meaning: "Questo (m)", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ar_dem_2", lang: "ar", level: 1, word: "هَذِهِ", pronunciation: "hādhihi", ipa: "haːðihi", meaning: "Questa (f)", type: "base", pos: "pron", grammar: "dem" },
            { id: "g_ar_dem_5", lang: "ar", level: 1, word: "هُنَا", pronunciation: "hunā", ipa: "hunaː", meaning: "Qui", type: "base", pos: "pron", grammar: "dem" },

            { id: "g_ar_int_1", lang: "ar", level: 1, word: "مَا", pronunciation: "mā", ipa: "maː", meaning: "Cosa", type: "base", pos: "pron", grammar: "int" },
            { id: "g_ar_int_2", lang: "ar", level: 1, word: "مَنْ", pronunciation: "man", ipa: "man", meaning: "Chi", type: "base", pos: "pron", grammar: "int" },
            { id: "g_ar_int_3", lang: "ar", level: 1, word: "أَيْنَ", pronunciation: "ayna", ipa: "ʔajna", meaning: "Dove", type: "base", pos: "pron", grammar: "int" },
            { id: "g_ar_int_5", lang: "ar", level: 1, word: "هَل", pronunciation: "hal", ipa: "hal", meaning: "Particella Interrogativa (Sì/No)", type: "base", pos: "part", grammar: "int" },
            { id: "g_ar_int_6", lang: "ar", level: 1, word: "لِمَاذَا", pronunciation: "limādhā", ipa: "limaːðaː", meaning: "Perché", type: "base", pos: "pron", grammar: "int" },
            { id: "g_ar_int_7", lang: "ar", level: 1, word: "كَم", pronunciation: "kam", ipa: "kam", meaning: "Quanto", type: "base", pos: "pron", grammar: "int" },

            { id: "g_ar_suff_1", lang: "ar", level: 1, word: "ـِي", pronunciation: "-ī", ipa: "iː", meaning: "Mio (Suffisso)", type: "base", pos: "part", grammar: "suff" },
            { id: "g_ar_suff_2", lang: "ar", level: 1, word: "ـُكَ", pronunciation: "-uka", ipa: "uka", meaning: "Tuo (m) (Suffisso)", type: "base", pos: "part", grammar: "suff" },
            { id: "g_ar_suff_4", lang: "ar", level: 1, word: "ـُهُ", pronunciation: "-uhu", ipa: "uhu", meaning: "Suo (di lui) (Suffisso)", type: "base", pos: "part", grammar: "suff" },
            { id: "g_ar_have_1", lang: "ar", level: 1, word: "عِنْدَ", pronunciation: "'inda", ipa: "ʕinda", meaning: "Presso / Avere (con suffisso)", type: "base", pos: "prep", grammar: "prep" }
        ]
    },

    // ==========================================
    // 2. SOCIAL & PEOPLE
    // ==========================================
    "sociale_zh": {
        title: "Sociale (Cinese)",
        tags: ["social", "zh"],
        cards: [
            // --- FAMIGLIA ---
            { id: "fam_zh1", lang: "zh", level: 1, word: "爸爸", pronunciation: "bàba", ipa: "pa⁵¹ pa", meaning: "Papà", type: "base", pos: "noun" },
            { id: "fam_zh2", lang: "zh", level: 1, word: "妈妈", pronunciation: "māma", ipa: "ma⁵⁵ ma", meaning: "Mamma", type: "base", pos: "noun" },
            { id: "fam_zh3", lang: "zh", level: 2, word: "哥哥", pronunciation: "gēge", ipa: "kɤ⁵⁵ kɤ", meaning: "Fratello Maggiore", type: "derived", requires: ["rad_bocca"], pos: "noun" }, // Ha radicale bocca
            { id: "fam_zh4", lang: "zh", level: 2, word: "姐姐", pronunciation: "jiějie", ipa: "tɕjɛ²¹⁴ tɕjɛ", meaning: "Sorella Maggiore", type: "derived", requires: ["rad_donna"], pos: "noun" },
            { id: "fam_zh5", lang: "zh", level: 2, word: "弟弟", pronunciation: "dìdi", ipa: "ti⁵¹ ti", meaning: "Fratello Minore", type: "base", pos: "noun" },
            { id: "fam_zh6", lang: "zh", level: 2, word: "妹妹", pronunciation: "mèimei", ipa: "meɪ̯⁵¹ meɪ̯", meaning: "Sorella Minore", type: "derived", requires: ["rad_donna"], pos: "noun" },
            { id: "fam_zh7", lang: "zh", level: 2, word: "儿子", pronunciation: "érzi", ipa: "aɻ³⁵ ts̩", meaning: "Figlio", type: "derived", requires: ["rad_bambino"], pos: "noun" },
            { id: "fam_zh8", lang: "zh", level: 2, word: "女儿", pronunciation: "nǚ'ér", ipa: "ny²¹⁴ aɻ", meaning: "Figlia", type: "derived", requires: ["rad_donna"], pos: "noun" },

            // --- SCUOLA / LAVORO ---
            { id: "soc_zh1", lang: "zh", level: 1, word: "家", pronunciation: "jiā", ipa: "tɕja⁵⁵", meaning: "Casa / Famiglia", type: "base", pos: "noun" }, // Maiale sotto tetto
            { id: "soc_zh2", lang: "zh", level: 2, word: "学校", pronunciation: "xuéxiào", ipa: "ɕɥɛ³⁵ ɕjɑʊ̯⁵¹", meaning: "Scuola", type: "derived", requires: ["rad_bambino", "rad_albero"], pos: "place", grammar: "place" }, // Bambino che impara + Albero (struttura)
            { id: "soc_zh3", lang: "zh", level: 1, word: "老师", pronunciation: "lǎoshī", ipa: "lɑʊ̯²¹⁴ ʂɻ̩⁵⁵", meaning: "Insegnante", type: "base", pos: "noun" },
            { id: "soc_zh4", lang: "zh", level: 1, word: "书", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "Libro", type: "base", pos: "noun" },
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "tɕʰjɛn³⁵", meaning: "Soldi", type: "derived", requires: ["rad_metallo"], pos: "noun" },

            // --- PERSONE & COMUNE ---
            { id: "soc_zh5", lang: "zh", level: 1, word: "朋友", pronunciation: "péngyǒu", ipa: "pʰəŋ³⁵ joʊ̯", meaning: "Amico", type: "base", pos: "noun" },
            { id: "soc_zh7", lang: "zh", level: 1, word: "名字", pronunciation: "míngzi", ipa: "miŋ³⁵ ts̩", meaning: "Nome", type: "base", pos: "noun" },
            { id: "soc_zh8", lang: "zh", level: 1, word: "你好", pronunciation: "nǐ hǎo", ipa: "ni²¹⁴ xɑʊ̯²¹⁴", meaning: "Ciao", type: "phrase", requires: ["g_zh_pron_2", "base_buono"] }, // Tu + Buono
            { id: "soc_zh9", lang: "zh", level: 2, word: "再见", pronunciation: "zàijiàn", ipa: "tsaɪ̯⁵¹ tɕjɛn⁵¹", meaning: "Arrivederci", type: "phrase", requires: [] }, // Vedere di nuovo (base)
            { id: "soc_zh10", lang: "zh", level: 2, word: "对不起", pronunciation: "duìbuqǐ", ipa: "tweɪ̯⁵¹ pu tɕʰi²¹⁴", meaning: "Scusa", type: "phrase", requires: ["g_zh_neg_1"] }
        ]
    },

    "sociale_ja": {
        title: "Sociale (Giapponese)",
        tags: ["social", "ja"],
        cards: [
            // --- FAMIGLIA (IN UCHI / SOTO - Semplificato per ora) ---
            { id: "fam_ja1", lang: "ja", level: 1, word: "父", pronunciation: "ちち", ipa: "tɕitɕi", meaning: "Papà (mio)", type: "base", pos: "noun" },
            { id: "fam_ja2", lang: "ja", level: 1, word: "母", pronunciation: "はは", ipa: "haha", meaning: "Mamma (mia)", type: "base", pos: "noun" },
            { id: "fam_ja3", lang: "ja", level: 2, word: "兄", pronunciation: "あに", ipa: "ani", meaning: "Fratello Maggiore (mio)", type: "base", pos: "noun" },
            { id: "fam_ja4", lang: "ja", level: 2, word: "姉", pronunciation: "あね", ipa: "ane", meaning: "Sorella Maggiore (mia)", type: "derived", requires: ["rad_donna_ja"], pos: "noun" },
            { id: "fam_ja5", lang: "ja", level: 2, word: "弟", pronunciation: "おとうと", ipa: "otoːto", meaning: "Fratello Minore (mio)", type: "base", pos: "noun" },
            { id: "fam_ja6", lang: "ja", level: 2, word: "妹", pronunciation: "いもうと", ipa: "imoːto", meaning: "Sorella Minore (mia)", type: "derived", requires: ["rad_donna_ja"], pos: "noun" },
            // Termini cortesi per famiglia altrui (Opzionali per ora, magari livello 3)
            { id: "fam_ja_ext_1", lang: "ja", level: 2, word: "お父さん", pronunciation: "おとうさん", ipa: "otoːsaɴ", meaning: "Padre (altrui)", type: "base", pos: "noun" },
            { id: "fam_ja_ext_2", lang: "ja", level: 2, word: "お母さん", pronunciation: "おかあさん", ipa: "okaːsaɴ", meaning: "Madre (altrui)", type: "base", pos: "noun" },

            // --- SCUOLA / COMUNE ---
            { id: "soc_ja1", lang: "ja", level: 1, word: "家", pronunciation: "いえ", ipa: "ie", meaning: "Casa", type: "base", pos: "noun" },
            { id: "soc_ja2", lang: "ja", level: 2, word: "学校", pronunciation: "がっこう", ipa: "ɡakkoː", meaning: "Scuola", type: "derived", requires: ["rad_albero_ja"], pos: "place", grammar: "place" }, // Contiene albero
            { id: "soc_ja3", lang: "ja", level: 1, word: "本", pronunciation: "ほん", ipa: "hoɴ", meaning: "Libro", type: "base", pos: "noun" }, // Anche base per albero
            { id: "soc_ja5", lang: "ja", level: 1, word: "先生", pronunciation: "せんせい", ipa: "seɴsei", meaning: "Insegnante", type: "base", pos: "noun" }, // Sen-sei (prima nato)
            { id: "soc_ja4", lang: "ja", level: 1, word: "友達", pronunciation: "ともだち", ipa: "tomodatɕi", meaning: "Amico", type: "base", pos: "noun" },
            { id: "soc_ja6", lang: "ja", level: 1, word: "名前", pronunciation: "なまえ", ipa: "namae", meaning: "Nome", type: "base", pos: "noun" },
            { id: "soc_ja7", lang: "ja", level: 1, word: "こんにちは", pronunciation: "こんにちは", ipa: "koɲɲitɕiwa", meaning: "Ciao / Buon pomeriggio", type: "phrase" },
            { id: "soc_ja8", lang: "ja", level: 1, word: "さようなら", pronunciation: "さようなら", ipa: "sajoːnaɾa", meaning: "Arrivederci", type: "phrase" },
            { id: "soc_ja9", lang: "ja", level: 1, word: "ありがとう", pronunciation: "ありがとう", ipa: "aɾiɡatoː", meaning: "Grazie", type: "phrase" }
        ]
    },

    "sociale_ar": {
        title: "Sociale (Arabo)",
        tags: ["social", "ar"],
        cards: [
            // --- FAMIGLIA ---
            { id: "fam_ar1", lang: "ar", level: 1, word: "أَب", pronunciation: "ab", ipa: "ʔab", meaning: "Padre", type: "base", pos: "noun" },
            { id: "fam_ar2", lang: "ar", level: 1, word: "أُمّ", pronunciation: "umm", ipa: "ʔumm", meaning: "Madre", type: "base", pos: "noun" },
            { id: "fam_ar3", lang: "ar", level: 1, word: "أَخ", pronunciation: "akh", ipa: "ʔax", meaning: "Fratello", type: "base", pos: "noun" },
            { id: "fam_ar4", lang: "ar", level: 1, word: "أُخْت", pronunciation: "ukht", ipa: "ʔuxt", meaning: "Sorella", type: "base", pos: "noun" },
            { id: "fam_ar5", lang: "ar", level: 2, word: "اِبْن", pronunciation: "ibn", ipa: "ibn", meaning: "Figlio", type: "base", pos: "noun" },
            { id: "fam_ar6", lang: "ar", level: 2, word: "اِبْنَة", pronunciation: "ibna", ipa: "ibna", meaning: "Figlia", type: "base", pos: "noun" },

            // --- SCUOLA / COMUNE ---
            { id: "soc_ar1", lang: "ar", level: 1, word: "بَيْت", pronunciation: "bayt", ipa: "bajt", meaning: "Casa", type: "base", pos: "noun" },
            { id: "soc_ar2", lang: "ar", level: 1, word: "كِتَاب", pronunciation: "kitāb", ipa: "kitaːb", meaning: "Libro", type: "derived", requires: ["root_ktb"], pos: "noun" }, // Radice K-T-B
            { id: "soc_ar3", lang: "ar", level: 1, word: "مَكْتَب", pronunciation: "maktab", ipa: "maktab", meaning: "Scrivania / Ufficio", type: "derived", requires: ["root_ktb"], pos: "noun" }, // Radice K-T-B
            { id: "soc_ar4", lang: "ar", level: 1, word: "مَدْرَسَة", pronunciation: "madrasa", ipa: "madrasa", meaning: "Scuola", type: "derived", requires: ["root_drs"], pos: "place", grammar: "place" }, // Radice D-R-S
            { id: "soc_ar5", lang: "ar", level: 2, word: "مُدَرِّس", pronunciation: "mudarris", ipa: "mudarris", meaning: "Insegnante", type: "derived", requires: ["root_drs"], pos: "noun" },

            { id: "soc_ar6", lang: "ar", level: 1, word: "صَدِيق", pronunciation: "ṣadīq", ipa: "sˤadiːq", meaning: "Amico", type: "base", pos: "noun" },
            { id: "soc_ar7", lang: "ar", level: 1, word: "اِسْم", pronunciation: "ism", ipa: "ism", meaning: "Nome", type: "base", pos: "noun" },
            { id: "soc_ar8", lang: "ar", level: 1, word: "شُكْرًا", pronunciation: "shukran", ipa: "ʃukran", meaning: "Grazie", type: "phrase" },
            { id: "soc_ar9", lang: "ar", level: 1, word: "مَرْحَبًا", pronunciation: "marḥaban", ipa: "marħaban", meaning: "Ciao", type: "phrase" },
            { id: "soc_ar10", lang: "ar", level: 1, word: "مَعَ السَّلَامَة", pronunciation: "ma'a as-salāma", ipa: "maʕa as salaːma", meaning: "Arrivederci (con la pace)", type: "phrase" }
        ]
    },

    // ==========================================
    // 3. NATURE
    // ==========================================
    "natura_zh": {
        title: "Natura (Cinese)",
        tags: ["nature", "zh"],
        cards: [
            // --- VECCHIE SCHEDE AGGIORNATE ---
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", ipa: "ʂan⁵⁵", meaning: "Montagna", type: "base", pos: "place", grammar: "place" }, // Simile a un picco
            { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", ipa: "tʰjɛn⁵⁵", meaning: "Cielo / Giorno", type: "base", pos: "place", grammar: "place" }, // Uomo con testa piatta / cielo sopra
            { id: "zh13", lang: "zh", level: 1, word: "林", pronunciation: "lín", ipa: "lin³⁵", meaning: "Bosco", type: "derived", requires: ["rad_albero"], pos: "place", grammar: "place" }, // Due alberi
            { id: "zh14", lang: "zh", level: 2, word: "森林", pronunciation: "sēnlín", ipa: "sən⁵⁵ lin³⁵", meaning: "Foresta", type: "derived", requires: ["zh13", "rad_albero"], pos: "place", grammar: "place" }, // Tre alberi
            { id: "zh15", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", ipa: "xwɔ²¹⁴ ʂan⁵⁵", meaning: "Vulcano", type: "derived", requires: ["rad_fuoco", "zh7"], pos: "place", grammar: "place" }, // Fuoco + Montagna
            { id: "zh16", lang: "zh", level: 2, word: "海", pronunciation: "hǎi", ipa: "xaɪ̯²¹⁴", meaning: "Mare", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" }, // Acqua + Ogni
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa⁵⁵", meaning: "Fiore", type: "derived", requires: ["rad_erba"], pos: "noun" }, // Erba sopra (cambiamento)

            // --- NUOVE SCHEDE ---
            { id: "n_zh_ext_1", lang: "zh", level: 2, word: "丘", pronunciation: "qiū", ipa: "tɕʰjoʊ̯⁵⁵", meaning: "Collina", type: "base", pos: "place", grammar: "place" },
            { id: "n_zh_ext_2", lang: "zh", level: 2, word: "谷", pronunciation: "gǔ", ipa: "ku²¹⁴", meaning: "Valle", type: "base", pos: "place", grammar: "place" },
            // Fiume (Acqua + Può) -> Richiede Acqua
            { id: "n_zh_ext_3", lang: "zh", level: 2, word: "河", pronunciation: "hé", ipa: "xɤ³⁵", meaning: "Fiume", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            // Lago (Acqua + AnticoL) -> Richiede Acqua
            { id: "n_zh_ext_4", lang: "zh", level: 2, word: "湖", pronunciation: "hú", ipa: "xu³⁵", meaning: "Lago", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            // Spiaggia (Mare + Spiaggia [Acqua]) -> Richiede Mare
            { id: "n_zh_ext_5", lang: "zh", level: 3, word: "海滩", pronunciation: "hǎitān", ipa: "xaɪ̯²¹⁴ tʰan⁵⁵", meaning: "Spiaggia", type: "derived", requires: ["zh16"], pos: "place", grammar: "place" },
            // Isola (Uccello + Montagna) -> Richiede Montagna
            { id: "n_zh_ext_6", lang: "zh", level: 2, word: "岛", pronunciation: "dǎo", ipa: "tɑʊ̯²¹⁴", meaning: "Isola", type: "derived", requires: ["zh7"], pos: "place", grammar: "place" },
            // Deserto (Sabbia + Deserto) -> Richiede Acqua/Poccolo (Sabbia)
            { id: "n_zh_ext_7", lang: "zh", level: 3, word: "沙漠", pronunciation: "shāmò", ipa: "ʂa⁵⁵ mwɔ⁵¹", meaning: "Deserto", type: "derived", requires: ["rad_acqua", "base_piccolo"], pos: "place", grammar: "place" },
            // Cascata (Acqua che cade) -> Richiede Acqua
            { id: "n_zh_ext_8", lang: "zh", level: 3, word: "瀑布", pronunciation: "pùbù", ipa: "pʰu⁵¹ pu⁵¹", meaning: "Cascata", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            // Grotta (Buco)
            { id: "n_zh_ext_9", lang: "zh", level: 3, word: "洞穴", pronunciation: "dòngxué", ipa: "tʊŋ⁵¹ ɕɥɛ³⁵", meaning: "Grotta", type: "base", pos: "place", grammar: "place" },
            // Orizzonte (Terra + Piatto + Linea)
            { id: "n_zh_ext_10", lang: "zh", level: 3, word: "地平线", pronunciation: "dìpíngxiàn", ipa: "ti⁵¹ pʰiŋ³⁵ ɕjɛn⁵¹", meaning: "Orizzonte", type: "derived", requires: ["rad_terra", "base_filo"], pos: "noun" },
            // Terra/Suolo (Terra) -> Richiede Terra
            { id: "n_zh_ext_11", lang: "zh", level: 2, word: "土地", pronunciation: "tǔdì", ipa: "tʰu²¹⁴ ti⁵¹", meaning: "Terreno", type: "derived", requires: ["rad_terra"], pos: "noun" },
            // Pietra (Radicale Pietra)
            { id: "n_zh_ext_12", lang: "zh", level: 1, word: "石", pronunciation: "shí", ipa: "ʂɻ̩³⁵", meaning: "Pietra", type: "base", pos: "noun" },
            // Albero (Albero) -> Richiede Albero
            { id: "n_zh_ext_13", lang: "zh", level: 2, word: "树", pronunciation: "shù", ipa: "ʂu⁵¹", meaning: "Albero", type: "derived", requires: ["rad_albero"], pos: "noun" },
            // Giungla (Fitto + Bosco) -> Richiede Bosco
            { id: "n_zh_ext_14", lang: "zh", level: 3, word: "丛林", pronunciation: "cónglín", ipa: "tsʰʊŋ³⁵ lin³⁵", meaning: "Giungla", type: "derived", requires: ["zh13"], pos: "place", grammar: "place" },
            // Pianta (Piantare + Cosa) -> Richiede Albero
            { id: "n_zh_ext_15", lang: "zh", level: 2, word: "植物", pronunciation: "zhíwù", ipa: "ʈʂɻ̩³⁵ u⁵¹", meaning: "Pianta", type: "derived", requires: ["rad_albero"], pos: "noun" },
            // Erba (Radicale Erba) -> Richiede Erba
            { id: "n_zh_ext_16", lang: "zh", level: 2, word: "草", pronunciation: "cǎo", ipa: "tsɑʊ̯²¹⁴", meaning: "Erba", type: "derived", requires: ["rad_erba"], pos: "noun" },
            // Foglia (Erba + Foglia) -> Richiede Erba e Albero
            { id: "n_zh_ext_17", lang: "zh", level: 2, word: "叶子", pronunciation: "yèzi", ipa: "jɛ⁵¹ ts̩", meaning: "Foglia", type: "derived", requires: ["rad_erba", "rad_albero", "rad_bambino"], pos: "noun" },
            // Ramo (Albero + Supporto) -> Richiede Albero
            { id: "n_zh_ext_18", lang: "zh", level: 2, word: "树枝", pronunciation: "shùzhī", ipa: "ʂu⁵¹ ʈʂɻ̩⁵⁵", meaning: "Ramo", type: "derived", requires: ["n_zh_ext_13"], pos: "noun" },
            // Radice (Albero + Radice) -> Richiede Albero
            { id: "n_zh_ext_19", lang: "zh", level: 2, word: "树根", pronunciation: "shùgēn", ipa: "ʂu⁵¹ kən⁵⁵", meaning: "Radice", type: "derived", requires: ["n_zh_ext_13"], pos: "noun" },
            // Tronco (Albero + Corpo) -> Richiede Albero
            { id: "n_zh_ext_20", lang: "zh", level: 2, word: "树干", pronunciation: "shùgàn", ipa: "ʂu⁵¹ kan⁵¹", meaning: "Tronco", type: "derived", requires: ["n_zh_ext_13"], pos: "noun" },
            // Seme (Grano + Bambino) -> Richiede Bambino
            { id: "n_zh_ext_21", lang: "zh", level: 2, word: "种子", pronunciation: "zhǒngzi", ipa: "ʈʂʊŋ²¹⁴ ts̩", meaning: "Seme", type: "derived", requires: ["rad_bambino"], pos: "noun" },
            // Frutta (Frutto + Cosa) -> Richiede Albero
            { id: "n_zh_ext_22", lang: "zh", level: 2, word: "水果", pronunciation: "shuǐguǒ", ipa: "ʂweɪ̯²¹⁴ kwɔ²¹⁴", meaning: "Frutta", type: "derived", requires: ["rad_albero"], pos: "noun" }, // Guo ha albero sotto
            // Legno (Albero + Materiale) -> Richiede Albero
            { id: "n_zh_ext_23", lang: "zh", level: 2, word: "木材", pronunciation: "mùcái", ipa: "mu⁵¹ tsʰaɪ̯³⁵", meaning: "Legname", type: "derived", requires: ["rad_albero"], pos: "noun" },
            // Sole (Grande + Yang) -> Richiede Grande e Sole (Yang ha sole)
            { id: "n_zh_ext_24", lang: "zh", level: 2, word: "太阳", pronunciation: "tàiyáng", ipa: "tʰaɪ̯⁵¹ jɑŋ³⁵", meaning: "Sole (stella)", type: "derived", requires: ["rad_sole", "base_grande"], pos: "noun" }, // Tai (Grande+punto)
            // Luna (Luna + Luminoso) -> Richiede Luna
            { id: "n_zh_ext_25", lang: "zh", level: 2, word: "月亮", pronunciation: "yuèliang", ipa: "ɥɛ⁵¹ ljɑŋ", meaning: "Luna (satellite)", type: "derived", requires: ["rad_luna"], pos: "noun" },
            // Stella (Sole + Nascere) -> Richiede Sole e Nascere
            { id: "n_zh_ext_26", lang: "zh", level: 2, word: "星星", pronunciation: "xīngxing", ipa: "ɕiŋ⁵⁵ ɕiŋ", meaning: "Stella", type: "derived", requires: ["rad_sole", "base_nascere"], pos: "noun" },
            // Nuvola (Pioggia + Nuvola) -> Richiede Pioggia
            { id: "n_zh_ext_27", lang: "zh", level: 2, word: "云", pronunciation: "yún", ipa: "yn³⁵", meaning: "Nuvola", type: "derived", requires: ["rad_pioggia"], pos: "noun" }, // Semplificato non ha pioggia, tradizionale sì. Usiamo base per ora nel semplificato
            // Pioggia (Radicale Pioggia) -> Richiede Pioggia
            { id: "n_zh_ext_28", lang: "zh", level: 1, word: "雨", pronunciation: "yǔ", ipa: "y²¹⁴", meaning: "Pioggia", type: "derived", requires: ["rad_pioggia"], pos: "noun" },
            // Neve (Pioggia + Mano/Scopa) -> Richiede Pioggia
            { id: "n_zh_ext_29", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", ipa: "ɕɥɛ²¹⁴", meaning: "Neve", type: "derived", requires: ["rad_pioggia"], pos: "noun" },
            { id: "n_zh_ext_30", lang: "zh", level: 2, word: "风", pronunciation: "fēng", ipa: "fəŋ⁵⁵", meaning: "Vento", type: "base", pos: "noun" },
            // Tempesta (Pioggia + Violento) -> Richiede Pioggia
            { id: "n_zh_ext_31", lang: "zh", level: 3, word: "暴风雨", pronunciation: "bàofēngyǔ", ipa: "pɑʊ̯⁵¹ fəŋ⁵⁵ y²¹⁴", meaning: "Tempesta", type: "derived", requires: ["n_zh_ext_30", "n_zh_ext_28"], pos: "noun" },
            // Nebbia (Pioggia + Dovere) -> Richiede Pioggia
            { id: "n_zh_ext_32", lang: "zh", level: 2, word: "雾", pronunciation: "wù", ipa: "u⁵¹", meaning: "Nebbia", type: "derived", requires: ["rad_pioggia"], pos: "noun" },
            // Ghiaccio (Acqua) -> Richiede Acqua
            { id: "n_zh_ext_33", lang: "zh", level: 2, word: "冰", pronunciation: "bīng", ipa: "piŋ⁵⁵", meaning: "Ghiaccio", type: "derived", requires: ["rad_acqua"], pos: "noun" },
            // Clima (Aria + Tempo) -> Richiede Cielo
            { id: "n_zh_ext_34", lang: "zh", level: 2, word: "气候", pronunciation: "qìhòu", ipa: "tɕʰi⁵¹ xoʊ̯⁵¹", meaning: "Clima", type: "base", pos: "noun" },
            // Animale (Cosa che si muove: Nuvola+Forza) -> Richiede Forza
            { id: "n_zh_ext_35", lang: "zh", level: 2, word: "动物", pronunciation: "dòngwù", ipa: "tʊŋ⁵¹ u⁵¹", meaning: "Animale", type: "derived", requires: ["rad_forza"], pos: "noun" },
            { id: "n_zh_ext_36", lang: "zh", level: 3, word: "野生", pronunciation: "yěshēng", ipa: "jɛ²¹⁴ ʂəŋ⁵⁵", meaning: "Selvatico", type: "derived", requires: ["rad_campo", "base_nascere"], pos: "adj" },
            { id: "n_zh_ext_37", lang: "zh", level: 2, word: "鸟", pronunciation: "niǎo", ipa: "njɑʊ̯²¹⁴", meaning: "Uccello", type: "base", pos: "noun" },
            { id: "n_zh_ext_38", lang: "zh", level: 2, word: "鱼", pronunciation: "yú", ipa: "y³⁵", meaning: "Pesce", type: "base", pos: "noun" },
            // Insetto (Richiede radicale Insetto/Verme)
            { id: "n_zh_ext_39", lang: "zh", level: 2, word: "昆虫", pronunciation: "kūnchóng", ipa: "kʰwən⁵⁵ ʈʂʰʊŋ³⁵", meaning: "Insetto", type: "base", pos: "noun" },
            // Mammifero
            { id: "n_zh_ext_40", lang: "zh", level: 4, word: "哺乳动物", pronunciation: "bǔrǔ dòngwù", ipa: "pu²¹⁴ ʐu²¹⁴ tʊŋ⁵¹ u⁵¹", meaning: "Mammifero", type: "derived", requires: ["n_zh_ext_35", "rad_bocca", "rad_mano", "rad_bambino"], pos: "noun" },
            // Rettile (Animale che striscia)
            { id: "n_zh_ext_41", lang: "zh", level: 3, word: "爬行动物", pronunciation: "páxíng dòngwù", ipa: "pʰa³⁵ ɕiŋ³⁵ tʊŋ⁵¹ u⁵¹", meaning: "Rettile", type: "derived", requires: ["n_zh_ext_35"], pos: "noun" },
            { id: "n_zh_ext_42", lang: "zh", level: 3, word: "大自然", pronunciation: "dàzìrán", ipa: "ta⁵¹ dz̩⁵¹ ʐan³⁵", meaning: "Natura", type: "derived", requires: ["base_grande", "base_nascere"], pos: "noun" }
        ]
    },

    "natura_ja": {
        title: "Natura (Giapponese)",
        tags: ["nature", "ja"],
        cards: [
            // --- VECCHIE SCHEDE AGGIORNATE ---
            { id: "ja7", lang: "ja", level: 1, word: "山", pronunciation: "やま", ipa: "jama", meaning: "Montagna", type: "base", pos: "place", grammar: "place" },
            { id: "ja12", lang: "ja", level: 1, word: "空", pronunciation: "そら", ipa: "soɾa", meaning: "Cielo", type: "base", pos: "place", grammar: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "森", pronunciation: "もり", ipa: "moɾi", meaning: "Foresta", type: "derived", requires: ["rad_albero_ja"], pos: "place", grammar: "place" }, // Tre alberi
            { id: "ja14", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", ipa: "kazaɴ", meaning: "Vulcano", type: "derived", requires: ["rad_fuoco_ja", "ja7"], pos: "place", grammar: "place" }, // Fuoco + Montagna
            { id: "ja15", lang: "ja", level: 1, word: "海", pronunciation: "うみ", ipa: "ɯmi", meaning: "Mare", type: "derived", requires: ["rad_acqua_ja"], pos: "place", grammar: "place" },
            { id: "ja16", lang: "ja", level: 1, word: "花", pronunciation: "はな", ipa: "hana", meaning: "Fiore", type: "derived", requires: ["rad_erba_ja"], pos: "noun" },

            // --- NUOVE SCHEDE ---
            { id: "n_ja_ext_1", lang: "ja", level: 2, word: "川", pronunciation: "かわ", ipa: "kawa", meaning: "Fiume", type: "base", pos: "place", grammar: "place" },
            { id: "n_ja_ext_2", lang: "ja", level: 2, word: "湖", pronunciation: "みずうみ", ipa: "mizɯːmi", meaning: "Lago", type: "derived", requires: ["rad_acqua_ja"], pos: "place", grammar: "place" },
            { id: "n_ja_ext_3", lang: "ja", level: 3, word: "海岸", pronunciation: "かいがん", ipa: "kaiɡaɴ", meaning: "Spiaggia / Costa", type: "derived", requires: ["ja15"], pos: "place", grammar: "place" },
            { id: "n_ja_ext_4", lang: "ja", level: 2, word: "島", pronunciation: "しま", ipa: "ɕima", meaning: "Isola", type: "derived", requires: ["ja7"], pos: "place", grammar: "place" }, // Contiene montagna
            { id: "n_ja_ext_5", lang: "ja", level: 3, word: "砂漠", pronunciation: "さばく", ipa: "sabakɯ", meaning: "Deserto", type: "derived", requires: ["rad_acqua_ja", "rad_pietra_ja"], pos: "place", grammar: "place" },
            { id: "n_ja_ext_6", lang: "ja", level: 3, word: "滝", pronunciation: "たき", ipa: "taki", meaning: "Cascata", type: "derived", requires: ["rad_acqua_ja"], pos: "place", grammar: "place" },
            { id: "n_ja_ext_7", lang: "ja", level: 2, word: "洞窟", pronunciation: "どうくつ", ipa: "doːkɯtsɯ", meaning: "Grotta", type: "base", pos: "place", grammar: "place" },
            { id: "n_ja_ext_8", lang: "ja", level: 2, word: "太陽", pronunciation: "たいよう", ipa: "taijoː", meaning: "Sole", type: "derived", requires: ["rad_sole_ja", "base_grande_ja"], pos: "noun" },
            { id: "n_ja_ext_9", lang: "ja", level: 2, word: "月", pronunciation: "つき", ipa: "tsɯki", meaning: "Luna", type: "derived", requires: ["rad_luna_ja"], pos: "noun" },
            { id: "n_ja_ext_10", lang: "ja", level: 2, word: "星", pronunciation: "ほし", ipa: "hoɕi", meaning: "Stella", type: "derived", requires: ["rad_sole_ja", "base_nascere_ja"], pos: "noun" },
            { id: "n_ja_ext_11", lang: "ja", level: 2, word: "雲", pronunciation: "くも", ipa: "kɯmo", meaning: "Nuvola", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            { id: "n_ja_ext_12", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Pioggia", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            { id: "n_ja_ext_13", lang: "ja", level: 2, word: "雪", pronunciation: "ゆき", ipa: "jɯki", meaning: "Neve", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            { id: "n_ja_ext_14", lang: "ja", level: 2, word: "風", pronunciation: "かぜ", ipa: "kaze", meaning: "Vento", type: "base", pos: "noun" },
            { id: "n_ja_ext_15", lang: "ja", level: 3, word: "嵐", pronunciation: "あらし", ipa: "aɾaɕi", meaning: "Tempesta", type: "derived", requires: ["rad_pioggia_ja", "ja7"], pos: "noun" },
            { id: "n_ja_ext_16", lang: "ja", level: 2, word: "霧", pronunciation: "きり", ipa: "kiɾi", meaning: "Nebbia", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            { id: "n_ja_ext_17", lang: "ja", level: 2, word: "氷", pronunciation: "こおり", ipa: "koːɾi", meaning: "Ghiaccio", type: "derived", requires: ["rad_acqua_ja"], pos: "noun" },
            { id: "n_ja_ext_18", lang: "ja", level: 2, word: "動物", pronunciation: "どうぶつ", ipa: "doːbɯtsɯ", meaning: "Animale", type: "derived", requires: ["rad_forza_ja"], pos: "noun" },
            { id: "n_ja_ext_19", lang: "ja", level: 2, word: "鳥", pronunciation: "とり", ipa: "toɾi", meaning: "Uccello", type: "base", pos: "noun" },
            { id: "n_ja_ext_20", lang: "ja", level: 2, word: "魚", pronunciation: "さかな", ipa: "sakana", meaning: "Pesce", type: "base", pos: "noun" },
            { id: "n_ja_ext_21", lang: "ja", level: 2, word: "虫", pronunciation: "むし", ipa: "mɯɕi", meaning: "Insetto", type: "derived", requires: ["rad_insetto_ja"], pos: "noun" },
            { id: "n_ja_ext_22", lang: "ja", level: 2, word: "木", pronunciation: "き", ipa: "ki", meaning: "Albero", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            { id: "n_ja_ext_23", lang: "ja", level: 2, word: "草", pronunciation: "くさ", ipa: "kɯsa", meaning: "Erba", type: "derived", requires: ["rad_erba_ja"], pos: "noun" },
            { id: "n_ja_ext_24", lang: "ja", level: 3, word: "自然", pronunciation: "しぜん", ipa: "ɕizeɴ", meaning: "Natura", type: "base", pos: "noun" }
        ]
    },

    "natura_ar": {
        title: "Natura (Arabo)",
        tags: ["nature", "ar"],
        cards: [
            // --- VECCHIE SCHEDE AGGIORNATE ---
            { id: "ar7", lang: "ar", level: 1, word: "جَبَل", pronunciation: "jabal", ipa: "dʒabal", meaning: "Montagna", type: "base", pos: "place", grammar: "place" },
            { id: "ar12", lang: "ar", level: 1, word: "سَمَاء", pronunciation: "samā'", ipa: "samaːʔ", meaning: "Cielo", type: "base", pos: "place", grammar: "place" },
            { id: "ar13", lang: "ar", level: 1, word: "غَابَة", pronunciation: "ghāba", ipa: "ɣaːba", meaning: "Foresta", type: "base", pos: "place", grammar: "place" },
            { id: "ar15", lang: "ar", level: 1, word: "بَحْر", pronunciation: "baḥr", ipa: "baħr", meaning: "Mare", type: "base", pos: "place", grammar: "place" },
            { id: "ar16", lang: "ar", level: 1, word: "زَهْرَة", pronunciation: "zahra", ipa: "zahra", meaning: "Fiore", type: "base", pos: "noun" },

            // --- NUOVE SCHEDE ---
            { id: "n_ar_ext_1", lang: "ar", level: 2, word: "تَلّ", pronunciation: "tall", ipa: "tall", meaning: "Collina", type: "base", pos: "place", grammar: "place" },
            { id: "n_ar_ext_2", lang: "ar", level: 2, word: "وَادِي", pronunciation: "wādī", ipa: "waːdiː", meaning: "Valle", type: "base", pos: "place", grammar: "place" },
            { id: "n_ar_ext_3", lang: "ar", level: 2, word: "نَهْر", pronunciation: "nahr", ipa: "nahr", meaning: "Fiume", type: "derived", requires: ["root_my"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_4", lang: "ar", level: 2, word: "بُحَيْرَة", pronunciation: "buḥayra", ipa: "buħajra", meaning: "Lago", type: "derived", requires: ["ar15", "root_sghr"], pos: "place", grammar: "place" }, // Piccolo Mare
            { id: "n_ar_ext_5", lang: "ar", level: 3, word: "شَاطِئ", pronunciation: "shāṭi'", ipa: "ʃaːtˤiʔ", meaning: "Spiaggia", type: "derived", requires: ["ar15"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_6", lang: "ar", level: 2, word: "جَزِيرَة", pronunciation: "jazīra", ipa: "dʒaziːra", meaning: "Isola", type: "base", pos: "place", grammar: "place" },
            { id: "n_ar_ext_7", lang: "ar", level: 3, word: "صَحْرَاء", pronunciation: "ṣaḥrā'", ipa: "sˤaħraːʔ", meaning: "Deserto", type: "base", pos: "place", grammar: "place" },
            { id: "n_ar_ext_8", lang: "ar", level: 3, word: "شَلَّال", pronunciation: "shallāl", ipa: "ʃallaːl", meaning: "Cascata", type: "derived", requires: ["root_my"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_9", lang: "ar", level: 3, word: "كَهْف", pronunciation: "kahf", ipa: "kahf", meaning: "Grotta", type: "base", pos: "place", grammar: "place" },
            { id: "n_ar_ext_10", lang: "ar", level: 2, word: "أَرْض", pronunciation: "arḍ", ipa: "ʔardˤ", meaning: "Terra / Suolo", type: "derived", requires: ["root_ard"], pos: "noun" }, // Radice A-R-D
            { id: "n_ar_ext_11", lang: "ar", level: 1, word: "حَجَر", pronunciation: "ḥajar", ipa: "ħadʒar", meaning: "Pietra", type: "base", pos: "noun" },
            { id: "n_ar_ext_12", lang: "ar", level: 2, word: "شَجَرَة", pronunciation: "shajara", ipa: "ʃadʒara", meaning: "Albero", type: "base", pos: "noun" },
            { id: "n_ar_ext_13", lang: "ar", level: 2, word: "نَبَات", pronunciation: "nabāt", ipa: "nabaːt", meaning: "Pianta", type: "base", pos: "noun" },
            { id: "n_ar_ext_14", lang: "ar", level: 2, word: "عُشْب", pronunciation: "'ushb", ipa: "ʕuʃb", meaning: "Erba", type: "base", pos: "noun" },
            { id: "n_ar_ext_15", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", ipa: "ʃams", meaning: "Sole", type: "derived", requires: ["root_shms"], pos: "noun" }, // Radice Sh-M-S
            { id: "n_ar_ext_16", lang: "ar", level: 2, word: "قَمَر", pronunciation: "qamar", ipa: "qamar", meaning: "Luna", type: "derived", requires: ["root_qmr"], pos: "noun" }, // Radice Q-M-R
            { id: "n_ar_ext_17", lang: "ar", level: 2, word: "نَجْم", pronunciation: "najm", ipa: "nadʒm", meaning: "Stella", type: "base", pos: "noun" },
            { id: "n_ar_ext_18", lang: "ar", level: 2, word: "سَحَاب", pronunciation: "saḥāb", ipa: "saħaːb", meaning: "Nuvola", type: "base", pos: "noun" },
            { id: "n_ar_ext_19", lang: "ar", level: 1, word: "مَطَر", pronunciation: "maṭar", ipa: "matˤar", meaning: "Pioggia", type: "derived", requires: ["root_my"], pos: "noun" },
            { id: "n_ar_ext_20", lang: "ar", level: 2, word: "ثَلْج", pronunciation: "thalj", ipa: "θaldʒ", meaning: "Neve", type: "base", pos: "noun" },
            { id: "n_ar_ext_21", lang: "ar", level: 2, word: "رِيح", pronunciation: "rīḥ", ipa: "riːħ", meaning: "Vento", type: "base", pos: "noun" },
            { id: "n_ar_ext_22", lang: "ar", level: 3, word: "عَاصِفَة", pronunciation: "'āṣifa", ipa: "ʕaːsˤifa", meaning: "Tempesta", type: "base", pos: "noun" },
            { id: "n_ar_ext_23", lang: "ar", level: 2, word: "ضَبَاب", pronunciation: "ḍabāb", ipa: "dˤabaːb", meaning: "Nebbia", type: "base", pos: "noun" },
            { id: "n_ar_ext_24", lang: "ar", level: 2, word: "حَيَوَان", pronunciation: "ḥayawān", ipa: "ħajawaːn", meaning: "Animale", type: "base", pos: "noun" },
            { id: "n_ar_ext_25", lang: "ar", level: 2, word: "طَائِر", pronunciation: "ṭā'ir", ipa: "tˤaːʔir", meaning: "Uccello", type: "base", pos: "noun" },
            { id: "n_ar_ext_26", lang: "ar", level: 2, word: "سَمَك", pronunciation: "samak", ipa: "samak", meaning: "Pesce", type: "base", pos: "noun" },
            { id: "n_ar_ext_27", lang: "ar", level: 2, word: "حَشَرَة", pronunciation: "ḥashara", ipa: "ħaʃara", meaning: "Insetto", type: "base", pos: "noun" },
            { id: "n_ar_ext_28", lang: "ar", level: 3, word: "طَبِيعَة", pronunciation: "ṭabī'a", ipa: "tˤabiːʕa", meaning: "Natura", type: "base", pos: "noun" }
        ]
    },

    // ==========================================
    // 4. TRAVEL & PLACES
    // ==========================================
    "viaggio_zh": {
        title: "Viaggio (Cinese)",
        tags: ["travel", "zh"],
        cards: [
            // --- VECCHIE SCHEDE AGGIORNATE ---
            { id: "zh8", lang: "zh", level: 1, word: "飞机", pronunciation: "fēijī", ipa: "feɪ̯⁵⁵ tɕi⁵⁵", meaning: "Aereo", type: "derived", requires: ["rad_veicolo", "zh12"], pos: "noun" }, // Volare + Macchina
            { id: "zh9", lang: "zh", level: 1, word: "火车", pronunciation: "huǒchē", ipa: "xwɔ²¹⁴ ʈʂʰɤ⁵⁵", meaning: "Treno", type: "derived", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" }, // Fuoco + Macchina
            { id: "zh10", lang: "zh", level: 1, word: "酒店", pronunciation: "jiǔdiàn", ipa: "tɕjoʊ̯²¹⁴ tjɛn⁵¹", meaning: "Hotel", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" }, // Alcol + Negozio
            { id: "zh17", lang: "zh", level: 2, word: "地图", pronunciation: "dìtú", ipa: "ti⁵¹ tʰu³⁵", meaning: "Mappa", type: "derived", requires: ["rad_terra"], pos: "noun" }, // Terra + Disegno
            { id: "zh18", lang: "zh", level: 2, word: "行李", pronunciation: "xíngli", ipa: "ɕiŋ³⁵ li", meaning: "Valigia", type: "derived", requires: ["rad_veicolo"], pos: "noun" }, // Viaggiare + Prugna?? (Li: bagaglio)

            // --- NUOVE SCHEDE ---
            { id: "t_zh_ext_1", lang: "zh", level: 2, word: "护照", pronunciation: "hùzhào", ipa: "xu⁵¹ ʈʂɑʊ̯⁵¹", meaning: "Passaporto", type: "derived", requires: ["rad_mano"], pos: "noun" },
            { id: "t_zh_ext_2", lang: "zh", level: 2, word: "票", pronunciation: "piào", ipa: "pʰjɑʊ̯⁵¹", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "t_zh_ext_3", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", ipa: "ʈʂʰɤ⁵⁵ ʈʂan⁵¹", meaning: "Stazione", type: "derived", requires: ["rad_veicolo"], pos: "place", grammar: "place" }, // Veicolo + Stare
            { id: "t_zh_ext_4", lang: "zh", level: 2, word: "机场", pronunciation: "jīchǎng", ipa: "tɕi⁵⁵ ʈʂʰɑŋ²¹⁴", meaning: "Aeroporto", type: "derived", requires: ["zh8", "rad_terra"], pos: "place", grammar: "place" }, // Macchina + Campo
            { id: "t_zh_ext_5", lang: "zh", level: 2, word: "地铁", pronunciation: "dìtiě", ipa: "ti⁵¹ tʰjɛ²¹⁴", meaning: "Metro", type: "derived", requires: ["rad_terra", "rad_metallo"], pos: "noun" }, // Terra + Ferro
            { id: "t_zh_ext_6", lang: "zh", level: 2, word: "公共汽车", pronunciation: "gōnggòng qìchē", ipa: "kʊŋ⁵⁵ kʊŋ⁵¹ tɕʰi⁵¹ ʈʂʰɤ⁵⁵", meaning: "Autobus", type: "derived", requires: ["rad_veicolo"], pos: "noun" },
            { id: "t_zh_ext_7", lang: "zh", level: 2, word: "出租车", pronunciation: "chūzūchē", ipa: "ʈʂʰu⁵⁵ tsu⁵⁵ ʈʂʰɤ⁵⁵", meaning: "Taxi", type: "derived", requires: ["base_uscire", "rad_veicolo"], pos: "noun" },
            { id: "t_zh_ext_8", lang: "zh", level: 2, word: "路", pronunciation: "lù", ipa: "lu⁵¹", meaning: "Strada", type: "base", pos: "place", grammar: "place" },
            { id: "t_zh_ext_9", lang: "zh", level: 3, word: "方向", pronunciation: "fāngxiàng", ipa: "fɑŋ⁵⁵ ɕjɑŋ⁵¹", meaning: "Direzione", type: "base", pos: "noun" },
            { id: "t_zh_ext_10", lang: "zh", level: 2, word: "左", pronunciation: "zuǒ", ipa: "tswɔ²¹⁴", meaning: "Sinistra", type: "base", pos: "noun" }, // O direz.
            { id: "t_zh_ext_11", lang: "zh", level: 2, word: "右", pronunciation: "yòu", ipa: "joʊ̯⁵¹", meaning: "Destra", type: "base", pos: "noun" },
            { id: "t_zh_ext_12", lang: "zh", level: 2, word: "旅行", pronunciation: "lǚxíng", ipa: "ly²¹⁴ ɕiŋ³⁵", meaning: "Viaggiare", type: "derived", requires: ["zh17"], pos: "verb" },
            { id: "t_zh_ext_13", lang: "zh", level: 2, word: "国家", pronunciation: "guójiā", ipa: "kwɔ³⁵ tɕja⁵⁵", meaning: "Paese", type: "derived", requires: ["soc_zh1"], pos: "place", grammar: "place" }, // Regno + Casa
            { id: "t_zh_ext_14", lang: "zh", level: 2, word: "游客", pronunciation: "yóukè", ipa: "joʊ̯³⁵ kʰɤ⁵¹", meaning: "Turista", type: "derived", requires: ["rad_acqua"], pos: "noun" },
            { id: "t_zh_ext_15", lang: "zh", level: 2, word: "签证", pronunciation: "qiānzhèng", ipa: "tɕʰjɛn⁵⁵ ʈʂəŋ⁵¹", meaning: "Visto", type: "derived", requires: ["rad_parola"], pos: "noun" }
        ]
    },

    "viaggio_ja": {
        title: "Viaggio (Giapponese)",
        tags: ["travel", "ja"],
        cards: [
            // --- VECCHIE SCHEDE AGGIORNATE ---
            { id: "ja8", lang: "ja", level: 1, word: "飛行機", pronunciation: "ひこうき", ipa: "hikoːki", meaning: "Aereo", type: "derived", requires: ["ja12"], pos: "noun" },
            { id: "ja9", lang: "ja", level: 1, word: "電車", pronunciation: "でんしゃ", ipa: "deɴɕa", meaning: "Treno", type: "derived", requires: ["rad_elettricita_ja", "rad_veicolo_ja"], pos: "noun" }, // Elettricità + Macchina
            { id: "ja10", lang: "ja", level: 1, word: "ホテル", pronunciation: "ホテル", ipa: "hoterɯ", meaning: "Hotel", type: "base", pos: "place", grammar: "place" },
            { id: "ja17", lang: "ja", level: 2, word: "地図", pronunciation: "ちず", ipa: "tɕizɯ", meaning: "Mappa", type: "derived", requires: ["rad_terra_ja"], pos: "noun" },
            { id: "ja18", lang: "ja", level: 2, word: "荷物", pronunciation: "にもつ", ipa: "nimotsɯ", meaning: "Bagaglio", type: "base", pos: "noun" },

            // --- NUOVE SCHEDE ---
            { id: "t_ja_ext_1", lang: "ja", level: 2, word: "パスポート", pronunciation: "パスポート", ipa: "pasɯpoːto", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "t_ja_ext_2", lang: "ja", level: 2, word: "切符", pronunciation: "きっぷ", ipa: "kip̚pɯ", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "t_ja_ext_3", lang: "ja", level: 2, word: "駅", pronunciation: "えき", ipa: "eki", meaning: "Stazione", type: "base", pos: "place", grammar: "place" },
            { id: "t_ja_ext_4", lang: "ja", level: 2, word: "空港", pronunciation: "くうこう", ipa: "kɯːkoː", meaning: "Aeroporto", type: "derived", requires: ["ja12", "ja15"], pos: "place", grammar: "place" }, // Cielo + Porto
            { id: "t_ja_ext_5", lang: "ja", level: 2, word: "地下鉄", pronunciation: "ちかてつ", ipa: "tɕikatetsɯ", meaning: "Metro", type: "derived", requires: ["rad_terra_ja", "base_sotto_ja", "rad_metallo_ja"], pos: "noun" }, // Terra + Sotto + Ferro
            { id: "t_ja_ext_6", lang: "ja", level: 2, word: "バス", pronunciation: "バス", ipa: "basɯ", meaning: "Autobus", type: "base", pos: "noun" },
            { id: "t_ja_ext_7", lang: "ja", level: 2, word: "タクシー", pronunciation: "タクシー", ipa: "takɯɕiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "t_ja_ext_8", lang: "ja", level: 2, word: "道", pronunciation: "みち", ipa: "mitɕi", meaning: "Strada", type: "base", pos: "place", grammar: "place" },
            { id: "t_ja_ext_9", lang: "ja", level: 3, word: "方向", pronunciation: "ほうこう", ipa: "hoːkoː", meaning: "Direzione", type: "base", pos: "noun" },
            { id: "t_ja_ext_10", lang: "ja", level: 2, word: "左", pronunciation: "ひだり", ipa: "hidaɾi", meaning: "Sinistra", type: "base", pos: "noun" },
            { id: "t_ja_ext_11", lang: "ja", level: 2, word: "右", pronunciation: "みぎ", ipa: "miɡi", meaning: "Destra", type: "base", pos: "noun" },
            { id: "t_ja_ext_12", lang: "ja", level: 2, word: "旅行", pronunciation: "りょこう", ipa: "ɾjokoː", meaning: "Viaggio", type: "base", pos: "noun" },
            { id: "t_ja_ext_13", lang: "ja", level: 2, word: "国", pronunciation: "くに", ipa: "kɯni", meaning: "Paese", type: "base", pos: "place", grammar: "place" },
            { id: "t_ja_ext_14", lang: "ja", level: 2, word: "観光客", pronunciation: "かんこうきゃく", ipa: "kaɴkoːkjakɯ", meaning: "Turista", type: "base", pos: "noun" },
            { id: "t_ja_ext_15", lang: "ja", level: 2, word: "ビザ", pronunciation: "ビザ", ipa: "biza", meaning: "Visto", type: "base", pos: "noun" }
        ]
    },

    "viaggio_ar": {
        title: "Viaggio (Arabo)",
        tags: ["travel", "ar"],
        cards: [
            // --- VECCHIE SCHEDE AGGIORNATE ---
            { id: "ar8", lang: "ar", level: 1, word: "طَائِرَة", pronunciation: "ṭā'ira", ipa: "tˤaːʔira", meaning: "Aereo", type: "base", pos: "noun" },
            { id: "ar9", lang: "ar", level: 1, word: "قِطَار", pronunciation: "qiṭār", ipa: "qitˤaːr", meaning: "Treno", type: "base", pos: "noun" },
            { id: "ar10", lang: "ar", level: 1, word: "فُنْدُق", pronunciation: "funduq", ipa: "funduq", meaning: "Hotel", type: "base", pos: "place", grammar: "place" },
            { id: "ar17", lang: "ar", level: 2, word: "خَرِيطَة", pronunciation: "kharīṭa", ipa: "xariːtˤa", meaning: "Mappa", type: "base", pos: "noun" },
            { id: "ar18", lang: "ar", level: 2, word: "حَقِيبَة", pronunciation: "ḥaqība", ipa: "ħaqiːba", meaning: "Bagaglio / Borsa", type: "base", pos: "noun" },

            // --- NUOVE SCHEDE ---
            { id: "t_ar_ext_1", lang: "ar", level: 2, word: "جَوَاز سَفَر", pronunciation: "jawāz safar", ipa: "dʒawaːz safar", meaning: "Passaporto", type: "derived", requires: ["root_ktb"], pos: "noun" }, // Safar: Viaggio
            { id: "t_ar_ext_2", lang: "ar", level: 2, word: "تَذْكِرَة", pronunciation: "tadhkira", ipa: "taðkira", meaning: "Biglietto", type: "derived", requires: ["root_ktb"], pos: "noun" },
            { id: "t_ar_ext_3", lang: "ar", level: 2, word: "مَحَطَّة", pronunciation: "maḥaṭṭa", ipa: "maħatˤtˤa", meaning: "Stazione", type: "base", pos: "place", grammar: "place" },
            { id: "t_ar_ext_4", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", ipa: "matˤaːr", meaning: "Aeroporto", type: "derived", requires: ["ar8"], pos: "place", grammar: "place" },
            { id: "t_ar_ext_5", lang: "ar", level: 2, word: "مِتْرُو", pronunciation: "mitrw", ipa: "mitru", meaning: "Metro", type: "base", pos: "noun" },
            { id: "t_ar_ext_6", lang: "ar", level: 2, word: "حَافِلَة", pronunciation: "ḥāfila", ipa: "ħaːfila", meaning: "Autobus", type: "base", pos: "noun" },
            { id: "t_ar_ext_7", lang: "ar", level: 2, word: "سَيَّارَة أُجْرَة", pronunciation: "sayyārat ujra", ipa: "sajjaːrat ʔudʒra", meaning: "Taxi", type: "derived", requires: ["rad_veicolo_ar"], pos: "noun" },
            { id: "t_ar_ext_8", lang: "ar", level: 2, word: "طَرِيق", pronunciation: "ṭarīq", ipa: "tˤariːq", meaning: "Strada", type: "base", pos: "place", grammar: "place" },
            { id: "t_ar_ext_9", lang: "ar", level: 3, word: "اِتِّجَاه", pronunciation: "ittijāh", ipa: "ittidʒaːh", meaning: "Direzione", type: "base", pos: "noun" },
            { id: "t_ar_ext_10", lang: "ar", level: 2, word: "يَسَار", pronunciation: "yasār", ipa: "jasaːr", meaning: "Sinistra", type: "base", pos: "noun" },
            { id: "t_ar_ext_11", lang: "ar", level: 2, word: "يَمِين", pronunciation: "yamīn", ipa: "jamiːn", meaning: "Destra", type: "base", pos: "noun" },
            { id: "t_ar_ext_12", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", ipa: "safar", meaning: "Viaggio", type: "base", pos: "noun" },
            { id: "t_ar_ext_13", lang: "ar", level: 2, word: "بَلَد", pronunciation: "balad", ipa: "balad", meaning: "Paese", type: "base", pos: "place", grammar: "place" },
            { id: "t_ar_ext_14", lang: "ar", level: 2, word: "سَائِح", pronunciation: "sā'iḥ", ipa: "saːʔiħ", meaning: "Turista", type: "base", pos: "noun" },
            { id: "t_ar_ext_15", lang: "ar", level: 2, word: "تَأْشِيرَة", pronunciation: "ta'shīra", ipa: "taʔʃiːra", meaning: "Visto", type: "base", pos: "noun" }
        ]
    },

    // ==========================================
    // 5. VERBS (Chinese Top 100 Selection)
    // ==========================================
    "verbi_zh": {
        title: "Verbi (Cinese)",
        tags: ["verbs", "zh"],
        cards: [
            // --- AZIONI BASE ---
            { id: "v_zh_1", lang: "zh", level: 1, word: "是", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "Essere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_2", lang: "zh", level: 1, word: "有", pronunciation: "yǒu", ipa: "joʊ̯²¹⁴", meaning: "Avere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_3", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "Andare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_4", lang: "zh", level: 1, word: "来", pronunciation: "lái", ipa: "laɪ̯³⁵", meaning: "Venire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_5", lang: "zh", level: 1, word: "吃", pronunciation: "chī", ipa: "ʈʂʰɻ̩⁵⁵", meaning: "Mangiare", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            { id: "v_zh_6", lang: "zh", level: 1, word: "喝", pronunciation: "hē", ipa: "xɤ⁵⁵", meaning: "Bere", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            { id: "v_zh_7", lang: "zh", level: 1, word: "看", pronunciation: "kàn", ipa: "kʰan⁵¹", meaning: "Guardare / Leggere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_8", lang: "zh", level: 1, word: "听", pronunciation: "tīng", ipa: "tʰiŋ⁵⁵", meaning: "Ascoltare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_9", lang: "zh", level: 1, word: "说", pronunciation: "shuō", ipa: "ʂwɔ⁵⁵", meaning: "Parlare/Dire", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            { id: "v_zh_10", lang: "zh", level: 1, word: "写", pronunciation: "xiě", ipa: "ɕjɛ²¹⁴", meaning: "Scrivere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_11", lang: "zh", level: 1, word: "做", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "Fare", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },
            { id: "v_zh_12", lang: "zh", level: 1, word: "买", pronunciation: "mǎi", ipa: "maɪ̯²¹⁴", meaning: "Comprare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_13", lang: "zh", level: 1, word: "卖", pronunciation: "mài", ipa: "maɪ̯⁵¹", meaning: "Vendere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_14", lang: "zh", level: 1, word: "坐", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "Sedersi", type: "derived", requires: ["rad_terra", "rad_uomo"], pos: "verb", grammar: "verb" },
            { id: "v_zh_15", lang: "zh", level: 1, word: "读", pronunciation: "dú", ipa: "tu³⁵", meaning: "Leggere", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            { id: "v_zh_16", lang: "zh", level: 1, word: "睡", pronunciation: "shuì", ipa: "ʂweɪ̯⁵¹", meaning: "Dormire", type: "derived", requires: ["rad_occhio"], pos: "verb", grammar: "verb" }, // Occhio (Mu) è simile a sole ma diverso. Usiamo base per ora
            { id: "v_zh_17", lang: "zh", level: 1, word: "想", pronunciation: "xiǎng", ipa: "ɕjɑŋ²¹⁴", meaning: "Pensare / Volere", type: "derived", requires: ["rad_cuore", "rad_albero", "rad_occhio"], pos: "verb", grammar: "verb" },
            { id: "v_zh_18", lang: "zh", level: 1, word: "爱", pronunciation: "ài", ipa: "aɪ̯⁵¹", meaning: "Amare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_19", lang: "zh", level: 1, word: "喜欢", pronunciation: "xǐhuan", ipa: "ɕi²¹⁴ xwan⁵⁵", meaning: "Piacere", type: "phrase", requires: [] },
            { id: "v_zh_20", lang: "zh", level: 1, word: "认识", pronunciation: "rènshi", ipa: "ʐən⁵¹ ʂɻ̩⁵⁵", meaning: "Conoscere", type: "phrase", requires: ["rad_parola"] },
            { id: "v_zh_21", lang: "zh", level: 1, word: "住", pronunciation: "zhù", ipa: "ʈʂu⁵¹", meaning: "Abitare / Vivere", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },
            { id: "v_zh_22", lang: "zh", level: 1, word: "叫", pronunciation: "jiào", ipa: "tɕjɑʊ̯⁵¹", meaning: "Chiamarsi", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            { id: "v_zh_23", lang: "zh", level: 1, word: "学习", pronunciation: "xuéxí", ipa: "ɕɥɛ³⁵ ɕi³⁵", meaning: "Studiare", type: "phrase", requires: ["rad_bambino"] },
            { id: "v_zh_24", lang: "zh", level: 1, word: "工作", pronunciation: "gōngzuò", ipa: "kʊŋ⁵⁵ tswɔ⁵¹", meaning: "Lavorare", type: "phrase", requires: ["rad_uomo"] },
            { id: "v_zh_25", lang: "zh", level: 2, word: "玩", pronunciation: "wán", ipa: "wan³⁵", meaning: "Giocare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_26", lang: "zh", level: 2, word: "穿", pronunciation: "chuān", ipa: "ʈʂʰwan⁵⁵", meaning: "Indossare", type: "derived", requires: ["rad_tetto"], pos: "verb", grammar: "verb" },
            { id: "v_zh_27", lang: "zh", level: 2, word: "给", pronunciation: "gěi", ipa: "keɪ̯²¹⁴", meaning: "Dare", type: "derived", requires: ["base_filo"], pos: "verb", grammar: "verb" },
            { id: "v_zh_28", lang: "zh", level: 2, word: "找", pronunciation: "zhǎo", ipa: "ʈʂɑʊ̯²¹⁴", meaning: "Cercare", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            { id: "v_zh_29", lang: "zh", level: 2, word: "懂", pronunciation: "dǒng", ipa: "tʊŋ²¹⁴", meaning: "Capire", type: "derived", requires: ["rad_cuore", "rad_erba"], pos: "verb", grammar: "verb" },
            { id: "v_zh_30", lang: "zh", level: 2, word: "笑", pronunciation: "xiào", ipa: "ɕjɑʊ̯⁵¹", meaning: "Ridere", type: "derived", requires: ["rad_bambu"], pos: "verb", grammar: "verb" }, // Bambu (Simile a erba sopra)
            { id: "v_zh_31", lang: "zh", level: 2, word: "哭", pronunciation: "kū", ipa: "kʰu⁵⁵", meaning: "Piangere", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            { id: "v_zh_32", lang: "zh", level: 2, word: "帮助", pronunciation: "bāngzhù", ipa: "pɑŋ⁵⁵ ʈʂu⁵¹", meaning: "Aiutare", type: "phrase", requires: ["rad_forza"] },
            { id: "v_zh_33", lang: "zh", level: 2, word: "让", pronunciation: "ràng", ipa: "ʐɑŋ⁵¹", meaning: "Lasciare / Permettere", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            { id: "v_zh_34", lang: "zh", level: 2, word: "告诉", pronunciation: "gàosu", ipa: "kɑʊ̯⁵¹ su", meaning: "Dire a qualcuno", type: "phrase", requires: ["rad_bocca", "rad_parola"] },
            { id: "v_zh_35", lang: "zh", level: 2, word: "开始", pronunciation: "kāishǐ", ipa: "kʰaɪ̯⁵⁵ ʂɻ̩²¹⁴", meaning: "Iniziare", type: "phrase", requires: ["rad_donna"] },
            { id: "v_zh_36", lang: "zh", level: 2, word: "结束", pronunciation: "jiéshù", ipa: "tɕjɛ³⁵ ʂu⁵¹", meaning: "Finire", type: "phrase", requires: ["base_filo", "rad_albero"] },
            { id: "v_zh_37", lang: "zh", level: 2, word: "相信", pronunciation: "xiāngxìn", ipa: "ɕjɑŋ⁵⁵ ɕin⁵¹", meaning: "Credere", type: "phrase", requires: ["rad_parola", "rad_albero"] }

        ]
    },

    "verbi_ja": {
        title: "Verbi (Giapponese)",
        tags: ["verbs", "ja"],
        cards: [
            // --- AZIONI BASE ---
            { id: "v_ja_1", lang: "ja", level: 1, word: "する", pronunciation: "suru", ipa: "sɯɾɯ", meaning: "Fare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_2", lang: "ja", level: 1, word: "だ", pronunciation: "da", ipa: "da", meaning: "Essere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_3", lang: "ja", level: 1, word: "行く", pronunciation: "いく", ipa: "ikɯ", meaning: "Andare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_4", lang: "ja", level: 1, word: "来る", pronunciation: "くる", ipa: "kɯɾɯ", meaning: "Venire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_5", lang: "ja", level: 1, word: "食べる", pronunciation: "たべる", ipa: "tabeɾɯ", meaning: "Mangiare", type: "derived", requires: ["rad_mangiare_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_6", lang: "ja", level: 1, word: "飲む", pronunciation: "のむ", ipa: "nomɯ", meaning: "Bere", type: "derived", requires: ["rad_mangiare_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_7", lang: "ja", level: 1, word: "見る", pronunciation: "みる", ipa: "miɾɯ", meaning: "Guardare / Vedere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_8", lang: "ja", level: 1, word: "聞く", pronunciation: "きく", ipa: "kikɯ", meaning: "Ascoltare", type: "derived", requires: ["rad_orecchio_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_9", lang: "ja", level: 1, word: "話す", pronunciation: "はなす", ipa: "hanasɯ", meaning: "Parlare", type: "derived", requires: ["rad_parola_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_10", lang: "ja", level: 1, word: "書く", pronunciation: "かく", ipa: "kakɯ", meaning: "Scrivere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_11", lang: "ja", level: 1, word: "読む", pronunciation: "よむ", ipa: "jomɯ", meaning: "Leggere", type: "derived", requires: ["rad_parola_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_12", lang: "ja", level: 1, word: "買う", pronunciation: "かう", ipa: "kaɯ", meaning: "Comprare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_13", lang: "ja", level: 1, word: "売る", pronunciation: "うる", ipa: "ɯɾɯ", meaning: "Vendere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_14", lang: "ja", level: 1, word: "座る", pronunciation: "すわる", ipa: "sɯwaɾɯ", meaning: "Sedersi", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_15", lang: "ja", level: 1, word: "寝る", pronunciation: "ねる", ipa: "neɾɯ", meaning: "Dormire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_16", lang: "ja", level: 1, word: "考える", pronunciation: "かんがえる", ipa: "kaŋɡaeɾɯ", meaning: "Pensare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_17", lang: "ja", level: 1, word: "愛する", pronunciation: "あいする", ipa: "aisɯɾɯ", meaning: "Amare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_18", lang: "ja", level: 1, word: "好く", pronunciation: "すく", ipa: "sɯkɯ", meaning: "Piacere", type: "base", pos: "verb", grammar: "verb" }, // Solitamente aggettivo "suki", ma come verbo base
            { id: "v_ja_19", lang: "ja", level: 1, word: "知る", pronunciation: "しる", ipa: "ɕiɾɯ", meaning: "Sapere / Conoscere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_20", lang: "ja", level: 1, word: "分かる", pronunciation: "わかる", ipa: "wakaɾɯ", meaning: "Capire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_21", lang: "ja", level: 1, word: "住む", pronunciation: "すむ", ipa: "sɯmɯ", meaning: "Abitare", type: "derived", requires: ["rad_uomo_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_22", lang: "ja", level: 1, word: "学ぶ", pronunciation: "まなぶ", ipa: "manabɯ", meaning: "Imparare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_23", lang: "ja", level: 1, word: "働く", pronunciation: "はたらく", ipa: "hataɾakɯ", meaning: "Lavorare", type: "derived", requires: ["rad_uomo_ja", "rad_forza_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_24", lang: "ja", level: 2, word: "遊ぶ", pronunciation: "あそぶ", ipa: "asobɯ", meaning: "Giocare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_25", lang: "ja", level: 2, word: "着る", pronunciation: "きる", ipa: "kiɾɯ", meaning: "Indossare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_26", lang: "ja", level: 2, word: "あげる", pronunciation: "あげる", ipa: "aɡeɾɯ", meaning: "Dare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_27", lang: "ja", level: 2, word: "探す", pronunciation: "さがす", ipa: "saɡasɯ", meaning: "Cercare", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_28", lang: "ja", level: 2, word: "笑う", pronunciation: "わらう", ipa: "waɾaɯ", meaning: "Ridere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_29", lang: "ja", level: 2, word: "泣く", pronunciation: "なく", ipa: "nakɯ", meaning: "Piangere", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_30", lang: "ja", level: 2, word: "助ける", pronunciation: "たすける", ipa: "tasɯkeɾɯ", meaning: "Aiutare", type: "derived", requires: ["rad_forza_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_31", lang: "ja", level: 2, word: "待つ", pronunciation: "まつ", ipa: "matsɯ", meaning: "Aspettare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_32", lang: "ja", level: 2, word: "始める", pronunciation: "はじめる", ipa: "hadʑimeɾɯ", meaning: "Iniziare", type: "derived", requires: ["rad_donna_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_33", lang: "ja", level: 2, word: "終わる", pronunciation: "おわる", ipa: "owaɾɯ", meaning: "Finire", type: "derived", requires: ["base_filo"], pos: "verb", grammar: "verb" }, // Filo inteso come metafora non presente nel kanji (filo è ito, owaru usa ito hen)
            { id: "v_ja_34", lang: "ja", level: 2, word: "信じる", pronunciation: "しんじる", ipa: "ɕindʑiɾɯ", meaning: "Credere", type: "derived", requires: ["rad_parola_ja"], pos: "verb", grammar: "verb" },
            { id: "v_ja_35", lang: "ja", level: 2, word: "歩く", pronunciation: "あるく", ipa: "aɾɯkɯ", meaning: "Camminare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ja_36", lang: "ja", level: 2, word: "走る", pronunciation: "はしる", ipa: "haɕiɾɯ", meaning: "Correre", type: "derived", requires: ["rad_terra_ja"], pos: "verb", grammar: "verb" }

        ]
    },

    "verbi_ar": {
        title: "Verbi (Arabo)",
        tags: ["verbs", "ar"],
        cards: [
            // --- AZIONI BASE ---
            { id: "v_ar_1", lang: "ar", level: 1, word: "كَانَ", pronunciation: "kāna", ipa: "kaːna", meaning: "Essere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_2", lang: "ar", level: 1, word: "ذَهَبَ", pronunciation: "dhahaba", ipa: "ðahaba", meaning: "Andare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_3", lang: "ar", level: 1, word: "جَاءَ", pronunciation: "jā'a", ipa: "dʒaːʔa", meaning: "Venire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_4", lang: "ar", level: 1, word: "أَكَلَ", pronunciation: "akala", ipa: "ʔakala", meaning: "Mangiare", type: "derived", requires: ["root_akl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_5", lang: "ar", level: 1, word: "شَرِبَ", pronunciation: "shariba", ipa: "ʃariba", meaning: "Bere", type: "derived", requires: ["root_shrb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_6", lang: "ar", level: 1, word: "رَأَى", pronunciation: "ra'ā", ipa: "raʔaː", meaning: "Vedere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_7", lang: "ar", level: 1, word: "سَمِعَ", pronunciation: "sami'a", ipa: "samiʕa", meaning: "Ascoltare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_8", lang: "ar", level: 1, word: "تَكَلَّمَ", pronunciation: "takallama", ipa: "takallama", meaning: "Parlare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_9", lang: "ar", level: 1, word: "قَالَ", pronunciation: "qāla", ipa: "qaːla", meaning: "Dire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_10", lang: "ar", level: 1, word: "كَتَبَ", pronunciation: "kataba", ipa: "kataba", meaning: "Scrivere", type: "derived", requires: ["root_ktb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_11", lang: "ar", level: 1, word: "قَرَأَ", pronunciation: "qara'a", ipa: "qaraʔa", meaning: "Leggere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_12", lang: "ar", level: 1, word: "فَعَلَ", pronunciation: "fa'ala", ipa: "faʕala", meaning: "Fare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_13", lang: "ar", level: 1, word: "عَمِلَ", pronunciation: "'amila", ipa: "ʕamila", meaning: "Lavorare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_14", lang: "ar", level: 1, word: "اِشْتَرَى", pronunciation: "ishtarā", ipa: "iʃtaraː", meaning: "Comprare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_15", lang: "ar", level: 1, word: "بَاعَ", pronunciation: "bā'a", ipa: "baːʕa", meaning: "Vendere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_16", lang: "ar", level: 1, word: "جَلَسَ", pronunciation: "jalasa", ipa: "dʒalasa", meaning: "Sedersi", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_17", lang: "ar", level: 1, word: "نَامَ", pronunciation: "nāma", ipa: "naːma", meaning: "Dormire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_18", lang: "ar", level: 1, word: "فَكَّرَ", pronunciation: "fakkara", ipa: "fakkara", meaning: "Pensare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_19", lang: "ar", level: 1, word: "حَبَّ", pronunciation: "ḥabba", ipa: "ħabba", meaning: "Amare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_20", lang: "ar", level: 1, word: "عَرَفَ", pronunciation: "'arafa", ipa: "ʕarafa", meaning: "Conoscere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_21", lang: "ar", level: 1, word: "فَهِمَ", pronunciation: "fahima", ipa: "fahima", meaning: "Capire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_22", lang: "ar", level: 1, word: "سَكَنَ", pronunciation: "sakana", ipa: "sakana", meaning: "Abitare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_23", lang: "ar", level: 1, word: "دَرَسَ", pronunciation: "darasa", ipa: "darasa", meaning: "Studiare", type: "derived", requires: ["root_drs"], pos: "verb", grammar: "verb" },
            { id: "v_ar_24", lang: "ar", level: 2, word: "لَعِبَ", pronunciation: "la'iba", ipa: "laʕiba", meaning: "Giocare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_25", lang: "ar", level: 2, word: "لَبِسَ", pronunciation: "labisa", ipa: "labisa", meaning: "Indossare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_26", lang: "ar", level: 2, word: "أَعْطَى", pronunciation: "a'ṭā", ipa: "ʔaʕtˤaː", meaning: "Dare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_27", lang: "ar", level: 2, word: "بَحَثَ", pronunciation: "baḥatha", ipa: "baħaθa", meaning: "Cercare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_28", lang: "ar", level: 2, word: "ضَحِكَ", pronunciation: "ḍaḥika", ipa: "dˤaħika", meaning: "Ridere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_29", lang: "ar", level: 2, word: "بَكَى", pronunciation: "bakā", ipa: "bakaː", meaning: "Piangere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_30", lang: "ar", level: 2, word: "سَاعَدَ", pronunciation: "sā'ada", ipa: "saːʕada", meaning: "Aiutare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_31", lang: "ar", level: 2, word: "سَمَحَ", pronunciation: "samaḥa", ipa: "samaħa", meaning: "Permettere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_32", lang: "ar", level: 2, word: "أَخْبَرَ", pronunciation: "akhbara", ipa: "ʔaxbara", meaning: "Informare/Dire a", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_33", lang: "ar", level: 2, word: "بَدَأَ", pronunciation: "bada'a", ipa: "badaʔa", meaning: "Iniziare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_34", lang: "ar", level: 2, word: "اِنْتَهَى", pronunciation: "intahā", ipa: "intahaː", meaning: "Finire", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_35", lang: "ar", level: 2, word: "صَدَّقَ", pronunciation: "ṣaddaqa", ipa: "sˤaddaqa", meaning: "Credere", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_36", lang: "ar", level: 2, word: "مَشَى", pronunciation: "mashā", ipa: "maʃaː", meaning: "Camminare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_ar_37", lang: "ar", level: 2, word: "جَرَى", pronunciation: "jarā", ipa: "dʒaraː", meaning: "Correre", type: "base", pos: "verb", grammar: "verb" }
        ]
    },

};

// ==========================================
// 6. SENTENCE BANK (Frasi Complesse)
// ==========================================
const sentenceBank = [
    // --- CINESE ---
    { id: "s_zh_1", lang: "zh", text: "你好吗？", pronunciation: "Nǐ hǎo ma?", translation: "Come stai?", requires: ["soc_zh8", "g_zh_part_2"] },
    { id: "s_zh_2", lang: "zh", text: "我很好。", pronunciation: "Wǒ hěn hǎo.", translation: "Sto molto bene.", requires: ["g_zh_pron_1", "g_zh_part_4", "base_buono"] },
    { id: "s_zh_3", lang: "zh", text: "这是什么？", pronunciation: "Zhè shì shénme?", translation: "Cos'è questo?", requires: ["g_zh_dem_1", "v_zh_1", "g_zh_int_1"] },
    { id: "s_zh_4", lang: "zh", text: "你是老师吗？", pronunciation: "Nǐ shì lǎoshī ma?", translation: "Sei un insegnante?", requires: ["g_zh_pron_2", "v_zh_1", "soc_zh3", "g_zh_part_2"] },
    { id: "s_zh_5", lang: "zh", text: "我也爱你。", pronunciation: "Wǒ yě ài nǐ.", translation: "Ti amo anch'io.", requires: ["g_zh_pron_1", "v_zh_18", "g_zh_pron_2"] }, // Ye (anche) non ancora in DB, ma frase comune
    { id: "s_zh_6", lang: "zh", text: "我想去中国。", pronunciation: "Wǒ xiǎng qù Zhōngguó.", translation: "Voglio andare in Cina.", requires: ["g_zh_pron_1", "v_zh_17", "v_zh_3", "t_zh_ext_13"] }, // Zhongguo (Cina) non esplicito, ma "t_zh_ext_13" è Paese.

    // --- GIAPPONESE ---
    { id: "s_ja_1", lang: "ja", text: "元気ですか？", pronunciation: "Genki desu ka?", translation: "Come stai?", requires: ["g_ja_aux_1", "g_ja_part_7"] }, // Genki (Energia/Origine)
    { id: "s_ja_2", lang: "ja", text: "これは何ですか？", pronunciation: "Kore wa nan desu ka?", translation: "Cos'è questo?", requires: ["g_ja_dem_1", "g_ja_part_1", "g_ja_int_1", "g_ja_aux_1", "g_ja_part_7"] },
    { id: "s_ja_3", lang: "ja", text: "私は学生です。", pronunciation: "Watashi wa gakusei desu.", translation: "Io sono uno studente.", requires: ["g_ja_pron_1", "g_ja_part_1", "soc_ja2", "base_nascere_ja", "g_ja_aux_1"] }, // Gaku-sei (Scuola-Nato)
    { id: "s_ja_4", lang: "ja", text: "猫が好きです。", pronunciation: "Neko ga suki desu.", translation: "Mi piacciono i gatti.", requires: ["g_ja_part_6", "v_ja_18", "g_ja_aux_1"] }, // Neko non ancora aggiunto.
    { id: "s_ja_5", lang: "ja", text: "日本語を話します。", pronunciation: "Nihongo o hanashimasu.", translation: "Parlo giapponese.", requires: ["rad_sole_ja", "soc_ja3", "rad_parola_ja", "g_ja_part_2", "v_ja_9"] }, // Nihon-go

    // --- ARABO ---
    { id: "s_ar_1", lang: "ar", text: "كَيْفَ حَالُكَ؟", pronunciation: "Kayfa ḥāluk?", translation: "Come stai? (m)", requires: ["g_ar_sulf_2"] },
    { id: "s_ar_2", lang: "ar", text: "أَنَا بِخَيْر، شُكْرًا。", pronunciation: "Ana bi-khayr, shukran.", translation: "Sto bene, grazie.", requires: ["g_ar_pron_1", "soc_ar8"] },
    { id: "s_ar_3", lang: "ar", text: "مَا اِسْمُكَ؟", pronunciation: "Mā ismuk?", translation: "Come ti chiami? (Qual è il tuo nome?)", requires: ["g_ar_int_1", "soc_ar7", "g_ar_suff_2"] },
    { id: "s_ar_4", lang: "ar", text: "أَيْنَ الكِتَاب؟", pronunciation: "Ayna al-kitāb?", translation: "Dov'è il libro?", requires: ["g_ar_int_3", "g_ar_part_1", "soc_ar2"] },
    { id: "s_ar_5", lang: "ar", text: "أُرِيدُ مَاءً。", pronunciation: "Urīdu mā'an.", translation: "Voglio dell'acqua.", requires: ["root_my"] } // Uridu (Volere) non ancora in DB, ma frase utile
];

// Esposizione globale per lo script.js
if (typeof window !== 'undefined') {
    window.database = database;
    window.sentenceBank = sentenceBank;
}

if (typeof module !== 'undefined') {
    module.exports = { database, sentenceBank };
}
