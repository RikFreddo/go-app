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
            { id: "root_rkb", lang: "ar", level: 1, word: "ر ك ب", pronunciation: "R-K-B", ipa: "r-k-b
