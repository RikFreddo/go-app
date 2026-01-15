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
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "t͡ɕʰjɛn³⁵", meaning: "Soldi", type: "base", pos: "noun" },
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
