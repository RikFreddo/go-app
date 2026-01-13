const decks = {
    // ============================================================
    // 1. FONDAMENTALI (Con IPA aggiunta)
    // ============================================================
    "fondamentali_zh": {
        title: "Fondamentali (Cinese)", tags: ["fondamentali", "zh"],
        cards: [
            // RADICALI BASE
            { id: "rad_uomo", lang: "zh", level: 1, word: "人", pronunciation: "rén", ipa: "ɻən³⁵", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna", lang: "zh", level: 1, word: "女", pronunciation: "nǚ", ipa: "ny²¹⁴", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino", lang: "zh", level: 1, word: "子", pronunciation: "zǐ", ipa: "t͡sz̩²¹⁴", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca", lang: "zh", level: 1, word: "口", pronunciation: "kǒu", ipa: "kʰoʊ̯²¹⁴", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore", lang: "zh", level: 1, word: "心", pronunciation: "xīn", ipa: "ɕin⁵⁵", meaning: "Cuore", type: "base", pos: "noun" },
            { id: "rad_mano", lang: "zh", level: 1, word: "手", pronunciation: "shǒu", ipa: "ʂoʊ̯²¹⁴", meaning: "Mano", type: "base", pos: "noun" },
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", pronunciation: "mián", ipa: "mjɛn³⁵", meaning: "Tetto", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", pronunciation: "mén", ipa: "mən³⁵", meaning: "Porta", type: "base", pos: "place" },
            { id: "rad_forza", lang: "zh", level: 1, word: "力", pronunciation: "lì", ipa: "li⁵¹", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_parola", lang: "zh", level: 1, word: "言", pronunciation: "yán", ipa: "jɛn³⁵", meaning: "Parola", type: "base", pos: "noun" },
            
            // NUMERI
            { id: "num_zh1", lang: "zh", level: 1, word: "一", pronunciation: "yī", ipa: "i⁵⁵", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_zh2", lang: "zh", level: 1, word: "二", pronunciation: "èr", ipa: "ɑɻ⁵¹", meaning: "Due", type: "base", pos: "num" },
            { id: "num_zh3", lang: "zh", level: 1, word: "三", pronunciation: "sān", ipa: "san⁵⁵", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_zh4", lang: "zh", level: 1, word: "四", pronunciation: "sì", ipa: "sz̩⁵¹", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_zh5", lang: "zh", level: 1, word: "五", pronunciation: "wǔ", ipa: "u²¹⁴", meaning: "Cinque", type: "base", pos: "num" },
            { id: "num_zh6", lang: "zh", level: 1, word: "六", pronunciation: "liù", ipa: "ljoʊ̯⁵¹", meaning: "Sei", type: "base", pos: "num" },
            { id: "num_zh7", lang: "zh", level: 1, word: "七", pronunciation: "qī", ipa: "t͡ɕʰi⁵⁵", meaning: "Sette", type: "base", pos: "num" },
            { id: "num_zh8", lang: "zh", level: 1, word: "八", pronunciation: "bā", ipa: "pa⁵⁵", meaning: "Otto", type: "base", pos: "num" },
            { id: "num_zh9", lang: "zh", level: 1, word: "九", pronunciation: "jiǔ", ipa: "t͡ɕjoʊ̯²¹⁴", meaning: "Nove", type: "base", pos: "num" },
            { id: "num_zh10", lang: "zh", level: 1, word: "十", pronunciation: "shí", ipa: "ʂɻ̩³⁵", meaning: "Dieci", type: "base", pos: "num" },

            // COLORI
            { id: "col_zh1", lang: "zh", level: 1, word: "白", pronunciation: "bái", ipa: "paɪ̯³⁵", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_zh2", lang: "zh", level: 1, word: "黑", pronunciation: "hēi", ipa: "xeɪ̯⁵⁵", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_zh3", lang: "zh", level: 1, word: "红", pronunciation: "hóng", ipa: "xʊŋ³⁵", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_zh4", lang: "zh", level: 1, word: "蓝", pronunciation: "lán", ipa: "lan³⁵", meaning: "Blu", type: "base", pos: "adj" },

            // TEMPO & CONCETTI
            { id: "tm_zh1", lang: "zh", level: 1, word: "日", pronunciation: "rì", ipa: "ʐɻ̩⁵¹", meaning: "Giorno/Sole", type: "base", pos: "noun" },
            { id: "tm_zh2", lang: "zh", level: 1, word: "月", pronunciation: "yuè", ipa: "ɥœ⁵¹", meaning: "Mese/Luna", type: "base", pos: "noun" },
            { id: "tm_zh3", lang: "zh", level: 1, word: "年", pronunciation: "nián", ipa: "njɛn³⁵", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_zh4", lang: "zh", level: 2, word: "今天", pronunciation: "jīntiān", ipa: "t͡ɕin⁵⁵ tʰjɛn⁵⁵", meaning: "Oggi", type: "derivato", requires: ["zh12"], pos: "noun" },
            { id: "tm_zh5", lang: "zh", level: 2, word: "明天", pronunciation: "míngtiān", ipa: "mjŋ³⁵ tʰjɛn⁵⁵", meaning: "Domani", type: "derivato", requires: ["zh12", "tm_zh2"], pos: "noun" },
            { id: "base_grande", lang: "zh", level: 1, word: "大", pronunciation: "dà", ipa: "ta⁵¹", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo", lang: "zh", level: 1, word: "小", pronunciation: "xiǎo", ipa: "ɕjɑʊ̯²¹⁴", meaning: "Piccolo", type: "base", pos: "adj" },
            { id: "base_mezzo", lang: "zh", level: 1, word: "中", pronunciation: "zhōng", ipa: "t͡ʂʊŋ⁵⁵", meaning: "Centro/Mezzo", type: "base", pos: "adj" }
        ]
    },

    "fondamentali_ja": {
        title: "Fondamentali (Giapponese)", tags: ["fondamentali", "ja"],
        cards: [
            { id: "rad_uomo_ja", lang: "ja", level: 1, word: "人", pronunciation: "ひと", ipa: "çi̥to", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna_ja", lang: "ja", level: 1, word: "女", pronunciation: "おんな", ipa: "onːa", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino_ja", lang: "ja", level: 1, word: "子", pronunciation: "こ", ipa: "ko", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca_ja", lang: "ja", level: 1, word: "口", pronunciation: "くち", ipa: "kɯ̥t͡ɕi", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore_ja", lang: "ja", level: 1, word: "心", pronunciation: "こころ", ipa: "kokoɾo", meaning: "Cuore", type: "base", pos: "noun" },
            { id: "rad_mano_ja", lang: "ja", level: 1, word: "手", pronunciation: "て", ipa: "te", meaning: "Mano", type: "base", pos: "noun" },
            { id: "rad_forza_ja", lang: "ja", level: 1, word: "力", pronunciation: "ちから", ipa: "t͡ɕi̥kaɾa", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_parola_ja", lang: "ja", level: 1, word: "言", pronunciation: "げん", ipa: "ɡen", meaning: "Parola", type: "base", pos: "noun" },
            // NUMERI
            { id: "num_ja1", lang: "ja", level: 1, word: "一", pronunciation: "いち", ipa: "it͡ɕi", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_ja2", lang: "ja", level: 1, word: "二", pronunciation: "に", ipa: "ɲi", meaning: "Due", type: "base", pos: "num" },
            { id: "num_ja3", lang: "ja", level: 1, word: "三", pronunciation: "さん", ipa: "saɴ", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_ja4", lang: "ja", level: 1, word: "四", pronunciation: "よん", ipa: "joɴ", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_ja5", lang: "ja", level: 1, word: "五", pronunciation: "ご", ipa: "ɡo", meaning: "Cinque", type: "base", pos: "num" },
            { id: "num_ja6", lang: "ja", level: 1, word: "六", pronunciation: "ろく", ipa: "ɾokɯ", meaning: "Sei", type: "base", pos: "num" },
            { id: "num_ja7", lang: "ja", level: 1, word: "七", pronunciation: "なな", ipa: "nana", meaning: "Sette", type: "base", pos: "num" },
            { id: "num_ja8", lang: "ja", level: 1, word: "八", pronunciation: "はち", ipa: "hat͡ɕi", meaning: "Otto", type: "base", pos: "num" },
            { id: "num_ja9", lang: "ja", level: 1, word: "九", pronunciation: "きゅう", ipa: "kʲɯː", meaning: "Nove", type: "base", pos: "num" },
            { id: "num_ja10", lang: "ja", level: 1, word: "十", pronunciation: "じゅう", ipa: "d͡ʑɯː", meaning: "Dieci", type: "base", pos: "num" },
            // COLORI & TEMPO
            { id: "col_ja1", lang: "ja", level: 1, word: "白", pronunciation: "しろ", ipa: "ɕiɾo", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ja2", lang: "ja", level: 1, word: "黒", pronunciation: "くろ", ipa: "kɯɾo", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ja3", lang: "ja", level: 1, word: "赤", pronunciation: "あか", ipa: "aka", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ja4", lang: "ja", level: 1, word: "青", pronunciation: "あお", ipa: "ao", meaning: "Blu", type: "base", pos: "adj" },
            { id: "tm_ja1", lang: "ja", level: 1, word: "日", pronunciation: "ひ", ipa: "çi", meaning: "Giorno", type: "base", pos: "noun" },
            { id: "tm_ja2", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "t͡sɯki̥", meaning: "Mese/Luna", type: "base", pos: "noun" },
            { id: "tm_ja3", lang: "ja", level: 1, word: "年", pronunciation: "とし", ipa: "toɕi", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_ja4", lang: "ja", level: 2, word: "今日", pronunciation: "きょう", ipa: "kʲoː", meaning: "Oggi", type: "derivato", requires: ["tm_ja1"], pos: "noun" },
            { id: "tm_ja5", lang: "ja", level: 2, word: "明日", pronunciation: "あした", ipa: "aɕi̥ta", meaning: "Domani", type: "derivato", requires: ["tm_ja1", "tm_ja2"], pos: "noun" },
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "だい", ipa: "dai", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "しょう", ipa: "ɕoː", meaning: "Piccolo", type: "base", pos: "adj" }
        ]
    },

    "fondamentali_ar": {
        title: "Fondamentali (Arabo)", tags: ["fondamentali", "ar"],
        cards: [
            // Radici (IPA approssimativo per lo scheletro consonantico)
            { id: "root_ktb", lang: "ar", level: 1, word: "ك ت ب", pronunciation: "K-T-B", ipa: "k-t-b", meaning: "Radice: Scrivere", type: "base", pos: "root" },
            { id: "root_drs", lang: "ar", level: 1, word: "د ر س", pronunciation: "D-R-S", ipa: "d-r-s", meaning: "Radice: Studiare", type: "base", pos: "root" },
            { id: "root_skn", lang: "ar", level: 1, word: "س ك ن", pronunciation: "S-K-N", ipa: "s-k-n", meaning: "Radice: Abitare", type: "base", pos: "root" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ ك ل", pronunciation: "'-K-L", ipa: "ʔ-k-l", meaning: "Radice: Mangiare", type: "base", pos: "root" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش ر ب", pronunciation: "Sh-R-B", ipa: "ʃ-r-b", meaning: "Radice: Bere", type: "base", pos: "root" },
            { id: "root_fcl", lang: "ar", level: 1, word: "ف ع ل", pronunciation: "F-'-L", ipa: "f-ʕ-l", meaning: "Radice: Fare", type: "base", pos: "root" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك ب ر", pronunciation: "K-B-R", ipa: "k-b-r", meaning: "Radice: Grande", type: "base", pos: "root" },
            { id: "root_hbb", lang: "ar", level: 1, word: "ح ب ب", pronunciation: "H-B-B", ipa: "ħ-b-b", meaning: "Radice: Amore", type: "base", pos: "root" },
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", ipa: "ʔ-r-dˤ", meaning: "Radice: Terra", type: "base", pos: "root" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", ipa: "ʃ-m-s", meaning: "Radice: Sole", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", ipa: "q-m-r", meaning: "Radice: Luna", type: "base", pos: "root" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", ipa: "b-ħ-r", meaning: "Radice: Mare", type: "base", pos: "root" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", ipa: "dʒ-b-l", meaning: "Radice: Montagna", type: "base", pos: "root" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", ipa: "ʃ-dʒ-r", meaning: "Radice: Albero", type: "base", pos: "root" },
            { id: "root_sfr", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", ipa: "s-f-r", meaning: "Radice: Viaggio", type: "base", pos: "root" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", ipa: "tˤ-j-r", meaning: "Radice: Volare", type: "base", pos: "root" },
            
            // NUMERI
            { id: "num_ar1", lang: "ar", level: 1, word: "وَاحِد", pronunciation: "wāḥid", ipa: "waːħid", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_ar2", lang: "ar", level: 1, word: "اِثْنَان", pronunciation: "ithnān", ipa: "iθnaːn", meaning: "Due", type: "base", pos: "num" },
            { id: "num_ar3", lang: "ar", level: 1, word: "ثَلَاثَة", pronunciation: "thalātha", ipa: "θalaːθa", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_ar4", lang: "ar", level: 1, word: "أَرْبَعَة", pronunciation: "arba'a", ipa: "ʔarbaʕa", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_ar5", lang: "ar", level: 1, word: "خَمْسَة", pronunciation: "khamsa", ipa: "xamsa", meaning: "Cinque", type: "base", pos: "num" },

            // COLORI & TEMPO
            { id: "col_ar1", lang: "ar", level: 1, word: "أَبْيَض", pronunciation: "abyaḍ", ipa: "ʔabjadˤ", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ar2", lang: "ar", level: 1, word: "أَسْوَد", pronunciation: "aswad", ipa: "ʔaswad", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ar3", lang: "ar", level: 1, word: "أَحْمَر", pronunciation: "aḥmar", ipa: "ʔaħmar", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ar4", lang: "ar", level: 1, word: "أَزْرَق", pronunciation: "azraq", ipa: "ʔazraq", meaning: "Blu", type: "base", pos: "adj" },
            { id: "tm_ar1", lang: "ar", level: 1, word: "يَوْم", pronunciation: "yawm", ipa: "jawm", meaning: "Giorno", type: "base", pos: "noun" },
            { id: "tm_ar2", lang: "ar", level: 1, word: "شَهْر", pronunciation: "shahr", ipa: "ʃahr", meaning: "Mese", type: "base", pos: "noun" },
            { id: "tm_ar3", lang: "ar", level: 1, word: "سَنَة", pronunciation: "sana", ipa: "sana", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_ar4", lang: "ar", level: 2, word: "الْيَوْم", pronunciation: "al-yawm", ipa: "al-jawm", meaning: "Oggi", type: "derivato", requires: ["tm_ar1"], pos: "noun" },
            { id: "base_ma", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", ipa: "maːʔ", meaning: "Acqua", type: "base", pos: "noun" }
        ]
    },

    // ==========================================
    // 2. SOCIETA' & CASA
    // ==========================================
    "societa_zh": {
        title: "Società & Casa (Cinese)", tags: ["societa", "zh"],
        cards: [
            { id: "fam_zh1", lang: "zh", level: 2, word: "爸爸", pronunciation: "bàba", ipa: "pa⁵¹ ba", meaning: "Papà", type: "base", requires: ["rad_uomo"], pos: "noun" },
            { id: "fam_zh2", lang: "zh", level: 2, word: "妈妈", pronunciation: "māma", ipa: "ma⁵⁵ ma", meaning: "Mamma", type: "base", requires: ["rad_donna"], pos: "noun" },
            { id: "fam_zh3", lang: "zh", level: 2, word: "哥哥", pronunciation: "gēge", ipa: "kɤ⁵⁵ kɤ", meaning: "Fratello magg.", type: "base", pos: "noun" },
            { id: "fam_zh4", lang: "zh", level: 2, word: "姐姐", pronunciation: "jiějie", ipa: "t͡ɕjɛ²¹⁴ t͡ɕjɛ", meaning: "Sorella magg.", type: "base", requires: ["rad_donna"], pos: "noun" },
            { id: "soc_zh1", lang: "zh", level: 2, word: "家", pronunciation: "jiā", ipa: "t͡ɕja⁵⁵", meaning: "Casa/Famiglia", type: "derivato", requires: ["rad_tetto"], pos: "place" }, 
            { id: "soc_zh2", lang: "zh", level: 2, word: "学校", pronunciation: "xuéxiào", ipa: "ɕɥɛ³⁵ ɕjɑʊ̯⁵¹", meaning: "Scuola", type: "derivato", requires: ["rad_bambino", "zh1"], pos: "place" },
            { id: "soc_zh3", lang: "zh", level: 3, word: "学生", pronunciation: "xuésheng", ipa: "ɕɥɛ³⁵ ʂəŋ", meaning: "Studente", type: "derivato", requires: ["soc_zh2", "rad_uomo"], pos: "noun" },
            { id: "soc_zh4", lang: "zh", level: 2, word: "书", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "Libro", type: "base", pos: "noun" },
            { id: "soc_zh5", lang: "zh", level: 2, word: "朋友", pronunciation: "péngyǒu", ipa: "pʰəŋ³⁵ joʊ̯", meaning: "Amico", type: "derivato", requires: ["rad_uomo"], pos: "noun" },
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "t͡ɕʰjɛn³⁵", meaning: "Soldi", type: "base", pos: "noun" }
        ]
    },
    "societa_ja": {
        title: "Società & Casa (Giapponese)", tags: ["societa", "ja"],
        cards: [
            { id: "fam_ja1", lang: "ja", level: 2, word: "父", pronunciation: "ちち", ipa: "t͡ɕi̥t͡ɕi", meaning: "Padre", type: "base", pos: "noun" },
            { id: "fam_ja2", lang: "ja", level: 2, word: "母", pronunciation: "はは", ipa: "haha", meaning: "Madre", type: "base", requires: ["rad_donna_ja"], pos: "noun" },
            { id: "fam_ja3", lang: "ja", level: 2, word: "家族", pronunciation: "かぞく", ipa: "kazokɯ", meaning: "Famiglia", type: "derivato", requires: ["soc_ja1"], pos: "noun" },
            { id: "soc_ja1", lang: "ja", level: 2, word: "家", pronunciation: "いえ", ipa: "ie", meaning: "Casa", type: "base", requires: ["rad_tetto_ja"], pos: "place" }, 
            { id: "soc_ja2", lang: "ja", level: 2, word: "学校", pronunciation: "がっこう", ipa: "ɡakːoː", meaning: "Scuola", type: "derivato", requires: ["rad_bambino_ja", "rad_albero_ja"], pos: "place" }, 
            { id: "soc_ja3", lang: "ja", level: 2, word: "本", pronunciation: "ほん", ipa: "hoɴ", meaning: "Libro", type: "derivato", requires: ["rad_albero_ja"], pos: "noun" },
            { id: "soc_ja4", lang: "ja", level: 2, word: "友", pronunciation: "とも", ipa: "tomo", meaning: "Amico", type: "base", pos: "noun" },
            { id: "soc_ja5", lang: "ja", level: 2, word: "先生", pronunciation: "せんせい", ipa: "seɴseː", meaning: "Maestro", type: "derivato", requires: ["rad_uomo_ja"], pos: "noun" }
        ]
    },
    "societa_ar": {
        title: "Società & Casa (Arabo)", tags: ["societa", "ar"],
        cards: [
            { id: "fam_ar1", lang: "ar", level: 2, word: "أَب", pronunciation: "ab", ipa: "ʔab", meaning: "Padre", type: "base", pos: "noun" },
            { id: "fam_ar2", lang: "ar", level: 2, word: "أُمّ", pronunciation: "umm", ipa: "ʔumm", meaning: "Madre", type: "base", pos: "noun" },
            { id: "fam_ar3", lang: "ar", level: 2, word: "أَخ", pronunciation: "akh", ipa: "ʔax", meaning: "Fratello", type: "base", pos: "noun" },
            { id: "fam_ar4", lang: "ar", level: 2, word: "أُخْت", pronunciation: "ukht", ipa: "ʔuxt", meaning: "Sorella", type: "base", pos: "noun" },
            { id: "soc_ar1", lang: "ar", level: 2, word: "بَيْت", pronunciation: "bayt", ipa: "bajt", meaning: "Casa", type: "base", pos: "place" },
            { id: "soc_ar2", lang: "ar", level: 2, word: "كِتَاب", pronunciation: "kitāb", ipa: "kitaːb", meaning: "Libro", type: "derivato", requires: ["root_ktb"], pos: "noun" },
            { id: "soc_ar3", lang: "ar", level: 2, word: "مَكْتَب", pronunciation: "maktab", ipa: "maktab", meaning: "Ufficio", type: "derivato", requires: ["root_ktb"], pos: "place" },
            { id: "soc_ar4", lang: "ar", level: 2, word: "مَدْرَسَة", pronunciation: "madrasa", ipa: "madrasa", meaning: "Scuola", type: "derivato", requires: ["root_drs"], pos: "place" },
            { id: "soc_ar5", lang: "ar", level: 2, word: "دَرْس", pronunciation: "dars", ipa: "dars", meaning: "Lezione", type: "derivato", requires: ["root_drs"], pos: "noun" },
            { id: "soc_ar6", lang: "ar", level: 2, word: "سَكَن", pronunciation: "sakan", ipa: "sakan", meaning: "Alloggio", type: "derivato", requires: ["root_skn"], pos: "place" }
        ]
    },

    // ==========================================
    // 3. NATURA
    // ==========================================
    "natura_zh": {
        title: "Natura (Cinese)", tags: ["natura", "zh"],
        cards: [
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", ipa: "ʂan⁵⁵", meaning: "Montagna", type: "base", pos: "place" },
            { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", ipa: "tʰjɛn⁵⁵", meaning: "Cielo", type: "base", pos: "place" },
            { id: "zh13", lang: "zh", level: 2, word: "林", pronunciation: "lín", ipa: "lin³⁵", meaning: "Bosco", type: "derivato", requires: ["rad_albero"], pos: "place" },
            { id: "zh14", lang: "zh", level: 2, word: "森", pronunciation: "sēn", ipa: "sən⁵⁵", meaning: "Foresta", type: "derivato", requires: ["rad_albero"], pos: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", ipa: "xɤ³⁵", meaning: "Fiume", type: "derivato", requires: ["rad_acqua"], pos: "place" },
            { id: "zh16", lang: "zh", level: 2, word: "海", pronunciation: "hǎi", ipa: "xaɪ̯²¹⁴", meaning: "Mare", type: "derivato", requires: ["rad_acqua"], pos: "place" },
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", ipa: "xwɔ²¹⁴ ʂan⁵⁵", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco", "zh7"], pos: "place" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa⁵⁵", meaning: "Fiore", type: "derivato", requires: ["rad_albero"], pos: "noun" },
            { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", ipa: "ɕɥɛ²¹⁴", meaning: "Neve", type: "derivato", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh30", lang: "zh", level: 3, word: "电", pronunciation: "diàn", ipa: "tjɛn⁵¹", meaning: "Elettricità", type: "base", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh31", lang: "zh", level: 3, word: "雷", pronunciation: "léi", ipa: "leɪ̯³⁵", meaning: "Tuono", type: "derivato", requires: ["rad_pioggia", "rad_campo"], pos: "noun" },
            { id: "zh34", lang: "zh", level: 3, word: "春", pronunciation: "chūn", ipa: "t͡ʂʰwən⁵⁵", meaning: "Primavera", type: "base", requires: ["rad_sole"], pos: "noun" },
            { id: "zh35", lang: "zh", level: 3, word: "夏", pronunciation: "xià", ipa: "ɕja⁵¹", meaning: "Estate", type: "base", requires: ["rad_sole"], pos: "noun" },
            { id: "zh36", lang: "zh", level: 3, word: "秋", pronunciation: "qiū", ipa: "t͡ɕjoʊ̯⁵⁵", meaning: "Autunno", type: "base", requires: ["rad_fuoco"], pos: "noun" },
            { id: "zh37", lang: "zh", level: 3, word: "冬", pronunciation: "dōng", ipa: "tʊŋ⁵⁵", meaning: "Inverno", type: "base", requires: ["zh22"], pos: "noun" }
        ]
    },
    "natura_ja": {
        title: "Natura (Giapponese)", tags: ["natura", "ja"],
        cards: [
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", ipa: "kawa", meaning: "Fiume", type: "base", pos: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", ipa: "jama", meaning: "Montagna", type: "base", pos: "place" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", ipa: "moɾi", meaning: "Foresta", type: "base", requires: ["rad_albero_ja"], pos: "place" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", ipa: "kazaɴ", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco_ja", "ja2"], pos: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", ipa: "hana", meaning: "Fiore", type: "base", pos: "noun" },
            { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", ipa: "kɯmo", meaning: "Nuvola", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" },
            { id: "ja35", lang: "ja", level: 3, word: "春", pronunciation: "はる", ipa: "haɾɯ", meaning: "Primavera", type: "base", requires: ["rad_sole_ja"], pos: "noun" },
            { id: "ja36", lang: "ja", level: 3, word: "夏", pronunciation: "なつ", ipa: "nat͡sɯ", meaning: "Estate", type: "base", requires: ["rad_sole_ja"], pos: "noun" },
            { id: "ja37", lang: "ja", level: 3, word: "秋", pronunciation: "あき", ipa: "aki", meaning: "Autunno", type: "base", requires: ["rad_albero_ja"], pos: "noun" },
            { id: "ja38", lang: "ja", level: 3, word: "冬", pronunciation: "ふゆ", ipa: "ɸɯjɯ", meaning: "Inverno", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" }
        ]
    },
    "natura_ar": {
        title: "Natura (Arabo)", tags: ["natura", "ar"],
        cards: [
            { id: "ar12", lang: "ar", level: 2, word: "أَرْض", pronunciation: "arḍ", ipa: "ʔardˤ", meaning: "Terra/Suolo", type: "derivato", requires: ["root_ard"], pos: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", ipa: "ʃams", meaning: "Sole", type: "derivato", requires: ["root_shms"], pos: "noun" },
            { id: "ar15", lang: "ar", level: 2, word: "قَمَر", pronunciation: "qamar", ipa: "qamar", meaning: "Luna", type: "derivato", requires: ["root_qmr"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر", pronunciation: "baḥr", ipa: "baħr", meaning: "Mare", type: "derivato", requires: ["root_bhr"], pos: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "jabal", ipa: "dʒabal", meaning: "Montagna", type: "derivato", requires: ["root_jbl"], pos: "place" },
            { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "shajara", ipa: "ʃadʒara", meaning: "Albero", type: "derivato", requires: ["root_shjr"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "ghāba", ipa: "ɣaːba", meaning: "Foresta", type: "derivato", requires: ["ar23"], pos: "place" }
        ]
    },

    // ==========================================
    // 4. VIAGGIO & CIBO & GRAMMATICA
    // ==========================================
    "viaggio_zh": {
        title: "Viaggio (Cinese)", tags: ["viaggio", "zh"],
        cards: [
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "t͡ɕʰy⁵¹", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", ipa: "t͡ɕi⁵⁵", meaning: "Macchina", type: "base", requires: ["rad_albero"], pos: "noun" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", ipa: "feɪ̯⁵⁵ t͡ɕi⁵⁵", meaning: "Aereo", type: "base", pos: "noun" },
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", ipa: "xwɔ²¹⁴ t͡ʂʰɤ⁵⁵", meaning: "Treno", type: "derivato", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" },
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", ipa: "t͡ʂʰɤ⁵⁵ t͡ʂan⁵¹", meaning: "Stazione", type: "derivato", requires: ["rad_veicolo"], pos: "place" },
            { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", ipa: "mən³⁵ kʰoʊ̯²¹⁴", meaning: "Ingresso", type: "derivato", requires: ["rad_porta", "rad_bocca"], pos: "place" }
        ]
    },
    "viaggio_ja": {
        title: "Viaggio (Giapponese)", tags: ["viaggio", "ja"],
        cards: [
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", ipa: "ikɯ", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", ipa: "eki", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", ipa: "deɴɕa", meaning: "Treno", type: "derivato", requires: ["rad_veicolo_ja"], pos: "noun" },
            { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", ipa: "iɾiɡɯt͡ɕi", meaning: "Entrata", type: "base", requires: ["rad_bocca_ja"], pos: "place" }
        ]
    },
    "viaggio_ar": {
        title: "Viaggio (Arabo)", tags: ["viaggio", "ar"],
        cards: [
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", ipa: "safar", meaning: "Viaggio", type: "derivato", requires: ["root_sfr"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", ipa: "matˤaːr", meaning: "Aeroporto", type: "derivato", requires: ["root_tyr"], pos: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", ipa: "tˤaːʔira", meaning: "Aereo", type: "derivato", requires: ["root_tyr"], pos: "noun" }
        ]
    },
    "cibo_zh": {
        title: "Cibo (Cinese)", tags: ["cibo", "zh"],
        cards: [
            { id: "c_zh1", lang: "zh", level: 1, word: "饭", pronunciation: "fàn", ipa: "fan⁵¹", meaning: "Riso", type: "base", pos: "food" },
            { id: "c_zh2", lang: "zh", level: 1, word: "茶", pronunciation: "chá", ipa: "t͡ʂʰa³⁵", meaning: "Tè", type: "base", pos: "drink" },
            { id: "c_zh4", lang: "zh", level: 1, word: "苹果", pronunciation: "píngguǒ", ipa: "pʰiŋ³⁵ kwɔ²¹⁴", meaning: "Mela", type: "base", pos: "food" }
        ]
    },
    "cibo_ar": {
        title: "Cibo (Arabo)", tags: ["cibo", "ar"],
        cards: [
            { id: "c_ar1", lang: "ar", level: 1, word: "خُبْز", pronunciation: "khubz", ipa: "xubz", meaning: "Pane", type: "base", pos: "food" },
            { id: "c_ar2", lang: "ar", level: 1, word: "شَاي", pronunciation: "shāy", ipa: "ʃaːj", meaning: "Tè", type: "base", pos: "drink" },
            { id: "c_ar4", lang: "ar", level: 1, word: "تُفَّاح", pronunciation: "tuffāḥ", ipa: "tuffaːħ", meaning: "Mela", type: "base", pos: "food" }
        ]
    },
    "cibo_ja": {
        title: "Cibo (Giapponese)", tags: ["cibo", "ja"],
        cards: [
            { id: "c_ja1", lang: "ja", level: 1, word: "ご飯", pronunciation: "ごはん", ipa: "ɡohaɴ", meaning: "Riso", type: "base", pos: "food" },
            { id: "c_ja2", lang: "ja", level: 1, word: "お茶", pronunciation: "おちゃ", ipa: "ot͡ɕa", meaning: "Tè", type: "base", pos: "drink" },
            { id: "c_ja4", lang: "ja", level: 1, word: "りんご", pronunciation: "りんご", ipa: "ɾiŋɡo", meaning: "Mela", type: "base", pos: "food" }
        ]
    },
    "grammatica_zh": {
        title: "Grammatica (Cinese)", tags: ["grammatica", "zh"],
        cards: [
            { id: "g_zh1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", ipa: "wɔ²¹⁴", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_zh2", lang: "zh", level: 2, word: "你", pronunciation: "nǐ", ipa: "ni²¹⁴", meaning: "Tu", type: "derivato", requires: ["rad_uomo"], pos: "pronoun" },
            { id: "g_zh6", lang: "zh", level: 1, word: "吃", pronunciation: "chī", ipa: "t͡ʂʰɻ̩⁵⁵", meaning: "Mangiare", type: "derivato", requires: ["rad_bocca"], pos: "verb_eat" }
        ]
    },
    "grammatica_ar": {
        title: "Grammatica (Arabo)", tags: ["grammatica", "ar"],
        cards: [
            { id: "g_ar1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", ipa: "ʔana", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ar7", lang: "ar", level: 1, word: "يَأْكُلُ", pronunciation: "ya'kulu", ipa: "jaʔkulu", meaning: "Mangia", type: "derivato", requires: ["root_akl"], pos: "verb_eat" }
        ]
    },
    "grammatica_ja": {
        title: "Grammatica (Giapponese)", tags: ["grammatica", "ja"],
        cards: [
            { id: "g_ja1", lang: "ja", level: 1, word: "私", pronunciation: "わたし", ipa: "wataɕi", meaning: "Io", type: "base", pos: "pronoun" },
            { id: "g_ja4", lang: "ja", level: 1, word: "食べる", pronunciation: "たべる", ipa: "tabeɾɯ", meaning: "Mangiare", type: "base", pos: "verb_eat" }
        ]
    }
};

const sentenceBank = [
    { id: "s_zh1", lang: "zh", text: "我吃苹果", pronunciation: "Wǒ chī píngguǒ", translation: "Io mangio la mela", requires: ["g_zh1", "g_zh6", "c_zh4"] },
    { id: "s_zh2", lang: "zh", text: "你是我的朋友", pronunciation: "Nǐ shì wǒ de péngyǒu", translation: "Tu sei mio amico", requires: ["g_zh2", "soc_zh5"] },
    { id: "s_zh3", lang: "zh", text: "我有三个哥哥", pronunciation: "Wǒ yǒu sān gè gēge", translation: "Ho tre fratelli maggiori", requires: ["g_zh1", "num_zh3", "fam_zh3"] },
    { id: "s_zh4", lang: "zh", text: "明天去学校", pronunciation: "Míngtiān qù xuéxiào", translation: "Domani vado a scuola", requires: ["tm_zh5", "g_zh7", "soc_zh2"] },
    { id: "s_ja1", lang: "ja", text: "私はりんごを食べます", pronunciation: "Watashi wa ringo o tabemasu", translation: "Io mangio la mela", requires: ["g_ja1", "c_ja4", "g_ja4"] },
    { id: "s_ja2", lang: "ja", text: "母は家にいます", pronunciation: "Haha wa ie ni imasu", translation: "La mamma è a casa", requires: ["fam_ja2", "soc_ja1"] },
    { id: "s_ja3", lang: "ja", text: "二つの本", pronunciation: "Futatsu no hon", translation: "Due libri", requires: ["num_ja2", "soc_ja3"] },
    { id: "s_ar1", lang: "ar", text: "أَنَا آكُلُ تُفَّاح", pronunciation: "Ana ākulu tuffāḥ", translation: "Io mangio la mela", requires: ["g_ar1", "g_ar7", "c_ar4"] },
    { id: "s_ar2", lang: "ar", text: "هُوَ فِي الْبَيْت", pronunciation: "Huwa fī al-bayt", translation: "Lui è in casa", requires: ["g_ar2", "soc_ar1"] },
    { id: "s_ar3", lang: "ar", text: "عِنْدِي كِتَاب وَاحِد", pronunciation: "'Indī kitāb wāḥid", translation: "Ho un libro", requires: ["soc_ar2", "num_ar1"] }
];
