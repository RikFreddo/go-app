const decks = {
    // ============================================================
    // 1. FONDAMENTALI (Espanso con Radicali e Numeri 1-10)
    // ============================================================
    "fondamentali_zh": {
        title: "Fondamentali (Cinese)", tags: ["fondamentali", "zh"],
        cards: [
            // --- RADICALI PERSONE & CORPO ---
            { id: "rad_uomo", lang: "zh", level: 1, word: "人", pronunciation: "rén", ipa: "ɻən³⁵", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna", lang: "zh", level: 1, word: "女", pronunciation: "nǚ", ipa: "ny²¹⁴", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino", lang: "zh", level: 1, word: "子", pronunciation: "zǐ", ipa: "t͡sz̩²¹⁴", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca", lang: "zh", level: 1, word: "口", pronunciation: "kǒu", ipa: "kʰoʊ̯²¹⁴", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore", lang: "zh", level: 1, word: "心", pronunciation: "xīn", ipa: "ɕin⁵⁵", meaning: "Cuore", type: "base", pos: "noun" },
            { id: "rad_mano", lang: "zh", level: 1, word: "手", pronunciation: "shǒu", ipa: "ʂoʊ̯²¹⁴", meaning: "Mano", type: "base", pos: "noun" },
            
            // --- RADICALI NATURA & VIAGGIO ---
            { id: "rad_acqua", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯˨˩˦", meaning: "Acqua (Radicale)", type: "base", pos: "noun" },
            { id: "rad_fuoco", lang: "zh", level: 1, word: "火", pronunciation: "huǒ", ipa: "xwɔ˨˩˦", meaning: "Fuoco (Radicale)", type: "base", pos: "noun" },
            { id: "rad_terra", lang: "zh", level: 1, word: "土", pronunciation: "tǔ", ipa: "tʰu˨˩˦", meaning: "Terra (Radicale)", type: "base", pos: "noun" },
            { id: "rad_albero", lang: "zh", level: 1, word: "木", pronunciation: "mù", ipa: "mu⁵¹", meaning: "Legno / Albero", type: "base", pos: "noun" },
            { id: "rad_pioggia", lang: "zh", level: 1, word: "雨", pronunciation: "yǔ", ipa: "y˨˩˦", meaning: "Pioggia (Radicale)", type: "base", pos: "noun" },
            { id: "rad_erba", lang: "zh", level: 1, word: "草", pronunciation: "cǎo", ipa: "tsʰɑʊ̯˨˩˦", meaning: "Erba (Radicale)", type: "base", pos: "noun" },
            { id: "rad_veicolo", lang: "zh", level: 1, word: "车", pronunciation: "chē", ipa: "ʈʂʰɤ˥", meaning: "Veicolo / Carro", type: "base", pos: "noun" },
            { id: "rad_metallo", lang: "zh", level: 1, word: "金", pronunciation: "jīn", ipa: "tɕin˥", meaning: "Metallo / Oro", type: "base", pos: "noun" },
            { id: "rad_sole", lang: "zh", level: 1, word: "日", pronunciation: "rì", ipa: "ʐɻ̩⁵¹", meaning: "Sole / Giorno", type: "base", pos: "noun" },
            { id: "rad_luna", lang: "zh", level: 1, word: "月", pronunciation: "yuè", ipa: "ɥœ⁵¹", meaning: "Luna / Mese", type: "base", pos: "noun" },
            { id: "rad_campo", lang: "zh", level: 1, word: "田", pronunciation: "tián", ipa: "tʰjɛn³⁵", meaning: "Campo", type: "base", pos: "place" },

            // --- OGGETTI & STRUTTURE ---
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", pronunciation: "mián", ipa: "mjɛn³⁵", meaning: "Tetto", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", pronunciation: "mén", ipa: "mən³⁵", meaning: "Porta", type: "base", pos: "place" },
            { id: "rad_forza", lang: "zh", level: 1, word: "力", pronunciation: "lì", ipa: "li⁵¹", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_parola", lang: "zh", level: 1, word: "言", pronunciation: "yán", ipa: "jɛn³⁵", meaning: "Parola", type: "base", pos: "noun" },
            
            // --- CONCETTI BASE ---
            { id: "base_grande", lang: "zh", level: 1, word: "大", pronunciation: "dà", ipa: "ta⁵¹", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo", lang: "zh", level: 1, word: "小", pronunciation: "xiǎo", ipa: "ɕjɑʊ̯²¹⁴", meaning: "Piccolo", type: "base", pos: "adj" },
            { id: "base_mezzo", lang: "zh", level: 1, word: "中", pronunciation: "zhōng", ipa: "t͡ʂʊŋ⁵⁵", meaning: "Centro/Mezzo", type: "base", pos: "adj" },

            // --- NUMERI ---
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

            // --- COLORI ---
            { id: "col_zh1", lang: "zh", level: 1, word: "白", pronunciation: "bái", ipa: "paɪ̯³⁵", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_zh2", lang: "zh", level: 1, word: "黑", pronunciation: "hēi", ipa: "xeɪ̯⁵⁵", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_zh3", lang: "zh", level: 1, word: "红", pronunciation: "hóng", ipa: "xʊŋ³⁵", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_zh4", lang: "zh", level: 1, word: "蓝", pronunciation: "lán", ipa: "lan³⁵", meaning: "Blu", type: "base", pos: "adj" },

            // --- TEMPO ---
            { id: "tm_zh3", lang: "zh", level: 1, word: "年", pronunciation: "nián", ipa: "njɛn³⁵", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_zh4", lang: "zh", level: 2, word: "今天", pronunciation: "jīntiān", ipa: "t͡ɕin⁵⁵ tʰjɛn⁵⁵", meaning: "Oggi", type: "derivato", requires: ["rad_sole"], pos: "noun" },
            { id: "tm_zh5", lang: "zh", level: 2, word: "明天", pronunciation: "míngtiān", ipa: "mjŋ³⁵ tʰjɛn⁵⁵", meaning: "Domani", type: "derivato", requires: ["rad_sole", "rad_luna"], pos: "noun" }
        ]
    },

    "fondamentali_ja": {
        title: "Fondamentali (Giapponese)", tags: ["fondamentali", "ja"],
        cards: [
            // --- RADICALI PERSONE & CORPO ---
            { id: "rad_uomo_ja", lang: "ja", level: 1, word: "人", pronunciation: "ひと", ipa: "çi̥to", meaning: "Persona", type: "base", pos: "noun" },
            { id: "rad_donna_ja", lang: "ja", level: 1, word: "女", pronunciation: "おんな", ipa: "onːa", meaning: "Donna", type: "base", pos: "noun" },
            { id: "rad_bambino_ja", lang: "ja", level: 1, word: "子", pronunciation: "こ", ipa: "ko", meaning: "Bambino", type: "base", pos: "noun" },
            { id: "rad_bocca_ja", lang: "ja", level: 1, word: "口", pronunciation: "くち", ipa: "kɯ̥t͡ɕi", meaning: "Bocca", type: "base", pos: "noun" },
            { id: "rad_cuore_ja", lang: "ja", level: 1, word: "心", pronunciation: "こころ", ipa: "kokoɾo", meaning: "Cuore", type: "base", pos: "noun" },
            { id: "rad_mano_ja", lang: "ja", level: 1, word: "手", pronunciation: "て", ipa: "te", meaning: "Mano", type: "base", pos: "noun" },
            
            // --- RADICALI NATURA & VIAGGIO ---
            { id: "rad_acqua_ja", lang: "ja", level: 1, word: "水", pronunciation: "みず", ipa: "mizɯ", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "rad_fuoco_ja", lang: "ja", level: 1, word: "火", pronunciation: "ひ", ipa: "çi", meaning: "Fuoco", type: "base", pos: "noun" },
            { id: "rad_terra_ja", lang: "ja", level: 1, word: "土", pronunciation: "つち", ipa: "tsɯtɕi", meaning: "Terra", type: "base", pos: "noun" },
            { id: "rad_albero_ja", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "ki", meaning: "Albero/Legno", type: "base", pos: "noun" },
            { id: "rad_pioggia_ja", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "rad_veicolo_ja", lang: "ja", level: 1, word: "車", pronunciation: "くるま", ipa: "kɯɾɯma", meaning: "Auto/Veicolo", type: "base", pos: "noun" },
            { id: "rad_metallo_ja", lang: "ja", level: 1, word: "金", pronunciation: "かね", ipa: "kane", meaning: "Oro/Metallo/Soldi", type: "base", pos: "noun" },
            { id: "rad_sole_ja", lang: "ja", level: 1, word: "日", pronunciation: "ひ", ipa: "çi", meaning: "Sole/Giorno", type: "base", pos: "noun" },
            { id: "rad_luna_ja", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "t͡sɯki̥", meaning: "Luna/Mese", type: "base", pos: "noun" },

            // --- OGGETTI & CONCETTI ---
            { id: "rad_tetto_ja", lang: "ja", level: 1, word: "宀", pronunciation: "うかんむり", ipa: "ukammuɾi", meaning: "Tetto (Radicale)", type: "base", pos: "noun" },
            { id: "rad_forza_ja", lang: "ja", level: 1, word: "力", pronunciation: "ちから", ipa: "t͡ɕi̥kaɾa", meaning: "Forza", type: "base", pos: "noun" },
            { id: "rad_parola_ja", lang: "ja", level: 1, word: "言", pronunciation: "げん", ipa: "ɡen", meaning: "Parola", type: "base", pos: "noun" },
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "だい", ipa: "dai", meaning: "Grande", type: "base", pos: "adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "しょう", ipa: "ɕoː", meaning: "Piccolo", type: "base", pos: "adj" },

            // --- NUMERI ---
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

            // --- COLORI ---
            { id: "col_ja1", lang: "ja", level: 1, word: "白", pronunciation: "しろ", ipa: "ɕiɾo", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ja2", lang: "ja", level: 1, word: "黒", pronunciation: "くろ", ipa: "kɯɾo", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ja3", lang: "ja", level: 1, word: "赤", pronunciation: "あか", ipa: "aka", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ja4", lang: "ja", level: 1, word: "青", pronunciation: "あお", ipa: "ao", meaning: "Blu", type: "base", pos: "adj" },

            // --- TEMPO ---
            { id: "tm_ja3", lang: "ja", level: 1, word: "年", pronunciation: "とし", ipa: "toɕi", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_ja4", lang: "ja", level: 2, word: "今日", pronunciation: "きょう", ipa: "kʲoː", meaning: "Oggi", type: "derivato", requires: ["rad_sole_ja"], pos: "noun" },
            { id: "tm_ja5", lang: "ja", level: 2, word: "明日", pronunciation: "あした", ipa: "aɕi̥ta", meaning: "Domani", type: "derivato", requires: ["rad_sole_ja", "rad_luna_ja"], pos: "noun" }
        ]
    },

    "fondamentali_ar": {
        title: "Fondamentali (Arabo)", tags: ["fondamentali", "ar"],
        cards: [
            // --- RADICI DI BASE ---
            { id: "root_ktb", lang: "ar", level: 1, word: "ك ت ب", pronunciation: "K-T-B", ipa: "k-t-b", meaning: "Radice: Scrivere", type: "base", pos: "root" },
            { id: "root_drs", lang: "ar", level: 1, word: "د ر س", pronunciation: "D-R-S", ipa: "d-r-s", meaning: "Radice: Studiare", type: "base", pos: "root" },
            { id: "root_skn", lang: "ar", level: 1, word: "س ك ن", pronunciation: "S-K-N", ipa: "s-k-n", meaning: "Radice: Abitare", type: "base", pos: "root" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ ك ل", pronunciation: "'-K-L", ipa: "ʔ-k-l", meaning: "Radice: Mangiare", type: "base", pos: "root" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش ر ب", pronunciation: "Sh-R-B", ipa: "ʃ-r-b", meaning: "Radice: Bere", type: "base", pos: "root" },
            { id: "root_fcl", lang: "ar", level: 1, word: "ف ع ل", pronunciation: "F-'-L", ipa: "f-ʕ-l", meaning: "Radice: Fare", type: "base", pos: "root" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك ب ر", pronunciation: "K-B-R", ipa: "k-b-r", meaning: "Radice: Grande", type: "base", pos: "root" },
            { id: "root_hbb", lang: "ar", level: 1, word: "ح ب ب", pronunciation: "H-B-B", ipa: "ħ-b-b", meaning: "Radice: Amore", type: "base", pos: "root" },
            
            // --- RADICI PER NATURA (NUOVE!) ---
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", ipa: "ʔ-r-dˤ", meaning: "Radice: Terra", type: "base", pos: "root" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", ipa: "ʃ-m-s", meaning: "Radice: Sole", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", ipa: "q-m-r", meaning: "Radice: Luna", type: "base", pos: "root" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", ipa: "b-ħ-r", meaning: "Radice: Mare", type: "base", pos: "root" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", ipa: "dʒ-b-l", meaning: "Radice: Montagna", type: "base", pos: "root" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", ipa: "ʃ-dʒ-r", meaning: "Radice: Albero", type: "base", pos: "root" },
            { id: "root_nhr", lang: "ar", level: 1, word: "ن ه ر", pronunciation: "N-H-R", ipa: "n-h-r", meaning: "Radice: Fiume", type: "base", pos: "root" },
            { id: "root_zhr", lang: "ar", level: 1, word: "ز ه ر", pronunciation: "Z-H-R", ipa: "z-h-r", meaning: "Radice: Fiore", type: "base", pos: "root" },
            { id: "root_shr", lang: "ar", level: 1, word: "ص ح ر", pronunciation: "Ṣ-Ḥ-R", ipa: "sˤ-ħ-r", meaning: "Radice: Deserto", type: "base", pos: "root" },

            // --- RADICI PER VIAGGIO (NUOVE!) ---
            { id: "root_sfr", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", ipa: "s-f-r", meaning: "Radice: Viaggio", type: "base", pos: "root" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", ipa: "tˤ-j-r", meaning: "Radice: Volare", type: "base", pos: "root" },
            { id: "root_nql", lang: "ar", level: 1, word: "ن ق ل", pronunciation: "N-Q-L", ipa: "n-q-l", meaning: "Radice: Trasportare", type: "base", pos: "root" },
            { id: "root_rkb", lang: "ar", level: 1, word: "ر ك ب", pronunciation: "R-K-B", ipa: "r-k-b", meaning: "Radice: Cavalcare/Mezzo", type: "base", pos: "root" },

            // --- NUMERI ---
            { id: "num_ar1", lang: "ar", level: 1, word: "وَاحِد", pronunciation: "wāḥid", ipa: "waːħid", meaning: "Uno", type: "base", pos: "num" },
            { id: "num_ar2", lang: "ar", level: 1, word: "اِثْنَان", pronunciation: "ithnān", ipa: "iθnaːn", meaning: "Due", type: "base", pos: "num" },
            { id: "num_ar3", lang: "ar", level: 1, word: "ثَلَاثَة", pronunciation: "thalātha", ipa: "θalaːθa", meaning: "Tre", type: "base", pos: "num" },
            { id: "num_ar4", lang: "ar", level: 1, word: "أَرْبَعَة", pronunciation: "arba'a", ipa: "ʔarbaʕa", meaning: "Quattro", type: "base", pos: "num" },
            { id: "num_ar5", lang: "ar", level: 1, word: "خَمْسَة", pronunciation: "khamsa", ipa: "xamsa", meaning: "Cinque", type: "base", pos: "num" },
            { id: "num_ar6", lang: "ar", level: 1, word: "سِتَّة", pronunciation: "sitta", ipa: "sitːa", meaning: "Sei", type: "base", pos: "num" },
            { id: "num_ar7", lang: "ar", level: 1, word: "سَبْعَة", pronunciation: "sab'a", ipa: "sabʕa", meaning: "Sette", type: "base", pos: "num" },
            { id: "num_ar8", lang: "ar", level: 1, word: "ثَمَانِيَة", pronunciation: "thamāniya", ipa: "θamaːnija", meaning: "Otto", type: "base", pos: "num" },
            { id: "num_ar9", lang: "ar", level: 1, word: "تِسْعَة", pronunciation: "tis'a", ipa: "tisʕa", meaning: "Nove", type: "base", pos: "num" },
            { id: "num_ar10", lang: "ar", level: 1, word: "عَشَرَة", pronunciation: "'ashara", ipa: "ʕaʃara", meaning: "Dieci", type: "base", pos: "num" },

            // --- COLORI ---
            { id: "col_ar1", lang: "ar", level: 1, word: "أَبْيَض", pronunciation: "abyaḍ", ipa: "ʔabjadˤ", meaning: "Bianco", type: "base", pos: "adj" },
            { id: "col_ar2", lang: "ar", level: 1, word: "أَسْوَد", pronunciation: "aswad", ipa: "ʔaswad", meaning: "Nero", type: "base", pos: "adj" },
            { id: "col_ar3", lang: "ar", level: 1, word: "أَحْمَر", pronunciation: "aḥmar", ipa: "ʔaħmar", meaning: "Rosso", type: "base", pos: "adj" },
            { id: "col_ar4", lang: "ar", level: 1, word: "أَزْرَق", pronunciation: "azraq", ipa: "ʔazraq", meaning: "Blu", type: "base", pos: "adj" },

            // --- TEMPO & BASI ---
            { id: "tm_ar1", lang: "ar", level: 1, word: "يَوْم", pronunciation: "yawm", ipa: "jawm", meaning: "Giorno", type: "base", pos: "noun" },
            { id: "tm_ar2", lang: "ar", level: 1, word: "شَهْر", pronunciation: "shahr", ipa: "ʃahr", meaning: "Mese", type: "base", pos: "noun" },
            { id: "tm_ar3", lang: "ar", level: 1, word: "سَنَة", pronunciation: "sana", ipa: "sana", meaning: "Anno", type: "base", pos: "noun" },
            { id: "tm_ar4", lang: "ar", level: 2, word: "الْيَوْم", pronunciation: "al-yawm", ipa: "al-jawm", meaning: "Oggi", type: "derivato", requires: ["tm_ar1"], pos: "noun" },
            { id: "base_ma", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", ipa: "maːʔ", meaning: "Acqua", type: "base", pos: "noun" }
        ]
    },

// ==========================================
    // 5. GRAMMATICA & PARTICELLE (Cinese)
    // ==========================================
    "grammatica_zh": {
        title: "Grammatica Base (Cinese)", 
        tags: ["grammatica", "zh"],
        cards: [
            // --- PRONOMI PERSONALI ---
            { id: "g_zh_pron_1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", ipa: "wɔ˨˩˦", meaning: "Io", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_pron_2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", ipa: "ni˨˩˦", meaning: "Tu", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_pron_3", lang: "zh", level: 1, word: "他", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "Lui", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_pron_4", lang: "zh", level: 1, word: "她", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "Lei", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_pron_5", lang: "zh", level: 1, word: "我们", pronunciation: "wǒmen", ipa: "wɔ˨˩˦ mən", meaning: "Noi", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_pron_6", lang: "zh", level: 1, word: "你们", pronunciation: "nǐmen", ipa: "ni˨˩˦ mən", meaning: "Voi", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_pron_7", lang: "zh", level: 1, word: "他们", pronunciation: "tāmen", ipa: "tʰa⁵⁵ mən", meaning: "Loro", type: "grammatica", pos: "pronoun" },

            // --- NEGAZIONI ---
            { id: "g_zh_neg_1", lang: "zh", level: 1, word: "不", pronunciation: "bù", ipa: "pu⁵¹", meaning: "Non (generale/futuro)", type: "grammatica", pos: "adverb" },
            { id: "g_zh_neg_2", lang: "zh", level: 1, word: "没", pronunciation: "méi", ipa: "meɪ̯˧˥", meaning: "Non (passato/avere)", type: "grammatica", pos: "adverb" },

            // --- PARTICELLE STRUTTURALI ---
            { id: "g_zh_part_1", lang: "zh", level: 1, word: "的", pronunciation: "de", ipa: "tə", meaning: "Particella possessiva (di/il mio)", type: "grammatica", pos: "particle" },
            { id: "g_zh_part_2", lang: "zh", level: 1, word: "吗", pronunciation: "ma", ipa: "ma", meaning: "Particella interrogativa (?)", type: "grammatica", pos: "particle" },
            { id: "g_zh_part_3", lang: "zh", level: 2, word: "了", pronunciation: "le", ipa: "lə", meaning: "Particella azione completata/cambiamento", type: "grammatica", pos: "particle" },
            { id: "g_zh_part_4", lang: "zh", level: 1, word: "很", pronunciation: "hěn", ipa: "xən˨˩˦", meaning: "Molto (lega agg. al soggetto)", type: "grammatica", pos: "adverb" },
            { id: "g_zh_part_5", lang: "zh", level: 1, word: "和", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "E (congiunzione)", type: "grammatica", pos: "conjunction" },

            // --- CLASSIFICATORI (MISURATORI) ---
            { id: "g_zh_cl_1", lang: "zh", level: 1, word: "个", pronunciation: "gè", ipa: "kɤ⁵¹", meaning: "Classificatore generico (persone/cose)", type: "grammatica", pos: "classifier" },
            { id: "g_zh_cl_2", lang: "zh", level: 2, word: "只", pronunciation: "zhī", ipa: "ʈʂʐ̩⁵⁵", meaning: "Classificatore animali piccoli", type: "grammatica", pos: "classifier" },
            { id: "g_zh_cl_3", lang: "zh", level: 2, word: "条", pronunciation: "tiáo", ipa: "tʰjɑʊ̯˧˥", meaning: "Classificatore cose lunghe (pesci/strade)", type: "grammatica", pos: "classifier" },
            { id: "g_zh_cl_4", lang: "zh", level: 2, word: "本", pronunciation: "běn", ipa: "pən˨˩˦", meaning: "Classificatore libri/volumi", type: "grammatica", pos: "classifier" },

            // --- DIMOSTRATIVI & INTERROGATIVI ---
            { id: "g_zh_dem_1", lang: "zh", level: 1, word: "这", pronunciation: "zhè", ipa: "ʈʂɤ⁵¹", meaning: "Questo", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_dem_2", lang: "zh", level: 1, word: "那", pronunciation: "nà", ipa: "na⁵¹", meaning: "Quello", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_dem_3", lang: "zh", level: 1, word: "这里", pronunciation: "zhèlǐ", ipa: "ʈʂɤ⁵¹ li˨˩˦", meaning: "Qui", type: "grammatica", pos: "place" },
            { id: "g_zh_dem_4", lang: "zh", level: 1, word: "那里", pronunciation: "nàlǐ", ipa: "na⁵¹ li˨˩˦", meaning: "Lì / Là", type: "grammatica", pos: "place" },
            { id: "g_zh_int_1", lang: "zh", level: 1, word: "什么", pronunciation: "shénme", ipa: "ʂən˧˥ mə", meaning: "Cosa? / Che?", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_int_2", lang: "zh", level: 1, word: "哪儿", pronunciation: "nǎr", ipa: "na˨˩˦ ɑɻ", meaning: "Dove?", type: "grammatica", pos: "pronoun" },
            { id: "g_zh_int_3", lang: "zh", level: 1, word: "谁", pronunciation: "shéi", ipa: "ʂeɪ̯˧˥", meaning: "Chi?", type: "grammatica", pos: "pronoun" }
        ]
    },

// ==========================================
    // 5. GRAMMATICA & PARTICELLE (Giapponese)
    // ==========================================
    "grammatica_ja": {
        title: "Grammatica Base (Giapponese)", 
        tags: ["grammatica", "ja"],
        cards: [
            // --- PRONOMI PERSONALI ---
            { id: "g_ja_pron_1", lang: "ja", level: 1, word: "私", pronunciation: "watashi", ipa: "wataɕi", meaning: "Io", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_pron_2", lang: "ja", level: 1, word: "あなた", pronunciation: "anata", ipa: "anata", meaning: "Tu", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_pron_3", lang: "ja", level: 1, word: "彼", pronunciation: "kare", ipa: "kaɾe", meaning: "Lui", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_pron_4", lang: "ja", level: 1, word: "彼女", pronunciation: "kanojo", ipa: "kanodʑo", meaning: "Lei", type: "grammatica", pos: "pronoun" },

            // --- PARTICELLE FONDAMENTALI ---
            { id: "g_ja_part_1", lang: "ja", level: 1, word: "は", pronunciation: "wa", ipa: "wa", meaning: "Marcatore del TEMA (Parlando di...)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_2", lang: "ja", level: 1, word: "を", pronunciation: "o", ipa: "o", meaning: "Marcatore OGGETTO (Cosa mangi/vedi?)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_3", lang: "ja", level: 1, word: "に", pronunciation: "ni", ipa: "ɲi", meaning: "A / In (Destinazione o Tempo)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_4", lang: "ja", level: 1, word: "で", pronunciation: "de", ipa: "de", meaning: "Con / Presso (Mezzo o Luogo azione)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_5", lang: "ja", level: 1, word: "の", pronunciation: "no", ipa: "no", meaning: "Di (Possesso)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_6", lang: "ja", level: 2, word: "が", pronunciation: "ga", ipa: "ɡa", meaning: "Soggetto specifico (per 'esserci'/'piacere')", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_7", lang: "ja", level: 1, word: "か", pronunciation: "ka", ipa: "ka", meaning: "Particella interrogativa (?)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_8", lang: "ja", level: 1, word: "と", pronunciation: "to", ipa: "to", meaning: "E (congiunzione tra nomi)", type: "grammatica", pos: "particle" },
            { id: "g_ja_part_9", lang: "ja", level: 1, word: "も", pronunciation: "mo", ipa: "mo", meaning: "Anche", type: "grammatica", pos: "particle" },

            // --- VERBI AUSILIARI (Essere/Esistere) ---
            { id: "g_ja_aux_1", lang: "ja", level: 1, word: "です", pronunciation: "desu", ipa: "desɯ", meaning: "Essere (cortese)", type: "grammatica", pos: "auxiliary" },
            { id: "g_ja_aux_2", lang: "ja", level: 1, word: "ます", pronunciation: "masu", ipa: "masɯ", meaning: "Suffisso verbo cortese (presente/futuro)", type: "grammatica", pos: "suffix" },
            { id: "g_ja_aux_3", lang: "ja", level: 1, word: "あります", pronunciation: "arimasu", ipa: "aɾimasɯ", meaning: "Esserci (cose inanimate)", type: "grammatica", pos: "verb" },
            { id: "g_ja_aux_4", lang: "ja", level: 1, word: "います", pronunciation: "imasu", ipa: "imasɯ", meaning: "Esserci (persone/animali)", type: "grammatica", pos: "verb" },
            { id: "g_ja_aux_5", lang: "ja", level: 1, word: "ません", pronunciation: "masen", ipa: "maseɴ", meaning: "Non (Negazione cortese)", type: "grammatica", pos: "suffix" },

            // --- DIMOSTRATIVI (Serie Ko-So-A-Do) ---
            { id: "g_ja_dem_1", lang: "ja", level: 1, word: "これ", pronunciation: "kore", ipa: "koɾe", meaning: "Questo (vicino a me)", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_dem_2", lang: "ja", level: 1, word: "それ", pronunciation: "sore", ipa: "soɾe", meaning: "Codesto (vicino a te)", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_dem_3", lang: "ja", level: 1, word: "あれ", pronunciation: "are", ipa: "aɾe", meaning: "Quello (lontano)", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_dem_4", lang: "ja", level: 1, word: "ここ", pronunciation: "koko", ipa: "koko", meaning: "Qui", type: "grammatica", pos: "place" },
            { id: "g_ja_dem_5", lang: "ja", level: 1, word: "そこ", pronunciation: "soko", ipa: "soko", meaning: "Lì", type: "grammatica", pos: "place" },
            { id: "g_ja_dem_6", lang: "ja", level: 1, word: "あそこ", pronunciation: "asoko", ipa: "asoko", meaning: "Laggiù", type: "grammatica", pos: "place" },
            
            // --- INTERROGATIVI ---
            { id: "g_ja_int_1", lang: "ja", level: 1, word: "何", pronunciation: "nani", ipa: "naɲi", meaning: "Cosa?", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_int_2", lang: "ja", level: 1, word: "誰", pronunciation: "dare", ipa: "daɾe", meaning: "Chi?", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_int_3", lang: "ja", level: 1, word: "どこ", pronunciation: "doko", ipa: "doko", meaning: "Dove?", type: "grammatica", pos: "pronoun" },
            { id: "g_ja_int_4", lang: "ja", level: 1, word: "いつ", pronunciation: "itsu", ipa: "itsɯ", meaning: "Quando?", type: "grammatica", pos: "pronoun" }
        ]
    },

// ==========================================
    // 5. GRAMMATICA & PARTICELLE (Arabo) - VERSIONE ESTESA
    // ==========================================
    "grammatica_ar": {
        title: "Grammatica Base (Arabo)", 
        tags: ["grammatica", "ar"],
        cards: [
            // --- PRONOMI PERSONALI (ISOLATI - Soggetto) ---
            { id: "g_ar_pron_1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", ipa: "ʔana", meaning: "Io", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_pron_2", lang: "ar", level: 1, word: "أَنْتَ", pronunciation: "anta", ipa: "ʔanta", meaning: "Tu (maschile)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_pron_3", lang: "ar", level: 1, word: "أَنْتِ", pronunciation: "anti", ipa: "ʔanti", meaning: "Tu (femminile)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_pron_4", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", ipa: "huwa", meaning: "Lui", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_pron_5", lang: "ar", level: 1, word: "هِيَ", pronunciation: "hiya", ipa: "hija", meaning: "Lei", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_pron_6", lang: "ar", level: 1, word: "نَحْنُ", pronunciation: "naḥnu", ipa: "naħnu", meaning: "Noi", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_pron_7", lang: "ar", level: 1, word: "هُمْ", pronunciation: "hum", ipa: "hum", meaning: "Loro", type: "grammatica", pos: "pronoun" },

            // --- PRONOMI SUFFISSI (POSSESSIVI / OGGETTO) ---
            // Questi si attaccano alla fine: Kitāb (libro) + ī = Kitābī (Il mio libro)
            { id: "g_ar_suff_1", lang: "ar", level: 1, word: "ـي", pronunciation: "-ī", ipa: "iː", meaning: "Mio / Me (suffisso)", type: "grammatica", pos: "suffix" },
            { id: "g_ar_suff_2", lang: "ar", level: 1, word: "ـكَ", pronunciation: "-ka", ipa: "ka", meaning: "Tuo / Te (maschile, suffisso)", type: "grammatica", pos: "suffix" },
            { id: "g_ar_suff_3", lang: "ar", level: 1, word: "ـكِ", pronunciation: "-ki", ipa: "ki", meaning: "Tuo / Te (femminile, suffisso)", type: "grammatica", pos: "suffix" },
            { id: "g_ar_suff_4", lang: "ar", level: 1, word: "ـهُ", pronunciation: "-hu", ipa: "hu", meaning: "Suo / Lui (suffisso)", type: "grammatica", pos: "suffix" },
            { id: "g_ar_suff_5", lang: "ar", level: 1, word: "ـهَا", pronunciation: "-hā", ipa: "haː", meaning: "Suo / Lei (suffisso)", type: "grammatica", pos: "suffix" },
            { id: "g_ar_suff_6", lang: "ar", level: 1, word: "ـنَا", pronunciation: "-nā", ipa: "naː", meaning: "Nostro / Ci (suffisso)", type: "grammatica", pos: "suffix" },

            // --- PSEUDO-VERBI (AVERE/POSSEDERE) ---
            // Si usano con i suffissi sopra: 'Ind + ī = 'Indī (Ho)
            { id: "g_ar_have_1", lang: "ar", level: 1, word: "عِنْدَ", pronunciation: "'inda", ipa: "ʕinda", meaning: "Presso / Avere (con suffissi)", type: "grammatica", pos: "preposition" },
            { id: "g_ar_have_2", lang: "ar", level: 1, word: "لِـ", pronunciation: "li-", ipa: "li", meaning: "A / Per / Avere (con suffissi)", type: "grammatica", pos: "preposition" },

            // --- DIMOSTRATIVI ---
            { id: "g_ar_dem_1", lang: "ar", level: 1, word: "هَذَا", pronunciation: "hādhā", ipa: "haːðaː", meaning: "Questo (maschile)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_dem_2", lang: "ar", level: 1, word: "هَذِهِ", pronunciation: "hādhihi", ipa: "haːðihi", meaning: "Questa (femminile)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_dem_3", lang: "ar", level: 1, word: "ذَلِكَ", pronunciation: "dhālika", ipa: "ðaːlika", meaning: "Quello (lontano)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_dem_4", lang: "ar", level: 1, word: "تِلْكَ", pronunciation: "tilka", ipa: "tilka", meaning: "Quella (lontano)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_dem_5", lang: "ar", level: 1, word: "هُنَا", pronunciation: "hunā", ipa: "hunaː", meaning: "Qui", type: "grammatica", pos: "place" },
            { id: "g_ar_dem_6", lang: "ar", level: 1, word: "هُنَاكَ", pronunciation: "hunāka", ipa: "hunaːka", meaning: "Lì / Là", type: "grammatica", pos: "place" },

            // --- PREPOSIZIONI & PARTICELLE ---
            { id: "g_ar_prep_1", lang: "ar", level: 1, word: "فِي", pronunciation: "fī", ipa: "fiː", meaning: "In / Dentro", type: "grammatica", pos: "preposition" },
            { id: "g_ar_prep_2", lang: "ar", level: 1, word: "إِلَى", pronunciation: "ilā", ipa: "ʔilaː", meaning: "A / Verso (moto)", type: "grammatica", pos: "preposition" },
            { id: "g_ar_prep_3", lang: "ar", level: 1, word: "مِنْ", pronunciation: "min", ipa: "min", meaning: "Da (provenienza)", type: "grammatica", pos: "preposition" },
            { id: "g_ar_prep_4", lang: "ar", level: 1, word: "عَلَى", pronunciation: "alā", ipa: "ʕalaː", meaning: "Su / Sopra", type: "grammatica", pos: "preposition" },
            { id: "g_ar_prep_5", lang: "ar", level: 1, word: "بِـ", pronunciation: "bi", ipa: "bi", meaning: "Con (mezzo) / In", type: "grammatica", pos: "preposition" },
            { id: "g_ar_prep_6", lang: "ar", level: 1, word: "مَعَ", pronunciation: "ma'a", ipa: "maʕa", meaning: "Con (compagnia)", type: "grammatica", pos: "preposition" },
            { id: "g_ar_part_1", lang: "ar", level: 1, word: "الـ", pronunciation: "al-", ipa: "al", meaning: "Il / Lo / La (Articolo)", type: "grammatica", pos: "article" },
            
            // --- CONGIUNZIONI & AVVERBI ---
            { id: "g_ar_conj_1", lang: "ar", level: 1, word: "وَ", pronunciation: "wa", ipa: "wa", meaning: "E (congiunzione)", type: "grammatica", pos: "conjunction" },
            { id: "g_ar_conj_2", lang: "ar", level: 1, word: "لَكِنْ", pronunciation: "lākin", ipa: "laːkin", meaning: "Ma / Tuttavia", type: "grammatica", pos: "conjunction" },
            { id: "g_ar_conj_3", lang: "ar", level: 1, word: "أَوْ", pronunciation: "aw", ipa: "ʔaw", meaning: "O / Oppure", type: "grammatica", pos: "conjunction" },
            { id: "g_ar_conj_4", lang: "ar", level: 1, word: "لِأَنَّ", pronunciation: "li'anna", ipa: "liʔanna", meaning: "Perché (poiché)", type: "grammatica", pos: "conjunction" },
            { id: "g_ar_adv_1", lang: "ar", level: 1, word: "الْآن", pronunciation: "al-ān", ipa: "al ʔaːn", meaning: "Adesso / Ora", type: "grammatica", pos: "adverb" },
            { id: "g_ar_adv_2", lang: "ar", level: 1, word: "دَائِمًا", pronunciation: "dā'iman", ipa: "daːʔiman", meaning: "Sempre", type: "grammatica", pos: "adverb" },
            
            // --- NEGAZIONI & INTERROGATIVI ---
            { id: "g_ar_neg_1", lang: "ar", level: 1, word: "لَا", pronunciation: "lā", ipa: "laː", meaning: "No / Non (presente)", type: "grammatica", pos: "adverb" },
            { id: "g_ar_neg_2", lang: "ar", level: 1, word: "لَيْسَ", pronunciation: "laysa", ipa: "lajsa", meaning: "Non è (negazione nominale)", type: "grammatica", pos: "verb" },
            { id: "g_ar_int_1", lang: "ar", level: 1, word: "مَا / مَاذَا", pronunciation: "mā / mādhā", ipa: "maː / maːðaː", meaning: "Cosa?", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_int_2", lang: "ar", level: 1, word: "مَنْ", pronunciation: "man", ipa: "man", meaning: "Chi?", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_int_3", lang: "ar", level: 1, word: "أَيْنَ", pronunciation: "ayna", ipa: "ʔajna", meaning: "Dove?", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_int_4", lang: "ar", level: 1, word: "كَيْفَ", pronunciation: "kayfa", ipa: "kajfa", meaning: "Come?", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_int_5", lang: "ar", level: 1, word: "هَل", pronunciation: "hal", ipa: "hal", meaning: "Particella interrogativa (Si/No)", type: "grammatica", pos: "particle" },
            { id: "g_ar_int_6", lang: "ar", level: 1, word: "لِمَاذَا", pronunciation: "limādhā", ipa: "limaːðaː", meaning: "Perché? (Domanda)", type: "grammatica", pos: "pronoun" },
            { id: "g_ar_int_7", lang: "ar", level: 1, word: "كَم", pronunciation: "kam", ipa: "kam", meaning: "Quanto?", type: "grammatica", pos: "pronoun" }
        ]
    },
    
    // ==========================================
    // 2. SOCIETA' & CASA
    // ==========================================
    "societa_zh": {
        title: "Società & Casa (Cinese)", tags: ["società", "zh"],
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
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "t͡ɕʰjɛn³⁵", meaning: "Soldi", type: "base", pos: "noun" },
        ]
    },

    "societa_ja": {
        title: "Società & Casa (Giapponese)", tags: ["società", "ja"],
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
        title: "Società & Casa (Arabo)", tags: ["società", "ar"],
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
    // 3. NATURA (FUSIONE COMPLETA VECCHIO + NUOVO)
    // ==========================================
    
    "natura_zh": {
        title: "Natura (Cinese)",
        tags: ["natura", "zh"],
        cards: [
            // --- VECCHIE CARTE AGGIORNATE (ID Storici) ---
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", ipa: "ʂan˥", meaning: "Montagna", type: "base", pos: "place" },
            { id: "zh12", lang: "zh", level: 1, word: "天空", pronunciation: "tiānkōng", ipa: "tʰjɛn˥ kʰʊŋ˥", meaning: "Cielo", type: "base", pos: "place" },
            { id: "zh13", lang: "zh", level: 2, word: "森林", pronunciation: "sēnlín", ipa: "sən˥ lin˧˥", meaning: "Foresta", type: "derivato", requires: ["rad_albero"], pos: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "Fiume", type: "derivato", requires: ["rad_acqua"], pos: "place" },
            { id: "zh16", lang: "zh", level: 2, word: "海 / 海洋", pronunciation: "hǎi / hǎiyáng", ipa: "xaɪ̯˨˩˦ / xaɪ̯˨˩˦ jɑŋ˧˥", meaning: "Mare / Oceano", type: "derivato", requires: ["rad_acqua"], pos: "place" },
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", ipa: "xwɔ˨˩˦ ʂan˥", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco", "zh7"], pos: "place" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa˥", meaning: "Fiore", type: "derivato", requires: ["rad_albero"], pos: "noun" },
            { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", ipa: "ɕɥɛ˨˩˦", meaning: "Neve", type: "derivato", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh30", lang: "zh", level: 3, word: "风", pronunciation: "fēng", ipa: "fəŋ˥", meaning: "Vento", type: "base", pos: "noun" },
            { id: "zh31", lang: "zh", level: 3, word: "暴风雨", pronunciation: "bàofēngyǔ", ipa: "pɑʊ̯˥˩ fəŋ˥ y˨˩˦", meaning: "Tempesta", type: "derivato", requires: ["rad_pioggia"], pos: "noun" },

            // --- NUOVE CARTE (Natura Estesa) ---
            { id: "n_zh_ext_1", lang: "zh", level: 2, word: "山丘", pronunciation: "shānqiū", ipa: "ʂan˥ tɕʰjoʊ̯˥", meaning: "Collina", type: "base", pos: "place" },
            { id: "n_zh_ext_2", lang: "zh", level: 2, word: "山谷", pronunciation: "shāngǔ", ipa: "ʂan˥ ku˨˩˦", meaning: "Valle", type: "base", pos: "place" },
            { id: "n_zh_ext_3", lang: "zh", level: 2, word: "湖", pronunciation: "hú", ipa: "xu˧˥", meaning: "Lago", type: "base", pos: "place" },
            { id: "n_zh_ext_4", lang: "zh", level: 2, word: "海滩", pronunciation: "hǎitān", ipa: "xaɪ̯˨˩˦ tʰan˥", meaning: "Spiaggia", type: "base", pos: "place" },
            { id: "n_zh_ext_5", lang: "zh", level: 2, word: "岛", pronunciation: "dǎo", ipa: "tɑʊ̯˨˩˦", meaning: "Isola", type: "base", pos: "place" },
            { id: "n_zh_ext_6", lang: "zh", level: 3, word: "沙漠", pronunciation: "shāmò", ipa: "ʂa˥ mwɔ˥˩", meaning: "Deserto", type: "base", pos: "place" },
            { id: "n_zh_ext_7", lang: "zh", level: 3, word: "瀑布", pronunciation: "pùbù", ipa: "pʰu˥˩ pu˥˩", meaning: "Cascata", type: "base", pos: "place" },
            { id: "n_zh_ext_8", lang: "zh", level: 3, word: "洞穴", pronunciation: "dòngxué", ipa: "tʊŋ˥˩ ɕɥɛ˧˥", meaning: "Grotta", type: "base", pos: "place" },
            { id: "n_zh_ext_9", lang: "zh", level: 3, word: "地平线", pronunciation: "dìpíngxiàn", ipa: "ti˥˩ pʰiŋ˧˥ ɕjɛn˥˩", meaning: "Orizzonte", type: "base", pos: "noun" },
            { id: "n_zh_ext_10", lang: "zh", level: 1, word: "土地", pronunciation: "tǔdì", ipa: "tʰu˨˩˦ ti˥˩", meaning: "Terra (Suolo)", type: "base", pos: "noun" },
            { id: "n_zh_ext_11", lang: "zh", level: 2, word: "石头", pronunciation: "shítou", ipa: "ʂʐ̩˧˥ tʰoʊ̯", meaning: "Sasso / Pietra", type: "base", pos: "noun" },
            { id: "n_zh_ext_12", lang: "zh", level: 1, word: "树", pronunciation: "shù", ipa: "ʂu˥˩", meaning: "Albero", type: "base", pos: "noun" },
            { id: "n_zh_ext_13", lang: "zh", level: 3, word: "丛林", pronunciation: "cónglín", ipa: "tsʰʊŋ˧˥ lin˧˥", meaning: "Giungla", type: "base", pos: "place" },
            { id: "n_zh_ext_14", lang: "zh", level: 2, word: "植物", pronunciation: "zhíwù", ipa: "ʈʂʐ̩˧˥ u˥˩", meaning: "Pianta", type: "base", pos: "noun" },
            { id: "n_zh_ext_15", lang: "zh", level: 2, word: "草", pronunciation: "cǎo", ipa: "tsʰɑʊ̯˨˩˦", meaning: "Erba", type: "base", pos: "noun" },
            { id: "n_zh_ext_16", lang: "zh", level: 2, word: "叶子", pronunciation: "yèzi", ipa: "jɛ˥˩ d̥z̥", meaning: "Foglia", type: "base", pos: "noun" },
            { id: "n_zh_ext_17", lang: "zh", level: 2, word: "树枝", pronunciation: "shùzhī", ipa: "ʂu˥˩ ʈʂʐ̩˥", meaning: "Ramo", type: "base", pos: "noun" },
            { id: "n_zh_ext_18", lang: "zh", level: 2, word: "根", pronunciation: "gēn", ipa: "kən˥", meaning: "Radice", type: "base", pos: "noun" },
            { id: "n_zh_ext_19", lang: "zh", level: 2, word: "树干", pronunciation: "shùgàn", ipa: "ʂu˥˩ kan˥˩", meaning: "Tronco", type: "base", pos: "noun" },
            { id: "n_zh_ext_20", lang: "zh", level: 2, word: "种子", pronunciation: "zhǒngzi", ipa: "ʈʂʊŋ˨˩˦ d̥z̥", meaning: "Seme", type: "base", pos: "noun" },
            { id: "n_zh_ext_21", lang: "zh", level: 2, word: "水果", pronunciation: "shuǐguǒ", ipa: "ʂweɪ̯˨˩˦ kwɔ˨˩˦", meaning: "Frutto", type: "base", pos: "noun" },
            { id: "n_zh_ext_22", lang: "zh", level: 2, word: "木头", pronunciation: "mùtou", ipa: "mu˥˩ tʰoʊ̯", meaning: "Legno", type: "base", pos: "noun" },
            { id: "n_zh_ext_23", lang: "zh", level: 1, word: "太阳", pronunciation: "tàiyáng", ipa: "tʰaɪ̯˥˩ jɑŋ˧˥", meaning: "Sole", type: "base", pos: "noun" },
            { id: "n_zh_ext_24", lang: "zh", level: 1, word: "月亮", pronunciation: "yuèliang", ipa: "ɥɛ˥˩ ljɑŋ", meaning: "Luna", type: "base", pos: "noun" },
            { id: "n_zh_ext_25", lang: "zh", level: 2, word: "星星", pronunciation: "xīngxing", ipa: "ɕiŋ˥ ɕiŋ", meaning: "Stelle", type: "base", pos: "noun" },
            { id: "n_zh_ext_26", lang: "zh", level: 2, word: "云", pronunciation: "yún", ipa: "yn˧˥", meaning: "Nuvola", type: "base", pos: "noun" },
            { id: "n_zh_ext_27", lang: "zh", level: 2, word: "雨", pronunciation: "yǔ", ipa: "y˨˩˦", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "n_zh_ext_28", lang: "zh", level: 2, word: "雾", pronunciation: "wù", ipa: "u˥˩", meaning: "Nebbia", type: "base", pos: "noun" },
            { id: "n_zh_ext_29", lang: "zh", level: 2, word: "冰", pronunciation: "bīng", ipa: "piŋ˥", meaning: "Ghiaccio", type: "base", pos: "noun" },
            { id: "n_zh_ext_30", lang: "zh", level: 3, word: "气候", pronunciation: "qìhòu", ipa: "tɕʰi˥˩ xoʊ̯˥˩", meaning: "Clima", type: "base", pos: "noun" },
            { id: "n_zh_ext_31", lang: "zh", level: 2, word: "动物", pronunciation: "dòngwù", ipa: "tʊŋ˥˩ u˥˩", meaning: "Animale", type: "base", pos: "noun" },
            { id: "n_zh_ext_32", lang: "zh", level: 3, word: "野生", pronunciation: "yěshēng", ipa: "jɛ˨˩˦ ʂəŋ˥", meaning: "Selvatico", type: "base", pos: "adj" },
            { id: "n_zh_ext_33", lang: "zh", level: 2, word: "鸟", pronunciation: "niǎo", ipa: "njɑʊ̯˨˩˦", meaning: "Uccello", type: "base", pos: "noun" },
            { id: "n_zh_ext_34", lang: "zh", level: 2, word: "鱼", pronunciation: "yú", ipa: "y˧˥", meaning: "Pesce", type: "base", pos: "noun" },
            { id: "n_zh_ext_35", lang: "zh", level: 3, word: "昆虫", pronunciation: "kūnchóng", ipa: "kʰwən˥ ʈʂʰʊŋ˧˥", meaning: "Insetto", type: "base", pos: "noun" },
            { id: "n_zh_ext_36", lang: "zh", level: 3, word: "哺乳动物", pronunciation: "bǔrǔ dòngwù", ipa: "pu˨˩˦ ʐu˨˩˦ tʊŋ˥˩ u˥˩", meaning: "Mammifero", type: "base", pos: "noun" },
            { id: "n_zh_ext_37", lang: "zh", level: 3, word: "爬行动物", pronunciation: "páxíng dòngwù", ipa: "pʰa˧˥ ɕiŋ˧˥ tʊŋ˥˩ u˥˩", meaning: "Rettile", type: "base", pos: "noun" },
            { id: "n_zh_ext_38", lang: "zh", level: 3, word: "物种", pronunciation: "wùzhǒng", ipa: "u˥˩ ʈʂʊŋ˨˩˦", meaning: "Specie", type: "base", pos: "noun" },
            { id: "n_zh_ext_39", lang: "zh", level: 2, word: "鸟巢", pronunciation: "niǎocháo", ipa: "njɑʊ̯˨˩˦ ʈʂʰɑʊ̯˧˥", meaning: "Nido", type: "base", pos: "noun" },
            { id: "n_zh_ext_40", lang: "zh", level: 2, word: "脚印", pronunciation: "jiǎoyìn", ipa: "tɕjɑʊ̯˨˩˦ in˥˩", meaning: "Impronta", type: "base", pos: "noun" },
            { id: "n_zh_ext_41", lang: "zh", level: 3, word: "环境", pronunciation: "huánjìng", ipa: "xwan˧˥ tɕiŋ˥˩", meaning: "Ambiente", type: "base", pos: "noun" },
            { id: "n_zh_ext_42", lang: "zh", level: 3, word: "大自然", pronunciation: "dàzìrán", ipa: "ta˥˩ dz̩˥˩ ʐan˧˥", meaning: "Natura", type: "base", pos: "noun" },
            { id: "n_zh_ext_43", lang: "zh", level: 3, word: "污染", pronunciation: "wūrǎn", ipa: "u˥ ʐan˨˩˦", meaning: "Inquinamento", type: "base", pos: "noun" },
            { id: "n_zh_ext_44", lang: "zh", level: 3, word: "保护", pronunciation: "bǎohù", ipa: "pɑʊ̯˨˩˦ xu˥˩", meaning: "Protezione / Tutela", type: "base", pos: "noun" },
            { id: "n_zh_ext_45", lang: "zh", level: 2, word: "小径", pronunciation: "xiǎojìng", ipa: "ɕjɑʊ̯˨˩˦ tɕiŋ˥˩", meaning: "Sentiero", type: "base", pos: "place" }
        ]
    },

    "natura_ja": {
        title: "Natura (Giapponese)",
        tags: ["natura", "ja"],
        cards: [
            // --- VECCHIE CARTE AGGIORNATE ---
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", ipa: "kawa", meaning: "Fiume", type: "base", pos: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", ipa: "jama", meaning: "Montagna", type: "base", pos: "place" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", ipa: "moɾi", meaning: "Foresta", type: "base", requires: ["rad_albero_ja"], pos: "place" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", ipa: "kazaɴ", meaning: "Vulcano", type: "derivato", requires: ["rad_fuoco_ja", "ja2"], pos: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", ipa: "hana", meaning: "Fiore", type: "base", pos: "noun" },
            { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", ipa: "kɯmo", meaning: "Nuvola", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" },
            
            // --- NUOVE CARTE ---
            { id: "n_ja_ext_1", lang: "ja", level: 2, word: "丘", pronunciation: "おか", ipa: "oka", meaning: "Collina", type: "base", pos: "place" },
            { id: "n_ja_ext_2", lang: "ja", level: 2, word: "谷", pronunciation: "たに", ipa: "tani", meaning: "Valle", type: "base", pos: "place" },
            { id: "n_ja_ext_3", lang: "ja", level: 2, word: "湖", pronunciation: "みずうみ", ipa: "mizɯːmi", meaning: "Lago", type: "base", pos: "place" },
            { id: "n_ja_ext_4", lang: "ja", level: 2, word: "海", pronunciation: "うみ", ipa: "ɯmi", meaning: "Mare", type: "base", pos: "place" },
            { id: "n_ja_ext_5", lang: "ja", level: 2, word: "ビーチ / 浜辺", pronunciation: "びーち / はまべ", ipa: "biːtɕi / hamabe", meaning: "Spiaggia", type: "base", pos: "place" },
            { id: "n_ja_ext_6", lang: "ja", level: 2, word: "島", pronunciation: "しま", ipa: "ɕima", meaning: "Isola", type: "base", pos: "place" },
            { id: "n_ja_ext_7", lang: "ja", level: 3, word: "砂漠", pronunciation: "さばく", ipa: "sabakɯ", meaning: "Deserto", type: "base", pos: "place" },
            { id: "n_ja_ext_8", lang: "ja", level: 3, word: "滝", pronunciation: "たき", ipa: "taki", meaning: "Cascata", type: "base", pos: "place" },
            { id: "n_ja_ext_9", lang: "ja", level: 3, word: "洞窟", pronunciation: "どうくつ", ipa: "doːkɯtsɯ", meaning: "Grotta", type: "base", pos: "place" },
            { id: "n_ja_ext_10", lang: "ja", level: 3, word: "地平線", pronunciation: "ちへいせん", ipa: "tɕiheiseɴ", meaning: "Orizzonte", type: "base", pos: "noun" },
            { id: "n_ja_ext_11", lang: "ja", level: 1, word: "土", pronunciation: "つち", ipa: "tsɯtɕi", meaning: "Terra (Suolo)", type: "base", pos: "noun" },
            { id: "n_ja_ext_12", lang: "ja", level: 2, word: "石", pronunciation: "いし", ipa: "iɕi", meaning: "Sasso / Pietra", type: "base", pos: "noun" },
            { id: "n_ja_ext_13", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "ki", meaning: "Albero", type: "base", pos: "noun" },
            { id: "n_ja_ext_14", lang: "ja", level: 3, word: "ジャングル", pronunciation: "じゃんぐる", ipa: "dʑaŋɡɯɾɯ", meaning: "Giungla", type: "base", pos: "place" },
            { id: "n_ja_ext_15", lang: "ja", level: 2, word: "植物", pronunciation: "しょくぶつ", ipa: "ɕokɯbɯtsɯ", meaning: "Pianta", type: "base", pos: "noun" },
            { id: "n_ja_ext_16", lang: "ja", level: 2, word: "草", pronunciation: "くさ", ipa: "kɯsa", meaning: "Erba", type: "base", pos: "noun" },
            { id: "n_ja_ext_17", lang: "ja", level: 2, word: "葉", pronunciation: "は", ipa: "ha", meaning: "Foglia", type: "base", pos: "noun" },
            { id: "n_ja_ext_18", lang: "ja", level: 2, word: "枝", pronunciation: "えだ", ipa: "eda", meaning: "Ramo", type: "base", pos: "noun" },
            { id: "n_ja_ext_19", lang: "ja", level: 2, word: "根", pronunciation: "ね", ipa: "ne", meaning: "Radice", type: "base", pos: "noun" },
            { id: "n_ja_ext_20", lang: "ja", level: 2, word: "幹", pronunciation: "みき", ipa: "miki", meaning: "Tronco", type: "base", pos: "noun" },
            { id: "n_ja_ext_21", lang: "ja", level: 2, word: "種", pronunciation: "たね", ipa: "tane", meaning: "Seme", type: "base", pos: "noun" },
            { id: "n_ja_ext_22", lang: "ja", level: 2, word: "果物", pronunciation: "くだもの", ipa: "kɯdamono", meaning: "Frutto", type: "base", pos: "noun" },
            { id: "n_ja_ext_23", lang: "ja", level: 2, word: "木材", pronunciation: "もくざい", ipa: "mokɯzai", meaning: "Legno", type: "base", pos: "noun" },
            { id: "n_ja_ext_24", lang: "ja", level: 1, word: "太陽", pronunciation: "たいよう", ipa: "taijoː", meaning: "Sole", type: "base", pos: "noun" },
            { id: "n_ja_ext_25", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "tsɯki", meaning: "Luna", type: "base", pos: "noun" },
            { id: "n_ja_ext_26", lang: "ja", level: 2, word: "星", pronunciation: "ほし", ipa: "hoɕi", meaning: "Stelle", type: "base", pos: "noun" },
            { id: "n_ja_ext_27", lang: "ja", level: 2, word: "空", pronunciation: "そら", ipa: "soɾa", meaning: "Cielo", type: "base", pos: "place" },
            { id: "n_ja_ext_28", lang: "ja", level: 2, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "n_ja_ext_29", lang: "ja", level: 2, word: "雪", pronunciation: "ゆき", ipa: "jɯki", meaning: "Neve", type: "base", pos: "noun" },
            { id: "n_ja_ext_30", lang: "ja", level: 2, word: "風", pronunciation: "かぜ", ipa: "kaze", meaning: "Vento", type: "base", pos: "noun" },
            { id: "n_ja_ext_31", lang: "ja", level: 3, word: "嵐", pronunciation: "あらし", ipa: "aɾaɕi", meaning: "Tempesta", type: "base", pos: "noun" },
            { id: "n_ja_ext_32", lang: "ja", level: 2, word: "霧", pronunciation: "きり", ipa: "kiɾi", meaning: "Nebbia", type: "base", pos: "noun" },
            { id: "n_ja_ext_33", lang: "ja", level: 2, word: "氷", pronunciation: "こおり", ipa: "koːɾi", meaning: "Ghiaccio", type: "base", pos: "noun" },
            { id: "n_ja_ext_34", lang: "ja", level: 3, word: "気候", pronunciation: "きこう", ipa: "kikoː", meaning: "Clima", type: "base", pos: "noun" },
            { id: "n_ja_ext_35", lang: "ja", level: 2, word: "動物", pronunciation: "どうぶつ", ipa: "doːbɯtsɯ", meaning: "Animale", type: "base", pos: "noun" },
            { id: "n_ja_ext_36", lang: "ja", level: 3, word: "野生の", pronunciation: "やせいの", ipa: "yaseino", meaning: "Selvatico", type: "base", pos: "adj" },
            { id: "n_ja_ext_37", lang: "ja", level: 2, word: "鳥", pronunciation: "とり", ipa: "toɾi", meaning: "Uccello", type: "base", pos: "noun" },
            { id: "n_ja_ext_38", lang: "ja", level: 2, word: "魚", pronunciation: "さかな", ipa: "sakana", meaning: "Pesce", type: "base", pos: "noun" },
            { id: "n_ja_ext_39", lang: "ja", level: 2, word: "虫", pronunciation: "むし", ipa: "mɯɕi", meaning: "Insetto", type: "base", pos: "noun" },
            { id: "n_ja_ext_40", lang: "ja", level: 3, word: "哺乳類", pronunciation: "ほにゅうるい", ipa: "honjɯːɾɯi", meaning: "Mammifero", type: "base", pos: "noun" },
            { id: "n_ja_ext_41", lang: "ja", level: 3, word: "爬虫類", pronunciation: "はちゅうるい", ipa: "hatɕɯːɾɯi", meaning: "Rettile", type: "base", pos: "noun" },
            { id: "n_ja_ext_42", lang: "ja", level: 3, word: "種", pronunciation: "しゅ", ipa: "ɕɯ", meaning: "Specie", type: "base", pos: "noun" },
            { id: "n_ja_ext_43", lang: "ja", level: 2, word: "巣", pronunciation: "す", ipa: "sɯ", meaning: "Nido", type: "base", pos: "noun" },
            { id: "n_ja_ext_44", lang: "ja", level: 3, word: "足跡", pronunciation: "あしあと", ipa: "aɕiato", meaning: "Impronta", type: "base", pos: "noun" },
            { id: "n_ja_ext_45", lang: "ja", level: 3, word: "環境", pronunciation: "かんきょう", ipa: "kaŋkjoː", meaning: "Ambiente", type: "base", pos: "noun" },
            { id: "n_ja_ext_46", lang: "ja", level: 3, word: "自然", pronunciation: "しぜん", ipa: "ɕizeɴ", meaning: "Natura", type: "base", pos: "noun" },
            { id: "n_ja_ext_47", lang: "ja", level: 3, word: "汚染", pronunciation: "おせん", ipa: "oseɴ", meaning: "Inquinamento", type: "base", pos: "noun" },
            { id: "n_ja_ext_48", lang: "ja", level: 3, word: "保護", pronunciation: "ほご", ipa: "hoɡo", meaning: "Protezione", type: "base", pos: "noun" },
            { id: "n_ja_ext_49", lang: "ja", level: 2, word: "小道", pronunciation: "こみち", ipa: "komitɕi", meaning: "Sentiero", type: "base", pos: "place" }
        ]
    },

    "natura_ar": {
        title: "Natura (Arabo)",
        tags: ["natura", "ar"],
        cards: [
            // --- VECCHIE CARTE AGGIORNATE ---
            { id: "ar12", lang: "ar", level: 2, word: "أرض / تربة", pronunciation: "Arḍ / Turba", ipa: "ardˤ / ˈturba", meaning: "Terra (Suolo)", type: "derivato", requires: ["root_ard"], pos: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شمس", pronunciation: "Shams", ipa: "ʃams", meaning: "Sole", type: "derivato", requires: ["root_shms"], pos: "noun" },
            { id: "ar15", lang: "ar", level: 2, word: "قمر", pronunciation: "Qamar", ipa: "ˈqamar", meaning: "Luna", type: "derivato", requires: ["root_qmr"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بحر / محيط", pronunciation: "Baḥr / Muḥīṭ", ipa: "baħr / muˈħiːtˤ", meaning: "Mare / Oceano", type: "derivato", requires: ["root_bhr"], pos: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جبل", pronunciation: "Jabal", ipa: "ˈdʒabal", meaning: "Montagna", type: "derivato", requires: ["root_jbl"], pos: "place" },
            { id: "ar23", lang: "ar", level: 3, word: "شجرة", pronunciation: "Shajara", ipa: "ˈʃadʒara", meaning: "Albero", type: "derivato", requires: ["root_shjr"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غابة", pronunciation: "Ghāba", ipa: "ˈɣaːba", meaning: "Foresta", type: "derivato", requires: ["ar23"], pos: "place" },

            // --- NUOVE CARTE ---
            { id: "n_ar_ext_1", lang: "ar", level: 2, word: "تلة", pronunciation: "Talla", ipa: "ˈtalla", meaning: "Collina", type: "base", pos: "place" },
            { id: "n_ar_ext_2", lang: "ar", level: 2, word: "وادي", pronunciation: "Wādī", ipa: "ˈwaːdiː", meaning: "Valle", type: "base", pos: "place" },
            { id: "n_ar_ext_3", lang: "ar", level: 2, word: "نهر", pronunciation: "Nahr", ipa: "nahr", meaning: "Fiume", type: "base", pos: "place" },
            { id: "n_ar_ext_4", lang: "ar", level: 2, word: "بحيرة", pronunciation: "Buḥayra", ipa: "buˈħajra", meaning: "Lago", type: "base", pos: "place" },
            { id: "n_ar_ext_5", lang: "ar", level: 2, word: "شاطئ", pronunciation: "Shāṭi'", ipa: "ˈʃaːtˤiʔ", meaning: "Spiaggia", type: "base", pos: "place" },
            { id: "n_ar_ext_6", lang: "ar", level: 2, word: "جزيرة", pronunciation: "Jazīra", ipa: "dʒaˈziːra", meaning: "Isola", type: "base", pos: "place" },
            { id: "n_ar_ext_7", lang: "ar", level: 3, word: "صحراء", pronunciation: "Ṣaḥrā'", ipa: "sˤaħˈraːʔ", meaning: "Deserto", type: "base", pos: "place" },
            { id: "n_ar_ext_8", lang: "ar", level: 3, word: "شلال", pronunciation: "Shallāl", ipa: "ʃalˈlaːl", meaning: "Cascata", type: "base", pos: "place" },
            { id: "n_ar_ext_9", lang: "ar", level: 3, word: "كهف", pronunciation: "Kahf", ipa: "kahf", meaning: "Grotta", type: "base", pos: "place" },
            { id: "n_ar_ext_10", lang: "ar", level: 3, word: "بركان", pronunciation: "Burkān", ipa: "burˈkaːn", meaning: "Vulcano", type: "base", pos: "place" },
            { id: "n_ar_ext_11", lang: "ar", level: 3, word: "أفق", pronunciation: "Ufuq", ipa: "ˈufuq", meaning: "Orizzonte", type: "base", pos: "noun" },
            { id: "n_ar_ext_12", lang: "ar", level: 2, word: "صخرة", pronunciation: "Ṣakhra", ipa: "ˈsˤaxra", meaning: "Sasso / Pietra", type: "base", pos: "noun" },
            { id: "n_ar_ext_13", lang: "ar", level: 3, word: "أدغال", pronunciation: "Adghāl", ipa: "ʔadˈɣaːl", meaning: "Giungla", type: "base", pos: "place" },
            { id: "n_ar_ext_14", lang: "ar", level: 2, word: "نبات", pronunciation: "Nabāt", ipa: "naˈbaːt", meaning: "Pianta", type: "base", pos: "noun" },
            { id: "n_ar_ext_15", lang: "ar", level: 2, word: "زهرة", pronunciation: "Zahra", ipa: "ˈzahra", meaning: "Fiore", type: "base", pos: "noun" },
            { id: "n_ar_ext_16", lang: "ar", level: 2, word: "عشب", pronunciation: "'Ushb", ipa: "ʕuʃb", meaning: "Erba", type: "base", pos: "noun" },
            { id: "n_ar_ext_17", lang: "ar", level: 2, word: "ورقة", pronunciation: "Waraqa", ipa: "ˈwaraqa", meaning: "Foglia", type: "base", pos: "noun" },
            { id: "n_ar_ext_18", lang: "ar", level: 2, word: "غصن", pronunciation: "Ghuṣn", ipa: "ɣusˤn", meaning: "Ramo", type: "base", pos: "noun" },
            { id: "n_ar_ext_19", lang: "ar", level: 2, word: "جذر", pronunciation: "Jidhr", ipa: "dʒiðr", meaning: "Radice", type: "base", pos: "noun" },
            { id: "n_ar_ext_20", lang: "ar", level: 2, word: "جذع", pronunciation: "Jidh'", ipa: "dʒiðʕ", meaning: "Tronco", type: "base", pos: "noun" },
            { id: "n_ar_ext_21", lang: "ar", level: 2, word: "بذرة", pronunciation: "Bidhra", ipa: "ˈbiðra", meaning: "Seme", type: "base", pos: "noun" },
            { id: "n_ar_ext_22", lang: "ar", level: 2, word: "فاكهة", pronunciation: "Fākiha", ipa: "ˈfaːkiha", meaning: "Frutto", type: "base", pos: "noun" },
            { id: "n_ar_ext_23", lang: "ar", level: 2, word: "خشب", pronunciation: "Khashab", ipa: "ˈxaʃab", meaning: "Legno", type: "base", pos: "noun" },
            { id: "n_ar_ext_24", lang: "ar", level: 2, word: "نجوم", pronunciation: "Nujūm", ipa: "nuˈdʒuːm", meaning: "Stelle", type: "base", pos: "noun" },
            { id: "n_ar_ext_25", lang: "ar", level: 2, word: "سماء", pronunciation: "Samā'", ipa: "saˈmaːʔ", meaning: "Cielo", type: "base", pos: "place" },
            { id: "n_ar_ext_26", lang: "ar", level: 2, word: "سحابة", pronunciation: "Saḥāba", ipa: "saˈħaːba", meaning: "Nuvola", type: "base", pos: "noun" },
            { id: "n_ar_ext_27", lang: "ar", level: 2, word: "مطر", pronunciation: "Maṭar", ipa: "ˈmatˤar", meaning: "Pioggia", type: "base", pos: "noun" },
            { id: "n_ar_ext_28", lang: "ar", level: 2, word: "ثلج", pronunciation: "Thalj", ipa: "θaldʒ", meaning: "Neve", type: "base", pos: "noun" },
            { id: "n_ar_ext_29", lang: "ar", level: 2, word: "رياح", pronunciation: "Riyāḥ", ipa: "riˈjaːħ", meaning: "Vento", type: "base", pos: "noun" },
            { id: "n_ar_ext_30", lang: "ar", level: 3, word: "عاصفة", pronunciation: "'Āṣifa", ipa: "ˈʕaːsˤifa", meaning: "Tempesta", type: "base", pos: "noun" },
            { id: "n_ar_ext_31", lang: "ar", level: 2, word: "ضباب", pronunciation: "Ḍabāb", ipa: "dˤaˈbaːb", meaning: "Nebbia", type: "base", pos: "noun" },
            { id: "n_ar_ext_32", lang: "ar", level: 2, word: "جليد", pronunciation: "Jalīd", ipa: "dʒaˈliːd", meaning: "Ghiaccio", type: "base", pos: "noun" },
            { id: "n_ar_ext_33", lang: "ar", level: 3, word: "مناخ", pronunciation: "Munākh", ipa: "muˈnaːx", meaning: "Clima", type: "base", pos: "noun" },
            { id: "n_ar_ext_34", lang: "ar", level: 2, word: "حيوان", pronunciation: "Ḥayawān", ipa: "ħajaˈwaːn", meaning: "Animale", type: "base", pos: "noun" },
            { id: "n_ar_ext_35", lang: "ar", level: 3, word: "بري", pronunciation: "Barrī", ipa: "ˈbarriː", meaning: "Selvatico", type: "base", pos: "adj" },
            { id: "n_ar_ext_36", lang: "ar", level: 2, word: "طائر", pronunciation: "Ṭā'ir", ipa: "ˈtˤaːʔir", meaning: "Uccello", type: "base", pos: "noun" },
            { id: "n_ar_ext_37", lang: "ar", level: 2, word: "سمكة", pronunciation: "Samaka", ipa: "ˈsamaka", meaning: "Pesce", type: "base", pos: "noun" },
            { id: "n_ar_ext_38", lang: "ar", level: 3, word: "حشرة", pronunciation: "Ḥashara", ipa: "ˈħaʃara", meaning: "Insetto", type: "base", pos: "noun" },
            { id: "n_ar_ext_39", lang: "ar", level: 3, word: "ثدييات", pronunciation: "Thadiyyāt", ipa: "θadijˈjaːt", meaning: "Mammifero", type: "base", pos: "noun" },
            { id: "n_ar_ext_40", lang: "ar", level: 3, word: "زواحف", pronunciation: "Zawāḥif", ipa: "zaˈwaːħif", meaning: "Rettile", type: "base", pos: "noun" },
            { id: "n_ar_ext_41", lang: "ar", level: 3, word: "نوع / فصيلة", pronunciation: "Naw' / Faṣīla", ipa: "nawʕ / faˈsˤiːla", meaning: "Specie", type: "base", pos: "noun" },
            { id: "n_ar_ext_42", lang: "ar", level: 2, word: "عش", pronunciation: "'Ushsh", ipa: "ʕuʃʃ", meaning: "Nido", type: "base", pos: "noun" },
            { id: "n_ar_ext_43", lang: "ar", level: 2, word: "أثر", pronunciation: "Athar", ipa: "ˈʔaθar", meaning: "Impronta", type: "base", pos: "noun" },
            { id: "n_ar_ext_44", lang: "ar", level: 3, word: "بيئة", pronunciation: "Bī'a", ipa: "ˈbiːʔa", meaning: "Ambiente", type: "base", pos: "noun" },
            { id: "n_ar_ext_45", lang: "ar", level: 3, word: "طبيعة", pronunciation: "Ṭabī'a", ipa: "tˤaˈbiːʕa", meaning: "Natura", type: "base", pos: "noun" },
            { id: "n_ar_ext_46", lang: "ar", level: 3, word: "تلوث", pronunciation: "Talawwuth", ipa: "taˈlawwuθ", meaning: "Inquinamento", type: "base", pos: "noun" },
            { id: "n_ar_ext_47", lang: "ar", level: 3, word: "حماية", pronunciation: "Ḥimāya", ipa: "ħiˈmaːja", meaning: "Protezione", type: "base", pos: "noun" },
            { id: "n_ar_ext_48", lang: "ar", level: 2, word: "ممر", pronunciation: "Mamarr", ipa: "maˈmarr", meaning: "Sentiero", type: "base", pos: "place" }
        ]
    },

    // ==========================================
    // 4. VIAGGIO & CIBO & GRAMMATICA
    // ==========================================
    "viaggio_zh": {
        title: "Viaggio (Cinese)", 
        tags: ["viaggio", "zh"],
        cards: [
            // --- VECCHIE CARTE (Preservate per le Frasi) ---
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", ipa: "t͡ɕi⁵⁵", meaning: "Macchina (Meccanismo)", type: "base", requires: ["rad_albero"], pos: "noun" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", ipa: "feɪ̯⁵⁵ t͡ɕi⁵⁵", meaning: "Aereo", type: "base", pos: "noun" },
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", ipa: "xwɔ²¹⁴ t͡ʂʰɤ⁵⁵", meaning: "Treno", type: "derivato", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" },
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", ipa: "t͡ʂʰɤ⁵⁵ t͡ʂan⁵¹", meaning: "Stazione", type: "derivato", requires: ["rad_veicolo"], pos: "place" },
            { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", ipa: "mən³⁵ kʰoʊ̯²¹⁴", meaning: "Ingresso / Porta", type: "derivato", requires: ["rad_porta", "rad_bocca"], pos: "place" },

            // --- NUOVE CARTE ESTESE (ID Nuovi) ---
            { id: "v_zh_ext_1", lang: "zh", level: 2, word: "交通", pronunciation: "jiāotōng", ipa: "tɕjɑʊ̯˥ tʰʊŋ˥", meaning: "Trasporti", type: "base", pos: "noun" },
            { id: "v_zh_ext_2", lang: "zh", level: 2, word: "机场", pronunciation: "jīchǎng", ipa: "tɕi˥ ʈʂʰɑŋ˨˩˦", meaning: "Aeroporto", type: "base", pos: "place" },
            { id: "v_zh_ext_3", lang: "zh", level: 2, word: "航班", pronunciation: "hángbān", ipa: "xɑŋ˧˥ ban˥", meaning: "Volo", type: "base", pos: "noun" },
            { id: "v_zh_ext_4", lang: "zh", level: 2, word: "出发", pronunciation: "chūfā", ipa: "ʈʂʰu˥ fa˥", meaning: "Partenza", type: "base", pos: "verb" },
            { id: "v_zh_ext_5", lang: "zh", level: 2, word: "到达", pronunciation: "dàodá", ipa: "tɑʊ̯˥˩ da˧˥", meaning: "Arrivo", type: "base", pos: "verb" },
            { id: "v_zh_ext_6", lang: "zh", level: 2, word: "晚点", pronunciation: "wǎndiǎn", ipa: "wan˨˩˦ djɛn˨˩˦", meaning: "Ritardo", type: "base", pos: "noun" },
            { id: "v_zh_ext_7", lang: "zh", level: 2, word: "票", pronunciation: "piào", ipa: "pʰjɑʊ̯˥˩", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_zh_ext_8", lang: "zh", level: 2, word: "护照", pronunciation: "hùzhào", ipa: "xu˥˩ ʈʂɑʊ̯˥˩", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_zh_ext_9", lang: "zh", level: 2, word: "行李", pronunciation: "xíngli", ipa: "ɕiŋ˧˥ li", meaning: "Bagaglio", type: "base", pos: "noun" },
            // Treno e Stazione rimossi qui perché usano gli ID vecchi sopra
            { id: "v_zh_ext_12", lang: "zh", level: 2, word: "住宿", pronunciation: "zhùsù", ipa: "ʈʂu˥˩ su˥˩", meaning: "Alloggio", type: "base", pos: "noun" },
            { id: "v_zh_ext_13", lang: "zh", level: 2, word: "预订", pronunciation: "yùdìng", ipa: "y˥˩ diŋ˥˩", meaning: "Prenotazione", type: "base", pos: "verb" },
            { id: "v_zh_ext_14", lang: "zh", level: 2, word: "酒店", pronunciation: "jiǔdiàn", ipa: "tɕjoʊ̯˨˩˦ djɛn˥˩", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_zh_ext_15", lang: "zh", level: 2, word: "前台", pronunciation: "qiántái", ipa: "tɕʰjɛn˧˥ tʰaɪ̯˧˥", meaning: "Reception", type: "base", pos: "place" },
            { id: "v_zh_ext_16", lang: "zh", level: 2, word: "钥匙", pronunciation: "yàoshi", ipa: "jɑʊ̯˥˩ ʂz̩", meaning: "Chiave", type: "base", pos: "noun" },
            { id: "v_zh_ext_17", lang: "zh", level: 2, word: "房间", pronunciation: "fángjiān", ipa: "fɑŋ˧˥ tɕjɛn˥", meaning: "Camera", type: "base", pos: "place" },
            { id: "v_zh_ext_18", lang: "zh", level: 2, word: "入住", pronunciation: "rùzhù", ipa: "ʐu˥˩ ʈʂu˥˩", meaning: "Check-in", type: "base", pos: "verb" },
            { id: "v_zh_ext_19", lang: "zh", level: 2, word: "退房", pronunciation: "tuìfáng", ipa: "tʰweɪ̯˥˩ fɑŋ˧˥", meaning: "Check-out", type: "base", pos: "verb" },
            { id: "v_zh_ext_20", lang: "zh", level: 2, word: "毛巾", pronunciation: "máojīn", ipa: "mɑʊ̯˧˥ tɕin˥", meaning: "Asciugamani", type: "base", pos: "noun" },
            { id: "v_zh_ext_21", lang: "zh", level: 2, word: "空调", pronunciation: "kōngtiáo", ipa: "kʰʊŋ˥ tʰjɑʊ̯˧˥", meaning: "Aria condizionata", type: "base", pos: "noun" },
            { id: "v_zh_ext_22", lang: "zh", level: 2, word: "无线网", pronunciation: "wúxiànwǎng", ipa: "u˧˥ ɕjɛn˥˩ wɑŋ˨˩˦", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_zh_ext_23", lang: "zh", level: 2, word: "方向", pronunciation: "fāngxiàng", ipa: "fɑŋ˥ ɕjɑŋ˥˩", meaning: "Orientamento / Direzioni", type: "base", pos: "noun" },
            { id: "v_zh_ext_24", lang: "zh", level: 2, word: "地图", pronunciation: "dìtú", ipa: "ti˥˩ tʰu˧˥", meaning: "Mappa", type: "base", pos: "noun" },
            { id: "v_zh_ext_25", lang: "zh", level: 2, word: "市中心", pronunciation: "shìzhōngxīn", ipa: "ʂʐ̩˥˩ ʈʂʊŋ˥ ɕin˥", meaning: "Centro città", type: "base", pos: "place" },
            { id: "v_zh_ext_26", lang: "zh", level: 2, word: "右边", pronunciation: "yòubian", ipa: "joʊ̯˥˩ bjɛn", meaning: "Destra", type: "base", pos: "noun" },
            { id: "v_zh_ext_27", lang: "zh", level: 2, word: "左边", pronunciation: "zuǒbian", ipa: "tswɔ˨˩˦ bjɛn", meaning: "Sinistra", type: "base", pos: "noun" },
            { id: "v_zh_ext_28", lang: "zh", level: 2, word: "直走", pronunciation: "zhízǒu", ipa: "ʈʂʐ̩˧˥ zoʊ̯˨˩˦", meaning: "Dritto", type: "base", pos: "verb" },
            { id: "v_zh_ext_29", lang: "zh", level: 2, word: "近", pronunciation: "jìn", ipa: "tɕin˥˩", meaning: "Vicino", type: "base", pos: "adj" },
            { id: "v_zh_ext_30", lang: "zh", level: 2, word: "远", pronunciation: "yuǎn", ipa: "ɥɛn˨˩˦", meaning: "Lontano", type: "base", pos: "adj" },
            { id: "v_zh_ext_31", lang: "zh", level: 2, word: "地铁", pronunciation: "dìtiě", ipa: "ti˥˩ tʰjɛ˨˩˦", meaning: "Metropolitana", type: "base", pos: "noun" },
            { id: "v_zh_ext_32", lang: "zh", level: 2, word: "出租车", pronunciation: "chūzūchē", ipa: "ʈʂʰu˥ tsu˥ ʈʂʰɤ˥", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_zh_ext_33", lang: "zh", level: 2, word: "站", pronunciation: "zhàn", ipa: "ʈʂan˥˩", meaning: "Fermata", type: "base", pos: "place" },
            { id: "v_zh_ext_34", lang: "zh", level: 2, word: "餐饮", pronunciation: "cānyǐn", ipa: "tsʰan˥ in˨˩˦", meaning: "Cibo / Ristorazione", type: "base", pos: "noun" },
            { id: "v_zh_ext_35", lang: "zh", level: 2, word: "饭馆", pronunciation: "fànguǎn", ipa: "fan˥˩ kwan˨˩˦", meaning: "Ristorante", type: "base", pos: "place" },
            { id: "v_zh_ext_36", lang: "zh", level: 2, word: "菜单", pronunciation: "càidān", ipa: "tsʰaɪ̯˥˩ tan˥", meaning: "Menù", type: "base", pos: "noun" },
            { id: "v_zh_ext_37", lang: "zh", level: 2, word: "买单", pronunciation: "mǎidān", ipa: "maɪ̯˨˩˦ tan˥", meaning: "Conto", type: "base", pos: "verb" },
            { id: "v_zh_ext_38", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯˨˩˦", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "v_zh_ext_39", lang: "zh", level: 2, word: "早餐", pronunciation: "zǎocān", ipa: "tsɑʊ̯˨˩˦ tsʰan˥", meaning: "Colazione", type: "base", pos: "noun" },
            { id: "v_zh_ext_40", lang: "zh", level: 2, word: "午餐", pronunciation: "wǔcān", ipa: "u˨˩˦ tsʰan˥", meaning: "Pranzo", type: "base", pos: "noun" },
            { id: "v_zh_ext_41", lang: "zh", level: 2, word: "晚餐", pronunciation: "wǎncān", ipa: "wan˨˩˦ tsʰan˥", meaning: "Cena", type: "base", pos: "noun" },
            { id: "v_zh_ext_42", lang: "zh", level: 2, word: "素食", pronunciation: "sùshí", ipa: "su˥˩ ʂʐ̩˧˥", meaning: "Vegetariano", type: "base", pos: "noun" },
            { id: "v_zh_ext_43", lang: "zh", level: 2, word: "好吃", pronunciation: "hǎochī", ipa: "xɑʊ̯˨˩˦ ʈʂʰʐ̩˥", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "v_zh_ext_44", lang: "zh", level: 2, word: "超市", pronunciation: "chāoshì", ipa: "ʈʂʰɑʊ̯˥ ʂʐ̩˥˩", meaning: "Supermercato", type: "base", pos: "place" },
            { id: "v_zh_ext_45", lang: "zh", level: 2, word: "紧急", pronunciation: "jǐnjí", ipa: "tɕin˨˩˦ tɕi˧˥", meaning: "Emergenze", type: "base", pos: "noun" },
            { id: "v_zh_ext_46", lang: "zh", level: 2, word: "救命", pronunciation: "jiùmìng", ipa: "tɕjoʊ̯˥˩ miŋ˥˩", meaning: "Aiuto!", type: "base", pos: "phrase" },
            { id: "v_zh_ext_47", lang: "zh", level: 2, word: "医院", pronunciation: "yīyuàn", ipa: "i˥ ɥɛn˥˩", meaning: "Ospedale", type: "base", pos: "place" },
            { id: "v_zh_ext_48", lang: "zh", level: 2, word: "药店", pronunciation: "yàodiàn", ipa: "jɑʊ̯˥˩ djɛn˥˩", meaning: "Farmacia", type: "base", pos: "place" },
            { id: "v_zh_ext_49", lang: "zh", level: 2, word: "警察", pronunciation: "jǐngchá", ipa: "tɕiŋ˨˩˦ ʈʂʰa˧˥", meaning: "Polizia", type: "base", pos: "noun" },
            { id: "v_zh_ext_50", lang: "zh", level: 2, word: "洗手间", pronunciation: "xǐshǒujiān", ipa: "ɕi˨˩˦ ʂoʊ̯˨˩˦ tɕjɛn˥", meaning: "Bagno", type: "base", pos: "place" },
            { id: "v_zh_ext_51", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "tɕʰjɛn˧˥", meaning: "Soldi", type: "base", pos: "noun" },
            { id: "v_zh_ext_52", lang: "zh", level: 2, word: "现金", pronunciation: "xiànjīn", ipa: "ɕjɛn˥˩ tɕin˥", meaning: "Contanti", type: "base", pos: "noun" },
            { id: "v_zh_ext_53", lang: "zh", level: 2, word: "多少钱", pronunciation: "duōshǎo qián", ipa: "twɔ˥ ʂɑʊ̯˨˩˦ tɕʰjɛn˧˥", meaning: "Quanto costa?", type: "base", pos: "phrase" },
            { id: "v_zh_ext_54", lang: "zh", level: 2, word: "开门", pronunciation: "kāimén", ipa: "kʰaɪ̯˥ mən˧˥", meaning: "Aperto", type: "base", pos: "adj" },
            { id: "v_zh_ext_55", lang: "zh", level: 2, word: "换钱", pronunciation: "huànqián", ipa: "xwan˥˩ tɕʰjɛn˧˥", meaning: "Cambio valuta", type: "base", pos: "verb" }
        ]
    },

   "viaggio_ja": {
        title: "Viaggio (Giapponese)", 
        tags: ["viaggio", "ja"],
        cards: [
            // --- VECCHIE CARTE (Preservate) ---
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", ipa: "ikɯ", meaning: "Andare", type: "base", pos: "verb_move" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", ipa: "eki", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", ipa: "deɴɕa", meaning: "Treno", type: "derivato", requires: ["rad_veicolo_ja"], pos: "noun" },
            { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", ipa: "iɾiɡɯt͡ɕi", meaning: "Entrata", type: "base", requires: ["rad_bocca_ja"], pos: "place" },

            // --- NUOVE CARTE ESTESE ---
            { id: "v_ja_ext_1", lang: "ja", level: 2, word: "交通", pronunciation: "こうつう", ipa: "koːtsɯː", meaning: "Trasporti", type: "base", pos: "noun" },
            { id: "v_ja_ext_2", lang: "ja", level: 2, word: "空港", pronunciation: "くうこう", ipa: "kɯːkoː", meaning: "Aeroporto", type: "base", pos: "place" },
            { id: "v_ja_ext_3", lang: "ja", level: 2, word: "フライト", pronunciation: "ふらいと", ipa: "ɸɯɾaito", meaning: "Volo", type: "base", pos: "noun" },
            { id: "v_ja_ext_4", lang: "ja", level: 2, word: "出発", pronunciation: "しゅっぱつ", ipa: "ɕɯppatsɯ", meaning: "Partenza", type: "base", pos: "verb" },
            { id: "v_ja_ext_5", lang: "ja", level: 2, word: "到着", pronunciation: "とうちゃく", ipa: "toːtɕakɯ", meaning: "Arrivo", type: "base", pos: "verb" },
            { id: "v_ja_ext_6", lang: "ja", level: 2, word: "遅延", pronunciation: "ちえん", ipa: "tɕieɴ", meaning: "Ritardo", type: "base", pos: "noun" },
            { id: "v_ja_ext_7", lang: "ja", level: 2, word: "チケット", pronunciation: "ちけっと", ipa: "tɕiketto", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_ja_ext_8", lang: "ja", level: 2, word: "パスポート", pronunciation: "ぱすぽーと", ipa: "pasɯpoːto", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_ja_ext_9", lang: "ja", level: 2, word: "荷物", pronunciation: "にもつ", ipa: "nimotsɯ", meaning: "Bagaglio", type: "base", pos: "noun" },
            // Treno (10) e Stazione (11) rimossi perché già sopra
            { id: "v_ja_ext_12", lang: "ja", level: 2, word: "宿泊", pronunciation: "しゅくはく", ipa: "ɕɯkɯhakɯ", meaning: "Alloggio", type: "base", pos: "noun" },
            { id: "v_ja_ext_13", lang: "ja", level: 2, word: "予約", pronunciation: "よやく", ipa: "yoyakɯ", meaning: "Prenotazione", type: "base", pos: "verb" },
            { id: "v_ja_ext_14", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", ipa: "hoteɾɯ", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ja_ext_15", lang: "ja", level: 2, word: "フロント", pronunciation: "ふろんと", ipa: "ɸɯɾoɴto", meaning: "Reception", type: "base", pos: "place" },
            { id: "v_ja_ext_16", lang: "ja", level: 2, word: "鍵", pronunciation: "かぎ", ipa: "kaɡi", meaning: "Chiave", type: "base", pos: "noun" },
            { id: "v_ja_ext_17", lang: "ja", level: 2, word: "部屋", pronunciation: "へや", ipa: "heya", meaning: "Camera", type: "base", pos: "place" },
            { id: "v_ja_ext_18", lang: "ja", level: 2, word: "チェックイン", pronunciation: "ちぇっくいん", ipa: "tɕekkɯiɴ", meaning: "Check-in", type: "base", pos: "verb" },
            { id: "v_ja_ext_19", lang: "ja", level: 2, word: "チェックアウト", pronunciation: "ちぇっくあうと", ipa: "tɕekkɯaɯto", meaning: "Check-out", type: "base", pos: "verb" },
            { id: "v_ja_ext_20", lang: "ja", level: 2, word: "タオル", pronunciation: "たおる", ipa: "taoɾɯ", meaning: "Asciugamani", type: "base", pos: "noun" },
            { id: "v_ja_ext_21", lang: "ja", level: 2, word: "エアコン", pronunciation: "えあこん", ipa: "eakoɴ", meaning: "Aria condizionata", type: "base", pos: "noun" },
            { id: "v_ja_ext_22", lang: "ja", level: 2, word: "Wi-Fi", pronunciation: "わいふぁい", ipa: "waiphai", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_ja_ext_23", lang: "ja", level: 2, word: "方向", pronunciation: "ほうこう", ipa: "hoːkoː", meaning: "Orientamento / Direzioni", type: "base", pos: "noun" },
            { id: "v_ja_ext_24", lang: "ja", level: 2, word: "地図", pronunciation: "ちず", ipa: "tɕizɯ", meaning: "Mappa", type: "base", pos: "noun" },
            { id: "v_ja_ext_25", lang: "ja", level: 2, word: "中心部", pronunciation: "ちゅうしんぶ", ipa: "tɕɯːɕimbɯ", meaning: "Centro città", type: "base", pos: "place" },
            { id: "v_ja_ext_26", lang: "ja", level: 2, word: "右", pronunciation: "みぎ", ipa: "miɡi", meaning: "Destra", type: "base", pos: "noun" },
            { id: "v_ja_ext_27", lang: "ja", level: 2, word: "左", pronunciation: "ひだり", ipa: "hidaɾi", meaning: "Sinistra", type: "base", pos: "noun" },
            { id: "v_ja_ext_28", lang: "ja", level: 2, word: "まっすぐ", pronunciation: "まっすぐ", ipa: "massɯɡɯ", meaning: "Dritto", type: "base", pos: "adj" }, 
            { id: "v_ja_ext_29", lang: "ja", level: 2, word: "近い", pronunciation: "ちかい", ipa: "tɕikai", meaning: "Vicino", type: "base", pos: "adj" },
            { id: "v_ja_ext_30", lang: "ja", level: 2, word: "遠い", pronunciation: "とおい", ipa: "toːi", meaning: "Lontano", type: "base", pos: "adj" },
            { id: "v_ja_ext_31", lang: "ja", level: 2, word: "地下鉄", pronunciation: "ちかてつ", ipa: "tɕikatetsɯ", meaning: "Metropolitana", type: "base", pos: "noun" },
            { id: "v_ja_ext_32", lang: "ja", level: 2, word: "タクシー", pronunciation: "たくしー", ipa: "takɯɕiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_ja_ext_33", lang: "ja", level: 2, word: "バス停", pronunciation: "ばすてい", ipa: "basɯtei", meaning: "Fermata (Bus)", type: "base", pos: "place" },
            { id: "v_ja_ext_34", lang: "ja", level: 2, word: "食事", pronunciation: "しょくじ", ipa: "ɕokɯdʑi", meaning: "Cibo / Ristorazione", type: "base", pos: "noun" },
            { id: "v_ja_ext_35", lang: "ja", level: 2, word: "レストラン", pronunciation: "れすとらん", ipa: "ɾesɯtoɾaɴ", meaning: "Ristorante", type: "base", pos: "place" },
            { id: "v_ja_ext_36", lang: "ja", level: 2, word: "メニュー", pronunciation: "めにゅー", ipa: "menjuː", meaning: "Menù", type: "base", pos: "noun" },
            { id: "v_ja_ext_37", lang: "ja", level: 2, word: "お会計", pronunciation: "おかいけい", ipa: "okaikei", meaning: "Conto", type: "base", pos: "noun" },
            { id: "v_ja_ext_38", lang: "ja", level: 1, word: "水", pronunciation: "みず", ipa: "mizɯ", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "v_ja_ext_39", lang: "ja", level: 2, word: "朝ご飯", pronunciation: "あさごはん", ipa: "asaɡohaɴ", meaning: "Colazione", type: "base", pos: "noun" },
            { id: "v_ja_ext_40", lang: "ja", level: 2, word: "昼ご飯", pronunciation: "ひるごはん", ipa: "hiɾɯɡohaɴ", meaning: "Pranzo", type: "base", pos: "noun" },
            { id: "v_ja_ext_41", lang: "ja", level: 2, word: "晩ご飯", pronunciation: "ばんごはん", ipa: "baɴɡohaɴ", meaning: "Cena", type: "base", pos: "noun" },
            { id: "v_ja_ext_42", lang: "ja", level: 2, word: "ベジタリアン", pronunciation: "べじたりあん", ipa: "bedʑitaɾiaɴ", meaning: "Vegetariano", type: "base", pos: "noun" },
            { id: "v_ja_ext_43", lang: "ja", level: 2, word: "美味しい", pronunciation: "おいしい", ipa: "oiɕiː", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "v_ja_ext_44", lang: "ja", level: 2, word: "スーパー", pronunciation: "すーぱー", ipa: "sɯːpaː", meaning: "Supermercato", type: "base", pos: "place" },
            { id: "v_ja_ext_45", lang: "ja", level: 2, word: "緊急", pronunciation: "きんきゅう", ipa: "kiŋkjuː", meaning: "Emergenze", type: "base", pos: "noun" },
            { id: "v_ja_ext_46", lang: "ja", level: 2, word: "助けて", pronunciation: "たすけて", ipa: "tasɯkete", meaning: "Aiuto!", type: "base", pos: "phrase" },
            { id: "v_ja_ext_47", lang: "ja", level: 2, word: "病院", pronunciation: "びょういん", ipa: "bjoːiɴ", meaning: "Ospedale", type: "base", pos: "place" },
            { id: "v_ja_ext_48", lang: "ja", level: 2, word: "薬局", pronunciation: "やっきょく", ipa: "jakkyokɯ", meaning: "Farmacia", type: "base", pos: "place" },
            { id: "v_ja_ext_49", lang: "ja", level: 2, word: "警察", pronunciation: "けいさつ", ipa: "keisatsɯ", meaning: "Polizia", type: "base", pos: "noun" },
            { id: "v_ja_ext_50", lang: "ja", level: 2, word: "トイレ", pronunciation: "といれ", ipa: "toiɾe", meaning: "Bagno", type: "base", pos: "place" },
            { id: "v_ja_ext_51", lang: "ja", level: 2, word: "お金", pronunciation: "おかね", ipa: "okane", meaning: "Soldi", type: "base", pos: "noun" },
            { id: "v_ja_ext_52", lang: "ja", level: 2, word: "現金", pronunciation: "げんきん", ipa: "ɡeŋkiɴ", meaning: "Contanti", type: "base", pos: "noun" },
            { id: "v_ja_ext_53", lang: "ja", level: 2, word: "いくら", pronunciation: "いくら", ipa: "ikɯɾa", meaning: "Quanto costa?", type: "base", pos: "phrase" },
            { id: "v_ja_ext_54", lang: "ja", level: 2, word: "営業中", pronunciation: "えいぎょうちゅう", ipa: "eiɡjoːtɕɯː", meaning: "Aperto (Negozio)", type: "base", pos: "adj" },
            { id: "v_ja_ext_55", lang: "ja", level: 2, word: "両替", pronunciation: "りょうがえ", ipa: "ɾjoːɡae", meaning: "Cambio valuta", type: "base", pos: "noun" }
        ]
    },

   "viaggio_ar": {
        title: "Viaggio (Arabo)", 
        tags: ["viaggio", "ar"],
        cards: [
            // --- VECCHIE CARTE (Preservate) ---
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", ipa: "safar", meaning: "Viaggio", type: "derivato", requires: ["root_sfr"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", ipa: "matˤaːr", meaning: "Aeroporto", type: "derivato", requires: ["root_tyr"], pos: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", ipa: "tˤaːʔira", meaning: "Aereo", type: "derivato", requires: ["root_tyr"], pos: "noun" },

            // --- NUOVE CARTE ESTESE ---
            { id: "v_ar_ext_1", lang: "ar", level: 2, word: "النقل", pronunciation: "An-naql", ipa: "anˈnaql", meaning: "Trasporti", type: "base", pos: "noun" },
            // Aeroporto (2) e Aereo (3) rimossi (ci sono già sopra)
            { id: "v_ar_ext_4", lang: "ar", level: 2, word: "مغادرة", pronunciation: "Mughādara", ipa: "muˈɣaːdara", meaning: "Partenza", type: "base", pos: "noun" },
            { id: "v_ar_ext_5", lang: "ar", level: 2, word: "وصول", pronunciation: "Wuṣūl", ipa: "wuˈsˤuːl", meaning: "Arrivo", type: "base", pos: "noun" },
            { id: "v_ar_ext_6", lang: "ar", level: 2, word: "تأخير", pronunciation: "Ta'khīr", ipa: "taʔˈxiːr", meaning: "Ritardo", type: "base", pos: "noun" },
            { id: "v_ar_ext_7", lang: "ar", level: 2, word: "تذكرة", pronunciation: "Tadhkira", ipa: "ˈtaðkira", meaning: "Biglietto", type: "base", pos: "noun" },
            { id: "v_ar_ext_8", lang: "ar", level: 2, word: "جواز سفر", pronunciation: "Jawāz safar", ipa: "dʒaˈwaːz ˈsafar", meaning: "Passaporto", type: "base", pos: "noun" },
            { id: "v_ar_ext_9", lang: "ar", level: 2, word: "حقيبة", pronunciation: "Ḥaqība", ipa: "ħaˈqiːba", meaning: "Bagaglio", type: "base", pos: "noun" },
            { id: "v_ar_ext_10", lang: "ar", level: 2, word: "قطار", pronunciation: "Qiṭār", ipa: "qiˈtˤɑːr", meaning: "Treno", type: "base", pos: "noun" },
            { id: "v_ar_ext_11", lang: "ar", level: 2, word: "محطة", pronunciation: "Maḥaṭṭa", ipa: "maˈħatˤtˤa", meaning: "Stazione", type: "base", pos: "place" },
            { id: "v_ar_ext_12", lang: "ar", level: 2, word: "إقامة", pronunciation: "Iqāma", ipa: "iˈqaːma", meaning: "Alloggio", type: "base", pos: "noun" },
            { id: "v_ar_ext_13", lang: "ar", level: 2, word: "حجز", pronunciation: "Ḥajz", ipa: "ħadʒz", meaning: "Prenotazione", type: "base", pos: "noun" },
            { id: "v_ar_ext_14", lang: "ar", level: 2, word: "فندق", pronunciation: "Funduq", ipa: "ˈfunduq", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ar_ext_15", lang: "ar", level: 2, word: "استقبال", pronunciation: "Istiqbāl", ipa: "istiqˈbaːl", meaning: "Reception", type: "base", pos: "place" },
            { id: "v_ar_ext_16", lang: "ar", level: 2, word: "مفتاح", pronunciation: "Miftāḥ", ipa: "mifˈtaːħ", meaning: "Chiave", type: "base", pos: "noun" },
            { id: "v_ar_ext_17", lang: "ar", level: 2, word: "غرفة", pronunciation: "Ghurfa", ipa: "ˈɣurfa", meaning: "Camera", type: "base", pos: "place" },
            { id: "v_ar_ext_18", lang: "ar", level: 2, word: "تسجيل الوصول", pronunciation: "Tasjīl al-wuṣūl", ipa: "tasˈdʒiːl al wuˈsˤuːl", meaning: "Check-in", type: "base", pos: "noun" },
            { id: "v_ar_ext_19", lang: "ar", level: 2, word: "تسجيل المغادرة", pronunciation: "Tasjīl al-mughādara", ipa: "tasˈdʒiːl al muˈɣaːdara", meaning: "Check-out", type: "base", pos: "noun" },
            { id: "v_ar_ext_20", lang: "ar", level: 2, word: "منشفة", pronunciation: "Minshafa", ipa: "minˈʃafa", meaning: "Asciugamani", type: "base", pos: "noun" },
            { id: "v_ar_ext_21", lang: "ar", level: 2, word: "مكيف هواء", pronunciation: "Mukayyif hawā'", ipa: "muˈkajjif haˈwaːʔ", meaning: "Aria condizionata", type: "base", pos: "noun" },
            { id: "v_ar_ext_22", lang: "ar", level: 2, word: "واي فاي", pronunciation: "Wāy Fāy", ipa: "waːj faːj", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_ar_ext_23", lang: "ar", level: 2, word: "اتجاهات", pronunciation: "Ittijāhāt", ipa: "ittidʒaˈhaːt", meaning: "Orientamento / Direzioni", type: "base", pos: "noun" },
            { id: "v_ar_ext_24", lang: "ar", level: 2, word: "خريطة", pronunciation: "Kharīṭa", ipa: "xaˈriːtˤa", meaning: "Mappa", type: "base", pos: "noun" },
            { id: "v_ar_ext_25", lang: "ar", level: 2, word: "وسط المدينة", pronunciation: "Wasaṭ al-madīna", ipa: "ˈwasatˤ al maˈdiːna", meaning: "Centro città", type: "base", pos: "place" },
            { id: "v_ar_ext_26", lang: "ar", level: 2, word: "يمين", pronunciation: "Yamīn", ipa: "jaˈmiːn", meaning: "Destra", type: "base", pos: "noun" },
            { id: "v_ar_ext_27", lang: "ar", level: 2, word: "يسار", pronunciation: "Yasār", ipa: "jaˈsaːr", meaning: "Sinistra", type: "base", pos: "noun" },
            { id: "v_ar_ext_28", lang: "ar", level: 2, word: "على طول / مباشرة", pronunciation: "'Alā ṭūl / Mubāshara", ipa: "ˈʕalaː tˤuːl / muˈbaːʃara", meaning: "Dritto", type: "base", pos: "noun" },
            { id: "v_ar_ext_29", lang: "ar", level: 2, word: "قريب", pronunciation: "Qarīb", ipa: "qaˈriːb", meaning: "Vicino", type: "base", pos: "adj" },
            { id: "v_ar_ext_30", lang: "ar", level: 2, word: "بعيد", pronunciation: "Ba'īd", ipa: "baˈʕiːd", meaning: "Lontano", type: "base", pos: "adj" },
            { id: "v_ar_ext_31", lang: "ar", level: 2, word: "مترو الأنفاق", pronunciation: "Mitrū al-anfāq", ipa: "ˈmitruː al ʔanˈfaːq", meaning: "Metropolitana", type: "base", pos: "noun" },
            { id: "v_ar_ext_32", lang: "ar", level: 2, word: "تاكسي", pronunciation: "Tāksī", ipa: "ˈtaːksiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_ar_ext_33", lang: "ar", level: 2, word: "موقف حافلات", pronunciation: "Mawqif ḥāfilāt", ipa: "ˈmawqif ħaːfiˈlaːt", meaning: "Fermata (Bus)", type: "base", pos: "place" },
            { id: "v_ar_ext_34", lang: "ar", level: 2, word: "طعام", pronunciation: "Ṭa'ām", ipa: "tˤaˈʕaːm", meaning: "Cibo / Ristorazione", type: "base", pos: "noun" },
            { id: "v_ar_ext_35", lang: "ar", level: 2, word: "مطعم", pronunciation: "Maṭ'am", ipa: "ˈmatˤʕam", meaning: "Ristorante", type: "base", pos: "place" },
            { id: "v_ar_ext_36", lang: "ar", level: 2, word: "قائمة الطعام", pronunciation: "Qā'imāt aṭ-ṭa'ām", ipa: "ˈqaːʔimatˤ atˤ tˤaˈʕaːm", meaning: "Menù", type: "base", pos: "noun" },
            { id: "v_ar_ext_37", lang: "ar", level: 2, word: "الحساب", pronunciation: "Al-ḥisāb", ipa: "al ħiˈsaːb", meaning: "Conto", type: "base", pos: "noun" },
            { id: "v_ar_ext_38", lang: "ar", level: 1, word: "ماء", pronunciation: "Mā'", ipa: "maːʔ", meaning: "Acqua", type: "base", pos: "noun" },
            { id: "v_ar_ext_39", lang: "ar", level: 2, word: "فطور", pronunciation: "Fuṭūr", ipa: "fuˈtˤuːr", meaning: "Colazione", type: "base", pos: "noun" },
            { id: "v_ar_ext_40", lang: "ar", level: 2, word: "غداء", pronunciation: "Ghadā'", ipa: "ɣaˈdaːʔ", meaning: "Pranzo", type: "base", pos: "noun" },
            { id: "v_ar_ext_41", lang: "ar", level: 2, word: "عشاء", pronunciation: "'Ashā'", ipa: "ʕaˈʃaːʔ", meaning: "Cena", type: "base", pos: "noun" },
            { id: "v_ar_ext_42", lang: "ar", level: 2, word: "نباتي", pronunciation: "Nabātī", ipa: "naˈbaːti", meaning: "Vegetariano", type: "base", pos: "adj" },
            { id: "v_ar_ext_43", lang: "ar", level: 2, word: "لذيذ", pronunciation: "Ladhīdh", ipa: "laˈðiːð", meaning: "Delizioso", type: "base", pos: "adj" },
            { id: "v_ar_ext_44", lang: "ar", level: 2, word: "سوبرماركت", pronunciation: "Sūbarmārkit", ipa: "suːbarˈmaːrkit", meaning: "Supermercato", type: "base", pos: "place" },
            { id: "v_ar_ext_45", lang: "ar", level: 2, word: "طوارئ", pronunciation: "Ṭawāri'", ipa: "tˤaˈwaːriʔ", meaning: "Emergenze", type: "base", pos: "noun" },
            { id: "v_ar_ext_46", lang: "ar", level: 2, word: "النجدة!", pronunciation: "An-najda!", ipa: "anˈnadʒda", meaning: "Aiuto!", type: "base", pos: "phrase" },
            { id: "v_ar_ext_47", lang: "ar", level: 2, word: "مستشفى", pronunciation: "Mustashfā", ipa: "musˈtaʃfa", meaning: "Ospedale", type: "base", pos: "place" },
            { id: "v_ar_ext_48", lang: "ar", level: 2, word: "صيدلية", pronunciation: "Ṣaydaliyya", ipa: "sˤajdaˈlijːa", meaning: "Farmacia", type: "base", pos: "place" },
            { id: "v_ar_ext_49", lang: "ar", level: 2, word: "شرطة", pronunciation: "Shurṭa", ipa: "ˈʃurtˤa", meaning: "Polizia", type: "base", pos: "noun" },
            { id: "v_ar_ext_50", lang: "ar", level: 2, word: "دورة المياه", pronunciation: "Dawrat al-miyāh", ipa: "ˈdawrat al miˈjaːh", meaning: "Bagno", type: "base", pos: "place" },
            { id: "v_ar_ext_51", lang: "ar", level: 2, word: "نقود", pronunciation: "Nuqūd", ipa: "nuˈquːd", meaning: "Soldi", type: "base", pos: "noun" },
            { id: "v_ar_ext_52", lang: "ar", level: 2, word: "نقد", pronunciation: "Naqd", ipa: "naqd", meaning: "Contanti", type: "base", pos: "noun" },
            { id: "v_ar_ext_53", lang: "ar", level: 2, word: "كم السعر؟", pronunciation: "Kam as-si'r?", ipa: "kam asˈsiʔr", meaning: "Quanto costa?", type: "base", pos: "phrase" },
            { id: "v_ar_ext_54", lang: "ar", level: 2, word: "مفتوح", pronunciation: "Maftūḥ", ipa: "mafˈtuːħ", meaning: "Aperto", type: "base", pos: "adj" },
            { id: "v_ar_ext_55", lang: "ar", level: 2, word: "صرف العملات", pronunciation: "Ṣarf al-'umlāt", ipa: "sˤarf al ʕumˈlaːt", meaning: "Cambio valuta", type: "base", pos: "noun" }
        ]
    },

"verbi_top100_zh": {
        title: "Top 100 Verbi (Cinese)",
        tags: ["verbi", "zh"],
        cards: [
            // 1. VERBI PILASTRO
            { id: "v_zh_top_1", lang: "zh", level: 1, word: "是", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "Essere", type: "base", pos: "verb" },
            { id: "v_zh_top_2", lang: "zh", level: 1, word: "有", pronunciation: "yǒu", ipa: "joʊ̯²¹⁴", meaning: "Avere / Esistere", type: "base", pos: "verb" },
            { id: "v_zh_top_3", lang: "zh", level: 1, word: "做", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "Fare", type: "base", pos: "verb" },
            { id: "v_zh_top_4", lang: "zh", level: 1, word: "干", pronunciation: "gàn", ipa: "kan⁵¹", meaning: "Fare / Gestire", type: "base", pos: "verb" },
            { id: "v_zh_top_5", lang: "zh", level: 1, word: "在", pronunciation: "zài", ipa: "tsaɪ̯⁵¹", meaning: "Stare (trovarsi)", type: "base", pos: "verb" },
            { id: "v_zh_top_6", lang: "zh", level: 2, word: "成为", pronunciation: "chéngwéi", ipa: "ʈʂʰəŋ˧˥ weɪ̯˧˥", meaning: "Diventare", type: "base", pos: "verb" },
            { id: "v_zh_top_7", lang: "zh", level: 2, word: "改变", pronunciation: "gǎibiàn", ipa: "kaɪ̯˨˩˦ pjɛn⁵¹", meaning: "Cambiare", type: "base", pos: "verb" },
            { id: "v_zh_top_8", lang: "zh", level: 2, word: "发生", pronunciation: "fāshēng", ipa: "fa⁵⁵ ʂəŋ⁵⁵", meaning: "Succedere / Accadere", type: "base", pos: "verb" },

            // 2. MOVIMENTO
            { id: "v_zh_top_9", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_zh_top_10", lang: "zh", level: 1, word: "来", pronunciation: "lái", ipa: "laɪ̯˧˥", meaning: "Venire", type: "base", pos: "verb" },
            { id: "v_zh_top_11", lang: "zh", level: 1, word: "回", pronunciation: "huí", ipa: "xweɪ̯˧˥", meaning: "Tornare", type: "base", pos: "verb" },
            { id: "v_zh_top_12", lang: "zh", level: 1, word: "走", pronunciation: "zǒu", ipa: "tsoʊ̯˨˩˦", meaning: "Camminare", type: "base", pos: "verb" },
            { id: "v_zh_top_13", lang: "zh", level: 1, word: "跑", pronunciation: "pǎo", ipa: "pʰɑʊ̯˨˩˦", meaning: "Correre", type: "base", pos: "verb" },
            { id: "v_zh_top_14", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_zh_top_15", lang: "zh", level: 2, word: "出发", pronunciation: "chūfā", ipa: "ʈʂʰu⁵⁵ fa⁵⁵", meaning: "Partire", type: "base", pos: "verb" },
            { id: "v_zh_top_16", lang: "zh", level: 2, word: "到", pronunciation: "dào", ipa: "tɑʊ̯⁵¹", meaning: "Arrivare", type: "base", pos: "verb" },
            { id: "v_zh_top_17", lang: "zh", level: 1, word: "进", pronunciation: "jìn", ipa: "tɕin⁵¹", meaning: "Entrare", type: "base", pos: "verb" },
            { id: "v_zh_top_18", lang: "zh", level: 1, word: "出", pronunciation: "chū", ipa: "ʈʂʰu⁵⁵", meaning: "Uscire", type: "base", pos: "verb" },
            { id: "v_zh_top_19", lang: "zh", level: 1, word: "坐", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "Sedersi / Prendere un mezzo", type: "base", pos: "verb" },
            { id: "v_zh_top_20", lang: "zh", level: 1, word: "站", pronunciation: "zhàn", ipa: "ʈʂan⁵¹", meaning: "Stare in piedi", type: "base", pos: "verb" },
            { id: "v_zh_top_21", lang: "zh", level: 2, word: "停", pronunciation: "tíng", ipa: "tʰiŋ˧˥", meaning: "Fermarsi", type: "base", pos: "verb" },
            { id: "v_zh_top_22", lang: "zh", level: 2, word: "过", pronunciation: "guò", ipa: "kwɔ⁵¹", meaning: "Passare / Attraversare", type: "base", pos: "verb" },

            // 3. SENSI E PERCEZIONE
            { id: "v_zh_top_23", lang: "zh", level: 1, word: "看", pronunciation: "kàn", ipa: "kʰan⁵¹", meaning: "Guardare / Vedere", type: "base", pos: "verb" },
            { id: "v_zh_top_24", lang: "zh", level: 1, word: "听", pronunciation: "tīng", ipa: "tʰiŋ⁵⁵", meaning: "Ascoltare / Sentire", type: "base", pos: "verb" },
            { id: "v_zh_top_25", lang: "zh", level: 2, word: "闻", pronunciation: "wén", ipa: "wən˧˥", meaning: "Annusare", type: "base", pos: "verb" },
            { id: "v_zh_top_26", lang: "zh", level: 2, word: "摸", pronunciation: "mō", ipa: "mwɔ⁵⁵", meaning: "Toccare", type: "base", pos: "verb" },
            { id: "v_zh_top_27", lang: "zh", level: 2, word: "看起来", pronunciation: "kàn qǐlái", ipa: "kʰan⁵¹ tɕʰi˨˩˦ laɪ̯˧˥", meaning: "Sembrare (visivamente)", type: "base", pos: "verb" },
            { id: "v_zh_top_28", lang: "zh", level: 2, word: "感觉", pronunciation: "gǎnjué", ipa: "kan˨˩˦ tɕɥɛ˧˥", meaning: "Sentire (sensazione)", type: "base", pos: "verb" },

            // 4. MENTE E SENTIMENTI
            { id: "v_zh_top_29", lang: "zh", level: 1, word: "想", pronunciation: "xiǎng", ipa: "ɕjɑŋ˨˩˦", meaning: "Pensare / Desiderare", type: "base", pos: "verb" },
            { id: "v_zh_top_30", lang: "zh", level: 1, word: "要", pronunciation: "yào", ipa: "jɑʊ̯⁵¹", meaning: "Volere (volontà)", type: "base", pos: "verb" },
            { id: "v_zh_top_31", lang: "zh", level: 1, word: "爱", pronunciation: "ài", ipa: "aɪ̯⁵¹", meaning: "Amare", type: "base", pos: "verb" },
            { id: "v_zh_top_32", lang: "zh", level: 1, word: "喜欢", pronunciation: "xǐhuān", ipa: "ɕi˨˩˦ xwan⁵⁵", meaning: "Piacere / Piacersi", type: "base", pos: "verb" },
            { id: "v_zh_top_33", lang: "zh", level: 1, word: "知道", pronunciation: "zhīdào", ipa: "ʈʂʐ̩⁵⁵ tɑʊ̯⁵¹", meaning: "Sapere (fatti)", type: "base", pos: "verb" },
            { id: "v_zh_top_34", lang: "zh", level: 1, word: "认识", pronunciation: "rènshi", ipa: "ʐən⁵¹ ʂi", meaning: "Conoscere (persone)", type: "base", pos: "verb" },
            { id: "v_zh_top_35", lang: "zh", level: 2, word: "懂", pronunciation: "dǒng", ipa: "tʊŋ˨˩˦", meaning: "Capire", type: "base", pos: "verb" },
            { id: "v_zh_top_36", lang: "zh", level: 2, word: "明白", pronunciation: "míngbai", ipa: "miŋ˧˥ paɪ̯", meaning: "Comprendere", type: "base", pos: "verb" },
            { id: "v_zh_top_37", lang: "zh", level: 2, word: "相信", pronunciation: "xiāngxìn", ipa: "ɕjɑŋ⁵⁵ ɕin⁵¹", meaning: "Credere", type: "base", pos: "verb" },
            { id: "v_zh_top_38", lang: "zh", level: 2, word: "记得", pronunciation: "jìde", ipa: "tɕi⁵¹ d̥ə", meaning: "Ricordare", type: "base", pos: "verb" },
            { id: "v_zh_top_39", lang: "zh", level: 2, word: "忘记", pronunciation: "wàngjì", ipa: "wɑŋ⁵¹ tɕi⁵¹", meaning: "Dimenticare", type: "base", pos: "verb" },
            { id: "v_zh_top_40", lang: "zh", level: 2, word: "希望", pronunciation: "xīwàng", ipa: "ɕi⁵⁵ wɑŋ⁵¹", meaning: "Sperare", type: "base", pos: "verb" },
            { id: "v_zh_top_41", lang: "zh", level: 2, word: "怕", pronunciation: "pà", ipa: "pʰa⁵¹", meaning: "Avere paura", type: "base", pos: "verb" },
            { id: "v_zh_top_42", lang: "zh", level: 2, word: "决定", pronunciation: "juédìng", ipa: "tɕɥɛ˧˥ tiŋ⁵¹", meaning: "Decidere", type: "base", pos: "verb" },

            // 5. COMUNICAZIONE
            { id: "v_zh_top_43", lang: "zh", level: 1, word: "说", pronunciation: "shuō", ipa: "ʂwɔ⁵⁵", meaning: "Parlare / Dire", type: "base", pos: "verb" },
            { id: "v_zh_top_44", lang: "zh", level: 1, word: "叫", pronunciation: "jiào", ipa: "tɕjɑʊ̯⁵¹", meaning: "Chiamare / Chiamarsi", type: "base", pos: "verb" },
            { id: "v_zh_top_45", lang: "zh", level: 1, word: "问", pronunciation: "wèn", ipa: "wən⁵¹", meaning: "Chiedere", type: "base", pos: "verb" },
            { id: "v_zh_top_46", lang: "zh", level: 2, word: "回答", pronunciation: "huídá", ipa: "xweɪ̯˧˥ ta˧˥", meaning: "Rispondere", type: "base", pos: "verb" },
            { id: "v_zh_top_47", lang: "zh", level: 2, word: "告诉", pronunciation: "gàosu", ipa: "kɑʊ̯⁵¹ su", meaning: "Raccontare / Informare", type: "base", pos: "verb" },
            { id: "v_zh_top_48", lang: "zh", level: 1, word: "写", pronunciation: "xiě", ipa: "ɕjɛ˨˩˦", meaning: "Scrivere", type: "base", pos: "verb" },
            { id: "v_zh_top_49", lang: "zh", level: 1, word: "读", pronunciation: "dú", ipa: "tu˧˥", meaning: "Leggere", type: "base", pos: "verb" },
            { id: "v_zh_top_50", lang: "zh", level: 2, word: "解释", pronunciation: "jiěshì", ipa: "tɕjɛ˨˩˦ ʂɻ̩⁵¹", meaning: "Spiegare", type: "base", pos: "verb" },

            // 6. VITA QUOTIDIANA
            { id: "v_zh_top_51", lang: "zh", level: 1, word: "吃", pronunciation: "chī", ipa: "t͡ʂʰɻ̩⁵⁵", meaning: "Mangiare", type: "base", pos: "verb" },
            { id: "v_zh_top_52", lang: "zh", level: 1, word: "喝", pronunciation: "hē", ipa: "xɤ⁵⁵", meaning: "Bere", type: "base", pos: "verb" },
            { id: "v_zh_top_53", lang: "zh", level: 1, word: "睡觉", pronunciation: "shuìjiào", ipa: "ʂweɪ̯⁵¹ tɕjɑʊ̯⁵¹", meaning: "Dormire", type: "base", pos: "verb" },
            { id: "v_zh_top_54", lang: "zh", level: 2, word: "起床", pronunciation: "qǐchuáng", ipa: "tɕʰi˨˩˦ ʈʂʰwɑŋ˧˥", meaning: "Svegliarsi", type: "base", pos: "verb" },
            { id: "v_zh_top_55", lang: "zh", level: 1, word: "买", pronunciation: "mǎi", ipa: "maɪ̯˨˩˦", meaning: "Comprare", type: "base", pos: "verb" },
            { id: "v_zh_top_56", lang: "zh", level: 1, word: "卖", pronunciation: "mài", ipa: "maɪ̯⁵¹", meaning: "Vendere", type: "base", pos: "verb" },
            { id: "v_zh_top_57", lang: "zh", level: 2, word: "付", pronunciation: "fù", ipa: "fu⁵¹", meaning: "Pagare", type: "base", pos: "verb" },
            { id: "v_zh_top_58", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa⁵⁵", meaning: "Spendere", type: "base", pos: "verb" },
            { id: "v_zh_top_59", lang: "zh", level: 2, word: "穿", pronunciation: "chuān", ipa: "t͡ʂʰwan⁵⁵", meaning: "Indossare", type: "base", pos: "verb" },
            { id: "v_zh_top_60", lang: "zh", level: 2, word: "脱", pronunciation: "tuō", ipa: "tʰwɔ⁵⁵", meaning: "Togliere (vestiti)", type: "base", pos: "verb" },
            { id: "v_zh_top_61", lang: "zh", level: 1, word: "洗", pronunciation: "xǐ", ipa: "ɕi˨˩˦", meaning: "Lavare", type: "base", pos: "verb" },
            { id: "v_zh_top_62", lang: "zh", level: 2, word: "做饭", pronunciation: "zuòfàn", ipa: "tswɔ⁵¹ fan⁵¹", meaning: "Cucinare", type: "base", pos: "verb" },
            { id: "v_zh_top_63", lang: "zh", level: 1, word: "工作", pronunciation: "gōngzuò", ipa: "kʊŋ⁵⁵ tswɔ⁵¹", meaning: "Lavorare", type: "base", pos: "verb" },
            { id: "v_zh_top_64", lang: "zh", level: 1, word: "学习", pronunciation: "xuéxí", ipa: "ɕɥɛ˧˥ ɕi˧˥", meaning: "Studiare", type: "base", pos: "verb" },
            { id: "v_zh_top_65", lang: "zh", level: 1, word: "玩", pronunciation: "wán", ipa: "wan˧˥", meaning: "Giocare / Divertirsi", type: "base", pos: "verb" },
            { id: "v_zh_top_66", lang: "zh", level: 2, word: "休息", pronunciation: "xiūxi", ipa: "ɕjoʊ̯⁵⁵ ɕi", meaning: "Riposare", type: "base", pos: "verb" },

            // 7. AZIONI CON OGGETTI
            { id: "v_zh_top_67", lang: "zh", level: 1, word: "给", pronunciation: "gěi", ipa: "keɪ̯˨˩˦", meaning: "Dare", type: "base", pos: "verb" },
            { id: "v_zh_top_68", lang: "zh", level: 1, word: "拿", pronunciation: "ná", ipa: "na˧˥", meaning: "Prendere (mano)", type: "base", pos: "verb" },
            { id: "v_zh_top_69", lang: "zh", level: 1, word: "放", pronunciation: "fàng", ipa: "fɑŋ⁵¹", meaning: "Mettere", type: "base", pos: "verb" },
            { id: "v_zh_top_70", lang: "zh", level: 2, word: "带", pronunciation: "dài", ipa: "taɪ̯⁵¹", meaning: "Portare (con sé)", type: "base", pos: "verb" },
            { id: "v_zh_top_71", lang: "zh", level: 1, word: "用", pronunciation: "yòng", ipa: "jʊŋ⁵¹", meaning: "Usare", type: "base", pos: "verb" },
            { id: "v_zh_top_72", lang: "zh", level: 1, word: "找", pronunciation: "zhǎo", ipa: "ʈʂɑʊ̯˨˩˦", meaning: "Cercare", type: "base", pos: "verb" },
            { id: "v_zh_top_73", lang: "zh", level: 2, word: "找到", pronunciation: "zhǎodào", ipa: "ʈʂɑʊ̯˨˩˦ tɑʊ̯⁵¹", meaning: "Trovare", type: "base", pos: "verb" },
            { id: "v_zh_top_74", lang: "zh", level: 2, word: "丢", pronunciation: "diū", ipa: "tjoʊ̯⁵⁵", meaning: "Perdere (oggetto)", type: "base", pos: "verb" },
            { id: "v_zh_top_75", lang: "zh", level: 1, word: "开", pronunciation: "kāi", ipa: "kʰaɪ̯⁵⁵", meaning: "Aprire / Guidare", type: "base", pos: "verb" },
            { id: "v_zh_top_76", lang: "zh", level: 1, word: "关", pronunciation: "guān", ipa: "kwan⁵⁵", meaning: "Chiudere / Spegnere", type: "base", pos: "verb" },
            { id: "v_zh_top_77", lang: "zh", level: 2, word: "拉", pronunciation: "lā", ipa: "la⁵⁵", meaning: "Tirare", type: "base", pos: "verb" },
            { id: "v_zh_top_78", lang: "zh", level: 2, word: "推", pronunciation: "tuī", ipa: "tʰweɪ̯⁵⁵", meaning: "Spingere", type: "base", pos: "verb" },
            { id: "v_zh_top_79", lang: "zh", level: 2, word: "坏", pronunciation: "huài", ipa: "xwaɪ̯⁵¹", meaning: "Rompere / Guastarsi", type: "base", pos: "verb" },
            { id: "v_zh_top_80", lang: "zh", level: 2, word: "修", pronunciation: "xiū", ipa: "ɕjoʊ̯⁵⁵", meaning: "Riparare", type: "base", pos: "verb" },

            // 8. SOCIALE E ALTRO
            { id: "v_zh_top_81", lang: "zh", level: 1, word: "帮", pronunciation: "bāng", ipa: "pɑŋ⁵⁵", meaning: "Aiutare", type: "base", pos: "verb" },
            { id: "v_zh_top_82", lang: "zh", level: 1, word: "等", pronunciation: "děng", ipa: "təŋ˨˩˦", meaning: "Aspettare", type: "base", pos: "verb" },
            { id: "v_zh_top_83", lang: "zh", level: 2, word: "见面", pronunciation: "jiànmiàn", ipa: "tɕjɛn⁵¹ mjɛn⁵¹", meaning: "Incontrare / Vedersi", type: "base", pos: "verb" },
            { id: "v_zh_top_84", lang: "zh", level: 2, word: "请", pronunciation: "qǐng", ipa: "tɕʰiŋ˨˩˦", meaning: "Invitare / Prego", type: "base", pos: "verb" },
            { id: "v_zh_top_85", lang: "zh", level: 1, word: "谢谢", pronunciation: "xièxie", ipa: "ɕjɛ⁵¹ ɕjɛ", meaning: "Ringraziare", type: "base", pos: "verb" },
            { id: "v_zh_top_86", lang: "zh", level: 2, word: "道歉", pronunciation: "dàoqiàn", ipa: "tɑʊ̯⁵¹ tɕʰjɛn⁵¹", meaning: "Scusarsi", type: "base", pos: "verb" },
            { id: "v_zh_top_87", lang: "zh", level: 1, word: "开始", pronunciation: "kāishǐ", ipa: "kʰaɪ̯⁵⁵ ʂɻ̩˨˩˦", meaning: "Iniziare", type: "base", pos: "verb" },
            { id: "v_zh_top_88", lang: "zh", level: 2, word: "结束", pronunciation: "jiéshù", ipa: "tɕjɛ˧˥ ʂu⁵¹", meaning: "Finire", type: "base", pos: "verb" },
            { id: "v_zh_top_89", lang: "zh", level: 2, word: "继续", pronunciation: "jìxù", ipa: "tɕi⁵¹ ɕy⁵¹", meaning: "Continuare", type: "base", pos: "verb" },
            { id: "v_zh_top_90", lang: "zh", level: 2, word: "试", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "Provare", type: "base", pos: "verb" },
            { id: "v_zh_top_91", lang: "zh", level: 2, word: "需要", pronunciation: "xūyào", ipa: "ɕy⁵⁵ jɑʊ̯⁵¹", meaning: "Bisognare / Dovere", type: "base", pos: "verb" },
            { id: "v_zh_top_92", lang: "zh", level: 1, word: "能", pronunciation: "néng", ipa: "nəŋ˧˥", meaning: "Potere (capacità)", type: "base", pos: "verb" },
            { id: "v_zh_top_93", lang: "zh", level: 1, word: "可以", pronunciation: "kěyǐ", ipa: "kʰɤ˨˩˦ i˨˩˦", meaning: "Potere (permesso)", type: "base", pos: "verb" },
            { id: "v_zh_top_94", lang: "zh", level: 2, word: "让", pronunciation: "ràng", ipa: "ʐɑŋ⁵¹", meaning: "Permettere / Lasciare", type: "base", pos: "verb" },
            { id: "v_zh_top_95", lang: "zh", level: 2, word: "准备", pronunciation: "zhǔnbèi", ipa: "ʈʂwən˨˩˦ peɪ̯⁵¹", meaning: "Preparare", type: "base", pos: "verb" },
            { id: "v_zh_top_96", lang: "zh", level: 2, word: "赢", pronunciation: "yíng", ipa: "iŋ˧˥", meaning: "Vincere", type: "base", pos: "verb" },
            { id: "v_zh_top_97", lang: "zh", level: 2, word: "输", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "Perdere (gara)", type: "base", pos: "verb" },
            { id: "v_zh_top_98", lang: "zh", level: 2, word: "死", pronunciation: "sǐ", ipa: "sz̩˨˩˦", meaning: "Morire", type: "base", pos: "verb" },
            { id: "v_zh_top_99", lang: "zh", level: 2, word: "生活", pronunciation: "shēnghuó", ipa: "ʂəŋ⁵⁵ xwɔ˧˥", meaning: "Vivere", type: "base", pos: "verb" },
            { id: "v_zh_top_100", lang: "zh", level: 2, word: "出生", pronunciation: "chūshēng", ipa: "ʈʂʰu⁵⁵ ʂəŋ⁵⁵", meaning: "Nascere", type: "base", pos: "verb" }
        ]
    },

"verbi_top100_ja": {
        title: "Top 100 Verbi (Giapponese)",
        tags: ["verbi", "ja"],
        cards: [
            // 1. VERBI PILASTRO
            { id: "v_ja_top_1", lang: "ja", level: 1, word: "だ / です", pronunciation: "da / desu", ipa: "da / desɯ", meaning: "Essere", type: "base", pos: "verb" },
            { id: "v_ja_top_2", lang: "ja", level: 1, word: "ある", pronunciation: "aru", ipa: "aɾɯ", meaning: "Esistere (cose)", type: "base", pos: "verb" },
            { id: "v_ja_top_3", lang: "ja", level: 1, word: "いる", pronunciation: "iru", ipa: "iɾɯ", meaning: "Esistere (persone)", type: "base", pos: "verb" },
            { id: "v_ja_top_4", lang: "ja", level: 1, word: "する", pronunciation: "suru", ipa: "sɯɾɯ", meaning: "Fare", type: "base", pos: "verb" },
            { id: "v_ja_top_5", lang: "ja", level: 2, word: "なる", pronunciation: "naru", ipa: "naɾɯ", meaning: "Diventare", type: "base", pos: "verb" },
            { id: "v_ja_top_6", lang: "ja", level: 2, word: "持つ", pronunciation: "motsu", ipa: "motsɯ", meaning: "Avere (possedere)", type: "base", pos: "verb" },

            // 2. MOVIMENTO
            { id: "v_ja_top_7", lang: "ja", level: 1, word: "行く", pronunciation: "iku", ipa: "ikɯ", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_ja_top_8", lang: "ja", level: 1, word: "来る", pronunciation: "kuru", ipa: "kɯɾɯ", meaning: "Venire", type: "base", pos: "verb" },
            { id: "v_ja_top_9", lang: "ja", level: 1, word: "帰る", pronunciation: "kaeru", ipa: "kaeɾɯ", meaning: "Tornare", type: "base", pos: "verb" },
            { id: "v_ja_top_10", lang: "ja", level: 1, word: "歩く", pronunciation: "aruku", ipa: "aɾɯkɯ", meaning: "Camminare", type: "base", pos: "verb" },
            { id: "v_ja_top_11", lang: "ja", level: 1, word: "走る", pronunciation: "hashiru", ipa: "haɕiɾɯ", meaning: "Correre", type: "base", pos: "verb" },
            { id: "v_ja_top_12", lang: "ja", level: 2, word: "泳ぐ", pronunciation: "oyogu", ipa: "ojoɡɯ", meaning: "Nuotare", type: "base", pos: "verb" },
            { id: "v_ja_top_13", lang: "ja", level: 1, word: "飛ぶ", pronunciation: "tobu", ipa: "tobɯ", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_ja_top_14", lang: "ja", level: 1, word: "入る", pronunciation: "hairu", ipa: "haiɾɯ", meaning: "Entrare", type: "base", pos: "verb" },
            { id: "v_ja_top_15", lang: "ja", level: 1, word: "出る", pronunciation: "deru", ipa: "deɾɯ", meaning: "Uscire", type: "base", pos: "verb" },
            { id: "v_ja_top_16", lang: "ja", level: 2, word: "乗る", pronunciation: "noru", ipa: "noɾɯ", meaning: "Salire (mezzo)", type: "base", pos: "verb" },
            { id: "v_ja_top_17", lang: "ja", level: 2, word: "降りる", pronunciation: "oriru", ipa: "oɾiɾɯ", meaning: "Scendere", type: "base", pos: "verb" },
            { id: "v_ja_top_18", lang: "ja", level: 2, word: "止まる", pronunciation: "tomaru", ipa: "tomaɾɯ", meaning: "Fermarsi", type: "base", pos: "verb" },
            { id: "v_ja_top_19", lang: "ja", level: 2, word: "渡る", pronunciation: "wataru", ipa: "wataɾɯ", meaning: "Attraversare", type: "base", pos: "verb" },
            { id: "v_ja_top_20", lang: "ja", level: 2, word: "曲がる", pronunciation: "magaru", ipa: "maɡaɾɯ", meaning: "Girare", type: "base", pos: "verb" },

            // 3. VITA QUOTIDIANA
            { id: "v_ja_top_21", lang: "ja", level: 1, word: "食べる", pronunciation: "taberu", ipa: "tabeɾɯ", meaning: "Mangiare", type: "base", pos: "verb" },
            { id: "v_ja_top_22", lang: "ja", level: 1, word: "飲む", pronunciation: "nomu", ipa: "nomɯ", meaning: "Bere", type: "base", pos: "verb" },
            { id: "v_ja_top_23", lang: "ja", level: 1, word: "寝る", pronunciation: "neru", ipa: "neɾɯ", meaning: "Dormire", type: "base", pos: "verb" },
            { id: "v_ja_top_24", lang: "ja", level: 2, word: "起きる", pronunciation: "okiru", ipa: "okiɾɯ", meaning: "Svegliarsi", type: "base", pos: "verb" },
            { id: "v_ja_top_25", lang: "ja", level: 1, word: "洗う", pronunciation: "arau", ipa: "aɾaɯ", meaning: "Lavare", type: "base", pos: "verb" },
            { id: "v_ja_top_26", lang: "ja", level: 2, word: "浴びる", pronunciation: "abiru", ipa: "abiɾɯ", meaning: "Farsi la doccia", type: "base", pos: "verb" },
            { id: "v_ja_top_27", lang: "ja", level: 2, word: "磨く", pronunciation: "migaku", ipa: "miɡakɯ", meaning: "Lavarsi i denti", type: "base", pos: "verb" },
            { id: "v_ja_top_28", lang: "ja", level: 1, word: "働く", pronunciation: "hataraku", ipa: "hataɾakɯ", meaning: "Lavorare", type: "base", pos: "verb" },
            { id: "v_ja_top_29", lang: "ja", level: 1, word: "勉強する", pronunciation: "benkyou suru", ipa: "beŋkjoː sɯɾɯ", meaning: "Studiare", type: "base", pos: "verb" },
            { id: "v_ja_top_30", lang: "ja", level: 2, word: "休む", pronunciation: "yasumu", ipa: "jasɯmɯ", meaning: "Riposare", type: "base", pos: "verb" },
            { id: "v_ja_top_31", lang: "ja", level: 1, word: "遊ぶ", pronunciation: "asobu", ipa: "asobɯ", meaning: "Giocare", type: "base", pos: "verb" },
            { id: "v_ja_top_32", lang: "ja", level: 2, word: "住む", pronunciation: "sumu", ipa: "sɯmɯ", meaning: "Abitare", type: "base", pos: "verb" },
            { id: "v_ja_top_33", lang: "ja", level: 2, word: "生きる", pronunciation: "ikiru", ipa: "ikiɾɯ", meaning: "Vivere", type: "base", pos: "verb" },
            { id: "v_ja_top_34", lang: "ja", level: 2, word: "死ぬ", pronunciation: "shinu", ipa: "ɕinɯ", meaning: "Morire", type: "base", pos: "verb" },

            // 4. AZIONI CON OGGETTI
            { id: "v_ja_top_35", lang: "ja", level: 1, word: "買う", pronunciation: "kau", ipa: "kaɯ", meaning: "Comprare", type: "base", pos: "verb" },
            { id: "v_ja_top_36", lang: "ja", level: 1, word: "売る", pronunciation: "uru", ipa: "ɯɾɯ", meaning: "Vendere", type: "base", pos: "verb" },
            { id: "v_ja_top_37", lang: "ja", level: 2, word: "払う", pronunciation: "harau", ipa: "haɾaɯ", meaning: "Pagare", type: "base", pos: "verb" },
            { id: "v_ja_top_38", lang: "ja", level: 1, word: "取る", pronunciation: "toru", ipa: "toɾɯ", meaning: "Prendere", type: "base", pos: "verb" },
            { id: "v_ja_top_39", lang: "ja", level: 1, word: "置く", pronunciation: "oku", ipa: "okɯ", meaning: "Mettere", type: "base", pos: "verb" },
            { id: "v_ja_top_40", lang: "ja", level: 1, word: "使う", pronunciation: "tsukau", ipa: "tsɯkaɯ", meaning: "Usare", type: "base", pos: "verb" },
            { id: "v_ja_top_41", lang: "ja", level: 1, word: "作る", pronunciation: "tsukuru", ipa: "tsɯkɯɾɯ", meaning: "Creare/Cucinare", type: "base", pos: "verb" },
            { id: "v_ja_top_42", lang: "ja", level: 1, word: "開ける", pronunciation: "akeru", ipa: "akeɾɯ", meaning: "Aprire", type: "base", pos: "verb" },
            { id: "v_ja_top_43", lang: "ja", level: 1, word: "閉める", pronunciation: "shimeru", ipa: "ɕimeɾɯ", meaning: "Chiudere", type: "base", pos: "verb" },
            { id: "v_ja_top_44", lang: "ja", level: 2, word: "つける", pronunciation: "tsukeru", ipa: "tsɯkeɾɯ", meaning: "Accendere", type: "base", pos: "verb" },
            { id: "v_ja_top_45", lang: "ja", level: 2, word: "消す", pronunciation: "kesu", ipa: "kesɯ", meaning: "Spegnere", type: "base", pos: "verb" },
            { id: "v_ja_top_46", lang: "ja", level: 2, word: "着る", pronunciation: "kiru", ipa: "kiɾɯ", meaning: "Indossare (busto)", type: "base", pos: "verb" },
            { id: "v_ja_top_47", lang: "ja", level: 2, word: "履く", pronunciation: "haku", ipa: "hakɯ", meaning: "Indossare (gambe)", type: "base", pos: "verb" },
            { id: "v_ja_top_48", lang: "ja", level: 2, word: "脱ぐ", pronunciation: "nugu", ipa: "nɯɡɯ", meaning: "Togliere (vestiti)", type: "base", pos: "verb" },
            { id: "v_ja_top_49", lang: "ja", level: 2, word: "切る", pronunciation: "kiru", ipa: "kiɾɯ", meaning: "Tagliare", type: "base", pos: "verb" },
            { id: "v_ja_top_50", lang: "ja", level: 2, word: "撮る", pronunciation: "toru", ipa: "toɾɯ", meaning: "Scattare (foto)", type: "base", pos: "verb" },

            // 5. COMUNICAZIONE E PENSIERO
            { id: "v_ja_top_51", lang: "ja", level: 1, word: "話す", pronunciation: "hanasu", ipa: "hanasɯ", meaning: "Parlare", type: "base", pos: "verb" },
            { id: "v_ja_top_52", lang: "ja", level: 1, word: "言う", pronunciation: "iu", ipa: "iɯ", meaning: "Dire", type: "base", pos: "verb" },
            { id: "v_ja_top_53", lang: "ja", level: 1, word: "聞く", pronunciation: "kiku", ipa: "kikɯ", meaning: "Ascoltare/Chiedere", type: "base", pos: "verb" },
            { id: "v_ja_top_54", lang: "ja", level: 1, word: "読む", pronunciation: "yomu", ipa: "jomɯ", meaning: "Leggere", type: "base", pos: "verb" },
            { id: "v_ja_top_55", lang: "ja", level: 1, word: "書く", pronunciation: "kaku", ipa: "kakɯ", meaning: "Scrivere", type: "base", pos: "verb" },
            { id: "v_ja_top_56", lang: "ja", level: 1, word: "思う", pronunciation: "omou", ipa: "omoɯ", meaning: "Pensare", type: "base", pos: "verb" },
            { id: "v_ja_top_57", lang: "ja", level: 2, word: "考える", pronunciation: "kangaeru", ipa: "kaŋɡaeɾɯ", meaning: "Riflettere", type: "base", pos: "verb" },
            { id: "v_ja_top_58", lang: "ja", level: 1, word: "知る", pronunciation: "shiru", ipa: "ɕiɾɯ", meaning: "Sapere", type: "base", pos: "verb" },
            { id: "v_ja_top_59", lang: "ja", level: 1, word: "分かる", pronunciation: "wakaru", ipa: "wakaɾɯ", meaning: "Capire", type: "base", pos: "verb" },
            { id: "v_ja_top_60", lang: "ja", level: 2, word: "覚える", pronunciation: "oboeru", ipa: "oboeɾɯ", meaning: "Ricordare", type: "base", pos: "verb" },
            { id: "v_ja_top_61", lang: "ja", level: 2, word: "忘れる", pronunciation: "wasureru", ipa: "wasɯɾeɾɯ", meaning: "Dimenticare", type: "base", pos: "verb" },
            { id: "v_ja_top_62", lang: "ja", level: 2, word: "教える", pronunciation: "oshieru", ipa: "oɕieɾɯ", meaning: "Insegnare", type: "base", pos: "verb" },
            { id: "v_ja_top_63", lang: "ja", level: 2, word: "習う", pronunciation: "narau", ipa: "naɾaɯ", meaning: "Imparare", type: "base", pos: "verb" },
            { id: "v_ja_top_64", lang: "ja", level: 2, word: "呼ぶ", pronunciation: "yobu", ipa: "jobɯ", meaning: "Chiamare", type: "base", pos: "verb" },

            // 6. SENSI E SENTIMENTI
            { id: "v_ja_top_65", lang: "ja", level: 1, word: "見る", pronunciation: "miru", ipa: "miɾɯ", meaning: "Vedere", type: "base", pos: "verb" },
            { id: "v_ja_top_66", lang: "ja", level: 2, word: "見せる", pronunciation: "miseru", ipa: "miseɾɯ", meaning: "Mostrare", type: "base", pos: "verb" },
            { id: "v_ja_top_67", lang: "ja", level: 2, word: "感じる", pronunciation: "kanjiru", ipa: "kaɲdʑiɾɯ", meaning: "Sentire (emozione)", type: "base", pos: "verb" },
            { id: "v_ja_top_68", lang: "ja", level: 2, word: "笑う", pronunciation: "warau", ipa: "waɾaɯ", meaning: "Ridere", type: "base", pos: "verb" },
            { id: "v_ja_top_69", lang: "ja", level: 2, word: "泣く", pronunciation: "naku", ipa: "nakɯ", meaning: "Piangere", type: "base", pos: "verb" },
            { id: "v_ja_top_70", lang: "ja", level: 2, word: "怒る", pronunciation: "okoru", ipa: "okoɾɯ", meaning: "Arrabbiarsi", type: "base", pos: "verb" },
            { id: "v_ja_top_71", lang: "ja", level: 2, word: "好む", pronunciation: "konomu", ipa: "konomɯ", meaning: "Preferire", type: "base", pos: "verb" },
            { id: "v_ja_top_72", lang: "ja", level: 2, word: "楽しむ", pronunciation: "tanoshimu", ipa: "tanoɕimɯ", meaning: "Divertirsi", type: "base", pos: "verb" },
            { id: "v_ja_top_73", lang: "ja", level: 2, word: "驚く", pronunciation: "odoroku", ipa: "odoɾokɯ", meaning: "Sorprendersi", type: "base", pos: "verb" },
            { id: "v_ja_top_74", lang: "ja", level: 2, word: "困る", pronunciation: "komaru", ipa: "komaɾɯ", meaning: "Preoccuparsi / Essere in difficoltà", type: "base", pos: "verb" },
            { id: "v_ja_top_75", lang: "ja", level: 2, word: "疲れる", pronunciation: "tsukareru", ipa: "tsɯkaɾeɾɯ", meaning: "Stancarsi", type: "base", pos: "verb" },

            // 7. INTERAZIONE SOCIALE
            { id: "v_ja_top_76", lang: "ja", level: 1, word: "会う", pronunciation: "au", ipa: "aɯ", meaning: "Incontrare", type: "base", pos: "verb" },
            { id: "v_ja_top_77", lang: "ja", level: 1, word: "待つ", pronunciation: "matsu", ipa: "matsɯ", meaning: "Aspettare", type: "base", pos: "verb" },
            { id: "v_ja_top_78", lang: "ja", level: 1, word: "あげる", pronunciation: "ageru", ipa: "aɡeɾɯ", meaning: "Dare", type: "base", pos: "verb" },
            { id: "v_ja_top_79", lang: "ja", level: 1, word: "もらう", pronunciation: "morau", ipa: "moɾaɯ", meaning: "Ricevere", type: "base", pos: "verb" },
            { id: "v_ja_top_80", lang: "ja", level: 2, word: "貸す", pronunciation: "kasu", ipa: "kasɯ", meaning: "Prestare", type: "base", pos: "verb" },
            { id: "v_ja_top_81", lang: "ja", level: 2, word: "借りる", pronunciation: "kariru", ipa: "kaɾiɾɯ", meaning: "Prendere in prestito", type: "base", pos: "verb" },
            { id: "v_ja_top_82", lang: "ja", level: 2, word: "返す", pronunciation: "kaesu", ipa: "kaesɯ", meaning: "Restituire", type: "base", pos: "verb" },
            { id: "v_ja_top_83", lang: "ja", level: 1, word: "手伝う", pronunciation: "tetsudau", ipa: "tetsɯdaɯ", meaning: "Aiutare", type: "base", pos: "verb" },
            { id: "v_ja_top_84", lang: "ja", level: 1, word: "頑張る", pronunciation: "ganbaru", ipa: "ɡambaɾɯ", meaning: "Sforzarsi / Fare del proprio meglio", type: "base", pos: "verb" },

            // 8. ALTRI VERBI UTILI
            { id: "v_ja_top_85", lang: "ja", level: 2, word: "始める", pronunciation: "hajimeru", ipa: "hadʑimeɾɯ", meaning: "Iniziare (trans.)", type: "base", pos: "verb" },
            { id: "v_ja_top_86", lang: "ja", level: 2, word: "始まる", pronunciation: "hajimaru", ipa: "hadʑimaɾɯ", meaning: "Iniziare (intrans.)", type: "base", pos: "verb" },
            { id: "v_ja_top_87", lang: "ja", level: 2, word: "終わる", pronunciation: "owaru", ipa: "owaɾɯ", meaning: "Finire", type: "base", pos: "verb" },
            { id: "v_ja_top_88", lang: "ja", level: 2, word: "続ける", pronunciation: "tsuzukeru", ipa: "tsɯzɯkeɾɯ", meaning: "Continuare", type: "base", pos: "verb" },
            { id: "v_ja_top_89", lang: "ja", level: 2, word: "探す", pronunciation: "sagasu", ipa: "saɡasɯ", meaning: "Cercare", type: "base", pos: "verb" },
            { id: "v_ja_top_90", lang: "ja", level: 2, word: "見つける", pronunciation: "mitsukeru", ipa: "mitsɯkeɾɯ", meaning: "Trovare", type: "base", pos: "verb" },
            { id: "v_ja_top_91", lang: "ja", level: 2, word: "無くす", pronunciation: "nakusu", ipa: "nakɯsɯ", meaning: "Perdere (oggetti)", type: "base", pos: "verb" },
            { id: "v_ja_top_92", lang: "ja", level: 2, word: "勝つ", pronunciation: "katsu", ipa: "katsɯ", meaning: "Vincere", type: "base", pos: "verb" },
            { id: "v_ja_top_93", lang: "ja", level: 2, word: "負ける", pronunciation: "makeru", ipa: "makeɾɯ", meaning: "Perdere (gara)", type: "base", pos: "verb" },
            { id: "v_ja_top_94", lang: "ja", level: 2, word: "選ぶ", pronunciation: "erabu", ipa: "eɾabɯ", meaning: "Scegliere", type: "base", pos: "verb" },
            { id: "v_ja_top_95", lang: "ja", level: 2, word: "違う", pronunciation: "chigau", ipa: "tɕiɡaɯ", meaning: "Sbagliare / Essere diverso", type: "base", pos: "verb" },
            { id: "v_ja_top_96", lang: "ja", level: 1, word: "座る", pronunciation: "suwaru", ipa: "sɯwaɾɯ", meaning: "Sedersi", type: "base", pos: "verb" },
            { id: "v_ja_top_97", lang: "ja", level: 1, word: "立つ", pronunciation: "tatsu", ipa: "tatsɯ", meaning: "Alzarsi / Stare in piedi", type: "base", pos: "verb" },
            { id: "v_ja_top_98", lang: "ja", level: 2, word: "要る", pronunciation: "iru", ipa: "iɾɯ", meaning: "Avere bisogno", type: "base", pos: "verb" },
            { id: "v_ja_top_99", lang: "ja", level: 2, word: "押す", pronunciation: "osu", ipa: "osɯ", meaning: "Spingere", type: "base", pos: "verb" },
            { id: "v_ja_top_100", lang: "ja", level: 2, word: "引く", pronunciation: "hiku", ipa: "hikɯ", meaning: "Tirare", type: "base", pos: "verb" }
        ]
    },

"verbi_top100_ar": {
        title: "Top 100 Verbi (Arabo)",
        tags: ["verbi", "ar"],
        cards: [
            // 1. VERBI PILASTRO
            { id: "v_ar_top_1", lang: "ar", level: 1, word: "كان", pronunciation: "Kāna", ipa: "ˈkaːna", meaning: "Essere (era)", type: "base", pos: "verb" },
            { id: "v_ar_top_2", lang: "ar", level: 1, word: "فعل", pronunciation: "Fa'ala", ipa: "ˈfaʕala", meaning: "Fare", type: "base", pos: "verb" },
            { id: "v_ar_top_3", lang: "ar", level: 1, word: "عمل", pronunciation: "'Amila", ipa: "ˈʕamila", meaning: "Lavorare / Fare", type: "base", pos: "verb" },
            { id: "v_ar_top_4", lang: "ar", level: 1, word: "ملك", pronunciation: "Malaka", ipa: "ˈmalaka", meaning: "Avere (possedere)", type: "base", pos: "verb" },
            { id: "v_ar_top_5", lang: "ar", level: 1, word: "استطاع", pronunciation: "Istaṭā'a", ipa: "istaˈtˤɑːʕa", meaning: "Potere (essere in grado)", type: "base", pos: "verb" },
            { id: "v_ar_top_6", lang: "ar", level: 2, word: "أصبح", pronunciation: "Aṣbaḥa", ipa: "ˈasˤbaħa", meaning: "Diventare", type: "base", pos: "verb" },
            { id: "v_ar_top_7", lang: "ar", level: 2, word: "بدأ", pronunciation: "Bada'a", ipa: "ˈbadaʔa", meaning: "Cominciare", type: "base", pos: "verb" },
            { id: "v_ar_top_8", lang: "ar", level: 2, word: "انتهى", pronunciation: "Intahā", ipa: "inˈtahaː", meaning: "Finire / Completare", type: "base", pos: "verb" },
            { id: "v_ar_top_9", lang: "ar", level: 2, word: "حدث", pronunciation: "Ḥadatha", ipa: "ˈħadaθa", meaning: "Accadere", type: "base", pos: "verb" },
            { id: "v_ar_top_10", lang: "ar", level: 2, word: "غير", pronunciation: "Ghayyara", ipa: "ˈɣajjara", meaning: "Cambiare", type: "base", pos: "verb" },

            // 2. MOVIMENTO
            { id: "v_ar_top_11", lang: "ar", level: 1, word: "ذهب", pronunciation: "Dhahaba", ipa: "ˈðahaba", meaning: "Andare", type: "base", pos: "verb" },
            { id: "v_ar_top_12", lang: "ar", level: 1, word: "جاء", pronunciation: "Jā'a", ipa: "ˈdʒaːʔa", meaning: "Venire", type: "base", pos: "verb" },
            { id: "v_ar_top_13", lang: "ar", level: 1, word: "خرج", pronunciation: "Kharaja", ipa: "ˈxaradʒa", meaning: "Uscire", type: "base", pos: "verb" },
            { id: "v_ar_top_14", lang: "ar", level: 1, word: "دخل", pronunciation: "Dakhala", ipa: "ˈdaxala", meaning: "Entrare", type: "base", pos: "verb" },
            { id: "v_ar_top_15", lang: "ar", level: 2, word: "وصل", pronunciation: "Waṣala", ipa: "ˈwasˤala", meaning: "Arrivare", type: "base", pos: "verb" },
            { id: "v_ar_top_16", lang: "ar", level: 1, word: "رجع", pronunciation: "Raja'a", ipa: "ˈradʒaʕa", meaning: "Tornare", type: "base", pos: "verb" },
            { id: "v_ar_top_17", lang: "ar", level: 1, word: "مشى", pronunciation: "Mashā", ipa: "ˈmaʃaː", meaning: "Camminare", type: "base", pos: "verb" },
            { id: "v_ar_top_18", lang: "ar", level: 1, word: "ركض", pronunciation: "Rakaḍa", ipa: "ˈrakadˤa", meaning: "Correre", type: "base", pos: "verb" },
            { id: "v_ar_top_19", lang: "ar", level: 1, word: "جلس", pronunciation: "Jalasa", ipa: "ˈdʒalasa", meaning: "Sedersi", type: "base", pos: "verb" },
            { id: "v_ar_top_20", lang: "ar", level: 1, word: "قام", pronunciation: "Qāma", ipa: "ˈqaːma", meaning: "Alzarsi", type: "base", pos: "verb" },
            { id: "v_ar_top_21", lang: "ar", level: 2, word: "سقط", pronunciation: "Saqaṭa", ipa: "ˈsaqatˤa", meaning: "Cadere", type: "base", pos: "verb" },
            { id: "v_ar_top_22", lang: "ar", level: 2, word: "سافر", pronunciation: "Sāfara", ipa: "ˈsaːfara", meaning: "Viaggiare", type: "base", pos: "verb" },
            { id: "v_ar_top_23", lang: "ar", level: 2, word: "طار", pronunciation: "Ṭāra", ipa: "ˈtˤɑːra", meaning: "Volare", type: "base", pos: "verb" },
            { id: "v_ar_top_24", lang: "ar", level: 2, word: "صعد", pronunciation: "Ṣa'ida", ipa: "ˈsˤaʕida", meaning: "Salire", type: "base", pos: "verb" },
            { id: "v_ar_top_25", lang: "ar", level: 2, word: "نزل", pronunciation: "Nazala", ipa: "ˈnazala", meaning: "Scendere", type: "base", pos: "verb" },

            // 3. SENSI E PERCEZIONE
            { id: "v_ar_top_26", lang: "ar", level: 1, word: "رأى", pronunciation: "Ra'ā", ipa: "ˈraʔaː", meaning: "Vedere", type: "base", pos: "verb" },
            { id: "v_ar_top_27", lang: "ar", level: 1, word: "نظر", pronunciation: "Naẓara", ipa: "ˈnazˤara", meaning: "Guardare", type: "base", pos: "verb" },
            { id: "v_ar_top_28", lang: "ar", level: 1, word: "سمع", pronunciation: "Sami'a", ipa: "ˈsamiʕa", meaning: "Sentire / Ascoltare", type: "base", pos: "verb" },
            { id: "v_ar_top_29", lang: "ar", level: 2, word: "شعر", pronunciation: "Sha'ara", ipa: "ˈʃaʕara", meaning: "Sentire (emozione)", type: "base", pos: "verb" },
            { id: "v_ar_top_30", lang: "ar", level: 2, word: "لمس", pronunciation: "Lamasa", ipa: "ˈlamasa", meaning: "Toccare", type: "base", pos: "verb" },
            { id: "v_ar_top_31", lang: "ar", level: 2, word: "ذاق", pronunciation: "Dhāqa", ipa: "ˈðaːqa", meaning: "Gustare", type: "base", pos: "verb" },
            { id: "v_ar_top_32", lang: "ar", level: 2, word: "بدا", pronunciation: "Badā", ipa: "ˈbadaː", meaning: "Sembrare", type: "base", pos: "verb" },

            // 4. MENTE E SENTIMENTI
            { id: "v_ar_top_33", lang: "ar", level: 1, word: "عرف", pronunciation: "'Arafa", ipa: "ˈʕarafa", meaning: "Sapere / Conoscere", type: "base", pos: "verb" },
            { id: "v_ar_top_34", lang: "ar", level: 1, word: "فهم", pronunciation: "Fahima", ipa: "ˈfahima", meaning: "Capire", type: "base", pos: "verb" },
            { id: "v_ar_top_35", lang: "ar", level: 1, word: "فكر", pronunciation: "Fakkara", ipa: "ˈfakkara", meaning: "Pensare", type: "base", pos: "verb" },
            { id: "v_ar_top_36", lang: "ar", level: 2, word: "اعتقد", pronunciation: "I'taqada", ipa: "iʕˈtaqada", meaning: "Credere", type: "base", pos: "verb" },
            { id: "v_ar_top_37", lang: "ar", level: 1, word: "أراد", pronunciation: "Arāda", ipa: "ʔaˈraːda", meaning: "Volere", type: "base", pos: "verb" },
            { id: "v_ar_top_38", lang: "ar", level: 1, word: "أحب", pronunciation: "Aḥabba", ipa: "ʔaˈħabba", meaning: "Amare", type: "base", pos: "verb" },
            { id: "v_ar_top_39", lang: "ar", level: 2, word: "كره", pronunciation: "Kariha", ipa: "ˈkariha", meaning: "Odiare", type: "base", pos: "verb" },
            { id: "v_ar_top_40", lang: "ar", level: 2, word: "تذكر", pronunciation: "Tadhakkara", ipa: "taˈðakkara", meaning: "Ricordare", type: "base", pos: "verb" },
            { id: "v_ar_top_41", lang: "ar", level: 2, word: "نسي", pronunciation: "Nasiya", ipa: "ˈnasija", meaning: "Dimenticare", type: "base", pos: "verb" },
            { id: "v_ar_top_42", lang: "ar", level: 2, word: "أمل", pronunciation: "Amala", ipa: "ˈʔamala", meaning: "Sperare", type: "base", pos: "verb" },
            { id: "v_ar_top_43", lang: "ar", level: 2, word: "خاف", pronunciation: "Khāfa", ipa: "ˈxaːfa", meaning: "Temere", type: "base", pos: "verb" },
            { id: "v_ar_top_44", lang: "ar", level: 2, word: "قرر", pronunciation: "Qarrara", ipa: "ˈqarrara", meaning: "Decidere", type: "base", pos: "verb" },
            { id: "v_ar_top_45", lang: "ar", level: 1, word: "تعلم", pronunciation: "Ta'allama", ipa: "taˈʕallama", meaning: "Imparare", type: "base", pos: "verb" },
            { id: "v_ar_top_46", lang: "ar", level: 2, word: "علم", pronunciation: "'Allama", ipa: "ˈʕallama", meaning: "Insegnare", type: "base", pos: "verb" },

            // 5. COMUNICAZIONE
            { id: "v_ar_top_47", lang: "ar", level: 1, word: "قال", pronunciation: "Qāla", ipa: "ˈqaːla", meaning: "Dire", type: "base", pos: "verb" },
            { id: "v_ar_top_48", lang: "ar", level: 1, word: "تكلم", pronunciation: "Takallama", ipa: "taˈkallama", meaning: "Parlare", type: "base", pos: "verb" },
            { id: "v_ar_top_49", lang: "ar", level: 1, word: "سأل", pronunciation: "Sa'ala", ipa: "ˈsaʔala", meaning: "Chiedere", type: "base", pos: "verb" },
            { id: "v_ar_top_50", lang: "ar", level: 2, word: "أجاب", pronunciation: "Ajāba", ipa: "ʔaˈdʒaːba", meaning: "Rispondere", type: "base", pos: "verb" },
            { id: "v_ar_top_51", lang: "ar", level: 1, word: "كتب", pronunciation: "Kataba", ipa: "ˈkataba", meaning: "Scrivere", type: "base", pos: "verb" },
            { id: "v_ar_top_52", lang: "ar", level: 1, word: "قرأ", pronunciation: "Qara'a", ipa: "ˈqaraʔa", meaning: "Leggere", type: "base", pos: "verb" },
            { id: "v_ar_top_53", lang: "ar", level: 2, word: "اتصل", pronunciation: "Ittaṣala", ipa: "itˈtasˤala", meaning: "Chiamare (tel)", type: "base", pos: "verb" },
            { id: "v_ar_top_54", lang: "ar", level: 2, word: "صرخ", pronunciation: "Ṣarakha", ipa: "ˈsˤaraxa", meaning: "Gridare", type: "base", pos: "verb" },
            { id: "v_ar_top_55", lang: "ar", level: 2, word: "شرح", pronunciation: "Sharaḥa", ipa: "ˈʃaraħa", meaning: "Spiegare", type: "base", pos: "verb" },
            { id: "v_ar_top_56", lang: "ar", level: 2, word: "ترجم", pronunciation: "Tarjama", ipa: "ˈtardʒama", meaning: "Tradurre", type: "base", pos: "verb" },

            // 6. VITA QUOTIDIANA
            { id: "v_ar_top_57", lang: "ar", level: 1, word: "أكل", pronunciation: "Akala", ipa: "ˈʔakala", meaning: "Mangiare", type: "base", pos: "verb" },
            { id: "v_ar_top_58", lang: "ar", level: 1, word: "شرب", pronunciation: "Shariba", ipa: "ˈʃariba", meaning: "Bere", type: "base", pos: "verb" },
            { id: "v_ar_top_59", lang: "ar", level: 1, word: "نام", pronunciation: "Nāma", ipa: "ˈnaːma", meaning: "Dormire", type: "base", pos: "verb" },
            { id: "v_ar_top_60", lang: "ar", level: 2, word: "استيقظ", pronunciation: "Istayqaẓa", ipa: "isˈtajqazˤa", meaning: "Svegliarsi", type: "base", pos: "verb" },
            { id: "v_ar_top_61", lang: "ar", level: 1, word: "اشترى", pronunciation: "Ishtarā", ipa: "iʃˈtaraː", meaning: "Comprare", type: "base", pos: "verb" },
            { id: "v_ar_top_62", lang: "ar", level: 1, word: "باع", pronunciation: "Bā'a", ipa: "ˈbaːʕa", meaning: "Vendere", type: "base", pos: "verb" },
            { id: "v_ar_top_63", lang: "ar", level: 2, word: "دفع", pronunciation: "Dafa'a", ipa: "ˈdafaʕa", meaning: "Pagare", type: "base", pos: "verb" },
            { id: "v_ar_top_64", lang: "ar", level: 1, word: "أخذ", pronunciation: "Akhadha", ipa: "ˈʔaxaða", meaning: "Prendere", type: "base", pos: "verb" },
            { id: "v_ar_top_65", lang: "ar", level: 1, word: "أعطى", pronunciation: "A'ṭā", ipa: "ˈʔaʕtˤaː", meaning: "Dare", type: "base", pos: "verb" },
            { id: "v_ar_top_66", lang: "ar", level: 2, word: "لبس", pronunciation: "Labisa", ipa: "ˈlabisa", meaning: "Indossare", type: "base", pos: "verb" },
            { id: "v_ar_top_67", lang: "ar", level: 2, word: "خلع", pronunciation: "Khala'a", ipa: "ˈxalaʕa", meaning: "Togliere (vestiti)", type: "base", pos: "verb" },
            { id: "v_ar_top_68", lang: "ar", level: 1, word: "غسل", pronunciation: "Ghasala", ipa: "ˈɣasala", meaning: "Lavare", type: "base", pos: "verb" },
            { id: "v_ar_top_69", lang: "ar", level: 2, word: "طبخ", pronunciation: "Ṭabakha", ipa: "ˈtˤabaxa", meaning: "Cucinare", type: "base", pos: "verb" },
            { id: "v_ar_top_70", lang: "ar", level: 1, word: "سكن", pronunciation: "Sakana", ipa: "ˈsakana", meaning: "Vivere (risiedere)", type: "base", pos: "verb" },
            { id: "v_ar_top_71", lang: "ar", level: 2, word: "عاش", pronunciation: "'Āsha", ipa: "ˈʕaːʃa", meaning: "Vivere (essere vivo)", type: "base", pos: "verb" },
            { id: "v_ar_top_72", lang: "ar", level: 2, word: "مات", pronunciation: "Māta", ipa: "ˈmaːta", meaning: "Morire", type: "base", pos: "verb" },

            // 7. AZIONI CON OGGETTI
            { id: "v_ar_top_73", lang: "ar", level: 1, word: "وضع", pronunciation: "Waḍa'a", ipa: "ˈwadˤaʕa", meaning: "Mettere", type: "base", pos: "verb" },
            { id: "v_ar_top_74", lang: "ar", level: 1, word: "حمل", pronunciation: "Ḥamala", ipa: "ˈħamala", meaning: "Portare (trasportare)", type: "base", pos: "verb" },
            { id: "v_ar_top_75", lang: "ar", level: 1, word: "فتح", pronunciation: "Fataḥa", ipa: "ˈfataħa", meaning: "Aprire", type: "base", pos: "verb" },
            { id: "v_ar_top_76", lang: "ar", level: 1, word: "أغلق", pronunciation: "Aghlaqa", ipa: "ˈʔaɣlaqa", meaning: "Chiudere", type: "base", pos: "verb" },
            { id: "v_ar_top_77", lang: "ar", level: 2, word: "كسر", pronunciation: "Kasara", ipa: "ˈkasara", meaning: "Rompere", type: "base", pos: "verb" },
            { id: "v_ar_top_78", lang: "ar", level: 2, word: "أصلح", pronunciation: "Aṣlaḥa", ipa: "ˈʔasˤlaħa", meaning: "Riparare", type: "base", pos: "verb" },
            { id: "v_ar_top_79", lang: "ar", level: 1, word: "استخدم", pronunciation: "Istakhdama", ipa: "isˈtaxdama", meaning: "Usare", type: "base", pos: "verb" },
            { id: "v_ar_top_80", lang: "ar", level: 2, word: "بحث", pronunciation: "Baḥatha", ipa: "ˈbaħaθa", meaning: "Cercare", type: "base", pos: "verb" },
            { id: "v_ar_top_81", lang: "ar", level: 2, word: "وجد", pronunciation: "Wajada", ipa: "ˈwadʒada", meaning: "Trovare", type: "base", pos: "verb" },
            { id: "v_ar_top_82", lang: "ar", level: 2, word: "فقد", pronunciation: "Faqada", ipa: "ˈfaqada", meaning: "Perdere", type: "base", pos: "verb" },
            { id: "v_ar_top_83", lang: "ar", level: 2, word: "قطع", pronunciation: "Qaṭa'a", ipa: "ˈqatˤaʕa", meaning: "Tagliare", type: "base", pos: "verb" },
            { id: "v_ar_top_84", lang: "ar", level: 2, word: "سحب", pronunciation: "Saḥaba", ipa: "ˈsaħaba", meaning: "Tirare", type: "base", pos: "verb" },
            { id: "v_ar_top_85", lang: "ar", level: 2, word: "دفع", pronunciation: "Dafa'a", ipa: "ˈdafaʕa", meaning: "Spingere", type: "base", pos: "verb" },

            // 8. SOCIALE E ALTRO
            { id: "v_ar_top_86", lang: "ar", level: 2, word: "قابل", pronunciation: "Qābala", ipa: "ˈqaːbala", meaning: "Incontrare", type: "base", pos: "verb" },
            { id: "v_ar_top_87", lang: "ar", level: 1, word: "انتظر", pronunciation: "Intaẓara", ipa: "inˈtazˤara", meaning: "Aspettare", type: "base", pos: "verb" },
            { id: "v_ar_top_88", lang: "ar", level: 1, word: "ساعد", pronunciation: "Sā'ada", ipa: "ˈsaːʕada", meaning: "Aiutare", type: "base", pos: "verb" },
            { id: "v_ar_top_89", lang: "ar", level: 1, word: "شكر", pronunciation: "Shakara", ipa: "ˈʃakara", meaning: "Ringraziare", type: "base", pos: "verb" },
            { id: "v_ar_top_90", lang: "ar", level: 2, word: "اعتذر", pronunciation: "I'tadhara", ipa: "iʕˈtaðara", meaning: "Scusarsi", type: "base", pos: "verb" },
            { id: "v_ar_top_91", lang: "ar", level: 2, word: "سمح", pronunciation: "Samaḥa", ipa: "ˈsamaħa", meaning: "Permettere", type: "base", pos: "verb" },
            { id: "v_ar_top_92", lang: "ar", level: 2, word: "منع", pronunciation: "Mana'a", ipa: "ˈmanaʕa", meaning: "Proibire", type: "base", pos: "verb" },
            { id: "v_ar_top_93", lang: "ar", level: 2, word: "وعد", pronunciation: "Wa'ada", ipa: "ˈwaʕada", meaning: "Promettere", type: "base", pos: "verb" },
            { id: "v_ar_top_94", lang: "ar", level: 2, word: "كذب", pronunciation: "Kadhaba", ipa: "ˈkaðaba", meaning: "Mentire", type: "base", pos: "verb" },
            { id: "v_ar_top_95", lang: "ar", level: 2, word: "ضحك", pronunciation: "Ḍaḥika", ipa: "ˈdˤaħika", meaning: "Ridere", type: "base", pos: "verb" },
            { id: "v_ar_top_96", lang: "ar", level: 2, word: "بكى", pronunciation: "Bakā", ipa: "ˈbakaː", meaning: "Piangere", type: "base", pos: "verb" },
            { id: "v_ar_top_97", lang: "ar", level: 1, word: "لعب", pronunciation: "La'iba", ipa: "ˈlaʕiba", meaning: "Giocare", type: "base", pos: "verb" },
            { id: "v_ar_top_98", lang: "ar", level: 2, word: "فاز", pronunciation: "Fāza", ipa: "ˈfaːza", meaning: "Vincere", type: "base", pos: "verb" },
            { id: "v_ar_top_99", lang: "ar", level: 2, word: "خسر", pronunciation: "Khasira", ipa: "ˈxasira", meaning: "Perdere (sconfitta)", type: "base", pos: "verb" },
            { id: "v_ar_top_100", lang: "ar", level: 2, word: "ولد", pronunciation: "Wulida", ipa: "ˈwulida", meaning: "Nascere", type: "base", pos: "verb" }
        ]
    }
};


const sentenceBank = [
    // ==========================================
    // FRASI CINESE (LIVELLI 1-5)
    // ==========================================
    
    // --- LIVELLO 1: Descrizioni Semplici (Soggetto + 很 + Aggettivo) ---
    // Nota: In cinese "essere" non si usa con gli aggettivi. Si usa "hěn" (molto).
    { id: "s_zh_1", lang: "zh", text: "山很大", pronunciation: "Shān hěn dà", translation: "La montagna è grande", requires: ["zh7", "g_zh_part_4", "base_grande"] },
    { id: "s_zh_2", lang: "zh", text: "花很红", pronunciation: "Huā hěn hóng", translation: "Il fiore è rosso", requires: ["zh19", "g_zh_part_4", "col_zh3"] },
    { id: "s_zh_3", lang: "zh", text: "月亮很白", pronunciation: "Yuèliang hěn bái", translation: "La luna è bianca", requires: ["n_zh_ext_24", "g_zh_part_4", "col_zh1"] },
    { id: "s_zh_4", lang: "zh", text: "我很小", pronunciation: "Wǒ hěn xiǎo", translation: "Io sono piccolo", requires: ["g_zh_pron_1", "g_zh_part_4", "base_piccolo"] },
    { id: "s_zh_5", lang: "zh", text: "天很蓝", pronunciation: "Tiān hěn lán", translation: "Il cielo è blu", requires: ["zh12", "g_zh_part_4", "col_zh4"] },
    { id: "s_zh_6", lang: "zh", text: "这很贵", pronunciation: "Zhè hěn guì", translation: "Questo è costoso", requires: ["g_zh_dem_1", "g_zh_part_4"] }, // "guì" non è nel deck, ma la struttura è questa. Se manca l'agg, usa "Zhè hěn hǎo" (Questo è molto buono).

    // --- LIVELLO 2: Azioni Base (Soggetto + Verbo + Oggetto) ---
    { id: "s_zh_7", lang: "zh", text: "我吃水果", pronunciation: "Wǒ chī shuǐguǒ", translation: "Io mangio frutta", requires: ["g_zh_pron_1", "v_zh_top_51", "n_zh_ext_21"] },
    { id: "s_zh_8", lang: "zh", text: "他喝水", pronunciation: "Tā hē shuǐ", translation: "Lui beve acqua", requires: ["g_zh_pron_3", "v_zh_top_52", "rad_acqua"] },
    { id: "s_zh_9", lang: "zh", text: "你看书", pronunciation: "Nǐ kàn shū", translation: "Tu leggi (guardi) un libro", requires: ["g_zh_pron_2", "v_zh_top_23", "soc_zh4"] },
    { id: "s_zh_10", lang: "zh", text: "我们去学校", pronunciation: "Wǒmen qù xuéxiào", translation: "Noi andiamo a scuola", requires: ["g_zh_pron_5", "v_zh_top_9", "soc_zh2"] },
    { id: "s_zh_11", lang: "zh", text: "鸟飞", pronunciation: "Niǎo fēi", translation: "L'uccello vola", requires: ["n_zh_ext_33", "v_zh_top_14"] },
    { id: "s_zh_12", lang: "zh", text: "她爱大自然", pronunciation: "Tā ài dàzìrán", translation: "Lei ama la natura", requires: ["g_zh_pron_4", "v_zh_top_31", "n_zh_ext_42"] },

    // --- LIVELLO 3: Possesso e Classificatori (的, 个, 本) ---
    { id: "s_zh_13", lang: "zh", text: "这是我的书", pronunciation: "Zhè shì wǒ de shū", translation: "Questo è il mio libro", requires: ["g_zh_dem_1", "v_zh_top_1", "g_zh_pron_1", "g_zh_part_1", "soc_zh4"] },
    { id: "s_zh_14", lang: "zh", text: "她是我的朋友", pronunciation: "Tā shì wǒ de péngyǒu", translation: "Lei è mia amica", requires: ["g_zh_pron_4", "v_zh_top_1", "g_zh_pron_1", "g_zh_part_1", "soc_zh5"] },
    { id: "s_zh_15", lang: "zh", text: "我有三个哥哥", pronunciation: "Wǒ yǒu sān gè gēge", translation: "Ho tre fratelli maggiori", requires: ["g_zh_pron_1", "v_zh_top_2", "num_zh3", "g_zh_cl_1", "fam_zh3"] },
    { id: "s_zh_16", lang: "zh", text: "我要两本书", pronunciation: "Wǒ yào liǎng běn shū", translation: "Voglio due libri", requires: ["g_zh_pron_1", "v_zh_top_30", "num_zh2", "g_zh_cl_4", "soc_zh4"] }, // Nota: "Due" per quantità si dice "liǎng" non "èr", ma per ora va bene capire il concetto.
    { id: "s_zh_17", lang: "zh", text: "这里有一只鸟", pronunciation: "Zhèlǐ yǒu yī zhī niǎo", translation: "Qui c'è un uccello", requires: ["g_zh_dem_3", "v_zh_top_2", "num_zh1", "g_zh_cl_2", "n_zh_ext_33"] },

    // --- LIVELLO 4: Negazioni e Domande (不, 没, 吗) ---
    { id: "s_zh_18", lang: "zh", text: "我不去", pronunciation: "Wǒ bù qù", translation: "Io non vado", requires: ["g_zh_pron_1", "g_zh_neg_1", "v_zh_top_9"] },
    { id: "s_zh_19", lang: "zh", text: "他没钱", pronunciation: "Tā méi qián", translation: "Lui non ha soldi", requires: ["g_zh_pron_3", "g_zh_neg_2", "soc_zh6"] },
    { id: "s_zh_20", lang: "zh", text: "你不吃肉吗？", pronunciation: "Nǐ bù chī ròu ma?", translation: "Non mangi carne?", requires: ["g_zh_pron_2", "g_zh_neg_1", "v_zh_top_51", "g_zh_part_2"] }, // "ròu" (carne) extra
    { id: "s_zh_21", lang: "zh", text: "这是什么？", pronunciation: "Zhè shì shénme?", translation: "Che cos'è questo?", requires: ["g_zh_dem_1", "v_zh_top_1", "g_zh_int_1"] },
    { id: "s_zh_22", lang: "zh", text: "学校在哪儿？", pronunciation: "Xuéxiào zài nǎr?", translation: "Dov'è la scuola?", requires: ["soc_zh2", "v_zh_top_5", "g_zh_int_2"] },
    { id: "s_zh_23", lang: "zh", text: "你喜欢书吗？", pronunciation: "Nǐ xǐhuān shū ma?", translation: "Ti piacciono i libri?", requires: ["g_zh_pron_2", "v_zh_top_32", "soc_zh4", "g_zh_part_2"] },

    // --- LIVELLO 5: Frasi Complesse (Tempo, Luogo, Passato) ---
    { id: "s_zh_24", lang: "zh", text: "明天我去北京", pronunciation: "Míngtiān wǒ qù Běijīng", translation: "Domani vado a Pechino", requires: ["tm_zh5", "g_zh_pron_1", "v_zh_top_9"] },
    { id: "s_zh_25", lang: "zh", text: "我买了一张票", pronunciation: "Wǒ mǎi le yī zhāng piào", translation: "Ho comprato un biglietto", requires: ["g_zh_pron_1", "v_zh_top_55", "g_zh_part_3", "num_zh1", "v_zh_ext_7"] },
    { id: "s_zh_26", lang: "zh", text: "爸爸和妈妈在家", pronunciation: "Bàba hé māma zài jiā", translation: "Papà e mamma sono a casa", requires: ["fam_zh1", "g_zh_part_5", "fam_zh2", "v_zh_top_5", "soc_zh1"] },
    { id: "s_zh_27", lang: "zh", text: "我看海和山", pronunciation: "Wǒ kàn hǎi hé shān", translation: "Guardo il mare e la montagna", requires: ["g_zh_pron_1", "v_zh_top_23", "zh16", "g_zh_part_5", "zh7"] },
    { id: "s_zh_28", lang: "zh", text: "天在下雨", pronunciation: "Tiān zài xià yǔ", translation: "Sta piovendo (Il cielo sta piovendo)", requires: ["zh12", "v_zh_top_5", "rad_pioggia"] },
    { id: "s_zh_29", lang: "zh", text: "我们要坐火车", pronunciation: "Wǒmen yào zuò huǒchē", translation: "Vogliamo prendere il treno", requires: ["g_zh_pron_5", "v_zh_top_30", "v_zh_top_19", "v_zh6"] },
    { id: "s_zh_30", lang: "zh", text: "森林里有很多树", pronunciation: "Sēnlín lǐ yǒu hěnduō shù", translation: "Nella foresta ci sono molti alberi", requires: ["zh13", "v_zh_top_2", "g_zh_part_4", "n_zh_ext_12"] }, // "lǐ" (dentro) e "duō" (molti) sono concetti impliciti qui

    // ==========================================
    // FRASI GIAPPONESE (LIVELLI 1-5)
    // ==========================================

    // --- LIVELLO 1: Identità e Descrizioni Semplici (X wa Y desu) ---
    { id: "s_ja_1", lang: "ja", text: "これは山です", pronunciation: "Kore wa yama desu", translation: "Questa è una montagna", requires: ["g_ja_dem_1", "g_ja_part_1", "ja2", "g_ja_aux_1"] },
    { id: "s_ja_2", lang: "ja", text: "私はイタリア人です", pronunciation: "Watashi wa Itaria-jin desu", translation: "Io sono italiano", requires: ["g_ja_pron_1", "g_ja_part_1", "rad_uomo_ja", "g_ja_aux_1"] }, // "jin" usa il radicale uomo
    { id: "s_ja_3", lang: "ja", text: "花は赤です", pronunciation: "Hana wa aka desu", translation: "Il fiore è rosso", requires: ["ja13", "g_ja_part_1", "col_ja3", "g_ja_aux_1"] },
    { id: "s_ja_4", lang: "ja", text: "あれは月です", pronunciation: "Are wa tsuki desu", translation: "Quella è la luna", requires: ["g_ja_dem_3", "g_ja_part_1", "rad_luna_ja", "g_ja_aux_1"] },
    { id: "s_ja_5", lang: "ja", text: "彼は先生です", pronunciation: "Kare wa sensei desu", translation: "Lui è un insegnante", requires: ["g_ja_pron_3", "g_ja_part_1", "soc_ja5", "g_ja_aux_1"] },
    { id: "s_ja_6", lang: "ja", text: "空は青です", pronunciation: "Sora wa ao desu", translation: "Il cielo è blu", requires: ["n_ja_ext_27", "g_ja_part_1", "col_ja4", "g_ja_aux_1"] },

    // --- LIVELLO 2: Azioni Base (Soggetto + Wa + Oggetto + O + Verbo) ---
    { id: "s_ja_7", lang: "ja", text: "私は水を飲みます", pronunciation: "Watashi wa mizu o nomimasu", translation: "Io bevo acqua", requires: ["g_ja_pron_1", "rad_acqua_ja", "g_ja_part_2", "v_ja_top_22", "g_ja_aux_2"] },
    { id: "s_ja_8", lang: "ja", text: "彼は果物を食べます", pronunciation: "Kare wa kudamono o tabemasu", translation: "Lui mangia frutta", requires: ["g_ja_pron_3", "n_ja_ext_22", "g_ja_part_2", "v_ja_top_21", "g_ja_aux_2"] },
    { id: "s_ja_9", lang: "ja", text: "彼女は本を読みます", pronunciation: "Kanojo wa hon o yomimasu", translation: "Lei legge un libro", requires: ["g_ja_pron_4", "soc_ja3", "g_ja_part_2", "v_ja_top_54", "g_ja_aux_2"] },
    { id: "s_ja_10", lang: "ja", text: "母は魚を買います", pronunciation: "Haha wa sakana o kaimasu", translation: "La mamma compra il pesce", requires: ["fam_ja2", "n_ja_ext_38", "g_ja_part_2", "v_ja_top_35", "g_ja_aux_2"] },
    { id: "s_ja_11", lang: "ja", text: "鳥は空を飛びます", pronunciation: "Tori wa sora o tobimasu", translation: "L'uccello vola nel cielo", requires: ["n_ja_ext_37", "n_ja_ext_27", "g_ja_part_2", "v_ja_top_13", "g_ja_aux_2"] }, // "O" si usa anche per "attraversare" uno spazio

    // --- LIVELLO 3: Movimento e Luoghi (Destinazione + Ni) ---
    { id: "s_ja_12", lang: "ja", text: "明日、学校に行きます", pronunciation: "Ashita, gakkou ni ikimasu", translation: "Domani vado a scuola", requires: ["tm_ja5", "soc_ja2", "g_ja_part_3", "v_ja_top_7", "g_ja_aux_2"] },
    { id: "s_ja_13", lang: "ja", text: "家に帰ります", pronunciation: "Ie ni kaerimasu", translation: "Torno a casa", requires: ["soc_ja1", "g_ja_part_3", "v_ja_top_9", "g_ja_aux_2"] },
    { id: "s_ja_14", lang: "ja", text: "海に来ます", pronunciation: "Umi ni kimasu", translation: "Vengo al mare", requires: ["n_ja_ext_4", "g_ja_part_3", "v_ja_top_8", "g_ja_aux_2"] },
    { id: "s_ja_15", lang: "ja", text: "山に登ります", pronunciation: "Yama ni noborimasu", translation: "Scalo (salgo su) la montagna", requires: ["ja2", "g_ja_part_3", "v_ja_top_16", "g_ja_aux_2"] }, // v_ja_top_16 è "salire" (noru/noboru)

    // --- LIVELLO 4: Esistenza e Possesso (Arimasu/Imasu/No) ---
    { id: "s_ja_16", lang: "ja", text: "これは私の本です", pronunciation: "Kore wa watashi no hon desu", translation: "Questo è il mio libro", requires: ["g_ja_dem_1", "g_ja_pron_1", "g_ja_part_5", "soc_ja3", "g_ja_aux_1"] },
    { id: "s_ja_17", lang: "ja", text: "ここに木があります", pronunciation: "Koko ni ki ga arimasu", translation: "Qui c'è un albero", requires: ["g_ja_dem_4", "g_ja_part_3", "rad_albero_ja", "g_ja_part_6", "g_ja_aux_3"] },
    { id: "s_ja_18", lang: "ja", text: "あそこに川があります", pronunciation: "Asoko ni kawa ga arimasu", translation: "Laggiù c'è un fiume", requires: ["g_ja_dem_6", "ja1", "g_ja_part_6", "g_ja_aux_3"] },
    { id: "s_ja_19", lang: "ja", text: "虫がいます", pronunciation: "Mushi ga imasu", translation: "C'è un insetto", requires: ["n_ja_ext_39", "g_ja_part_6", "g_ja_aux_4"] }, // "Imasu" per esseri viventi
    { id: "s_ja_20", lang: "ja", text: "私はお金があります", pronunciation: "Watashi wa okane ga arimasu", translation: "Io ho (i) soldi", requires: ["g_ja_pron_1", "v_ja_ext_51", "g_ja_part_6", "g_ja_aux_3"] }, // Avere si esprime con "esistere" (arimasu)

    // --- LIVELLO 5: Domande, Mezzi e Congiunzioni (Ka, De, To) ---
    { id: "s_ja_21", lang: "ja", text: "駅はどこですか？", pronunciation: "Eki wa doko desu ka?", translation: "Dov'è la stazione?", requires: ["v_ja4", "g_ja_int_3", "g_ja_aux_1", "g_ja_part_7"] },
    { id: "s_ja_22", lang: "ja", text: "これは何ですか？", pronunciation: "Kore wa nani desu ka?", translation: "Cos'è questo?", requires: ["g_ja_dem_1", "g_ja_int_1", "g_ja_part_7"] },
    { id: "s_ja_23", lang: "ja", text: "電車で行きます", pronunciation: "Densha de ikimasu", translation: "Vado in treno", requires: ["v_ja6", "g_ja_part_4", "v_ja_top_7"] },
    { id: "s_ja_24", lang: "ja", text: "友達と話します", pronunciation: "Tomodachi to hanashimasu", translation: "Parlo con un amico", requires: ["soc_ja4", "g_ja_part_8", "v_ja_top_51"] },
    { id: "s_ja_25", lang: "ja", text: "父と母", pronunciation: "Chichi to haha", translation: "Papà e mamma", requires: ["fam_ja1", "g_ja_part_8", "fam_ja2"] },
    { id: "s_ja_26", lang: "ja", text: "あなたも行きますか？", pronunciation: "Anata mo ikimasu ka?", translation: "Vai anche tu?", requires: ["g_ja_pron_2", "g_ja_part_9", "v_ja_top_7", "g_ja_part_7"] },
    
    // --- LIVELLO 6: Frasi Complesse / Viaggio ---
    { id: "s_ja_27", lang: "ja", text: "チケットを買います", pronunciation: "Chiketto o kaimasu", translation: "Compro un biglietto", requires: ["v_ja_ext_7", "g_ja_part_2", "v_ja_top_35"] },
    { id: "s_ja_28", lang: "ja", text: "パスポートを見せます", pronunciation: "Pasupooto o misemasu", translation: "Mostro il passaporto", requires: ["v_ja_ext_8", "g_ja_part_2", "v_ja_top_66"] },
    { id: "s_ja_29", lang: "ja", text: "トイレはどこですか？", pronunciation: "Toire wa doko desu ka?", translation: "Dov'è il bagno?", requires: ["v_ja_ext_50", "g_ja_int_3", "g_ja_part_7"] },
    { id: "s_ja_30", lang: "ja", text: "助けて！", pronunciation: "Tasukete!", translation: "Aiuto!", requires: ["v_ja_ext_46"] },

    // ==========================================
    // FRASI ARABO (LIVELLI 1-6)
    // ==========================================

    // --- LIVELLO 1: Frasi Nominali (Senza verbo "essere") ---
    { id: "s_ar_1", lang: "ar", text: "هَذَا بَيْت", pronunciation: "Hādhā bayt", translation: "Questa è una casa", requires: ["g_ar_dem_1", "soc_ar1"] },
    { id: "s_ar_2", lang: "ar", text: "أَنَا أَب", pronunciation: "Ana ab", translation: "Io sono un padre", requires: ["g_ar_pron_1", "fam_ar1"] },
    { id: "s_ar_3", lang: "ar", text: "الْكِتَاب كَبِير", pronunciation: "Al-kitāb kabīr", translation: "Il libro è grande", requires: ["g_ar_part_1", "soc_ar2", "root_kbr"] },
    { id: "s_ar_4", lang: "ar", text: "هَذِهِ أُمّ", pronunciation: "Hādhihi umm", translation: "Questa è una madre", requires: ["g_ar_dem_2", "fam_ar2"] },
    { id: "s_ar_5", lang: "ar", text: "الْبَحْر أَزْرَق", pronunciation: "Al-baḥr azraq", translation: "Il mare è blu", requires: ["g_ar_part_1", "n_ar_ext_17", "col_ar4"] }, // Baḥr era ar17 o root_bhr, uso l'estensione o derivato

    // --- LIVELLO 2: Preposizioni e Luoghi (Fi, Ila, Min, Ala) ---
    { id: "s_ar_6", lang: "ar", text: "هُوَ فِي الْمَدْرَسَة", pronunciation: "Huwa fī al-madrasa", translation: "Lui è nella scuola", requires: ["g_ar_pron_4", "g_ar_prep_1", "g_ar_part_1", "soc_ar4"] },
    { id: "s_ar_7", lang: "ar", text: "الْقَلَم عَلَى الْمَكْتَب", pronunciation: "Al-qalam 'alā al-maktab", translation: "La penna è sulla scrivania", requires: ["g_ar_part_1", "root_ktb", "g_ar_prep_4", "soc_ar3"] }, // "Qalam" non c'è, uso "Kitāb" o assumo vocabolario base. Uso: Il libro è sulla scrivania -> Al-kitāb 'alā al-maktab
    { id: "s_ar_7_fix", lang: "ar", text: "الْكِتَاب عَلَى الْمَكْتَب", pronunciation: "Al-kitāb 'alā al-maktab", translation: "Il libro è sulla scrivania", requires: ["soc_ar2", "g_ar_prep_4", "soc_ar3"] },
    { id: "s_ar_8", lang: "ar", text: "أَنَا مِنْ إِيطَالِيَا", pronunciation: "Ana min Īṭāliyā", translation: "Io sono (vengo) dall'Italia", requires: ["g_ar_pron_1", "g_ar_prep_3"] }, // Italia parola extra semplice
    { id: "s_ar_9", lang: "ar", text: "الْوَلَد مَعَ الْأَب", pronunciation: "Al-walad ma'a al-ab", translation: "Il bambino è con il padre", requires: ["v_ar_top_100", "g_ar_prep_6", "g_ar_part_1", "fam_ar1"] }, // Walad da verbo "Wulida" o radicale

    // --- LIVELLO 3: Possesso (Suffissi e 'Inda) ---
    { id: "s_ar_10", lang: "ar", text: "هَذَا كِتَابِي", pronunciation: "Hādhā kitābī", translation: "Questo è il mio libro", requires: ["g_ar_dem_1", "soc_ar2", "g_ar_suff_1"] },
    { id: "s_ar_11", lang: "ar", text: "أَيْنَ بَيْتُكَ؟", pronunciation: "Ayna baytuka?", translation: "Dov'è la tua casa?", requires: ["g_ar_int_3", "soc_ar1", "g_ar_suff_2"] },
    { id: "s_ar_12", lang: "ar", text: "عِنْدِي تِذْكَرَة", pronunciation: "'Indī tadhkira", translation: "Ho un biglietto", requires: ["g_ar_have_1", "g_ar_suff_1", "v_ar_ext_7"] },
    { id: "s_ar_13", lang: "ar", text: "لَيْسَ عِنْدِي مَال", pronunciation: "Laysa 'indī māl", translation: "Non ho soldi", requires: ["g_ar_neg_2", "g_ar_have_1", "g_ar_suff_1", "root_mlk"] }, // Māl (soldi) o uso Nuqūd (v_ar_ext_51)
    { id: "s_ar_13_fix", lang: "ar", text: "لَيْسَ عِنْدِي نُقُود", pronunciation: "Laysa 'indī nuqūd", translation: "Non ho soldi", requires: ["g_ar_neg_2", "g_ar_have_1", "g_ar_suff_1", "v_ar_ext_51"] },
    { id: "s_ar_14", lang: "ar", text: "اِسْمُهُ مُحَمَّد", pronunciation: "Ismuhu Muḥammad", translation: "Il suo nome è Muhammad", requires: ["root_sm", "g_ar_suff_4"] }, // "Ism" (nome) concetto base

    // --- LIVELLO 4: Verbi al Presente (Soggetto implicito o esplicito) ---
    { id: "s_ar_15", lang: "ar", text: "أَنَا أَشْرَبُ الْمَاء", pronunciation: "Ana ashrabu al-mā'", translation: "Io bevo l'acqua", requires: ["g_ar_pron_1", "v_ar_top_58", "g_ar_part_1", "base_ma"] },
    { id: "s_ar_16", lang: "ar", text: "هُوَ يَأْكُلُ فَاكِهَة", pronunciation: "Huwa ya'kulu fākiha", translation: "Lui mangia frutta", requires: ["g_ar_pron_4", "v_ar_top_57", "n_ar_ext_22"] },
    { id: "s_ar_17", lang: "ar", text: "نَحْنُ نَذْهَبُ إِلَى الْمَطَار", pronunciation: "Naḥnu nadhhabu ilā al-maṭār", translation: "Noi andiamo all'aeroporto", requires: ["g_ar_pron_6", "v_ar_top_11", "g_ar_prep_2", "g_ar_part_1", "v_ar5"] },
    { id: "s_ar_18", lang: "ar", text: "هِيَ تَقْرَأُ كِتَاب", pronunciation: "Hiya taqra'u kitāb", translation: "Lei legge un libro", requires: ["g_ar_pron_5", "v_ar_top_52", "soc_ar2"] },
    { id: "s_ar_19", lang: "ar", text: "هُم يَسْكُنُونَ هُنَا", pronunciation: "Hum yaskunūna hunā", translation: "Loro abitano qui", requires: ["g_ar_pron_7", "v_ar_top_70", "g_ar_dem_5"] },

    // --- LIVELLO 5: Domande e Negazioni ---
    { id: "s_ar_20", lang: "ar", text: "مَا هَذَا؟", pronunciation: "Mā hādhā?", translation: "Cos'è questo?", requires: ["g_ar_int_1", "g_ar_dem_1"] },
    { id: "s_ar_21", lang: "ar", text: "مَنْ أَنْتَ؟", pronunciation: "Man anta?", translation: "Chi sei tu?", requires: ["g_ar_int_2", "g_ar_pron_2"] },
    { id: "s_ar_22", lang: "ar", text: "هَلْ أَنْتَ طَالِب؟", pronunciation: "Hal anta ṭālib?", translation: "Sei uno studente?", requires: ["g_ar_int_5", "g_ar_pron_2", "root_drs"] }, // Ṭālib deriva da radice DRS
    { id: "s_ar_23", lang: "ar", text: "لِمَاذَا لَا تَأْكُلُ؟", pronunciation: "Limādhā lā ta'kulu?", translation: "Perché non mangi?", requires: ["g_ar_int_6", "g_ar_neg_1", "v_ar_top_57"] },
    { id: "s_ar_24", lang: "ar", text: "كَمْ السِّعْر؟", pronunciation: "Kam as-si'r?", translation: "Quanto costa? (Qual è il prezzo)", requires: ["g_ar_int_7", "g_ar_part_1", "v_ar_ext_53"] },

    // --- LIVELLO 6: Viaggio e Natura (Frasi Complesse) ---
    { id: "s_ar_25", lang: "ar", text: "الشَّمْس وَ الْقَمَر", pronunciation: "Ash-shams wa al-qamar", translation: "Il sole e la luna", requires: ["g_ar_part_1", "ar14", "g_ar_conj_1", "ar15"] },
    { id: "s_ar_26", lang: "ar", text: "أُرِيدُ فُنْدُق قَرِيب", pronunciation: "Urīdu funduq qarīb", translation: "Voglio un hotel vicino", requires: ["v_ar_top_37", "v_ar_ext_14", "v_ar_ext_29"] },
    { id: "s_ar_27", lang: "ar", text: "أَسَافِرُ بِالْقِطَار", pronunciation: "Usāfiru bi-l-qiṭār", translation: "Viaggio in treno", requires: ["v_ar_top_22", "g_ar_prep_5", "g_ar_part_1", "v_ar_ext_10"] },
    { id: "s_ar_28", lang: "ar", text: "الْجَوّ جَمِيل الْيَوْم", pronunciation: "Al-jaww jamīl al-yawm", translation: "Il tempo è bello oggi", requires: ["g_ar_part_1", "n_ar_ext_33", "tm_ar4"] }, // Jaww (clima/tempo), Jamīl (bello - extra base)
    { id: "s_ar_29", lang: "ar", text: "هَلْ يُمكِنُنِي الدُّخُول؟", pronunciation: "Hal yumkinunī ad-dukhūl?", translation: "Posso entrare?", requires: ["g_ar_int_5", "v_ar_top_5", "v_ar_top_14"] }, // Yumkin (potere), Dukhul (entrare)
    { id: "s_ar_30", lang: "ar", text: "أَيْنَ الْحَمَّام؟", pronunciation: "Ayna al-ḥammām?", translation: "Dov'è il bagno?", requires: ["g_ar_int_3", "g_ar_part_1", "v_ar_ext_50"] },
    
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
