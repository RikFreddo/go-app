const decks = {
    // ============================================================
    // 1. FUNDAMENTALS (Expanded with Radicals and Numbers 1-10)
    // ============================================================
    "fondamentali_zh": {
        title: "Fundamentals (Chinese)", tags: ["fundamentals", "zh"],
        cards: [
            // --- PEOPLE & BODY RADICALS ---
            { id: "rad_uomo", lang: "zh", level: 1, word: "人", pronunciation: "rén", ipa: "ɻən³⁵", meaning: "Person", type: "base", pos: "noun" },
            { id: "rad_donna", lang: "zh", level: 1, word: "女", pronunciation: "nǚ", ipa: "ny²¹⁴", meaning: "Woman", type: "base", pos: "noun" },
            { id: "rad_bambino", lang: "zh", level: 1, word: "子", pronunciation: "zǐ", ipa: "t͡sz̩²¹⁴", meaning: "Child", type: "base", pos: "noun" },
            { id: "rad_bocca", lang: "zh", level: 1, word: "口", pronunciation: "kǒu", ipa: "kʰoʊ̯²¹⁴", meaning: "Mouth", type: "base", pos: "noun" },
            { id: "rad_cuore", lang: "zh", level: 1, word: "心", pronunciation: "xīn", ipa: "ɕin⁵⁵", meaning: "Heart", type: "base", pos: "noun" },
            { id: "rad_mano", lang: "zh", level: 1, word: "手", pronunciation: "shǒu", ipa: "ʂoʊ̯²¹⁴", meaning: "Hand", type: "base", pos: "noun" },
            
            // --- NATURE & TRAVEL RADICALS ---
            { id: "rad_acqua", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯˨˩˦", meaning: "Water (Radical)", type: "base", pos: "noun" },
            { id: "rad_fuoco", lang: "zh", level: 1, word: "火", pronunciation: "huǒ", ipa: "xwɔ˨˩˦", meaning: "Fire (Radical)", type: "base", pos: "noun" },
            { id: "rad_terra", lang: "zh", level: 1, word: "土", pronunciation: "tǔ", ipa: "tʰu˨˩˦", meaning: "Earth (Radical)", type: "base", pos: "noun" },
            { id: "rad_albero", lang: "zh", level: 1, word: "木", pronunciation: "mù", ipa: "mu⁵¹", meaning: "Wood / Tree", type: "base", pos: "noun" },
            { id: "rad_pioggia", lang: "zh", level: 1, word: "雨", pronunciation: "yǔ", ipa: "y˨˩˦", meaning: "Rain (Radical)", type: "base", pos: "noun" },
            { id: "rad_erba", lang: "zh", level: 1, word: "草", pronunciation: "cǎo", ipa: "tsʰɑʊ̯˨˩˦", meaning: "Grass (Radical)", type: "base", pos: "noun" },
            { id: "rad_veicolo", lang: "zh", level: 1, word: "车", pronunciation: "chē", ipa: "ʈʂʰɤ˥", meaning: "Vehicle / Car", type: "base", pos: "noun" },
            { id: "rad_metallo", lang: "zh", level: 1, word: "金", pronunciation: "jīn", ipa: "tɕin˥", meaning: "Metal / Gold", type: "base", pos: "noun" },
            { id: "rad_sole", lang: "zh", level: 1, word: "日", pronunciation: "rì", ipa: "ʐɻ̩⁵¹", meaning: "Sun / Day", type: "base", pos: "noun" },
            { id: "rad_luna", lang: "zh", level: 1, word: "月", pronunciation: "yuè", ipa: "ɥœ⁵¹", meaning: "Moon / Month", type: "base", pos: "noun" },
            { id: "rad_campo", lang: "zh", level: 1, word: "田", pronunciation: "tián", ipa: "tʰjɛn³⁵", meaning: "Field", type: "base", pos: "place" },

            // --- OBJECTS & STRUCTURES ---
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", pronunciation: "mián", ipa: "mjɛn³⁵", meaning: "Roof", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", pronunciation: "mén", ipa: "mən³⁵", meaning: "Door / Gate", type: "base", pos: "place" },
            { id: "rad_forza", lang: "zh", level: 1, word: "力", pronunciation: "lì", ipa: "li⁵¹", meaning: "Power / Strength", type: "base", pos: "noun" },
            { id: "rad_parola", lang: "zh", level: 1, word: "言", pronunciation: "yán", ipa: "jɛn³⁵", meaning: "Speech / Word", type: "base", pos: "noun" },
            
            // --- BASIC CONCEPTS ---
            { id: "base_grande", lang: "zh", level: 1, word: "大", pronunciation: "dà", ipa: "ta⁵¹", meaning: "Big", type: "base", pos: "adj" },
            { id: "base_piccolo", lang: "zh", level: 1, word: "小", pronunciation: "xiǎo", ipa: "ɕjɑʊ̯²¹⁴", meaning: "Small", type: "base", pos: "adj" },
            { id: "base_mezzo", lang: "zh", level: 1, word: "中", pronunciation: "zhōng", ipa: "t͡ʂʊŋ⁵⁵", meaning: "Middle / Center", type: "base", pos: "adj" },

            // --- NUMBERS ---
            { id: "num_zh1", lang: "zh", level: 1, word: "一", pronunciation: "yī", ipa: "i⁵⁵", meaning: "One", type: "base", pos: "num" },
            { id: "num_zh2", lang: "zh", level: 1, word: "二", pronunciation: "èr", ipa: "ɑɻ⁵¹", meaning: "Two", type: "base", pos: "num" },
            { id: "num_zh3", lang: "zh", level: 1, word: "三", pronunciation: "sān", ipa: "san⁵⁵", meaning: "Three", type: "base", pos: "num" },
            { id: "num_zh4", lang: "zh", level: 1, word: "四", pronunciation: "sì", ipa: "sz̩⁵¹", meaning: "Four", type: "base", pos: "num" },
            { id: "num_zh5", lang: "zh", level: 1, word: "五", pronunciation: "wǔ", ipa: "u²¹⁴", meaning: "Five", type: "base", pos: "num" },
            { id: "num_zh6", lang: "zh", level: 1, word: "六", pronunciation: "liù", ipa: "ljoʊ̯⁵¹", meaning: "Six", type: "base", pos: "num" },
            { id: "num_zh7", lang: "zh", level: 1, word: "七", pronunciation: "qī", ipa: "t͡ɕʰi⁵⁵", meaning: "Seven", type: "base", pos: "num" },
            { id: "num_zh8", lang: "zh", level: 1, word: "八", pronunciation: "bā", ipa: "pa⁵⁵", meaning: "Eight", type: "base", pos: "num" },
            { id: "num_zh9", lang: "zh", level: 1, word: "九", pronunciation: "jiǔ", ipa: "t͡ɕjoʊ̯²¹⁴", meaning: "Nine", type: "base", pos: "num" },
            { id: "num_zh10", lang: "zh", level: 1, word: "十", pronunciation: "shí", ipa: "ʂɻ̩³⁵", meaning: "Ten", type: "base", pos: "num" },

            // --- COLORS ---
            { id: "col_zh1", lang: "zh", level: 1, word: "白", pronunciation: "bái", ipa: "paɪ̯³⁵", meaning: "White", type: "base", pos: "adj" },
            { id: "col_zh2", lang: "zh", level: 1, word: "黑", pronunciation: "hēi", ipa: "xeɪ̯⁵⁵", meaning: "Black", type: "base", pos: "adj" },
            { id: "col_zh3", lang: "zh", level: 1, word: "红", pronunciation: "hóng", ipa: "xʊŋ³⁵", meaning: "Red", type: "base", pos: "adj" },
            { id: "col_zh4", lang: "zh", level: 1, word: "蓝", pronunciation: "lán", ipa: "lan³⁵", meaning: "Blue", type: "base", pos: "adj" },

            // --- TIME ---
            { id: "tm_zh3", lang: "zh", level: 1, word: "年", pronunciation: "nián", ipa: "njɛn³⁵", meaning: "Year", type: "base", pos: "noun" },
            { id: "tm_zh4", lang: "zh", level: 2, word: "今天", pronunciation: "jīntiān", ipa: "t͡ɕin⁵⁵ tʰjɛn⁵⁵", meaning: "Today", type: "derived", requires: ["rad_sole"], pos: "noun" },
            { id: "tm_zh5", lang: "zh", level: 2, word: "明天", pronunciation: "míngtiān", ipa: "mjŋ³⁵ tʰjɛn⁵⁵", meaning: "Tomorrow", type: "derived", requires: ["rad_sole", "rad_luna"], pos: "noun" }
        ]
    },

 "fondamentali_ja": {
        title: "Fundamentals (Japanese)", tags: ["fundamentals", "ja"],
        cards: [
            // --- PEOPLE & BODY RADICALS ---
            { id: "rad_uomo_ja", lang: "ja", level: 1, word: "人", pronunciation: "ひと", ipa: "çi̥to", meaning: "Person", type: "base", pos: "noun" },
            { id: "rad_donna_ja", lang: "ja", level: 1, word: "女", pronunciation: "おんな", ipa: "onːa", meaning: "Woman", type: "base", pos: "noun" },
            { id: "rad_bambino_ja", lang: "ja", level: 1, word: "子", pronunciation: "こ", ipa: "ko", meaning: "Child", type: "base", pos: "noun" },
            { id: "rad_bocca_ja", lang: "ja", level: 1, word: "口", pronunciation: "くち", ipa: "kɯ̥t͡ɕi", meaning: "Mouth", type: "base", pos: "noun" },
            { id: "rad_cuore_ja", lang: "ja", level: 1, word: "心", pronunciation: "こころ", ipa: "kokoɾo", meaning: "Heart", type: "base", pos: "noun" },
            { id: "rad_mano_ja", lang: "ja", level: 1, word: "手", pronunciation: "て", ipa: "te", meaning: "Hand", type: "base", pos: "noun" },
            
            // --- NATURE & TRAVEL RADICALS ---
            { id: "rad_acqua_ja", lang: "ja", level: 1, word: "水", pronunciation: "みず", ipa: "mizɯ", meaning: "Water", type: "base", pos: "noun" },
            { id: "rad_fuoco_ja", lang: "ja", level: 1, word: "火", pronunciation: "ひ", ipa: "çi", meaning: "Fire", type: "base", pos: "noun" },
            { id: "rad_terra_ja", lang: "ja", level: 1, word: "土", pronunciation: "つち", ipa: "tsɯtɕi", meaning: "Earth / Soil", type: "base", pos: "noun" },
            { id: "rad_albero_ja", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "ki", meaning: "Tree / Wood", type: "base", pos: "noun" },
            { id: "rad_pioggia_ja", lang: "ja", level: 1, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Rain", type: "base", pos: "noun" },
            { id: "rad_veicolo_ja", lang: "ja", level: 1, word: "車", pronunciation: "くるま", ipa: "kɯɾɯma", meaning: "Car / Vehicle", type: "base", pos: "noun" },
            { id: "rad_metallo_ja", lang: "ja", level: 1, word: "金", pronunciation: "かね", ipa: "kane", meaning: "Gold / Metal / Money", type: "base", pos: "noun" },
            { id: "rad_sole_ja", lang: "ja", level: 1, word: "日", pronunciation: "ひ", ipa: "çi", meaning: "Sun / Day", type: "base", pos: "noun" },
            { id: "rad_luna_ja", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "t͡sɯki̥", meaning: "Moon / Month", type: "base", pos: "noun" },

            // --- OBJECTS & CONCEPTS ---
            { id: "rad_tetto_ja", lang: "ja", level: 1, word: "宀", pronunciation: "うかんむり", ipa: "ukammuɾi", meaning: "Roof (Radical)", type: "base", pos: "noun" },
            { id: "rad_forza_ja", lang: "ja", level: 1, word: "力", pronunciation: "ちから", ipa: "t͡ɕi̥kaɾa", meaning: "Power / Strength", type: "base", pos: "noun" },
            { id: "rad_parola_ja", lang: "ja", level: 1, word: "言", pronunciation: "げん", ipa: "ɡen", meaning: "Word / Speech", type: "base", pos: "noun" },
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "だい", ipa: "dai", meaning: "Big", type: "base", pos: "adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "しょう", ipa: "ɕoː", meaning: "Small", type: "base", pos: "adj" },

            // --- NUMBERS ---
            { id: "num_ja1", lang: "ja", level: 1, word: "一", pronunciation: "いち", ipa: "it͡ɕi", meaning: "One", type: "base", pos: "num" },
            { id: "num_ja2", lang: "ja", level: 1, word: "二", pronunciation: "に", ipa: "ɲi", meaning: "Two", type: "base", pos: "num" },
            { id: "num_ja3", lang: "ja", level: 1, word: "三", pronunciation: "さん", ipa: "saɴ", meaning: "Three", type: "base", pos: "num" },
            { id: "num_ja4", lang: "ja", level: 1, word: "四", pronunciation: "よん", ipa: "joɴ", meaning: "Four", type: "base", pos: "num" },
            { id: "num_ja5", lang: "ja", level: 1, word: "五", pronunciation: "ご", ipa: "ɡo", meaning: "Five", type: "base", pos: "num" },
            { id: "num_ja6", lang: "ja", level: 1, word: "六", pronunciation: "ろく", ipa: "ɾokɯ", meaning: "Six", type: "base", pos: "num" },
            { id: "num_ja7", lang: "ja", level: 1, word: "七", pronunciation: "なな", ipa: "nana", meaning: "Seven", type: "base", pos: "num" },
            { id: "num_ja8", lang: "ja", level: 1, word: "八", pronunciation: "はち", ipa: "hat͡ɕi", meaning: "Eight", type: "base", pos: "num" },
            { id: "num_ja9", lang: "ja", level: 1, word: "九", pronunciation: "きゅう", ipa: "kʲɯː", meaning: "Nine", type: "base", pos: "num" },
            { id: "num_ja10", lang: "ja", level: 1, word: "十", pronunciation: "じゅう", ipa: "d͡ʑɯː", meaning: "Ten", type: "base", pos: "num" },

            // --- COLORS ---
            { id: "col_ja1", lang: "ja", level: 1, word: "白", pronunciation: "しろ", ipa: "ɕiɾo", meaning: "White", type: "base", pos: "adj" },
            { id: "col_ja2", lang: "ja", level: 1, word: "黒", pronunciation: "くろ", ipa: "kɯɾo", meaning: "Black", type: "base", pos: "adj" },
            { id: "col_ja3", lang: "ja", level: 1, word: "赤", pronunciation: "あか", ipa: "aka", meaning: "Red", type: "base", pos: "adj" },
            { id: "col_ja4", lang: "ja", level: 1, word: "青", pronunciation: "あお", ipa: "ao", meaning: "Blue", type: "base", pos: "adj" },

            // --- TIME ---
            { id: "tm_ja3", lang: "ja", level: 1, word: "年", pronunciation: "とし", ipa: "toɕi", meaning: "Year", type: "base", pos: "noun" },
            { id: "tm_ja4", lang: "ja", level: 2, word: "今日", pronunciation: "きょう", ipa: "kʲoː", meaning: "Today", type: "derived", requires: ["rad_sole_ja"], pos: "noun" },
            { id: "tm_ja5", lang: "ja", level: 2, word: "明日", pronunciation: "あした", ipa: "aɕi̥ta", meaning: "Tomorrow", type: "derived", requires: ["rad_sole_ja", "rad_luna_ja"], pos: "noun" }
        ]
    },

    "fondamentali_ar": {
        title: "Fundamentals (Arabic)", tags: ["fundamentals", "ar"],
        cards: [
            // --- BASIC ROOTS ---
            { id: "root_ktb", lang: "ar", level: 1, word: "ك ت ب", pronunciation: "K-T-B", ipa: "k-t-b", meaning: "Root: To Write", type: "base", pos: "root" },
            { id: "root_drs", lang: "ar", level: 1, word: "د ر س", pronunciation: "D-R-S", ipa: "d-r-s", meaning: "Root: To Study", type: "base", pos: "root" },
            { id: "root_skn", lang: "ar", level: 1, word: "س ك ن", pronunciation: "S-K-N", ipa: "s-k-n", meaning: "Root: To Dwell/Live", type: "base", pos: "root" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ ك ل", pronunciation: "'-K-L", ipa: "ʔ-k-l", meaning: "Root: To Eat", type: "base", pos: "root" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش ر ب", pronunciation: "Sh-R-B", ipa: "ʃ-r-b", meaning: "Root: To Drink", type: "base", pos: "root" },
            { id: "root_fcl", lang: "ar", level: 1, word: "ف ع ل", pronunciation: "F-'-L", ipa: "f-ʕ-l", meaning: "Root: To Do", type: "base", pos: "root" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك ب ر", pronunciation: "K-B-R", ipa: "k-b-r", meaning: "Root: To be Big", type: "base", pos: "root" },
            { id: "root_hbb", lang: "ar", level: 1, word: "ح ب ب", pronunciation: "H-B-B", ipa: "ħ-b-b", meaning: "Root: To Love", type: "base", pos: "root" },
            
            // --- NATURE ROOTS ---
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", ipa: "ʔ-r-dˤ", meaning: "Root: Earth", type: "base", pos: "root" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", ipa: "ʃ-m-s", meaning: "Root: Sun", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", ipa: "q-m-r", meaning: "Root: Moon", type: "base", pos: "root" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", ipa: "b-ħ-r", meaning: "Root: Sea", type: "base", pos: "root" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", ipa: "dʒ-b-l", meaning: "Root: Mountain", type: "base", pos: "root" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", ipa: "ʃ-dʒ-r", meaning: "Root: Tree", type: "base", pos: "root" },
            { id: "root_nhr", lang: "ar", level: 1, word: "ن ه ر", pronunciation: "N-H-R", ipa: "n-h-r", meaning: "Root: River", type: "base", pos: "root" },
            { id: "root_zhr", lang: "ar", level: 1, word: "ز ه ر", pronunciation: "Z-H-R", ipa: "z-h-r", meaning: "Root: Flower", type: "base", pos: "root" },
            { id: "root_shr", lang: "ar", level: 1, word: "ص ح ر", pronunciation: "Ṣ-Ḥ-R", ipa: "sˤ-ħ-r", meaning: "Root: Desert", type: "base", pos: "root" },

            // --- TRAVEL ROOTS ---
            { id: "root_sfr", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", ipa: "s-f-r", meaning: "Root: Travel", type: "base", pos: "root" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", ipa: "tˤ-j-r", meaning: "Root: To Fly", type: "base", pos: "root" },
            { id: "root_nql", lang: "ar", level: 1, word: "ن ق ل", pronunciation: "N-Q-L", ipa: "n-q-l", meaning: "Root: Transport", type: "base", pos: "root" },
            { id: "root_rkb", lang: "ar", level: 1, word: "ر ك ب", pronunciation: "R-K-B", ipa: "r-k-b", meaning: "Root: To Ride", type: "base", pos: "root" },

            // --- NUMBERS ---
            { id: "num_ar1", lang: "ar", level: 1, word: "وَاحِد", pronunciation: "wāḥid", ipa: "waːħid", meaning: "One", type: "base", pos: "num" },
            { id: "num_ar2", lang: "ar", level: 1, word: "اِثْنَان", pronunciation: "ithnān", ipa: "iθnaːn", meaning: "Two", type: "base", pos: "num" },
            { id: "num_ar3", lang: "ar", level: 1, word: "ثَلَاثَة", pronunciation: "thalātha", ipa: "θalaːθa", meaning: "Three", type: "base", pos: "num" },
            { id: "num_ar4", lang: "ar", level: 1, word: "أَرْبَعَة", pronunciation: "arba'a", ipa: "ʔarbaʕa", meaning: "Four", type: "base", pos: "num" },
            { id: "num_ar5", lang: "ar", level: 1, word: "خَمْسَة", pronunciation: "khamsa", ipa: "xamsa", meaning: "Five", type: "base", pos: "num" },
            { id: "num_ar6", lang: "ar", level: 1, word: "سِتَّة", pronunciation: "sitta", ipa: "sitːa", meaning: "Six", type: "base", pos: "num" },
            { id: "num_ar7", lang: "ar", level: 1, word: "سَبْعَة", pronunciation: "sab'a", ipa: "sabʕa", meaning: "Seven", type: "base", pos: "num" },
            { id: "num_ar8", lang: "ar", level: 1, word: "ثَمَانِيَة", pronunciation: "thamāniya", ipa: "θamaːnija", meaning: "Eight", type: "base", pos: "num" },
            { id: "num_ar9", lang: "ar", level: 1, word: "تِسْعَة", pronunciation: "tis'a", ipa: "tisʕa", meaning: "Nine", type: "base", pos: "num" },
            { id: "num_ar10", lang: "ar", level: 1, word: "عَشَرَة", pronunciation: "'ashara", ipa: "ʕaʃara", meaning: "Ten", type: "base", pos: "num" },

            // --- COLORS ---
            { id: "col_ar1", lang: "ar", level: 1, word: "أَبْيَض", pronunciation: "abyaḍ", ipa: "ʔabjadˤ", meaning: "White", type: "base", pos: "adj" },
            { id: "col_ar2", lang: "ar", level: 1, word: "أَسْوَد", pronunciation: "aswad", ipa: "ʔaswad", meaning: "Black", type: "base", pos: "adj" },
            { id: "col_ar3", lang: "ar", level: 1, word: "أَحْمَر", pronunciation: "aḥmar", ipa: "ʔaħmar", meaning: "Red", type: "base", pos: "adj" },
            { id: "col_ar4", lang: "ar", level: 1, word: "أَزْرَق", pronunciation: "azraq", ipa: "ʔazraq", meaning: "Blue", type: "base", pos: "adj" },

            // --- TIME & BASICS ---
            { id: "tm_ar1", lang: "ar", level: 1, word: "يَوْم", pronunciation: "yawm", ipa: "jawm", meaning: "Day", type: "base", pos: "noun" },
            { id: "tm_ar2", lang: "ar", level: 1, word: "شَهْر", pronunciation: "shahr", ipa: "ʃahr", meaning: "Month", type: "base", pos: "noun" },
            { id: "tm_ar3", lang: "ar", level: 1, word: "سَنَة", pronunciation: "sana", ipa: "sana", meaning: "Year", type: "base", pos: "noun" },
            { id: "tm_ar4", lang: "ar", level: 2, word: "الْيَوْم", pronunciation: "al-yawm", ipa: "al-jawm", meaning: "Today", type: "derived", requires: ["tm_ar1"], pos: "noun" },
            { id: "base_ma", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", ipa: "maːʔ", meaning: "Water", type: "base", pos: "noun" }
        ]
    },

// ==========================================
    // 5. GRAMMAR & PARTICLES (Chinese)
    // ==========================================
    "grammatica_zh": {
        title: "Basic Grammar (Chinese)", 
        tags: ["grammar", "zh"],
        cards: [
            // --- PERSONAL PRONOUNS ---
            { id: "g_zh_pron_1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", ipa: "wɔ˨˩˦", meaning: "I / Me", type: "grammar", pos: "pronoun" },
            { id: "g_zh_pron_2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", ipa: "ni˨˩˦", meaning: "You", type: "grammar", pos: "pronoun" },
            { id: "g_zh_pron_3", lang: "zh", level: 1, word: "他", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "He / Him", type: "grammar", pos: "pronoun" },
            { id: "g_zh_pron_4", lang: "zh", level: 1, word: "她", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "She / Her", type: "grammar", pos: "pronoun" },
            { id: "g_zh_pron_5", lang: "zh", level: 1, word: "我们", pronunciation: "wǒmen", ipa: "wɔ˨˩˦ mən", meaning: "We / Us", type: "grammar", pos: "pronoun" },
            { id: "g_zh_pron_6", lang: "zh", level: 1, word: "你们", pronunciation: "nǐmen", ipa: "ni˨˩˦ mən", meaning: "You (plural)", type: "grammar", pos: "pronoun" },
            { id: "g_zh_pron_7", lang: "zh", level: 1, word: "他们", pronunciation: "tāmen", ipa: "tʰa⁵⁵ mən", meaning: "They / Them", type: "grammar", pos: "pronoun" },

            // --- NEGATION ---
            { id: "g_zh_neg_1", lang: "zh", level: 1, word: "不", pronunciation: "bù", ipa: "pu⁵¹", meaning: "No / Not (present/future)", type: "grammar", pos: "adverb" },
            { id: "g_zh_neg_2", lang: "zh", level: 1, word: "没", pronunciation: "méi", ipa: "meɪ̯˧˥", meaning: "No / Not (past/have)", type: "grammar", pos: "adverb" },

            // --- STRUCTURAL PARTICLES ---
            { id: "g_zh_part_1", lang: "zh", level: 1, word: "的", pronunciation: "de", ipa: "tə", meaning: "Possessive particle ('s / of)", type: "grammar", pos: "particle" },
            { id: "g_zh_part_2", lang: "zh", level: 1, word: "吗", pronunciation: "ma", ipa: "ma", meaning: "Question particle (?)", type: "grammar", pos: "particle" },
            { id: "g_zh_part_3", lang: "zh", level: 2, word: "了", pronunciation: "le", ipa: "lə", meaning: "Completed action / Change of state", type: "grammar", pos: "particle" },
            { id: "g_zh_part_4", lang: "zh", level: 1, word: "很", pronunciation: "hěn", ipa: "xən˨˩˦", meaning: "Very (links noun to adj.)", type: "grammar", pos: "adverb" },
            { id: "g_zh_part_5", lang: "zh", level: 1, word: "和", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "And (conjunction)", type: "grammar", pos: "conjunction" },

            // --- CLASSIFIERS (MEASURE WORDS) ---
            { id: "g_zh_cl_1", lang: "zh", level: 1, word: "个", pronunciation: "gè", ipa: "kɤ⁵¹", meaning: "Generic classifier (people/things)", type: "grammar", pos: "classifier" },
            { id: "g_zh_cl_2", lang: "zh", level: 2, word: "只", pronunciation: "zhī", ipa: "ʈʂʐ̩⁵⁵", meaning: "Classifier for small animals", type: "grammar", pos: "classifier" },
            { id: "g_zh_cl_3", lang: "zh", level: 2, word: "条", pronunciation: "tiáo", ipa: "tʰjɑʊ̯˧˥", meaning: "Classifier for long things (fish/roads)", type: "grammar", pos: "classifier" },
            { id: "g_zh_cl_4", lang: "zh", level: 2, word: "本", pronunciation: "běn", ipa: "pən˨˩˦", meaning: "Classifier for books/volumes", type: "grammar", pos: "classifier" },

            // --- DEMONSTRATIVES & INTERROGATIVES ---
            { id: "g_zh_dem_1", lang: "zh", level: 1, word: "这", pronunciation: "zhè", ipa: "ʈʂɤ⁵¹", meaning: "This", type: "grammar", pos: "pronoun" },
            { id: "g_zh_dem_2", lang: "zh", level: 1, word: "那", pronunciation: "nà", ipa: "na⁵¹", meaning: "That", type: "grammar", pos: "pronoun" },
            { id: "g_zh_dem_3", lang: "zh", level: 1, word: "这里", pronunciation: "zhèlǐ", ipa: "ʈʂɤ⁵¹ li˨˩˦", meaning: "Here", type: "grammar", pos: "place" },
            { id: "g_zh_dem_4", lang: "zh", level: 1, word: "那里", pronunciation: "nàlǐ", ipa: "na⁵¹ li˨˩˦", meaning: "There", type: "grammar", pos: "place" },
            { id: "g_zh_int_1", lang: "zh", level: 1, word: "什么", pronunciation: "shénme", ipa: "ʂən˧˥ mə", meaning: "What?", type: "grammar", pos: "pronoun" },
            { id: "g_zh_int_2", lang: "zh", level: 1, word: "哪儿", pronunciation: "nǎr", ipa: "na˨˩˦ ɑɻ", meaning: "Where?", type: "grammar", pos: "pronoun" },
            { id: "g_zh_int_3", lang: "zh", level: 1, word: "谁", pronunciation: "shéi", ipa: "ʂeɪ̯˧˥", meaning: "Who?", type: "grammar", pos: "pronoun" }
        ]
    },

// ==========================================
    // 5. GRAMMAR & PARTICLES (Japanese)
    // ==========================================
    "grammatica_ja": {
        title: "Basic Grammar (Japanese)", 
        tags: ["grammar", "ja"],
        cards: [
            // --- PERSONAL PRONOUNS ---
            { id: "g_ja_pron_1", lang: "ja", level: 1, word: "私", pronunciation: "watashi", ipa: "wataɕi", meaning: "I / Me", type: "grammar", pos: "pronoun" },
            { id: "g_ja_pron_2", lang: "ja", level: 1, word: "あなた", pronunciation: "anata", ipa: "anata", meaning: "You", type: "grammar", pos: "pronoun" },
            { id: "g_ja_pron_3", lang: "ja", level: 1, word: "彼", pronunciation: "kare", ipa: "kaɾe", meaning: "He / Him", type: "grammar", pos: "pronoun" },
            { id: "g_ja_pron_4", lang: "ja", level: 1, word: "彼女", pronunciation: "kanojo", ipa: "kanodʑo", meaning: "She / Her", type: "grammar", pos: "pronoun" },

            // --- FUNDAMENTAL PARTICLES ---
            { id: "g_ja_part_1", lang: "ja", level: 1, word: "は", pronunciation: "wa", ipa: "wa", meaning: "Topic Marker (Speaking of...)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_2", lang: "ja", level: 1, word: "を", pronunciation: "o", ipa: "o", meaning: "Object Marker (What you eat/see?)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_3", lang: "ja", level: 1, word: "に", pronunciation: "ni", ipa: "ɲi", meaning: "To / In (Destination or Time)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_4", lang: "ja", level: 1, word: "で", pronunciation: "de", ipa: "de", meaning: "By / At (Means or Place of action)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_5", lang: "ja", level: 1, word: "の", pronunciation: "no", ipa: "no", meaning: "Possessive Particle ('s / of)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_6", lang: "ja", level: 2, word: "が", pronunciation: "ga", ipa: "ɡa", meaning: "Subject Marker (for 'exists'/'likes')", type: "grammar", pos: "particle" },
            { id: "g_ja_part_7", lang: "ja", level: 1, word: "か", pronunciation: "ka", ipa: "ka", meaning: "Question Particle (?)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_8", lang: "ja", level: 1, word: "と", pronunciation: "to", ipa: "to", meaning: "And (noun connector)", type: "grammar", pos: "particle" },
            { id: "g_ja_part_9", lang: "ja", level: 1, word: "も", pronunciation: "mo", ipa: "mo", meaning: "Also / Too", type: "grammar", pos: "particle" },

            // --- AUXILIARY VERBS (To Be/Exist) ---
            { id: "g_ja_aux_1", lang: "ja", level: 1, word: "です", pronunciation: "desu", ipa: "desɯ", meaning: "To Be (polite)", type: "grammar", pos: "auxiliary" },
            { id: "g_ja_aux_2", lang: "ja", level: 1, word: "ます", pronunciation: "masu", ipa: "masɯ", meaning: "Polite verb suffix (present/future)", type: "grammar", pos: "suffix" },
            { id: "g_ja_aux_3", lang: "ja", level: 1, word: "あります", pronunciation: "arimasu", ipa: "aɾimasɯ", meaning: "To Exist (inanimate things)", type: "grammar", pos: "verb" },
            { id: "g_ja_aux_4", lang: "ja", level: 1, word: "います", pronunciation: "imasu", ipa: "imasɯ", meaning: "To Exist (people/animals)", type: "grammar", pos: "verb" },
            { id: "g_ja_aux_5", lang: "ja", level: 1, word: "ません", pronunciation: "masen", ipa: "maseɴ", meaning: "Not (Polite negation)", type: "grammar", pos: "suffix" },

            // --- DEMONSTRATIVES (Ko-So-A-Do Series) ---
            { id: "g_ja_dem_1", lang: "ja", level: 1, word: "これ", pronunciation: "kore", ipa: "koɾe", meaning: "This (near me)", type: "grammar", pos: "pronoun" },
            { id: "g_ja_dem_2", lang: "ja", level: 1, word: "それ", pronunciation: "sore", ipa: "soɾe", meaning: "That (near you)", type: "grammar", pos: "pronoun" },
            { id: "g_ja_dem_3", lang: "ja", level: 1, word: "あれ", pronunciation: "are", ipa: "aɾe", meaning: "That (over there)", type: "grammar", pos: "pronoun" },
            { id: "g_ja_dem_4", lang: "ja", level: 1, word: "ここ", pronunciation: "koko", ipa: "koko", meaning: "Here", type: "grammar", pos: "place" },
            { id: "g_ja_dem_5", lang: "ja", level: 1, word: "そこ", pronunciation: "soko", ipa: "soko", meaning: "There", type: "grammar", pos: "place" },
            { id: "g_ja_dem_6", lang: "ja", level: 1, word: "あそこ", pronunciation: "asoko", ipa: "asoko", meaning: "Over there", type: "grammar", pos: "place" },
            
            // --- INTERROGATIVES ---
            { id: "g_ja_int_1", lang: "ja", level: 1, word: "何", pronunciation: "nani", ipa: "naɲi", meaning: "What?", type: "grammar", pos: "pronoun" },
            { id: "g_ja_int_2", lang: "ja", level: 1, word: "誰", pronunciation: "dare", ipa: "daɾe", meaning: "Who?", type: "grammar", pos: "pronoun" },
            { id: "g_ja_int_3", lang: "ja", level: 1, word: "どこ", pronunciation: "doko", ipa: "doko", meaning: "Where?", type: "grammar", pos: "pronoun" },
            { id: "g_ja_int_4", lang: "ja", level: 1, word: "いつ", pronunciation: "itsu", ipa: "itsɯ", meaning: "When?", type: "grammar", pos: "pronoun" }
        ]
    },

// ==========================================
    // 5. GRAMMAR & PARTICLES (Arabic)
    // ==========================================
    "grammatica_ar": {
        title: "Basic Grammar (Arabic)", 
        tags: ["grammar", "ar"],
        cards: [
            // --- PERSONAL PRONOUNS (ISOLATED - Subject) ---
            { id: "g_ar_pron_1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", ipa: "ʔana", meaning: "I", type: "grammar", pos: "pronoun" },
            { id: "g_ar_pron_2", lang: "ar", level: 1, word: "أَنْتَ", pronunciation: "anta", ipa: "ʔanta", meaning: "You (male)", type: "grammar", pos: "pronoun" },
            { id: "g_ar_pron_3", lang: "ar", level: 1, word: "أَنْتِ", pronunciation: "anti", ipa: "ʔanti", meaning: "You (female)", type: "grammar", pos: "pronoun" },
            { id: "g_ar_pron_4", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", ipa: "huwa", meaning: "He", type: "grammar", pos: "pronoun" },
            { id: "g_ar_pron_5", lang: "ar", level: 1, word: "هِيَ", pronunciation: "hiya", ipa: "hija", meaning: "She", type: "grammar", pos: "pronoun" },
            { id: "g_ar_pron_6", lang: "ar", level: 1, word: "نَحْنُ", pronunciation: "naḥnu", ipa: "naħnu", meaning: "We", type: "grammar", pos: "pronoun" },
            { id: "g_ar_pron_7", lang: "ar", level: 1, word: "هُمْ", pronunciation: "hum", ipa: "hum", meaning: "They", type: "grammar", pos: "pronoun" },

            // --- SUFFIX PRONOUNS (POSSESSIVE / OBJECT) ---
            // Attached to end: Kitāb (book) + ī = Kitābī (My book)
            { id: "g_ar_suff_1", lang: "ar", level: 1, word: "ـِي", pronunciation: "-ī", ipa: "iː", meaning: "My / Me (suffix)", type: "grammar", pos: "suffix" },
            { id: "g_ar_suff_2", lang: "ar", level: 1, word: "ـكَ", pronunciation: "-ka", ipa: "ka", meaning: "Your / You (male suffix)", type: "grammar", pos: "suffix" },
            { id: "g_ar_suff_3", lang: "ar", level: 1, word: "ـكِ", pronunciation: "-ki", ipa: "ki", meaning: "Your / You (female suffix)", type: "grammar", pos: "suffix" },
            { id: "g_ar_suff_4", lang: "ar", level: 1, word: "ـهُ", pronunciation: "-hu", ipa: "hu", meaning: "His / Him (suffix)", type: "grammar", pos: "suffix" },
            { id: "g_ar_suff_5", lang: "ar", level: 1, word: "ـهَا", pronunciation: "-hā", ipa: "haː", meaning: "Her / Her (suffix)", type: "grammar", pos: "suffix" },
            { id: "g_ar_suff_6", lang: "ar", level: 1, word: "ـنَا", pronunciation: "-nā", ipa: "naː", meaning: "Our / Us (suffix)", type: "grammar", pos: "suffix" },

            // --- PSEUDO-VERBS (TO HAVE) ---
            // Used with suffixes: 'Ind + ī = 'Indī (I have)
            { id: "g_ar_have_1", lang: "ar", level: 1, word: "عِنْدَ", pronunciation: "'inda", ipa: "ʕinda", meaning: "At / To have (with suffixes)", type: "grammar", pos: "preposition" },
            { id: "g_ar_have_2", lang: "ar", level: 1, word: "لِـ", pronunciation: "li-", ipa: "li", meaning: "To / For / To have (with suffixes)", type: "grammar", pos: "preposition" },

            // --- DEMONSTRATIVES ---
            { id: "g_ar_dem_1", lang: "ar", level: 1, word: "هَذَا", pronunciation: "hādhā", ipa: "haːðaː", meaning: "This (male)", type: "grammar", pos: "pronoun" },
            { id: "g_ar_dem_2", lang: "ar", level: 1, word: "هَذِهِ", pronunciation: "hādhihi", ipa: "haːðihi", meaning: "This (female)", type: "grammar", pos: "pronoun" },
            { id: "g_ar_dem_3", lang: "ar", level: 1, word: "ذَلِكَ", pronunciation: "dhālika", ipa: "ðaːlika", meaning: "That (male/distant)", type: "grammar", pos: "pronoun" },
            { id: "g_ar_dem_4", lang: "ar", level: 1, word: "تِلْكَ", pronunciation: "tilka", ipa: "tilka", meaning: "That (female/distant)", type: "grammar", pos: "pronoun" },
            { id: "g_ar_dem_5", lang: "ar", level: 1, word: "هُنَا", pronunciation: "hunā", ipa: "hunaː", meaning: "Here", type: "grammar", pos: "place" },
            { id: "g_ar_dem_6", lang: "ar", level: 1, word: "هُنَاكَ", pronunciation: "hunāka", ipa: "hunaːka", meaning: "There", type: "grammar", pos: "place" },

            // --- PREPOSITIONS & PARTICLES ---
            { id: "g_ar_prep_1", lang: "ar", level: 1, word: "فِي", pronunciation: "fī", ipa: "fiː", meaning: "In / Inside", type: "grammar", pos: "preposition" },
            { id: "g_ar_prep_2", lang: "ar", level: 1, word: "إِلَى", pronunciation: "ilā", ipa: "ʔilaː", meaning: "To / Towards", type: "grammar", pos: "preposition" },
            { id: "g_ar_prep_3", lang: "ar", level: 1, word: "مِنْ", pronunciation: "min", ipa: "min", meaning: "From", type: "grammar", pos: "preposition" },
            { id: "g_ar_prep_4", lang: "ar", level: 1, word: "عَلَى", pronunciation: "alā", ipa: "ʕalaː", meaning: "On / Upon", type: "grammar", pos: "preposition" },
            { id: "g_ar_prep_5", lang: "ar", level: 1, word: "بِـ", pronunciation: "bi", ipa: "bi", meaning: "With (means) / By", type: "grammar", pos: "preposition" },
            { id: "g_ar_prep_6", lang: "ar", level: 1, word: "مَعَ", pronunciation: "ma'a", ipa: "maʕa", meaning: "With (company)", type: "grammar", pos: "preposition" },
            { id: "g_ar_part_1", lang: "ar", level: 1, word: "الـ", pronunciation: "al-", ipa: "al", meaning: "The (Definite Article)", type: "grammar", pos: "article" },
            
            // --- CONJUNCTIONS & ADVERBS ---
            { id: "g_ar_conj_1", lang: "ar", level: 1, word: "وَ", pronunciation: "wa", ipa: "wa", meaning: "And", type: "grammar", pos: "conjunction" },
            { id: "g_ar_conj_2", lang: "ar", level: 1, word: "لَكِنْ", pronunciation: "lākin", ipa: "laːkin", meaning: "But / However", type: "grammar", pos: "conjunction" },
            { id: "g_ar_conj_3", lang: "ar", level: 1, word: "أَوْ", pronunciation: "aw", ipa: "ʔaw", meaning: "Or", type: "grammar", pos: "conjunction" },
            { id: "g_ar_conj_4", lang: "ar", level: 1, word: "لِأَنَّ", pronunciation: "li'anna", ipa: "liʔanna", meaning: "Because", type: "grammar", pos: "conjunction" },
            { id: "g_ar_adv_1", lang: "ar", level: 1, word: "الْآنَ", pronunciation: "al-ān", ipa: "al ʔaːn", meaning: "Now", type: "grammar", pos: "adverb" },
            { id: "g_ar_adv_2", lang: "ar", level: 1, word: "دَائِمًا", pronunciation: "dā'iman", ipa: "daːʔiman", meaning: "Always", type: "grammar", pos: "adverb" },
            
            // --- NEGATION & INTERROGATIVES ---
            { id: "g_ar_neg_1", lang: "ar", level: 1, word: "لَا", pronunciation: "lā", ipa: "laː", meaning: "No / Not (present)", type: "grammar", pos: "adverb" },
            { id: "g_ar_neg_2", lang: "ar", level: 1, word: "لَيْسَ", pronunciation: "laysa", ipa: "lajsa", meaning: "Is not (negation)", type: "grammar", pos: "verb" },
            { id: "g_ar_int_1", lang: "ar", level: 1, word: "مَا / مَاذَا", pronunciation: "mā / mādhā", ipa: "maː / maːðaː", meaning: "What?", type: "grammar", pos: "pronoun" },
            { id: "g_ar_int_2", lang: "ar", level: 1, word: "مَنْ", pronunciation: "man", ipa: "man", meaning: "Who?", type: "grammar", pos: "pronoun" },
            { id: "g_ar_int_3", lang: "ar", level: 1, word: "أَيْنَ", pronunciation: "ayna", ipa: "ʔajna", meaning: "Where?", type: "grammar", pos: "pronoun" },
            { id: "g_ar_int_4", lang: "ar", level: 1, word: "كَيْفَ", pronunciation: "kayfa", ipa: "kajfa", meaning: "How?", type: "grammar", pos: "pronoun" },
            { id: "g_ar_int_5", lang: "ar", level: 1, word: "هَلْ", pronunciation: "hal", ipa: "hal", meaning: "Is it? (Yes/No Question Particle)", type: "grammar", pos: "particle" },
            { id: "g_ar_int_6", lang: "ar", level: 1, word: "لِمَاذَا", pronunciation: "limādhā", ipa: "limaːðaː", meaning: "Why?", type: "grammar", pos: "pronoun" },
            { id: "g_ar_int_7", lang: "ar", level: 1, word: "كَمْ", pronunciation: "kam", ipa: "kam", meaning: "How much/many?", type: "grammar", pos: "pronoun" }
        ]
    },
    
    // ==========================================
    // 2. SOCIETY & HOME
    // ==========================================
    "societa_zh": {
        title: "Society & Home (Chinese)", tags: ["society", "zh"],
        cards: [
            { id: "fam_zh1", lang: "zh", level: 2, word: "爸爸", pronunciation: "bàba", ipa: "pa⁵¹ ba", meaning: "Dad / Father", type: "base", requires: ["rad_uomo"], pos: "noun" },
            { id: "fam_zh2", lang: "zh", level: 2, word: "妈妈", pronunciation: "māma", ipa: "ma⁵⁵ ma", meaning: "Mom / Mother", type: "base", requires: ["rad_donna"], pos: "noun" },
            { id: "fam_zh3", lang: "zh", level: 2, word: "哥哥", pronunciation: "gēge", ipa: "kɤ⁵⁵ kɤ", meaning: "Older Brother", type: "base", pos: "noun" },
            { id: "fam_zh4", lang: "zh", level: 2, word: "姐姐", pronunciation: "jiějie", ipa: "t͡ɕjɛ²¹⁴ t͡ɕjɛ", meaning: "Older Sister", type: "base", requires: ["rad_donna"], pos: "noun" },
            { id: "soc_zh1", lang: "zh", level: 2, word: "家", pronunciation: "jiā", ipa: "t͡ɕja⁵⁵", meaning: "Home / Family", type: "derived", requires: ["rad_tetto"], pos: "place" }, 
            { id: "soc_zh2", lang: "zh", level: 2, word: "学校", pronunciation: "xuéxiào", ipa: "ɕɥɛ³⁵ ɕjɑʊ̯⁵¹", meaning: "School", type: "derived", requires: ["rad_bambino", "zh1"], pos: "place" },
            { id: "soc_zh3", lang: "zh", level: 3, word: "学生", pronunciation: "xuésheng", ipa: "ɕɥɛ³⁵ ʂəŋ", meaning: "Student", type: "derived", requires: ["soc_zh2", "rad_uomo"], pos: "noun" },
            { id: "soc_zh4", lang: "zh", level: 2, word: "书", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "Book", type: "base", pos: "noun" },
            { id: "soc_zh5", lang: "zh", level: 2, word: "朋友", pronunciation: "péngyǒu", ipa: "pʰəŋ³⁵ joʊ̯", meaning: "Friend", type: "derived", requires: ["rad_uomo"], pos: "noun" },
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "t͡ɕʰjɛn³⁵", meaning: "Money", type: "base", pos: "noun" },
        ]
    },

    "societa_ja": {
        title: "Society & Home (Japanese)", tags: ["society", "ja"],
        cards: [
            { id: "fam_ja1", lang: "ja", level: 2, word: "父", pronunciation: "ちち", ipa: "t͡ɕi̥t͡ɕi", meaning: "Father", type: "base", pos: "noun" },
            { id: "fam_ja2", lang: "ja", level: 2, word: "母", pronunciation: "はは", ipa: "haha", meaning: "Mother", type: "base", requires: ["rad_donna_ja"], pos: "noun" },
            { id: "fam_ja3", lang: "ja", level: 2, word: "家族", pronunciation: "かぞく", ipa: "kazokɯ", meaning: "Family", type: "derived", requires: ["soc_ja1"], pos: "noun" },
            { id: "soc_ja1", lang: "ja", level: 2, word: "家", pronunciation: "いえ", ipa: "ie", meaning: "Home / House", type: "base", requires: ["rad_tetto_ja"], pos: "place" }, 
            { id: "soc_ja2", lang: "ja", level: 2, word: "学校", pronunciation: "がっこう", ipa: "ɡakːoː", meaning: "School", type: "derived", requires: ["rad_bambino_ja", "rad_albero_ja"], pos: "place" }, 
            { id: "soc_ja3", lang: "ja", level: 2, word: "本", pronunciation: "ほん", ipa: "hoɴ", meaning: "Book", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            { id: "soc_ja4", lang: "ja", level: 2, word: "友", pronunciation: "とも", ipa: "tomo", meaning: "Friend", type: "base", pos: "noun" },
            { id: "soc_ja5", lang: "ja", level: 2, word: "先生", pronunciation: "せんせい", ipa: "seɴseː", meaning: "Teacher / Master", type: "derived", requires: ["rad_uomo_ja"], pos: "noun" }
        ]
    },

    "societa_ar": {
        title: "Society & Home (Arabic)", tags: ["society", "ar"],
        cards: [
            { id: "fam_ar1", lang: "ar", level: 2, word: "أَب", pronunciation: "ab", ipa: "ʔab", meaning: "Father", type: "base", pos: "noun" },
            { id: "fam_ar2", lang: "ar", level: 2, word: "أُمّ", pronunciation: "umm", ipa: "ʔumm", meaning: "Mother", type: "base", pos: "noun" },
            { id: "fam_ar3", lang: "ar", level: 2, word: "أَخ", pronunciation: "akh", ipa: "ʔax", meaning: "Brother", type: "base", pos: "noun" },
            { id: "fam_ar4", lang: "ar", level: 2, word: "أُخْت", pronunciation: "ukht", ipa: "ʔuxt", meaning: "Sister", type: "base", pos: "noun" },
            { id: "soc_ar1", lang: "ar", level: 2, word: "بَيْت", pronunciation: "bayt", ipa: "bajt", meaning: "House / Home", type: "base", pos: "place" },
            { id: "soc_ar2", lang: "ar", level: 2, word: "كِتَاب", pronunciation: "kitāb", ipa: "kitaːb", meaning: "Book", type: "derived", requires: ["root_ktb"], pos: "noun" },
            { id: "soc_ar3", lang: "ar", level: 2, word: "مَكْتَب", pronunciation: "maktab", ipa: "maktab", meaning: "Office / Desk", type: "derived", requires: ["root_ktb"], pos: "place" },
            { id: "soc_ar4", lang: "ar", level: 2, word: "مَدْرَسَة", pronunciation: "madrasa", ipa: "madrasa", meaning: "School", type: "derived", requires: ["root_drs"], pos: "place" },
            { id: "soc_ar5", lang: "ar", level: 2, word: "دَرْس", pronunciation: "dars", ipa: "dars", meaning: "Lesson / Class", type: "derived", requires: ["root_drs"], pos: "noun" },
            { id: "soc_ar6", lang: "ar", level: 2, word: "سَكَن", pronunciation: "sakan", ipa: "sakan", meaning: "Accommodation / Housing", type: "derived", requires: ["root_skn"], pos: "place" }
        ]
    },

    // ==========================================
    // 3. NATURE (FULL MERGE OLD + NEW)
    // ==========================================
    
    "natura_zh": {
        title: "Nature (Chinese)",
        tags: ["nature", "zh"],
        cards: [
            // --- UPDATED OLD CARDS (Historical IDs) ---
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", ipa: "ʂan˥", meaning: "Mountain", type: "base", pos: "place" },
            { id: "zh12", lang: "zh", level: 1, word: "天空", pronunciation: "tiānkōng", ipa: "tʰjɛn˥ kʰʊŋ˥", meaning: "Sky", type: "base", pos: "place" },
            { id: "zh13", lang: "zh", level: 2, word: "森林", pronunciation: "sēnlín", ipa: "sən˥ lin˧˥", meaning: "Forest", type: "derived", requires: ["rad_albero"], pos: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "River", type: "derived", requires: ["rad_acqua"], pos: "place" },
            { id: "zh16", lang: "zh", level: 2, word: "海 / 海洋", pronunciation: "hǎi / hǎiyáng", ipa: "xaɪ̯˨˩˦ / xaɪ̯˨˩˦ jɑŋ˧˥", meaning: "Sea / Ocean", type: "derived", requires: ["rad_acqua"], pos: "place" },
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", ipa: "xwɔ˨˩˦ ʂan˥", meaning: "Volcano", type: "derived", requires: ["rad_fuoco", "zh7"], pos: "place" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa˥", meaning: "Flower", type: "derived", requires: ["rad_albero"], pos: "noun" },
            { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", ipa: "ɕɥɛ˨˩˦", meaning: "Snow", type: "derived", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh30", lang: "zh", level: 3, word: "风", pronunciation: "fēng", ipa: "fəŋ˥", meaning: "Wind", type: "base", pos: "noun" },
            { id: "zh31", lang: "zh", level: 3, word: "暴风雨", pronunciation: "bàofēngyǔ", ipa: "pɑʊ̯˥˩ fəŋ˥ y˨˩˦", meaning: "Storm", type: "derived", requires: ["rad_pioggia"], pos: "noun" },

            // --- NEW CARDS (Extended Nature) ---
            { id: "n_zh_ext_1", lang: "zh", level: 2, word: "山丘", pronunciation: "shānqiū", ipa: "ʂan˥ tɕʰjoʊ̯˥", meaning: "Hill", type: "base", pos: "place" },
            { id: "n_zh_ext_2", lang: "zh", level: 2, word: "山谷", pronunciation: "shāngǔ", ipa: "ʂan˥ ku˨˩˦", meaning: "Valley", type: "base", pos: "place" },
            { id: "n_zh_ext_3", lang: "zh", level: 2, word: "湖", pronunciation: "hú", ipa: "xu˧˥", meaning: "Lake", type: "base", pos: "place" },
            { id: "n_zh_ext_4", lang: "zh", level: 2, word: "海滩", pronunciation: "hǎitān", ipa: "xaɪ̯˨˩˦ tʰan˥", meaning: "Beach", type: "base", pos: "place" },
            { id: "n_zh_ext_5", lang: "zh", level: 2, word: "岛", pronunciation: "dǎo", ipa: "tɑʊ̯˨˩˦", meaning: "Island", type: "base", pos: "place" },
            { id: "n_zh_ext_6", lang: "zh", level: 3, word: "沙漠", pronunciation: "shāmò", ipa: "ʂa˥ mwɔ˥˩", meaning: "Desert", type: "base", pos: "place" },
            { id: "n_zh_ext_7", lang: "zh", level: 3, word: "瀑布", pronunciation: "pùbù", ipa: "pʰu˥˩ pu˥˩", meaning: "Waterfall", type: "base", pos: "place" },
            { id: "n_zh_ext_8", lang: "zh", level: 3, word: "洞穴", pronunciation: "dòngxué", ipa: "tʊŋ˥˩ ɕɥɛ˧˥", meaning: "Cave", type: "base", pos: "place" },
            { id: "n_zh_ext_9", lang: "zh", level: 3, word: "地平线", pronunciation: "dìpíngxiàn", ipa: "ti˥˩ pʰiŋ˧˥ ɕjɛn˥˩", meaning: "Horizon", type: "base", pos: "noun" },
            { id: "n_zh_ext_10", lang: "zh", level: 1, word: "土地", pronunciation: "tǔdì", ipa: "tʰu˨˩˦ ti˥˩", meaning: "Land / Soil", type: "base", pos: "noun" },
            { id: "n_zh_ext_11", lang: "zh", level: 2, word: "石头", pronunciation: "shítou", ipa: "ʂʐ̩˧˥ tʰoʊ̯", meaning: "Stone / Rock", type: "base", pos: "noun" },
            { id: "n_zh_ext_12", lang: "zh", level: 1, word: "树", pronunciation: "shù", ipa: "ʂu˥˩", meaning: "Tree", type: "base", pos: "noun" },
            { id: "n_zh_ext_13", lang: "zh", level: 3, word: "丛林", pronunciation: "cónglín", ipa: "tsʰʊŋ˧˥ lin˧˥", meaning: "Jungle", type: "base", pos: "place" },
            { id: "n_zh_ext_14", lang: "zh", level: 2, word: "植物", pronunciation: "zhíwù", ipa: "ʈʂʐ̩˧˥ u˥˩", meaning: "Plant", type: "base", pos: "noun" },
            { id: "n_zh_ext_15", lang: "zh", level: 2, word: "草", pronunciation: "cǎo", ipa: "tsʰɑʊ̯˨˩˦", meaning: "Grass", type: "base", pos: "noun" },
            { id: "n_zh_ext_16", lang: "zh", level: 2, word: "叶子", pronunciation: "yèzi", ipa: "jɛ˥˩ d̥z̥", meaning: "Leaf", type: "base", pos: "noun" },
            { id: "n_zh_ext_17", lang: "zh", level: 2, word: "树枝", pronunciation: "shùzhī", ipa: "ʂu˥˩ ʈʂʐ̩˥", meaning: "Branch", type: "base", pos: "noun" },
            { id: "n_zh_ext_18", lang: "zh", level: 2, word: "根", pronunciation: "gēn", ipa: "kən˥", meaning: "Root", type: "base", pos: "noun" },
            { id: "n_zh_ext_19", lang: "zh", level: 2, word: "树干", pronunciation: "shùgàn", ipa: "ʂu˥˩ kan˥˩", meaning: "Trunk", type: "base", pos: "noun" },
            { id: "n_zh_ext_20", lang: "zh", level: 2, word: "种子", pronunciation: "zhǒngzi", ipa: "ʈʂʊŋ˨˩˦ d̥z̥", meaning: "Seed", type: "base", pos: "noun" },
            { id: "n_zh_ext_21", lang: "zh", level: 2, word: "水果", pronunciation: "shuǐguǒ", ipa: "ʂweɪ̯˨˩˦ kwɔ˨˩˦", meaning: "Fruit", type: "base", pos: "noun" },
            { id: "n_zh_ext_22", lang: "zh", level: 2, word: "木头", pronunciation: "mùtou", ipa: "mu˥˩ tʰoʊ̯", meaning: "Wood", type: "base", pos: "noun" },
            { id: "n_zh_ext_23", lang: "zh", level: 1, word: "太阳", pronunciation: "tàiyáng", ipa: "tʰaɪ̯˥˩ jɑŋ˧˥", meaning: "Sun", type: "base", pos: "noun" },
            { id: "n_zh_ext_24", lang: "zh", level: 1, word: "月亮", pronunciation: "yuèliang", ipa: "ɥɛ˥˩ ljɑŋ", meaning: "Moon", type: "base", pos: "noun" },
            { id: "n_zh_ext_25", lang: "zh", level: 2, word: "星星", pronunciation: "xīngxing", ipa: "ɕiŋ˥ ɕiŋ", meaning: "Star", type: "base", pos: "noun" },
            { id: "n_zh_ext_26", lang: "zh", level: 2, word: "云", pronunciation: "yún", ipa: "yn˧˥", meaning: "Cloud", type: "base", pos: "noun" },
            { id: "n_zh_ext_27", lang: "zh", level: 2, word: "雨", pronunciation: "yǔ", ipa: "y˨˩˦", meaning: "Rain", type: "base", pos: "noun" },
            { id: "n_zh_ext_28", lang: "zh", level: 2, word: "雾", pronunciation: "wù", ipa: "u˥˩", meaning: "Fog / Mist", type: "base", pos: "noun" },
            { id: "n_zh_ext_29", lang: "zh", level: 2, word: "冰", pronunciation: "bīng", ipa: "piŋ˥", meaning: "Ice", type: "base", pos: "noun" },
            { id: "n_zh_ext_30", lang: "zh", level: 3, word: "气候", pronunciation: "qìhòu", ipa: "tɕʰi˥˩ xoʊ̯˥˩", meaning: "Climate", type: "base", pos: "noun" },
            { id: "n_zh_ext_31", lang: "zh", level: 2, word: "动物", pronunciation: "dòngwù", ipa: "tʊŋ˥˩ u˥˩", meaning: "Animal", type: "base", pos: "noun" },
            { id: "n_zh_ext_32", lang: "zh", level: 3, word: "野生", pronunciation: "yěshēng", ipa: "jɛ˨˩˦ ʂəŋ˥", meaning: "Wild", type: "base", pos: "adj" },
            { id: "n_zh_ext_33", lang: "zh", level: 2, word: "鸟", pronunciation: "niǎo", ipa: "njɑʊ̯˨˩˦", meaning: "Bird", type: "base", pos: "noun" },
            { id: "n_zh_ext_34", lang: "zh", level: 2, word: "鱼", pronunciation: "yú", ipa: "y˧˥", meaning: "Fish", type: "base", pos: "noun" },
            { id: "n_zh_ext_35", lang: "zh", level: 3, word: "昆虫", pronunciation: "kūnchóng", ipa: "kʰwən˥ ʈʂʰʊŋ˧˥", meaning: "Insect", type: "base", pos: "noun" },
            { id: "n_zh_ext_36", lang: "zh", level: 3, word: "哺乳动物", pronunciation: "bǔrǔ dòngwù", ipa: "pu˨˩˦ ʐu˨˩˦ tʊŋ˥˩ u˥˩", meaning: "Mammal", type: "base", pos: "noun" },
            { id: "n_zh_ext_37", lang: "zh", level: 3, word: "爬行动物", pronunciation: "páxíng dòngwù", ipa: "pʰa˧˥ ɕiŋ˧˥ tʊŋ˥˩ u˥˩", meaning: "Reptile", type: "base", pos: "noun" },
            { id: "n_zh_ext_38", lang: "zh", level: 3, word: "物种", pronunciation: "wùzhǒng", ipa: "u˥˩ ʈʂʊŋ˨˩˦", meaning: "Species", type: "base", pos: "noun" },
            { id: "n_zh_ext_39", lang: "zh", level: 2, word: "鸟巢", pronunciation: "niǎocháo", ipa: "njɑʊ̯˨˩˦ ʈʂʰɑʊ̯˧˥", meaning: "Nest", type: "base", pos: "noun" },
            { id: "n_zh_ext_40", lang: "zh", level: 2, word: "脚印", pronunciation: "jiǎoyìn", ipa: "tɕjɑʊ̯˨˩˦ in˥˩", meaning: "Footprint", type: "base", pos: "noun" },
            { id: "n_zh_ext_41", lang: "zh", level: 3, word: "环境", pronunciation: "huánjìng", ipa: "xwan˧˥ tɕiŋ˥˩", meaning: "Environment", type: "base", pos: "noun" },
            { id: "n_zh_ext_42", lang: "zh", level: 3, word: "大自然", pronunciation: "dàzìrán", ipa: "ta˥˩ dz̩˥˩ ʐan˧˥", meaning: "Nature", type: "base", pos: "noun" },
            { id: "n_zh_ext_43", lang: "zh", level: 3, word: "污染", pronunciation: "wūrǎn", ipa: "u˥ ʐan˨˩˦", meaning: "Pollution", type: "base", pos: "noun" },
            { id: "n_zh_ext_44", lang: "zh", level: 3, word: "保护", pronunciation: "bǎohù", ipa: "pɑʊ̯˨˩˦ xu˥˩", meaning: "Protection / Conservation", type: "base", pos: "noun" },
            { id: "n_zh_ext_45", lang: "zh", level: 2, word: "小径", pronunciation: "xiǎojìng", ipa: "ɕjɑʊ̯˨˩˦ tɕiŋ˥˩", meaning: "Path / Trail", type: "base", pos: "place" }
        ]
    },

    "natura_ja": {
        title: "Nature (Japanese)",
        tags: ["nature", "ja"],
        cards: [
            // --- UPDATED OLD CARDS ---
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", ipa: "kawa", meaning: "River", type: "base", pos: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", ipa: "jama", meaning: "Mountain", type: "base", pos: "place" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", ipa: "moɾi", meaning: "Forest", type: "base", requires: ["rad_albero_ja"], pos: "place" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", ipa: "kazaɴ", meaning: "Volcano", type: "derived", requires: ["rad_fuoco_ja", "ja2"], pos: "place" },
            { id: "ja13", lang: "ja", level: 1, word: "花", pronunciation: "はな", ipa: "hana", meaning: "Flower", type: "base", pos: "noun" },
            { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", ipa: "kɯmo", meaning: "Cloud", type: "base", requires: ["rad_pioggia_ja"], pos: "noun" },
            
            // --- NEW CARDS ---
            { id: "n_ja_ext_1", lang: "ja", level: 2, word: "丘", pronunciation: "おか", ipa: "oka", meaning: "Hill", type: "base", pos: "place" },
            { id: "n_ja_ext_2", lang: "ja", level: 2, word: "谷", pronunciation: "たに", ipa: "tani", meaning: "Valley", type: "base", pos: "place" },
            { id: "n_ja_ext_3", lang: "ja", level: 2, word: "湖", pronunciation: "みずうみ", ipa: "mizɯːmi", meaning: "Lake", type: "base", pos: "place" },
            { id: "n_ja_ext_4", lang: "ja", level: 2, word: "海", pronunciation: "うみ", ipa: "ɯmi", meaning: "Sea / Ocean", type: "base", pos: "place" },
            { id: "n_ja_ext_5", lang: "ja", level: 2, word: "ビーチ / 浜辺", pronunciation: "びーち / はまべ", ipa: "biːtɕi / hamabe", meaning: "Beach", type: "base", pos: "place" },
            { id: "n_ja_ext_6", lang: "ja", level: 2, word: "島", pronunciation: "しま", ipa: "ɕima", meaning: "Island", type: "base", pos: "place" },
            { id: "n_ja_ext_7", lang: "ja", level: 3, word: "砂漠", pronunciation: "さばく", ipa: "sabakɯ", meaning: "Desert", type: "base", pos: "place" },
            { id: "n_ja_ext_8", lang: "ja", level: 3, word: "滝", pronunciation: "たき", ipa: "taki", meaning: "Waterfall", type: "base", pos: "place" },
            { id: "n_ja_ext_9", lang: "ja", level: 3, word: "洞窟", pronunciation: "どうくつ", ipa: "doːkɯtsɯ", meaning: "Cave", type: "base", pos: "place" },
            { id: "n_ja_ext_10", lang: "ja", level: 3, word: "地平線", pronunciation: "ちへいせん", ipa: "tɕiheiseɴ", meaning: "Horizon", type: "base", pos: "noun" },
            { id: "n_ja_ext_11", lang: "ja", level: 1, word: "土", pronunciation: "つち", ipa: "tsɯtɕi", meaning: "Earth / Soil", type: "base", pos: "noun" },
            { id: "n_ja_ext_12", lang: "ja", level: 2, word: "石", pronunciation: "いし", ipa: "iɕi", meaning: "Stone / Rock", type: "base", pos: "noun" },
            { id: "n_ja_ext_13", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "ki", meaning: "Tree", type: "base", pos: "noun" },
            { id: "n_ja_ext_14", lang: "ja", level: 3, word: "ジャングル", pronunciation: "じゃんぐる", ipa: "dʑaŋɡɯɾɯ", meaning: "Jungle", type: "base", pos: "place" },
            { id: "n_ja_ext_15", lang: "ja", level: 2, word: "植物", pronunciation: "しょくぶつ", ipa: "ɕokɯbɯtsɯ", meaning: "Plant", type: "base", pos: "noun" },
            { id: "n_ja_ext_16", lang: "ja", level: 2, word: "草", pronunciation: "くさ", ipa: "kɯsa", meaning: "Grass", type: "base", pos: "noun" },
            { id: "n_ja_ext_17", lang: "ja", level: 2, word: "葉", pronunciation: "は", ipa: "ha", meaning: "Leaf", type: "base", pos: "noun" },
            { id: "n_ja_ext_18", lang: "ja", level: 2, word: "枝", pronunciation: "えだ", ipa: "eda", meaning: "Branch", type: "base", pos: "noun" },
            { id: "n_ja_ext_19", lang: "ja", level: 2, word: "根", pronunciation: "ね", ipa: "ne", meaning: "Root", type: "base", pos: "noun" },
            { id: "n_ja_ext_20", lang: "ja", level: 2, word: "幹", pronunciation: "みき", ipa: "miki", meaning: "Trunk", type: "base", pos: "noun" },
            { id: "n_ja_ext_21", lang: "ja", level: 2, word: "種", pronunciation: "たね", ipa: "tane", meaning: "Seed", type: "base", pos: "noun" },
            { id: "n_ja_ext_22", lang: "ja", level: 2, word: "果物", pronunciation: "くだもの", ipa: "kɯdamono", meaning: "Fruit", type: "base", pos: "noun" },
            { id: "n_ja_ext_23", lang: "ja", level: 2, word: "木材", pronunciation: "もくざい", ipa: "mokɯzai", meaning: "Wood", type: "base", pos: "noun" },
            { id: "n_ja_ext_24", lang: "ja", level: 1, word: "太陽", pronunciation: "たいよう", ipa: "taijoː", meaning: "Sun", type: "base", pos: "noun" },
            { id: "n_ja_ext_25", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "tsɯki", meaning: "Moon", type: "base", pos: "noun" },
            { id: "n_ja_ext_26", lang: "ja", level: 2, word: "星", pronunciation: "ほし", ipa: "hoɕi", meaning: "Star", type: "base", pos: "noun" },
            { id: "n_ja_ext_27", lang: "ja", level: 2, word: "空", pronunciation: "そら", ipa: "soɾa", meaning: "Sky", type: "base", pos: "place" },
            { id: "n_ja_ext_28", lang: "ja", level: 2, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Rain", type: "base", pos: "noun" },
            { id: "n_ja_ext_29", lang: "ja", level: 2, word: "雪", pronunciation: "ゆき", ipa: "jɯki", meaning: "Snow", type: "base", pos: "noun" },
            { id: "n_ja_ext_30", lang: "ja", level: 2, word: "風", pronunciation: "かぜ", ipa: "kaze", meaning: "Wind", type: "base", pos: "noun" },
            { id: "n_ja_ext_31", lang: "ja", level: 3, word: "嵐", pronunciation: "あらし", ipa: "aɾaɕi", meaning: "Storm", type: "base", pos: "noun" },
            { id: "n_ja_ext_32", lang: "ja", level: 2, word: "霧", pronunciation: "きり", ipa: "kiɾi", meaning: "Fog / Mist", type: "base", pos: "noun" },
            { id: "n_ja_ext_33", lang: "ja", level: 2, word: "氷", pronunciation: "こおり", ipa: "koːɾi", meaning: "Ice", type: "base", pos: "noun" },
            { id: "n_ja_ext_34", lang: "ja", level: 3, word: "気候", pronunciation: "きこう", ipa: "kikoː", meaning: "Climate", type: "base", pos: "noun" },
            { id: "n_ja_ext_35", lang: "ja", level: 2, word: "動物", pronunciation: "どうぶつ", ipa: "doːbɯtsɯ", meaning: "Animal", type: "base", pos: "noun" },
            { id: "n_ja_ext_36", lang: "ja", level: 3, word: "野生の", pronunciation: "やせいの", ipa: "yaseino", meaning: "Wild", type: "base", pos: "adj" },
            { id: "n_ja_ext_37", lang: "ja", level: 2, word: "鳥", pronunciation: "とり", ipa: "toɾi", meaning: "Bird", type: "base", pos: "noun" },
            { id: "n_ja_ext_38", lang: "ja", level: 2, word: "魚", pronunciation: "さかな", ipa: "sakana", meaning: "Fish", type: "base", pos: "noun" },
            { id: "n_ja_ext_39", lang: "ja", level: 2, word: "虫", pronunciation: "むし", ipa: "mɯɕi", meaning: "Insect", type: "base", pos: "noun" },
            { id: "n_ja_ext_40", lang: "ja", level: 3, word: "哺乳類", pronunciation: "ほにゅうるい", ipa: "honjɯːɾɯi", meaning: "Mammal", type: "base", pos: "noun" },
            { id: "n_ja_ext_41", lang: "ja", level: 3, word: "爬虫類", pronunciation: "はちゅうるい", ipa: "hatɕɯːɾɯi", meaning: "Reptile", type: "base", pos: "noun" },
            { id: "n_ja_ext_42", lang: "ja", level: 3, word: "種", pronunciation: "しゅ", ipa: "ɕɯ", meaning: "Species", type: "base", pos: "noun" },
            { id: "n_ja_ext_43", lang: "ja", level: 2, word: "巣", pronunciation: "す", ipa: "sɯ", meaning: "Nest", type: "base", pos: "noun" },
            { id: "n_ja_ext_44", lang: "ja", level: 3, word: "足跡", pronunciation: "あしあと", ipa: "aɕiato", meaning: "Footprint", type: "base", pos: "noun" },
            { id: "n_ja_ext_45", lang: "ja", level: 3, word: "環境", pronunciation: "かんきょう", ipa: "kaŋkjoː", meaning: "Environment", type: "base", pos: "noun" },
            { id: "n_ja_ext_46", lang: "ja", level: 3, word: "自然", pronunciation: "しぜん", ipa: "ɕizeɴ", meaning: "Nature", type: "base", pos: "noun" },
            { id: "n_ja_ext_47", lang: "ja", level: 3, word: "汚染", pronunciation: "おせん", ipa: "oseɴ", meaning: "Pollution", type: "base", pos: "noun" },
            { id: "n_ja_ext_48", lang: "ja", level: 3, word: "保護", pronunciation: "ほご", ipa: "hoɡo", meaning: "Protection / Conservation", type: "base", pos: "noun" },
            { id: "n_ja_ext_49", lang: "ja", level: 2, word: "小道", pronunciation: "こみち", ipa: "komitɕi", meaning: "Path / Trail", type: "base", pos: "place" }
        ]
    },

    "natura_ar": {
        title: "Nature (Arabic)",
        tags: ["nature", "ar"],
        cards: [
            // --- UPDATED OLD CARDS ---
            { id: "ar12", lang: "ar", level: 2, word: "أَرْض / تُرْبَة", pronunciation: "Arḍ / Turba", ipa: "ardˤ / ˈturba", meaning: "Earth / Soil", type: "derived", requires: ["root_ard"], pos: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "Shams", ipa: "ʃams", meaning: "Sun", type: "derived", requires: ["root_shms"], pos: "noun" },
            { id: "ar15", lang: "ar", level: 2, word: "قَمَر", pronunciation: "Qamar", ipa: "ˈqamar", meaning: "Moon", type: "derived", requires: ["root_qmr"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر / مُحِيط", pronunciation: "Baḥr / Muḥīṭ", ipa: "baħr / muˈħiːtˤ", meaning: "Sea / Ocean", type: "derived", requires: ["root_bhr"], pos: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "Jabal", ipa: "ˈdʒabal", meaning: "Mountain", type: "derived", requires: ["root_jbl"], pos: "place" },
            { id: "ar23", lang: "ar", level: 3, word: "شَجَرَة", pronunciation: "Shajara", ipa: "ˈʃadʒara", meaning: "Tree", type: "derived", requires: ["root_shjr"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "Ghāba", ipa: "ˈɣaːba", meaning: "Forest", type: "derived", requires: ["ar23"], pos: "place" },

            // --- NEW CARDS ---
            { id: "n_ar_ext_1", lang: "ar", level: 2, word: "تَلَّة", pronunciation: "Talla", ipa: "ˈtalla", meaning: "Hill", type: "base", pos: "place" },
            { id: "n_ar_ext_2", lang: "ar", level: 2, word: "وَادِي", pronunciation: "Wādī", ipa: "ˈwaːdiː", meaning: "Valley", type: "base", pos: "place" },
            { id: "n_ar_ext_3", lang: "ar", level: 2, word: "نَهْر", pronunciation: "Nahr", ipa: "nahr", meaning: "River", type: "base", pos: "place" },
            { id: "n_ar_ext_4", lang: "ar", level: 2, word: "بُحَيْرَة", pronunciation: "Buḥayra", ipa: "buˈħajra", meaning: "Lake", type: "base", pos: "place" },
            { id: "n_ar_ext_5", lang: "ar", level: 2, word: "شَاطِئ", pronunciation: "Shāṭi'", ipa: "ˈʃaːtˤiʔ", meaning: "Beach", type: "base", pos: "place" },
            { id: "n_ar_ext_6", lang: "ar", level: 2, word: "جَزِيرَة", pronunciation: "Jazīra", ipa: "dʒaˈziːra", meaning: "Island", type: "base", pos: "place" },
            { id: "n_ar_ext_7", lang: "ar", level: 3, word: "صَحْرَاء", pronunciation: "Ṣaḥrā'", ipa: "sˤaħˈraːʔ", meaning: "Desert", type: "base", pos: "place" },
            { id: "n_ar_ext_8", lang: "ar", level: 3, word: "شَلَّال", pronunciation: "Shallāl", ipa: "ʃalˈlaːl", meaning: "Waterfall", type: "base", pos: "place" },
            { id: "n_ar_ext_9", lang: "ar", level: 3, word: "كَهْف", pronunciation: "Kahf", ipa: "kahf", meaning: "Cave", type: "base", pos: "place" },
            { id: "n_ar_ext_10", lang: "ar", level: 3, word: "بُرْكَان", pronunciation: "Burkān", ipa: "burˈkaːn", meaning: "Volcano", type: "base", pos: "place" },
            { id: "n_ar_ext_11", lang: "ar", level: 3, word: "أُفُق", pronunciation: "Ufuq", ipa: "ˈufuq", meaning: "Horizon", type: "base", pos: "noun" },
            { id: "n_ar_ext_12", lang: "ar", level: 2, word: "صَخْرَة", pronunciation: "Ṣakhra", ipa: "ˈsˤaxra", meaning: "Stone / Rock", type: "base", pos: "noun" },
            { id: "n_ar_ext_13", lang: "ar", level: 3, word: "أَدْغَال", pronunciation: "Adghāl", ipa: "ʔadˈɣaːl", meaning: "Jungle", type: "base", pos: "place" },
            { id: "n_ar_ext_14", lang: "ar", level: 2, word: "نَبَات", pronunciation: "Nabāt", ipa: "naˈbaːt", meaning: "Plant", type: "base", pos: "noun" },
            { id: "n_ar_ext_15", lang: "ar", level: 2, word: "زَهْرَة", pronunciation: "Zahra", ipa: "ˈzahra", meaning: "Flower", type: "base", pos: "noun" },
            { id: "n_ar_ext_16", lang: "ar", level: 2, word: "عُشْب", pronunciation: "'Ushb", ipa: "ʕuʃb", meaning: "Grass", type: "base", pos: "noun" },
            { id: "n_ar_ext_17", lang: "ar", level: 2, word: "وَرَقَة", pronunciation: "Waraqa", ipa: "ˈwaraqa", meaning: "Leaf", type: "base", pos: "noun" },
            { id: "n_ar_ext_18", lang: "ar", level: 2, word: "غُصْن", pronunciation: "Ghuṣn", ipa: "ɣusˤn", meaning: "Branch", type: "base", pos: "noun" },
            { id: "n_ar_ext_19", lang: "ar", level: 2, word: "جِذْر", pronunciation: "Jidhr", ipa: "dʒiðr", meaning: "Root", type: "base", pos: "noun" },
            { id: "n_ar_ext_20", lang: "ar", level: 2, word: "جِذْع", pronunciation: "Jidh'", ipa: "dʒiðʕ", meaning: "Trunk", type: "base", pos: "noun" },
            { id: "n_ar_ext_21", lang: "ar", level: 2, word: "بِذْرَة", pronunciation: "Bidhra", ipa: "ˈbiðra", meaning: "Seed", type: "base", pos: "noun" },
            { id: "n_ar_ext_22", lang: "ar", level: 2, word: "فَاكِهَة", pronunciation: "Fākiha", ipa: "ˈfaːkiha", meaning: "Fruit", type: "base", pos: "noun" },
            { id: "n_ar_ext_23", lang: "ar", level: 2, word: "خَشَب", pronunciation: "Khashab", ipa: "ˈxaʃab", meaning: "Wood", type: "base", pos: "noun" },
            { id: "n_ar_ext_24", lang: "ar", level: 2, word: "نُجُوم", pronunciation: "Nujūm", ipa: "nuˈdʒuːm", meaning: "Stars", type: "base", pos: "noun" },
            { id: "n_ar_ext_25", lang: "ar", level: 2, word: "سَمَاء", pronunciation: "Samā'", ipa: "saˈmaːʔ", meaning: "Sky", type: "base", pos: "place" },
            { id: "n_ar_ext_26", lang: "ar", level: 2, word: "سَحَابَة", pronunciation: "Saḥāba", ipa: "saˈħaːba", meaning: "Cloud", type: "base", pos: "noun" },
            { id: "n_ar_ext_27", lang: "ar", level: 2, word: "مَطَر", pronunciation: "Maṭar", ipa: "ˈmatˤar", meaning: "Rain", type: "base", pos: "noun" },
            { id: "n_ar_ext_28", lang: "ar", level: 2, word: "ثَلْج", pronunciation: "Thalj", ipa: "θaldʒ", meaning: "Snow", type: "base", pos: "noun" },
            { id: "n_ar_ext_29", lang: "ar", level: 2, word: "رِيَاح", pronunciation: "Riyāḥ", ipa: "riˈjaːħ", meaning: "Wind", type: "base", pos: "noun" },
            { id: "n_ar_ext_30", lang: "ar", level: 3, word: "عَاصِفَة", pronunciation: "'Āṣifa", ipa: "ˈʕaːsˤifa", meaning: "Storm", type: "base", pos: "noun" },
            { id: "n_ar_ext_31", lang: "ar", level: 2, word: "ضَبَاب", pronunciation: "Ḍabāb", ipa: "dˤaˈbaːb", meaning: "Fog", type: "base", pos: "noun" },
            { id: "n_ar_ext_32", lang: "ar", level: 2, word: "جَلِيد", pronunciation: "Jalīd", ipa: "dʒaˈliːd", meaning: "Ice", type: "base", pos: "noun" },
            { id: "n_ar_ext_33", lang: "ar", level: 3, word: "مُنَاخ", pronunciation: "Munākh", ipa: "muˈnaːx", meaning: "Climate", type: "base", pos: "noun" },
            { id: "n_ar_ext_34", lang: "ar", level: 2, word: "حَيَوَان", pronunciation: "Ḥayawān", ipa: "ħajaˈwaːn", meaning: "Animal", type: "base", pos: "noun" },
            { id: "n_ar_ext_35", lang: "ar", level: 3, word: "بَرِّي", pronunciation: "Barrī", ipa: "ˈbarriː", meaning: "Wild", type: "base", pos: "adj" },
            { id: "n_ar_ext_36", lang: "ar", level: 2, word: "طَائِر", pronunciation: "Ṭā'ir", ipa: "ˈtˤaːʔir", meaning: "Bird", type: "base", pos: "noun" },
            { id: "n_ar_ext_37", lang: "ar", level: 2, word: "سَمَكَة", pronunciation: "Samaka", ipa: "ˈsamaka", meaning: "Fish", type: "base", pos: "noun" },
            { id: "n_ar_ext_38", lang: "ar", level: 3, word: "حَشَرَة", pronunciation: "Ḥashara", ipa: "ˈħaʃara", meaning: "Insect", type: "base", pos: "noun" },
            { id: "n_ar_ext_39", lang: "ar", level: 3, word: "ثَدْيِيَّات", pronunciation: "Thadiyyāt", ipa: "θadijˈjaːt", meaning: "Mammal", type: "base", pos: "noun" },
            { id: "n_ar_ext_40", lang: "ar", level: 3, word: "زَوَاحِف", pronunciation: "Zawāḥif", ipa: "zaˈwaːħif", meaning: "Reptile", type: "base", pos: "noun" },
            { id: "n_ar_ext_41", lang: "ar", level: 3, word: "نَوْع / فَصِيلَة", pronunciation: "Naw' / Faṣīla", ipa: "nawʕ / faˈsˤiːla", meaning: "Species", type: "base", pos: "noun" },
            { id: "n_ar_ext_42", lang: "ar", level: 2, word: "عُشّ", pronunciation: "'Ushsh", ipa: "ʕuʃʃ", meaning: "Nest", type: "base", pos: "noun" },
            { id: "n_ar_ext_43", lang: "ar", level: 2, word: "أَثَر", pronunciation: "Athar", ipa: "ˈʔaθar", meaning: "Footprint", type: "base", pos: "noun" },
            { id: "n_ar_ext_44", lang: "ar", level: 3, word: "بِيئَة", pronunciation: "Bī'a", ipa: "ˈbiːʔa", meaning: "Environment", type: "base", pos: "noun" },
            { id: "n_ar_ext_45", lang: "ar", level: 3, word: "طَبِيعَة", pronunciation: "Ṭabī'a", ipa: "tˤaˈbiːʕa", meaning: "Nature", type: "base", pos: "noun" },
            { id: "n_ar_ext_46", lang: "ar", level: 3, word: "تَلَوُّث", pronunciation: "Talawwuth", ipa: "taˈlawwuθ", meaning: "Pollution", type: "base", pos: "noun" },
            { id: "n_ar_ext_47", lang: "ar", level: 3, word: "حِمَايَة", pronunciation: "Ḥimāya", ipa: "ħiˈmaːja", meaning: "Protection", type: "base", pos: "noun" },
            { id: "n_ar_ext_48", lang: "ar", level: 2, word: "مَمَرّ", pronunciation: "Mamarr", ipa: "maˈmarr", meaning: "Path / Trail", type: "base", pos: "place" }
        ]
    },

    // ==========================================
    // 4. TRAVEL
    // ==========================================
    "viaggio_zh": {
        title: "Travel (Chinese)", 
        tags: ["travel", "zh"],
        cards: [
            // --- OLD CARDS (Preserved for Sentences) ---
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "To Go", type: "base", pos: "verb_move" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "To Fly", type: "base", pos: "verb" },
            { id: "v_zh4", lang: "zh", level: 1, word: "机", pronunciation: "jī", ipa: "t͡ɕi⁵⁵", meaning: "Machine / Mechanism", type: "base", requires: ["rad_albero"], pos: "noun" },
            { id: "v_zh5", lang: "zh", level: 2, word: "飞机", pronunciation: "fēijī", ipa: "feɪ̯⁵⁵ t͡ɕi⁵⁵", meaning: "Airplane", type: "base", pos: "noun" },
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", ipa: "xwɔ²¹⁴ t͡ʂʰɤ⁵⁵", meaning: "Train", type: "derived", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" },
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", ipa: "t͡ʂʰɤ⁵⁵ t͡ʂan⁵¹", meaning: "Station", type: "derived", requires: ["rad_veicolo"], pos: "place" },
            { id: "v_zh16", lang: "zh", level: 3, word: "门口", pronunciation: "ménkǒu", ipa: "mən³⁵ kʰoʊ̯²¹⁴", meaning: "Entrance / Gate", type: "derived", requires: ["rad_porta", "rad_bocca"], pos: "place" },

            // --- NEW EXTENDED CARDS (New IDs) ---
            { id: "v_zh_ext_1", lang: "zh", level: 2, word: "交通", pronunciation: "jiāotōng", ipa: "tɕjɑʊ̯˥ tʰʊŋ˥", meaning: "Transport", type: "base", pos: "noun" },
            { id: "v_zh_ext_2", lang: "zh", level: 2, word: "机场", pronunciation: "jīchǎng", ipa: "tɕi˥ ʈʂʰɑŋ˨˩˦", meaning: "Airport", type: "base", pos: "place" },
            { id: "v_zh_ext_3", lang: "zh", level: 2, word: "航班", pronunciation: "hángbān", ipa: "xɑŋ˧˥ ban˥", meaning: "Flight", type: "base", pos: "noun" },
            { id: "v_zh_ext_4", lang: "zh", level: 2, word: "出发", pronunciation: "chūfā", ipa: "ʈʂʰu˥ fa˥", meaning: "Departure", type: "base", pos: "verb" },
            { id: "v_zh_ext_5", lang: "zh", level: 2, word: "到达", pronunciation: "dàodá", ipa: "tɑʊ̯˥˩ da˧˥", meaning: "Arrival", type: "base", pos: "verb" },
            { id: "v_zh_ext_6", lang: "zh", level: 2, word: "晚点", pronunciation: "wǎndiǎn", ipa: "wan˨˩˦ djɛn˨˩˦", meaning: "Delay", type: "base", pos: "noun" },
            { id: "v_zh_ext_7", lang: "zh", level: 2, word: "票", pronunciation: "piào", ipa: "pʰjɑʊ̯˥˩", meaning: "Ticket", type: "base", pos: "noun" },
            { id: "v_zh_ext_8", lang: "zh", level: 2, word: "护照", pronunciation: "hùzhào", ipa: "xu˥˩ ʈʂɑʊ̯˥˩", meaning: "Passport", type: "base", pos: "noun" },
            { id: "v_zh_ext_9", lang: "zh", level: 2, word: "行李", pronunciation: "xíngli", ipa: "ɕiŋ˧˥ li", meaning: "Luggage", type: "base", pos: "noun" },
            { id: "v_zh_ext_12", lang: "zh", level: 2, word: "住宿", pronunciation: "zhùsù", ipa: "ʈʂu˥˩ su˥˩", meaning: "Accommodation", type: "base", pos: "noun" },
            { id: "v_zh_ext_13", lang: "zh", level: 2, word: "预订", pronunciation: "yùdìng", ipa: "y˥˩ diŋ˥˩", meaning: "Reservation / Booking", type: "base", pos: "verb" },
            { id: "v_zh_ext_14", lang: "zh", level: 2, word: "酒店", pronunciation: "jiǔdiàn", ipa: "tɕjoʊ̯˨˩˦ djɛn˥˩", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_zh_ext_15", lang: "zh", level: 2, word: "前台", pronunciation: "qiántái", ipa: "tɕʰjɛn˧˥ tʰaɪ̯˧˥", meaning: "Reception", type: "base", pos: "place" },
            { id: "v_zh_ext_16", lang: "zh", level: 2, word: "钥匙", pronunciation: "yàoshi", ipa: "jɑʊ̯˥˩ ʂz̩", meaning: "Key", type: "base", pos: "noun" },
            { id: "v_zh_ext_17", lang: "zh", level: 2, word: "房间", pronunciation: "fángjiān", ipa: "fɑŋ˧˥ tɕjɛn˥", meaning: "Room", type: "base", pos: "place" },
            { id: "v_zh_ext_18", lang: "zh", level: 2, word: "入住", pronunciation: "rùzhù", ipa: "ʐu˥˩ ʈʂu˥˩", meaning: "Check-in", type: "base", pos: "verb" },
            { id: "v_zh_ext_19", lang: "zh", level: 2, word: "退房", pronunciation: "tuìfáng", ipa: "tʰweɪ̯˥˩ fɑŋ˧˥", meaning: "Check-out", type: "base", pos: "verb" },
            { id: "v_zh_ext_20", lang: "zh", level: 2, word: "毛巾", pronunciation: "máojīn", ipa: "mɑʊ̯˧˥ tɕin˥", meaning: "Towel", type: "base", pos: "noun" },
            { id: "v_zh_ext_21", lang: "zh", level: 2, word: "空调", pronunciation: "kōngtiáo", ipa: "kʰʊŋ˥ tʰjɑʊ̯˧˥", meaning: "Air Conditioning", type: "base", pos: "noun" },
            { id: "v_zh_ext_22", lang: "zh", level: 2, word: "无线网", pronunciation: "wúxiànwǎng", ipa: "u˧˥ ɕjɛn˥˩ wɑŋ˨˩˦", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_zh_ext_23", lang: "zh", level: 2, word: "方向", pronunciation: "fāngxiàng", ipa: "fɑŋ˥ ɕjɑŋ˥˩", meaning: "Directions", type: "base", pos: "noun" },
            { id: "v_zh_ext_24", lang: "zh", level: 2, word: "地图", pronunciation: "dìtú", ipa: "ti˥˩ tʰu˧˥", meaning: "Map", type: "base", pos: "noun" },
            { id: "v_zh_ext_25", lang: "zh", level: 2, word: "市中心", pronunciation: "shìzhōngxīn", ipa: "ʂʐ̩˥˩ ʈʂʊŋ˥ ɕin˥", meaning: "City Center", type: "base", pos: "place" },
            { id: "v_zh_ext_26", lang: "zh", level: 2, word: "右边", pronunciation: "yòubian", ipa: "joʊ̯˥˩ bjɛn", meaning: "Right", type: "base", pos: "noun" },
            { id: "v_zh_ext_27", lang: "zh", level: 2, word: "左边", pronunciation: "zuǒbian", ipa: "tswɔ˨˩˦ bjɛn", meaning: "Left", type: "base", pos: "noun" },
            { id: "v_zh_ext_28", lang: "zh", level: 2, word: "直走", pronunciation: "zhízǒu", ipa: "ʈʂʐ̩˧˥ zoʊ̯˨˩˦", meaning: "Straight", type: "base", pos: "verb" },
            { id: "v_zh_ext_29", lang: "zh", level: 2, word: "近", pronunciation: "jìn", ipa: "tɕin˥˩", meaning: "Near / Close", type: "base", pos: "adj" },
            { id: "v_zh_ext_30", lang: "zh", level: 2, word: "远", pronunciation: "yuǎn", ipa: "ɥɛn˨˩˦", meaning: "Far", type: "base", pos: "adj" },
            { id: "v_zh_ext_31", lang: "zh", level: 2, word: "地铁", pronunciation: "dìtiě", ipa: "ti˥˩ tʰjɛ˨˩˦", meaning: "Subway / Metro", type: "base", pos: "noun" },
            { id: "v_zh_ext_32", lang: "zh", level: 2, word: "出租车", pronunciation: "chūzūchē", ipa: "ʈʂʰu˥ tsu˥ ʈʂʰɤ˥", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_zh_ext_33", lang: "zh", level: 2, word: "站", pronunciation: "zhàn", ipa: "ʈʂan˥˩", meaning: "Stop / Station", type: "base", pos: "place" },
            { id: "v_zh_ext_34", lang: "zh", level: 2, word: "餐饮", pronunciation: "cānyǐn", ipa: "tsʰan˥ in˨˩˦", meaning: "Dining / Food", type: "base", pos: "noun" },
            { id: "v_zh_ext_35", lang: "zh", level: 2, word: "饭馆", pronunciation: "fànguǎn", ipa: "fan˥˩ kwan˨˩˦", meaning: "Restaurant", type: "base", pos: "place" },
            { id: "v_zh_ext_36", lang: "zh", level: 2, word: "菜单", pronunciation: "càidān", ipa: "tsʰaɪ̯˥˩ tan˥", meaning: "Menu", type: "base", pos: "noun" },
            { id: "v_zh_ext_37", lang: "zh", level: 2, word: "买单", pronunciation: "mǎidān", ipa: "maɪ̯˨˩˦ tan˥", meaning: "Bill / Check", type: "base", pos: "verb" },
            { id: "v_zh_ext_38", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯˨˩˦", meaning: "Water", type: "base", pos: "noun" },
            { id: "v_zh_ext_39", lang: "zh", level: 2, word: "早餐", pronunciation: "zǎocān", ipa: "tsɑʊ̯˨˩˦ tsʰan˥", meaning: "Breakfast", type: "base", pos: "noun" },
            { id: "v_zh_ext_40", lang: "zh", level: 2, word: "午餐", pronunciation: "wǔcān", ipa: "u˨˩˦ tsʰan˥", meaning: "Lunch", type: "base", pos: "noun" },
            { id: "v_zh_ext_41", lang: "zh", level: 2, word: "晚餐", pronunciation: "wǎncān", ipa: "wan˨˩˦ tsʰan˥", meaning: "Dinner", type: "base", pos: "noun" },
            { id: "v_zh_ext_42", lang: "zh", level: 2, word: "素食", pronunciation: "sùshí", ipa: "su˥˩ ʂʐ̩˧˥", meaning: "Vegetarian", type: "base", pos: "noun" },
            { id: "v_zh_ext_43", lang: "zh", level: 2, word: "好吃", pronunciation: "hǎochī", ipa: "xɑʊ̯˨˩˦ ʈʂʰʐ̩˥", meaning: "Delicious", type: "base", pos: "adj" },
            { id: "v_zh_ext_44", lang: "zh", level: 2, word: "超市", pronunciation: "chāoshì", ipa: "ʈʂʰɑʊ̯˥ ʂʐ̩˥˩", meaning: "Supermarket", type: "base", pos: "place" },
            { id: "v_zh_ext_45", lang: "zh", level: 2, word: "紧急", pronunciation: "jǐnjí", ipa: "tɕin˨˩˦ tɕi˧˥", meaning: "Emergency", type: "base", pos: "noun" },
            { id: "v_zh_ext_46", lang: "zh", level: 2, word: "救命", pronunciation: "jiùmìng", ipa: "tɕjoʊ̯˥˩ miŋ˥˩", meaning: "Help!", type: "base", pos: "phrase" },
            { id: "v_zh_ext_47", lang: "zh", level: 2, word: "医院", pronunciation: "yīyuàn", ipa: "i˥ ɥɛn˥˩", meaning: "Hospital", type: "base", pos: "place" },
            { id: "v_zh_ext_48", lang: "zh", level: 2, word: "药店", pronunciation: "yàodiàn", ipa: "jɑʊ̯˥˩ djɛn˥˩", meaning: "Pharmacy", type: "base", pos: "place" },
            { id: "v_zh_ext_49", lang: "zh", level: 2, word: "警察", pronunciation: "jǐngchá", ipa: "tɕiŋ˨˩˦ ʈʂʰa˧˥", meaning: "Police", type: "base", pos: "noun" },
            { id: "v_zh_ext_50", lang: "zh", level: 2, word: "洗手间", pronunciation: "xǐshǒujiān", ipa: "ɕi˨˩˦ ʂoʊ̯˨˩˦ tɕjɛn˥", meaning: "Restroom / Toilet", type: "base", pos: "place" },
            { id: "v_zh_ext_51", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "tɕʰjɛn˧˥", meaning: "Money", type: "base", pos: "noun" },
            { id: "v_zh_ext_52", lang: "zh", level: 2, word: "现金", pronunciation: "xiànjīn", ipa: "ɕjɛn˥˩ tɕin˥", meaning: "Cash", type: "base", pos: "noun" },
            { id: "v_zh_ext_53", lang: "zh", level: 2, word: "多少钱", pronunciation: "duōshǎo qián", ipa: "twɔ˥ ʂɑʊ̯˨˩˦ tɕʰjɛn˧˥", meaning: "How much?", type: "base", pos: "phrase" },
            { id: "v_zh_ext_54", lang: "zh", level: 2, word: "开门", pronunciation: "kāimén", ipa: "kʰaɪ̯˥ mən˧˥", meaning: "Open", type: "base", pos: "adj" },
            { id: "v_zh_ext_55", lang: "zh", level: 2, word: "换钱", pronunciation: "huànqián", ipa: "xwan˥˩ tɕʰjɛn˧˥", meaning: "Currency Exchange", type: "base", pos: "verb" }
        ]
    },

   "viaggio_ja": {
        title: "Travel (Japanese)", 
        tags: ["travel", "ja"],
        cards: [
            // --- OLD CARDS (Preserved) ---
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", ipa: "ikɯ", meaning: "To Go", type: "base", pos: "verb_move" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", ipa: "eki", meaning: "Station", type: "base", pos: "place" },
            { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", ipa: "deɴɕa", meaning: "Train", type: "derived", requires: ["rad_veicolo_ja"], pos: "noun" },
            { id: "v_ja17", lang: "ja", level: 3, word: "入り口", pronunciation: "いりぐち", ipa: "iɾiɡɯt͡ɕi", meaning: "Entrance", type: "base", requires: ["rad_bocca_ja"], pos: "place" },

            // --- NEW EXTENDED CARDS ---
            { id: "v_ja_ext_1", lang: "ja", level: 2, word: "交通", pronunciation: "こうつう", ipa: "koːtsɯː", meaning: "Transport", type: "base", pos: "noun" },
            { id: "v_ja_ext_2", lang: "ja", level: 2, word: "空港", pronunciation: "くうこう", ipa: "kɯːkoː", meaning: "Airport", type: "base", pos: "place" },
            { id: "v_ja_ext_3", lang: "ja", level: 2, word: "フライト", pronunciation: "ふらいと", ipa: "ɸɯɾaito", meaning: "Flight", type: "base", pos: "noun" },
            { id: "v_ja_ext_4", lang: "ja", level: 2, word: "出発", pronunciation: "しゅっぱつ", ipa: "ɕɯppatsɯ", meaning: "Departure", type: "base", pos: "verb" },
            { id: "v_ja_ext_5", lang: "ja", level: 2, word: "到着", pronunciation: "とうちゃく", ipa: "toːtɕakɯ", meaning: "Arrival", type: "base", pos: "verb" },
            { id: "v_ja_ext_6", lang: "ja", level: 2, word: "遅延", pronunciation: "ちえん", ipa: "tɕieɴ", meaning: "Delay", type: "base", pos: "noun" },
            { id: "v_ja_ext_7", lang: "ja", level: 2, word: "チケット", pronunciation: "ちけっと", ipa: "tɕiketto", meaning: "Ticket", type: "base", pos: "noun" },
            { id: "v_ja_ext_8", lang: "ja", level: 2, word: "パスポート", pronunciation: "ぱすぽーと", ipa: "pasɯpoːto", meaning: "Passport", type: "base", pos: "noun" },
            { id: "v_ja_ext_9", lang: "ja", level: 2, word: "荷物", pronunciation: "にもつ", ipa: "nimotsɯ", meaning: "Luggage", type: "base", pos: "noun" },
            { id: "v_ja_ext_12", lang: "ja", level: 2, word: "宿泊", pronunciation: "しゅくはく", ipa: "ɕɯkɯhakɯ", meaning: "Accommodation", type: "base", pos: "noun" },
            { id: "v_ja_ext_13", lang: "ja", level: 2, word: "予約", pronunciation: "よやく", ipa: "yoyakɯ", meaning: "Reservation", type: "base", pos: "verb" },
            { id: "v_ja_ext_14", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", ipa: "hoteɾɯ", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ja_ext_15", lang: "ja", level: 2, word: "フロント", pronunciation: "ふろんと", ipa: "ɸɯɾoɴto", meaning: "Reception", type: "base", pos: "place" },
            { id: "v_ja_ext_16", lang: "ja", level: 2, word: "鍵", pronunciation: "かぎ", ipa: "kaɡi", meaning: "Key", type: "base", pos: "noun" },
            { id: "v_ja_ext_17", lang: "ja", level: 2, word: "部屋", pronunciation: "へや", ipa: "heya", meaning: "Room", type: "base", pos: "place" },
            { id: "v_ja_ext_18", lang: "ja", level: 2, word: "チェックイン", pronunciation: "ちぇっくいん", ipa: "tɕekkɯiɴ", meaning: "Check-in", type: "base", pos: "verb" },
            { id: "v_ja_ext_19", lang: "ja", level: 2, word: "チェックアウト", pronunciation: "ちぇっくあうと", ipa: "tɕekkɯaɯto", meaning: "Check-out", type: "base", pos: "verb" },
            { id: "v_ja_ext_20", lang: "ja", level: 2, word: "タオル", pronunciation: "たおる", ipa: "taoɾɯ", meaning: "Towel", type: "base", pos: "noun" },
            { id: "v_ja_ext_21", lang: "ja", level: 2, word: "エアコン", pronunciation: "えあこん", ipa: "eakoɴ", meaning: "Air Conditioning", type: "base", pos: "noun" },
            { id: "v_ja_ext_22", lang: "ja", level: 2, word: "Wi-Fi", pronunciation: "わいふぁい", ipa: "waiphai", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_ja_ext_23", lang: "ja", level: 2, word: "方向", pronunciation: "ほうこう", ipa: "hoːkoː", meaning: "Direction / Orientation", type: "base", pos: "noun" },
            { id: "v_ja_ext_24", lang: "ja", level: 2, word: "地図", pronunciation: "ちず", ipa: "tɕizɯ", meaning: "Map", type: "base", pos: "noun" },
            { id: "v_ja_ext_25", lang: "ja", level: 2, word: "中心部", pronunciation: "ちゅうしんぶ", ipa: "tɕɯːɕimbɯ", meaning: "City Center", type: "base", pos: "place" },
            { id: "v_ja_ext_26", lang: "ja", level: 2, word: "右", pronunciation: "みぎ", ipa: "miɡi", meaning: "Right", type: "base", pos: "noun" },
            { id: "v_ja_ext_27", lang: "ja", level: 2, word: "左", pronunciation: "ひだり", ipa: "hidaɾi", meaning: "Left", type: "base", pos: "noun" },
            { id: "v_ja_ext_28", lang: "ja", level: 2, word: "まっすぐ", pronunciation: "まっすぐ", ipa: "massɯɡɯ", meaning: "Straight", type: "base", pos: "adj" }, 
            { id: "v_ja_ext_29", lang: "ja", level: 2, word: "近い", pronunciation: "ちかい", ipa: "tɕikai", meaning: "Near", type: "base", pos: "adj" },
            { id: "v_ja_ext_30", lang: "ja", level: 2, word: "遠い", pronunciation: "とおい", ipa: "toːi", meaning: "Far", type: "base", pos: "adj" },
            { id: "v_ja_ext_31", lang: "ja", level: 2, word: "地下鉄", pronunciation: "ちかてつ", ipa: "tɕikatetsɯ", meaning: "Subway / Metro", type: "base", pos: "noun" },
            { id: "v_ja_ext_32", lang: "ja", level: 2, word: "タクシー", pronunciation: "たくしー", ipa: "takɯɕiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_ja_ext_33", lang: "ja", level: 2, word: "バス停", pronunciation: "ばすてい", ipa: "basɯtei", meaning: "Bus Stop", type: "base", pos: "place" },
            { id: "v_ja_ext_34", lang: "ja", level: 2, word: "食事", pronunciation: "しょくじ", ipa: "ɕokɯdʑi", meaning: "Meal / Dining", type: "base", pos: "noun" },
            { id: "v_ja_ext_35", lang: "ja", level: 2, word: "レストラン", pronunciation: "れすとらん", ipa: "ɾesɯtoɾaɴ", meaning: "Restaurant", type: "base", pos: "place" },
            { id: "v_ja_ext_36", lang: "ja", level: 2, word: "メニュー", pronunciation: "めにゅー", ipa: "menjuː", meaning: "Menu", type: "base", pos: "noun" },
            { id: "v_ja_ext_37", lang: "ja", level: 2, word: "お会計", pronunciation: "おかいけい", ipa: "okaikei", meaning: "Check / Bill", type: "base", pos: "noun" },
            { id: "v_ja_ext_38", lang: "ja", level: 1, word: "水", pronunciation: "みず", ipa: "mizɯ", meaning: "Water", type: "base", pos: "noun" },
            { id: "v_ja_ext_39", lang: "ja", level: 2, word: "朝ご飯", pronunciation: "あさごはん", ipa: "asaɡohaɴ", meaning: "Breakfast", type: "base", pos: "noun" },
            { id: "v_ja_ext_40", lang: "ja", level: 2, word: "昼ご飯", pronunciation: "ひるごはん", ipa: "hiɾɯɡohaɴ", meaning: "Lunch", type: "base", pos: "noun" },
            { id: "v_ja_ext_41", lang: "ja", level: 2, word: "晩ご飯", pronunciation: "ばんごはん", ipa: "baɴɡohaɴ", meaning: "Dinner", type: "base", pos: "noun" },
            { id: "v_ja_ext_42", lang: "ja", level: 2, word: "ベジタリアン", pronunciation: "べじたりあん", ipa: "bedʑitaɾiaɴ", meaning: "Vegetarian", type: "base", pos: "noun" },
            { id: "v_ja_ext_43", lang: "ja", level: 2, word: "美味しい", pronunciation: "おいしい", ipa: "oiɕiː", meaning: "Delicious", type: "base", pos: "adj" },
            { id: "v_ja_ext_44", lang: "ja", level: 2, word: "スーパー", pronunciation: "すーぱー", ipa: "sɯːpaː", meaning: "Supermarket", type: "base", pos: "place" },
            { id: "v_ja_ext_45", lang: "ja", level: 2, word: "緊急", pronunciation: "きんきゅう", ipa: "kiŋkjuː", meaning: "Emergency", type: "base", pos: "noun" },
            { id: "v_ja_ext_46", lang: "ja", level: 2, word: "助けて", pronunciation: "たすけて", ipa: "tasɯkete", meaning: "Help!", type: "base", pos: "phrase" },
            { id: "v_ja_ext_47", lang: "ja", level: 2, word: "病院", pronunciation: "びょういん", ipa: "bjoːiɴ", meaning: "Hospital", type: "base", pos: "place" },
            { id: "v_ja_ext_48", lang: "ja", level: 2, word: "薬局", pronunciation: "やっきょく", ipa: "jakkyokɯ", meaning: "Pharmacy", type: "base", pos: "place" },
            { id: "v_ja_ext_49", lang: "ja", level: 2, word: "警察", pronunciation: "けいさつ", ipa: "keisatsɯ", meaning: "Police", type: "base", pos: "noun" },
            { id: "v_ja_ext_50", lang: "ja", level: 2, word: "トイレ", pronunciation: "といれ", ipa: "toiɾe", meaning: "Restroom / Toilet", type: "base", pos: "place" },
            { id: "v_ja_ext_51", lang: "ja", level: 2, word: "お金", pronunciation: "おかね", ipa: "okane", meaning: "Money", type: "base", pos: "noun" },
            { id: "v_ja_ext_52", lang: "ja", level: 2, word: "現金", pronunciation: "げんきん", ipa: "ɡeŋkiɴ", meaning: "Cash", type: "base", pos: "noun" },
            { id: "v_ja_ext_53", lang: "ja", level: 2, word: "いくら", pronunciation: "いくら", ipa: "ikɯɾa", meaning: "How much?", type: "base", pos: "phrase" },
            { id: "v_ja_ext_54", lang: "ja", level: 2, word: "営業中", pronunciation: "えいぎょうちゅう", ipa: "eiɡjoːtɕɯː", meaning: "Open (business)", type: "base", pos: "adj" },
            { id: "v_ja_ext_55", lang: "ja", level: 2, word: "両替", pronunciation: "りょうがえ", ipa: "ɾjoːɡae", meaning: "Currency Exchange", type: "base", pos: "noun" }
        ]
    },

   "viaggio_ar": {
        title: "Travel (Arabic)",
        tags: ["travel", "ar"],
        cards: [
            // --- OLD CARDS (Preserved) ---
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", ipa: "safar", meaning: "Travel", type: "derived", requires: ["root_sfr"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", ipa: "matˤaːr", meaning: "Airport", type: "derived", requires: ["root_tyr"], pos: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", ipa: "tˤaːʔira", meaning: "Airplane", type: "derived", requires: ["root_tyr"], pos: "noun" },

            // --- NEW EXTENDED CARDS ---
            { id: "v_ar_ext_1", lang: "ar", level: 2, word: "النَّقْل", pronunciation: "An-naql", ipa: "anˈnaql", meaning: "Transport", type: "base", pos: "noun" },
            { id: "v_ar_ext_4", lang: "ar", level: 2, word: "مُغَادَرَة", pronunciation: "Mughādara", ipa: "muˈɣaːdara", meaning: "Departure", type: "base", pos: "noun" },
            { id: "v_ar_ext_5", lang: "ar", level: 2, word: "وُصُول", pronunciation: "Wuṣūl", ipa: "wuˈsˤuːl", meaning: "Arrival", type: "base", pos: "noun" },
            { id: "v_ar_ext_6", lang: "ar", level: 2, word: "تَأْخِير", pronunciation: "Ta'khīr", ipa: "taʔˈxiːr", meaning: "Delay", type: "base", pos: "noun" },
            { id: "v_ar_ext_7", lang: "ar", level: 2, word: "تَذْكِرَة", pronunciation: "Tadhkira", ipa: "ˈtaðkira", meaning: "Ticket", type: "base", pos: "noun" },
            { id: "v_ar_ext_8", lang: "ar", level: 2, word: "جَوَازُ سَفَر", pronunciation: "Jawāz safar", ipa: "dʒaˈwaːz ˈsafar", meaning: "Passport", type: "base", pos: "noun" },
            { id: "v_ar_ext_9", lang: "ar", level: 2, word: "حَقِيبَة", pronunciation: "Ḥaqība", ipa: "ħaˈqiːba", meaning: "Luggage / Bag", type: "base", pos: "noun" },
            { id: "v_ar_ext_10", lang: "ar", level: 2, word: "قِطَار", pronunciation: "Qiṭār", ipa: "qiˈtˤɑːr", meaning: "Train", type: "base", pos: "noun" },
            { id: "v_ar_ext_11", lang: "ar", level: 2, word: "مَحَطَّة", pronunciation: "Maḥaṭṭa", ipa: "maˈħatˤtˤa", meaning: "Station", type: "base", pos: "place" },
            { id: "v_ar_ext_12", lang: "ar", level: 2, word: "إِقَامَة", pronunciation: "Iqāma", ipa: "iˈqaːma", meaning: "Accommodation", type: "base", pos: "noun" },
            { id: "v_ar_ext_13", lang: "ar", level: 2, word: "حَجْز", pronunciation: "Ḥajz", ipa: "ħadʒz", meaning: "Reservation", type: "base", pos: "noun" },
            { id: "v_ar_ext_14", lang: "ar", level: 2, word: "فُنْدُق", pronunciation: "Funduq", ipa: "ˈfunduq", meaning: "Hotel", type: "base", pos: "place" },
            { id: "v_ar_ext_15", lang: "ar", level: 2, word: "اِسْتِقْبَال", pronunciation: "Istiqbāl", ipa: "istiqˈbaːl", meaning: "Reception", type: "base", pos: "place" },
            { id: "v_ar_ext_16", lang: "ar", level: 2, word: "مِفْتَاح", pronunciation: "Miftāḥ", ipa: "mifˈtaːħ", meaning: "Key", type: "base", pos: "noun" },
            { id: "v_ar_ext_17", lang: "ar", level: 2, word: "غُرْفَة", pronunciation: "Ghurfa", ipa: "ˈɣurfa", meaning: "Room", type: "base", pos: "place" },
            { id: "v_ar_ext_18", lang: "ar", level: 2, word: "تَسْجِيلُ الْوُصُول", pronunciation: "Tasjīl al-wuṣūl", ipa: "tasˈdʒiːl al wuˈsˤuːl", meaning: "Check-in", type: "base", pos: "noun" },
            { id: "v_ar_ext_19", lang: "ar", level: 2, word: "تَسْجِيلُ الْمُغَادَرَة", pronunciation: "Tasjīl al-mughādara", ipa: "tasˈdʒiːl al muˈɣaːdara", meaning: "Check-out", type: "base", pos: "noun" },
            { id: "v_ar_ext_20", lang: "ar", level: 2, word: "مِنْشَفَة", pronunciation: "Minshafa", ipa: "minˈʃafa", meaning: "Towel", type: "base", pos: "noun" },
            { id: "v_ar_ext_21", lang: "ar", level: 2, word: "مُكَيِّفُ هَوَاء", pronunciation: "Mukayyif hawā'", ipa: "muˈkajjif haˈwaːʔ", meaning: "Air Conditioning", type: "base", pos: "noun" },
            { id: "v_ar_ext_22", lang: "ar", level: 2, word: "وَايْ فَايْ", pronunciation: "Wāy Fāy", ipa: "waːj faːj", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_ar_ext_23", lang: "ar", level: 2, word: "اِتِّجَاهَات", pronunciation: "Ittijāhāt", ipa: "ittidʒaˈhaːt", meaning: "Directions", type: "base", pos: "noun" },
            { id: "v_ar_ext_24", lang: "ar", level: 2, word: "خَرِيطَة", pronunciation: "Kharīṭa", ipa: "xaˈriːtˤa", meaning: "Map", type: "base", pos: "noun" },
            { id: "v_ar_ext_25", lang: "ar", level: 2, word: "وَسَطُ الْمَدِينَة", pronunciation: "Wasaṭ al-madīna", ipa: "ˈwasatˤ al maˈdiːna", meaning: "City Center", type: "base", pos: "place" },
            { id: "v_ar_ext_26", lang: "ar", level: 2, word: "يَمِين", pronunciation: "Yamīn", ipa: "jaˈmiːn", meaning: "Right", type: "base", pos: "noun" },
            { id: "v_ar_ext_27", lang: "ar", level: 2, word: "يَسَار", pronunciation: "Yasār", ipa: "jaˈsaːr", meaning: "Left", type: "base", pos: "noun" },
            { id: "v_ar_ext_28", lang: "ar", level: 2, word: "عَلَى طُول / مُبَاشَرَة", pronunciation: "'Alā ṭūl / Mubāshara", ipa: "ˈʕalaː tˤuːl / muˈbaːʃara", meaning: "Straight", type: "base", pos: "noun" },
            { id: "v_ar_ext_29", lang: "ar", level: 2, word: "قَرِيب", pronunciation: "Qarīb", ipa: "qaˈriːb", meaning: "Near", type: "base", pos: "adj" },
            { id: "v_ar_ext_30", lang: "ar", level: 2, word: "بَعِيد", pronunciation: "Ba'īd", ipa: "baˈʕiːd", meaning: "Far", type: "base", pos: "adj" },
            { id: "v_ar_ext_31", lang: "ar", level: 2, word: "مِتْرُو الْأَنْفَاق", pronunciation: "Mitrū al-anfāq", ipa: "ˈmitruː al ʔanˈfaːq", meaning: "Subway / Metro", type: "base", pos: "noun" },
            { id: "v_ar_ext_32", lang: "ar", level: 2, word: "تَاكْسِي", pronunciation: "Tāksī", ipa: "ˈtaːksiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_ar_ext_33", lang: "ar", level: 2, word: "مَوْقِفُ حَافِلَات", pronunciation: "Mawqif ḥāfilāt", ipa: "ˈmawqif ħaːfiˈlaːt", meaning: "Bus Stop", type: "base", pos: "place" },
            { id: "v_ar_ext_34", lang: "ar", level: 2, word: "طَعَام", pronunciation: "Ṭa'ām", ipa: "tˤaˈʕaːm", meaning: "Food", type: "base", pos: "noun" },
            { id: "v_ar_ext_35", lang: "ar", level: 2, word: "مَطْعَم", pronunciation: "Maṭ'am", ipa: "ˈmatˤʕam", meaning: "Restaurant", type: "base", pos: "place" },
            { id: "v_ar_ext_36", lang: "ar", level: 2, word: "قَائِمَةُ الطَّعَام", pronunciation: "Qā'imat aṭ-ṭa'ām", ipa: "ˈqaːʔimatˤ atˤ tˤaˈʕaːm", meaning: "Menu", type: "base", pos: "noun" },
            { id: "v_ar_ext_37", lang: "ar", level: 2, word: "الْحِسَاب", pronunciation: "Al-ḥisāb", ipa: "al ħiˈsaːb", meaning: "Check / Bill", type: "base", pos: "noun" },
            { id: "v_ar_ext_38", lang: "ar", level: 1, word: "مَاء", pronunciation: "Mā'", ipa: "maːʔ", meaning: "Water", type: "base", pos: "noun" },
            { id: "v_ar_ext_39", lang: "ar", level: 2, word: "فُطُور", pronunciation: "Fuṭūr", ipa: "fuˈtˤuːr", meaning: "Breakfast", type: "base", pos: "noun" },
            { id: "v_ar_ext_40", lang: "ar", level: 2, word: "غَدَاء", pronunciation: "Ghadā'", ipa: "ɣaˈdaːʔ", meaning: "Lunch", type: "base", pos: "noun" },
            { id: "v_ar_ext_41", lang: "ar", level: 2, word: "عَشَاء", pronunciation: "'Ashā'", ipa: "ʕaˈʃaːʔ", meaning: "Dinner", type: "base", pos: "noun" },
            { id: "v_ar_ext_42", lang: "ar", level: 2, word: "نَبَاتِيّ", pronunciation: "Nabātī", ipa: "naˈbaːti", meaning: "Vegetarian", type: "base", pos: "adj" },
            { id: "v_ar_ext_43", lang: "ar", level: 2, word: "لَذِيذ", pronunciation: "Ladhīdh", ipa: "laˈðiːð", meaning: "Delicious", type: "base", pos: "adj" },
            { id: "v_ar_ext_44", lang: "ar", level: 2, word: "سُوبَرْمَارْكِت", pronunciation: "Sūbarmārkit", ipa: "suːbarˈmaːrkit", meaning: "Supermarket", type: "base", pos: "place" },
            { id: "v_ar_ext_45", lang: "ar", level: 2, word: "طَوَارِئ", pronunciation: "Ṭawāri'", ipa: "tˤaˈwaːriʔ", meaning: "Emergency", type: "base", pos: "noun" },
            { id: "v_ar_ext_46", lang: "ar", level: 2, word: "النَّجْدَة!", pronunciation: "An-najda!", ipa: "anˈnadʒda", meaning: "Help!", type: "base", pos: "phrase" },
            { id: "v_ar_ext_47", lang: "ar", level: 2, word: "مُسْتَشْفَى", pronunciation: "Mustashfā", ipa: "musˈtaʃfa", meaning: "Hospital", type: "base", pos: "place" },
            { id: "v_ar_ext_48", lang: "ar", level: 2, word: "صَيْدَلِيَّة", pronunciation: "Ṣaydaliyya", ipa: "sˤajdaˈlijːa", meaning: "Pharmacy", type: "base", pos: "place" },
            { id: "v_ar_ext_49", lang: "ar", level: 2, word: "شُرْطَة", pronunciation: "Shurṭa", ipa: "ˈʃurtˤa", meaning: "Police", type: "base", pos: "noun" },
            { id: "v_ar_ext_50", lang: "ar", level: 2, word: "دَوْرَةُ الْمِيَاه", pronunciation: "Dawrat al-miyāh", ipa: "ˈdawrat al miˈjaːh", meaning: "Restroom / Toilet", type: "base", pos: "place" },
            { id: "v_ar_ext_51", lang: "ar", level: 2, word: "نُقُود", pronunciation: "Nuqūd", ipa: "nuˈquːd", meaning: "Money", type: "base", pos: "noun" },
            { id: "v_ar_ext_52", lang: "ar", level: 2, word: "نَقْد", pronunciation: "Naqd", ipa: "naqd", meaning: "Cash", type: "base", pos: "noun" },
            { id: "v_ar_ext_53", lang: "ar", level: 2, word: "كَمِ السِّعْر؟", pronunciation: "Kam as-si'r?", ipa: "kam asˈsiʔr", meaning: "How much?", type: "base", pos: "phrase" },
            { id: "v_ar_ext_54", lang: "ar", level: 2, word: "مَفْتُوح", pronunciation: "Maftūḥ", ipa: "mafˈtuːħ", meaning: "Open", type: "base", pos: "adj" },
            { id: "v_ar_ext_55", lang: "ar", level: 2, word: "صَرْفُ الْعُمْلَات", pronunciation: "Ṣarf al-'umlāt", ipa: "sˤarf al ʕumˈlaːt", meaning: "Currency Exchange", type: "base", pos: "noun" }
        ]
    },

"verbi_top100_zh": {
        title: "Top 100 Verbs (Chinese)",
        tags: ["verbs", "zh"],
        cards: [
            // 1. PILLAR VERBS
            { id: "v_zh_top_1", lang: "zh", level: 1, word: "是", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "To Be", type: "base", pos: "verb" },
            { id: "v_zh_top_2", lang: "zh", level: 1, word: "有", pronunciation: "yǒu", ipa: "joʊ̯²¹⁴", meaning: "To Have / To Exist", type: "base", pos: "verb" },
            { id: "v_zh_top_3", lang: "zh", level: 1, word: "做", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "To Do / To Make", type: "base", pos: "verb" },
            { id: "v_zh_top_4", lang: "zh", level: 1, word: "干", pronunciation: "gàn", ipa: "kan⁵¹", meaning: "To Do / To Manage", type: "base", pos: "verb" },
            { id: "v_zh_top_5", lang: "zh", level: 1, word: "在", pronunciation: "zài", ipa: "tsaɪ̯⁵¹", meaning: "To Be (at/in) / To Exist", type: "base", pos: "verb" },
            { id: "v_zh_top_6", lang: "zh", level: 2, word: "成为", pronunciation: "chéngwéi", ipa: "ʈʂʰəŋ˧˥ weɪ̯˧˥", meaning: "To Become", type: "base", pos: "verb" },
            { id: "v_zh_top_7", lang: "zh", level: 2, word: "改变", pronunciation: "gǎibiàn", ipa: "kaɪ̯˨˩˦ pjɛn⁵¹", meaning: "To Change", type: "base", pos: "verb" },
            { id: "v_zh_top_8", lang: "zh", level: 2, word: "发生", pronunciation: "fāshēng", ipa: "fa⁵⁵ ʂəŋ⁵⁵", meaning: "To Happen / To Occur", type: "base", pos: "verb" },

            // 2. MOVEMENT
            { id: "v_zh_top_9", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "To Go", type: "base", pos: "verb" },
            { id: "v_zh_top_10", lang: "zh", level: 1, word: "来", pronunciation: "lái", ipa: "laɪ̯˧˥", meaning: "To Come", type: "base", pos: "verb" },
            { id: "v_zh_top_11", lang: "zh", level: 1, word: "回", pronunciation: "huí", ipa: "xweɪ̯˧˥", meaning: "To Return / To Go Back", type: "base", pos: "verb" },
            { id: "v_zh_top_12", lang: "zh", level: 1, word: "走", pronunciation: "zǒu", ipa: "tsoʊ̯˨˩˦", meaning: "To Walk / To Leave", type: "base", pos: "verb" },
            { id: "v_zh_top_13", lang: "zh", level: 1, word: "跑", pronunciation: "pǎo", ipa: "pʰɑʊ̯˨˩˦", meaning: "To Run", type: "base", pos: "verb" },
            { id: "v_zh_top_14", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "To Fly", type: "base", pos: "verb" },
            { id: "v_zh_top_15", lang: "zh", level: 2, word: "出发", pronunciation: "chūfā", ipa: "ʈʂʰu⁵⁵ fa⁵⁵", meaning: "To Depart", type: "base", pos: "verb" },
            { id: "v_zh_top_16", lang: "zh", level: 2, word: "到", pronunciation: "dào", ipa: "tɑʊ̯⁵¹", meaning: "To Arrive / To Reach", type: "base", pos: "verb" },
            { id: "v_zh_top_17", lang: "zh", level: 1, word: "进", pronunciation: "jìn", ipa: "tɕin⁵¹", meaning: "To Enter", type: "base", pos: "verb" },
            { id: "v_zh_top_18", lang: "zh", level: 1, word: "出", pronunciation: "chū", ipa: "ʈʂʰu⁵⁵", meaning: "To Exit / To Go Out", type: "base", pos: "verb" },
            { id: "v_zh_top_19", lang: "zh", level: 1, word: "坐", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "To Sit / To Take (transport)", type: "base", pos: "verb" },
            { id: "v_zh_top_20", lang: "zh", level: 1, word: "站", pronunciation: "zhàn", ipa: "ʈʂan⁵¹", meaning: "To Stand", type: "base", pos: "verb" },
            { id: "v_zh_top_21", lang: "zh", level: 2, word: "停", pronunciation: "tíng", ipa: "tʰiŋ˧˥", meaning: "To Stop", type: "base", pos: "verb" },
            { id: "v_zh_top_22", lang: "zh", level: 2, word: "过", pronunciation: "guò", ipa: "kwɔ⁵¹", meaning: "To Pass / To Cross", type: "base", pos: "verb" },

            // 3. SENSES AND PERCEPTION
            { id: "v_zh_top_23", lang: "zh", level: 1, word: "看", pronunciation: "kàn", ipa: "kʰan⁵¹", meaning: "To Look / To Watch / To Read", type: "base", pos: "verb" },
            { id: "v_zh_top_24", lang: "zh", level: 1, word: "听", pronunciation: "tīng", ipa: "tʰiŋ⁵⁵", meaning: "To Listen / To Hear", type: "base", pos: "verb" },
            { id: "v_zh_top_25", lang: "zh", level: 2, word: "闻", pronunciation: "wén", ipa: "wən˧˥", meaning: "To Smell", type: "base", pos: "verb" },
            { id: "v_zh_top_26", lang: "zh", level: 2, word: "摸", pronunciation: "mō", ipa: "mwɔ⁵⁵", meaning: "To Touch", type: "base", pos: "verb" },
            { id: "v_zh_top_27", lang: "zh", level: 2, word: "看起来", pronunciation: "kàn qǐlái", ipa: "kʰan⁵¹ tɕʰi˨˩˦ laɪ̯˧˥", meaning: "To Look like / To Seem", type: "base", pos: "verb" },
            { id: "v_zh_top_28", lang: "zh", level: 2, word: "感觉", pronunciation: "gǎnjué", ipa: "kan˨˩˦ tɕɥɛ˧˥", meaning: "To Feel / To Perceive", type: "base", pos: "verb" },

            // 4. MIND AND FEELINGS
            { id: "v_zh_top_29", lang: "zh", level: 1, word: "想", pronunciation: "xiǎng", ipa: "ɕjɑŋ˨˩˦", meaning: "To Think / To Miss / To Want", type: "base", pos: "verb" },
            { id: "v_zh_top_30", lang: "zh", level: 1, word: "要", pronunciation: "yào", ipa: "jɑʊ̯⁵¹", meaning: "To Want / To Need", type: "base", pos: "verb" },
            { id: "v_zh_top_31", lang: "zh", level: 1, word: "爱", pronunciation: "ài", ipa: "aɪ̯⁵¹", meaning: "To Love", type: "base", pos: "verb" },
            { id: "v_zh_top_32", lang: "zh", level: 1, word: "喜欢", pronunciation: "xǐhuān", ipa: "ɕi˨˩˦ xwan⁵⁵", meaning: "To Like", type: "base", pos: "verb" },
            { id: "v_zh_top_33", lang: "zh", level: 1, word: "知道", pronunciation: "zhīdào", ipa: "ʈʂʐ̩⁵⁵ tɑʊ̯⁵¹", meaning: "To Know (facts)", type: "base", pos: "verb" },
            { id: "v_zh_top_34", lang: "zh", level: 1, word: "认识", pronunciation: "rènshi", ipa: "ʐən⁵¹ ʂi", meaning: "To Know (people) / To Recognize", type: "base", pos: "verb" },
            { id: "v_zh_top_35", lang: "zh", level: 2, word: "懂", pronunciation: "dǒng", ipa: "tʊŋ˨˩˦", meaning: "To Understand", type: "base", pos: "verb" },
            { id: "v_zh_top_36", lang: "zh", level: 2, word: "明白", pronunciation: "míngbai", ipa: "miŋ˧˥ paɪ̯", meaning: "To Comprehend / To Realize", type: "base", pos: "verb" },
            { id: "v_zh_top_37", lang: "zh", level: 2, word: "相信", pronunciation: "xiāngxìn", ipa: "ɕjɑŋ⁵⁵ ɕin⁵¹", meaning: "To Believe / To Trust", type: "base", pos: "verb" },
            { id: "v_zh_top_38", lang: "zh", level: 2, word: "记得", pronunciation: "jìde", ipa: "tɕi⁵¹ d̥ə", meaning: "To Remember", type: "base", pos: "verb" },
            { id: "v_zh_top_39", lang: "zh", level: 2, word: "忘记", pronunciation: "wàngjì", ipa: "wɑŋ⁵¹ tɕi⁵¹", meaning: "To Forget", type: "base", pos: "verb" },
            { id: "v_zh_top_40", lang: "zh", level: 2, word: "希望", pronunciation: "xīwàng", ipa: "ɕi⁵⁵ wɑŋ⁵¹", meaning: "To Hope", type: "base", pos: "verb" },
            { id: "v_zh_top_41", lang: "zh", level: 2, word: "怕", pronunciation: "pà", ipa: "pʰa⁵¹", meaning: "To Fear / To Be Afraid", type: "base", pos: "verb" },
            { id: "v_zh_top_42", lang: "zh", level: 2, word: "决定", pronunciation: "juédìng", ipa: "tɕɥɛ˧˥ tiŋ⁵¹", meaning: "To Decide", type: "base", pos: "verb" },

            // 5. COMMUNICATION
            { id: "v_zh_top_43", lang: "zh", level: 1, word: "说", pronunciation: "shuō", ipa: "ʂwɔ⁵⁵", meaning: "To Speak / To Say", type: "base", pos: "verb" },
            { id: "v_zh_top_44", lang: "zh", level: 1, word: "叫", pronunciation: "jiào", ipa: "tɕjɑʊ̯⁵¹", meaning: "To Call / To Be Called", type: "base", pos: "verb" },
            { id: "v_zh_top_45", lang: "zh", level: 1, word: "问", pronunciation: "wèn", ipa: "wən⁵¹", meaning: "To Ask", type: "base", pos: "verb" },
            { id: "v_zh_top_46", lang: "zh", level: 2, word: "回答", pronunciation: "huídá", ipa: "xweɪ̯˧˥ ta˧˥", meaning: "To Answer", type: "base", pos: "verb" },
            { id: "v_zh_top_47", lang: "zh", level: 2, word: "告诉", pronunciation: "gàosu", ipa: "kɑʊ̯⁵¹ su", meaning: "To Tell / To Inform", type: "base", pos: "verb" },
            { id: "v_zh_top_48", lang: "zh", level: 1, word: "写", pronunciation: "xiě", ipa: "ɕjɛ˨˩˦", meaning: "To Write", type: "base", pos: "verb" },
            { id: "v_zh_top_49", lang: "zh", level: 1, word: "读", pronunciation: "dú", ipa: "tu˧˥", meaning: "To Read", type: "base", pos: "verb" },
            { id: "v_zh_top_50", lang: "zh", level: 2, word: "解释", pronunciation: "jiěshì", ipa: "tɕjɛ˨˩˦ ʂɻ̩⁵¹", meaning: "To Explain", type: "base", pos: "verb" },

            // 6. DAILY LIFE
            { id: "v_zh_top_51", lang: "zh", level: 1, word: "吃", pronunciation: "chī", ipa: "t͡ʂʰɻ̩⁵⁵", meaning: "To Eat", type: "base", pos: "verb" },
            { id: "v_zh_top_52", lang: "zh", level: 1, word: "喝", pronunciation: "hē", ipa: "xɤ⁵⁵", meaning: "To Drink", type: "base", pos: "verb" },
            { id: "v_zh_top_53", lang: "zh", level: 1, word: "睡觉", pronunciation: "shuìjiào", ipa: "ʂweɪ̯⁵¹ tɕjɑʊ̯⁵¹", meaning: "To Sleep", type: "base", pos: "verb" },
            { id: "v_zh_top_54", lang: "zh", level: 2, word: "起床", pronunciation: "qǐchuáng", ipa: "tɕʰi˨˩˦ ʈʂʰwɑŋ˧˥", meaning: "To Wake Up / To Get Up", type: "base", pos: "verb" },
            { id: "v_zh_top_55", lang: "zh", level: 1, word: "买", pronunciation: "mǎi", ipa: "maɪ̯˨˩˦", meaning: "To Buy", type: "base", pos: "verb" },
            { id: "v_zh_top_56", lang: "zh", level: 1, word: "卖", pronunciation: "mài", ipa: "maɪ̯⁵¹", meaning: "To Sell", type: "base", pos: "verb" },
            { id: "v_zh_top_57", lang: "zh", level: 2, word: "付", pronunciation: "fù", ipa: "fu⁵¹", meaning: "To Pay", type: "base", pos: "verb" },
            { id: "v_zh_top_58", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa⁵⁵", meaning: "To Spend (money/time)", type: "base", pos: "verb" },
            { id: "v_zh_top_59", lang: "zh", level: 2, word: "穿", pronunciation: "chuān", ipa: "t͡ʂʰwan⁵⁵", meaning: "To Wear", type: "base", pos: "verb" },
            { id: "v_zh_top_60", lang: "zh", level: 2, word: "脱", pronunciation: "tuō", ipa: "tʰwɔ⁵⁵", meaning: "To Take off (clothes)", type: "base", pos: "verb" },
            { id: "v_zh_top_61", lang: "zh", level: 1, word: "洗", pronunciation: "xǐ", ipa: "ɕi˨˩˦", meaning: "To Wash", type: "base", pos: "verb" },
            { id: "v_zh_top_62", lang: "zh", level: 2, word: "做饭", pronunciation: "zuòfàn", ipa: "tswɔ⁵¹ fan⁵¹", meaning: "To Cook", type: "base", pos: "verb" },
            { id: "v_zh_top_63", lang: "zh", level: 1, word: "工作", pronunciation: "gōngzuò", ipa: "kʊŋ⁵⁵ tswɔ⁵¹", meaning: "To Work", type: "base", pos: "verb" },
            { id: "v_zh_top_64", lang: "zh", level: 1, word: "学习", pronunciation: "xuéxí", ipa: "ɕɥɛ˧˥ ɕi˧˥", meaning: "To Study", type: "base", pos: "verb" },
            { id: "v_zh_top_65", lang: "zh", level: 1, word: "玩", pronunciation: "wán", ipa: "wan˧˥", meaning: "To Play / To Have Fun", type: "base", pos: "verb" },
            { id: "v_zh_top_66", lang: "zh", level: 2, word: "休息", pronunciation: "xiūxi", ipa: "ɕjoʊ̯⁵⁵ ɕi", meaning: "To Rest", type: "base", pos: "verb" },

            // 7. ACTIONS WITH OBJECTS
            { id: "v_zh_top_67", lang: "zh", level: 1, word: "给", pronunciation: "gěi", ipa: "keɪ̯˨˩˦", meaning: "To Give", type: "base", pos: "verb" },
            { id: "v_zh_top_68", lang: "zh", level: 1, word: "拿", pronunciation: "ná", ipa: "na˧˥", meaning: "To Take / To Hold", type: "base", pos: "verb" },
            { id: "v_zh_top_69", lang: "zh", level: 1, word: "放", pronunciation: "fàng", ipa: "fɑŋ⁵¹", meaning: "To Put / To Place", type: "base", pos: "verb" },
            { id: "v_zh_top_70", lang: "zh", level: 2, word: "带", pronunciation: "dài", ipa: "taɪ̯⁵¹", meaning: "To Bring / To Take along", type: "base", pos: "verb" },
            { id: "v_zh_top_71", lang: "zh", level: 1, word: "用", pronunciation: "yòng", ipa: "jʊŋ⁵¹", meaning: "To Use", type: "base", pos: "verb" },
            { id: "v_zh_top_72", lang: "zh", level: 1, word: "找", pronunciation: "zhǎo", ipa: "ʈʂɑʊ̯˨˩˦", meaning: "To Look for", type: "base", pos: "verb" },
            { id: "v_zh_top_73", lang: "zh", level: 2, word: "找到", pronunciation: "zhǎodào", ipa: "ʈʂɑʊ̯˨˩˦ tɑʊ̯⁵¹", meaning: "To Find", type: "base", pos: "verb" },
            { id: "v_zh_top_74", lang: "zh", level: 2, word: "丢", pronunciation: "diū", ipa: "tjoʊ̯⁵⁵", meaning: "To Lose (object) / To Throw", type: "base", pos: "verb" },
            { id: "v_zh_top_75", lang: "zh", level: 1, word: "开", pronunciation: "kāi", ipa: "kʰaɪ̯⁵⁵", meaning: "To Open / To Drive / To Turn on", type: "base", pos: "verb" },
            { id: "v_zh_top_76", lang: "zh", level: 1, word: "关", pronunciation: "guān", ipa: "kwan⁵⁵", meaning: "To Close / To Turn off", type: "base", pos: "verb" },
            { id: "v_zh_top_77", lang: "zh", level: 2, word: "拉", pronunciation: "lā", ipa: "la⁵⁵", meaning: "To Pull", type: "base", pos: "verb" },
            { id: "v_zh_top_78", lang: "zh", level: 2, word: "推", pronunciation: "tuī", ipa: "tʰweɪ̯⁵⁵", meaning: "To Push", type: "base", pos: "verb" },
            { id: "v_zh_top_79", lang: "zh", level: 2, word: "坏", pronunciation: "huài", ipa: "xwaɪ̯⁵¹", meaning: "To Break / To Go bad", type: "base", pos: "verb" },
            { id: "v_zh_top_80", lang: "zh", level: 2, word: "修", pronunciation: "xiū", ipa: "ɕjoʊ̯⁵⁵", meaning: "To Repair", type: "base", pos: "verb" },

            // 8. SOCIAL AND OTHER
            { id: "v_zh_top_81", lang: "zh", level: 1, word: "帮", pronunciation: "bāng", ipa: "pɑŋ⁵⁵", meaning: "To Help", type: "base", pos: "verb" },
            { id: "v_zh_top_82", lang: "zh", level: 1, word: "等", pronunciation: "děng", ipa: "təŋ˨˩˦", meaning: "To Wait", type: "base", pos: "verb" },
            { id: "v_zh_top_83", lang: "zh", level: 2, word: "见面", pronunciation: "jiànmiàn", ipa: "tɕjɛn⁵¹ mjɛn⁵¹", meaning: "To Meet", type: "base", pos: "verb" },
            { id: "v_zh_top_84", lang: "zh", level: 2, word: "请", pronunciation: "qǐng", ipa: "tɕʰiŋ˨˩˦", meaning: "To Invite / Please (request)", type: "base", pos: "verb" },
            { id: "v_zh_top_85", lang: "zh", level: 1, word: "谢谢", pronunciation: "xièxie", ipa: "ɕjɛ⁵¹ ɕjɛ", meaning: "To Thank", type: "base", pos: "verb" },
            { id: "v_zh_top_86", lang: "zh", level: 2, word: "道歉", pronunciation: "dàoqiàn", ipa: "tɑʊ̯⁵¹ tɕʰjɛn⁵¹", meaning: "To Apologize", type: "base", pos: "verb" },
            { id: "v_zh_top_87", lang: "zh", level: 1, word: "开始", pronunciation: "kāishǐ", ipa: "kʰaɪ̯⁵⁵ ʂɻ̩˨˩˦", meaning: "To Start / To Begin", type: "base", pos: "verb" },
            { id: "v_zh_top_88", lang: "zh", level: 2, word: "结束", pronunciation: "jiéshù", ipa: "tɕjɛ˧˥ ʂu⁵¹", meaning: "To Finish / To End", type: "base", pos: "verb" },
            { id: "v_zh_top_89", lang: "zh", level: 2, word: "继续", pronunciation: "jìxù", ipa: "tɕi⁵¹ ɕy⁵¹", meaning: "To Continue", type: "base", pos: "verb" },
            { id: "v_zh_top_90", lang: "zh", level: 2, word: "试", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "To Try", type: "base", pos: "verb" },
            { id: "v_zh_top_91", lang: "zh", level: 2, word: "需要", pronunciation: "xūyào", ipa: "ɕy⁵⁵ jɑʊ̯⁵¹", meaning: "To Need / To Require", type: "base", pos: "verb" },
            { id: "v_zh_top_92", lang: "zh", level: 1, word: "能", pronunciation: "néng", ipa: "nəŋ˧˥", meaning: "Can / To Be Able to", type: "base", pos: "verb" },
            { id: "v_zh_top_93", lang: "zh", level: 1, word: "可以", pronunciation: "kěyǐ", ipa: "kʰɤ˨˩˦ i˨˩˦", meaning: "Can / May / Allowed to", type: "base", pos: "verb" },
            { id: "v_zh_top_94", lang: "zh", level: 2, word: "让", pronunciation: "ràng", ipa: "ʐɑŋ⁵¹", meaning: "To Let / To Allow", type: "base", pos: "verb" },
            { id: "v_zh_top_95", lang: "zh", level: 2, word: "准备", pronunciation: "zhǔnbèi", ipa: "ʈʂwən˨˩˦ peɪ̯⁵¹", meaning: "To Prepare", type: "base", pos: "verb" },
            { id: "v_zh_top_96", lang: "zh", level: 2, word: "赢", pronunciation: "yíng", ipa: "iŋ˧˥", meaning: "To Win", type: "base", pos: "verb" },
            { id: "v_zh_top_97", lang: "zh", level: 2, word: "输", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "To Lose (a game)", type: "base", pos: "verb" },
            { id: "v_zh_top_98", lang: "zh", level: 2, word: "死", pronunciation: "sǐ", ipa: "sz̩˨˩˦", meaning: "To Die", type: "base", pos: "verb" },
            { id: "v_zh_top_99", lang: "zh", level: 2, word: "生活", pronunciation: "shēnghuó", ipa: "ʂəŋ⁵⁵ xwɔ˧˥", meaning: "To Live (life)", type: "base", pos: "verb" },
            { id: "v_zh_top_100", lang: "zh", level: 2, word: "出生", pronunciation: "chūshēng", ipa: "ʈʂʰu⁵⁵ ʂəŋ⁵⁵", meaning: "To Be Born", type: "base", pos: "verb" }
        ]
    },

"verbi_top100_ja": {
        title: "Top 100 Verbs (Japanese)",
        tags: ["verbs", "ja"],
        cards: [
            // 1. PILLAR VERBS
            { id: "v_ja_top_1", lang: "ja", level: 1, word: "だ / です", pronunciation: "da / desu", ipa: "da / desɯ", meaning: "To Be", type: "base", pos: "verb" },
            { id: "v_ja_top_2", lang: "ja", level: 1, word: "ある", pronunciation: "aru", ipa: "aɾɯ", meaning: "To Exist (inanimate)", type: "base", pos: "verb" },
            { id: "v_ja_top_3", lang: "ja", level: 1, word: "いる", pronunciation: "iru", ipa: "iɾɯ", meaning: "To Exist (living)", type: "base", pos: "verb" },
            { id: "v_ja_top_4", lang: "ja", level: 1, word: "する", pronunciation: "suru", ipa: "sɯɾɯ", meaning: "To Do", type: "base", pos: "verb" },
            { id: "v_ja_top_5", lang: "ja", level: 2, word: "なる", pronunciation: "naru", ipa: "naɾɯ", meaning: "To Become", type: "base", pos: "verb" },
            { id: "v_ja_top_6", lang: "ja", level: 2, word: "持つ", pronunciation: "motsu", ipa: "motsɯ", meaning: "To Have / To Hold", type: "base", pos: "verb" },

            // 2. MOVEMENT
            { id: "v_ja_top_7", lang: "ja", level: 1, word: "行く", pronunciation: "iku", ipa: "ikɯ", meaning: "To Go", type: "base", pos: "verb" },
            { id: "v_ja_top_8", lang: "ja", level: 1, word: "来る", pronunciation: "kuru", ipa: "kɯɾɯ", meaning: "To Come", type: "base", pos: "verb" },
            { id: "v_ja_top_9", lang: "ja", level: 1, word: "帰る", pronunciation: "kaeru", ipa: "kaeɾɯ", meaning: "To Return", type: "base", pos: "verb" },
            { id: "v_ja_top_10", lang: "ja", level: 1, word: "歩く", pronunciation: "aruku", ipa: "aɾɯkɯ", meaning: "To Walk", type: "base", pos: "verb" },
            { id: "v_ja_top_11", lang: "ja", level: 1, word: "走る", pronunciation: "hashiru", ipa: "haɕiɾɯ", meaning: "To Run", type: "base", pos: "verb" },
            { id: "v_ja_top_12", lang: "ja", level: 2, word: "泳ぐ", pronunciation: "oyogu", ipa: "ojoɡɯ", meaning: "To Swim", type: "base", pos: "verb" },
            { id: "v_ja_top_13", lang: "ja", level: 1, word: "飛ぶ", pronunciation: "tobu", ipa: "tobɯ", meaning: "To Fly", type: "base", pos: "verb" },
            { id: "v_ja_top_14", lang: "ja", level: 1, word: "入る", pronunciation: "hairu", ipa: "haiɾɯ", meaning: "To Enter", type: "base", pos: "verb" },
            { id: "v_ja_top_15", lang: "ja", level: 1, word: "出る", pronunciation: "deru", ipa: "deɾɯ", meaning: "To Exit", type: "base", pos: "verb" },
            { id: "v_ja_top_16", lang: "ja", level: 2, word: "乗る", pronunciation: "noru", ipa: "noɾɯ", meaning: "To Ride / To Board", type: "base", pos: "verb" },
            { id: "v_ja_top_17", lang: "ja", level: 2, word: "降りる", pronunciation: "oriru", ipa: "oɾiɾɯ", meaning: "To Get off / To Descend", type: "base", pos: "verb" },
            { id: "v_ja_top_18", lang: "ja", level: 2, word: "止まる", pronunciation: "tomaru", ipa: "tomaɾɯ", meaning: "To Stop", type: "base", pos: "verb" },
            { id: "v_ja_top_19", lang: "ja", level: 2, word: "渡る", pronunciation: "wataru", ipa: "wataɾɯ", meaning: "To Cross", type: "base", pos: "verb" },
            { id: "v_ja_top_20", lang: "ja", level: 2, word: "曲がる", pronunciation: "magaru", ipa: "maɡaɾɯ", meaning: "To Turn", type: "base", pos: "verb" },

            // 3. DAILY LIFE
            { id: "v_ja_top_21", lang: "ja", level: 1, word: "食べる", pronunciation: "taberu", ipa: "tabeɾɯ", meaning: "To Eat", type: "base", pos: "verb" },
            { id: "v_ja_top_22", lang: "ja", level: 1, word: "飲む", pronunciation: "nomu", ipa: "nomɯ", meaning: "To Drink", type: "base", pos: "verb" },
            { id: "v_ja_top_23", lang: "ja", level: 1, word: "寝る", pronunciation: "neru", ipa: "neɾɯ", meaning: "To Sleep", type: "base", pos: "verb" },
            { id: "v_ja_top_24", lang: "ja", level: 2, word: "起きる", pronunciation: "okiru", ipa: "okiɾɯ", meaning: "To Wake up / To Get up", type: "base", pos: "verb" },
            { id: "v_ja_top_25", lang: "ja", level: 1, word: "洗う", pronunciation: "arau", ipa: "aɾaɯ", meaning: "To Wash", type: "base", pos: "verb" },
            { id: "v_ja_top_26", lang: "ja", level: 2, word: "浴びる", pronunciation: "abiru", ipa: "abiɾɯ", meaning: "To Take a shower", type: "base", pos: "verb" },
            { id: "v_ja_top_27", lang: "ja", level: 2, word: "磨く", pronunciation: "migaku", ipa: "miɡakɯ", meaning: "To Brush (teeth)", type: "base", pos: "verb" },
            { id: "v_ja_top_28", lang: "ja", level: 1, word: "働く", pronunciation: "hataraku", ipa: "hataɾakɯ", meaning: "To Work", type: "base", pos: "verb" },
            { id: "v_ja_top_29", lang: "ja", level: 1, word: "勉強する", pronunciation: "benkyou suru", ipa: "beŋkjoː sɯɾɯ", meaning: "To Study", type: "base", pos: "verb" },
            { id: "v_ja_top_30", lang: "ja", level: 2, word: "休む", pronunciation: "yasumu", ipa: "jasɯmɯ", meaning: "To Rest", type: "base", pos: "verb" },
            { id: "v_ja_top_31", lang: "ja", level: 1, word: "遊ぶ", pronunciation: "asobu", ipa: "asobɯ", meaning: "To Play", type: "base", pos: "verb" },
            { id: "v_ja_top_32", lang: "ja", level: 2, word: "住む", pronunciation: "sumu", ipa: "sɯmɯ", meaning: "To Live / To Reside", type: "base", pos: "verb" },
            { id: "v_ja_top_33", lang: "ja", level: 2, word: "生きる", pronunciation: "ikiru", ipa: "ikiɾɯ", meaning: "To Live (be alive)", type: "base", pos: "verb" },
            { id: "v_ja_top_34", lang: "ja", level: 2, word: "死ぬ", pronunciation: "shinu", ipa: "ɕinɯ", meaning: "To Die", type: "base", pos: "verb" },

            // 4. ACTIONS WITH OBJECTS
            { id: "v_ja_top_35", lang: "ja", level: 1, word: "買う", pronunciation: "kau", ipa: "kaɯ", meaning: "To Buy", type: "base", pos: "verb" },
            { id: "v_ja_top_36", lang: "ja", level: 1, word: "売る", pronunciation: "uru", ipa: "ɯɾɯ", meaning: "To Sell", type: "base", pos: "verb" },
            { id: "v_ja_top_37", lang: "ja", level: 2, word: "払う", pronunciation: "harau", ipa: "haɾaɯ", meaning: "To Pay", type: "base", pos: "verb" },
            { id: "v_ja_top_38", lang: "ja", level: 1, word: "取る", pronunciation: "toru", ipa: "toɾɯ", meaning: "To Take", type: "base", pos: "verb" },
            { id: "v_ja_top_39", lang: "ja", level: 1, word: "置く", pronunciation: "oku", ipa: "okɯ", meaning: "To Put / To Place", type: "base", pos: "verb" },
            { id: "v_ja_top_40", lang: "ja", level: 1, word: "使う", pronunciation: "tsukau", ipa: "tsɯkaɯ", meaning: "To Use", type: "base", pos: "verb" },
            { id: "v_ja_top_41", lang: "ja", level: 1, word: "作る", pronunciation: "tsukuru", ipa: "tsɯkɯɾɯ", meaning: "To Make / To Cook", type: "base", pos: "verb" },
            { id: "v_ja_top_42", lang: "ja", level: 1, word: "開ける", pronunciation: "akeru", ipa: "akeɾɯ", meaning: "To Open", type: "base", pos: "verb" },
            { id: "v_ja_top_43", lang: "ja", level: 1, word: "閉める", pronunciation: "shimeru", ipa: "ɕimeɾɯ", meaning: "To Close", type: "base", pos: "verb" },
            { id: "v_ja_top_44", lang: "ja", level: 2, word: "つける", pronunciation: "tsukeru", ipa: "tsɯkeɾɯ", meaning: "To Turn on", type: "base", pos: "verb" },
            { id: "v_ja_top_45", lang: "ja", level: 2, word: "消す", pronunciation: "kesu", ipa: "kesɯ", meaning: "To Turn off / To Erase", type: "base", pos: "verb" },
            { id: "v_ja_top_46", lang: "ja", level: 2, word: "着る", pronunciation: "kiru", ipa: "kiɾɯ", meaning: "To Wear (upper body)", type: "base", pos: "verb" },
            { id: "v_ja_top_47", lang: "ja", level: 2, word: "履く", pronunciation: "haku", ipa: "hakɯ", meaning: "To Wear (lower body)", type: "base", pos: "verb" },
            { id: "v_ja_top_48", lang: "ja", level: 2, word: "脱ぐ", pronunciation: "nugu", ipa: "nɯɡɯ", meaning: "To Take off (clothes)", type: "base", pos: "verb" },
            { id: "v_ja_top_49", lang: "ja", level: 2, word: "切る", pronunciation: "kiru", ipa: "kiɾɯ", meaning: "To Cut", type: "base", pos: "verb" },
            { id: "v_ja_top_50", lang: "ja", level: 2, word: "撮る", pronunciation: "toru", ipa: "toɾɯ", meaning: "To Take (photo)", type: "base", pos: "verb" },

            // 5. COMMUNICATION AND THOUGHT
            { id: "v_ja_top_51", lang: "ja", level: 1, word: "話す", pronunciation: "hanasu", ipa: "hanasɯ", meaning: "To Speak / To Talk", type: "base", pos: "verb" },
            { id: "v_ja_top_52", lang: "ja", level: 1, word: "言う", pronunciation: "iu", ipa: "iɯ", meaning: "To Say", type: "base", pos: "verb" },
            { id: "v_ja_top_53", lang: "ja", level: 1, word: "聞く", pronunciation: "kiku", ipa: "kikɯ", meaning: "To Listen / To Ask", type: "base", pos: "verb" },
            { id: "v_ja_top_54", lang: "ja", level: 1, word: "読む", pronunciation: "yomu", ipa: "jomɯ", meaning: "To Read", type: "base", pos: "verb" },
            { id: "v_ja_top_55", lang: "ja", level: 1, word: "書く", pronunciation: "kaku", ipa: "kakɯ", meaning: "To Write", type: "base", pos: "verb" },
            { id: "v_ja_top_56", lang: "ja", level: 1, word: "思う", pronunciation: "omou", ipa: "omoɯ", meaning: "To Think", type: "base", pos: "verb" },
            { id: "v_ja_top_57", lang: "ja", level: 2, word: "考える", pronunciation: "kangaeru", ipa: "kaŋɡaeɾɯ", meaning: "To Consider", type: "base", pos: "verb" },
            { id: "v_ja_top_58", lang: "ja", level: 1, word: "知る", pronunciation: "shiru", ipa: "ɕiɾɯ", meaning: "To Know", type: "base", pos: "verb" },
            { id: "v_ja_top_59", lang: "ja", level: 1, word: "分かる", pronunciation: "wakaru", ipa: "wakaɾɯ", meaning: "To Understand", type: "base", pos: "verb" },
            { id: "v_ja_top_60", lang: "ja", level: 2, word: "覚える", pronunciation: "oboeru", ipa: "oboeɾɯ", meaning: "To Remember / To Memorize", type: "base", pos: "verb" },
            { id: "v_ja_top_61", lang: "ja", level: 2, word: "忘れる", pronunciation: "wasureru", ipa: "wasɯɾeɾɯ", meaning: "To Forget", type: "base", pos: "verb" },
            { id: "v_ja_top_62", lang: "ja", level: 2, word: "教える", pronunciation: "oshieru", ipa: "oɕieɾɯ", meaning: "To Teach", type: "base", pos: "verb" },
            { id: "v_ja_top_63", lang: "ja", level: 2, word: "習う", pronunciation: "narau", ipa: "naɾaɯ", meaning: "To Learn", type: "base", pos: "verb" },
            { id: "v_ja_top_64", lang: "ja", level: 2, word: "呼ぶ", pronunciation: "yobu", ipa: "jobɯ", meaning: "To Call", type: "base", pos: "verb" },

            // 6. SENSES AND FEELINGS
            { id: "v_ja_top_65", lang: "ja", level: 1, word: "見る", pronunciation: "miru", ipa: "miɾɯ", meaning: "To See / To Watch", type: "base", pos: "verb" },
            { id: "v_ja_top_66", lang: "ja", level: 2, word: "見せる", pronunciation: "miseru", ipa: "miseɾɯ", meaning: "To Show", type: "base", pos: "verb" },
            { id: "v_ja_top_67", lang: "ja", level: 2, word: "感じる", pronunciation: "kanjiru", ipa: "kaɲdʑiɾɯ", meaning: "To Feel", type: "base", pos: "verb" },
            { id: "v_ja_top_68", lang: "ja", level: 2, word: "笑う", pronunciation: "warau", ipa: "waɾaɯ", meaning: "To Laugh", type: "base", pos: "verb" },
            { id: "v_ja_top_69", lang: "ja", level: 2, word: "泣く", pronunciation: "naku", ipa: "nakɯ", meaning: "To Cry", type: "base", pos: "verb" },
            { id: "v_ja_top_70", lang: "ja", level: 2, word: "怒る", pronunciation: "okoru", ipa: "okoɾɯ", meaning: "To Get Angry", type: "base", pos: "verb" },
            { id: "v_ja_top_71", lang: "ja", level: 2, word: "好む", pronunciation: "konomu", ipa: "konomɯ", meaning: "To Prefer", type: "base", pos: "verb" },
            { id: "v_ja_top_72", lang: "ja", level: 2, word: "楽しむ", pronunciation: "tanoshimu", ipa: "tanoɕimɯ", meaning: "To Enjoy", type: "base", pos: "verb" },
            { id: "v_ja_top_73", lang: "ja", level: 2, word: "驚く", pronunciation: "odoroku", ipa: "odoɾokɯ", meaning: "To Be Surprised", type: "base", pos: "verb" },
            { id: "v_ja_top_74", lang: "ja", level: 2, word: "困る", pronunciation: "komaru", ipa: "komaɾɯ", meaning: "To Be Troubled", type: "base", pos: "verb" },
            { id: "v_ja_top_75", lang: "ja", level: 2, word: "疲れる", pronunciation: "tsukareru", ipa: "tsɯkaɾeɾɯ", meaning: "To Get Tired", type: "base", pos: "verb" },

            // 7. SOCIAL INTERACTION
            { id: "v_ja_top_76", lang: "ja", level: 1, word: "会う", pronunciation: "au", ipa: "aɯ", meaning: "To Meet", type: "base", pos: "verb" },
            { id: "v_ja_top_77", lang: "ja", level: 1, word: "待つ", pronunciation: "matsu", ipa: "matsɯ", meaning: "To Wait", type: "base", pos: "verb" },
            { id: "v_ja_top_78", lang: "ja", level: 1, word: "あげる", pronunciation: "ageru", ipa: "aɡeɾɯ", meaning: "To Give", type: "base", pos: "verb" },
            { id: "v_ja_top_79", lang: "ja", level: 1, word: "もらう", pronunciation: "morau", ipa: "moɾaɯ", meaning: "To Receive", type: "base", pos: "verb" },
            { id: "v_ja_top_80", lang: "ja", level: 2, word: "貸す", pronunciation: "kasu", ipa: "kasɯ", meaning: "To Lend", type: "base", pos: "verb" },
            { id: "v_ja_top_81", lang: "ja", level: 2, word: "借りる", pronunciation: "kariru", ipa: "kaɾiɾɯ", meaning: "To Borrow", type: "base", pos: "verb" },
            { id: "v_ja_top_82", lang: "ja", level: 2, word: "返す", pronunciation: "kaesu", ipa: "kaesɯ", meaning: "To Return (something)", type: "base", pos: "verb" },
            { id: "v_ja_top_83", lang: "ja", level: 1, word: "手伝う", pronunciation: "tetsudau", ipa: "tetsɯdaɯ", meaning: "To Help", type: "base", pos: "verb" },
            { id: "v_ja_top_84", lang: "ja", level: 1, word: "頑張る", pronunciation: "ganbaru", ipa: "ɡambaɾɯ", meaning: "To Do one's best", type: "base", pos: "verb" },

            // 8. OTHER USEFUL VERBS
            { id: "v_ja_top_85", lang: "ja", level: 2, word: "始める", pronunciation: "hajimeru", ipa: "hadʑimeɾɯ", meaning: "To Start (something)", type: "base", pos: "verb" },
            { id: "v_ja_top_86", lang: "ja", level: 2, word: "始まる", pronunciation: "hajimaru", ipa: "hadʑimaɾɯ", meaning: "To Begin (itself)", type: "base", pos: "verb" },
            { id: "v_ja_top_87", lang: "ja", level: 2, word: "終わる", pronunciation: "owaru", ipa: "owaɾɯ", meaning: "To Finish", type: "base", pos: "verb" },
            { id: "v_ja_top_88", lang: "ja", level: 2, word: "続ける", pronunciation: "tsuzukeru", ipa: "tsɯzɯkeɾɯ", meaning: "To Continue", type: "base", pos: "verb" },
            { id: "v_ja_top_89", lang: "ja", level: 2, word: "探す", pronunciation: "sagasu", ipa: "saɡasɯ", meaning: "To Search", type: "base", pos: "verb" },
            { id: "v_ja_top_90", lang: "ja", level: 2, word: "見つける", pronunciation: "mitsukeru", ipa: "mitsɯkeɾɯ", meaning: "To Find", type: "base", pos: "verb" },
            { id: "v_ja_top_91", lang: "ja", level: 2, word: "無くす", pronunciation: "nakusu", ipa: "nakɯsɯ", meaning: "To Lose (something)", type: "base", pos: "verb" },
            { id: "v_ja_top_92", lang: "ja", level: 2, word: "勝つ", pronunciation: "katsu", ipa: "katsɯ", meaning: "To Win", type: "base", pos: "verb" },
            { id: "v_ja_top_93", lang: "ja", level: 2, word: "負ける", pronunciation: "makeru", ipa: "makeɾɯ", meaning: "To Lose (a match)", type: "base", pos: "verb" },
            { id: "v_ja_top_94", lang: "ja", level: 2, word: "選ぶ", pronunciation: "erabu", ipa: "eɾabɯ", meaning: "To Choose", type: "base", pos: "verb" },
            { id: "v_ja_top_95", lang: "ja", level: 2, word: "違う", pronunciation: "chigau", ipa: "tɕiɡaɯ", meaning: "To Be Different / Wrong", type: "base", pos: "verb" },
            { id: "v_ja_top_96", lang: "ja", level: 1, word: "座る", pronunciation: "suwaru", ipa: "sɯwaɾɯ", meaning: "To Sit", type: "base", pos: "verb" },
            { id: "v_ja_top_97", lang: "ja", level: 1, word: "立つ", pronunciation: "tatsu", ipa: "tatsɯ", meaning: "To Stand up", type: "base", pos: "verb" },
            { id: "v_ja_top_98", lang: "ja", level: 2, word: "要る", pronunciation: "iru", ipa: "iɾɯ", meaning: "To Need", type: "base", pos: "verb" },
            { id: "v_ja_top_99", lang: "ja", level: 2, word: "押す", pronunciation: "osu", ipa: "osɯ", meaning: "To Push", type: "base", pos: "verb" },
            { id: "v_ja_top_100", lang: "ja", level: 2, word: "引く", pronunciation: "hiku", ipa: "hikɯ", meaning: "To Pull", type: "base", pos: "verb" }
        ]
    },

"verbi_top100_ar": {
        title: "Top 100 Verbs (Arabic)",
        tags: ["verbs", "ar"],
        cards: [
            // 1. PILLAR VERBS
            { id: "v_ar_top_1", lang: "ar", level: 1, word: "كَانَ", pronunciation: "Kāna", ipa: "ˈkaːna", meaning: "To Be (past: was)", type: "base", pos: "verb" },
            { id: "v_ar_top_2", lang: "ar", level: 1, word: "فَعَلَ", pronunciation: "Fa'ala", ipa: "ˈfaʕala", meaning: "To Do", type: "base", pos: "verb" },
            { id: "v_ar_top_3", lang: "ar", level: 1, word: "عَمِلَ", pronunciation: "'Amila", ipa: "ˈʕamila", meaning: "To Work / To Do", type: "base", pos: "verb" },
            { id: "v_ar_top_4", lang: "ar", level: 1, word: "مَلَكَ", pronunciation: "Malaka", ipa: "ˈmalaka", meaning: "To Possess / To Own", type: "base", pos: "verb" },
            { id: "v_ar_top_5", lang: "ar", level: 1, word: "اِسْتَطَاعَ", pronunciation: "Istaṭā'a", ipa: "istaˈtˤɑːʕa", meaning: "To Be Able to / Can", type: "base", pos: "verb" },
            { id: "v_ar_top_6", lang: "ar", level: 2, word: "أَصْبَحَ", pronunciation: "Aṣbaḥa", ipa: "ˈasˤbaħa", meaning: "To Become", type: "base", pos: "verb" },
            { id: "v_ar_top_7", lang: "ar", level: 2, word: "بَدَأَ", pronunciation: "Bada'a", ipa: "ˈbadaʔa", meaning: "To Start / To Begin", type: "base", pos: "verb" },
            { id: "v_ar_top_8", lang: "ar", level: 2, word: "اِنْتَهَى", pronunciation: "Intahā", ipa: "inˈtahaː", meaning: "To Finish / To End", type: "base", pos: "verb" },
            { id: "v_ar_top_9", lang: "ar", level: 2, word: "حَدَثَ", pronunciation: "Ḥadatha", ipa: "ˈħadaθa", meaning: "To Happen", type: "base", pos: "verb" },
            { id: "v_ar_top_10", lang: "ar", level: 2, word: "غَيَّرَ", pronunciation: "Ghayyara", ipa: "ˈɣajjara", meaning: "To Change", type: "base", pos: "verb" },

            // 2. MOVEMENT
            { id: "v_ar_top_11", lang: "ar", level: 1, word: "ذَهَبَ", pronunciation: "Dhahaba", ipa: "ˈðahaba", meaning: "To Go", type: "base", pos: "verb" },
            { id: "v_ar_top_12", lang: "ar", level: 1, word: "جَاءَ", pronunciation: "Jā'a", ipa: "ˈdʒaːʔa", meaning: "To Come", type: "base", pos: "verb" },
            { id: "v_ar_top_13", lang: "ar", level: 1, word: "خَرَجَ", pronunciation: "Kharaja", ipa: "ˈxaradʒa", meaning: "To Exit / To Go Out", type: "base", pos: "verb" },
            { id: "v_ar_top_14", lang: "ar", level: 1, word: "دَخَلَ", pronunciation: "Dakhala", ipa: "ˈdaxala", meaning: "To Enter", type: "base", pos: "verb" },
            { id: "v_ar_top_15", lang: "ar", level: 2, word: "وَصَلَ", pronunciation: "Waṣala", ipa: "ˈwasˤala", meaning: "To Arrive", type: "base", pos: "verb" },
            { id: "v_ar_top_16", lang: "ar", level: 1, word: "رَجَعَ", pronunciation: "Raja'a", ipa: "ˈradʒaʕa", meaning: "To Return", type: "base", pos: "verb" },
            { id: "v_ar_top_17", lang: "ar", level: 1, word: "مَشَى", pronunciation: "Mashā", ipa: "ˈmaʃaː", meaning: "To Walk", type: "base", pos: "verb" },
            { id: "v_ar_top_18", lang: "ar", level: 1, word: "رَكَضَ", pronunciation: "Rakaḍa", ipa: "ˈrakadˤa", meaning: "To Run", type: "base", pos: "verb" },
            { id: "v_ar_top_19", lang: "ar", level: 1, word: "جَلَسَ", pronunciation: "Jalasa", ipa: "ˈdʒalasa", meaning: "To Sit", type: "base", pos: "verb" },
            { id: "v_ar_top_20", lang: "ar", level: 1, word: "قَامَ", pronunciation: "Qāma", ipa: "ˈqaːma", meaning: "To Stand up / To Rise", type: "base", pos: "verb" },
            { id: "v_ar_top_21", lang: "ar", level: 2, word: "سَقَطَ", pronunciation: "Saqaṭa", ipa: "ˈsaqatˤa", meaning: "To Fall", type: "base", pos: "verb" },
            { id: "v_ar_top_22", lang: "ar", level: 2, word: "سَافَرَ", pronunciation: "Sāfara", ipa: "ˈsaːfara", meaning: "To Travel", type: "base", pos: "verb" },
            { id: "v_ar_top_23", lang: "ar", level: 2, word: "طَارَ", pronunciation: "Ṭāra", ipa: "ˈtˤɑːra", meaning: "To Fly", type: "base", pos: "verb" },
            { id: "v_ar_top_24", lang: "ar", level: 2, word: "صَعِدَ", pronunciation: "Ṣa'ida", ipa: "ˈsˤaʕida", meaning: "To Climb / To Ascend", type: "base", pos: "verb" },
            { id: "v_ar_top_25", lang: "ar", level: 2, word: "نَزَلَ", pronunciation: "Nazala", ipa: "ˈnazala", meaning: "To Descend / To Go down", type: "base", pos: "verb" },

            // 3. SENSES AND PERCEPTION
            { id: "v_ar_top_26", lang: "ar", level: 1, word: "رَأَى", pronunciation: "Ra'ā", ipa: "ˈraʔaː", meaning: "To See", type: "base", pos: "verb" },
            { id: "v_ar_top_27", lang: "ar", level: 1, word: "نَظَرَ", pronunciation: "Naẓara", ipa: "ˈnazˤara", meaning: "To Look", type: "base", pos: "verb" },
            { id: "v_ar_top_28", lang: "ar", level: 1, word: "سَمِعَ", pronunciation: "Sami'a", ipa: "ˈsamiʕa", meaning: "To Hear", type: "base", pos: "verb" },
            { id: "v_ar_top_29", lang: "ar", level: 2, word: "شَعَرَ", pronunciation: "Sha'ara", ipa: "ˈʃaʕara", meaning: "To Feel", type: "base", pos: "verb" },
            { id: "v_ar_top_30", lang: "ar", level: 2, word: "لَمَسَ", pronunciation: "Lamasa", ipa: "ˈlamasa", meaning: "To Touch", type: "base", pos: "verb" },
            { id: "v_ar_top_31", lang: "ar", level: 2, word: "ذَاقَ", pronunciation: "Dhāqa", ipa: "ˈðaːqa", meaning: "To Taste", type: "base", pos: "verb" },
            { id: "v_ar_top_32", lang: "ar", level: 2, word: "بَدَا", pronunciation: "Badā", ipa: "ˈbadaː", meaning: "To Seem / To Appear", type: "base", pos: "verb" },

            // 4. MIND AND FEELINGS
            { id: "v_ar_top_33", lang: "ar", level: 1, word: "عَرَفَ", pronunciation: "'Arafa", ipa: "ˈʕarafa", meaning: "To Know", type: "base", pos: "verb" },
            { id: "v_ar_top_34", lang: "ar", level: 1, word: "فَهِمَ", pronunciation: "Fahima", ipa: "ˈfahima", meaning: "To Understand", type: "base", pos: "verb" },
            { id: "v_ar_top_35", lang: "ar", level: 1, word: "فَكَّرَ", pronunciation: "Fakkara", ipa: "ˈfakkara", meaning: "To Think", type: "base", pos: "verb" },
            { id: "v_ar_top_36", lang: "ar", level: 2, word: "اِعْتَقَدَ", pronunciation: "I'taqada", ipa: "iʕˈtaqada", meaning: "To Believe", type: "base", pos: "verb" },
            { id: "v_ar_top_37", lang: "ar", level: 1, word: "أَرَادَ", pronunciation: "Arāda", ipa: "ʔaˈraːda", meaning: "To Want", type: "base", pos: "verb" },
            { id: "v_ar_top_38", lang: "ar", level: 1, word: "أَحَبَّ", pronunciation: "Aḥabba", ipa: "ʔaˈħabba", meaning: "To Love / To Like", type: "base", pos: "verb" },
            { id: "v_ar_top_39", lang: "ar", level: 2, word: "كَرِهَ", pronunciation: "Kariha", ipa: "ˈkariha", meaning: "To Hate", type: "base", pos: "verb" },
            { id: "v_ar_top_40", lang: "ar", level: 2, word: "تَذَكَّرَ", pronunciation: "Tadhakkara", ipa: "taˈðakkara", meaning: "To Remember", type: "base", pos: "verb" },
            { id: "v_ar_top_41", lang: "ar", level: 2, word: "نَسِيَ", pronunciation: "Nasiya", ipa: "ˈnasija", meaning: "To Forget", type: "base", pos: "verb" },
            { id: "v_ar_top_42", lang: "ar", level: 2, word: "أَمَلَ", pronunciation: "Amala", ipa: "ˈʔamala", meaning: "To Hope", type: "base", pos: "verb" },
            { id: "v_ar_top_43", lang: "ar", level: 2, word: "خَافَ", pronunciation: "Khāfa", ipa: "ˈxaːfa", meaning: "To Fear", type: "base", pos: "verb" },
            { id: "v_ar_top_44", lang: "ar", level: 2, word: "قَرَّرَ", pronunciation: "Qarrara", ipa: "ˈqarrara", meaning: "To Decide", type: "base", pos: "verb" },
            { id: "v_ar_top_45", lang: "ar", level: 1, word: "تَعَلَّمَ", pronunciation: "Ta'allama", ipa: "taˈʕallama", meaning: "To Learn", type: "base", pos: "verb" },
            { id: "v_ar_top_46", lang: "ar", level: 2, word: "عَلَّمَ", pronunciation: "'Allama", ipa: "ˈʕallama", meaning: "To Teach", type: "base", pos: "verb" },

            // 5. COMMUNICATION
            { id: "v_ar_top_47", lang: "ar", level: 1, word: "قَالَ", pronunciation: "Qāla", ipa: "ˈqaːla", meaning: "To Say", type: "base", pos: "verb" },
            { id: "v_ar_top_48", lang: "ar", level: 1, word: "تَكَلَّمَ", pronunciation: "Takallama", ipa: "taˈkallama", meaning: "To Speak", type: "base", pos: "verb" },
            { id: "v_ar_top_49", lang: "ar", level: 1, word: "سَأَلَ", pronunciation: "Sa'ala", ipa: "ˈsaʔala", meaning: "To Ask", type: "base", pos: "verb" },
            { id: "v_ar_top_50", lang: "ar", level: 2, word: "أَجَابَ", pronunciation: "Ajāba", ipa: "ʔaˈdʒaːba", meaning: "To Answer", type: "base", pos: "verb" },
            { id: "v_ar_top_51", lang: "ar", level: 1, word: "كَتَبَ", pronunciation: "Kataba", ipa: "ˈkataba", meaning: "To Write", type: "base", pos: "verb" },
            { id: "v_ar_top_52", lang: "ar", level: 1, word: "قَرَأَ", pronunciation: "Qara'a", ipa: "ˈqaraʔa", meaning: "To Read", type: "base", pos: "verb" },
            { id: "v_ar_top_53", lang: "ar", level: 2, word: "اِتَّصَلَ", pronunciation: "Ittaṣala", ipa: "itˈtasˤala", meaning: "To Call / To Contact", type: "base", pos: "verb" },
            { id: "v_ar_top_54", lang: "ar", level: 2, word: "صَرَخَ", pronunciation: "Ṣarakha", ipa: "ˈsˤaraxa", meaning: "To Shout / To Scream", type: "base", pos: "verb" },
            { id: "v_ar_top_55", lang: "ar", level: 2, word: "شَرَحَ", pronunciation: "Sharaḥa", ipa: "ˈʃaraħa", meaning: "To Explain", type: "base", pos: "verb" },
            { id: "v_ar_top_56", lang: "ar", level: 2, word: "تَرْجَمَ", pronunciation: "Tarjama", ipa: "ˈtardʒama", meaning: "To Translate", type: "base", pos: "verb" },

            // 6. DAILY LIFE
            { id: "v_ar_top_57", lang: "ar", level: 1, word: "أَكَلَ", pronunciation: "Akala", ipa: "ˈʔakala", meaning: "To Eat", type: "base", pos: "verb" },
            { id: "v_ar_top_58", lang: "ar", level: 1, word: "شَرِبَ", pronunciation: "Shariba", ipa: "ˈʃariba", meaning: "To Drink", type: "base", pos: "verb" },
            { id: "v_ar_top_59", lang: "ar", level: 1, word: "نَامَ", pronunciation: "Nāma", ipa: "ˈnaːma", meaning: "To Sleep", type: "base", pos: "verb" },
            { id: "v_ar_top_60", lang: "ar", level: 2, word: "اِسْتَيْقَظَ", pronunciation: "Istayqaẓa", ipa: "isˈtajqazˤa", meaning: "To Wake up", type: "base", pos: "verb" },
            { id: "v_ar_top_61", lang: "ar", level: 1, word: "اِشْتَرَى", pronunciation: "Ishtarā", ipa: "iʃˈtaraː", meaning: "To Buy", type: "base", pos: "verb" },
            { id: "v_ar_top_62", lang: "ar", level: 1, word: "بَاعَ", pronunciation: "Bā'a", ipa: "ˈbaːʕa", meaning: "To Sell", type: "base", pos: "verb" },
            { id: "v_ar_top_63", lang: "ar", level: 2, word: "دَفَعَ", pronunciation: "Dafa'a", ipa: "ˈdafaʕa", meaning: "To Pay", type: "base", pos: "verb" },
            { id: "v_ar_top_64", lang: "ar", level: 1, word: "أَخَذَ", pronunciation: "Akhadha", ipa: "ˈʔaxaða", meaning: "To Take", type: "base", pos: "verb" },
            { id: "v_ar_top_65", lang: "ar", level: 1, word: "أَعْطَى", pronunciation: "A'ṭā", ipa: "ˈʔaʕtˤaː", meaning: "To Give", type: "base", pos: "verb" },
            { id: "v_ar_top_66", lang: "ar", level: 2, word: "لَبِسَ", pronunciation: "Labisa", ipa: "ˈlabisa", meaning: "To Wear", type: "base", pos: "verb" },
            { id: "v_ar_top_67", lang: "ar", level: 2, word: "خَلَعَ", pronunciation: "Khala'a", ipa: "ˈxalaʕa", meaning: "To Take off (clothes)", type: "base", pos: "verb" },
            { id: "v_ar_top_68", lang: "ar", level: 1, word: "غَسَلَ", pronunciation: "Ghasala", ipa: "ˈɣasala", meaning: "To Wash", type: "base", pos: "verb" },
            { id: "v_ar_top_69", lang: "ar", level: 2, word: "طَبَخَ", pronunciation: "Ṭabakha", ipa: "ˈtˤabaxa", meaning: "To Cook", type: "base", pos: "verb" },
            { id: "v_ar_top_70", lang: "ar", level: 1, word: "سَكَنَ", pronunciation: "Sakana", ipa: "ˈsakana", meaning: "To Live / To Reside", type: "base", pos: "verb" },
            { id: "v_ar_top_71", lang: "ar", level: 2, word: "عَاشَ", pronunciation: "'Āsha", ipa: "ˈʕaːʃa", meaning: "To Live (be alive)", type: "base", pos: "verb" },
            { id: "v_ar_top_72", lang: "ar", level: 2, word: "مَاتَ", pronunciation: "Māta", ipa: "ˈmaːta", meaning: "To Die", type: "base", pos: "verb" },

            // 7. AZIONI CON OGGETTI
            { id: "v_ar_top_73", lang: "ar", level: 1, word: "وَضَعَ", pronunciation: "Waḍa'a", ipa: "ˈwadˤaʕa", meaning: "To Put", type: "base", pos: "verb" },
            { id: "v_ar_top_74", lang: "ar", level: 1, word: "حَمَلَ", pronunciation: "Ḥamala", ipa: "ˈħamala", meaning: "To Carry", type: "base", pos: "verb" },
            { id: "v_ar_top_75", lang: "ar", level: 1, word: "فَتَحَ", pronunciation: "Fataḥa", ipa: "ˈfataħa", meaning: "To Open", type: "base", pos: "verb" },
            { id: "v_ar_top_76", lang: "ar", level: 1, word: "أَغْلَقَ", pronunciation: "Aghlaqa", ipa: "ˈʔaɣlaqa", meaning: "To Close", type: "base", pos: "verb" },
            { id: "v_ar_top_77", lang: "ar", level: 2, word: "كَسَرَ", pronunciation: "Kasara", ipa: "ˈkasara", meaning: "To Break", type: "base", pos: "verb" },
            { id: "v_ar_top_78", lang: "ar", level: 2, word: "أَصْلَحَ", pronunciation: "Aṣlaḥa", ipa: "ˈʔasˤlaħa", meaning: "To Repair", type: "base", pos: "verb" },
            { id: "v_ar_top_79", lang: "ar", level: 1, word: "اِسْتَخْدَمَ", pronunciation: "Istakhdama", ipa: "isˈtaxdama", meaning: "To Use", type: "base", pos: "verb" },
            { id: "v_ar_top_80", lang: "ar", level: 2, word: "بَحَثَ", pronunciation: "Baḥatha", ipa: "ˈbaħaθa", meaning: "To Search / To Look for", type: "base", pos: "verb" },
            { id: "v_ar_top_81", lang: "ar", level: 2, word: "وَجَدَ", pronunciation: "Wajada", ipa: "ˈwadʒada", meaning: "To Find", type: "base", pos: "verb" },
            { id: "v_ar_top_82", lang: "ar", level: 2, word: "فَقَدَ", pronunciation: "Faqada", ipa: "ˈfaqada", meaning: "To Lose", type: "base", pos: "verb" },
            { id: "v_ar_top_83", lang: "ar", level: 2, word: "قَطَعَ", pronunciation: "Qaṭa'a", ipa: "ˈqatˤaʕa", meaning: "To Cut", type: "base", pos: "verb" },
            { id: "v_ar_top_84", lang: "ar", level: 2, word: "سَحَبَ", pronunciation: "Saḥaba", ipa: "ˈsaħaba", meaning: "To Pull", type: "base", pos: "verb" },
            { id: "v_ar_top_85", lang: "ar", level: 2, word: "دَفَعَ", pronunciation: "Dafa'a", ipa: "ˈdafaʕa", meaning: "To Push", type: "base", pos: "verb" },

            // 8. SOCIALE E ALTRO
            { id: "v_ar_top_86", lang: "ar", level: 2, word: "قَابَلَ", pronunciation: "Qābala", ipa: "ˈqaːbala", meaning: "To Meet", type: "base", pos: "verb" },
            { id: "v_ar_top_87", lang: "ar", level: 1, word: "اِنْتَظَرَ", pronunciation: "Intaẓara", ipa: "inˈtazˤara", meaning: "To Wait", type: "base", pos: "verb" },
            { id: "v_ar_top_88", lang: "ar", level: 1, word: "سَاعَدَ", pronunciation: "Sā'ada", ipa: "ˈsaːʕada", meaning: "To Help", type: "base", pos: "verb" },
            { id: "v_ar_top_89", lang: "ar", level: 1, word: "شَكَرَ", pronunciation: "Shakara", ipa: "ˈʃakara", meaning: "To Thank", type: "base", pos: "verb" },
            { id: "v_ar_top_90", lang: "ar", level: 2, word: "اِعْتَذَرَ", pronunciation: "I'tadhara", ipa: "iʕˈtaðara", meaning: "To Apologize", type: "base", pos: "verb" },
            { id: "v_ar_top_91", lang: "ar", level: 2, word: "سَمَحَ", pronunciation: "Samaḥa", ipa: "ˈsamaħa", meaning: "To Allow / To Permit", type: "base", pos: "verb" },
            { id: "v_ar_top_92", lang: "ar", level: 2, word: "مَنَعَ", pronunciation: "Mana'a", ipa: "ˈmanaʕa", meaning: "To Forbid", type: "base", pos: "verb" },
            { id: "v_ar_top_93", lang: "ar", level: 2, word: "وَعَدَ", pronunciation: "Wa'ada", ipa: "ˈwaʕada", meaning: "To Promise", type: "base", pos: "verb" },
            { id: "v_ar_top_94", lang: "ar", level: 2, word: "كَذَبَ", pronunciation: "Kadhaba", ipa: "ˈkaðaba", meaning: "To Lie", type: "base", pos: "verb" },
            { id: "v_ar_top_95", lang: "ar", level: 2, word: "ضَحِكَ", pronunciation: "Ḍaḥika", ipa: "ˈdˤaħika", meaning: "To Laugh", type: "base", pos: "verb" },
            { id: "v_ar_top_96", lang: "ar", level: 2, word: "بَكَى", pronunciation: "Bakā", ipa: "ˈbakaː", meaning: "To Cry", type: "base", pos: "verb" },
            { id: "v_ar_top_97", lang: "ar", level: 1, word: "لَعِبَ", pronunciation: "La'iba", ipa: "ˈlaʕiba", meaning: "To Play", type: "base", pos: "verb" },
            { id: "v_ar_top_98", lang: "ar", level: 2, word: "فَازَ", pronunciation: "Fāza", ipa: "ˈfaːza", meaning: "To Win", type: "base", pos: "verb" },
            { id: "v_ar_top_99", lang: "ar", level: 2, word: "خَسِرَ", pronunciation: "Khasira", ipa: "ˈxasira", meaning: "To Lose (a game)", type: "base", pos: "verb" },
            { id: "v_ar_top_100", lang: "ar", level: 2, word: "وُلِدَ", pronunciation: "Wulida", ipa: "ˈwulida", meaning: "To Be Born", type: "base", pos: "verb" }
        ]
    }
};


const sentenceBank = [
    // ==========================================
    // CHINESE SENTENCES (LEVELS 1-5)
    // ==========================================
    
    // --- LEVEL 1: Simple Descriptions (Subject + 很 + Adjective) ---
    // Note: In Chinese "to be" is not used with adjectives. "hěn" (very) is used.
    { id: "s_zh_1", lang: "zh", text: "山很大", pronunciation: "Shān hěn dà", translation: "The mountain is big", requires: ["zh7", "g_zh_part_4", "base_grande"] },
    { id: "s_zh_2", lang: "zh", text: "花很红", pronunciation: "Huā hěn hóng", translation: "The flower is red", requires: ["zh19", "g_zh_part_4", "col_zh3"] },
    { id: "s_zh_3", lang: "zh", text: "月亮很白", pronunciation: "Yuèliang hěn bái", translation: "The moon is white", requires: ["n_zh_ext_24", "g_zh_part_4", "col_zh1"] },
    { id: "s_zh_4", lang: "zh", text: "我很小", pronunciation: "Wǒ hěn xiǎo", translation: "I am small", requires: ["g_zh_pron_1", "g_zh_part_4", "base_piccolo"] },
    { id: "s_zh_5", lang: "zh", text: "天很蓝", pronunciation: "Tiān hěn lán", translation: "The sky is blue", requires: ["zh12", "g_zh_part_4", "col_zh4"] },
    { id: "s_zh_6", lang: "zh", text: "这很贵", pronunciation: "Zhè hěn guì", translation: "This is expensive", requires: ["g_zh_dem_1", "g_zh_part_4"] }, // "guì" is not in the deck, but the structure is correct. If adj missing, use "Zhè hěn hǎo" (This is very good).

    // --- LEVEL 2: Basic Actions (Subject + Verb + Object) ---
    { id: "s_zh_7", lang: "zh", text: "我吃水果", pronunciation: "Wǒ chī shuǐguǒ", translation: "I eat fruit", requires: ["g_zh_pron_1", "v_zh_top_51", "n_zh_ext_21"] },
    { id: "s_zh_8", lang: "zh", text: "他喝水", pronunciation: "Tā hē shuǐ", translation: "He drinks water", requires: ["g_zh_pron_3", "v_zh_top_52", "rad_acqua"] },
    { id: "s_zh_9", lang: "zh", text: "你看书", pronunciation: "Nǐ kàn shū", translation: "You read a book", requires: ["g_zh_pron_2", "v_zh_top_23", "soc_zh4"] },
    { id: "s_zh_10", lang: "zh", text: "我们去学校", pronunciation: "Wǒmen qù xuéxiào", translation: "We go to school", requires: ["g_zh_pron_5", "v_zh_top_9", "soc_zh2"] },
    { id: "s_zh_11", lang: "zh", text: "鸟飞", pronunciation: "Niǎo fēi", translation: "The bird flies", requires: ["n_zh_ext_33", "v_zh_top_14"] },
    { id: "s_zh_12", lang: "zh", text: "她爱大自然", pronunciation: "Tā ài dàzìrán", translation: "She loves nature", requires: ["g_zh_pron_4", "v_zh_top_31", "n_zh_ext_42"] },

    // --- LEVEL 3: Possession and Classifiers (的, 个, 本) ---
    { id: "s_zh_13", lang: "zh", text: "这是我的书", pronunciation: "Zhè shì wǒ de shū", translation: "This is my book", requires: ["g_zh_dem_1", "v_zh_top_1", "g_zh_pron_1", "g_zh_part_1", "soc_zh4"] },
    { id: "s_zh_14", lang: "zh", text: "她是我的朋友", pronunciation: "Tā shì wǒ de péngyǒu", translation: "She is my friend", requires: ["g_zh_pron_4", "v_zh_top_1", "g_zh_pron_1", "g_zh_part_1", "soc_zh5"] },
    { id: "s_zh_15", lang: "zh", text: "我有三个哥哥", pronunciation: "Wǒ yǒu sān gè gēge", translation: "I have three older brothers", requires: ["g_zh_pron_1", "v_zh_top_2", "num_zh3", "g_zh_cl_1", "fam_zh3"] },
    { id: "s_zh_16", lang: "zh", text: "我要两本书", pronunciation: "Wǒ yào liǎng běn shū", translation: "I want two books", requires: ["g_zh_pron_1", "v_zh_top_30", "num_zh2", "g_zh_cl_4", "soc_zh4"] }, // Note: "Two" for quantity is "liǎng" not "èr", but understanding the concept is fine for now.
    { id: "s_zh_17", lang: "zh", text: "这里有一只鸟", pronunciation: "Zhèlǐ yǒu yī zhī niǎo", translation: "There is a bird here", requires: ["g_zh_dem_3", "v_zh_top_2", "num_zh1", "g_zh_cl_2", "n_zh_ext_33"] },

    // --- LEVEL 4: Negation and Questions (不, 没, 吗) ---
    { id: "s_zh_18", lang: "zh", text: "我不去", pronunciation: "Wǒ bù qù", translation: "I am not going", requires: ["g_zh_pron_1", "g_zh_neg_1", "v_zh_top_9"] },
    { id: "s_zh_19", lang: "zh", text: "他没钱", pronunciation: "Tā méi qián", translation: "He doesn't have money", requires: ["g_zh_pron_3", "g_zh_neg_2", "soc_zh6"] },
    { id: "s_zh_20", lang: "zh", text: "你不吃肉吗？", pronunciation: "Nǐ bù chī ròu ma?", translation: "Don't you eat meat?", requires: ["g_zh_pron_2", "g_zh_neg_1", "v_zh_top_51", "g_zh_part_2"] }, // "ròu" (meat) extra
    { id: "s_zh_21", lang: "zh", text: "这是什么？", pronunciation: "Zhè shì shénme?", translation: "What is this?", requires: ["g_zh_dem_1", "v_zh_top_1", "g_zh_int_1"] },
    { id: "s_zh_22", lang: "zh", text: "学校在哪儿？", pronunciation: "Xuéxiào zài nǎr?", translation: "Where is the school?", requires: ["soc_zh2", "v_zh_top_5", "g_zh_int_2"] },
    { id: "s_zh_23", lang: "zh", text: "你喜欢书吗？", pronunciation: "Nǐ xǐhuān shū ma?", translation: "Do you like books?", requires: ["g_zh_pron_2", "v_zh_top_32", "soc_zh4", "g_zh_part_2"] },

    // --- LEVEL 5: Complex Sentences (Time, Place, Past) ---
    { id: "s_zh_24", lang: "zh", text: "明天我去北京", pronunciation: "Míngtiān wǒ qù Běijīng", translation: "Tomorrow I go to Beijing", requires: ["tm_zh5", "g_zh_pron_1", "v_zh_top_9"] },
    { id: "s_zh_25", lang: "zh", text: "我买了一张票", pronunciation: "Wǒ mǎi le yī zhāng piào", translation: "I bought a ticket", requires: ["g_zh_pron_1", "v_zh_top_55", "g_zh_part_3", "num_zh1", "v_zh_ext_7"] },
    { id: "s_zh_26", lang: "zh", text: "爸爸和妈妈在家", pronunciation: "Bàba hé māma zài jiā", translation: "Dad and Mom are at home", requires: ["fam_zh1", "g_zh_part_5", "fam_zh2", "v_zh_top_5", "soc_zh1"] },
    { id: "s_zh_27", lang: "zh", text: "我看海和山", pronunciation: "Wǒ kàn hǎi hé shān", translation: "I look at the sea and the mountain", requires: ["g_zh_pron_1", "v_zh_top_23", "zh16", "g_zh_part_5", "zh7"] },
    { id: "s_zh_28", lang: "zh", text: "天在下雨", pronunciation: "Tiān zài xià yǔ", translation: "It is raining (The sky is raining)", requires: ["zh12", "v_zh_top_5", "rad_pioggia"] },
    { id: "s_zh_29", lang: "zh", text: "我们要坐火车", pronunciation: "Wǒmen yào zuò huǒchē", translation: "We want to take the train", requires: ["g_zh_pron_5", "v_zh_top_30", "v_zh_top_19", "v_zh6"] },
    { id: "s_zh_30", lang: "zh", text: "森林里有很多树", pronunciation: "Sēnlín lǐ yǒu hěnduō shù", translation: "There are many trees in the forest", requires: ["zh13", "v_zh_top_2", "g_zh_part_4", "n_zh_ext_12"] }, // "lǐ" (inside) and "duō" (many) are implicit concepts here


    // ==========================================
    // JAPANESE SENTENCES (LEVELS 1-6)
    // ==========================================

    // --- LEVEL 1: Identity and Simple Descriptions (X wa Y desu) ---
    { id: "s_ja_1", lang: "ja", text: "これは山です", pronunciation: "Kore wa yama desu", translation: "This is a mountain", requires: ["g_ja_dem_1", "g_ja_part_1", "ja2", "g_ja_aux_1"] },
    { id: "s_ja_2", lang: "ja", text: "私はイタリア人です", pronunciation: "Watashi wa Itaria-jin desu", translation: "I am Italian", requires: ["g_ja_pron_1", "g_ja_part_1", "rad_uomo_ja", "g_ja_aux_1"] }, // "jin" uses the man radical
    { id: "s_ja_3", lang: "ja", text: "花は赤です", pronunciation: "Hana wa aka desu", translation: "The flower is red", requires: ["ja13", "g_ja_part_1", "col_ja3", "g_ja_aux_1"] },
    { id: "s_ja_4", lang: "ja", text: "あれは月です", pronunciation: "Are wa tsuki desu", translation: "That is the moon", requires: ["g_ja_dem_3", "g_ja_part_1", "rad_luna_ja", "g_ja_aux_1"] },
    { id: "s_ja_5", lang: "ja", text: "彼は先生です", pronunciation: "Kare wa sensei desu", translation: "He is a teacher", requires: ["g_ja_pron_3", "g_ja_part_1", "soc_ja5", "g_ja_aux_1"] },
    { id: "s_ja_6", lang: "ja", text: "空は青です", pronunciation: "Sora wa ao desu", translation: "The sky is blue", requires: ["n_ja_ext_27", "g_ja_part_1", "col_ja4", "g_ja_aux_1"] },

    // --- LEVEL 2: Basic Actions (Subject + Wa + Object + O + Verb) ---
    { id: "s_ja_7", lang: "ja", text: "私は水を飲みます", pronunciation: "Watashi wa mizu o nomimasu", translation: "I drink water", requires: ["g_ja_pron_1", "rad_acqua_ja", "g_ja_part_2", "v_ja_top_22", "g_ja_aux_2"] },
    { id: "s_ja_8", lang: "ja", text: "彼は果物を食べます", pronunciation: "Kare wa kudamono o tabemasu", translation: "He eats fruit", requires: ["g_ja_pron_3", "n_ja_ext_22", "g_ja_part_2", "v_ja_top_21", "g_ja_aux_2"] },
    { id: "s_ja_9", lang: "ja", text: "彼女は本を読みます", pronunciation: "Kanojo wa hon o yomimasu", translation: "She reads a book", requires: ["g_ja_pron_4", "soc_ja3", "g_ja_part_2", "v_ja_top_54", "g_ja_aux_2"] },
    { id: "s_ja_10", lang: "ja", text: "母は魚を買います", pronunciation: "Haha wa sakana o kaimasu", translation: "Mom buys fish", requires: ["fam_ja2", "n_ja_ext_38", "g_ja_part_2", "v_ja_top_35", "g_ja_aux_2"] },
    { id: "s_ja_11", lang: "ja", text: "鳥は空を飛びます", pronunciation: "Tori wa sora o tobimasu", translation: "The bird flies in the sky", requires: ["n_ja_ext_37", "n_ja_ext_27", "g_ja_part_2", "v_ja_top_13", "g_ja_aux_2"] }, // "O" is also used for "traversing" a space

    // --- LEVEL 3: Movement and Places (Destination + Ni) ---
    { id: "s_ja_12", lang: "ja", text: "明日、学校に行きます", pronunciation: "Ashita, gakkou ni ikimasu", translation: "Tomorrow I go to school", requires: ["tm_ja5", "soc_ja2", "g_ja_part_3", "v_ja_top_7", "g_ja_aux_2"] },
    { id: "s_ja_13", lang: "ja", text: "家に帰ります", pronunciation: "Ie ni kaerimasu", translation: "I go back home", requires: ["soc_ja1", "g_ja_part_3", "v_ja_top_9", "g_ja_aux_2"] },
    { id: "s_ja_14", lang: "ja", text: "海に来ます", pronunciation: "Umi ni kimasu", translation: "I come to the sea", requires: ["n_ja_ext_4", "g_ja_part_3", "v_ja_top_8", "g_ja_aux_2"] },
    { id: "s_ja_15", lang: "ja", text: "山に登ります", pronunciation: "Yama ni noborimasu", translation: "I climb the mountain", requires: ["ja2", "g_ja_part_3", "v_ja_top_16", "g_ja_aux_2"] }, // v_ja_top_16 is "to climb/board" (noru/noboru)

    // --- LEVEL 4: Existence and Possession (Arimasu/Imasu/No) ---
    { id: "s_ja_16", lang: "ja", text: "これは私の本です", pronunciation: "Kore wa watashi no hon desu", translation: "This is my book", requires: ["g_ja_dem_1", "g_ja_pron_1", "g_ja_part_5", "soc_ja3", "g_ja_aux_1"] },
    { id: "s_ja_17", lang: "ja", text: "ここに木があります", pronunciation: "Koko ni ki ga arimasu", translation: "There is a tree here", requires: ["g_ja_dem_4", "g_ja_part_3", "rad_albero_ja", "g_ja_part_6", "g_ja_aux_3"] },
    { id: "s_ja_18", lang: "ja", text: "あそこに川があります", pronunciation: "Asoko ni kawa ga arimasu", translation: "There is a river over there", requires: ["g_ja_dem_6", "ja1", "g_ja_part_6", "g_ja_aux_3"] },
    { id: "s_ja_19", lang: "ja", text: "虫がいます", pronunciation: "Mushi ga imasu", translation: "There is an insect", requires: ["n_ja_ext_39", "g_ja_part_6", "g_ja_aux_4"] }, // "Imasu" for living things
    { id: "s_ja_20", lang: "ja", text: "私はお金があります", pronunciation: "Watashi wa okane ga arimasu", translation: "I have money", requires: ["g_ja_pron_1", "v_ja_ext_51", "g_ja_part_6", "g_ja_aux_3"] }, // To have is expressed as "to exist" (arimasu)

    // --- LEVEL 5: Questions, Means, and Conjunctions (Ka, De, To) ---
    { id: "s_ja_21", lang: "ja", text: "駅はどこですか？", pronunciation: "Eki wa doko desu ka?", translation: "Where is the station?", requires: ["v_ja4", "g_ja_int_3", "g_ja_aux_1", "g_ja_part_7"] },
    { id: "s_ja_22", lang: "ja", text: "これは何ですか？", pronunciation: "Kore wa nani desu ka?", translation: "What is this?", requires: ["g_ja_dem_1", "g_ja_int_1", "g_ja_part_7"] },
    { id: "s_ja_23", lang: "ja", text: "電車で行きます", pronunciation: "Densha de ikimasu", translation: "I go by train", requires: ["v_ja6", "g_ja_part_4", "v_ja_top_7"] },
    { id: "s_ja_24", lang: "ja", text: "友達と話します", pronunciation: "Tomodachi to hanashimasu", translation: "I talk with a friend", requires: ["soc_ja4", "g_ja_part_8", "v_ja_top_51"] },
    { id: "s_ja_25", lang: "ja", text: "父と母", pronunciation: "Chichi to haha", translation: "Dad and Mom", requires: ["fam_ja1", "g_ja_part_8", "fam_ja2"] },
    { id: "s_ja_26", lang: "ja", text: "あなたも行きますか？", pronunciation: "Anata mo ikimasu ka?", translation: "Are you going too?", requires: ["g_ja_pron_2", "g_ja_part_9", "v_ja_top_7", "g_ja_part_7"] },
    
    // --- LEVEL 6: Complex Sentences / Travel ---
    { id: "s_ja_27", lang: "ja", text: "チケットを買います", pronunciation: "Chiketto o kaimasu", translation: "I buy a ticket", requires: ["v_ja_ext_7", "g_ja_part_2", "v_ja_top_35"] },
    { id: "s_ja_28", lang: "ja", text: "パスポートを見せます", pronunciation: "Pasupooto o misemasu", translation: "I show the passport", requires: ["v_ja_ext_8", "g_ja_part_2", "v_ja_top_66"] },
    { id: "s_ja_29", lang: "ja", text: "トイレはどこですか？", pronunciation: "Toire wa doko desu ka?", translation: "Where is the bathroom?", requires: ["v_ja_ext_50", "g_ja_int_3", "g_ja_part_7"] },
    { id: "s_ja_30", lang: "ja", text: "助けて！", pronunciation: "Tasukete!", translation: "Help!", requires: ["v_ja_ext_46"] }

    // ==========================================
    // ARABIC SENTENCES (LEVELS 1-6)
    // ==========================================

    // --- LEVEL 1: Nominal Sentences (No "to be" verb) ---
    { id: "s_ar_1", lang: "ar", text: "هَذَا بَيْت", pronunciation: "Hādhā bayt", translation: "This is a house", requires: ["g_ar_dem_1", "soc_ar1"] },
    { id: "s_ar_2", lang: "ar", text: "أَنَا أَب", pronunciation: "Ana ab", translation: "I am a father", requires: ["g_ar_pron_1", "fam_ar1"] },
    { id: "s_ar_3", lang: "ar", text: "الْكِتَاب كَبِير", pronunciation: "Al-kitāb kabīr", translation: "The book is big", requires: ["g_ar_part_1", "soc_ar2", "root_kbr"] },
    { id: "s_ar_4", lang: "ar", text: "هَذِهِ أُمّ", pronunciation: "Hādhihi umm", translation: "This is a mother", requires: ["g_ar_dem_2", "fam_ar2"] },
    { id: "s_ar_5", lang: "ar", text: "الْبَحْر أَزْرَق", pronunciation: "Al-baḥr azraq", translation: "The sea is blue", requires: ["g_ar_part_1", "n_ar_ext_17", "col_ar4"] }, // Baḥr was ar17 or root_bhr, using extension or derived

    // --- LEVEL 2: Prepositions and Places (Fi, Ila, Min, Ala) ---
    { id: "s_ar_6", lang: "ar", text: "هُوَ فِي الْمَدْرَسَة", pronunciation: "Huwa fī al-madrasa", translation: "He is in the school", requires: ["g_ar_pron_4", "g_ar_prep_1", "g_ar_part_1", "soc_ar4"] },
    { id: "s_ar_7", lang: "ar", text: "الْقَلَم عَلَى الْمَكْتَب", pronunciation: "Al-qalam 'alā al-maktab", translation: "The pen is on the desk", requires: ["g_ar_part_1", "root_ktb", "g_ar_prep_4", "soc_ar3"] }, // "Qalam" is missing, assuming basic vocab. Use: The book is on the desk -> Al-kitāb 'alā al-maktab
    { id: "s_ar_7_fix", lang: "ar", text: "الْكِتَاب عَلَى الْمَكْتَب", pronunciation: "Al-kitāb 'alā al-maktab", translation: "The book is on the desk", requires: ["soc_ar2", "g_ar_prep_4", "soc_ar3"] },
    { id: "s_ar_8", lang: "ar", text: "أَنَا مِنْ إِيطَالِيَا", pronunciation: "Ana min Īṭāliyā", translation: "I am from Italy", requires: ["g_ar_pron_1", "g_ar_prep_3"] }, // Italy is a simple extra word
    { id: "s_ar_9", lang: "ar", text: "الْوَلَد مَعَ الْأَب", pronunciation: "Al-walad ma'a al-ab", translation: "The boy is with the father", requires: ["v_ar_top_100", "g_ar_prep_6", "g_ar_part_1", "fam_ar1"] }, // Walad from verb "Wulida" or radical

    // --- LEVEL 3: Possession (Suffixes and 'Inda) ---
    { id: "s_ar_10", lang: "ar", text: "هَذَا كِتَابِي", pronunciation: "Hādhā kitābī", translation: "This is my book", requires: ["g_ar_dem_1", "soc_ar2", "g_ar_suff_1"] },
    { id: "s_ar_11", lang: "ar", text: "أَيْنَ بَيْتُكَ؟", pronunciation: "Ayna baytuka?", translation: "Where is your house?", requires: ["g_ar_int_3", "soc_ar1", "g_ar_suff_2"] },
    { id: "s_ar_12", lang: "ar", text: "عِنْدِي تِذْكَرَة", pronunciation: "'Indī tadhkira", translation: "I have a ticket", requires: ["g_ar_have_1", "g_ar_suff_1", "v_ar_ext_7"] },
    { id: "s_ar_13", lang: "ar", text: "لَيْسَ عِنْدِي مَال", pronunciation: "Laysa 'indī māl", translation: "I don't have money", requires: ["g_ar_neg_2", "g_ar_have_1", "g_ar_suff_1", "root_mlk"] }, // Māl (money) or use Nuqūd (v_ar_ext_51)
    { id: "s_ar_13_fix", lang: "ar", text: "لَيْسَ عِنْدِي نُقُود", pronunciation: "Laysa 'indī nuqūd", translation: "I don't have cash", requires: ["g_ar_neg_2", "g_ar_have_1", "g_ar_suff_1", "v_ar_ext_51"] },
    { id: "s_ar_14", lang: "ar", text: "اِسْمُهُ مُحَمَّد", pronunciation: "Ismuhu Muḥammad", translation: "His name is Muhammad", requires: ["root_sm", "g_ar_suff_4"] }, // "Ism" (name) basic concept

    // --- LEVEL 4: Present Tense Verbs (Implicit or explicit subject) ---
    { id: "s_ar_15", lang: "ar", text: "أَنَا أَشْرَبُ الْمَاء", pronunciation: "Ana ashrabu al-mā'", translation: "I drink water", requires: ["g_ar_pron_1", "v_ar_top_58", "g_ar_part_1", "base_ma"] },
    { id: "s_ar_16", lang: "ar", text: "هُوَ يَأْكُلُ فَاكِهَة", pronunciation: "Huwa ya'kulu fākiha", translation: "He eats fruit", requires: ["g_ar_pron_4", "v_ar_top_57", "n_ar_ext_22"] },
    { id: "s_ar_17", lang: "ar", text: "نَحْنُ نَذْهَبُ إِلَى الْمَطَار", pronunciation: "Naḥnu nadhhabu ilā al-maṭār", translation: "We go to the airport", requires: ["g_ar_pron_6", "v_ar_top_11", "g_ar_prep_2", "g_ar_part_1", "v_ar5"] },
    { id: "s_ar_18", lang: "ar", text: "هِيَ تَقْرَأُ كِتَاب", pronunciation: "Hiya taqra'u kitāb", translation: "She reads a book", requires: ["g_ar_pron_5", "v_ar_top_52", "soc_ar2"] },
    { id: "s_ar_19", lang: "ar", text: "هُم يَسْكُنُونَ هُنَا", pronunciation: "Hum yaskunūna hunā", translation: "They live here", requires: ["g_ar_pron_7", "v_ar_top_70", "g_ar_dem_5"] },

    // --- LEVEL 5: Questions and Negations ---
    { id: "s_ar_20", lang: "ar", text: "مَا هَذَا؟", pronunciation: "Mā hādhā?", translation: "What is this?", requires: ["g_ar_int_1", "g_ar_dem_1"] },
    { id: "s_ar_21", lang: "ar", text: "مَنْ أَنْتَ؟", pronunciation: "Man anta?", translation: "Who are you?", requires: ["g_ar_int_2", "g_ar_pron_2"] },
    { id: "s_ar_22", lang: "ar", text: "هَلْ أَنْتَ طَالِب؟", pronunciation: "Hal anta ṭālib?", translation: "Are you a student?", requires: ["g_ar_int_5", "g_ar_pron_2", "root_drs"] }, // Ṭālib derived from root DRS
    { id: "s_ar_23", lang: "ar", text: "لِمَاذَا لَا تَأْكُلُ؟", pronunciation: "Limādhā lā ta'kulu?", translation: "Why don't you eat?", requires: ["g_ar_int_6", "g_ar_neg_1", "v_ar_top_57"] },
    { id: "s_ar_24", lang: "ar", text: "كَمْ السِّعْر؟", pronunciation: "Kam as-si'r?", translation: "How much is the price?", requires: ["g_ar_int_7", "g_ar_part_1", "v_ar_ext_53"] },

    // --- LEVEL 6: Travel and Nature (Complex Sentences) ---
    { id: "s_ar_25", lang: "ar", text: "الشَّمْس وَ الْقَمَر", pronunciation: "Ash-shams wa al-qamar", translation: "The sun and the moon", requires: ["g_ar_part_1", "ar14", "g_ar_conj_1", "ar15"] },
    { id: "s_ar_26", lang: "ar", text: "أُرِيدُ فُنْدُق قَرِيب", pronunciation: "Urīdu funduq qarīb", translation: "I want a nearby hotel", requires: ["v_ar_top_37", "v_ar_ext_14", "v_ar_ext_29"] },
    { id: "s_ar_27", lang: "ar", text: "أَسَافِرُ بِالْقِطَار", pronunciation: "Usāfiru bi-l-qiṭār", translation: "I travel by train", requires: ["v_ar_top_22", "g_ar_prep_5", "g_ar_part_1", "v_ar_ext_10"] },
    { id: "s_ar_28", lang: "ar", text: "الْجَوّ جَمِيل الْيَوْم", pronunciation: "Al-jaww jamīl al-yawm", translation: "The weather is beautiful today", requires: ["g_ar_part_1", "n_ar_ext_33", "tm_ar4"] }, // Jaww (weather), Jamīl (beautiful - extra base)
    { id: "s_ar_29", lang: "ar", text: "هَلْ يُمكِنُنِي الدُّخُول؟", pronunciation: "Hal yumkinunī ad-dukhūl?", translation: "Can I enter?", requires: ["g_ar_int_5", "v_ar_top_5", "v_ar_top_14"] }, // Yumkin (possible), Dukhul (entering)
    { id: "s_ar_30", lang: "ar", text: "أَيْنَ الْحَمَّام؟", pronunciation: "Ayna al-ḥammām?", translation: "Where is the bathroom?", requires: ["g_ar_int_3", "g_ar_part_1", "v_ar_ext_50"] },
    
    // --- MIXED EXAMPLES (OLD/MISC) ---
    { id: "s_zh1", lang: "zh", text: "我吃苹果", pronunciation: "Wǒ chī píngguǒ", translation: "I eat the apple", requires: ["g_zh1", "g_zh6", "c_zh4"] },
    { id: "s_zh2", lang: "zh", text: "你是我的朋友", pronunciation: "Nǐ shì wǒ de péngyǒu", translation: "You are my friend", requires: ["g_zh2", "soc_zh5"] },
    { id: "s_zh3", lang: "zh", text: "我有三个哥哥", pronunciation: "Wǒ yǒu sān gè gēge", translation: "I have three older brothers", requires: ["g_zh1", "num_zh3", "fam_zh3"] },
    { id: "s_zh4", lang: "zh", text: "明天去学校", pronunciation: "Míngtiān qù xuéxiào", translation: "Tomorrow I go to school", requires: ["tm_zh5", "g_zh7", "soc_zh2"] },
    { id: "s_ja1", lang: "ja", text: "私はりんごを食べます", pronunciation: "Watashi wa ringo o tabemasu", translation: "I eat the apple", requires: ["g_ja1", "c_ja4", "g_ja4"] },
    { id: "s_ja2", lang: "ja", text: "母は家にいます", pronunciation: "Haha wa ie ni imasu", translation: "Mom is at home", requires: ["fam_ja2", "soc_ja1"] },
    { id: "s_ja3", lang: "ja", text: "二つの本", pronunciation: "Futatsu no hon", translation: "Two books", requires: ["num_ja2", "soc_ja3"] },
    { id: "s_ar1", lang: "ar", text: "أَنَا آكُلُ تُفَّاح", pronunciation: "Ana ākulu tuffāḥ", translation: "I eat apples", requires: ["g_ar1", "g_ar7", "c_ar4"] },
    { id: "s_ar2", lang: "ar", text: "هُوَ فِي الْبَيْت", pronunciation: "Huwa fī al-bayt", translation: "He is in the house", requires: ["g_ar2", "soc_ar1"] },
    { id: "s_ar3", lang: "ar", text: "عِنْدِي كِتَاب وَاحِد", pronunciation: "'Indī kitāb wāḥid", translation: "I have one book", requires: ["soc_ar2", "num_ar1"] }
];
