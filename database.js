const decks = {
    // ============================================================
    // 1. FONDAMENTALI (LIVELLO 0 - Radici, Numeri, Colori, Tempo)
    // ============================================================
    
    "fondamentali_zh": {
        title: "Fondamentali (Cinese)", tags: ["fondamentali", "zh"],
        cards: [
            // RADICALI BASE
            { id: "rad_uomo", lang: "zh", level: 1, word: "人", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna", lang: "zh", level: 1, word: "女", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino", lang: "zh", level: 1, word: "子", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca", lang: "zh", level: 1, word: "口", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore", lang: "zh", level: 1, word: "心", meaning: "Cuore", type: "base", pos: "noun" },
            { id: "rad_mano", lang: "zh", level: 1, word: "手", meaning: "Mano", type: "base", pos: "noun" },
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", meaning: "Tetto", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", meaning: "Porta", type: "base", pos: "place" },
            { id: "rad_forza", lang: "zh", level: 1, word: "力", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_parola", lang: "zh", level: 1, word: "言", meaning: "Parola", type: "base", pos: "noun" },
            
            // NUMERI (Base assoluta)
            { id: "num_zh1", lang: "zh", level: 1, word: "一", pronunciation: "yī", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_zh2", lang: "zh", level: 1, word: "二", pronunciation: "èr", meaning: "Due", type: "base", pos: "num" },
            { id: "num_zh3", lang: "zh", level: 1, word: "三", pronunciation: "sān", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_zh4", lang: "zh", level: 1, word: "四", pronunciation: "sì", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_zh5", lang: "zh", level: 1, word: "五", pronunciation: "wǔ", meaning: "Cinque", type: "base", pos: "num" },
            { id: "num_zh6", lang: "zh", level: 1, word: "六", pronunciation: "liù", meaning: "Sei", type: "base", pos: "num" },
            { id: "num_zh7", lang: "zh", level: 1, word: "七", pronunciation: "qī", meaning: "Sette", type: "base", pos: "num" },
            { id: "num_zh8", lang: "zh", level: 1, word: "八", pronunciation: "bā", meaning: "Otto", type: "base", pos: "num" },
            { id: "num_zh9", lang: "zh", level: 1, word: "九", pronunciation: "jiǔ", meaning: "Nove", type: "base", pos: "num" },
            { id: "num_zh10", lang: "zh", level: 1, word: "十", pronunciation: "shí", meaning: "Dieci", type: "base", pos: "num" },

            // COLORI
            { id: "col_zh1", lang: "zh", level: 1, word: "白", pronunciation: "bái", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_zh2", lang: "zh", level: 1, word: "黑", pronunciation: "hēi", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_zh3", lang: "zh", level: 1, word: "红", pronunciation: "hóng", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_zh4", lang: "zh", level: 1, word: "蓝", pronunciation: "lán", meaning: "Blu", type: "base", pos: "adj" },

            // TEMPO
            { id: "tm_zh1", lang: "zh", level: 1, word: "日", pronunciation: "rì", meaning: "Giorno/Sole", type: "base", pos: "noun" },
            { id: "tm_zh2", lang: "zh", level: 1, word: "月", pronunciation: "yuè", meaning: "Mese/Luna", type: "base", pos: "noun" },
            { id: "tm_zh3", lang: "zh", level: 1, word: "年", pronunciation: "nián", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_zh4", lang: "zh", level: 2, word: "今天", pronunciation: "jīntiān", meaning: "Oggi", type: "derivato", requires: ["zh12"], pos: "noun" },
            { id: "tm_zh5", lang: "zh", level: 2, word: "明天", pronunciation: "míngtiān", meaning: "Domani", type: "derivato", requires: ["zh12", "tm_zh2"], pos: "noun" } // Ming ha luna e sole
        ]
    },

    "fondamentali_ja": {
        title: "Fondamentali (Giapponese)", tags: ["fondamentali", "ja"],
        cards: [
            // RADICALI
            { id: "rad_uomo_ja", lang: "ja", level: 1, word: "人", pronunciation: "ひと", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna_ja", lang: "ja", level: 1, word: "女", pronunciation: "おんな", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino_ja", lang: "ja", level: 1, word: "子", pronunciation: "こ", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca_ja", lang: "ja", level: 1, word: "口", pronunciation: "くち", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore_ja", lang: "ja", level: 1, word: "心", pronunciation: "こころ", meaning: "Cuore", type: "base", pos: "noun" },
            { id: "rad_mano_ja", lang: "ja", level: 1, word: "手", pronunciation: "て", meaning: "Mano", type: "base", pos: "noun" },
            { id: "rad_forza_ja", lang: "ja", level: 1, word: "力", pronunciation: "ちから", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_parola_ja", lang: "ja", level: 1, word: "言", pronunciation: "げん", meaning: "Parola", type: "base", pos: "noun" },

            // NUMERI
            { id: "num_ja1", lang: "ja", level: 1, word: "一", pronunciation: "いち", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_ja2", lang: "ja", level: 1, word: "二", pronunciation: "に", meaning: "Due", type: "base", pos: "num" },
            { id: "num_ja3", lang: "ja", level: 1, word: "三", pronunciation: "さん", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_ja4", lang: "ja", level: 1, word: "四", pronunciation: "よん", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_ja5", lang: "ja", level: 1, word: "五", pronunciation: "ご", meaning: "Cinque", type: "base", pos: "num" },
            { id: "num_ja6", lang: "ja", level: 1, word: "六", pronunciation: "ろく", meaning: "Sei", type: "base", pos: "num" },
            { id: "num_ja7", lang: "ja", level: 1, word: "七", pronunciation: "なな", meaning: "Sette", type: "base", pos: "num" },
            { id: "num_ja8", lang: "ja", level: 1, word: "八", pronunciation: "はち", meaning: "Otto", type: "base", pos: "num" },
            { id: "num_ja9", lang: "ja", level: 1, word: "九", pronunciation: "きゅう", meaning: "Nove", type: "base", pos: "num" },
            { id: "num_ja10", lang: "ja", level: 1, word: "十", pronunciation: "じゅう", meaning: "Dieci", type: "base", pos: "num" },

            // COLORI
            { id: "col_ja1", lang: "ja", level: 1, word: "白", pronunciation: "しろ", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ja2", lang: "ja", level: 1, word: "黒", pronunciation: "くろ", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ja3", lang: "ja", level: 1, word: "赤", pronunciation: "あか", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ja4", lang: "ja", level: 1, word: "青", pronunciation: "あお", meaning: "Blu", type: "base", pos: "adj" },

            // TEMPO
            { id: "tm_ja1", lang: "ja", level: 1, word: "日", pronunciation: "ひ", meaning: "Giorno", type: "base", pos: "noun" },
            { id: "tm_ja2", lang: "ja", level: 1, word: "月", pronunciation: "つき", meaning: "Mese/Luna", type: "base", pos: "noun" },
            { id: "tm_ja3", lang: "ja", level: 1, word: "年", pronunciation: "とし", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_ja4", lang: "ja", level: 2, word: "今日", pronunciation: "きょう", meaning: "Oggi", type: "derivato", requires: ["tm_ja1"], pos: "noun" },
            { id: "tm_ja5", lang: "ja", level: 2, word: "明日", pronunciation: "あした", meaning: "Domani", type: "derivato", requires: ["tm_ja1", "tm_ja2"], pos: "noun" }
        ]
    },

    "fondamentali_ar": {
        title: "Fondamentali (Arabo)", tags: ["fondamentali", "ar"],
        cards: [
            // RADICI
            { id: "root_ktb", lang: "ar", level: 1, word: "ك ت ب", pronunciation: "K-T-B", meaning: "Radice: Scrivere", type: "base", pos: "root" },
            { id: "root_drs", lang: "ar", level: 1, word: "د ر س", pronunciation: "D-R-S", meaning: "Radice: Studiare", type: "base", pos: "root" },
            { id: "root_skn", lang: "ar", level: 1, word: "س ك ن", pronunciation: "S-K-N", meaning: "Radice: Abitare", type: "base", pos: "root" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ ك ل", pronunciation: "'-K-L", meaning: "Radice: Mangiare", type: "base", pos: "root" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش ر ب", pronunciation: "Sh-R-B", meaning: "Radice: Bere", type: "base", pos: "root" },
            { id: "root_fcl", lang: "ar", level: 1, word: "ف ع ل", pronunciation: "F-'-L", meaning: "Radice: Fare", type: "base", pos: "root" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك ب ر", pronunciation: "K-B-R", meaning: "Radice: Grande", type: "base", pos: "root" },
            { id: "root_hbb", lang: "ar", level: 1, word: "ح ب ب", pronunciation: "H-B-B", meaning: "Radice: Amore", type: "base", pos: "root" },
            // Radici Natura/Viaggio spostate qui
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", meaning: "Radice: Terra", type: "base", pos: "root" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", meaning: "Radice: Sole", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", meaning: "Radice: Luna", type: "base", pos: "root" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", meaning: "Radice: Mare", type: "base", pos: "root" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", meaning: "Radice: Montagna", type: "base", pos: "root" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", meaning: "Radice: Albero", type: "base", pos: "root" },
            { id: "root_sfr", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", meaning: "Radice: Viaggio", type: "base", pos: "root" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", meaning: "Radice: Volare", type: "base", pos: "root" },

            // NUMERI
            { id: "num_ar1", lang: "ar", level: 1, word: "وَاحِد", pronunciation: "wāḥid", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_ar2", lang: "ar", level: 1, word: "اِثْنَان", pronunciation: "ithnān", meaning: "Due", type: "base", pos: "num" },
            { id: "num_ar3", lang: "ar", level: 1, word: "ثَلَاثَة", pronunciation: "thalātha", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_ar4", lang: "ar", level: 1, word: "أَرْبَعَة", pronunciation: "arba'a", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_ar5", lang: "ar", level: 1, word: "خَمْسَة", pronunciation: "khamsa", meaning: "Cinque", type: "base", pos: "num" },

            // COLORI
            { id: "col_ar1", lang: "ar", level: 1, word: "أَبْيَض", pronunciation: "abyaḍ", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ar2", lang: "ar", level: 1, word: "أَسْوَد", pronunciation: "aswad", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ar3", lang: "ar", level: 1, word: "أَحْمَر", pronunciation: "aḥmar", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ar4", lang: "ar", level: 1, word: "أَزْرَق", pronunciation: "azraq", meaning: "Blu", type: "base", pos: "adj" },

            // TEMPO
            { id: "tm_ar1", lang: "ar", level: 1, word: "يَوْم", pronunciation: "yawm", meaning: "Giorno", type: "base", pos: "noun" },
            { id: "tm_ar2", lang: "ar", level: 1, word: "شَهْر", pronunciation: "shahr", meaning: "Mese", type: "base", pos: "noun" },
            { id: "tm_ar3", lang: "ar", level: 1, word: "سَنَة", pronunciation: "sana", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_ar4", lang: "ar", level: 2, word: "الْيَوْم", pronunciation: "al-yawm", meaning: "Oggi", type: "derivato", requires: ["tm_ar1"], pos: "noun" }
        ]
    },

    // ==========================================
    // 2. SOCIETA' & CASA (Espanso)
    // ==========================================
    "societa_zh": {
        title: "Società & Casa (Cinese)", tags: ["societa", "zh"],
        cards: [
            // FAMIGLIA (Nuovo!)
            { id: "fam_zh1", lang: "zh", level: 2, word: "爸爸", pronunciation: "bàba", meaning: "Papà", type: "base", requires: ["rad_uomo"], pos: "noun" },
            { id: "fam_zh2", lang: "zh", level: 2, word: "妈妈", pronunciation: "māma", meaning: "Mamma", type: "base", requires: ["rad_donna"], pos: "noun" },
            { id: "fam_zh3", lang: "zh", level: 2, word: "哥哥", pronunciation: "gēge", meaning: "Fratello magg.", type: "base", pos: "noun" },
            { id: "fam_zh4", lang: "zh", level: 2, word: "姐姐", pronunciation: "jiějie", meaning: "Sorella magg.", type: "base", requires: ["rad_donna"], pos: "noun" },
            
            // LUOGHI
            { id: "soc_zh1", lang: "zh", level: 2, word: "家", pronunciation: "jiā", meaning: "Casa/Famiglia", type: "derivato", requires: ["rad_tetto"], pos: "place" }, 
            { id: "soc_zh2", lang: "zh", level: 2, word: "学校", pronunciation: "xuéxiào", meaning: "Scuola", type: "derivato", requires: ["rad_bambino", "zh1"], pos: "place" },
            { id: "soc_zh3", lang: "zh", level: 3, word: "学生", pronunciation: "xuésheng", meaning: "Studente", type: "derivato", requires: ["soc_zh2", "rad_uomo"], pos: "noun" },
            { id: "soc_zh4", lang: "zh", level: 2, word: "书", pronunciation: "shū", meaning: "Libro", type: "base", pos: "noun" },
            { id: "soc_zh5", lang: "zh", level: 2, word: "朋友", pronunciation: "péngyǒu", meaning: "Amico", type: "derivato", requires: ["rad_uomo"], pos: "noun" },
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", meaning: "Soldi", type: "base", pos: "noun" }
        ]
    },
    
    "societa_ja": {
        title: "Società & Casa (Giapponese)", tags: ["societa", "ja"],
        cards: [
            // FAMIGLIA
            { id: "fam_ja1", lang: "ja", level: 2, word: "父", pronunciation: "ちち", meaning: "Padre", type: "base", pos: "noun" },
            { id: "fam_ja2", lang: "ja", level: 2, word: "母", pronunciation: "はは", meaning: "Madre", type: "base", requires: ["rad_donna_ja"], pos: "noun" },
            { id: "fam_ja3", lang: "ja", level: 2, word: "家族", pronunciation: "かぞく", meaning: "Famiglia", type: "derivato", requires: ["soc_ja1"], pos: "noun" },

            // LUOGHI
            { id: "soc_ja1", lang: "ja", level: 2, word: "家", pronunciation: "いえ", meaning: "Casa", type: "base", requires: ["rad_tetto_ja"], pos: "place" }, 
            { id: "soc_ja2", lang: "ja", level: 2, word: "学校", pronunciation: "がっこう", meaning: "Scuola", type: "derivato", requires: ["rad_bambino_ja", "rad_albero_ja"], pos: "place" }, 
            { id: "soc_ja3", lang: "ja", level: 2, word: "本", pronunciation: "ほん", meaning: "Libro", type: "derivato", requires: ["rad_albero_ja"], pos: "noun" },
            { id: "soc_ja4", lang: "ja", level: 2, word: "友", pronunciation: "とも", meaning: "Amico", type: "base", pos: "noun" },
            { id: "soc_ja5", lang: "ja", level: 2, word: "先生", pronunciation: "せんせい", meaning: "Maestro", type: "derivato", requires: ["rad_uomo_ja"], pos: "noun" }
        ]
    },

    "societa_ar": {
        title: "Società & Casa (Arabo)", tags: ["societa", "ar"],
        cards: [
            // FAMIGLIA
            { id: "fam_ar1", lang: "ar", level: 2, word: "أَب", pronunciation: "ab", meaning: "Padre", type: "base", pos: "noun" },
            { id: "fam_ar2", lang: "ar", level: 2, word: "أُمّ", pronunciation: "umm", meaning: "Madre", type: "base", pos: "noun" },
            { id: "fam_ar3", lang: "ar", level: 2, word: "أَخ", pronunciation: "akh", meaning: "Fratello", type: "base", pos: "noun" },
            { id: "fam_ar4", lang: "ar", level: 2, word: "أُخْت", pronunciation: "ukht", meaning: "Sorella", type: "base", pos: "noun" },

            // LUOGHI
            { id: "soc_ar1", lang: "ar", level: 2, word: "بَيْت", pronunciation: "bayt", meaning: "Casa", type: "base", pos: "place" },
            { id: "soc_ar2", lang: "ar", level: 2, word: "كِتَاب", pronunciation: "kitāb", meaning: "Libro", type: "derivato", requires: ["root_ktb"], pos: "noun" },
            { id: "soc_ar3", lang: "ar", level: 2, word: "مَكْتَب", pronunciation: "maktab", meaning: "Ufficio", type: "derivato", requires: ["root_ktb"], pos: "place" },
            { id: "soc_ar4", lang: "ar", level: 2, word: "مَدْرَسَة", pronunciation: "madrasa", meaning: "Scuola", type: "derivato", requires: ["root_drs"], pos: "place" },
            { id: "soc_ar5", lang: "ar", level: 2, word: "دَرْس", pronunciation: "dars", meaning: "Lezione", type: "derivato", requires: ["root_drs"], pos: "noun" },
            { id: "soc_ar6", lang: "ar", level: 2, word: "سَكَن", pronunciation: "sakan", meaning: "Alloggio", type: "derivato", requires: ["root_skn"], pos: "place" }
        ]
    },

    // ==========================================
    // 3. NATURA (I mazzi che già avevi, mantenuti e collegati)
    // ==========================================
    "natura_zh": { title: "Natura (Cinese)", tags: ["natura", "zh"], cards: [ { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", meaning: "Montagna", type: "base", pos: "place" }, { id: "zh12", lang: "zh", level: 1, word: "天", pronunciation: "tiān", meaning: "Cielo", type: "base", pos: "place" }, { id: "zh13", lang: "zh", level: 2, word: "林", pronunciation: "lín", meaning: "Bosco", type: "derivato", requires: ["rad_albero"], pos: "place" }, { id: "zh14", lang: "zh", level: 2, word: "森", pronunciation: "sēn", meaning: "Foresta", type: "derivato", requires: ["rad_albero"], pos: "place" }, { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", meaning: "Fiume", type: "derivato", requires: ["rad_acqua"], pos: "place" }, { id: "zh16", lang: "zh", level: 2, word: "海", pronunciation: "hǎi", meaning: "Mare", type: "derivato", requires: ["rad_acqua"], pos: "place" }, { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco", "zh7"], pos: "place" }, { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", meaning: "Fiore", type: "derivato", requires: ["rad_albero"], pos: "noun" }, { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", meaning: "Neve", type: "derivato", requires: ["rad_pioggia"], pos: "noun" }, { id: "zh30", lang: "zh", level: 3, word: "电", pronunciation: "diàn", meaning: "Elettricità", type: "base", requires: ["rad_pioggia"], pos: "noun" }, { id: "zh31", lang: "zh", level: 3, word: "雷", pronunciation: "léi", meaning: "Tuono", type: "derivato", requires: ["rad_pioggia", "rad_campo"], pos: "noun" }, { id: "zh34", lang: "zh", level: 3, word: "春", pronunciation: "chūn", meaning: "Primavera", type: "base", requires: ["rad_sole"], pos: "noun" }, { id: "zh35", lang: "zh", level: 3, word: "夏", pronunciation: "xià", meaning: "Estate", type: "base", requires: ["rad_sole"], pos: "noun" }, { id: "zh36", lang: "zh", level: 3, word: "秋", pronunciation: "qiū", meaning: "Autunno", type: "base", requires: ["rad_fuoco"], pos: "noun" }, { id: "zh37", lang: "zh", level: 3, word: "冬", pronunciation: "dōng", meaning: "Inverno", type: "base", requires: ["zh22"], pos: "noun" } ] },
    "natura_ja": { title: "Natura (Giapponese)", tags: ["natura", "ja"], cards: [ { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", meaning: "Fiume", type: "base", pos: "place" }, { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", meaning: "Montagna", type: "base", pos: "place" }, { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", meaning: "Foresta", type: "base", requires: ["rad_albero_ja"], pos: "place" }, { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco_ja", "ja2"], pos: "place" }, { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", meaning: "Fiore", type: "base", pos: "noun" }, { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", meaning: "Nuvola", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" }, { id: "ja35", lang: "ja", level: 3, word: "春", pronunciation: "はる", meaning: "Primavera", type: "base", requires: ["rad_sole_ja"], pos: "noun" }, { id: "ja36", lang: "ja", level: 3, word: "夏", pronunciation: "なつ", meaning: "Estate", type: "base", requires: ["rad_sole_ja"], pos: "noun" }, { id: "ja37", lang: "ja", level: 3, word: "秋", pronunciation: "あき", meaning: "Autunno", type: "base", requires: ["rad_albero_ja"], pos: "noun" }, { id: "ja38", lang: "ja", level: 3, word: "冬", pronunciation: "ふゆ", meaning: "Inverno", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" } ] },
    "natura_ar": { title: "Natura (Arabo)", tags: ["natura", "ar"], cards: [ { id: "ar12", lang: "ar", level: 2, word: "أَرْض", pronunciation: "arḍ", meaning: "Terra/Suolo", type: "derivato", requires: ["root_ard"], pos: "place" }, { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "shams", meaning: "Sole", type: "derivato", requires: ["root_shms"], pos: "noun" }, { id: "ar15", lang: "ar", level: 2, word: "قَمَر", pronunciation: "qamar", meaning: "Luna", type: "derivato", requires: ["root_qmr"], pos: "noun" }, { id: "ar17", lang: "ar", level: 2, word: "بَحْر", pronunciation: "baḥr", meaning: "Mare", type: "derivato", requires: ["root_bhr"], pos: "place" }, { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "jabal", meaning: "Montagna", type: "derivato", requires: ["root_jbl"], pos: "place" }, { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "shajara", meaning: "Albero", type: "derivato", requires: ["root_shjr"], pos: "noun" }, { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "ghāba", meaning: "Foresta", type: "derivato", requires: ["ar23"], pos: "place" } ] },

    // ==========================================
    // 4. VIAGGIO & CIBO & GRAMMATICA (Standard)
    // ==========================================
    "viaggio_zh": { title: "Viaggio (Cinese)", tags: ["viaggio", "zh"], cards: [ { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", meaning: "Andare", type: "base", pos: "verb_move" }, { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", meaning: "Volare", type: "base", pos: "verb" }, { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", meaning: "Macchina", type: "base", requires: ["rad_albero"], pos: "noun" }, { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", meaning: "Aereo", type: "base", pos: "noun" }, { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", meaning: "Treno", type: "derivato", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" }, { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", meaning: "Stazione", type: "derivato", requires: ["rad_veicolo"], pos: "place" }, { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", meaning: "Ingresso", type: "derivato", requires: ["rad_porta", "rad_bocca"], pos: "place" } ] },
    "viaggio_ja": { title: "Viaggio (Giapponese)", tags: ["viaggio", "ja"], cards: [ { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", meaning: "Andare", type: "base", pos: "verb_move" }, { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", meaning: "Stazione", type: "base", pos: "place" }, { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", meaning: "Treno", type: "derivato", requires: ["rad_veicolo_ja"], pos: "noun" }, { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", meaning: "Entrata", type: "base", requires: ["rad_bocca_ja"], pos: "place" } ] },
    "viaggio_ar": { title: "Viaggio (Arabo)", tags: ["viaggio", "ar"], cards: [ { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", meaning: "Viaggio", type: "derivato", requires: ["root_sfr"], pos: "noun" }, { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", meaning: "Aeroporto", type: "derivato", requires: ["root_tyr"], pos: "place" }, { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", meaning: "Aereo", type: "derivato", requires: ["root_tyr"], pos: "noun" } ] },
    "cibo_zh": { title: "Cibo (Cinese)", tags: ["cibo", "zh"], cards: [ { id: "c_zh1", lang: "zh", level: 1, word: "饭", pronunciation: "fàn", meaning: "Riso", type: "base", pos: "food" }, { id: "c_zh2", lang: "zh", level: 1, word: "茶", pronunciation: "chá", meaning: "Tè", type: "base", pos: "drink" }, { id: "c_zh4", lang: "zh", level: 1, word: "苹果", pronunciation: "píngguǒ", meaning: "Mela", type: "base", pos: "food" } ] },
    "cibo_ar": { title: "Cibo (Arabo)", tags: ["cibo", "ar"], cards: [ { id: "c_ar1", lang: "ar", level: 1, word: "خُبْز", pronunciation: "khubz", meaning: "Pane", type: "base", pos: "food" }, { id: "c_ar2", lang: "ar", level: 1, word: "شَاي", pronunciation: "shāy", meaning: "Tè", type: "base", pos: "drink" }, { id: "c_ar4", lang: "ar", level: 1, word: "تُفَّاح", pronunciation: "tuffāḥ", meaning: "Mela", type: "base", pos: "food" } ] },
    "cibo_ja": { title: "Cibo (Giapponese)", tags: ["cibo", "ja"], cards: [ { id: "c_ja1", lang: "ja", level: 1, word: "ご飯", pronunciation: "ごはん", meaning: "Riso", type: "base", pos: "food" }, { id: "c_ja2", lang: "ja", level: 1, word: "お茶", pronunciation: "おちゃ", meaning: "Tè", type: "base", pos: "drink" }, { id: "c_ja4", lang: "ja", level: 1, word: "りんご", pronunciation: "りんご", meaning: "Mela", type: "base", pos: "food" } ] },
    "grammatica_zh": { title: "Grammatica (Cinese)", tags: ["grammatica", "zh"], cards: [ { id: "g_zh1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", meaning: "Io", type: "base", pos: "pronoun" }, { id: "g_zh2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", meaning: "Tu", type: "derivato", requires:["rad_uomo"], pos: "pronoun" }, { id: "g_zh6", lang: "zh", level: 1, word: "吃", pronunciation: "chī", meaning: "Mangiare", type: "derivato", requires:["rad_bocca"], pos: "verb_eat" } ] },
    "grammatica_ar": { title: "Grammatica (Arabo)", tags: ["grammatica", "ar"], cards: [ { id: "g_ar1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", meaning: "Io", type: "base", pos: "pronoun" }, { id: "g_ar7", lang: "ar", level: 1, word: "يَأْكُلُ", pronunciation: "ya'kulu", meaning: "Mangia", type: "derivato", requires: ["root_akl"], pos: "verb_eat" } ] },
    "grammatica_ja": { title: "Grammatica (Giapponese)", tags: ["grammatica", "ja"], cards: [ { id: "g_ja1", lang: "ja", level: 1, word: "私", pronunciation: "わたし", meaning: "Io", type: "base", pos: "pronoun" }, { id: "g_ja4", lang: "ja", level: 1, word: "食べる", pronunciation: "たべる", meaning: "Mangiare", type: "base", pos: "verb_eat" } ] }
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
