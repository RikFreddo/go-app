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
            { id: "rad_campo", lang: "zh", level: 1, word: "田", pronunciation: "tián", ipa: "tʰjɛn³⁵", meaning: "Field", type: "base", pos: "place", grammar: "place" },

            // --- OBJECTS & STRUCTURES ---
            { id: "rad_tetto", lang: "zh", level: 1, word: "宀", pronunciation: "mián", ipa: "mjɛn³⁵", meaning: "Roof", type: "base", pos: "noun" },
            { id: "rad_porta", lang: "zh", level: 1, word: "门", pronunciation: "mén", ipa: "mən³⁵", meaning: "Door / Gate", type: "base", pos: "place", grammar: "place" },
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
            { id: "tm_zh5", lang: "zh", level: 2, word: "明天", pronunciation: "míngtiān", ipa: "mjŋ³⁵ tʰjɛn⁵⁵", meaning: "Tomorrow", type: "derived", requires: ["rad_sole", "rad_luna"], pos: "noun" },
            
            // --- NEW RADICALS FOR NATURE ---
            { id: "rad_pecora", lang: "zh", level: 1, word: "羊", pronunciation: "yáng", ipa: "jɑŋ˧˥", meaning: "Sheep", type: "base", pos: "noun" },
            { id: "rad_insetto", lang: "zh", level: 1, word: "虫", pronunciation: "chóng", ipa: "ʈʂʰʊŋ˧˥", meaning: "Insect", type: "base", pos: "noun" },
            { id: "rad_pietra", lang: "zh", level: 1, word: "石", pronunciation: "shí", ipa: "ʂʐ̩˧˥", meaning: "Stone", type: "base", pos: "noun" },
        
            // --- NEW BUILDING BLOCKS (COSTRUZIONI) ---
            { id: "base_nascere", lang: "zh", level: 1, word: "生", pronunciation: "shēng", ipa: "ʂəŋ˥", meaning: "To be born / Life", type: "base", pos: "verb", grammar: "verb" },
            { id: "base_testa", lang: "zh", level: 1, word: "头", pronunciation: "tóu", ipa: "tʰoʊ̯˧˥", meaning: "Head / End", type: "base", pos: "noun" },
            { id: "base_piede", lang: "zh", level: 1, word: "脚", pronunciation: "jiǎo", ipa: "tɕjɑʊ̯˨˩˦", meaning: "Foot", type: "base", pos: "noun" },
            { id: "base_luminoso", lang: "zh", level: 1, word: "亮", pronunciation: "liàng", ipa: "ljɑŋ˥˩", meaning: "Bright", type: "base", pos: "adj" },
            { id: "base_stampa", lang: "zh", level: 1, word: "印", pronunciation: "yìn", ipa: "in˥˩", meaning: "Print / Mark", type: "base", pos: "noun" },
            { id: "base_piatto", lang: "zh", level: 1, word: "平", pronunciation: "píng", ipa: "pʰiŋ˧˥", meaning: "Flat / Level", type: "base", pos: "adj" },
            { id: "base_filo", lang: "zh", level: 1, word: "线", pronunciation: "xiàn", ipa: "ɕjɛn˥˩", meaning: "Line / Thread", type: "base", pos: "noun" },
            { id: "base_secco", lang: "zh", level: 1, word: "干", pronunciation: "gàn", ipa: "kan˥˩", meaning: "Dry / To do", type: "base", pos: "adj" },
            { id: "base_dritto", lang: "zh", level: 1, word: "直", pronunciation: "zhí", ipa: "ʈʂʐ̩˧˥", meaning: "Straight", type: "base", pos: "adj" },
            { id: "base_sabbia", lang: "zh", level: 1, word: "沙", pronunciation: "shā", ipa: "ʂa˥", meaning: "Sand", type: "base", pos: "noun" },

            // --- NEW TRAVEL BLOCKS ---
            { id: "base_uscire", lang: "zh", level: 1, word: "出", pronunciation: "chū", ipa: "ʈʂʰu˥", meaning: "To go out / Exit", type: "base", pos: "verb", grammar: "verb" },
            { id: "base_buono", lang: "zh", level: 1, word: "好", pronunciation: "hǎo", ipa: "xɑʊ̯˨˩˦", meaning: "Good", type: "base", requires: ["rad_donna", "rad_bambino"], pos: "adj" },
            { id: "rad_mangiare", lang: "zh", level: 1, word: "饣", pronunciation: "shí", ipa: "ʂʐ̩˧˥", meaning: "Food / Eat (Radical)", type: "base", pos: "noun" },

            // --- NEW VERB BLOCKS ---
            { id: "rad_parola_ja", lang: "ja", level: 1, word: "言", pronunciation: "げん", ipa: "ɡeɴ", meaning: "Speech / Word", type: "base", pos: "noun" },
            { id: "rad_orecchio_ja", lang: "ja", level: 1, word: "耳", pronunciation: "みみ", ipa: "mimi", meaning: "Ear", type: "base", pos: "noun" },
            { id: "rad_porta_ja", lang: "ja", level: 1, word: "門", pronunciation: "もん", ipa: "moɴ", meaning: "Gate / Door", type: "base", pos: "noun" },

            // --- NEW GRAMMAR BLOCKS ---
            { id: "rad_cavallo", lang: "zh", level: 1, word: "马", pronunciation: "mǎ", ipa: "ma˨˩˦", meaning: "Horse", type: "base", pos: "noun" },
            
            // --- NEW POWER RADICAL ---
            { id: "rad_elettricita", lang: "zh", level: 1, word: "电", pronunciation: "diàn", ipa: "tjɛn⁵¹", meaning: "Electricity", type: "base", pos: "noun" },
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
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "だい", ipa: "dai", meaning: "Big", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "しょう", ipa: "ɕoː", meaning: "Small", type: "base", pos: "adj", grammar: "i-adj" },

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
            { id: "col_ja1", lang: "ja", level: 1, word: "白", pronunciation: "しろ", ipa: "ɕiɾo", meaning: "White", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "col_ja2", lang: "ja", level: 1, word: "黒", pronunciation: "くろ", ipa: "kɯɾo", meaning: "Black", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "col_ja3", lang: "ja", level: 1, word: "赤", pronunciation: "あか", ipa: "aka", meaning: "Red", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "col_ja4", lang: "ja", level: 1, word: "青", pronunciation: "あお", ipa: "ao", meaning: "Blue", type: "base", pos: "adj", grammar: "i-adj" },

            // --- TIME ---
            { id: "tm_ja3", lang: "ja", level: 1, word: "年", pronunciation: "とし", ipa: "toɕi", meaning: "Year", type: "base", pos: "noun" },
            { id: "tm_ja4", lang: "ja", level: 2, word: "今日", pronunciation: "きょう", ipa: "kʲoː", meaning: "Today", type: "derived", requires: ["rad_sole_ja"], pos: "noun" },
            { id: "tm_ja5", lang: "ja", level: 2, word: "明日", pronunciation: "あした", ipa: "aɕi̥ta", meaning: "Tomorrow", type: "derived", requires: ["rad_sole_ja", "rad_luna_ja"], pos: "noun" },
        
            // --- NEW BUILDING BLOCKS (COSTRUZIONI) ---
            { id: "base_nascere_ja", lang: "ja", level: 1, word: "生", pronunciation: "せい / い", ipa: "seː", meaning: "Life / Birth", type: "base", pos: "noun" },
            { id: "base_grande_ja", lang: "ja", level: 1, word: "大", pronunciation: "おお", ipa: "oː", meaning: "Big", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "base_piccolo_ja", lang: "ja", level: 1, word: "小", pronunciation: "ちい", ipa: "tɕiː", meaning: "Small", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "rad_insetto_ja", lang: "ja", level: 1, word: "虫", pronunciation: "むし", ipa: "mɯɕi", meaning: "Insect", type: "base", pos: "noun" },
            { id: "rad_pietra_ja", lang: "ja", level: 1, word: "石", pronunciation: "いし", ipa: "iɕi", meaning: "Stone", type: "base", pos: "noun" },
            { id: "rad_erba_ja", lang: "ja", level: 1, word: "草", pronunciation: "くさ", ipa: "kɯsa", meaning: "Grass", type: "base", pos: "noun" },
            { id: "rad_campo_ja", lang: "ja", level: 1, word: "田", pronunciation: "た", ipa: "ta", meaning: "Rice Field", type: "base", pos: "place", grammar: "place" },
            { id: "rad_forza_ja", lang: "ja", level: 1, word: "力", pronunciation: "ちから", ipa: "tɕikaɾa", meaning: "Power / Strength", type: "base", pos: "noun" },
            { id: "rad_mano_ja", lang: "ja", level: 1, word: "手", pronunciation: "て", ipa: "te", meaning: "Hand", type: "base", pos: "noun" },

            // --- NEW TRAVEL BLOCKS ---
            { id: "base_uscire_ja", lang: "ja", level: 1, word: "出る", pronunciation: "でる", ipa: "deɾɯ", meaning: "To Exit / Go out", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "base_entrare_ja", lang: "ja", level: 1, word: "入る", pronunciation: "はいる", ipa: "haiɾɯ", meaning: "To Enter", type: "base", pos: "verb", grammar: "godan" },
            { id: "base_sotto_ja", lang: "ja", level: 1, word: "下", pronunciation: "した", ipa: "ɕita", meaning: "Below / Under", type: "base", pos: "place", grammar: "place" },
            { id: "rad_metallo_ja", lang: "ja", level: 1, word: "金", pronunciation: "きん", ipa: "kiɴ", meaning: "Gold / Metal", type: "base", pos: "noun" },
            { id: "rad_elettricita_ja", lang: "ja", level: 1, word: "電気", pronunciation: "でんき", ipa: "deŋki", meaning: "Electricity", type: "base", pos: "noun" },
            { id: "rad_mangiare_ja", lang: "ja", level: 1, word: "食", pronunciation: "しょく", ipa: "ɕokɯ", meaning: "Eat / Food (Radical)", type: "base", pos: "noun" },

            // --- NEW SPATIAL BLOCKS ---
            { id: "base_sopra_ja", lang: "ja", level: 1, word: "上", pronunciation: "うえ", ipa: "ɯe", meaning: "Above / Up", type: "base", pos: "place", grammar: "place" },
            { id: "base_mezzo_ja", lang: "ja", level: 1, word: "中", pronunciation: "なか", ipa: "naka", meaning: "Inside / Middle", type: "base", pos: "place", grammar: "place" },
        ]
    },

    "fondamentali_ar": {
        title: "Fundamentals (Arabic)", tags: ["fundamentals", "ar"],
        cards: [
            // --- BASIC ROOTS ---
            { id: "root_ktb", lang: "ar", level: 1, word: "ك ت ب", pronunciation: "K-T-B", ipa: "k-t-b", meaning: "Root: To Write", type: "base", pos: "root", grammar: "action" },
            { id: "root_drs", lang: "ar", level: 1, word: "د ر س", pronunciation: "D-R-S", ipa: "d-r-s", meaning: "Root: To Study", type: "base", pos: "root", grammar: "action" },
            { id: "root_skn", lang: "ar", level: 1, word: "س ك ن", pronunciation: "S-K-N", ipa: "s-k-n", meaning: "Root: To Dwell/Live", type: "base", pos: "root", grammar: "action" },
            { id: "root_akl", lang: "ar", level: 1, word: "أ ك ل", pronunciation: "'-K-L", ipa: "ʔ-k-l", meaning: "Root: To Eat", type: "base", pos: "root", grammar: "action" },
            { id: "root_shrb", lang: "ar", level: 1, word: "ش ر ب", pronunciation: "Sh-R-B", ipa: "ʃ-r-b", meaning: "Root: To Drink", type: "base", pos: "root", grammar: "action" },
            { id: "root_fcl", lang: "ar", level: 1, word: "ف ع ل", pronunciation: "F-'-L", ipa: "f-ʕ-l", meaning: "Root: To Do", type: "base", pos: "root", grammar: "action" },
            { id: "root_kbr", lang: "ar", level: 1, word: "ك ب ر", pronunciation: "K-B-R", ipa: "k-b-r", meaning: "Root: To be Big", type: "base", pos: "root", grammar: "action" },
            { id: "root_hbb", lang: "ar", level: 1, word: "ح ب ب", pronunciation: "H-B-B", ipa: "ħ-b-b", meaning: "Root: To Love", type: "base", pos: "root", grammar: "action" },
            
            // --- NATURE ROOTS ---
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", ipa: "ʔ-r-dˤ", meaning: "Root: Earth", type: "base", pos: "root", grammar: "place" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", ipa: "ʃ-m-s", meaning: "Root: Sun", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", ipa: "q-m-r", meaning: "Root: Moon", type: "base", pos: "root" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", ipa: "b-ħ-r", meaning: "Root: Sea", type: "base", pos: "root", grammar: "place" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", ipa: "dʒ-b-l", meaning: "Root: Mountain", type: "base", pos: "root", grammar: "place" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", ipa: "ʃ-dʒ-r", meaning: "Root: Tree", type: "base", pos: "root" },
            { id: "root_nhr", lang: "ar", level: 1, word: "ن ه ر", pronunciation: "N-H-R", ipa: "n-h-r", meaning: "Root: River", type: "base", pos: "root", grammar: "place" },
            { id: "root_zhr", lang: "ar", level: 1, word: "ز ه ر", pronunciation: "Z-H-R", ipa: "z-h-r", meaning: "Root: Flower", type: "base", pos: "root" },
            { id: "root_shr", lang: "ar", level: 1, word: "ص ح ر", pronunciation: "Ṣ-Ḥ-R", ipa: "sˤ-ħ-r", meaning: "Root: Desert", type: "base", pos: "root", grammar: "place" },

            // --- TRAVEL ROOTS ---
            { id: "root_sfr", lang: "ar", level: 1, word: "س ف ر", pronunciation: "S-F-R", ipa: "s-f-r", meaning: "Root: Travel", type: "base", pos: "root", grammar: "action" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", ipa: "tˤ-j-r", meaning: "Root: To Fly", type: "base", pos: "root", grammar: "action" },
            { id: "root_nql", lang: "ar", level: 1, word: "ن ق ل", pronunciation: "N-Q-L", ipa: "n-q-l", meaning: "Root: Transport", type: "base", pos: "root", grammar: "action" },
            { id: "root_rkb", lang: "ar", level: 1, word: "ر ك ب", pronunciation: "R-K-B", ipa: "r-k-b", meaning: "Root: To Ride", type: "base", pos: "root", grammar: "action" },

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
            { id: "base_ma", lang: "ar", level: 1, word: "مَاء", pronunciation: "mā'", ipa: "maːʔ", meaning: "Water", type: "base", pos: "noun" },

            // --- NEW ROOTS FOR NATURE (RADICI NATURA) ---
            { id: "root_ard", lang: "ar", level: 1, word: "أ ر ض", pronunciation: "'-R-D", ipa: "ʔ-r-dˤ", meaning: "Root: Earth/Ground", type: "base", pos: "root", grammar: "place" },
            { id: "root_shms", lang: "ar", level: 1, word: "ش م س", pronunciation: "Sh-M-S", ipa: "ʃ-m-s", meaning: "Root: Sun", type: "base", pos: "root" },
            { id: "root_qmr", lang: "ar", level: 1, word: "ق م ر", pronunciation: "Q-M-R", ipa: "q-m-r", meaning: "Root: Moon", type: "base", pos: "root" },
            { id: "root_njm", lang: "ar", level: 1, word: "ن ج م", pronunciation: "N-J-M", ipa: "n-dʒ-m", meaning: "Root: Star/Appear", type: "base", pos: "root" },
            { id: "root_nhr", lang: "ar", level: 1, word: "ن ه ر", pronunciation: "N-H-R", ipa: "n-h-r", meaning: "Root: Flow/River", type: "base", pos: "root", grammar: "place" },
            { id: "root_bhr", lang: "ar", level: 1, word: "ب ح ر", pronunciation: "B-H-R", ipa: "b-ħ-r", meaning: "Root: Sea", type: "base", pos: "root", grammar: "place" },
            { id: "root_jbl", lang: "ar", level: 1, word: "ج ب ل", pronunciation: "J-B-L", ipa: "dʒ-b-l", meaning: "Root: Mountain", type: "base", pos: "root", grammar: "place" },
            { id: "root_shjr", lang: "ar", level: 1, word: "ش ج ر", pronunciation: "Sh-J-R", ipa: "ʃ-dʒ-r", meaning: "Root: Tree", type: "base", pos: "root" },
            { id: "root_zhr", lang: "ar", level: 1, word: "ز ه ر", pronunciation: "Z-H-R", ipa: "z-h-r", meaning: "Root: Flower/Shine", type: "base", pos: "root" },
            { id: "root_mtr", lang: "ar", level: 1, word: "م ط ر", pronunciation: "M-T-R", ipa: "m-tˤ-r", meaning: "Root: Rain", type: "base", pos: "root" },
            { id: "root_thlj", lang: "ar", level: 1, word: "ث ل ج", pronunciation: "Th-L-J", ipa: "θ-l-dʒ", meaning: "Root: Snow/Ice", type: "base", pos: "root", grammar: "place" },
            { id: "root_rml", lang: "ar", level: 1, word: "ر م ل", pronunciation: "R-M-L", ipa: "r-m-l", meaning: "Root: Sand", type: "base", pos: "root" },
            { id: "root_shr", lang: "ar", level: 1, word: "ص ح ر", pronunciation: "S-H-R", ipa: "sˤ-ħ-r", meaning: "Root: Desert/Empty", type: "base", pos: "root", grammar: "place" },
            { id: "root_hyw", lang: "ar", level: 1, word: "ح ي و", pronunciation: "H-Y-W", ipa: "ħ-j-w", meaning: "Root: Life/Living", type: "base", pos: "root", grammar: "action" },
            { id: "root_hwy", lang: "ar", level: 1, word: "ه و ي", pronunciation: "H-W-Y", ipa: "h-w-j", meaning: "Root: Air/Wind/Fall", type: "base", pos: "root" },
            { id: "root_tyr", lang: "ar", level: 1, word: "ط ي ر", pronunciation: "T-Y-R", ipa: "tˤ-j-r", meaning: "Root: Fly/Bird", type: "base", pos: "root", grammar: "action" },
            
            // --- NEW ROOTS FOR EXTENDED NATURE ---
            { id: "root_tll", lang: "ar", level: 1, word: "ت ل ل", pronunciation: "T-L-L", ipa: "t-l-l", meaning: "Root: Hill/Mound", type: "base", pos: "root", grammar: "place" },
            { id: "root_wdy", lang: "ar", level: 1, word: "و د ي", pronunciation: "W-D-Y", ipa: "w-d-j", meaning: "Root: Valley/Flow", type: "base", pos: "root", grammar: "place" },
            { id: "root_sht", lang: "ar", level: 1, word: "ش ط أ", pronunciation: "Sh-T-'", ipa: "ʃ-tˤ-ʔ", meaning: "Root: Shore/Beach", type: "base", pos: "root", grammar: "place" },
            { id: "root_jzr", lang: "ar", level: 1, word: "ج ز ر", pronunciation: "J-Z-R", ipa: "dʒ-z-r", meaning: "Root: Cut/Island", type: "base", pos: "root", grammar: "place" },
            { id: "root_sll", lang: "ar", level: 1, word: "ش ل ل", pronunciation: "Sh-L-L", ipa: "ʃ-l-l", meaning: "Root: Waterfall/Pour", type: "base", pos: "root", grammar: "place" },
            { id: "root_khf", lang: "ar", level: 1, word: "ك ه ف", pronunciation: "K-H-F", ipa: "k-h-f", meaning: "Root: Cave", type: "base", pos: "root", grammar: "place" },
            { id: "root_brk", lang: "ar", level: 1, word: "ب ر ك", pronunciation: "B-R-K", ipa: "b-r-k", meaning: "Root: Volcano/Kneel", type: "base", pos: "root", grammar: "place" },
            { id: "root_afq", lang: "ar", level: 1, word: "أ ف ق", pronunciation: "'-F-Q", ipa: "ʔ-f-q", meaning: "Root: Horizon", type: "base", pos: "root", grammar: "place" },
            { id: "root_skhr", lang: "ar", level: 1, word: "ص خ ر", pronunciation: "S-Kh-R", ipa: "sˤ-x-r", meaning: "Root: Rock", type: "base", pos: "root" },
            { id: "root_dghl", lang: "ar", level: 1, word: "د غ ل", pronunciation: "D-Gh-L", ipa: "d-ɣ-l", meaning: "Root: Jungle/Thicket", type: "base", pos: "root", grammar: "place" },
            { id: "root_nbt", lang: "ar", level: 1, word: "ن ب ت", pronunciation: "N-B-T", ipa: "n-b-t", meaning: "Root: Grow/Plant", type: "base", pos: "root", grammar: "action" },
            { id: "root_ashb", lang: "ar", level: 1, word: "ع ش ب", pronunciation: "'-Sh-B", ipa: "ʕ-ʃ-b", meaning: "Root: Grass", type: "base", pos: "root" },
            { id: "root_wrq", lang: "ar", level: 1, word: "و ر ق", pronunciation: "W-R-Q", ipa: "w-r-q", meaning: "Root: Leaf/Paper", type: "base", pos: "root" },
            { id: "root_ghsn", lang: "ar", level: 1, word: "غ ص ن", pronunciation: "Gh-S-N", ipa: "ɣ-sˤ-n", meaning: "Root: Branch", type: "base", pos: "root" },
            { id: "root_jdhr", lang: "ar", level: 1, word: "ج ذ ر", pronunciation: "J-Dh-R", ipa: "dʒ-ð-r", meaning: "Root: Root", type: "base", pos: "root" },
            { id: "root_bdhr", lang: "ar", level: 1, word: "ب ذ ر", pronunciation: "B-Dh-R", ipa: "b-ð-r", meaning: "Root: Seed", type: "base", pos: "root" },
            { id: "root_fkh", lang: "ar", level: 1, word: "ف ك ه", pronunciation: "F-K-H", ipa: "f-k-h", meaning: "Root: Fruit/Jest", type: "base", pos: "root" },
            { id: "root_khshb", lang: "ar", level: 1, word: "خ ش ب", pronunciation: "Kh-Sh-B", ipa: "x-ʃ-b", meaning: "Root: Wood", type: "base", pos: "root" },
            { id: "root_shb", lang: "ar", level: 1, word: "س ح ب", pronunciation: "S-H-B", ipa: "s-ħ-b", meaning: "Root: Cloud/Pull", type: "base", pos: "root", grammar: "action" },
            { id: "root_rwh", lang: "ar", level: 1, word: "ر و ح", pronunciation: "R-W-H", ipa: "r-w-ħ", meaning: "Root: Wind/Spirit", type: "base", pos: "root" },
            { id: "root_asf", lang: "ar", level: 1, word: "ع ص ف", pronunciation: "'-S-F", ipa: "ʕ-sˤ-f", meaning: "Root: Storm/Blow", type: "base", pos: "root", grammar: "action" },
            { id: "root_dbb", lang: "ar", level: 1, word: "ض ب ب", pronunciation: "D-B-B", ipa: "dˤ-b-b", meaning: "Root: Fog", type: "base", pos: "root" },
            { id: "root_jld", lang: "ar", level: 1, word: "ج ل د", pronunciation: "J-L-D", ipa: "dʒ-l-d", meaning: "Root: Ice/Skin", type: "base", pos: "root" },
            { id: "root_nwkh", lang: "ar", level: 1, word: "ن و خ", pronunciation: "N-W-Kh", ipa: "n-w-x", meaning: "Root: Climate", type: "base", pos: "root" },
            { id: "root_brr", lang: "ar", level: 1, word: "ب ر ر", pronunciation: "B-R-R", ipa: "b-r-r", meaning: "Root: Land/Wild", type: "base", pos: "root", grammar: "place" },
            { id: "root_hshr", lang: "ar", level: 1, word: "ح ش ر", pronunciation: "H-Sh-R", ipa: "ħ-ʃ-r", meaning: "Root: Insect", type: "base", pos: "root" },
            { id: "root_thdy", lang: "ar", level: 1, word: "ث د ي", pronunciation: "Th-D-Y", ipa: "θ-d-j", meaning: "Root: Breast/Mammal", type: "base", pos: "root" },
            { id: "root_zhf", lang: "ar", level: 1, word: "ز ح ف", pronunciation: "Z-H-F", ipa: "z-ħ-f", meaning: "Root: Crawl/Reptile", type: "base", pos: "root", grammar: "action" },
            { id: "root_nwa", lang: "ar", level: 1, word: "ن و ع", pronunciation: "N-W-'", ipa: "n-w-ʕ", meaning: "Root: Type/Species", type: "base", pos: "root" },
            { id: "root_ash", lang: "ar", level: 1, word: "ع ش ش", pronunciation: "'-Sh-Sh", ipa: "ʕ-ʃ-ʃ", meaning: "Root: Nest", type: "base", pos: "root", grammar: "place" },
            { id: "root_athr", lang: "ar", level: 1, word: "أ ث ر", pronunciation: "'-Th-R", ipa: "ʔ-θ-r", meaning: "Root: Trace/Effect", type: "base", pos: "root" },
            { id: "root_bwa", lang: "ar", level: 1, word: "ب و أ", pronunciation: "B-W-'", ipa: "b-w-ʔ", meaning: "Root: Environment", type: "base", pos: "root", grammar: "place" },
            { id: "root_lwth", lang: "ar", level: 1, word: "ل و ث", pronunciation: "L-W-Th", ipa: "l-w-θ", meaning: "Root: Pollute", type: "base", pos: "root", grammar: "action" },
            { id: "root_hmy", lang: "ar", level: 1, word: "ح م ي", pronunciation: "H-M-Y", ipa: "ħ-m-j", meaning: "Root: Protect", type: "base", pos: "root", grammar: "action" },
            { id: "root_mrr", lang: "ar", level: 1, word: "م ر ر", pronunciation: "M-R-R", ipa: "m-r-r", meaning: "Root: Pass/Path", type: "base", pos: "root", grammar: "action" },

            // --- NEW ROOTS FOR TRAVEL (RADICI VIAGGIO) ---
            { id: "root_nql", lang: "ar", level: 1, word: "ن ق ل", pronunciation: "N-Q-L", ipa: "n-q-l", meaning: "Root: Move/Transport", type: "base", pos: "root", grammar: "action" },
            { id: "root_ghdr", lang: "ar", level: 1, word: "غ د ر", pronunciation: "Gh-D-R", ipa: "ɣ-d-r", meaning: "Root: Depart/Leave", type: "base", pos: "root", grammar: "action" },
            { id: "root_wsl", lang: "ar", level: 1, word: "و ص ل", pronunciation: "W-S-L", ipa: "w-sˤ-l", meaning: "Root: Arrive/Connect", type: "base", pos: "root", grammar: "action" },
            { id: "root_akhr", lang: "ar", level: 1, word: "أ خ ر", pronunciation: "'-Kh-R", ipa: "ʔ-x-r", meaning: "Root: Late/Delay", type: "base", pos: "root", grammar: "action" },
            { id: "root_dhkr", lang: "ar", level: 1, word: "ذ ك ر", pronunciation: "Dh-K-R", ipa: "ð-k-r", meaning: "Root: Mention/Ticket", type: "base", pos: "root", grammar: "action" },
            { id: "root_jwz", lang: "ar", level: 1, word: "ج و ز", pronunciation: "J-W-Z", ipa: "dʒ-w-z", meaning: "Root: Pass/Cross", type: "base", pos: "root", grammar: "action" },
            { id: "root_hqb", lang: "ar", level: 1, word: "ح ق ب", pronunciation: "H-Q-B", ipa: "ħ-q-b", meaning: "Root: Bag/Case", type: "base", pos: "root" },
            { id: "root_qtr", lang: "ar", level: 1, word: "ق ط ر", pronunciation: "Q-T-R", ipa: "q-tˤ-r", meaning: "Root: Train/Tow", type: "base", pos: "root", grammar: "place" }, // Often implies Train/Region
            { id: "root_htt", lang: "ar", level: 1, word: "ح ط ط", pronunciation: "H-T-T", ipa: "ħ-tˤ-tˤ", meaning: "Root: Put down/Stop", type: "base", pos: "root", grammar: "action" },
            { id: "root_qwm", lang: "ar", level: 1, word: "ق و م", pronunciation: "Q-W-M", ipa: "q-w-m", meaning: "Root: Stand/Reside", type: "base", pos: "root", grammar: "action" },
            { id: "root_hjz", lang: "ar", level: 1, word: "ح ج ز", pronunciation: "H-J-Z", ipa: "ħ-dʒ-z", meaning: "Root: Block/Reserve", type: "base", pos: "root", grammar: "action" },
            { id: "root_fndq", lang: "ar", level: 1, word: "ف ن د ق", pronunciation: "F-N-D-Q", ipa: "f-n-d-q", meaning: "Root: Hotel/Inn", type: "base", pos: "root", grammar: "place" },
            { id: "root_qbl", lang: "ar", level: 1, word: "ق ب ل", pronunciation: "Q-B-L", ipa: "q-b-l", meaning: "Root: Accept/Front", type: "base", pos: "root", grammar: "action" },
            { id: "root_fth", lang: "ar", level: 1, word: "ف ت ح", pronunciation: "F-T-H", ipa: "f-t-ħ", meaning: "Root: Open", type: "base", pos: "root", grammar: "action" },
            { id: "root_ghrf", lang: "ar", level: 1, word: "غ ر ف", pronunciation: "Gh-R-F", ipa: "ɣ-r-f", meaning: "Root: Scoop/Room", type: "base", pos: "root", grammar: "place" },
            { id: "root_sjl", lang: "ar", level: 1, word: "س ج ل", pronunciation: "S-J-L", ipa: "s-dʒ-l", meaning: "Root: Record", type: "base", pos: "root", grammar: "action" },
            { id: "root_nshf", lang: "ar", level: 1, word: "ن ش ف", pronunciation: "N-Sh-F", ipa: "n-ʃ-f", meaning: "Root: Dry", type: "base", pos: "root", grammar: "action" },
            { id: "root_kyf", lang: "ar", level: 1, word: "ك ي ف", pronunciation: "K-Y-F", ipa: "k-j-f", meaning: "Root: How/Condition", type: "base", pos: "root" },
            { id: "root_khrt", lang: "ar", level: 1, word: "خ ر ط", pronunciation: "Kh-R-T", ipa: "x-r-tˤ", meaning: "Root: Map", type: "base", pos: "root", grammar: "place" },
            { id: "root_wst", lang: "ar", level: 1, word: "و س ط", pronunciation: "W-S-T", ipa: "w-s-tˤ", meaning: "Root: Middle/Center", type: "base", pos: "root", grammar: "place" },
            { id: "root_ymn", lang: "ar", level: 1, word: "ي م ن", pronunciation: "Y-M-N", ipa: "j-m-n", meaning: "Root: Right", type: "base", pos: "root", grammar: "place" },
            { id: "root_ysr", lang: "ar", level: 1, word: "ي س ر", pronunciation: "Y-S-R", ipa: "j-s-r", meaning: "Root: Left/Easy", type: "base", pos: "root", grammar: "place" },
            { id: "root_nfq", lang: "ar", level: 1, word: "ن ف ق", pronunciation: "N-F-Q", ipa: "n-f-q", meaning: "Root: Tunnel", type: "base", pos: "root", grammar: "place" },
            { id: "root_tks", lang: "ar", level: 1, word: "ت ك س", pronunciation: "T-K-S", ipa: "t-k-s", meaning: "Root: Taxi", type: "base", pos: "root", grammar: "place" },
            { id: "root_tam", lang: "ar", level: 1, word: "ط ع م", pronunciation: "T-'-M", ipa: "tˤ-ʕ-m", meaning: "Root: Taste/Food", type: "base", pos: "root", grammar: "action" },
            { id: "root_hsb", lang: "ar", level: 1, word: "ح س ب", pronunciation: "H-S-B", ipa: "ħ-s-b", meaning: "Root: Count/Account", type: "base", pos: "root", grammar: "action" },
            { id: "root_mwh", lang: "ar", level: 1, word: "م و ه", pronunciation: "M-W-H", ipa: "m-w-h", meaning: "Root: Water", type: "base", pos: "root" },
            { id: "root_ftr", lang: "ar", level: 1, word: "ف ط ر", pronunciation: "F-T-R", ipa: "f-tˤ-r", meaning: "Root: Break/Breakfast", type: "base", pos: "root", grammar: "action" },
            { id: "root_ghdy", lang: "ar", level: 1, word: "غ د ي", pronunciation: "Gh-D-Y", ipa: "ɣ-d-j", meaning: "Root: Lunch/Morning", type: "base", pos: "root", grammar: "action" },
            { id: "root_ashy", lang: "ar", level: 1, word: "ع ش ي", pronunciation: "'-Sh-Y", ipa: "ʕ-ʃ-j", meaning: "Root: Dinner/Evening", type: "base", pos: "root", grammar: "action" },
            { id: "root_ldh", lang: "ar", level: 1, word: "ل ذ ذ", pronunciation: "L-Dh-Dh", ipa: "l-ð-ð", meaning: "Root: Tasty", type: "base", pos: "root" },
            { id: "root_swq", lang: "ar", level: 1, word: "س و ق", pronunciation: "S-W-Q", ipa: "s-w-q", meaning: "Root: Market/Drive", type: "base", pos: "root", grammar: "place" },
            { id: "root_trq", lang: "ar", level: 1, word: "ط ر ق", pronunciation: "T-R-Q", ipa: "tˤ-r-q", meaning: "Root: Knock/Way", type: "base", pos: "root", grammar: "place" },
            { id: "root_njd", lang: "ar", level: 1, word: "ن ج د", pronunciation: "N-J-D", ipa: "n-dʒ-d", meaning: "Root: Help/Rescue", type: "base", pos: "root", grammar: "action" },
            { id: "root_shfy", lang: "ar", level: 1, word: "ش ف ي", pronunciation: "Sh-F-Y", ipa: "ʃ-f-j", meaning: "Root: Heal", type: "base", pos: "root", grammar: "action" },
            { id: "root_sdl", lang: "ar", level: 1, word: "ص د ل", pronunciation: "S-D-L", ipa: "sˤ-d-l", meaning: "Root: Pharmacy", type: "base", pos: "root", grammar: "place" },
            { id: "root_shrt", lang: "ar", level: 1, word: "ش ر ط", pronunciation: "Sh-R-T", ipa: "ʃ-r-tˤ", meaning: "Root: Condition/Police", type: "base", pos: "root", grammar: "agent" },
            { id: "root_dwr", lang: "ar", level: 1, word: "د و ر", pronunciation: "D-W-R", ipa: "d-w-r", meaning: "Root: Turn/Cycle", type: "base", pos: "root", grammar: "action" },
            { id: "root_nqd", lang: "ar", level: 1, word: "ن ق د", pronunciation: "N-Q-D", ipa: "n-q-d", meaning: "Root: Cash/Critique", type: "base", pos: "root", grammar: "action" },
            { id: "root_srf", lang: "ar", level: 1, word: "ص ر ف", pronunciation: "S-R-F", ipa: "sˤ-r-f", meaning: "Root: Spend/Change", type: "base", pos: "root", grammar: "action" },

            // --- NEW ROOTS FOR TOP 100 VERBS ---
            { id: "root_kwn", lang: "ar", level: 1, word: "ك و ن", pronunciation: "K-W-N", ipa: "k-w-n", meaning: "Root: Be/Exist", type: "base", pos: "root", grammar: "action" },
            { id: "root_fal", lang: "ar", level: 1, word: "ف ع ل", pronunciation: "F-'-L", ipa: "f-ʕ-l", meaning: "Root: Do/Act", type: "base", pos: "root", grammar: "action" },
            { id: "root_aml", lang: "ar", level: 1, word: "ع م ل", pronunciation: "'-M-L", ipa: "ʕ-m-l", meaning: "Root: Work/Do", type: "base", pos: "root", grammar: "action" },
            { id: "root_mlk", lang: "ar", level: 1, word: "م ل ك", pronunciation: "M-L-K", ipa: "m-l-k", meaning: "Root: Possess/King", type: "base", pos: "root", grammar: "agent" },
            { id: "root_twq", lang: "ar", level: 1, word: "ط و ع", pronunciation: "T-W-'", ipa: "tˤ-w-ʕ", meaning: "Root: Obey/Able", type: "base", pos: "root", grammar: "action" },
            { id: "root_sbh", lang: "ar", level: 1, word: "ص ب ح", pronunciation: "S-B-H", ipa: "sˤ-b-ħ", meaning: "Root: Morning/Become", type: "base", pos: "root", grammar: "action" },
            { id: "root_bda", lang: "ar", level: 1, word: "ب د أ", pronunciation: "B-D-'", ipa: "b-d-ʔ", meaning: "Root: Start", type: "base", pos: "root", grammar: "action" },
            { id: "root_nhy", lang: "ar", level: 1, word: "ن ه ي", pronunciation: "N-H-Y", ipa: "n-h-j", meaning: "Root: End/Forbid", type: "base", pos: "root", grammar: "action" },
            { id: "root_hdth", lang: "ar", level: 1, word: "ح د ث", pronunciation: "H-D-Th", ipa: "ħ-d-θ", meaning: "Root: Happen/Speak", type: "base", pos: "root", grammar: "action" },
            { id: "root_ghyr", lang: "ar", level: 1, word: "غ ي ر", pronunciation: "Gh-Y-R", ipa: "ɣ-j-r", meaning: "Root: Change", type: "base", pos: "root", grammar: "action" },
            { id: "root_dhb", lang: "ar", level: 1, word: "ذ ه ب", pronunciation: "Dh-H-B", ipa: "ð-h-b", meaning: "Root: Go/Gold", type: "base", pos: "root", grammar: "action" },
            { id: "root_jy", lang: "ar", level: 1, word: "ج ي أ", pronunciation: "J-Y-'", ipa: "dʒ-j-ʔ", meaning: "Root: Come", type: "base", pos: "root", grammar: "action" },
            { id: "root_khrj", lang: "ar", level: 1, word: "خ ر ج", pronunciation: "Kh-R-J", ipa: "x-r-dʒ", meaning: "Root: Exit", type: "base", pos: "root", grammar: "action" },
            { id: "root_dkhl", lang: "ar", level: 1, word: "د خ ل", pronunciation: "D-Kh-L", ipa: "d-x-l", meaning: "Root: Enter", type: "base", pos: "root", grammar: "action" },
            { id: "root_rja", lang: "ar", level: 1, word: "ر ج ع", pronunciation: "R-J-'", ipa: "r-dʒ-ʕ", meaning: "Root: Return", type: "base", pos: "root", grammar: "action" },
            { id: "root_mshy", lang: "ar", level: 1, word: "م ش ي", pronunciation: "M-Sh-Y", ipa: "m-ʃ-j", meaning: "Root: Walk", type: "base", pos: "root", grammar: "action" },
            { id: "root_rkd", lang: "ar", level: 1, word: "ر ك ض", pronunciation: "R-K-D", ipa: "r-k-dˤ", meaning: "Root: Run", type: "base", pos: "root", grammar: "action" },
            { id: "root_jls", lang: "ar", level: 1, word: "ج ل س", pronunciation: "J-L-S", ipa: "dʒ-l-s", meaning: "Root: Sit", type: "base", pos: "root", grammar: "action" },
            { id: "root_sqt", lang: "ar", level: 1, word: "س ق ط", pronunciation: "S-Q-T", ipa: "s-q-tˤ", meaning: "Root: Fall", type: "base", pos: "root", grammar: "action" },
            { id: "root_sad", lang: "ar", level: 1, word: "ص ع د", pronunciation: "S-'-D", ipa: "sˤ-ʕ-d", meaning: "Root: Ascend", type: "base", pos: "root", grammar: "action" },
            { id: "root_nzl", lang: "ar", level: 1, word: "ن ز ل", pronunciation: "N-Z-L", ipa: "n-z-l", meaning: "Root: Descend/Stay", type: "base", pos: "root", grammar: "action" },
            { id: "root_ray", lang: "ar", level: 1, word: "ر أ ي", pronunciation: "R-'-Y", ipa: "r-ʔ-j", meaning: "Root: See/View", type: "base", pos: "root", grammar: "action" },
            { id: "root_nzr", lang: "ar", level: 1, word: "ن ظ ر", pronunciation: "N-Z-R", ipa: "n-zˤ-r", meaning: "Root: Look/View", type: "base", pos: "root", grammar: "action" },
            { id: "root_sma", lang: "ar", level: 1, word: "س م ع", pronunciation: "S-M-'", ipa: "s-m-ʕ", meaning: "Root: Hear", type: "base", pos: "root", grammar: "action" },
            { id: "root_shar", lang: "ar", level: 1, word: "ش ع ر", pronunciation: "Sh-'-R", ipa: "ʃ-ʕ-r", meaning: "Root: Feel/Hair", type: "base", pos: "root", grammar: "action" },
            { id: "root_lms", lang: "ar", level: 1, word: "ل م س", pronunciation: "L-M-S", ipa: "l-m-s", meaning: "Root: Touch", type: "base", pos: "root", grammar: "action" },
            { id: "root_dhwq", lang: "ar", level: 1, word: "ذ و ق", pronunciation: "Dh-W-Q", ipa: "ð-w-q", meaning: "Root: Taste", type: "base", pos: "root", grammar: "action" },
            { id: "root_bdw", lang: "ar", level: 1, word: "ب د و", pronunciation: "B-D-W", ipa: "b-d-w", meaning: "Root: Seem/Bedouin", type: "base", pos: "root", grammar: "agent" },
            { id: "root_arf", lang: "ar", level: 1, word: "ع ر ف", pronunciation: "'-R-F", ipa: "ʕ-r-f", meaning: "Root: Know", type: "base", pos: "root", grammar: "action" },
            { id: "root_fhm", lang: "ar", level: 1, word: "ف ه م", pronunciation: "F-H-M", ipa: "f-h-m", meaning: "Root: Understand", type: "base", pos: "root", grammar: "action" },
            { id: "root_fkr", lang: "ar", level: 1, word: "ف ك ر", pronunciation: "F-K-R", ipa: "f-k-r", meaning: "Root: Think", type: "base", pos: "root", grammar: "action" },
            { id: "root_aqd", lang: "ar", level: 1, word: "ع ق د", pronunciation: "'-Q-D", ipa: "ʕ-q-d", meaning: "Root: Knot/Belief", type: "base", pos: "root", grammar: "action" },
            { id: "root_rwd", lang: "ar", level: 1, word: "ر و د", pronunciation: "R-W-D", ipa: "r-w-d", meaning: "Root: Want/Seek", type: "base", pos: "root", grammar: "action" },
            { id: "root_hbb", lang: "ar", level: 1, word: "ح ب ب", pronunciation: "H-B-B", ipa: "ħ-b-b", meaning: "Root: Love", type: "base", pos: "root", grammar: "action" },
            { id: "root_krh", lang: "ar", level: 1, word: "ك ر ه", pronunciation: "K-R-H", ipa: "k-r-h", meaning: "Root: Hate", type: "base", pos: "root", grammar: "action" },
            { id: "root_nsy", lang: "ar", level: 1, word: "ن س ي", pronunciation: "N-S-Y", ipa: "n-s-j", meaning: "Root: Forget", type: "base", pos: "root", grammar: "action" },
            { id: "root_khwf", lang: "ar", level: 1, word: "خ و ف", pronunciation: "Kh-W-F", ipa: "x-w-f", meaning: "Root: Fear", type: "base", pos: "root", grammar: "action" },
            { id: "root_qrr", lang: "ar", level: 1, word: "ق ر ر", pronunciation: "Q-R-R", ipa: "q-r-r", meaning: "Root: Decide/Settle", type: "base", pos: "root", grammar: "action" },
            { id: "root_alm", lang: "ar", level: 1, word: "ع ل م", pronunciation: "'-L-M", ipa: "ʕ-l-m", meaning: "Root: Know/Science", type: "base", pos: "root", grammar: "action" },
            { id: "root_qwl", lang: "ar", level: 1, word: "ق و ل", pronunciation: "Q-W-L", ipa: "q-w-l", meaning: "Root: Say", type: "base", pos: "root", grammar: "action" },
            { id: "root_klm", lang: "ar", level: 1, word: "ك ل م", pronunciation: "K-L-M", ipa: "k-l-m", meaning: "Root: Speak/Word", type: "base", pos: "root", grammar: "action" },
            { id: "root_sal", lang: "ar", level: 1, word: "س أ ل", pronunciation: "S-'-L", ipa: "s-ʔ-l", meaning: "Root: Ask", type: "base", pos: "root", grammar: "action" },
            { id: "root_jwb", lang: "ar", level: 1, word: "ج و ب", pronunciation: "J-W-B", ipa: "dʒ-w-b", meaning: "Root: Answer", type: "base", pos: "root", grammar: "action" },
            { id: "root_qra", lang: "ar", level: 1, word: "ق ر أ", pronunciation: "Q-R-'", ipa: "q-r-ʔ", meaning: "Root: Read", type: "base", pos: "root", grammar: "action" },
            { id: "root_srkh", lang: "ar", level: 1, word: "ص ر خ", pronunciation: "S-R-Kh", ipa: "sˤ-r-x", meaning: "Root: Scream", type: "base", pos: "root", grammar: "action" },
            { id: "root_shrh", lang: "ar", level: 1, word: "ش ر ح", pronunciation: "Sh-R-H", ipa: "ʃ-r-ħ", meaning: "Root: Explain", type: "base", pos: "root", grammar: "action" },
            { id: "root_trjm", lang: "ar", level: 1, word: "ت ر ج م", pronunciation: "T-R-J-M", ipa: "t-r-dʒ-m", meaning: "Root: Translate", type: "base", pos: "root", grammar: "action" },
            { id: "root_nwm", lang: "ar", level: 1, word: "ن و م", pronunciation: "N-W-M", ipa: "n-w-m", meaning: "Root: Sleep", type: "base", pos: "root", grammar: "action" },
            { id: "root_yqz", lang: "ar", level: 1, word: "ي ق ظ", pronunciation: "Y-Q-Z", ipa: "j-q-zˤ", meaning: "Root: Wake/Alert", type: "base", pos: "root", grammar: "action" },
            { id: "root_shry", lang: "ar", level: 1, word: "ش ر ي", pronunciation: "Sh-R-Y", ipa: "ʃ-r-j", meaning: "Root: Buy", type: "base", pos: "root", grammar: "action" },
            { id: "root_bya", lang: "ar", level: 1, word: "ب ي ع", pronunciation: "B-Y-'", ipa: "b-j-ʕ", meaning: "Root: Sell", type: "base", pos: "root", grammar: "action" },
            { id: "root_dfa", lang: "ar", level: 1, word: "د ف ع", pronunciation: "D-F-'", ipa: "d-f-ʕ", meaning: "Root: Push/Pay", type: "base", pos: "root", grammar: "action" },
            { id: "root_akhdh", lang: "ar", level: 1, word: "أ خ ذ", pronunciation: "'-Kh-Dh", ipa: "ʔ-x-ð", meaning: "Root: Take", type: "base", pos: "root", grammar: "action" },
            { id: "root_aty", lang: "ar", level: 1, word: "أ ت ي", pronunciation: "'-T-Y", ipa: "ʔ-t-j", meaning: "Root: Come/Give", type: "base", pos: "root", grammar: "action" },
            { id: "root_lbs", lang: "ar", level: 1, word: "ل ب س", pronunciation: "L-B-S", ipa: "l-b-s", meaning: "Root: Wear", type: "base", pos: "root", grammar: "action" },
            { id: "root_khla", lang: "ar", level: 1, word: "خ ل ع", pronunciation: "Kh-L-'", ipa: "x-l-ʕ", meaning: "Root: Remove", type: "base", pos: "root", grammar: "action" },
            { id: "root_ghsl", lang: "ar", level: 1, word: "غ س ل", pronunciation: "Gh-S-L", ipa: "ɣ-s-l", meaning: "Root: Wash", type: "base", pos: "root", grammar: "action" },
            { id: "root_tbkh", lang: "ar", level: 1, word: "ط ب خ", pronunciation: "T-B-Kh", ipa: "tˤ-b-x", meaning: "Root: Cook", type: "base", pos: "root", grammar: "action" },
            { id: "root_aysh", lang: "ar", level: 1, word: "ع ي ش", pronunciation: "'-Y-Sh", ipa: "ʕ-j-ʃ", meaning: "Root: Live", type: "base", pos: "root", grammar: "action" },
            { id: "root_mwt", lang: "ar", level: 1, word: "م و ت", pronunciation: "M-W-T", ipa: "m-w-t", meaning: "Root: Die", type: "base", pos: "root", grammar: "action" },
            { id: "root_wda", lang: "ar", level: 1, word: "و ض ع", pronunciation: "W-D-'", ipa: "w-dˤ-ʕ", meaning: "Root: Put/Place", type: "base", pos: "root", grammar: "action" },
            { id: "root_khdm", lang: "ar", level: 1, word: "خ د م", pronunciation: "Kh-D-M", ipa: "x-d-m", meaning: "Root: Serve/Use", type: "base", pos: "root", grammar: "action" },
            { id: "root_bhth", lang: "ar", level: 1, word: "ب ح ث", pronunciation: "B-H-Th", ipa: "b-ħ-θ", meaning: "Root: Search", type: "base", pos: "root", grammar: "action" },
            { id: "root_wjd", lang: "ar", level: 1, word: "و ج د", pronunciation: "W-J-D", ipa: "w-dʒ-d", meaning: "Root: Find/Exist", type: "base", pos: "root", grammar: "action" },
            { id: "root_fqd", lang: "ar", level: 1, word: "ف ق د", pronunciation: "F-Q-D", ipa: "f-q-d", meaning: "Root: Lose/Miss", type: "base", pos: "root", grammar: "action" },
            { id: "root_shb", lang: "ar", level: 1, word: "س ح ب", pronunciation: "S-H-B", ipa: "s-ħ-b", meaning: "Root: Pull", type: "base", pos: "root", grammar: "action" },
            { id: "root_wld", lang: "ar", level: 1, word: "و ل د", pronunciation: "W-L-D", ipa: "w-l-d", meaning: "Root: Give Birth", type: "base", pos: "root", grammar: "action" },

            // --- NEW GRAMMAR ROOTS ---
            { id: "root_dwm", lang: "ar", level: 1, word: "د و م", pronunciation: "D-W-M", ipa: "d-w-m", meaning: "Root: Last/Endure", type: "base", pos: "root", grammar: "action" },
            { id: "root_awn", lang: "ar", level: 1, word: "أ و ن", pronunciation: "'-W-N", ipa: "ʔ-w-n", meaning: "Root: Time/Now", type: "base", pos: "root" },
            { id: "root_kwn_g", lang: "ar", level: 1, word: "ك و ن", pronunciation: "K-W-N", ipa: "k-w-n", meaning: "Root: Be/Exist", type: "base", pos: "root", grammar: "action" },
            { id: "root_lys", lang: "ar", level: 1, word: "ل ي س", pronunciation: "L-Y-S", ipa: "l-j-s", meaning: "Root: Not be", type: "base", pos: "root" },
            { id: "root_kyf_g", lang: "ar", level: 1, word: "ك ي ف", pronunciation: "K-Y-F", ipa: "k-j-f", meaning: "Root: How/Manner", type: "base", pos: "root" },
            { id: "root_kmm", lang: "ar", level: 1, word: "ك م م", pronunciation: "K-M-M", ipa: "k-m-m", meaning: "Root: Quantity", type: "base", pos: "root" },
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
            { id: "g_zh_pron_1", lang: "zh", level: 1, word: "我", pronunciation: "wǒ", ipa: "wɔ˨˩˦", meaning: "I / Me", type: "base", pos: "pronoun" },
            { id: "g_zh_pron_2", lang: "zh", level: 1, word: "你", pronunciation: "nǐ", ipa: "ni˨˩˦", meaning: "You", type: "base", pos: "pronoun" },
            
            // Lui (Radicale Uomo) -> Richiede Uomo
            { id: "g_zh_pron_3", lang: "zh", level: 2, word: "他", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "He / Him", type: "derived", requires: ["rad_uomo"], pos: "pronoun" },
            
            // Lei (Radicale Donna) -> Richiede Donna
            { id: "g_zh_pron_4", lang: "zh", level: 2, word: "她", pronunciation: "tā", ipa: "tʰa⁵⁵", meaning: "She / Her", type: "derived", requires: ["rad_donna"], pos: "pronoun" },
            
            // Plurali (Persona + Porta = Men) -> Richiedono Uomo e Porta
            { id: "g_zh_pron_5", lang: "zh", level: 2, word: "我们", pronunciation: "wǒmen", ipa: "wɔ˨˩˦ mən", meaning: "We / Us", type: "derived", requires: ["g_zh_pron_1", "rad_uomo", "rad_porta"], pos: "pronoun" },
            { id: "g_zh_pron_6", lang: "zh", level: 2, word: "你们", pronunciation: "nǐmen", ipa: "ni˨˩˦ mən", meaning: "You (plural)", type: "derived", requires: ["g_zh_pron_2", "rad_uomo", "rad_porta"], pos: "pronoun" },
            { id: "g_zh_pron_7", lang: "zh", level: 3, word: "他们", pronunciation: "tāmen", ipa: "tʰa⁵⁵ mən", meaning: "They / Them", type: "derived", requires: ["g_zh_pron_3", "rad_uomo", "rad_porta"], pos: "pronoun" },

            // --- NEGATION ---
            { id: "g_zh_neg_1", lang: "zh", level: 1, word: "不", pronunciation: "bù", ipa: "pu⁵¹", meaning: "No / Not", type: "base", pos: "adverb" },
            
            // Non avere (Acqua + ...) -> Richiede Acqua
            { id: "g_zh_neg_2", lang: "zh", level: 2, word: "没", pronunciation: "méi", ipa: "meɪ̯˧˥", meaning: "No / Not (have)", type: "derived", requires: ["rad_acqua"], pos: "adverb" },

            // --- STRUCTURAL PARTICLES ---
            // De (Bianco + Cucchiaio) -> Richiede Bianco (dai colori)
            { id: "g_zh_part_1", lang: "zh", level: 2, word: "的", pronunciation: "de", ipa: "tə", meaning: "Possessive particle", type: "derived", requires: ["col_zh1"], pos: "particle" },
            
            // Ma (Bocca + Cavallo) -> Richiede Bocca e Cavallo
            { id: "g_zh_part_2", lang: "zh", level: 2, word: "吗", pronunciation: "ma", ipa: "ma", meaning: "Question particle (?)", type: "derived", requires: ["rad_bocca", "rad_cavallo"], pos: "particle" },
            
            { id: "g_zh_part_3", lang: "zh", level: 2, word: "了", pronunciation: "le", ipa: "lə", meaning: "Completed action", type: "base", pos: "particle" },
            { id: "g_zh_part_4", lang: "zh", level: 1, word: "很", pronunciation: "hěn", ipa: "xən˨˩˦", meaning: "Very", type: "base", pos: "adverb" },
            
            // E (Grano + Bocca) -> Richiede Bocca
            { id: "g_zh_part_5", lang: "zh", level: 2, word: "和", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "And", type: "derived", requires: ["rad_bocca"], pos: "conjunction" },

            // --- CLASSIFIERS (MEASURE WORDS) ---
            // Ge (Uomo + Bastone) -> Richiede Uomo
            { id: "g_zh_cl_1", lang: "zh", level: 2, word: "个", pronunciation: "gè", ipa: "kɤ⁵¹", meaning: "Generic classifier", type: "derived", requires: ["rad_uomo"], pos: "classifier", grammar: "measure" },
            
            // Zhi (Bocca + ...) -> Richiede Bocca
            { id: "g_zh_cl_2", lang: "zh", level: 2, word: "只", pronunciation: "zhī", ipa: "ʈʂʐ̩⁵⁵", meaning: "Classifier (small animals)", type: "derived", requires: ["rad_bocca"], pos: "classifier", grammar: "measure" },
            
            { id: "g_zh_cl_3", lang: "zh", level: 2, word: "条", pronunciation: "tiáo", ipa: "tʰjɑʊ̯˧˥", meaning: "Classifier (long things)", type: "base", pos: "classifier", grammar: "measure" },
            
            // Ben (Albero + Linea) -> Richiede Albero
            { id: "g_zh_cl_4", lang: "zh", level: 2, word: "本", pronunciation: "běn", ipa: "pən˨˩˦", meaning: "Classifier (books)", type: "derived", requires: ["rad_albero"], pos: "classifier", grammar: "measure" },

            // --- DEMONSTRATIVES & INTERROGATIVES ---
            { id: "g_zh_dem_1", lang: "zh", level: 1, word: "这", pronunciation: "zhè", ipa: "ʈʂɤ⁵¹", meaning: "This", type: "base", pos: "pronoun" },
            { id: "g_zh_dem_2", lang: "zh", level: 1, word: "那", pronunciation: "nà", ipa: "na⁵¹", meaning: "That", type: "base", pos: "pronoun" },
            { id: "g_zh_dem_3", lang: "zh", level: 2, word: "这里", pronunciation: "zhèlǐ", ipa: "ʈʂɤ⁵¹ li˨˩˦", meaning: "Here", type: "derived", requires: ["g_zh_dem_1"], pos: "place", grammar: "place" },
            { id: "g_zh_dem_4", lang: "zh", level: 2, word: "那里", pronunciation: "nàlǐ", ipa: "na⁵¹ li˨˩˦", meaning: "There", type: "derived", requires: ["g_zh_dem_2"], pos: "place", grammar: "place" },
            
            // Cosa (Uomo + Dieci) -> Richiede Uomo
            { id: "g_zh_int_1", lang: "zh", level: 2, word: "什么", pronunciation: "shénme", ipa: "ʂən˧˥ mə", meaning: "What?", type: "derived", requires: ["rad_uomo"], pos: "pronoun" },
            
            // Dove (Bocca + ...) -> Richiede Bocca
            { id: "g_zh_int_2", lang: "zh", level: 2, word: "哪儿", pronunciation: "nǎr", ipa: "na˨˩˦ ɑɻ", meaning: "Where?", type: "derived", requires: ["rad_bocca"], pos: "pronoun", grammar: "place" },
            
            // Chi (Parola + ...) -> Richiede Parola
            { id: "g_zh_int_3", lang: "zh", level: 2, word: "谁", pronunciation: "shéi", ipa: "ʂeɪ̯˧˥", meaning: "Who?", type: "derived", requires: ["rad_parola"], pos: "pronoun" },

            // --- COMBINATIONS FROM FUNDAMENTALS ---
            // Attento (Piccolo Cuore)
            { id: "adj_zh_combo_1", lang: "zh", level: 2, word: "小心", pronunciation: "xiǎoxīn", ipa: "ɕjɑʊ̯²¹⁴ ɕin⁵⁵", meaning: "Careful", type: "derived", requires: ["base_piccolo", "rad_cuore"], pos: "adj" },
            // Felice (Cuore Aperto)
            { id: "adj_zh_combo_2", lang: "zh", level: 2, word: "开心", pronunciation: "kāixīn", ipa: "kʰaɪ̯⁵⁵ ɕin⁵⁵", meaning: "Happy", type: "derived", requires: ["v_zh_top_75", "rad_cuore"], pos: "adj" },
            // Bello (Buono da Guardare)
            { id: "adj_zh_combo_3", lang: "zh", level: 2, word: "好看", pronunciation: "hǎokàn", ipa: "xɑʊ̯²¹⁴ kʰan⁵¹", meaning: "Good-looking / Beautiful", type: "derived", requires: ["base_buono", "v_zh_top_23"], pos: "adj" },
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
            { id: "g_ja_pron_1", lang: "ja", level: 1, word: "私", pronunciation: "watashi", ipa: "wataɕi", meaning: "I / Me", type: "base", pos: "pronoun" },
            { id: "g_ja_pron_2", lang: "ja", level: 1, word: "あなた", pronunciation: "anata", ipa: "anata", meaning: "You", type: "base", pos: "pronoun" },
            { id: "g_ja_pron_3", lang: "ja", level: 2, word: "彼", pronunciation: "kare", ipa: "kaɾe", meaning: "He / Him", type: "base", pos: "pronoun" },
            
            // Lei (Donna + Quella) -> Richiede Donna
            { id: "g_ja_pron_4", lang: "ja", level: 2, word: "彼女", pronunciation: "kanojo", ipa: "kanodʑo", meaning: "She / Her", type: "derived", requires: ["rad_donna_ja"], pos: "pronoun" },

            // --- FUNDAMENTAL PARTICLES (All Base - Hiragana) ---
            { id: "g_ja_part_1", lang: "ja", level: 1, word: "は", pronunciation: "wa", ipa: "wa", meaning: "Topic Marker", type: "base", pos: "particle" },
            { id: "g_ja_part_2", lang: "ja", level: 1, word: "を", pronunciation: "o", ipa: "o", meaning: "Object Marker", type: "base", pos: "particle" },
            { id: "g_ja_part_3", lang: "ja", level: 1, word: "に", pronunciation: "ni", ipa: "ɲi", meaning: "To / In", type: "base", pos: "particle" },
            { id: "g_ja_part_4", lang: "ja", level: 1, word: "で", pronunciation: "de", ipa: "de", meaning: "By / At", type: "base", pos: "particle" },
            { id: "g_ja_part_5", lang: "ja", level: 1, word: "の", pronunciation: "no", ipa: "no", meaning: "Possessive Particle", type: "base", pos: "particle" },
            { id: "g_ja_part_6", lang: "ja", level: 2, word: "が", pronunciation: "ga", ipa: "ɡa", meaning: "Subject Marker", type: "base", pos: "particle" },
            { id: "g_ja_part_7", lang: "ja", level: 1, word: "か", pronunciation: "ka", ipa: "ka", meaning: "Question Particle", type: "base", pos: "particle" },
            { id: "g_ja_part_8", lang: "ja", level: 1, word: "と", pronunciation: "to", ipa: "to", meaning: "And", type: "base", pos: "particle" },
            { id: "g_ja_part_9", lang: "ja", level: 1, word: "も", pronunciation: "mo", ipa: "mo", meaning: "Also / Too", type: "base", pos: "particle" },

            // --- AUXILIARY VERBS ---
            { id: "g_ja_aux_1", lang: "ja", level: 1, word: "です", pronunciation: "desu", ipa: "desɯ", meaning: "To Be (polite)", type: "base", pos: "auxiliary" },
            { id: "g_ja_aux_2", lang: "ja", level: 1, word: "ます", pronunciation: "masu", ipa: "masɯ", meaning: "Polite verb suffix", type: "base", pos: "suffix" },
            { id: "g_ja_aux_3", lang: "ja", level: 1, word: "あります", pronunciation: "arimasu", ipa: "aɾimasɯ", meaning: "To Exist (inanimate)", type: "base", pos: "verb", grammar: "godan" },
            { id: "g_ja_aux_4", lang: "ja", level: 1, word: "います", pronunciation: "imasu", ipa: "imasɯ", meaning: "To Exist (living)", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "g_ja_aux_5", lang: "ja", level: 1, word: "ません", pronunciation: "masen", ipa: "maseɴ", meaning: "Not (Polite negation)", type: "base", pos: "suffix" },

            // --- DEMONSTRATIVES (Base) ---
            { id: "g_ja_dem_1", lang: "ja", level: 1, word: "これ", pronunciation: "kore", ipa: "koɾe", meaning: "This", type: "base", pos: "pronoun" },
            { id: "g_ja_dem_2", lang: "ja", level: 1, word: "それ", pronunciation: "sore", ipa: "soɾe", meaning: "That", type: "base", pos: "pronoun" },
            { id: "g_ja_dem_3", lang: "ja", level: 1, word: "あれ", pronunciation: "are", ipa: "aɾe", meaning: "That (over there)", type: "base", pos: "pronoun" },
            { id: "g_ja_dem_4", lang: "ja", level: 1, word: "ここ", pronunciation: "koko", ipa: "koko", meaning: "Here", type: "base", pos: "place", grammar: "place" },
            { id: "g_ja_dem_5", lang: "ja", level: 1, word: "そこ", pronunciation: "soko", ipa: "soko", meaning: "There", type: "base", pos: "place", grammar: "place" },
            { id: "g_ja_dem_6", lang: "ja", level: 1, word: "あそこ", pronunciation: "asoko", ipa: "asoko", meaning: "Over there", type: "base", pos: "place", grammar: "place" },
            
            // --- INTERROGATIVES ---
            // Cosa (Uomo a sinistra) -> Richiede Uomo
            { id: "g_ja_int_1", lang: "ja", level: 2, word: "何", pronunciation: "nani", ipa: "naɲi", meaning: "What?", type: "derived", requires: ["rad_uomo_ja"], pos: "pronoun" },
            
            // Chi (Parola a sinistra) -> Richiede Parola
            { id: "g_ja_int_2", lang: "ja", level: 2, word: "誰", pronunciation: "dare", ipa: "daɾe", meaning: "Who?", type: "derived", requires: ["rad_parola_ja"], pos: "pronoun" },
            
            { id: "g_ja_int_3", lang: "ja", level: 1, word: "どこ", pronunciation: "doko", ipa: "doko", meaning: "Where?", type: "base", pos: "pronoun", grammar: "place" },
            { id: "g_ja_int_4", lang: "ja", level: 1, word: "いつ", pronunciation: "itsu", ipa: "itsɯ", meaning: "When?", type: "base", pos: "pronoun" },

            // --- COMBINATIONS FROM FUNDAMENTALS ---
            { id: "adj_ja_combo_1", lang: "ja", level: 2, word: "下手", pronunciation: "へた", ipa: "heta", meaning: "Unskilled / Poor at", type: "derived", requires: ["base_sotto_ja", "rad_mano_ja"], pos: "adj", grammar: "na-adj" },
            { id: "n_ja_combo_6", lang: "ja", level: 2, word: "電力", pronunciation: "でんりょく", ipa: "denɾʲokɯ", meaning: "Electric Power", type: "derived", requires: ["rad_elettricita_ja", "rad_forza_ja"], pos: "noun" },
            // Bravo/Abile (Sopra + Mano) -> La tua mano è di "alto livello"
            { id: "adj_ja_combo_2", lang: "ja", level: 2, word: "上手", pronunciation: "じょうず", ipa: "dʑoːzɯ", meaning: "Skillful / Good at", type: "derived", requires: ["base_sopra_ja", "rad_mano_ja"], pos: "adj", grammar: "na-adj" },
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
            { id: "g_ar_pron_1", lang: "ar", level: 1, word: "أَنَا", pronunciation: "ana", ipa: "ʔana", meaning: "I", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_pron_2", lang: "ar", level: 1, word: "أَنْتَ", pronunciation: "anta", ipa: "ʔanta", meaning: "You (male)", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_pron_3", lang: "ar", level: 1, word: "أَنْتِ", pronunciation: "anti", ipa: "ʔanti", meaning: "You (female)", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_pron_4", lang: "ar", level: 1, word: "هُوَ", pronunciation: "huwa", ipa: "huwa", meaning: "He", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_pron_5", lang: "ar", level: 1, word: "هِيَ", pronunciation: "hiya", ipa: "hija", meaning: "She", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_pron_6", lang: "ar", level: 1, word: "نَحْنُ", pronunciation: "naḥnu", ipa: "naħnu", meaning: "We", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_pron_7", lang: "ar", level: 1, word: "هُمْ", pronunciation: "hum", ipa: "hum", meaning: "They", type: "base", pos: "pronoun", grammar: "agent" },

            // --- SUFFIX PRONOUNS (POSSESSIVE / OBJECT) ---
            { id: "g_ar_suff_1", lang: "ar", level: 1, word: "ـِي", pronunciation: "-ī", ipa: "iː", meaning: "My / Me (suffix)", type: "base", pos: "suffix", grammar: "agent" },
            { id: "g_ar_suff_2", lang: "ar", level: 1, word: "ـكَ", pronunciation: "-ka", ipa: "ka", meaning: "Your / You (male suffix)", type: "base", pos: "suffix", grammar: "agent" },
            { id: "g_ar_suff_3", lang: "ar", level: 1, word: "ـكِ", pronunciation: "-ki", ipa: "ki", meaning: "Your / You (female suffix)", type: "base", pos: "suffix", grammar: "agent" },
            { id: "g_ar_suff_4", lang: "ar", level: 1, word: "ـهُ", pronunciation: "-hu", ipa: "hu", meaning: "His / Him (suffix)", type: "base", pos: "suffix", grammar: "agent" },
            { id: "g_ar_suff_5", lang: "ar", level: 1, word: "ـهَا", pronunciation: "-hā", ipa: "haː", meaning: "Her / Her (suffix)", type: "base", pos: "suffix", grammar: "agent" },
            { id: "g_ar_suff_6", lang: "ar", level: 1, word: "ـنَا", pronunciation: "-nā", ipa: "naː", meaning: "Our / Us (suffix)", type: "base", pos: "suffix", grammar: "agent" },

            // --- PSEUDO-VERBS (TO HAVE) ---
            { id: "g_ar_have_1", lang: "ar", level: 1, word: "عِنْدَ", pronunciation: "'inda", ipa: "ʕinda", meaning: "At / To have", type: "base", pos: "preposition" },
            { id: "g_ar_have_2", lang: "ar", level: 1, word: "لِـ", pronunciation: "li-", ipa: "li", meaning: "To / For / To have", type: "base", pos: "preposition" },

            // --- DEMONSTRATIVES ---
            { id: "g_ar_dem_1", lang: "ar", level: 1, word: "هَذَا", pronunciation: "hādhā", ipa: "haːðaː", meaning: "This (male)", type: "base", pos: "pronoun" },
            { id: "g_ar_dem_2", lang: "ar", level: 1, word: "هَذِهِ", pronunciation: "hādhihi", ipa: "haːðihi", meaning: "This (female)", type: "base", pos: "pronoun" },
            { id: "g_ar_dem_3", lang: "ar", level: 1, word: "ذَلِكَ", pronunciation: "dhālika", ipa: "ðaːlika", meaning: "That (male/distant)", type: "base", pos: "pronoun" },
            { id: "g_ar_dem_4", lang: "ar", level: 1, word: "تِلْكَ", pronunciation: "tilka", ipa: "tilka", meaning: "That (female/distant)", type: "base", pos: "pronoun" },
            { id: "g_ar_dem_5", lang: "ar", level: 1, word: "هُنَا", pronunciation: "hunā", ipa: "hunaː", meaning: "Here", type: "base", pos: "place", grammar: "place" },
            { id: "g_ar_dem_6", lang: "ar", level: 1, word: "هُنَاكَ", pronunciation: "hunāka", ipa: "hunaːka", meaning: "There", type: "base", pos: "place", grammar: "place" },

            // --- PREPOSITIONS & PARTICLES ---
            { id: "g_ar_prep_1", lang: "ar", level: 1, word: "فِي", pronunciation: "fī", ipa: "fiː", meaning: "In / Inside", type: "base", pos: "preposition", grammar: "place" },
            { id: "g_ar_prep_2", lang: "ar", level: 1, word: "إِلَى", pronunciation: "ilā", ipa: "ʔilaː", meaning: "To / Towards", type: "base", pos: "preposition", grammar: "place" },
            { id: "g_ar_prep_3", lang: "ar", level: 1, word: "مِنْ", pronunciation: "min", ipa: "min", meaning: "From", type: "base", pos: "preposition", grammar: "place" },
            { id: "g_ar_prep_4", lang: "ar", level: 1, word: "عَلَى", pronunciation: "alā", ipa: "ʕalaː", meaning: "On / Upon", type: "base", pos: "preposition", grammar: "place" },
            { id: "g_ar_prep_5", lang: "ar", level: 1, word: "بِـ", pronunciation: "bi", ipa: "bi", meaning: "With (means) / By", type: "base", pos: "preposition" },
            { id: "g_ar_prep_6", lang: "ar", level: 1, word: "مَعَ", pronunciation: "ma'a", ipa: "maʕa", meaning: "With (company)", type: "base", pos: "preposition" },
            { id: "g_ar_part_1", lang: "ar", level: 1, word: "الـ", pronunciation: "al-", ipa: "al", meaning: "The (Definite Article)", type: "base", pos: "article" },
            
            // --- CONJUNCTIONS & ADVERBS ---
            { id: "g_ar_conj_1", lang: "ar", level: 1, word: "وَ", pronunciation: "wa", ipa: "wa", meaning: "And", type: "base", pos: "conjunction" },
            { id: "g_ar_conj_2", lang: "ar", level: 1, word: "لَكِنْ", pronunciation: "lākin", ipa: "laːkin", meaning: "But / However", type: "base", pos: "conjunction" },
            { id: "g_ar_conj_3", lang: "ar", level: 1, word: "أَوْ", pronunciation: "aw", ipa: "ʔaw", meaning: "Or", type: "base", pos: "conjunction" },
            { id: "g_ar_conj_4", lang: "ar", level: 1, word: "لِأَنَّ", pronunciation: "li'anna", ipa: "liʔanna", meaning: "Because", type: "base", pos: "conjunction" },
            
            // Adesso (Tempo) -> Richiede Radice Tempo
            { id: "g_ar_adv_1", lang: "ar", level: 2, word: "الْآنَ", pronunciation: "al-ān", ipa: "al ʔaːn", meaning: "Now", type: "derived", requires: ["root_awn"], pos: "adverb" },
            
            // Sempre (Durare) -> Richiede Radice Durare
            { id: "g_ar_adv_2", lang: "ar", level: 2, word: "دَائِمًا", pronunciation: "dā'iman", ipa: "daːʔiman", meaning: "Always", type: "derived", requires: ["root_dwm"], pos: "adverb" },
            
            // --- NEGATION & INTERROGATIVES ---
            { id: "g_ar_neg_1", lang: "ar", level: 1, word: "لَا", pronunciation: "lā", ipa: "laː", meaning: "No / Not", type: "base", pos: "adverb" },
            
            // Non Essere (Radice LYS) -> Richiede Radice LYS
            { id: "g_ar_neg_2", lang: "ar", level: 2, word: "لَيْسَ", pronunciation: "laysa", ipa: "lajsa", meaning: "Is not", type: "derived", requires: ["root_lys"], pos: "verb" },
            
            { id: "g_ar_int_1", lang: "ar", level: 1, word: "مَا / مَاذَا", pronunciation: "mā / mādhā", ipa: "maː / maːðaː", meaning: "What?", type: "base", pos: "pronoun" },
            { id: "g_ar_int_2", lang: "ar", level: 1, word: "مَنْ", pronunciation: "man", ipa: "man", meaning: "Who?", type: "base", pos: "pronoun", grammar: "agent" },
            { id: "g_ar_int_3", lang: "ar", level: 1, word: "أَيْنَ", pronunciation: "ayna", ipa: "ʔajna", meaning: "Where?", type: "base", pos: "pronoun", grammar: "place" },
            
            // Come (Radice KYF) -> Richiede Radice KYF
            { id: "g_ar_int_4", lang: "ar", level: 2, word: "كَيْفَ", pronunciation: "kayfa", ipa: "kajfa", meaning: "How?", type: "derived", requires: ["root_kyf_g"], pos: "pronoun" },
            
            { id: "g_ar_int_5", lang: "ar", level: 1, word: "هَلْ", pronunciation: "hal", ipa: "hal", meaning: "Is it?", type: "base", pos: "particle" },
            
            // Perché (Per + Cosa + Questo) -> Richiede Per, Cosa, Questo
            { id: "g_ar_int_6", lang: "ar", level: 3, word: "لِمَاذَا", pronunciation: "limādhā", ipa: "limaːðaː", meaning: "Why?", type: "derived", requires: ["g_ar_have_2", "g_ar_int_1", "g_ar_dem_1"], pos: "pronoun" },
            
            // Quanto (Radice KMM) -> Richiede Radice KMM
            { id: "g_ar_int_7", lang: "ar", level: 2, word: "كَمْ", pronunciation: "kam", ipa: "kam", meaning: "How much?", type: "derived", requires: ["root_kmm"], pos: "pronoun" }
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
            { id: "soc_zh1", lang: "zh", level: 2, word: "家", pronunciation: "jiā", ipa: "t͡ɕja⁵⁵", meaning: "Home / Family", type: "derived", requires: ["rad_tetto"], pos: "place", grammar: "place" }, 
            { id: "soc_zh2", lang: "zh", level: 2, word: "学校", pronunciation: "xuéxiào", ipa: "ɕɥɛ³⁵ ɕjɑʊ̯⁵¹", meaning: "School", type: "derived", requires: ["rad_bambino", "zh1"], pos: "place", grammar: "place" },
            { id: "soc_zh3", lang: "zh", level: 3, word: "学生", pronunciation: "xuésheng", ipa: "ɕɥɛ³⁵ ʂəŋ", meaning: "Student", type: "derived", requires: ["soc_zh2", "rad_uomo"], pos: "noun", grammar: "agent" },
            { id: "soc_zh4", lang: "zh", level: 2, word: "书", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "Book", type: "base", pos: "noun" },
            { id: "soc_zh5", lang: "zh", level: 2, word: "朋友", pronunciation: "péngyǒu", ipa: "pʰəŋ³⁵ joʊ̯", meaning: "Friend", type: "derived", requires: ["rad_uomo"], pos: "noun", grammar: "agent" },
            { id: "soc_zh6", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "t͡ɕʰjɛn³⁵", meaning: "Money", type: "base", pos: "noun" },
        ]
    },

    "societa_ja": {
        title: "Society & Home (Japanese)", tags: ["society", "ja"],
        cards: [
            { id: "fam_ja1", lang: "ja", level: 2, word: "父", pronunciation: "ちち", ipa: "t͡ɕi̥t͡ɕi", meaning: "Father", type: "base", pos: "noun" },
            { id: "fam_ja2", lang: "ja", level: 2, word: "母", pronunciation: "はは", ipa: "haha", meaning: "Mother", type: "base", requires: ["rad_donna_ja"], pos: "noun" },
            { id: "fam_ja3", lang: "ja", level: 2, word: "家族", pronunciation: "かぞく", ipa: "kazokɯ", meaning: "Family", type: "derived", requires: ["soc_ja1"], pos: "noun" },
            { id: "soc_ja1", lang: "ja", level: 2, word: "家", pronunciation: "いえ", ipa: "ie", meaning: "Home / House", type: "base", requires: ["rad_tetto_ja"], pos: "place", grammar: "place" }, 
            { id: "soc_ja2", lang: "ja", level: 2, word: "学校", pronunciation: "がっこう", ipa: "ɡakːoː", meaning: "School", type: "derived", requires: ["rad_bambino_ja", "rad_albero_ja"], pos: "place", grammar: "place" }, 
            { id: "soc_ja3", lang: "ja", level: 2, word: "本", pronunciation: "ほん", ipa: "hoɴ", meaning: "Book", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            { id: "soc_ja4", lang: "ja", level: 2, word: "友", pronunciation: "とも", ipa: "tomo", meaning: "Friend", type: "base", pos: "noun", grammar: "agent" },
            { id: "soc_ja5", lang: "ja", level: 2, word: "先生", pronunciation: "せんせい", ipa: "seɴseː", meaning: "Teacher / Master", type: "derived", requires: ["rad_uomo_ja"], pos: "noun", grammar: "agent" }
        ]
    },

    "societa_ar": {
        title: "Society & Home (Arabic)", tags: ["society", "ar"],
        cards: [
            { id: "fam_ar1", lang: "ar", level: 2, word: "أَب", pronunciation: "ab", ipa: "ʔab", meaning: "Father", type: "base", pos: "noun", grammar: "agent" },
            { id: "fam_ar2", lang: "ar", level: 2, word: "أُمّ", pronunciation: "umm", ipa: "ʔumm", meaning: "Mother", type: "base", pos: "noun", grammar: "agent" },
            { id: "fam_ar3", lang: "ar", level: 2, word: "أَخ", pronunciation: "akh", ipa: "ʔax", meaning: "Brother", type: "base", pos: "noun", grammar: "agent" },
            { id: "fam_ar4", lang: "ar", level: 2, word: "أُخْت", pronunciation: "ukht", ipa: "ʔuxt", meaning: "Sister", type: "base", pos: "noun", grammar: "agent" },
            { id: "soc_ar1", lang: "ar", level: 2, word: "بَيْت", pronunciation: "bayt", ipa: "bajt", meaning: "House / Home", type: "base", pos: "place", grammar: "place" },
            { id: "soc_ar2", lang: "ar", level: 2, word: "كِتَاب", pronunciation: "kitāb", ipa: "kitaːb", meaning: "Book", type: "derived", requires: ["root_ktb"], pos: "noun" },
            { id: "soc_ar3", lang: "ar", level: 2, word: "مَكْتَب", pronunciation: "maktab", ipa: "maktab", meaning: "Office / Desk", type: "derived", requires: ["root_ktb"], pos: "place", grammar: "place" },
            { id: "soc_ar4", lang: "ar", level: 2, word: "مَدْرَسَة", pronunciation: "madrasa", ipa: "madrasa", meaning: "School", type: "derived", requires: ["root_drs"], pos: "place", grammar: "place" },
            { id: "soc_ar5", lang: "ar", level: 2, word: "دَرْس", pronunciation: "dars", ipa: "dars", meaning: "Lesson / Class", type: "derived", requires: ["root_drs"], pos: "noun" },
            { id: "soc_ar6", lang: "ar", level: 2, word: "سَكَن", pronunciation: "sakan", ipa: "sakan", meaning: "Accommodation / Housing", type: "derived", requires: ["root_skn"], pos: "place", grammar: "place" },

            // --- PLACES DERIVED FROM ROOTS (MASSIVE EXPANSION) ---
            // Scuola (Luogo dello studio) -> Richiede Studiare
            { id: "s_ar_extra_1", lang: "ar", level: 2, word: "مَدْرَسَة", pronunciation: "Madrasa", ipa: "madrasa", meaning: "School", type: "derived", requires: ["root_drs"], pos: "place", grammar: "place" },
            
            // Cucina (Luogo del cucinare) -> Richiede Cucinare
            { id: "s_ar_extra_2", lang: "ar", level: 2, word: "مَطْبَخ", pronunciation: "Maṭbakh", ipa: "matˤbax", meaning: "Kitchen", type: "derived", requires: ["root_tbkh"], pos: "place", grammar: "place" },
            
            // Stadio/Campo giochi (Luogo del giocare) -> Richiede Giocare
            { id: "s_ar_extra_3", lang: "ar", level: 2, word: "مَلْعَب", pronunciation: "Mal'ab", ipa: "malʕab", meaning: "Stadium / Playground", type: "derived", requires: ["root_lab"], pos: "place", grammar: "place" },
            
            // Ufficio/Scrivania (Luogo dello scrivere) -> Richiede Scrivere
            { id: "s_ar_extra_4", lang: "ar", level: 2, word: "مَكْتَب", pronunciation: "Maktab", ipa: "maktab", meaning: "Office / Desk", type: "derived", requires: ["root_ktb"], pos: "place", grammar: "place" },
            
            // Biblioteca (Luogo dei libri) -> Richiede Scrivere
            { id: "s_ar_extra_5", lang: "ar", level: 2, word: "مَكْتَبَة", pronunciation: "Maktaba", ipa: "maktaba", meaning: "Library / Bookstore", type: "derived", requires: ["root_ktb"], pos: "place", grammar: "place" },
            
            // Abitazione (Luogo dell'abitare) -> Richiede Abitare
            { id: "s_ar_extra_6", lang: "ar", level: 2, word: "مَسْكَن", pronunciation: "Maskan", ipa: "maskan", meaning: "Dwelling / Residence", type: "derived", requires: ["root_skn"], pos: "place", grammar: "place" },
            
            // Lavanderia/Lavabo (Luogo del lavare) -> Richiede Lavare
            { id: "s_ar_extra_7", lang: "ar", level: 2, word: "مَغْسَلَة", pronunciation: "Maghsala", ipa: "maɣsala", meaning: "Laundry / Sink", type: "derived", requires: ["root_ghsl"], pos: "place", grammar: "place" },
            
            // Ingresso (Luogo dell'entrare) -> Richiede Entrare
            { id: "s_ar_extra_8", lang: "ar", level: 2, word: "مَدْخَل", pronunciation: "Madkhal", ipa: "madxal", meaning: "Entrance", type: "derived", requires: ["root_dkhl"], pos: "place", grammar: "place" },
            
            // Uscita (Luogo dell'uscire) -> Richiede Uscire
            { id: "s_ar_extra_9", lang: "ar", level: 2, word: "مَخْرَج", pronunciation: "Makhraj", ipa: "maxradʒ", meaning: "Exit", type: "derived", requires: ["root_khrj"], pos: "place", grammar: "place" },
            
            // Laboratorio/Fabbrica (Luogo del lavoro) -> Richiede Lavorare
            { id: "s_ar_extra_10", lang: "ar", level: 2, word: "مَعْمَل", pronunciation: "Ma'mal", ipa: "maʕmal", meaning: "Lab / Factory", type: "derived", requires: ["root_aml"], pos: "place", grammar: "place" },
            
            // Seduta/Consiglio (Luogo del sedersi) -> Richiede Sedersi
            { id: "s_ar_extra_11", lang: "ar", level: 2, word: "مَجْلِس", pronunciation: "Majlis", ipa: "madʒlis", meaning: "Council / Sitting Room", type: "derived", requires: ["root_jls"], pos: "place", grammar: "place" },

            // --- PEOPLE & ROLES DERIVED FROM ROOTS ---
            // Scrittore/Impiegato -> Richiede Scrivere
            { id: "p_ar_extra_1", lang: "ar", level: 2, word: "كَاتِب", pronunciation: "Kātib", ipa: "kaːtib", meaning: "Writer / Clerk", type: "derived", requires: ["root_ktb"], pos: "noun", grammar: "agent" },
            
            // Insegnante (Colui che fa sapere) -> Richiede Sapere
            { id: "p_ar_extra_2", lang: "ar", level: 2, word: "مُعَلِّم", pronunciation: "Mu'allim", ipa: "muʕallim", meaning: "Teacher", type: "derived", requires: ["root_alm"], pos: "noun", grammar: "agent" },
            
            // Studente (Colui che studia) -> Richiede Studiare
            { id: "p_ar_extra_3", lang: "ar", level: 2, word: "دَارِس", pronunciation: "Dāris", ipa: "daːris", meaning: "Student", type: "derived", requires: ["root_drs"], pos: "noun", grammar: "agent" },
            
            // Giocatore -> Richiede Giocare
            { id: "p_ar_extra_4", lang: "ar", level: 2, word: "لَاعِب", pronunciation: "Lā'ib", ipa: "laːʕib", meaning: "Player", type: "derived", requires: ["root_lab"], pos: "noun", grammar: "agent" },
            
            // Viaggiatore -> Richiede Viaggiare
            { id: "p_ar_extra_5", lang: "ar", level: 2, word: "مُسَافِر", pronunciation: "Musāfir", ipa: "musaːfir", meaning: "Traveler", type: "derived", requires: ["root_sfr"], pos: "noun", grammar: "agent" },
            
            // Abitante/Residente -> Richiede Abitare
            { id: "p_ar_extra_6", lang: "ar", level: 2, word: "سَاكِن", pronunciation: "Sākin", ipa: "saːkin", meaning: "Resident", type: "derived", requires: ["root_skn"], pos: "noun", grammar: "agent" },
            
            // Cuoco -> Richiede Cucinare
            { id: "p_ar_extra_7", lang: "ar", level: 2, word: "طَبَّاخ", pronunciation: "Ṭabbākh", ipa: "tˤabbaːx", meaning: "Cook / Chef", type: "derived", requires: ["root_tbkh"], pos: "noun", grammar: "agent" },
            
            // Pilota -> Richiede Volare
            { id: "p_ar_extra_8", lang: "ar", level: 2, word: "طَيَّار", pronunciation: "Ṭayyār", ipa: "tˤajjaːr", meaning: "Pilot", type: "derived", requires: ["root_tyr"], pos: "noun", grammar: "agent" },
            
            // Lavoratore -> Richiede Lavorare
            { id: "p_ar_extra_9", lang: "ar", level: 2, word: "عَامِل", pronunciation: "'Āmil", ipa: "ʕaːmil", meaning: "Worker", type: "derived", requires: ["root_aml"], pos: "noun", grammar: "agent" },
            
            // Scienziato/Sapiente -> Richiede Sapere
            { id: "p_ar_extra_10", lang: "ar", level: 2, word: "عَالِم", pronunciation: "'Ālim", ipa: "ʕaːlim", meaning: "Scientist / Scholar", type: "derived", requires: ["root_alm"], pos: "noun", grammar: "agent" },
        ]
    },

    // ==========================================
    // 3. NATURE (FULL MERGE OLD + NEW)
    // ==========================================
    
    "natura_zh": {
        title: "Nature (Chinese)",
        tags: ["nature", "zh"],
        cards: [
            // --- UPDATED OLD CARDS ---
            { id: "zh7", lang: "zh", level: 1, word: "山", pronunciation: "shān", ipa: "ʂan˥", meaning: "Mountain", type: "base", pos: "place", grammar: "place" },
            // 天 (Grande + Uno) | 空 (Tetto + Otto + Lavoro) -> Richiede Grande e Tetto
            { id: "zh12", lang: "zh", level: 2, word: "天空", pronunciation: "tiānkōng", ipa: "tʰjɛn˥ kʰʊŋ˥", meaning: "Sky", type: "derived", requires: ["base_grande", "rad_tetto"], pos: "place", grammar: "place" },
            // Foresta (3 Alberi)
            { id: "zh13", lang: "zh", level: 2, word: "森林", pronunciation: "sēnlín", ipa: "sən˥ lin˧˥", meaning: "Forest", type: "derived", requires: ["rad_albero"], pos: "place", grammar: "place" },
            { id: "zh15", lang: "zh", level: 2, word: "河", pronunciation: "hé", ipa: "xɤ˧˥", meaning: "River", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            // Mare (Acqua + Ogni/Madre) | Oceano (Acqua + Pecora) -> Richiede Acqua e Pecora
            { id: "zh16", lang: "zh", level: 2, word: "海 / 海洋", pronunciation: "hǎi / hǎiyáng", ipa: "xaɪ̯˨˩˦", meaning: "Sea / Ocean", type: "derived", requires: ["rad_acqua", "rad_pecora"], pos: "place", grammar: "place" },
            // Vulcano (Fuoco + Montagna)
            { id: "zh17", lang: "zh", level: 2, word: "火山", pronunciation: "huǒshān", ipa: "xwɔ˨˩˦ ʂan˥", meaning: "Volcano", type: "derived", requires: ["rad_fuoco", "zh7"], pos: "place", grammar: "place" },
            { id: "zh19", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa˥", meaning: "Flower", type: "derived", requires: ["rad_erba"], pos: "noun" },
            { id: "zh22", lang: "zh", level: 2, word: "雪", pronunciation: "xuě", ipa: "ɕɥɛ˨˩˦", meaning: "Snow", type: "derived", requires: ["rad_pioggia"], pos: "noun" },
            { id: "zh30", lang: "zh", level: 3, word: "风", pronunciation: "fēng", ipa: "fəŋ˥", meaning: "Wind", type: "base", pos: "noun" },
            { id: "zh31", lang: "zh", level: 3, word: "暴风雨", pronunciation: "bàofēngyǔ", ipa: "pɑʊ̯˥˩ fəŋ˥ y˨˩˦", meaning: "Storm", type: "derived", requires: ["rad_pioggia", "zh30"], pos: "noun" },

            // --- NEW CARDS (Extended Nature) ---
            // Collina (Montagna + Collina)
            { id: "n_zh_ext_1", lang: "zh", level: 2, word: "山丘", pronunciation: "shānqiū", ipa: "ʂan˥ tɕʰjoʊ̯˥", meaning: "Hill", type: "derived", requires: ["zh7"], pos: "place", grammar: "place" },
            // Valle (Montagna + Valle[che contiene Bocca]) -> Richiede Montagna e Bocca
            { id: "n_zh_ext_2", lang: "zh", level: 2, word: "山谷", pronunciation: "shāngǔ", ipa: "ʂan˥ ku˨˩˦", meaning: "Valley", type: "derived", requires: ["zh7", "rad_bocca"], pos: "place", grammar: "place" },
            { id: "n_zh_ext_3", lang: "zh", level: 2, word: "湖", pronunciation: "hú", ipa: "xu˧˥", meaning: "Lake", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            { id: "n_zh_ext_4", lang: "zh", level: 2, word: "海滩", pronunciation: "hǎitān", ipa: "xaɪ̯˨˩˦ tʰan˥", meaning: "Beach", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            // Isola (Uccello sopra Montagna) -> Richiede Montagna e Uccello
            { id: "n_zh_ext_5", lang: "zh", level: 3, word: "岛", pronunciation: "dǎo", ipa: "tɑʊ̯˨˩˦", meaning: "Island", type: "derived", requires: ["zh7", "n_zh_ext_33"], pos: "place", grammar: "place" },
            // Deserto (Sabbia[Acqua+Piccolo] + Deserto) -> Richiede Acqua e Piccolo
            { id: "n_zh_ext_6", lang: "zh", level: 3, word: "沙漠", pronunciation: "shāmò", ipa: "ʂa˥ mwɔ˥˩", meaning: "Desert", type: "derived", requires: ["rad_acqua", "base_sabbia"], pos: "place", grammar: "place" },
            { id: "n_zh_ext_7", lang: "zh", level: 3, word: "瀑布", pronunciation: "pùbù", ipa: "pʰu˥˩ pu˥˩", meaning: "Waterfall", type: "derived", requires: ["rad_acqua"], pos: "place", grammar: "place" },
            // Caverna (Buco[Tetto+Otto]) -> Richiede Acqua e Tetto
            { id: "n_zh_ext_8", lang: "zh", level: 3, word: "洞穴", pronunciation: "dòngxué", ipa: "tʊŋ˥˩ ɕɥɛ˧˥", meaning: "Cave", type: "derived", requires: ["rad_acqua", "rad_tetto"], pos: "place", grammar: "place" },
            // Orizzonte (Terra + Piatto + Filo) -> Richiede Terra
            { id: "n_zh_ext_9", lang: "zh", level: 3, word: "地平线", pronunciation: "dìpíngxiàn", ipa: "ti˥˩ pʰiŋ˧˥ ɕjɛn˥˩", meaning: "Horizon", type: "derived", requires: ["rad_terra", "base_piatto", "base_filo"], pos: "noun" },
            { id: "n_zh_ext_10", lang: "zh", level: 1, word: "土地", pronunciation: "tǔdì", ipa: "tʰu˨˩˦ ti˥˩", meaning: "Land / Soil", type: "derived", requires: ["rad_terra"], pos: "noun" },
            // Pietra (Radicale Pietra + Testa) -> Richiede Pietra
            { id: "n_zh_ext_11", lang: "zh", level: 2, word: "石头", pronunciation: "shítou", ipa: "ʂʐ̩˧˥ tʰoʊ̯", meaning: "Stone / Rock", type: "derived", requires: ["rad_pietra", "base_testa"], pos: "noun" },
            { id: "n_zh_ext_12", lang: "zh", level: 1, word: "树", pronunciation: "shù", ipa: "ʂu˥˩", meaning: "Tree", type: "derived", requires: ["rad_albero"], pos: "noun" },
            // Giungla (Bosco fitto) -> Richiede Foresta
            { id: "n_zh_ext_13", lang: "zh", level: 3, word: "丛林", pronunciation: "cónglín", ipa: "tsʰʊŋ˧˥ lin˧˥", meaning: "Jungle", type: "derived", requires: ["zh13"], pos: "place", grammar: "place" },
            // Pianta (Legno + Dritto) -> Richiede Albero
            { id: "n_zh_ext_14", lang: "zh", level: 2, word: "植物", pronunciation: "zhíwù", ipa: "ʈʂʐ̩˧˥ u˥˩", meaning: "Plant", type: "derived", requires: ["rad_albero", "base_dritto"], pos: "noun" },
            { id: "n_zh_ext_15", lang: "zh", level: 2, word: "草", pronunciation: "cǎo", ipa: "tsʰɑʊ̯˨˩˦", meaning: "Grass", type: "derived", requires: ["rad_erba"], pos: "noun" },
            // Foglia (Erba + Mondo/Legno + Bambino) -> Richiede Erba, Albero, Bambino
            { id: "n_zh_ext_16", lang: "zh", level: 3, word: "叶子", pronunciation: "yèzi", ipa: "jɛ˥˩ d̥z̥", meaning: "Leaf", type: "derived", requires: ["rad_erba", "rad_albero", "rad_bambino"], pos: "noun" },
            // Ramo (Albero + Ramo) -> Richiede Albero (sia rad che parola)
            { id: "n_zh_ext_17", lang: "zh", level: 2, word: "树枝", pronunciation: "shùzhī", ipa: "ʂu˥˩ ʈʂʐ̩˥", meaning: "Branch", type: "derived", requires: ["n_zh_ext_12", "rad_albero"], pos: "noun" },
            // Radice (Legno + Gen) -> Richiede Albero
            { id: "n_zh_ext_18", lang: "zh", level: 2, word: "根", pronunciation: "gēn", ipa: "kən˥", meaning: "Root", type: "derived", requires: ["rad_albero"], pos: "noun" },
            // Tronco (Albero + Secco) -> Richiede Albero (parola intera)
            { id: "n_zh_ext_19", lang: "zh", level: 2, word: "树干", pronunciation: "shùgàn", ipa: "ʂu˥˩ kan˥˩", meaning: "Trunk", type: "derived", requires: ["n_zh_ext_12", "base_secco"], pos: "noun" },
            // Seme (Tipo + Bambino) -> Richiede Bambino
            { id: "n_zh_ext_20", lang: "zh", level: 2, word: "种子", pronunciation: "zhǒngzi", ipa: "ʈʂʊŋ˨˩˦ d̥z̥", meaning: "Seed", type: "derived", requires: ["rad_bambino"], pos: "noun" },
            // Frutta (Acqua + Frutto[Campo+Albero]) -> Richiede Acqua, Campo, Albero
            { id: "n_zh_ext_21", lang: "zh", level: 2, word: "水果", pronunciation: "shuǐguǒ", ipa: "ʂweɪ̯˨˩˦ kwɔ˨˩˦", meaning: "Fruit", type: "derived", requires: ["rad_acqua", "rad_campo", "rad_albero"], pos: "noun" },
            // Legno materiale (Legno + Testa[Grande+Punto]) -> Richiede Albero e Grande
            { id: "n_zh_ext_22", lang: "zh", level: 2, word: "木头", pronunciation: "mùtou", ipa: "mu˥˩ tʰoʊ̯", meaning: "Wood", type: "derived", requires: ["rad_albero", "base_testa"], pos: "noun" },
            // Sole (Grande + Yang[Sole]) -> Richiede Sole e Grande
            { id: "n_zh_ext_23", lang: "zh", level: 2, word: "太阳", pronunciation: "tàiyáng", ipa: "tʰaɪ̯˥˩ jɑŋ˧˥", meaning: "Sun", type: "derived", requires: ["rad_sole", "base_grande"], pos: "noun" },
            // Luna (Luna + Luminoso) -> Richiede Luna
            { id: "n_zh_ext_24", lang: "zh", level: 2, word: "月亮", pronunciation: "yuèliang", ipa: "ɥɛ˥˩ ljɑŋ", meaning: "Moon", type: "derived", requires: ["rad_luna", "base_luminoso"], pos: "noun" },
            // Stella (Sole + Nascere) -> Richiede Sole
            { id: "n_zh_ext_25", lang: "zh", level: 2, word: "星星", pronunciation: "xīngxing", ipa: "ɕiŋ˥ ɕiŋ", meaning: "Star", type: "derived", requires: ["rad_sole", "base_nascere"], pos: "noun" },
            { id: "n_zh_ext_26", lang: "zh", level: 2, word: "云", pronunciation: "yún", ipa: "yn˧˥", meaning: "Cloud", type: "base", pos: "noun" },
            { id: "n_zh_ext_27", lang: "zh", level: 2, word: "雨", pronunciation: "yǔ", ipa: "y˨˩˦", meaning: "Rain", type: "base", pos: "noun" },
            { id: "n_zh_ext_28", lang: "zh", level: 2, word: "雾", pronunciation: "wù", ipa: "u˥˩", meaning: "Fog / Mist", type: "derived", requires: ["rad_pioggia"], pos: "noun" },
            { id: "n_zh_ext_29", lang: "zh", level: 2, word: "冰", pronunciation: "bīng", ipa: "piŋ˥", meaning: "Ice", type: "derived", requires: ["rad_acqua"], pos: "noun" },
            { id: "n_zh_ext_30", lang: "zh", level: 3, word: "气候", pronunciation: "qìhòu", ipa: "tɕʰi˥˩ xoʊ̯˥˩", meaning: "Climate", type: "base", pos: "noun" },
            // Animale (Cosa che si muove: Nuvola+Forza) -> Richiede Forza
            { id: "n_zh_ext_31", lang: "zh", level: 2, word: "动物", pronunciation: "dòngwù", ipa: "tʊŋ˥˩ u˥˩", meaning: "Animal", type: "derived", requires: ["rad_forza"], pos: "noun" },
            { id: "n_zh_ext_32", lang: "zh", level: 3, word: "野生", pronunciation: "yěshēng", ipa: "jɛ˨˩˦ ʂəŋ˥", meaning: "Wild", type: "derived", requires: ["rad_campo", "base_nascere"], pos: "adj" },
            { id: "n_zh_ext_33", lang: "zh", level: 2, word: "鸟", pronunciation: "niǎo", ipa: "njɑʊ̯˨˩˦", meaning: "Bird", type: "base", pos: "noun" },
            { id: "n_zh_ext_34", lang: "zh", level: 2, word: "鱼", pronunciation: "yú", ipa: "y˧˥", meaning: "Fish", type: "base", pos: "noun" },
            // Insetto (Richiede radicale Insetto)
            { id: "n_zh_ext_35", lang: "zh", level: 2, word: "昆虫", pronunciation: "kūnchóng", ipa: "kʰwən˥ ʈʂʰʊŋ˧˥", meaning: "Insect", type: "derived", requires: ["rad_insetto"], pos: "noun" },
            // Mammifero (Animale che allatta: Bocca+Mano+Bambino) -> Richiede Animale, Bocca, Mano, Bambino
            { id: "n_zh_ext_36", lang: "zh", level: 4, word: "哺乳动物", pronunciation: "bǔrǔ dòngwù", ipa: "pu˨˩˦ ʐu˨˩˦ tʊŋ˥˩ u˥˩", meaning: "Mammal", type: "derived", requires: ["n_zh_ext_31", "rad_bocca", "rad_mano", "rad_bambino"], pos: "noun" },
            // Rettile (Animale che striscia) -> Richiede Animale
            { id: "n_zh_ext_37", lang: "zh", level: 3, word: "爬行动物", pronunciation: "páxíng dòngwù", ipa: "pʰa˧˥ ɕiŋ˧˥ tʊŋ˥˩ u˥˩", meaning: "Reptile", type: "derived", requires: ["n_zh_ext_31"], pos: "noun" },
            { id: "n_zh_ext_38", lang: "zh", level: 3, word: "物种", pronunciation: "wùzhǒng", ipa: "u˥˩ ʈʂʊŋ˨˩˦", meaning: "Species", type: "base", pos: "noun" },
            // Nido (Uccello + Nido) -> Richiede Uccello
            { id: "n_zh_ext_39", lang: "zh", level: 2, word: "鸟巢", pronunciation: "niǎocháo", ipa: "njɑʊ̯˨˩˦ ʈʂʰɑʊ̯˧˥", meaning: "Nest", type: "derived", requires: ["n_zh_ext_33"], pos: "noun" },
            // Impronta (Piede + Stampa) -> Richiede Bocca (parte di Piede) e Mano (parte di Stampa)
            { id: "n_zh_ext_40", lang: "zh", level: 2, word: "脚印", pronunciation: "jiǎoyìn", ipa: "tɕjɑʊ̯˨˩˦ in˥˩", meaning: "Footprint", type: "derived", requires: ["base_piede", "base_stampa"], pos: "noun" },
            // Ambiente (Terra + Terra) -> Richiede Terra
            { id: "n_zh_ext_41", lang: "zh", level: 3, word: "环境", pronunciation: "huánjìng", ipa: "xwan˧˥ tɕiŋ˥˩", meaning: "Environment", type: "derived", requires: ["rad_terra"], pos: "noun" },
            { id: "n_zh_ext_42", lang: "zh", level: 3, word: "大自然", pronunciation: "dàzìrán", ipa: "ta˥˩ dz̩˥˩ ʐan˧˥", meaning: "Nature", type: "base", pos: "noun" },
            // Inquinamento (Acqua + Acqua/Albero/Nove) -> Richiede Acqua
            { id: "n_zh_ext_43", lang: "zh", level: 3, word: "污染", pronunciation: "wūrǎn", ipa: "u˥ ʐan˨˩˦", meaning: "Pollution", type: "derived", requires: ["rad_acqua"], pos: "noun" },
            // Protezione (Persona + Mano) -> Richiede Persona e Mano
            { id: "n_zh_ext_44", lang: "zh", level: 3, word: "保护", pronunciation: "bǎohù", ipa: "pɑʊ̯˨˩˦ xu˥˩", meaning: "Protection / Conservation", type: "derived", requires: ["rad_uomo", "rad_mano"], pos: "noun" },
            // Sentiero (Piccolo + Sentiero) -> Richiede Piccolo
            { id: "n_zh_ext_45", lang: "zh", level: 2, word: "小径", pronunciation: "xiǎojìng", ipa: "ɕjɑʊ̯˨˩˦ tɕiŋ˥˩", meaning: "Path / Trail", type: "derived", requires: ["base_piccolo"], pos: "place", grammar: "place" },

            // --- COMBINATIONS FROM FUNDAMENTALS ---
            { id: "n_zh_combo_1", lang: "zh", level: 1, word: "大人", pronunciation: "dàren", ipa: "ta⁵¹ ʐən", meaning: "Adult (Big Person)", type: "derived", requires: ["base_grande", "rad_uomo"], pos: "noun" },
            { id: "n_zh_combo_2", lang: "zh", level: 2, word: "大雨", pronunciation: "dàyǔ", ipa: "ta⁵¹ y²¹⁴", meaning: "Heavy Rain", type: "derived", requires: ["base_grande", "rad_pioggia"], pos: "noun" },
            { id: "n_zh_combo_3", lang: "zh", level: 2, word: "小雨", pronunciation: "xiǎoyǔ", ipa: "ɕjɑʊ̯²¹⁴ y²¹⁴", meaning: "Light Rain", type: "derived", requires: ["base_piccolo", "rad_pioggia"], pos: "noun" },
            { id: "n_zh_combo_4", lang: "zh", level: 2, word: "男", pronunciation: "nán", ipa: "nan³⁵", meaning: "Male / Man", type: "derived", requires: ["rad_campo", "rad_forza"], pos: "noun" },
        ]
    },

    "natura_ja": {
        title: "Nature (Japanese)",
        tags: ["nature", "ja"],
        cards: [
            // --- UPDATED OLD CARDS ---
            { id: "ja1", lang: "ja", level: 1, word: "川", pronunciation: "かわ", ipa: "kawa", meaning: "River", type: "base", pos: "place", grammar: "place" },
            { id: "ja2", lang: "ja", level: 1, word: "山", pronunciation: "やま", ipa: "jama", meaning: "Mountain", type: "base", pos: "place", grammar: "place" },
            { id: "ja10", lang: "ja", level: 2, word: "森", pronunciation: "もり", ipa: "moɾi", meaning: "Forest", type: "derived", requires: ["rad_albero_ja"], pos: "place", grammar: "place" },
            { id: "ja15", lang: "ja", level: 2, word: "火山", pronunciation: "かざん", ipa: "kazaɴ", meaning: "Volcano", type: "derived", requires: ["rad_fuoco_ja", "ja2"], pos: "place", grammar: "place" },
            { id: "ja13", lang: "ja", level: 2, word: "花", pronunciation: "はな", ipa: "hana", meaning: "Flower", type: "derived", requires: ["rad_erba_ja", "rad_uomo_ja"], pos: "noun" },
            { id: "ja18", lang: "ja", level: 2, word: "雲", pronunciation: "くも", ipa: "kɯmo", meaning: "Cloud", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            
            // --- NEW CARDS ---
            { id: "n_ja_ext_1", lang: "ja", level: 2, word: "丘", pronunciation: "おか", ipa: "oka", meaning: "Hill", type: "base", pos: "place", grammar: "place" },
            { id: "n_ja_ext_2", lang: "ja", level: 2, word: "谷", pronunciation: "たに", ipa: "tani", meaning: "Valley", type: "base", pos: "place", grammar: "place" },
            
            // Lago (Acqua + Luna)
            { id: "n_ja_ext_3", lang: "ja", level: 2, word: "湖", pronunciation: "みずうみ", ipa: "mizɯːmi", meaning: "Lake", type: "derived", requires: ["rad_acqua_ja", "rad_luna_ja"], pos: "place", grammar: "place" },
            
            // Mare (Acqua)
            { id: "n_ja_ext_4", lang: "ja", level: 2, word: "海", pronunciation: "うみ", ipa: "ɯmi", meaning: "Sea / Ocean", type: "derived", requires: ["rad_acqua_ja"], pos: "place", grammar: "place" },
            
            // Spiaggia (Acqua)
            { id: "n_ja_ext_5", lang: "ja", level: 2, word: "ビーチ / 浜辺", pronunciation: "びーち / はまべ", ipa: "biːtɕi / hamabe", meaning: "Beach", type: "derived", requires: ["rad_acqua_ja"], pos: "place", grammar: "place" },
            
            // Isola (Uccello + Montagna)
            { id: "n_ja_ext_6", lang: "ja", level: 3, word: "島", pronunciation: "しま", ipa: "ɕima", meaning: "Island", type: "derived", requires: ["ja2", "n_ja_ext_37"], pos: "place", grammar: "place" },
            
            // Deserto (Acqua + Pietra + Piccolo -> Sabbia)
            { id: "n_ja_ext_7", lang: "ja", level: 3, word: "砂漠", pronunciation: "さばく", ipa: "sabakɯ", meaning: "Desert", type: "derived", requires: ["rad_acqua_ja", "n_ja_ext_12", "base_piccolo_ja"], pos: "place", grammar: "place" },
            
            // Cascata (Acqua)
            { id: "n_ja_ext_8", lang: "ja", level: 3, word: "滝", pronunciation: "たき", ipa: "taki", meaning: "Waterfall", type: "derived", requires: ["rad_acqua_ja"], pos: "place", grammar: "place" },
            
            // Caverna (Acqua + Tetto)
            { id: "n_ja_ext_9", lang: "ja", level: 3, word: "洞窟", pronunciation: "どうくつ", ipa: "doːkɯtsɯ", meaning: "Cave", type: "derived", requires: ["rad_acqua_ja", "rad_tetto_ja"], pos: "place", grammar: "place" },
            
            { id: "n_ja_ext_10", lang: "ja", level: 3, word: "地平線", pronunciation: "ちへいせん", ipa: "tɕiheiseɴ", meaning: "Horizon", type: "base", pos: "noun" },
            { id: "n_ja_ext_11", lang: "ja", level: 1, word: "土", pronunciation: "つち", ipa: "tsɯtɕi", meaning: "Earth / Soil", type: "base", pos: "noun" },
            
            // Pietra (Radicale Pietra)
            { id: "n_ja_ext_12", lang: "ja", level: 2, word: "石", pronunciation: "いし", ipa: "iɕi", meaning: "Stone / Rock", type: "derived", requires: ["rad_pietra_ja"], pos: "noun" },
            
            // Albero (Radicale Albero)
            { id: "n_ja_ext_13", lang: "ja", level: 1, word: "木", pronunciation: "き", ipa: "ki", meaning: "Tree", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            
            { id: "n_ja_ext_14", lang: "ja", level: 3, word: "ジャングル", pronunciation: "じゃんぐる", ipa: "dʑaŋɡɯɾɯ", meaning: "Jungle", type: "base", pos: "place", grammar: "place" },
            
            // Pianta (Albero)
            { id: "n_ja_ext_15", lang: "ja", level: 2, word: "植物", pronunciation: "しょくぶつ", ipa: "ɕokɯbɯtsɯ", meaning: "Plant", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            
            // Erba (Radicale Erba)
            { id: "n_ja_ext_16", lang: "ja", level: 2, word: "草", pronunciation: "くさ", ipa: "kɯsa", meaning: "Grass", type: "derived", requires: ["rad_erba_ja"], pos: "noun" },
            
            // Foglia (Erba + Albero)
            { id: "n_ja_ext_17", lang: "ja", level: 2, word: "葉", pronunciation: "は", ipa: "ha", meaning: "Leaf", type: "derived", requires: ["rad_erba_ja", "rad_albero_ja"], pos: "noun" },
            
            // Ramo (Albero)
            { id: "n_ja_ext_18", lang: "ja", level: 2, word: "枝", pronunciation: "えだ", ipa: "eda", meaning: "Branch", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            
            // Radice (Albero)
            { id: "n_ja_ext_19", lang: "ja", level: 2, word: "根", pronunciation: "ね", ipa: "ne", meaning: "Root", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            
            // Tronco (Albero)
            { id: "n_ja_ext_20", lang: "ja", level: 2, word: "幹", pronunciation: "みき", ipa: "miki", meaning: "Trunk", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            
            { id: "n_ja_ext_21", lang: "ja", level: 2, word: "種", pronunciation: "たね", ipa: "tane", meaning: "Seed", type: "base", pos: "noun" },
            { id: "n_ja_ext_22", lang: "ja", level: 2, word: "果物", pronunciation: "くだもの", ipa: "kɯdamono", meaning: "Fruit", type: "base", pos: "noun" },
            
            // Legname (Albero)
            { id: "n_ja_ext_23", lang: "ja", level: 2, word: "木材", pronunciation: "もくざい", ipa: "mokɯzai", meaning: "Wood", type: "derived", requires: ["rad_albero_ja"], pos: "noun" },
            
            // Sole (Sole + Grande)
            { id: "n_ja_ext_24", lang: "ja", level: 1, word: "太陽", pronunciation: "たいよう", ipa: "taijoː", meaning: "Sun", type: "derived", requires: ["rad_sole_ja", "base_grande_ja"], pos: "noun" },
            
            // Luna (Radicale Luna)
            { id: "n_ja_ext_25", lang: "ja", level: 1, word: "月", pronunciation: "つき", ipa: "tsɯki", meaning: "Moon", type: "derived", requires: ["rad_luna_ja"], pos: "noun" },
            
            // Stella (Sole + Nascere)
            { id: "n_ja_ext_26", lang: "ja", level: 2, word: "星", pronunciation: "ほし", ipa: "hoɕi", meaning: "Star", type: "derived", requires: ["rad_sole_ja", "base_nascere_ja"], pos: "noun" },
            
            { id: "n_ja_ext_27", lang: "ja", level: 2, word: "空", pronunciation: "そら", ipa: "soɾa", meaning: "Sky", type: "base", pos: "place", grammar: "place" },
            
            // Pioggia (Radicale Pioggia)
            { id: "n_ja_ext_28", lang: "ja", level: 2, word: "雨", pronunciation: "あめ", ipa: "ame", meaning: "Rain", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            
            // Neve (Radicale Pioggia)
            { id: "n_ja_ext_29", lang: "ja", level: 2, word: "雪", pronunciation: "ゆき", ipa: "jɯki", meaning: "Snow", type: "derived", requires: ["rad_pioggia_ja"], pos: "noun" },
            
            { id: "n_ja_ext_30", lang: "ja", level: 2, word: "風", pronunciation: "かぜ", ipa: "kaze", meaning: "Wind", type: "base", pos: "noun" },
            { id: "n_ja_ext_31", lang: "ja", level: 3, word: "嵐", pronunciation: "あらし", ipa: "aɾaɕi", meaning: "Storm", type: "base", pos: "noun" },
            { id: "n_ja_ext_32", lang: "ja", level: 2, word: "霧", pronunciation: "きり", ipa: "kiɾi", meaning: "Fog / Mist", type: "base", pos: "noun" },
            { id: "n_ja_ext_33", lang: "ja", level: 2, word: "氷", pronunciation: "こおり", ipa: "koːɾi", meaning: "Ice", type: "base", pos: "noun" },
            { id: "n_ja_ext_34", lang: "ja", level: 3, word: "気候", pronunciation: "きこう", ipa: "kikoː", meaning: "Climate", type: "base", pos: "noun" },
            
            // Animale (Radicale Forza)
            { id: "n_ja_ext_35", lang: "ja", level: 2, word: "動物", pronunciation: "どうぶつ", ipa: "doːbɯtsɯ", meaning: "Animal", type: "derived", requires: ["rad_forza_ja"], pos: "noun" },
            
            // Selvaggio (Campo + Nascere/Vita)
            { id: "n_ja_ext_36", lang: "ja", level: 3, word: "野生の", pronunciation: "やせいの", ipa: "yaseino", meaning: "Wild", type: "derived", requires: ["rad_campo_ja", "base_nascere_ja"], pos: "adj" },
            
            { id: "n_ja_ext_37", lang: "ja", level: 2, word: "鳥", pronunciation: "とり", ipa: "toɾi", meaning: "Bird", type: "base", pos: "noun" },
            { id: "n_ja_ext_38", lang: "ja", level: 2, word: "魚", pronunciation: "さかな", ipa: "sakana", meaning: "Fish", type: "base", pos: "noun" },
            
            // Insetto (Radicale Insetto)
            { id: "n_ja_ext_39", lang: "ja", level: 2, word: "虫", pronunciation: "むし", ipa: "mɯɕi", meaning: "Insect", type: "derived", requires: ["rad_insetto_ja"], pos: "noun" },
            
            // Mammifero (Animale + Bocca + Mano)
            { id: "n_ja_ext_40", lang: "ja", level: 3, word: "哺乳類", pronunciation: "ほにゅうるい", ipa: "honjɯːɾɯi", meaning: "Mammal", type: "derived", requires: ["n_ja_ext_35", "rad_bocca_ja", "rad_mano_ja"], pos: "noun" },
            
            // Rettile (Insetto)
            { id: "n_ja_ext_41", lang: "ja", level: 3, word: "爬虫類", pronunciation: "はちゅうるい", ipa: "hatɕɯːɾɯi", meaning: "Reptile", type: "derived", requires: ["n_ja_ext_39"], pos: "noun" },
            
            { id: "n_ja_ext_42", lang: "ja", level: 3, word: "種", pronunciation: "しゅ", ipa: "ɕɯ", meaning: "Species", type: "base", pos: "noun" },
            { id: "n_ja_ext_43", lang: "ja", level: 2, word: "巣", pronunciation: "す", ipa: "sɯ", meaning: "Nest", type: "base", pos: "noun" },
            { id: "n_ja_ext_44", lang: "ja", level: 3, word: "足跡", pronunciation: "あしあと", ipa: "aɕiato", meaning: "Footprint", type: "base", pos: "noun" },
            { id: "n_ja_ext_45", lang: "ja", level: 3, word: "環境", pronunciation: "かんきょう", ipa: "kaŋkjoː", meaning: "Environment", type: "base", pos: "noun" },
            
            // Natura (Vita)
            { id: "n_ja_ext_46", lang: "ja", level: 3, word: "自然", pronunciation: "しぜん", ipa: "ɕizeɴ", meaning: "Nature", type: "derived", requires: ["base_nascere_ja"], pos: "noun" },
            
            { id: "n_ja_ext_47", lang: "ja", level: 3, word: "汚染", pronunciation: "おせん", ipa: "oseɴ", meaning: "Pollution", type: "base", pos: "noun" },
            { id: "n_ja_ext_48", lang: "ja", level: 3, word: "保護", pronunciation: "ほご", ipa: "hoɡo", meaning: "Protection / Conservation", type: "base", pos: "noun" },
            { id: "n_ja_ext_49", lang: "ja", level: 2, word: "小道", pronunciation: "こみち", ipa: "komitɕi", meaning: "Path / Trail", type: "base", pos: "place", grammar: "place" },

            // --- COMBINATIONS FROM FUNDAMENTALS ---
            { id: "n_ja_combo_1", lang: "ja", level: 1, word: "大人", pronunciation: "おとな", ipa: "otona", meaning: "Adult", type: "derived", requires: ["base_grande_ja", "rad_uomo_ja"], pos: "noun", grammar: "agent" },
            { id: "n_ja_combo_2", lang: "ja", level: 1, word: "男", pronunciation: "おとこ", ipa: "otoko", meaning: "Man / Male", type: "derived", requires: ["rad_campo_ja", "rad_forza_ja"], pos: "noun", grammar: "agent" },
            { id: "n_ja_combo_3", lang: "ja", level: 2, word: "女の子", pronunciation: "おんなのこ", ipa: "onːanoko", meaning: "Girl", type: "derived", requires: ["rad_donna_ja", "rad_bambino_ja"], pos: "noun", grammar: "agent" },
            { id: "n_ja_combo_4", lang: "ja", level: 2, word: "男の子", pronunciation: "おとこのこ", ipa: "otokonoko", meaning: "Boy", type: "derived", requires: ["n_ja_combo_2", "rad_bambino_ja"], pos: "noun", grammar: "agent" },
            { id: "n_ja_combo_5", lang: "ja", level: 2, word: "大雨", pronunciation: "おおあめ", ipa: "oːame", meaning: "Heavy Rain", type: "derived", requires: ["base_grande_ja", "rad_pioggia_ja"], pos: "noun" },
        ]
    },

    "natura_ar": {
        title: "Nature (Arabic)",
        tags: ["nature", "ar"],
        cards: [
            // --- UPDATED OLD CARDS ---
            { id: "ar12", lang: "ar", level: 2, word: "أَرْض / تُرْبَة", pronunciation: "Arḍ / Turba", ipa: "ardˤ / ˈturba", meaning: "Earth / Soil", type: "derived", requires: ["root_ard"], pos: "place", grammar: "place" },
            { id: "ar14", lang: "ar", level: 2, word: "شَمْس", pronunciation: "Shams", ipa: "ʃams", meaning: "Sun", type: "derived", requires: ["root_shms"], pos: "noun" },
            { id: "ar15", lang: "ar", level: 2, word: "قَمَر", pronunciation: "Qamar", ipa: "ˈqamar", meaning: "Moon", type: "derived", requires: ["root_qmr"], pos: "noun" },
            { id: "ar17", lang: "ar", level: 2, word: "بَحْر / مُحِيط", pronunciation: "Baḥr / Muḥīṭ", ipa: "baħr / muˈħiːtˤ", meaning: "Sea / Ocean", type: "derived", requires: ["root_bhr"], pos: "place", grammar: "place" },
            { id: "ar19", lang: "ar", level: 2, word: "جَبَل", pronunciation: "Jabal", ipa: "ˈdʒabal", meaning: "Mountain", type: "derived", requires: ["root_jbl"], pos: "place", grammar: "place" },
            { id: "ar23", lang: "ar", level: 2, word: "شَجَرَة", pronunciation: "Shajara", ipa: "ˈʃadʒara", meaning: "Tree", type: "derived", requires: ["root_shjr"], pos: "noun" },
            { id: "ar24", lang: "ar", level: 3, word: "غَابَة", pronunciation: "Ghāba", ipa: "ˈɣaːba", meaning: "Forest", type: "derived", requires: ["root_shjr"], pos: "place", grammar: "place" },

            // --- NEW CARDS ---
            { id: "n_ar_ext_1", lang: "ar", level: 2, word: "تَلَّة", pronunciation: "Talla", ipa: "ˈtalla", meaning: "Hill", type: "derived", requires: ["root_tll"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_2", lang: "ar", level: 2, word: "وَادِي", pronunciation: "Wādī", ipa: "ˈwaːdiː", meaning: "Valley", type: "derived", requires: ["root_wdy"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_3", lang: "ar", level: 2, word: "نَهْر", pronunciation: "Nahr", ipa: "nahr", meaning: "River", type: "derived", requires: ["root_nhr"], pos: "place", grammar: "place" },
            // Lago (Buhayra) è il diminutivo di Bahr (Mare) -> Richiede Radice Mare
            { id: "n_ar_ext_4", lang: "ar", level: 2, word: "بُحَيْرَة", pronunciation: "Buḥayra", ipa: "buˈħajra", meaning: "Lake", type: "derived", requires: ["root_bhr"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_5", lang: "ar", level: 2, word: "شَاطِئ", pronunciation: "Shāṭi'", ipa: "ˈʃaːtˤiʔ", meaning: "Beach", type: "derived", requires: ["root_sht"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_6", lang: "ar", level: 2, word: "جَزِيرَة", pronunciation: "Jazīra", ipa: "dʒaˈziːra", meaning: "Island", type: "derived", requires: ["root_jzr"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_7", lang: "ar", level: 2, word: "صَحْرَاء", pronunciation: "Ṣaḥrā'", ipa: "sˤaħˈraːʔ", meaning: "Desert", type: "derived", requires: ["root_shr"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_8", lang: "ar", level: 2, word: "شَلَّال", pronunciation: "Shallāl", ipa: "ʃalˈlaːl", meaning: "Waterfall", type: "derived", requires: ["root_sll"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_9", lang: "ar", level: 2, word: "كَهْف", pronunciation: "Kahf", ipa: "kahf", meaning: "Cave", type: "derived", requires: ["root_khf"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_10", lang: "ar", level: 2, word: "بُرْكَان", pronunciation: "Burkān", ipa: "burˈkaːn", meaning: "Volcano", type: "derived", requires: ["root_brk"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_11", lang: "ar", level: 2, word: "أُفُق", pronunciation: "Ufuq", ipa: "ˈufuq", meaning: "Horizon", type: "derived", requires: ["root_afq"], pos: "noun" },
            { id: "n_ar_ext_12", lang: "ar", level: 2, word: "صَخْرَة", pronunciation: "Ṣakhra", ipa: "ˈsˤaxra", meaning: "Stone / Rock", type: "derived", requires: ["root_skhr"], pos: "noun" },
            { id: "n_ar_ext_13", lang: "ar", level: 2, word: "أَدْغَال", pronunciation: "Adghāl", ipa: "ʔadˈɣaːl", meaning: "Jungle", type: "derived", requires: ["root_dghl"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_14", lang: "ar", level: 2, word: "نَبَات", pronunciation: "Nabāt", ipa: "naˈbaːt", meaning: "Plant", type: "derived", requires: ["root_nbt"], pos: "noun" },
            { id: "n_ar_ext_15", lang: "ar", level: 2, word: "زَهْرَة", pronunciation: "Zahra", ipa: "ˈzahra", meaning: "Flower", type: "derived", requires: ["root_zhr"], pos: "noun" },
            { id: "n_ar_ext_16", lang: "ar", level: 2, word: "عُشْب", pronunciation: "'Ushb", ipa: "ʕuʃb", meaning: "Grass", type: "derived", requires: ["root_ashb"], pos: "noun" },
            { id: "n_ar_ext_17", lang: "ar", level: 2, word: "وَرَقَة", pronunciation: "Waraqa", ipa: "ˈwaraqa", meaning: "Leaf", type: "derived", requires: ["root_wrq"], pos: "noun" },
            { id: "n_ar_ext_18", lang: "ar", level: 2, word: "غُصْن", pronunciation: "Ghuṣn", ipa: "ɣusˤn", meaning: "Branch", type: "derived", requires: ["root_ghsn"], pos: "noun" },
            { id: "n_ar_ext_19", lang: "ar", level: 2, word: "جِذْر", pronunciation: "Jidhr", ipa: "dʒiðr", meaning: "Root", type: "derived", requires: ["root_jdhr"], pos: "noun" },
            { id: "n_ar_ext_20", lang: "ar", level: 2, word: "جِذْع", pronunciation: "Jidh'", ipa: "dʒiðʕ", meaning: "Trunk", type: "derived", requires: ["root_jdhr"], pos: "noun" }, 
            { id: "n_ar_ext_21", lang: "ar", level: 2, word: "بِذْرَة", pronunciation: "Bidhra", ipa: "ˈbiðra", meaning: "Seed", type: "derived", requires: ["root_bdhr"], pos: "noun" },
            { id: "n_ar_ext_22", lang: "ar", level: 2, word: "فَاكِهَة", pronunciation: "Fākiha", ipa: "ˈfaːkiha", meaning: "Fruit", type: "derived", requires: ["root_fkh"], pos: "noun" },
            { id: "n_ar_ext_23", lang: "ar", level: 2, word: "خَشَب", pronunciation: "Khashab", ipa: "ˈxaʃab", meaning: "Wood", type: "derived", requires: ["root_khshb"], pos: "noun" },
            { id: "n_ar_ext_24", lang: "ar", level: 2, word: "نُجُوم", pronunciation: "Nujūm", ipa: "nuˈdʒuːm", meaning: "Stars", type: "derived", requires: ["root_njm"], pos: "noun" },
            { id: "n_ar_ext_25", lang: "ar", level: 2, word: "سَمَاء", pronunciation: "Samā'", ipa: "saˈmaːʔ", meaning: "Sky", type: "derived", requires: ["root_shms"], pos: "place", grammar: "place" },
            { id: "n_ar_ext_26", lang: "ar", level: 2, word: "سَحَابَة", pronunciation: "Saḥāba", ipa: "saˈħaːba", meaning: "Cloud", type: "derived", requires: ["root_shb"], pos: "noun" },
            { id: "n_ar_ext_27", lang: "ar", level: 2, word: "مَطَر", pronunciation: "Maṭar", ipa: "ˈmatˤar", meaning: "Rain", type: "derived", requires: ["root_mtr"], pos: "noun" },
            { id: "n_ar_ext_28", lang: "ar", level: 2, word: "ثَلْج", pronunciation: "Thalj", ipa: "θaldʒ", meaning: "Snow", type: "derived", requires: ["root_thlj"], pos: "noun" },
            { id: "n_ar_ext_29", lang: "ar", level: 2, word: "رِيَاح", pronunciation: "Riyāḥ", ipa: "riˈjaːħ", meaning: "Wind", type: "derived", requires: ["root_rwh"], pos: "noun" },
            { id: "n_ar_ext_30", lang: "ar", level: 2, word: "عَاصِفَة", pronunciation: "'Āṣifa", ipa: "ˈʕaːsˤifa", meaning: "Storm", type: "derived", requires: ["root_asf"], pos: "noun" },
            { id: "n_ar_ext_31", lang: "ar", level: 2, word: "ضَبَاب", pronunciation: "Ḍabāb", ipa: "dˤaˈbaːb", meaning: "Fog", type: "derived", requires: ["root_dbb"], pos: "noun" },
            { id: "n_ar_ext_32", lang: "ar", level: 2, word: "جَلِيد", pronunciation: "Jalīd", ipa: "dʒaˈliːd", meaning: "Ice", type: "derived", requires: ["root_jld"], pos: "noun" },
            { id: "n_ar_ext_33", lang: "ar", level: 2, word: "مُنَاخ", pronunciation: "Munākh", ipa: "muˈnaːx", meaning: "Climate", type: "derived", requires: ["root_nwkh"], pos: "noun" },
            { id: "n_ar_ext_34", lang: "ar", level: 2, word: "حَيَوَان", pronunciation: "Ḥayawān", ipa: "ħajaˈwaːn", meaning: "Animal", type: "derived", requires: ["root_hyw"], pos: "noun" },
            { id: "n_ar_ext_35", lang: "ar", level: 2, word: "بَرِّي", pronunciation: "Barrī", ipa: "ˈbarriː", meaning: "Wild", type: "derived", requires: ["root_brr"], pos: "adj" },
            { id: "n_ar_ext_36", lang: "ar", level: 2, word: "طَائِر", pronunciation: "Ṭā'ir", ipa: "ˈtˤaːʔir", meaning: "Bird", type: "derived", requires: ["root_tyr"], pos: "noun", grammar: "agent" },
            { id: "n_ar_ext_37", lang: "ar", level: 2, word: "سَمَكَة", pronunciation: "Samaka", ipa: "ˈsamaka", meaning: "Fish", type: "derived", requires: ["root_bhr"], pos: "noun" }, 
            { id: "n_ar_ext_38", lang: "ar", level: 2, word: "حَشَرَة", pronunciation: "Ḥashara", ipa: "ˈħaʃara", meaning: "Insect", type: "derived", requires: ["root_hshr"], pos: "noun" },
            { id: "n_ar_ext_39", lang: "ar", level: 2, word: "ثَدْيِيَّات", pronunciation: "Thadiyyāt", ipa: "θadijˈjaːt", meaning: "Mammal", type: "derived", requires: ["root_thdy"], pos: "noun" },
            { id: "n_ar_ext_40", lang: "ar", level: 2, word: "زَوَاحِف", pronunciation: "Zawāḥif", ipa: "zaˈwaːħif", meaning: "Reptile", type: "derived", requires: ["root_zhf"], pos: "noun", grammar: "agent" },
            { id: "n_ar_ext_41", lang: "ar", level: 2, word: "نَوْع", pronunciation: "Naw'", ipa: "nawʕ", meaning: "Species", type: "derived", requires: ["root_nwa"], pos: "noun" },
            { id: "n_ar_ext_42", lang: "ar", level: 2, word: "عُشّ", pronunciation: "'Ushsh", ipa: "ʕuʃʃ", meaning: "Nest", type: "derived", requires: ["root_ash"], pos: "noun" },
            { id: "n_ar_ext_43", lang: "ar", level: 2, word: "أَثَر", pronunciation: "Athar", ipa: "ˈʔaθar", meaning: "Footprint", type: "derived", requires: ["root_athr"], pos: "noun" },
            { id: "n_ar_ext_44", lang: "ar", level: 2, word: "بِيئَة", pronunciation: "Bī'a", ipa: "ˈbiːʔa", meaning: "Environment", type: "derived", requires: ["root_bwa"], pos: "noun" },
            { id: "n_ar_ext_45", lang: "ar", level: 2, word: "طَبِيعَة", pronunciation: "Ṭabī'a", ipa: "tˤaˈbiːʕa", meaning: "Nature", type: "derived", requires: ["root_nbt"], pos: "noun" }, 
            { id: "n_ar_ext_46", lang: "ar", level: 2, word: "تَلَوُّث", pronunciation: "Talawwuth", ipa: "taˈlawwuθ", meaning: "Pollution", type: "derived", requires: ["root_lwth"], pos: "noun" },
            { id: "n_ar_ext_47", lang: "ar", level: 2, word: "حِمَايَة", pronunciation: "Ḥimāya", ipa: "ħiˈmaːja", meaning: "Protection", type: "derived", requires: ["root_hmy"], pos: "noun" },
            { id: "n_ar_ext_48", lang: "ar", level: 2, word: "مَمَرّ", pronunciation: "Mamarr", ipa: "maˈmarr", meaning: "Path / Trail", type: "derived", requires: ["root_mrr"], pos: "place", grammar: "place" }
        ]
    },

    // ==========================================
    // 4. TRAVEL
    // ==========================================
    "viaggio_zh": {
        title: "Travel (Chinese)", 
        tags: ["travel", "zh"],
        cards: [
            // --- OLD CARDS ---
            { id: "v_zh1", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "To Go", type: "base", pos: "verb_move", grammar: "verb" },
            { id: "v_zh3", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "To Fly", type: "base", pos: "verb", grammar: "verb" },
            // Macchina (Legno + ...) -> Richiede Albero
            { id: "v_zh4", lang: "zh", level: 2, word: "机", pronunciation: "jī", ipa: "t͡ɕi⁵⁵", meaning: "Machine", type: "derived", requires: ["rad_albero"], pos: "noun" },
            // Aereo (Volare + Macchina) -> Richiede Volare e Macchina
            { id: "v_zh5", lang: "zh", level: 3, word: "飞机", pronunciation: "fēijī", ipa: "feɪ̯⁵⁵ t͡ɕi⁵⁵", meaning: "Airplane", type: "derived", requires: ["v_zh3", "v_zh4"], pos: "noun" },
            // Treno (Veicolo + Fuoco) -> Richiede Fuoco e Veicolo
            { id: "v_zh6", lang: "zh", level: 2, word: "火车", pronunciation: "huǒchē", ipa: "xwɔ²¹⁴ t͡ʂʰɤ⁵⁵", meaning: "Train", type: "derived", requires: ["rad_fuoco", "rad_veicolo"], pos: "noun" },
            { id: "v_zh7", lang: "zh", level: 2, word: "车站", pronunciation: "chēzhàn", ipa: "t͡ʂʰɤ⁵⁵ t͡ʂan⁵¹", meaning: "Station", type: "derived", requires: ["rad_veicolo"], pos: "place", grammar: "place" },
            // Ingresso (Porta + Bocca) -> Richiede Porta e Bocca
            { id: "v_zh16", lang: "zh", level: 2, word: "门口", pronunciation: "ménkǒu", ipa: "mən³⁵ kʰoʊ̯²¹⁴", meaning: "Entrance / Gate", type: "derived", requires: ["rad_porta", "rad_bocca"], pos: "place", grammar: "place" },

            // --- NEW EXTENDED CARDS ---
            { id: "v_zh_ext_1", lang: "zh", level: 2, word: "交通", pronunciation: "jiāotōng", ipa: "tɕjɑʊ̯˥ tʰʊŋ˥", meaning: "Transport", type: "base", pos: "noun" },
            
            // Aeroporto (Macchina + Campo) -> Richiede Macchina e Campo
            { id: "v_zh_ext_2", lang: "zh", level: 3, word: "机场", pronunciation: "jīchǎng", ipa: "tɕi˥ ʈʂʰɑŋ˨˩˦", meaning: "Airport", type: "derived", requires: ["v_zh4", "rad_campo"], pos: "place", grammar: "place" },
            
            { id: "v_zh_ext_3", lang: "zh", level: 2, word: "航班", pronunciation: "hángbān", ipa: "xɑŋ˧˥ ban˥", meaning: "Flight", type: "base", pos: "noun" },
            
            // Partenza (Uscire + Inviare) -> Richiede Uscire
            { id: "v_zh_ext_4", lang: "zh", level: 2, word: "出发", pronunciation: "chūfā", ipa: "ʈʂʰu˥ fa˥", meaning: "Departure", type: "derived", requires: ["base_uscire"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_ext_5", lang: "zh", level: 2, word: "到达", pronunciation: "dàodá", ipa: "tɑʊ̯˥˩ da˧˥", meaning: "Arrival", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_ext_6", lang: "zh", level: 2, word: "晚点", pronunciation: "wǎndiǎn", ipa: "wan˨˩˦ djɛn˨˩˦", meaning: "Delay", type: "base", pos: "noun" },
            { id: "v_zh_ext_7", lang: "zh", level: 2, word: "票", pronunciation: "piào", ipa: "pʰjɑʊ̯˥˩", meaning: "Ticket", type: "base", pos: "noun" },
            
            // Passaporto (Mano + Porta + ...) -> Proteggere (Mano) + Foto. Usiamo Mano come requisito base.
            { id: "v_zh_ext_8", lang: "zh", level: 2, word: "护照", pronunciation: "hùzhào", ipa: "xu˥˩ ʈʂɑʊ̯˥˩", meaning: "Passport", type: "derived", requires: ["rad_mano"], pos: "noun" },
            
            // Bagaglio (Albero nel carattere Li) -> Richiede Albero
            { id: "v_zh_ext_9", lang: "zh", level: 2, word: "行李", pronunciation: "xíngli", ipa: "ɕiŋ˧˥ li", meaning: "Luggage", type: "derived", requires: ["rad_albero"], pos: "noun" },
            
            // Alloggio (Persona + ...) -> Richiede Persona
            { id: "v_zh_ext_12", lang: "zh", level: 2, word: "住宿", pronunciation: "zhùsù", ipa: "ʈʂu˥˩ su˥˩", meaning: "Accommodation", type: "derived", requires: ["rad_uomo"], pos: "noun" },
            
            // Prenotazione (Parola + ...) -> Richiede Parola
            { id: "v_zh_ext_13", lang: "zh", level: 2, word: "预订", pronunciation: "yùdìng", ipa: "y˥˩ diŋ˥˩", meaning: "Reservation", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Hotel (Alcol[Acqua] + Negozio[Tetto]) -> Richiede Acqua e Tetto
            { id: "v_zh_ext_14", lang: "zh", level: 3, word: "酒店", pronunciation: "jiǔdiàn", ipa: "tɕjoʊ̯˨˩˦ djɛn˥˩", meaning: "Hotel", type: "derived", requires: ["rad_acqua", "rad_tetto"], pos: "place", grammar: "place" },
            
            { id: "v_zh_ext_15", lang: "zh", level: 2, word: "前台", pronunciation: "qiántái", ipa: "tɕʰjɛn˧˥ tʰaɪ̯˧˥", meaning: "Reception", type: "base", pos: "place", grammar: "place" },
            
            // Chiave (Metallo + ...) -> Richiede Metallo
            { id: "v_zh_ext_16", lang: "zh", level: 2, word: "钥匙", pronunciation: "yàoshi", ipa: "jɑʊ̯˥˩ ʂz̩", meaning: "Key", type: "derived", requires: ["rad_metallo"], pos: "noun" },
            
            // Stanza (Porta + Sole) -> Richiede Porta e Sole
            { id: "v_zh_ext_17", lang: "zh", level: 2, word: "房间", pronunciation: "fángjiān", ipa: "fɑŋ˧˥ tɕjɛn˥", meaning: "Room", type: "derived", requires: ["rad_porta", "rad_sole"], pos: "place", grammar: "place" },
            
            // Check-in (Entrare[Uomo] + Vivere[Uomo]) -> Richiede Persona
            { id: "v_zh_ext_18", lang: "zh", level: 2, word: "入住", pronunciation: "rùzhù", ipa: "ʐu˥˩ ʈʂu˥˩", meaning: "Check-in", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },
            { id: "v_zh_ext_19", lang: "zh", level: 2, word: "退房", pronunciation: "tuìfáng", ipa: "tʰweɪ̯˥˩ fɑŋ˧˥", meaning: "Check-out", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_ext_20", lang: "zh", level: 2, word: "毛巾", pronunciation: "máojīn", ipa: "mɑʊ̯˧˥ tɕin˥", meaning: "Towel", type: "base", pos: "noun" },
            
            // Aria Condizionata (Buco + ...) -> Richiede Tetto (buco sotto tetto)
            { id: "v_zh_ext_21", lang: "zh", level: 2, word: "空调", pronunciation: "kōngtiáo", ipa: "kʰʊŋ˥ tʰjɑʊ̯˧˥", meaning: "Air Conditioning", type: "derived", requires: ["rad_tetto"], pos: "noun" },
            
            { id: "v_zh_ext_22", lang: "zh", level: 2, word: "无线网", pronunciation: "wúxiànwǎng", ipa: "u˧˥ ɕjɛn˥˩ wɑŋ˨˩˦", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_zh_ext_23", lang: "zh", level: 2, word: "方向", pronunciation: "fāngxiàng", ipa: "fɑŋ˥ ɕjɑŋ˥˩", meaning: "Directions", type: "base", pos: "noun" },
            
            // Mappa (Terra + Immagine) -> Richiede Terra
            { id: "v_zh_ext_24", lang: "zh", level: 2, word: "地图", pronunciation: "dìtú", ipa: "ti˥˩ tʰu˧˥", meaning: "Map", type: "derived", requires: ["rad_terra"], pos: "noun" },
            
            // Centro Città (Città + Centro + Cuore) -> Richiede Mezzo e Cuore
            { id: "v_zh_ext_25", lang: "zh", level: 3, word: "市中心", pronunciation: "shìzhōngxīn", ipa: "ʂʐ̩˥˩ ʈʂʊŋ˥ ɕin˥", meaning: "City Center", type: "derived", requires: ["base_mezzo", "rad_cuore"], pos: "place", grammar: "place" },
            
            // Destra (Mano/Bocca) -> Richiede Bocca
            { id: "v_zh_ext_26", lang: "zh", level: 2, word: "右边", pronunciation: "yòubian", ipa: "joʊ̯˥˩ bjɛn", meaning: "Right", type: "derived", requires: ["rad_bocca"], pos: "noun" },
            
            // Sinistra (Lavoro) -> Richiede Lavoro (opzionale, lasciamo base per ora)
            { id: "v_zh_ext_27", lang: "zh", level: 2, word: "左边", pronunciation: "zuǒbian", ipa: "tswɔ˨˩˦ bjɛn", meaning: "Left", type: "base", pos: "noun" },
            { id: "v_zh_ext_28", lang: "zh", level: 2, word: "直走", pronunciation: "zhízǒu", ipa: "ʈʂʐ̩˧˥ zoʊ̯˨˩˦", meaning: "Straight", type: "base", pos: "verb" },
            { id: "v_zh_ext_29", lang: "zh", level: 2, word: "近", pronunciation: "jìn", ipa: "tɕin˥˩", meaning: "Near", type: "base", pos: "adj" },
            { id: "v_zh_ext_30", lang: "zh", level: 2, word: "远", pronunciation: "yuǎn", ipa: "ɥɛn˨˩˦", meaning: "Far", type: "base", pos: "adj" },
            
            // Metropolitana (Terra + Metallo) -> Richiede Terra e Metallo
            { id: "v_zh_ext_31", lang: "zh", level: 3, word: "地铁", pronunciation: "dìtiě", ipa: "ti˥˩ tʰjɛ˨˩˦", meaning: "Subway", type: "derived", requires: ["rad_terra", "rad_metallo"], pos: "noun" },
            
            // Taxi (Uscire + Affittare + Veicolo) -> Richiede Uscire e Veicolo
            { id: "v_zh_ext_32", lang: "zh", level: 3, word: "出租车", pronunciation: "chūzūchē", ipa: "ʈʂʰu˥ tsu˥ ʈʂʰɤ˥", meaning: "Taxi", type: "derived", requires: ["base_uscire", "rad_veicolo"], pos: "noun" },
            
            { id: "v_zh_ext_33", lang: "zh", level: 2, word: "站", pronunciation: "zhàn", ipa: "ʈʂan˥˩", meaning: "Stop", type: "base", pos: "place", grammar: "place" },
            
            // Cibo/Bevande (Mangiare + Bere) -> Richiede Mangiare
            { id: "v_zh_ext_34", lang: "zh", level: 2, word: "餐饮", pronunciation: "cānyǐn", ipa: "tsʰan˥ in˨˩˦", meaning: "Dining", type: "derived", requires: ["rad_mangiare"], pos: "noun" },
            
            // Ristorante (Cibo[Mangiare] + Negozio[Mangiare]) -> Richiede Mangiare
            { id: "v_zh_ext_35", lang: "zh", level: 2, word: "饭馆", pronunciation: "fànguǎn", ipa: "fan˥˩ kwan˨˩˦", meaning: "Restaurant", type: "derived", requires: ["rad_mangiare"], pos: "place", grammar: "place" },
            
            // Menu (Verdura[Erba] + Lista) -> Richiede Erba
            { id: "v_zh_ext_36", lang: "zh", level: 2, word: "菜单", pronunciation: "càidān", ipa: "tsʰaɪ̯˥˩ tan˥", meaning: "Menu", type: "derived", requires: ["rad_erba"], pos: "noun" },
            
            { id: "v_zh_ext_37", lang: "zh", level: 2, word: "买单", pronunciation: "mǎidān", ipa: "maɪ̯˨˩˦ tan˥", meaning: "Bill / Check", type: "base", pos: "verb" },
            { id: "v_zh_ext_38", lang: "zh", level: 1, word: "水", pronunciation: "shuǐ", ipa: "ʂweɪ̯˨˩˦", meaning: "Water", type: "base", pos: "noun" },
            
            // Colazione (Presto[Sole] + Pasto) -> Richiede Sole
            { id: "v_zh_ext_39", lang: "zh", level: 2, word: "早餐", pronunciation: "zǎocān", ipa: "tsɑʊ̯˨˩˦ tsʰan˥", meaning: "Breakfast", type: "derived", requires: ["rad_sole"], pos: "noun" },
            
            { id: "v_zh_ext_40", lang: "zh", level: 2, word: "午餐", pronunciation: "wǔcān", ipa: "u˨˩˦ tsʰan˥", meaning: "Lunch", type: "base", pos: "noun" },
            
            // Cena (Tardi[Sole] + Pasto) -> Richiede Sole
            { id: "v_zh_ext_41", lang: "zh", level: 2, word: "晚餐", pronunciation: "wǎncān", ipa: "wan˨˩˦ tsʰan˥", meaning: "Dinner", type: "derived", requires: ["rad_sole"], pos: "noun" },
            
            { id: "v_zh_ext_42", lang: "zh", level: 2, word: "素食", pronunciation: "sùshí", ipa: "su˥˩ ʂʐ̩˧˥", meaning: "Vegetarian", type: "base", pos: "noun" },
            
            // Delizioso (Buono + Mangiare[Bocca]) -> Richiede Buono e Bocca
            { id: "v_zh_ext_43", lang: "zh", level: 3, word: "好吃", pronunciation: "hǎochī", ipa: "xɑʊ̯˨˩˦ ʈʂʰʐ̩˥", meaning: "Delicious", type: "derived", requires: ["base_buono", "rad_bocca"], pos: "adj" },
            
            { id: "v_zh_ext_44", lang: "zh", level: 2, word: "超市", pronunciation: "chāoshì", ipa: "ʈʂʰɑʊ̯˥ ʂʐ̩˥˩", meaning: "Supermarket", type: "base", pos: "place", grammar: "place" },
            { id: "v_zh_ext_45", lang: "zh", level: 2, word: "紧急", pronunciation: "jǐnjí", ipa: "tɕin˨˩˦ tɕi˧˥", meaning: "Emergency", type: "base", pos: "noun" },
            { id: "v_zh_ext_46", lang: "zh", level: 2, word: "救命", pronunciation: "jiùmìng", ipa: "tɕjoʊ̯˥˩ miŋ˥˩", meaning: "Help!", type: "base", pos: "phrase" },
            { id: "v_zh_ext_47", lang: "zh", level: 2, word: "医院", pronunciation: "yīyuàn", ipa: "i˥ ɥɛn˥˩", meaning: "Hospital", type: "base", pos: "place", grammar: "place" },
            
            // Farmacia (Erba[Medicina] + Negozio) -> Richiede Erba
            { id: "v_zh_ext_48", lang: "zh", level: 2, word: "药店", pronunciation: "yàodiàn", ipa: "jɑʊ̯˥˩ djɛn˥˩", meaning: "Pharmacy", type: "derived", requires: ["rad_erba"], pos: "place", grammar: "place" },
            
            // Polizia (Rispetto[Parola] + Ispezione) -> Richiede Parola
            { id: "v_zh_ext_49", lang: "zh", level: 2, word: "警察", pronunciation: "jǐngchá", ipa: "tɕiŋ˨˩˦ ʈʂʰa˧˥", meaning: "Police", type: "derived", requires: ["rad_parola"], pos: "noun" },
            
            // Toilette (Lavare[Acqua] + Mano + Stanza[Porta+Sole]) -> Richiede Acqua, Mano, Porta
            { id: "v_zh_ext_50", lang: "zh", level: 4, word: "洗手间", pronunciation: "xǐshǒujiān", ipa: "ɕi˨˩˦ ʂoʊ̯˨˩˦ tɕjɛn˥", meaning: "Restroom", type: "derived", requires: ["rad_acqua", "rad_mano", "rad_porta"], pos: "place", grammar: "place" },
            
            // Soldi (Metallo) -> Richiede Metallo
            { id: "v_zh_ext_51", lang: "zh", level: 2, word: "钱", pronunciation: "qián", ipa: "tɕʰjɛn˧˥", meaning: "Money", type: "derived", requires: ["rad_metallo"], pos: "noun" },
            
            // Contanti (Attuale + Metallo) -> Richiede Metallo
            { id: "v_zh_ext_52", lang: "zh", level: 2, word: "现金", pronunciation: "xiànjīn", ipa: "ɕjɛn˥˩ tɕin˥", meaning: "Cash", type: "derived", requires: ["rad_metallo"], pos: "noun" },
            
            // Quanto costa? (Quanto + Soldi) -> Richiede Soldi
            { id: "v_zh_ext_53", lang: "zh", level: 3, word: "多少钱", pronunciation: "duōshǎo qián", ipa: "twɔ˥ ʂɑʊ̯˨˩˦ tɕʰjɛn˧˥", meaning: "How much?", type: "derived", requires: ["v_zh_ext_51"], pos: "phrase" },
            
            // Aperto (Aprire + Porta) -> Richiede Porta
            { id: "v_zh_ext_54", lang: "zh", level: 2, word: "开门", pronunciation: "kāimén", ipa: "kʰaɪ̯˥ mən˧˥", meaning: "Open", type: "derived", requires: ["rad_porta"], pos: "adj" },
            
            // Cambio valuta (Cambiare + Soldi) -> Richiede Soldi
            { id: "v_zh_ext_55", lang: "zh", level: 3, word: "换钱", pronunciation: "huànqián", ipa: "xwan˥˩ tɕʰjɛn˧˥", meaning: "Exchange", type: "derived", requires: ["v_zh_ext_51"], pos: "verb", grammar: "verb" },

            // --- COMBINATIONS FROM FUNDAMENTALS ---
            { id: "v_zh_combo_1", lang: "zh", level: 2, word: "出口", pronunciation: "chūkǒu", ipa: "ʈʂʰu⁵⁵ kʰoʊ̯²¹⁴", meaning: "Exit (noun)", type: "derived", requires: ["base_uscire", "rad_bocca"], pos: "place", grammar: "place" },
            { id: "v_zh_combo_2", lang: "zh", level: 3, word: "人口", pronunciation: "rénkǒu", ipa: "ʐən³⁵ kʰoʊ̯²¹⁴", meaning: "Population", type: "derived", requires: ["rad_uomo", "rad_bocca"], pos: "noun" },
            // Cellulare (Mano + Macchina)
            { id: "v_zh_combo_3", lang: "zh", level: 2, word: "手机", pronunciation: "shǒujī", ipa: "ʂoʊ̯²¹⁴ t͡ɕi⁵⁵", meaning: "Mobile Phone", type: "derived", requires: ["rad_mano", "v_zh4"], pos: "noun" },
            // Tram (Elettricità + Veicolo)
            { id: "v_zh_combo_4", lang: "zh", level: 2, word: "电车", pronunciation: "diànchē", ipa: "tjɛn⁵¹ ʈʂʰɤ⁵⁵", meaning: "Tram / Trolley", type: "derived", requires: ["rad_elettricita", "rad_veicolo"], pos: "noun" },
        ]
    },

   "viaggio_ja": {
        title: "Travel (Japanese)", 
        tags: ["travel", "ja"],
        cards: [
            // --- OLD CARDS ---
            { id: "v_ja1", lang: "ja", level: 1, word: "行く", pronunciation: "いく", ipa: "ikɯ", meaning: "To Go", type: "base", pos: "verb_move", grammar: "godan" },
            { id: "v_ja4", lang: "ja", level: 1, word: "駅", pronunciation: "えき", ipa: "eki", meaning: "Station", type: "base", pos: "place", grammar: "place" },
            
            // Treno (Elettricità + Veicolo) -> Richiede Elettricità e Veicolo
            { id: "v_ja6", lang: "ja", level: 2, word: "電車", pronunciation: "でんしゃ", ipa: "deɴɕa", meaning: "Train", type: "derived", requires: ["rad_elettricita_ja", "rad_veicolo_ja"], pos: "noun" },
            
            // Ingresso (Entrare + Bocca) -> Richiede Entrare e Bocca
            { id: "v_ja17", lang: "ja", level: 2, word: "入り口", pronunciation: "いりぐち", ipa: "iɾiɡɯt͡ɕi", meaning: "Entrance", type: "derived", requires: ["base_entrare_ja", "rad_bocca_ja"], pos: "place", grammar: "place" },

            // --- NEW EXTENDED CARDS ---
            { id: "v_ja_ext_1", lang: "ja", level: 2, word: "交通", pronunciation: "こうつう", ipa: "koːtsɯː", meaning: "Transport", type: "base", pos: "noun" },
            
            // Aeroporto (Cielo + Porto) -> Richiede Cielo (dal mazzo Natura)
            { id: "v_ja_ext_2", lang: "ja", level: 3, word: "空港", pronunciation: "くうこう", ipa: "kɯːkoː", meaning: "Airport", type: "derived", requires: ["n_ja_ext_27"], pos: "place", grammar: "place" },
            
            { id: "v_ja_ext_3", lang: "ja", level: 2, word: "フライト", pronunciation: "ふらいと", ipa: "ɸɯɾaito", meaning: "Flight", type: "base", pos: "noun" },
            
            // Partenza (Uscire + Partire) -> Richiede Uscire
            { id: "v_ja_ext_4", lang: "ja", level: 2, word: "出発", pronunciation: "しゅっぱつ", ipa: "ɕɯppatsɯ", meaning: "Departure", type: "derived", requires: ["base_uscire_ja"], pos: "verb" },
            
            { id: "v_ja_ext_5", lang: "ja", level: 2, word: "到着", pronunciation: "とうちゃく", ipa: "toːtɕakɯ", meaning: "Arrival", type: "base", pos: "verb" },
            { id: "v_ja_ext_6", lang: "ja", level: 2, word: "遅延", pronunciation: "ちえん", ipa: "tɕieɴ", meaning: "Delay", type: "base", pos: "noun" },
            { id: "v_ja_ext_7", lang: "ja", level: 2, word: "チケット", pronunciation: "ちけっと", ipa: "tɕiketto", meaning: "Ticket", type: "base", pos: "noun" },
            { id: "v_ja_ext_8", lang: "ja", level: 2, word: "パスポート", pronunciation: "ぱすぽーと", ipa: "pasɯpoːto", meaning: "Passport", type: "base", pos: "noun" },
            { id: "v_ja_ext_9", lang: "ja", level: 2, word: "荷物", pronunciation: "にもつ", ipa: "nimotsɯ", meaning: "Luggage", type: "base", pos: "noun" },
            { id: "v_ja_ext_12", lang: "ja", level: 2, word: "宿泊", pronunciation: "しゅくはく", ipa: "ɕɯkɯhakɯ", meaning: "Accommodation", type: "base", pos: "noun" },
            { id: "v_ja_ext_13", lang: "ja", level: 2, word: "予約", pronunciation: "よやく", ipa: "yoyakɯ", meaning: "Reservation", type: "base", pos: "verb" },
            { id: "v_ja_ext_14", lang: "ja", level: 2, word: "ホテル", pronunciation: "ほてる", ipa: "hoteɾɯ", meaning: "Hotel", type: "base", pos: "place", grammar: "place" },
            { id: "v_ja_ext_15", lang: "ja", level: 2, word: "フロント", pronunciation: "ふろんと", ipa: "ɸɯɾoɴto", meaning: "Reception", type: "base", pos: "place", grammar: "place" },
            
            // Chiave (Metallo) -> Richiede Metallo
            { id: "v_ja_ext_16", lang: "ja", level: 2, word: "鍵", pronunciation: "かぎ", ipa: "kaɡi", meaning: "Key", type: "derived", requires: ["rad_metallo_ja"], pos: "noun" },
            
            { id: "v_ja_ext_17", lang: "ja", level: 2, word: "部屋", pronunciation: "へや", ipa: "heya", meaning: "Room", type: "base", pos: "place", grammar: "place" },
            { id: "v_ja_ext_18", lang: "ja", level: 2, word: "チェックイン", pronunciation: "ちぇっくいん", ipa: "tɕekkɯiɴ", meaning: "Check-in", type: "base", pos: "verb" },
            { id: "v_ja_ext_19", lang: "ja", level: 2, word: "チェックアウト", pronunciation: "ちぇっくあうと", ipa: "tɕekkɯaɯto", meaning: "Check-out", type: "base", pos: "verb" },
            { id: "v_ja_ext_20", lang: "ja", level: 2, word: "タオル", pronunciation: "たおる", ipa: "taoɾɯ", meaning: "Towel", type: "base", pos: "noun" },
            { id: "v_ja_ext_21", lang: "ja", level: 2, word: "エアコン", pronunciation: "えあこん", ipa: "eakoɴ", meaning: "Air Conditioning", type: "base", pos: "noun" },
            { id: "v_ja_ext_22", lang: "ja", level: 2, word: "Wi-Fi", pronunciation: "わいふぁい", ipa: "waiphai", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_ja_ext_23", lang: "ja", level: 2, word: "方向", pronunciation: "ほうこう", ipa: "hoːkoː", meaning: "Direction", type: "base", pos: "noun" },
            
            // Mappa (Terra + Figura) -> Richiede Terra (dal mazzo Natura)
            { id: "v_ja_ext_24", lang: "ja", level: 2, word: "地図", pronunciation: "ちず", ipa: "tɕizɯ", meaning: "Map", type: "derived", requires: ["n_ja_ext_11"], pos: "noun" },
            
            { id: "v_ja_ext_25", lang: "ja", level: 2, word: "中心部", pronunciation: "ちゅうしんぶ", ipa: "tɕɯːɕimbɯ", meaning: "City Center", type: "base", pos: "place", grammar: "place" },
            { id: "v_ja_ext_26", lang: "ja", level: 2, word: "右", pronunciation: "みぎ", ipa: "miɡi", meaning: "Right", type: "base", pos: "noun" },
            { id: "v_ja_ext_27", lang: "ja", level: 2, word: "左", pronunciation: "ひだり", ipa: "hidaɾi", meaning: "Left", type: "base", pos: "noun" },
            { id: "v_ja_ext_28", lang: "ja", level: 2, word: "まっすぐ", pronunciation: "まっすぐ", ipa: "massɯɡɯ", meaning: "Straight", type: "base", pos: "adj" }, 
            { id: "v_ja_ext_29", lang: "ja", level: 2, word: "近い", pronunciation: "ちかい", ipa: "tɕikai", meaning: "Near", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "v_ja_ext_30", lang: "ja", level: 2, word: "遠い", pronunciation: "とおい", ipa: "toːi", meaning: "Far", type: "base", pos: "adj", grammar: "i-adj" },
            
            // Metropolitana (Terra + Sotto + Metallo) -> Richiede Terra, Sotto, Metallo
            { id: "v_ja_ext_31", lang: "ja", level: 3, word: "地下鉄", pronunciation: "ちかてつ", ipa: "tɕikatetsɯ", meaning: "Subway / Metro", type: "derived", requires: ["n_ja_ext_11", "base_sotto_ja", "rad_metallo_ja"], pos: "noun" },
            
            { id: "v_ja_ext_32", lang: "ja", level: 2, word: "タクシー", pronunciation: "たくしー", ipa: "takɯɕiː", meaning: "Taxi", type: "base", pos: "noun" },
            { id: "v_ja_ext_33", lang: "ja", level: 2, word: "バス停", pronunciation: "ばすてい", ipa: "basɯtei", meaning: "Bus Stop", type: "base", pos: "place", grammar: "place" },
            
            // Pasto (Mangiare + Cosa) -> Richiede Mangiare
            { id: "v_ja_ext_34", lang: "ja", level: 2, word: "食事", pronunciation: "しょくじ", ipa: "ɕokɯdʑi", meaning: "Meal", type: "derived", requires: ["rad_mangiare_ja"], pos: "noun" },
            
            { id: "v_ja_ext_35", lang: "ja", level: 2, word: "レストラン", pronunciation: "れすとらん", ipa: "ɾesɯtoɾaɴ", meaning: "Restaurant", type: "base", pos: "place", grammar: "place" },
            { id: "v_ja_ext_36", lang: "ja", level: 2, word: "メニュー", pronunciation: "めにゅー", ipa: "menjuː", meaning: "Menu", type: "base", pos: "noun" },
            { id: "v_ja_ext_37", lang: "ja", level: 2, word: "お会計", pronunciation: "おかいけい", ipa: "okaikei", meaning: "Check / Bill", type: "base", pos: "noun" },
            { id: "v_ja_ext_38", lang: "ja", level: 1, word: "水", pronunciation: "みず", ipa: "mizɯ", meaning: "Water", type: "base", pos: "noun" },
            
            // Colazione (Mattina + Riso/Pasto) -> Richiede Mangiare
            { id: "v_ja_ext_39", lang: "ja", level: 2, word: "朝ご飯", pronunciation: "あさごはん", ipa: "asaɡohaɴ", meaning: "Breakfast", type: "derived", requires: ["rad_mangiare_ja"], pos: "noun" },
            
            // Pranzo (Mezzogiorno + Riso/Pasto) -> Richiede Mangiare
            { id: "v_ja_ext_40", lang: "ja", level: 2, word: "昼ご飯", pronunciation: "ひるごはん", ipa: "hiɾɯɡohaɴ", meaning: "Lunch", type: "derived", requires: ["rad_mangiare_ja"], pos: "noun" },
            
            // Cena (Sera + Riso/Pasto) -> Richiede Mangiare
            { id: "v_ja_ext_41", lang: "ja", level: 2, word: "晩ご飯", pronunciation: "ばんごはん", ipa: "baɴɡohaɴ", meaning: "Dinner", type: "derived", requires: ["rad_mangiare_ja"], pos: "noun" },
            
            { id: "v_ja_ext_42", lang: "ja", level: 2, word: "ベジタリアン", pronunciation: "べじたりあん", ipa: "bedʑitaɾiaɴ", meaning: "Vegetarian", type: "base", pos: "noun" },
            { id: "v_ja_ext_43", lang: "ja", level: 2, word: "美味しい", pronunciation: "おいしい", ipa: "oiɕiː", meaning: "Delicious", type: "base", pos: "adj", grammar: "i-adj" },
            { id: "v_ja_ext_44", lang: "ja", level: 2, word: "スーパー", pronunciation: "すーぱー", ipa: "sɯːpaː", meaning: "Supermarket", type: "base", pos: "place", grammar: "place" },
            { id: "v_ja_ext_45", lang: "ja", level: 2, word: "緊急", pronunciation: "きんきゅう", ipa: "kiŋkjuː", meaning: "Emergency", type: "base", pos: "noun" },
            { id: "v_ja_ext_46", lang: "ja", level: 2, word: "助けて", pronunciation: "たすけて", ipa: "tasɯkete", meaning: "Help!", type: "base", pos: "phrase" },
            
            // Ospedale (Malattia + Istituzione) -> Malattia ha radicale simile, base per ora
            { id: "v_ja_ext_47", lang: "ja", level: 2, word: "病院", pronunciation: "びょういん", ipa: "bjoːiɴ", meaning: "Hospital", type: "base", pos: "place", grammar: "place" },
            
            // Farmacia (Medicina + Ufficio) -> Medicina ha radicale Erba. Richiede Erba.
            { id: "v_ja_ext_48", lang: "ja", level: 2, word: "薬局", pronunciation: "やっきょく", ipa: "jakkyokɯ", meaning: "Pharmacy", type: "derived", requires: ["rad_erba_ja"], pos: "place", grammar: "place" },
            
            { id: "v_ja_ext_49", lang: "ja", level: 2, word: "警察", pronunciation: "けいさつ", ipa: "keisatsɯ", meaning: "Police", type: "base", pos: "noun" },
            { id: "v_ja_ext_50", lang: "ja", level: 2, word: "トイレ", pronunciation: "といれ", ipa: "toiɾe", meaning: "Restroom / Toilet", type: "base", pos: "place", grammar: "place" },
            
            // Soldi (Kanji di Oro) -> Richiede Metallo/Oro
            { id: "v_ja_ext_51", lang: "ja", level: 2, word: "お金", pronunciation: "おかね", ipa: "okane", meaning: "Money", type: "derived", requires: ["rad_metallo_ja"], pos: "noun" },
            
            // Contanti (Presente + Oro) -> Richiede Metallo/Oro
            { id: "v_ja_ext_52", lang: "ja", level: 2, word: "現金", pronunciation: "げんきん", ipa: "ɡeŋkiɴ", meaning: "Cash", type: "derived", requires: ["rad_metallo_ja"], pos: "noun" },
            
            { id: "v_ja_ext_53", lang: "ja", level: 2, word: "いくら", pronunciation: "いくら", ipa: "ikɯɾa", meaning: "How much?", type: "base", pos: "phrase" },
            { id: "v_ja_ext_54", lang: "ja", level: 2, word: "営業中", pronunciation: "えいぎょうちゅう", ipa: "eiɡjoːtɕɯː", meaning: "Open (business)", type: "base", pos: "adj" },
            { id: "v_ja_ext_55", lang: "ja", level: 2, word: "両替", pronunciation: "りょうがえ", ipa: "ɾjoːɡae", meaning: "Currency Exchange", type: "base", pos: "noun" },

            // --- COMBINATIONS FROM FUNDAMENTALS ---
            { id: "v_ja_combo_1", lang: "ja", level: 2, word: "出口", pronunciation: "でぐち", ipa: "deɡɯtɕi", meaning: "Exit (noun)", type: "derived", requires: ["base_uscire_ja", "rad_bocca_ja"], pos: "place", grammar: "place" },
            { id: "v_ja_combo_2", lang: "ja", level: 2, word: "入口", pronunciation: "いりぐち", ipa: "iɾiɡɯtɕi", meaning: "Entrance", type: "derived", requires: ["base_entrare_ja", "rad_bocca_ja"], pos: "place", grammar: "place" },
            { id: "v_ja_combo_3", lang: "ja", level: 3, word: "人口", pronunciation: "じんこう", ipa: "dʑiŋkoː", meaning: "Population", type: "derived", requires: ["rad_uomo_ja", "rad_bocca_ja"], pos: "noun" },
            
            // Centro (Mezzo + Cuore) -> Il cuore è nel mezzo
            { id: "v_ja_combo_4", lang: "ja", level: 2, word: "中心", pronunciation: "ちゅうしん", ipa: "tɕɯːɕiɴ", meaning: "Center / Core", type: "derived", requires: ["base_mezzo_ja", "rad_cuore_ja"], pos: "place", grammar: "place" },
            
            // Tutto il giorno (Uno + Giorno + Mezzo) -> Nel mezzo di un giorno intero
            { id: "tm_ja_combo_1", lang: "ja", level: 3, word: "一日中", pronunciation: "いちにちじゅう", ipa: "itɕinitɕidʑɯː", meaning: "All day long", type: "derived", requires: ["num_ja1", "rad_sole_ja", "base_mezzo_ja"], pos: "noun" },
        ]
    },

   "viaggio_ar": {
        title: "Travel (Arabic)",
        tags: ["travel", "ar"],
        cards: [
            // --- OLD CARDS ---
            { id: "v_ar4", lang: "ar", level: 2, word: "سَفَر", pronunciation: "safar", ipa: "safar", meaning: "Travel", type: "derived", requires: ["root_sfr"], pos: "noun" },
            { id: "v_ar5", lang: "ar", level: 2, word: "مَطَار", pronunciation: "maṭār", ipa: "matˤaːr", meaning: "Airport", type: "derived", requires: ["root_tyr"], pos: "place", grammar: "place" },
            { id: "v_ar6", lang: "ar", level: 2, word: "طَائِرَة", pronunciation: "ṭā'ira", ipa: "tˤaːʔira", meaning: "Airplane", type: "derived", requires: ["root_tyr"], pos: "noun" },

            // --- NEW EXTENDED CARDS ---
            { id: "v_ar_ext_1", lang: "ar", level: 2, word: "النَّقْل", pronunciation: "An-naql", ipa: "anˈnaql", meaning: "Transport", type: "derived", requires: ["root_nql"], pos: "noun" },
            { id: "v_ar_ext_4", lang: "ar", level: 2, word: "مُغَادَرَة", pronunciation: "Mughādara", ipa: "muˈɣaːdara", meaning: "Departure", type: "derived", requires: ["root_ghdr"], pos: "noun" },
            { id: "v_ar_ext_5", lang: "ar", level: 2, word: "وُصُول", pronunciation: "Wuṣūl", ipa: "wuˈsˤuːl", meaning: "Arrival", type: "derived", requires: ["root_wsl"], pos: "noun" },
            { id: "v_ar_ext_6", lang: "ar", level: 2, word: "تَأْخِير", pronunciation: "Ta'khīr", ipa: "taʔˈxiːr", meaning: "Delay", type: "derived", requires: ["root_akhr"], pos: "noun" },
            { id: "v_ar_ext_7", lang: "ar", level: 2, word: "تَذْكِرَة", pronunciation: "Tadhkira", ipa: "ˈtaðkira", meaning: "Ticket", type: "derived", requires: ["root_dhkr"], pos: "noun" },
            
            // Passaporto (Permesso + Viaggio) -> Richiede Passare e Viaggiare
            { id: "v_ar_ext_8", lang: "ar", level: 3, word: "جَوَازُ سَفَر", pronunciation: "Jawāz safar", ipa: "dʒaˈwaːz ˈsafar", meaning: "Passport", type: "derived", requires: ["root_jwz", "root_sfr"], pos: "noun" },
            
            { id: "v_ar_ext_9", lang: "ar", level: 2, word: "حَقِيبَة", pronunciation: "Ḥaqība", ipa: "ħaˈqiːba", meaning: "Luggage / Bag", type: "derived", requires: ["root_hqb"], pos: "noun" },
            { id: "v_ar_ext_10", lang: "ar", level: 2, word: "قِطَار", pronunciation: "Qiṭār", ipa: "qiˈtˤɑːr", meaning: "Train", type: "derived", requires: ["root_qtr"], pos: "noun" },
            { id: "v_ar_ext_11", lang: "ar", level: 2, word: "مَحَطَّة", pronunciation: "Maḥaṭṭa", ipa: "maˈħatˤtˤa", meaning: "Station", type: "derived", requires: ["root_htt"], pos: "place", grammar: "place" },
            { id: "v_ar_ext_12", lang: "ar", level: 2, word: "إِقَامَة", pronunciation: "Iqāma", ipa: "iˈqaːma", meaning: "Accommodation", type: "derived", requires: ["root_qwm"], pos: "noun" },
            { id: "v_ar_ext_13", lang: "ar", level: 2, word: "حَجْز", pronunciation: "Ḥajz", ipa: "ħadʒz", meaning: "Reservation", type: "derived", requires: ["root_hjz"], pos: "noun" },
            { id: "v_ar_ext_14", lang: "ar", level: 2, word: "فُنْدُق", pronunciation: "Funduq", ipa: "ˈfunduq", meaning: "Hotel", type: "derived", requires: ["root_fndq"], pos: "place", grammar: "place" },
            { id: "v_ar_ext_15", lang: "ar", level: 2, word: "اِسْتِقْبَال", pronunciation: "Istiqbāl", ipa: "istiqˈbaːl", meaning: "Reception", type: "derived", requires: ["root_qbl"], pos: "place", grammar: "place" },
            
            // Chiave (Strumento per Aprire) -> Richiede Aprire
            { id: "v_ar_ext_16", lang: "ar", level: 2, word: "مِفْتَاح", pronunciation: "Miftāḥ", ipa: "mifˈtaːħ", meaning: "Key", type: "derived", requires: ["root_fth"], pos: "noun" },
            
            { id: "v_ar_ext_17", lang: "ar", level: 2, word: "غُرْفَة", pronunciation: "Ghurfa", ipa: "ˈɣurfa", meaning: "Room", type: "derived", requires: ["root_ghrf"], pos: "place", grammar: "place" },
            
            // Check-in (Registrare Arrivo) -> Richiede Registrare e Arrivare
            { id: "v_ar_ext_18", lang: "ar", level: 3, word: "تَسْجِيلُ الْوُصُول", pronunciation: "Tasjīl al-wuṣūl", ipa: "tasˈdʒiːl al wuˈsˤuːl", meaning: "Check-in", type: "derived", requires: ["root_sjl", "root_wsl"], pos: "noun" },
            
            // Check-out (Registrare Partenza) -> Richiede Registrare e Partire
            { id: "v_ar_ext_19", lang: "ar", level: 3, word: "تَسْجِيلُ الْمُغَادَرَة", pronunciation: "Tasjīl al-mughādara", ipa: "tasˈdʒiːl al muˈɣaːdara", meaning: "Check-out", type: "derived", requires: ["root_sjl", "root_ghdr"], pos: "noun" },
            
            { id: "v_ar_ext_20", lang: "ar", level: 2, word: "مِنْشَفَة", pronunciation: "Minshafa", ipa: "minˈʃafa", meaning: "Towel", type: "derived", requires: ["root_nshf"], pos: "noun" },
            { id: "v_ar_ext_21", lang: "ar", level: 2, word: "مُكَيِّفُ هَوَاء", pronunciation: "Mukayyif hawā'", ipa: "muˈkajjif haˈwaːʔ", meaning: "Air Conditioning", type: "derived", requires: ["root_kyf"], pos: "noun" },
            { id: "v_ar_ext_22", lang: "ar", level: 1, word: "وَايْ فَايْ", pronunciation: "Wāy Fāy", ipa: "waːj faːj", meaning: "Wi-Fi", type: "base", pos: "noun" },
            { id: "v_ar_ext_23", lang: "ar", level: 2, word: "اِتِّجَاهَات", pronunciation: "Ittijāhāt", ipa: "ittidʒaˈhaːt", meaning: "Directions", type: "derived", requires: ["root_wjh"], pos: "noun" }, // WJH added implicitly or treat as base if missed
            { id: "v_ar_ext_24", lang: "ar", level: 2, word: "خَرِيطَة", pronunciation: "Kharīṭa", ipa: "xaˈriːtˤa", meaning: "Map", type: "derived", requires: ["root_khrt"], pos: "noun" },
            { id: "v_ar_ext_25", lang: "ar", level: 2, word: "وَسَطُ الْمَدِينَة", pronunciation: "Wasaṭ al-madīna", ipa: "ˈwasatˤ al maˈdiːna", meaning: "City Center", type: "derived", requires: ["root_wst"], pos: "place", grammar: "place" },
            { id: "v_ar_ext_26", lang: "ar", level: 2, word: "يَمِين", pronunciation: "Yamīn", ipa: "jaˈmiːn", meaning: "Right", type: "derived", requires: ["root_ymn"], pos: "noun" },
            { id: "v_ar_ext_27", lang: "ar", level: 2, word: "يَسَار", pronunciation: "Yasār", ipa: "jaˈsaːr", meaning: "Left", type: "derived", requires: ["root_ysr"], pos: "noun" },
            { id: "v_ar_ext_28", lang: "ar", level: 2, word: "عَلَى طُول", pronunciation: "'Alā ṭūl", ipa: "ˈʕalaː tˤuːl", meaning: "Straight", type: "base", pos: "noun" },
            { id: "v_ar_ext_29", lang: "ar", level: 2, word: "قَرِيب", pronunciation: "Qarīb", ipa: "qaˈriːb", meaning: "Near", type: "derived", requires: ["root_qrb"], pos: "adj" },
            { id: "v_ar_ext_30", lang: "ar", level: 2, word: "بَعِيد", pronunciation: "Ba'īd", ipa: "baˈʕiːd", meaning: "Far", type: "base", pos: "adj" },
            
            // Metropolitana (Tunnel) -> Richiede Tunnel
            { id: "v_ar_ext_31", lang: "ar", level: 2, word: "مِتْرُو الْأَنْفَاق", pronunciation: "Mitrū al-anfāq", ipa: "ˈmitruː al ʔanˈfaːq", meaning: "Subway", type: "derived", requires: ["root_nfq"], pos: "noun" },
            
            { id: "v_ar_ext_32", lang: "ar", level: 2, word: "تَاكْسِي", pronunciation: "Tāksī", ipa: "ˈtaːksiː", meaning: "Taxi", type: "derived", requires: ["root_tks"], pos: "noun" },
            { id: "v_ar_ext_33", lang: "ar", level: 3, word: "مَوْقِفُ حَافِلَات", pronunciation: "Mawqif ḥāfilāt", ipa: "ˈmawqif ħaːfiˈlaːt", meaning: "Bus Stop", type: "derived", requires: ["root_htt"], pos: "place", grammar: "place" }, // Fermata (Mawqif) simile a Mahatta (H-T-T) o W-Q-F
            
            { id: "v_ar_ext_34", lang: "ar", level: 2, word: "طَعَام", pronunciation: "Ṭa'ām", ipa: "tˤaˈʕaːm", meaning: "Food", type: "derived", requires: ["root_tam"], pos: "noun" },
            
            // Ristorante (Luogo del Cibo) -> Richiede Cibo
            { id: "v_ar_ext_35", lang: "ar", level: 2, word: "مَطْعَم", pronunciation: "Maṭ'am", ipa: "ˈmatˤʕam", meaning: "Restaurant", type: "derived", requires: ["root_tam"], pos: "place", grammar: "place" },
            
            { id: "v_ar_ext_36", lang: "ar", level: 3, word: "قَائِمَةُ الطَّعَام", pronunciation: "Qā'imat aṭ-ṭa'ām", ipa: "ˈqaːʔimatˤ atˤ tˤaˈʕaːm", meaning: "Menu", type: "derived", requires: ["root_tam"], pos: "noun" },
            { id: "v_ar_ext_37", lang: "ar", level: 2, word: "الْحِسَاب", pronunciation: "Al-ḥisāb", ipa: "al ħiˈsaːb", meaning: "Check / Bill", type: "derived", requires: ["root_hsb"], pos: "noun" },
            
            // Acqua (Radice M-W-H)
            { id: "v_ar_ext_38", lang: "ar", level: 2, word: "مَاء", pronunciation: "Mā'", ipa: "maːʔ", meaning: "Water", type: "derived", requires: ["root_mwh"], pos: "noun" },
            
            { id: "v_ar_ext_39", lang: "ar", level: 2, word: "فُطُور", pronunciation: "Fuṭūr", ipa: "fuˈtˤuːr", meaning: "Breakfast", type: "derived", requires: ["root_ftr"], pos: "noun" },
            { id: "v_ar_ext_40", lang: "ar", level: 2, word: "غَدَاء", pronunciation: "Ghadā'", ipa: "ɣaˈdaːʔ", meaning: "Lunch", type: "derived", requires: ["root_ghdy"], pos: "noun" },
            { id: "v_ar_ext_41", lang: "ar", level: 2, word: "عَشَاء", pronunciation: "'Ashā'", ipa: "ʕaˈʃaːʔ", meaning: "Dinner", type: "derived", requires: ["root_ashy"], pos: "noun" },
            { id: "v_ar_ext_42", lang: "ar", level: 2, word: "نَبَاتِيّ", pronunciation: "Nabātī", ipa: "naˈbaːti", meaning: "Vegetarian", type: "derived", requires: ["root_nbt"], pos: "adj" },
            { id: "v_ar_ext_43", lang: "ar", level: 2, word: "لَذِيذ", pronunciation: "Ladhīdh", ipa: "laˈðiːð", meaning: "Delicious", type: "derived", requires: ["root_ldh"], pos: "adj" },
            
            // Supermercato (Mercato) -> Richiede Mercato
            { id: "v_ar_ext_44", lang: "ar", level: 2, word: "سُوبَرْمَارْكِت", pronunciation: "Sūbarmārkit", ipa: "suːbarˈmaːrkit", meaning: "Supermarket", type: "derived", requires: ["root_swq"], pos: "place", grammar: "place" },
            
            { id: "v_ar_ext_45", lang: "ar", level: 2, word: "طَوَارِئ", pronunciation: "Ṭawāri'", ipa: "tˤaˈwaːriʔ", meaning: "Emergency", type: "derived", requires: ["root_trq"], pos: "noun" },
            { id: "v_ar_ext_46", lang: "ar", level: 2, word: "النَّجْدَة!", pronunciation: "An-najda!", ipa: "anˈnadʒda", meaning: "Help!", type: "derived", requires: ["root_njd"], pos: "phrase" },
            
            // Ospedale (Luogo di guarigione) -> Richiede Guarire
            { id: "v_ar_ext_47", lang: "ar", level: 2, word: "مُسْتَشْفَى", pronunciation: "Mustashfā", ipa: "musˈtaʃfa", meaning: "Hospital", type: "derived", requires: ["root_shfy"], pos: "place", grammar: "place" },
            
            // Farmacia -> Richiede Radice S-D-L
            { id: "v_ar_ext_48", lang: "ar", level: 2, word: "صَيْدَلِيَّة", pronunciation: "Ṣaydaliyya", ipa: "sˤajdaˈlijːa", meaning: "Pharmacy", type: "derived", requires: ["root_sdl"], pos: "place", grammar: "place" },
            
            { id: "v_ar_ext_49", lang: "ar", level: 2, word: "شُرْطَة", pronunciation: "Shurṭa", ipa: "ˈʃurtˤa", meaning: "Police", type: "derived", requires: ["root_shrt"], pos: "noun" },
            
            // Toilette (Ciclo dell'Acqua) -> Richiede Ciclo e Acqua
            { id: "v_ar_ext_50", lang: "ar", level: 3, word: "دَوْرَةُ الْمِيَاه", pronunciation: "Dawrat al-miyāh", ipa: "ˈdawrat al miˈjaːh", meaning: "Restroom", type: "derived", requires: ["root_dwr", "root_mwh"], pos: "place", grammar: "place" },
            
            { id: "v_ar_ext_51", lang: "ar", level: 2, word: "نُقُود", pronunciation: "Nuqūd", ipa: "nuˈquːd", meaning: "Money", type: "derived", requires: ["root_nqd"], pos: "noun" },
            { id: "v_ar_ext_52", lang: "ar", level: 2, word: "نَقْد", pronunciation: "Naqd", ipa: "naqd", meaning: "Cash", type: "derived", requires: ["root_nqd"], pos: "noun" },
            
            // Quanto costa? (Quanto Prezzo?) -> Prezzo è S-'-R, usiamo Soldi come prerequisito per ora
            { id: "v_ar_ext_53", lang: "ar", level: 2, word: "كَمِ السِّعْر؟", pronunciation: "Kam as-si'r?", ipa: "kam asˈsiʔr", meaning: "How much?", type: "derived", requires: ["root_nqd"], pos: "phrase" },
            
            // Aperto (Passivo di Aprire) -> Richiede Aprire
            { id: "v_ar_ext_54", lang: "ar", level: 2, word: "مَفْتُوح", pronunciation: "Maftūḥ", ipa: "mafˈtuːħ", meaning: "Open", type: "derived", requires: ["root_fth"], pos: "adj" },
            
            // Cambio (Cambiare + Monete) -> Richiede Cambiare
            { id: "v_ar_ext_55", lang: "ar", level: 3, word: "صَرْفُ الْعُمْلَات", pronunciation: "Ṣarf al-'umlāt", ipa: "sˤarf al ʕumˈlaːt", meaning: "Currency Exchange", type: "derived", requires: ["root_srf"], pos: "noun" },

            // --- OBJECTS & CONCEPTS DERIVED FROM ROOTS ---
            // Libro (Cosa scritta) -> Richiede Scrivere
            { id: "v_ar_extra_1", lang: "ar", level: 2, word: "كِتَاب", pronunciation: "Kitāb", ipa: "kitaːb", meaning: "Book", type: "derived", requires: ["root_ktb"], pos: "noun" },
            
            // Lezione (Cosa studiata) -> Richiede Studiare
            { id: "v_ar_extra_2", lang: "ar", level: 2, word: "دَرْس", pronunciation: "Dars", ipa: "dars", meaning: "Lesson", type: "derived", requires: ["root_drs"], pos: "noun" },
            
            // Lavoro (Azione) -> Richiede Lavorare
            { id: "v_ar_extra_3", lang: "ar", level: 2, word: "عَمَل", pronunciation: "'Amal", ipa: "ʕamal", meaning: "Work / Job", type: "derived", requires: ["root_aml"], pos: "noun" },
            
            // Scienza/Conoscenza -> Richiede Sapere
            { id: "v_ar_extra_4", lang: "ar", level: 2, word: "عِلْم", pronunciation: "'Ilm", ipa: "ʕilm", meaning: "Knowledge / Science", type: "derived", requires: ["root_alm"], pos: "noun" },
            
            // Parola -> Richiede Parlare
            { id: "v_ar_extra_5", lang: "ar", level: 2, word: "كَلِمَة", pronunciation: "Kalima", ipa: "kalima", meaning: "Word", type: "derived", requires: ["root_klm"], pos: "noun" },
            
            // Ascensore (Strumento per salire) -> Richiede Salire
            { id: "v_ar_extra_6", lang: "ar", level: 2, word: "مِصْعَد", pronunciation: "Miṣ'ad", ipa: "misˤʕad", meaning: "Elevator", type: "derived", requires: ["root_sad"], pos: "noun" },
            
            // Lavatrice (Strumento per lavare) -> Richiede Lavare
            { id: "v_ar_extra_7", lang: "ar", level: 2, word: "غَسَّالَة", pronunciation: "Ghassāla", ipa: "ɣassaːla", meaning: "Washing Machine", type: "derived", requires: ["root_ghsl"], pos: "noun" },
            
            // Bevanda -> Richiede Bere
            { id: "v_ar_extra_8", lang: "ar", level: 2, word: "مَشْرُوب", pronunciation: "Mashrūb", ipa: "maʃruːb", meaning: "Beverage", type: "derived", requires: ["root_shrb"], pos: "noun" },
            
            // Domanda -> Richiede Chiedere
            { id: "v_ar_extra_9", lang: "ar", level: 2, word: "سُؤَال", pronunciation: "Su'āl", ipa: "suʔaːl", meaning: "Question", type: "derived", requires: ["root_sal"], pos: "noun" },
            
            // Risposta -> Richiede Rispondere
            { id: "v_ar_extra_10", lang: "ar", level: 2, word: "جَوَاب", pronunciation: "Jawāb", ipa: "dʒawaːb", meaning: "Answer", type: "derived", requires: ["root_jwb"], pos: "noun" },
        ]
    },

"verbi_top100_zh": {
        title: "Top 100 Verbs (Chinese)",
        tags: ["verbs", "zh"],
        cards: [
            // 1. PILLAR VERBS
            { id: "v_zh_top_1", lang: "zh", level: 1, word: "是", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "To Be", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_2", lang: "zh", level: 1, word: "有", pronunciation: "yǒu", ipa: "joʊ̯²¹⁴", meaning: "To Have", type: "base", pos: "verb", grammar: "verb" },
            
            // Fare (Persona + Vecchio) -> Richiede Persona
            { id: "v_zh_top_3", lang: "zh", level: 2, word: "做", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "To Do / To Make", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_4", lang: "zh", level: 1, word: "干", pronunciation: "gàn", ipa: "kan⁵¹", meaning: "To Do / To Manage", type: "base", pos: "verb", grammar: "verb" },
            
            // Stare/Essere (Terra) -> Richiede Terra
            { id: "v_zh_top_5", lang: "zh", level: 2, word: "在", pronunciation: "zài", ipa: "tsaɪ̯⁵¹", meaning: "To Be (at/in)", type: "derived", requires: ["rad_terra"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_6", lang: "zh", level: 2, word: "成为", pronunciation: "chéngwéi", ipa: "ʈʂʰəŋ˧˥ weɪ̯˧˥", meaning: "To Become", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_7", lang: "zh", level: 2, word: "改变", pronunciation: "gǎibiàn", ipa: "kaɪ̯˨˩˦ pjɛn⁵¹", meaning: "To Change", type: "base", pos: "verb", grammar: "verb" },
            
            // Accadere (Nascere) -> Richiede Nascere
            { id: "v_zh_top_8", lang: "zh", level: 2, word: "发生", pronunciation: "fāshēng", ipa: "fa⁵⁵ ʂəŋ⁵⁵", meaning: "To Happen", type: "derived", requires: ["base_nascere"], pos: "verb", grammar: "verb" },

            // 2. MOVEMENT
            { id: "v_zh_top_9", lang: "zh", level: 1, word: "去", pronunciation: "qù", ipa: "tɕʰy⁵¹", meaning: "To Go", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_10", lang: "zh", level: 1, word: "来", pronunciation: "lái", ipa: "laɪ̯˧˥", meaning: "To Come", type: "base", pos: "verb", grammar: "verb" },
            
            // Tornare (Bocca nella Bocca) -> Richiede Bocca (visivamente simile)
            { id: "v_zh_top_11", lang: "zh", level: 2, word: "回", pronunciation: "huí", ipa: "xweɪ̯˧˥", meaning: "To Return", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            // Camminare (Terra + Piede) -> Richiede Terra
            { id: "v_zh_top_12", lang: "zh", level: 2, word: "走", pronunciation: "zǒu", ipa: "tsoʊ̯˨˩˦", meaning: "To Walk", type: "derived", requires: ["rad_terra"], pos: "verb", grammar: "verb" },
            
            // Correre (Piede) -> Richiede Piede
            { id: "v_zh_top_13", lang: "zh", level: 2, word: "跑", pronunciation: "pǎo", ipa: "pʰɑʊ̯˨˩˦", meaning: "To Run", type: "derived", requires: ["base_piede"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_14", lang: "zh", level: 1, word: "飞", pronunciation: "fēi", ipa: "feɪ̯⁵⁵", meaning: "To Fly", type: "base", pos: "verb", grammar: "verb" },
            
            // Partire (Uscire + Inviare) -> Richiede Uscire
            { id: "v_zh_top_15", lang: "zh", level: 2, word: "出发", pronunciation: "chūfā", ipa: "ʈʂʰu⁵⁵ fa⁵⁵", meaning: "To Depart", type: "derived", requires: ["base_uscire"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_16", lang: "zh", level: 2, word: "到", pronunciation: "dào", ipa: "tɑʊ̯⁵¹", meaning: "To Arrive", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_17", lang: "zh", level: 1, word: "进", pronunciation: "jìn", ipa: "tɕin⁵¹", meaning: "To Enter", type: "base", pos: "verb", grammar: "verb" },
            
            // Uscire (Questo è il verbo base, non richiede nulla)
            { id: "v_zh_top_18", lang: "zh", level: 1, word: "出", pronunciation: "chū", ipa: "ʈʂʰu⁵⁵", meaning: "To Exit", type: "base", pos: "verb", grammar: "verb" },
            
            // Sedersi (2 Persone sulla Terra) -> Richiede Persona e Terra
            { id: "v_zh_top_19", lang: "zh", level: 2, word: "坐", pronunciation: "zuò", ipa: "tswɔ⁵¹", meaning: "To Sit", type: "derived", requires: ["rad_uomo", "rad_terra"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_20", lang: "zh", level: 1, word: "站", pronunciation: "zhàn", ipa: "ʈʂan⁵¹", meaning: "To Stand", type: "base", pos: "verb", grammar: "verb" },
            
            // Fermarsi (Persona + Padiglione) -> Richiede Persona
            { id: "v_zh_top_21", lang: "zh", level: 2, word: "停", pronunciation: "tíng", ipa: "tʰiŋ˧˥", meaning: "To Stop", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_22", lang: "zh", level: 2, word: "过", pronunciation: "guò", ipa: "kwɔ⁵¹", meaning: "To Pass", type: "base", pos: "verb", grammar: "verb" },

            // 3. SENSES AND PERCEPTION
            // Guardare (Mano sopra Occhio) -> Richiede Mano
            { id: "v_zh_top_23", lang: "zh", level: 2, word: "看", pronunciation: "kàn", ipa: "kʰan⁵¹", meaning: "To Look / To Watch", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            
            // Ascoltare (Bocca) -> Richiede Bocca
            { id: "v_zh_top_24", lang: "zh", level: 2, word: "听", pronunciation: "tīng", ipa: "tʰiŋ⁵⁵", meaning: "To Listen", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            // Annusare (Orecchio nella Porta) -> Richiede Porta
            { id: "v_zh_top_25", lang: "zh", level: 2, word: "闻", pronunciation: "wén", ipa: "wən˧˥", meaning: "To Smell", type: "derived", requires: ["rad_porta"], pos: "verb", grammar: "verb" },
            
            // Toccare (Mano) -> Richiede Mano
            { id: "v_zh_top_26", lang: "zh", level: 2, word: "摸", pronunciation: "mō", ipa: "mwɔ⁵⁵", meaning: "To Touch", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            
            // Sembrare (Guardare + Venire) -> Richiede Guardare e Venire
            { id: "v_zh_top_27", lang: "zh", level: 3, word: "看起来", pronunciation: "kàn qǐlái", ipa: "kʰan⁵¹ tɕʰi˨˩˦ laɪ̯˧˥", meaning: "To Look like", type: "derived", requires: ["v_zh_top_23", "v_zh_top_10"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_28", lang: "zh", level: 2, word: "感觉", pronunciation: "gǎnjué", ipa: "kan˨˩˦ tɕɥɛ˧˥", meaning: "To Feel", type: "base", pos: "verb", grammar: "verb" },

            // 4. MIND AND FEELINGS
            // Pensare/Volere (Cuore) -> Richiede Cuore
            { id: "v_zh_top_29", lang: "zh", level: 2, word: "想", pronunciation: "xiǎng", ipa: "ɕjɑŋ˨˩˦", meaning: "To Think / To Want", type: "derived", requires: ["rad_cuore"], pos: "verb", grammar: "verb" },
            
            // Volere (Donna + Ovest) -> Richiede Donna
            { id: "v_zh_top_30", lang: "zh", level: 2, word: "要", pronunciation: "yào", ipa: "jɑʊ̯⁵¹", meaning: "To Want / To Need", type: "derived", requires: ["rad_donna"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_31", lang: "zh", level: 1, word: "爱", pronunciation: "ài", ipa: "aɪ̯⁵¹", meaning: "To Love", type: "base", pos: "verb", grammar: "verb" },
            
            // Piacere -> Richiede Bocca (gioia)
            { id: "v_zh_top_32", lang: "zh", level: 2, word: "喜欢", pronunciation: "xǐhuān", ipa: "ɕi˨˩˦ xwan⁵⁵", meaning: "To Like", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_33", lang: "zh", level: 1, word: "知道", pronunciation: "zhīdào", ipa: "ʈʂʐ̩⁵⁵ tɑʊ̯⁵¹", meaning: "To Know", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_34", lang: "zh", level: 1, word: "认识", pronunciation: "rènshi", ipa: "ʐən⁵¹ ʂi", meaning: "To Recognize / To Know", type: "base", pos: "verb", grammar: "verb" },
            
            // Capire (Cuore) -> Richiede Cuore
            { id: "v_zh_top_35", lang: "zh", level: 2, word: "懂", pronunciation: "dǒng", ipa: "tʊŋ˨˩˦", meaning: "To Understand", type: "derived", requires: ["rad_cuore"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_36", lang: "zh", level: 2, word: "明白", pronunciation: "míngbai", ipa: "miŋ˧˥ paɪ̯", meaning: "To Realize", type: "base", pos: "verb", grammar: "verb" },
            
            // Credere (Uomo + Parola) -> Richiede Uomo e Parola
            { id: "v_zh_top_37", lang: "zh", level: 3, word: "相信", pronunciation: "xiāngxìn", ipa: "ɕjɑŋ⁵⁵ ɕin⁵¹", meaning: "To Believe", type: "derived", requires: ["rad_uomo", "rad_parola"], pos: "verb", grammar: "verb" },
            
            // Ricordare (Parola + ...) -> Richiede Parola
            { id: "v_zh_top_38", lang: "zh", level: 2, word: "记得", pronunciation: "jìde", ipa: "tɕi⁵¹ d̥ə", meaning: "To Remember", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Dimenticare (Cuore + Parola) -> Richiede Cuore
            { id: "v_zh_top_39", lang: "zh", level: 3, word: "忘记", pronunciation: "wàngjì", ipa: "wɑŋ⁵¹ tɕi⁵¹", meaning: "To Forget", type: "derived", requires: ["rad_cuore"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_40", lang: "zh", level: 2, word: "希望", pronunciation: "xīwàng", ipa: "ɕi⁵⁵ wɑŋ⁵¹", meaning: "To Hope", type: "base", pos: "verb", grammar: "verb" },
            
            // Paura (Cuore + Bianco) -> Richiede Cuore
            { id: "v_zh_top_41", lang: "zh", level: 2, word: "怕", pronunciation: "pà", ipa: "pʰa⁵¹", meaning: "To Fear", type: "derived", requires: ["rad_cuore"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_42", lang: "zh", level: 2, word: "决定", pronunciation: "juédìng", ipa: "tɕɥɛ˧˥ tiŋ⁵¹", meaning: "To Decide", type: "base", pos: "verb", grammar: "verb" },

            // 5. COMMUNICATION
            // Parlare (Parola) -> Richiede Parola
            { id: "v_zh_top_43", lang: "zh", level: 2, word: "说", pronunciation: "shuō", ipa: "ʂwɔ⁵⁵", meaning: "To Speak", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Chiamare (Bocca) -> Richiede Bocca
            { id: "v_zh_top_44", lang: "zh", level: 2, word: "叫", pronunciation: "jiào", ipa: "tɕjɑʊ̯⁵¹", meaning: "To Call", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            // Chiedere (Porta + Bocca) -> Richiede Porta e Bocca
            { id: "v_zh_top_45", lang: "zh", level: 2, word: "问", pronunciation: "wèn", ipa: "wən⁵¹", meaning: "To Ask", type: "derived", requires: ["rad_porta", "rad_bocca"], pos: "verb", grammar: "verb" },
            
            // Rispondere (Tornare + Risposta) -> Richiede Tornare
            { id: "v_zh_top_46", lang: "zh", level: 3, word: "回答", pronunciation: "huídá", ipa: "xweɪ̯˧˥ ta˧˥", meaning: "To Answer", type: "derived", requires: ["v_zh_top_11"], pos: "verb", grammar: "verb" },
            
            // Dire/Informare (Bocca) -> Richiede Bocca
            { id: "v_zh_top_47", lang: "zh", level: 2, word: "告诉", pronunciation: "gàosu", ipa: "kɑʊ̯⁵¹ su", meaning: "To Tell", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_48", lang: "zh", level: 1, word: "写", pronunciation: "xiě", ipa: "ɕjɛ˨˩˦", meaning: "To Write", type: "base", pos: "verb", grammar: "verb" },
            
            // Leggere (Parola) -> Richiede Parola
            { id: "v_zh_top_49", lang: "zh", level: 2, word: "读", pronunciation: "dú", ipa: "tu˧˥", meaning: "To Read", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_50", lang: "zh", level: 2, word: "解释", pronunciation: "jiěshì", ipa: "tɕjɛ˨˩˦ ʂɻ̩⁵¹", meaning: "To Explain", type: "base", pos: "verb", grammar: "verb" },

            // 6. DAILY LIFE
            // Mangiare (Bocca) -> Richiede Bocca
            { id: "v_zh_top_51", lang: "zh", level: 2, word: "吃", pronunciation: "chī", ipa: "t͡ʂʰɻ̩⁵⁵", meaning: "To Eat", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            // Bere (Bocca) -> Richiede Bocca
            { id: "v_zh_top_52", lang: "zh", level: 2, word: "喝", pronunciation: "hē", ipa: "xɤ⁵⁵", meaning: "To Drink", type: "derived", requires: ["rad_bocca"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_53", lang: "zh", level: 1, word: "睡觉", pronunciation: "shuìjiào", ipa: "ʂweɪ̯⁵¹ tɕjɑʊ̯⁵¹", meaning: "To Sleep", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_54", lang: "zh", level: 2, word: "起床", pronunciation: "qǐchuáng", ipa: "tɕʰi˨˩˦ ʈʂʰwɑŋ˧˥", meaning: "To Wake Up", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_55", lang: "zh", level: 1, word: "买", pronunciation: "mǎi", ipa: "maɪ̯˨˩˦", meaning: "To Buy", type: "base", pos: "verb", grammar: "verb" },
            
            // Vendere (Comprare + Dieci) -> Richiede Comprare
            { id: "v_zh_top_56", lang: "zh", level: 2, word: "卖", pronunciation: "mài", ipa: "maɪ̯⁵¹", meaning: "To Sell", type: "derived", requires: ["v_zh_top_55"], pos: "verb", grammar: "verb" },
            
            // Pagare (Uomo) -> Richiede Uomo
            { id: "v_zh_top_57", lang: "zh", level: 2, word: "付", pronunciation: "fù", ipa: "fu⁵¹", meaning: "To Pay", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },
            
            // Spendere (Erba - stesso di fiore) -> Richiede Erba
            { id: "v_zh_top_58", lang: "zh", level: 2, word: "花", pronunciation: "huā", ipa: "xwa⁵⁵", meaning: "To Spend", type: "derived", requires: ["rad_erba"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_59", lang: "zh", level: 2, word: "穿", pronunciation: "chuān", ipa: "t͡ʂʰwan⁵⁵", meaning: "To Wear", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_60", lang: "zh", level: 2, word: "脱", pronunciation: "tuō", ipa: "tʰwɔ⁵⁵", meaning: "To Take off", type: "base", pos: "verb", grammar: "verb" },
            
            // Lavare (Acqua) -> Richiede Acqua
            { id: "v_zh_top_61", lang: "zh", level: 2, word: "洗", pronunciation: "xǐ", ipa: "ɕi˨˩˦", meaning: "To Wash", type: "derived", requires: ["rad_acqua"], pos: "verb", grammar: "verb" },
            
            // Cucinare (Fare + Cibo) -> Richiede Fare e Radicale Cibo
            { id: "v_zh_top_62", lang: "zh", level: 3, word: "做饭", pronunciation: "zuòfàn", ipa: "tswɔ⁵¹ fan⁵¹", meaning: "To Cook", type: "derived", requires: ["v_zh_top_3", "rad_mangiare"], pos: "verb", grammar: "verb" },
            
            // Lavorare (Lavoro + Fare) -> Richiede Fare
            { id: "v_zh_top_63", lang: "zh", level: 3, word: "工作", pronunciation: "gōngzuò", ipa: "kʊŋ⁵⁵ tswɔ⁵¹", meaning: "To Work", type: "derived", requires: ["v_zh_top_3"], pos: "verb", grammar: "verb" },
            
            // Studiare (Bambino sotto tetto + Pratica) -> Richiede Bambino
            { id: "v_zh_top_64", lang: "zh", level: 2, word: "学习", pronunciation: "xuéxí", ipa: "ɕɥɛ˧˥ ɕi˧˥", meaning: "To Study", type: "derived", requires: ["rad_bambino"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_65", lang: "zh", level: 1, word: "玩", pronunciation: "wán", ipa: "wan˧˥", meaning: "To Play", type: "base", pos: "verb", grammar: "verb" },
            
            // Riposare (Uomo + Albero) -> Richiede Uomo e Albero
            { id: "v_zh_top_66", lang: "zh", level: 2, word: "休息", pronunciation: "xiūxi", ipa: "ɕjoʊ̯⁵⁵ ɕi", meaning: "To Rest", type: "derived", requires: ["rad_uomo", "rad_albero"], pos: "verb", grammar: "verb" },

            // 7. ACTIONS WITH OBJECTS
            // Dare (Filo) -> Richiede Filo
            { id: "v_zh_top_67", lang: "zh", level: 2, word: "给", pronunciation: "gěi", ipa: "keɪ̯˨˩˦", meaning: "To Give", type: "derived", requires: ["base_filo"], pos: "verb", grammar: "verb" },
            
            // Tenere/Prendere (Mano) -> Richiede Mano
            { id: "v_zh_top_68", lang: "zh", level: 2, word: "拿", pronunciation: "ná", ipa: "na˧˥", meaning: "To Take / To Hold", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_69", lang: "zh", level: 1, word: "放", pronunciation: "fàng", ipa: "fɑŋ⁵¹", meaning: "To Put", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_70", lang: "zh", level: 2, word: "带", pronunciation: "dài", ipa: "taɪ̯⁵¹", meaning: "To Bring", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_71", lang: "zh", level: 1, word: "用", pronunciation: "yòng", ipa: "jʊŋ⁵¹", meaning: "To Use", type: "base", pos: "verb", grammar: "verb" },
            
            // Cercare (Mano) -> Richiede Mano
            { id: "v_zh_top_72", lang: "zh", level: 2, word: "找", pronunciation: "zhǎo", ipa: "ʈʂɑʊ̯˨˩˦", meaning: "To Look for", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            
            // Trovare (Cercare + Arrivare) -> Richiede Cercare
            { id: "v_zh_top_73", lang: "zh", level: 3, word: "找到", pronunciation: "zhǎodào", ipa: "ʈʂɑʊ̯˨˩˦ tɑʊ̯⁵¹", meaning: "To Find", type: "derived", requires: ["v_zh_top_72"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_74", lang: "zh", level: 2, word: "丢", pronunciation: "diū", ipa: "tjoʊ̯⁵⁵", meaning: "To Lose / Throw", type: "base", pos: "verb", grammar: "verb" },
            
            // Aprire/Guidare -> Base
            { id: "v_zh_top_75", lang: "zh", level: 1, word: "开", pronunciation: "kāi", ipa: "kʰaɪ̯⁵⁵", meaning: "To Open / Drive", type: "base", pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_76", lang: "zh", level: 1, word: "关", pronunciation: "guān", ipa: "kwan⁵⁵", meaning: "To Close", type: "base", pos: "verb", grammar: "verb" },
            
            // Tirare (Mano) -> Richiede Mano
            { id: "v_zh_top_77", lang: "zh", level: 2, word: "拉", pronunciation: "lā", ipa: "la⁵⁵", meaning: "To Pull", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            
            // Spingere (Mano) -> Richiede Mano
            { id: "v_zh_top_78", lang: "zh", level: 2, word: "推", pronunciation: "tuī", ipa: "tʰweɪ̯⁵⁵", meaning: "To Push", type: "derived", requires: ["rad_mano"], pos: "verb", grammar: "verb" },
            
            // Rompere (Terra + No) -> Richiede Terra
            { id: "v_zh_top_79", lang: "zh", level: 2, word: "坏", pronunciation: "huài", ipa: "xwaɪ̯⁵¹", meaning: "To Break", type: "derived", requires: ["rad_terra"], pos: "verb", grammar: "verb" },
            
            // Riparare (Uomo) -> Richiede Uomo
            { id: "v_zh_top_80", lang: "zh", level: 2, word: "修", pronunciation: "xiū", ipa: "ɕjoʊ̯⁵⁵", meaning: "To Repair", type: "derived", requires: ["rad_uomo"], pos: "verb", grammar: "verb" },

            // 8. SOCIAL AND OTHER
            { id: "v_zh_top_81", lang: "zh", level: 1, word: "帮", pronunciation: "bāng", ipa: "pɑŋ⁵⁵", meaning: "To Help", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_82", lang: "zh", level: 1, word: "等", pronunciation: "děng", ipa: "təŋ˨˩˦", meaning: "To Wait", type: "base", pos: "verb", grammar: "verb" },
            
            // Incontrarsi (Vedere + Faccia) -> Richiede Vedere
            { id: "v_zh_top_83", lang: "zh", level: 3, word: "见面", pronunciation: "jiànmiàn", ipa: "tɕjɛn⁵¹ mjɛn⁵¹", meaning: "To Meet", type: "derived", requires: ["v_zh_top_23"], pos: "verb", grammar: "verb" },
            
            // Invitare/Prego (Parola) -> Richiede Parola
            { id: "v_zh_top_84", lang: "zh", level: 2, word: "请", pronunciation: "qǐng", ipa: "tɕʰiŋ˨˩˦", meaning: "To Invite / Please", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Ringraziare (Parola) -> Richiede Parola
            { id: "v_zh_top_85", lang: "zh", level: 2, word: "谢谢", pronunciation: "xièxie", ipa: "ɕjɛ⁵¹ ɕjɛ", meaning: "To Thank", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Scusarsi (Parola) -> Richiede Parola
            { id: "v_zh_top_86", lang: "zh", level: 2, word: "道歉", pronunciation: "dàoqiàn", ipa: "tɑʊ̯⁵¹ tɕʰjɛn⁵¹", meaning: "To Apologize", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Iniziare (Aprire + Inizio) -> Richiede Aprire
            { id: "v_zh_top_87", lang: "zh", level: 2, word: "开始", pronunciation: "kāishǐ", ipa: "kʰaɪ̯⁵⁵ ʂɻ̩˨˩˦", meaning: "To Start", type: "derived", requires: ["v_zh_top_75"], pos: "verb", grammar: "verb" },
            
            // Finire (Filo + Albero) -> Richiede Filo e Albero
            { id: "v_zh_top_88", lang: "zh", level: 2, word: "结束", pronunciation: "jiéshù", ipa: "tɕjɛ˧˥ ʂu⁵¹", meaning: "To Finish", type: "derived", requires: ["base_filo", "rad_albero"], pos: "verb", grammar: "verb" },
            
            // Continuare (Filo) -> Richiede Filo
            { id: "v_zh_top_89", lang: "zh", level: 2, word: "继续", pronunciation: "jìxù", ipa: "tɕi⁵¹ ɕy⁵¹", meaning: "To Continue", type: "derived", requires: ["base_filo"], pos: "verb", grammar: "verb" },
            
            // Provare (Parola) -> Richiede Parola
            { id: "v_zh_top_90", lang: "zh", level: 2, word: "试", pronunciation: "shì", ipa: "ʂɻ̩⁵¹", meaning: "To Try", type: "derived", requires: ["rad_parola"], pos: "verb", grammar: "verb" },
            
            // Necessitare (Pioggia + Volere) -> Richiede Pioggia e Volere
            { id: "v_zh_top_91", lang: "zh", level: 3, word: "需要", pronunciation: "xūyào", ipa: "ɕy⁵⁵ jɑʊ̯⁵¹", meaning: "To Need", type: "derived", requires: ["rad_pioggia", "v_zh_top_30"], pos: "verb", grammar: "verb" },
            
            { id: "v_zh_top_92", lang: "zh", level: 1, word: "能", pronunciation: "néng", ipa: "nəŋ˧˥", meaning: "Can", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_93", lang: "zh", level: 1, word: "可以", pronunciation: "kěyǐ", ipa: "kʰɤ˨˩˦ i˨˩˦", meaning: "Can / May", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_94", lang: "zh", level: 2, word: "让", pronunciation: "ràng", ipa: "ʐɑŋ⁵¹", meaning: "To Let / Allow", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_95", lang: "zh", level: 2, word: "准备", pronunciation: "zhǔnbèi", ipa: "ʈʂwən˨˩˦ peɪ̯⁵¹", meaning: "To Prepare", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_96", lang: "zh", level: 2, word: "赢", pronunciation: "yíng", ipa: "iŋ˧˥", meaning: "To Win", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_97", lang: "zh", level: 2, word: "输", pronunciation: "shū", ipa: "ʂu⁵⁵", meaning: "To Lose", type: "base", pos: "verb", grammar: "verb" },
            { id: "v_zh_top_98", lang: "zh", level: 2, word: "死", pronunciation: "sǐ", ipa: "sz̩˨˩˦", meaning: "To Die", type: "base", pos: "verb", grammar: "verb" },
            
            // Vivere (Nascita + Acqua) -> Richiede Nascere e Acqua
            { id: "v_zh_top_99", lang: "zh", level: 2, word: "生活", pronunciation: "shēnghuó", ipa: "ʂəŋ⁵⁵ xwɔ˧˥", meaning: "To Live", type: "derived", requires: ["base_nascere", "rad_acqua"], pos: "verb", grammar: "verb" },
            
            // Nascere (Uscire + Nascita) -> Richiede Uscire e Nascere
            { id: "v_zh_top_100", lang: "zh", level: 2, word: "出生", pronunciation: "chūshēng", ipa: "ʈʂʰu⁵⁵ ʂəŋ⁵⁵", meaning: "To Be Born", type: "derived", requires: ["base_uscire", "base_nascere"], pos: "verb", grammar: "verb" },

        ]
    },

"verbi_top100_ja": {
        title: "Top 100 Verbs (Japanese)",
        tags: ["verbs", "ja"],
        cards: [
            // 1. PILLAR VERBS
            { id: "v_ja_top_1", lang: "ja", level: 1, word: "だ / です", pronunciation: "da / desu", ipa: "da / desɯ", meaning: "To Be", type: "base", pos: "verb", grammar: "irregular" },
            { id: "v_ja_top_2", lang: "ja", level: 1, word: "ある", pronunciation: "aru", ipa: "aɾɯ", meaning: "To Exist (inanimate)", type: "base", pos: "verb", grammar: "godan" },
            { id: "v_ja_top_3", lang: "ja", level: 1, word: "いる", pronunciation: "iru", ipa: "iɾɯ", meaning: "To Exist (living)", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_4", lang: "ja", level: 1, word: "する", pronunciation: "suru", ipa: "sɯɾɯ", meaning: "To Do", type: "base", pos: "verb", grammar: "irregular" },
            { id: "v_ja_top_5", lang: "ja", level: 2, word: "なる", pronunciation: "naru", ipa: "naɾɯ", meaning: "To Become", type: "base", pos: "verb", grammar: "godan" },
            
            // Avere/Tenere (Mano + Tempio) -> Richiede Mano
            { id: "v_ja_top_6", lang: "ja", level: 2, word: "持つ", pronunciation: "motsu", ipa: "motsɯ", meaning: "To Have / To Hold", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "godan" },

            // 2. MOVEMENT
            { id: "v_ja_top_7", lang: "ja", level: 1, word: "行く", pronunciation: "iku", ipa: "ikɯ", meaning: "To Go", type: "base", pos: "verb", grammar: "godan" },
            { id: "v_ja_top_8", lang: "ja", level: 1, word: "来る", pronunciation: "kuru", ipa: "kɯɾɯ", meaning: "To Come", type: "base", pos: "verb", grammar: "irregular" },
            { id: "v_ja_top_9", lang: "ja", level: 1, word: "帰る", pronunciation: "kaeru", ipa: "kaeɾɯ", meaning: "To Return", type: "base", pos: "verb", grammar: "godan" }, // Eccezione Godan!
            
            // Camminare (Fermare + Poco) -> Base
            { id: "v_ja_top_10", lang: "ja", level: 1, word: "歩く", pronunciation: "aruku", ipa: "aɾɯkɯ", meaning: "To Walk", type: "base", pos: "verb", grammar: "godan" },
            
            // Correre (Terra + Piede) -> Richiede Terra
            { id: "v_ja_top_11", lang: "ja", level: 2, word: "走る", pronunciation: "hashiru", ipa: "haɕiɾɯ", meaning: "To Run", type: "derived", requires: ["rad_terra_ja"], pos: "verb", grammar: "godan" }, // Eccezione Godan!
            
            // Nuotare (Acqua) -> Richiede Acqua
            { id: "v_ja_top_12", lang: "ja", level: 2, word: "泳ぐ", pronunciation: "oyogu", ipa: "ojoɡɯ", meaning: "To Swim", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_13", lang: "ja", level: 1, word: "飛ぶ", pronunciation: "tobu", ipa: "tobɯ", meaning: "To Fly", type: "base", pos: "verb", grammar: "godan" },
            
            // Entrare (Base)
            { id: "v_ja_top_14", lang: "ja", level: 1, word: "入る", pronunciation: "hairu", ipa: "haiɾɯ", meaning: "To Enter", type: "base", pos: "verb", grammar: "godan" }, // Eccezione Godan!
            
            // Uscire (Base)
            { id: "v_ja_top_15", lang: "ja", level: 1, word: "出る", pronunciation: "deru", ipa: "deɾɯ", meaning: "To Exit", type: "base", pos: "verb", grammar: "ichidan" },
            
            // Salire/Guidare (Albero + Persona) -> Richiede Albero
            { id: "v_ja_top_16", lang: "ja", level: 2, word: "乗る", pronunciation: "noru", ipa: "noɾɯ", meaning: "To Ride", type: "derived", requires: ["rad_albero_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_17", lang: "ja", level: 2, word: "降りる", pronunciation: "oriru", ipa: "oɾiɾɯ", meaning: "To Get off", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_18", lang: "ja", level: 2, word: "止まる", pronunciation: "tomaru", ipa: "tomaɾɯ", meaning: "To Stop", type: "base", pos: "verb", grammar: "godan" },
            
            // Attraversare (Acqua) -> Richiede Acqua
            { id: "v_ja_top_19", lang: "ja", level: 2, word: "渡る", pronunciation: "wataru", ipa: "wataɾɯ", meaning: "To Cross", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_20", lang: "ja", level: 2, word: "曲がる", pronunciation: "magaru", ipa: "maɡaɾɯ", meaning: "To Turn", type: "base", pos: "verb", grammar: "godan" },

            // 3. DAILY LIFE
            // Mangiare (Mangiare) -> Richiede Radicale Mangiare
            { id: "v_ja_top_21", lang: "ja", level: 2, word: "食べる", pronunciation: "taberu", ipa: "tabeɾɯ", meaning: "To Eat", type: "derived", requires: ["rad_mangiare_ja"], pos: "verb", grammar: "ichidan" },
            
            // Bere (Mangiare) -> Richiede Radicale Mangiare
            { id: "v_ja_top_22", lang: "ja", level: 2, word: "飲む", pronunciation: "nomu", ipa: "nomɯ", meaning: "To Drink", type: "derived", requires: ["rad_mangiare_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_23", lang: "ja", level: 1, word: "寝る", pronunciation: "neru", ipa: "neɾɯ", meaning: "To Sleep", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_24", lang: "ja", level: 2, word: "起きる", pronunciation: "okiru", ipa: "okiɾɯ", meaning: "To Wake up", type: "base", pos: "verb", grammar: "ichidan" },
            
            // Lavare (Acqua) -> Richiede Acqua
            { id: "v_ja_top_25", lang: "ja", level: 2, word: "洗う", pronunciation: "arau", ipa: "aɾaɯ", meaning: "To Wash", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "godan" },
            
            // Fare la doccia (Acqua) -> Richiede Acqua
            { id: "v_ja_top_26", lang: "ja", level: 2, word: "浴びる", pronunciation: "abiru", ipa: "abiɾɯ", meaning: "To Shower", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "ichidan" },
            
            // Spazzolare (Pietra) -> Richiede Pietra
            { id: "v_ja_top_27", lang: "ja", level: 2, word: "磨く", pronunciation: "migaku", ipa: "miɡakɯ", meaning: "To Brush", type: "derived", requires: ["rad_pietra_ja"], pos: "verb", grammar: "godan" },
            
            // Lavorare (Persona + Muovere) -> Richiede Persona e Forza
            { id: "v_ja_top_28", lang: "ja", level: 2, word: "働く", pronunciation: "hataraku", ipa: "hataɾakɯ", meaning: "To Work", type: "derived", requires: ["rad_uomo_ja", "rad_forza_ja"], pos: "verb", grammar: "godan" },
            
            // Studiare (Forza) -> Richiede Forza
            { id: "v_ja_top_29", lang: "ja", level: 2, word: "勉強する", pronunciation: "benkyou suru", ipa: "beŋkjoː sɯɾɯ", meaning: "To Study", type: "derived", requires: ["rad_forza_ja"], pos: "verb", grammar: "irregular" },
            
            // Riposare (Persona + Albero) -> Richiede Persona e Albero
            { id: "v_ja_top_30", lang: "ja", level: 3, word: "休む", pronunciation: "yasumu", ipa: "jasɯmɯ", meaning: "To Rest", type: "derived", requires: ["rad_uomo_ja", "rad_albero_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_31", lang: "ja", level: 1, word: "遊ぶ", pronunciation: "asobu", ipa: "asobɯ", meaning: "To Play", type: "base", pos: "verb", grammar: "godan" },
            
            // Abitare (Persona + Padrone) -> Richiede Persona
            { id: "v_ja_top_32", lang: "ja", level: 2, word: "住む", pronunciation: "sumu", ipa: "sɯmɯ", meaning: "To Live / Reside", type: "derived", requires: ["rad_uomo_ja"], pos: "verb", grammar: "godan" },
            
            // Vivere (Nascere) -> Richiede Nascere
            { id: "v_ja_top_33", lang: "ja", level: 2, word: "生きる", pronunciation: "ikiru", ipa: "ikiɾɯ", meaning: "To Live", type: "derived", requires: ["base_nascere_ja"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_34", lang: "ja", level: 2, word: "死ぬ", pronunciation: "shinu", ipa: "ɕinɯ", meaning: "To Die", type: "base", pos: "verb", grammar: "godan" },

            // 4. ACTIONS WITH OBJECTS
            // Comprare (Rete + Conchiglia/Soldi) -> Richiede Metallo/Soldi come proxy
            { id: "v_ja_top_35", lang: "ja", level: 2, word: "買う", pronunciation: "kau", ipa: "kaɯ", meaning: "To Buy", type: "derived", requires: ["rad_metallo_ja"], pos: "verb", grammar: "godan" },
            
            // Vendere (Soldi) -> Richiede Metallo/Soldi
            { id: "v_ja_top_36", lang: "ja", level: 2, word: "売る", pronunciation: "uru", ipa: "ɯɾɯ", meaning: "To Sell", type: "derived", requires: ["rad_metallo_ja"], pos: "verb", grammar: "godan" },
            
            // Pagare (Mano) -> Richiede Mano
            { id: "v_ja_top_37", lang: "ja", level: 2, word: "払う", pronunciation: "harau", ipa: "haɾaɯ", meaning: "To Pay", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "godan" },
            
            // Prendere (Orecchio + Mano) -> Richiede Orecchio
            { id: "v_ja_top_38", lang: "ja", level: 2, word: "取る", pronunciation: "toru", ipa: "toɾɯ", meaning: "To Take", type: "derived", requires: ["rad_orecchio_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_39", lang: "ja", level: 1, word: "置く", pronunciation: "oku", ipa: "okɯ", meaning: "To Put", type: "base", pos: "verb", grammar: "godan" },
            
            // Usare (Persona) -> Richiede Persona
            { id: "v_ja_top_40", lang: "ja", level: 2, word: "使う", pronunciation: "tsukau", ipa: "tsɯkaɯ", meaning: "To Use", type: "derived", requires: ["rad_uomo_ja"], pos: "verb", grammar: "godan" },
            
            // Costruire/Fare (Persona) -> Richiede Persona
            { id: "v_ja_top_41", lang: "ja", level: 2, word: "作る", pronunciation: "tsukuru", ipa: "tsɯkɯɾɯ", meaning: "To Make", type: "derived", requires: ["rad_uomo_ja"], pos: "verb", grammar: "godan" },
            
            // Aprire (Porta) -> Richiede Porta
            { id: "v_ja_top_42", lang: "ja", level: 2, word: "開ける", pronunciation: "akeru", ipa: "akeɾɯ", meaning: "To Open", type: "derived", requires: ["rad_porta_ja"], pos: "verb", grammar: "ichidan" },
            
            // Chiudere (Porta) -> Richiede Porta
            { id: "v_ja_top_43", lang: "ja", level: 2, word: "閉める", pronunciation: "shimeru", ipa: "ɕimeɾɯ", meaning: "To Close", type: "derived", requires: ["rad_porta_ja"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_44", lang: "ja", level: 2, word: "つける", pronunciation: "tsukeru", ipa: "tsɯkeɾɯ", meaning: "To Turn on", type: "base", pos: "verb", grammar: "ichidan" },
            
            // Spegnere (Acqua) -> Richiede Acqua
            { id: "v_ja_top_45", lang: "ja", level: 2, word: "消す", pronunciation: "kesu", ipa: "kesɯ", meaning: "To Turn off", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_46", lang: "ja", level: 2, word: "着る", pronunciation: "kiru", ipa: "kiɾɯ", meaning: "To Wear", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_47", lang: "ja", level: 2, word: "履く", pronunciation: "haku", ipa: "hakɯ", meaning: "To Wear (lower)", type: "base", pos: "verb", grammar: "godan" },
            { id: "v_ja_top_48", lang: "ja", level: 2, word: "脱ぐ", pronunciation: "nugu", ipa: "nɯɡɯ", meaning: "To Take off", type: "base", pos: "verb", grammar: "godan" },
            
            // Tagliare (Metallo/Spada) -> Richiede Metallo
            { id: "v_ja_top_49", lang: "ja", level: 2, word: "切る", pronunciation: "kiru", ipa: "kiɾɯ", meaning: "To Cut", type: "derived", requires: ["rad_metallo_ja"], pos: "verb", grammar: "godan" }, // Eccezione Godan!
            
            // Scattare (Mano) -> Richiede Mano
            { id: "v_ja_top_50", lang: "ja", level: 2, word: "撮る", pronunciation: "toru", ipa: "toɾɯ", meaning: "To Take (photo)", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "godan" },

            // 5. COMMUNICATION
            // Parlare (Parola) -> Richiede Parola
            { id: "v_ja_top_51", lang: "ja", level: 2, word: "話す", pronunciation: "hanasu", ipa: "hanasɯ", meaning: "To Speak", type: "derived", requires: ["rad_parola_ja"], pos: "verb", grammar: "godan" },
            
            // Dire (Parola) -> Richiede Parola
            { id: "v_ja_top_52", lang: "ja", level: 2, word: "言う", pronunciation: "iu", ipa: "iɯ", meaning: "To Say", type: "derived", requires: ["rad_parola_ja"], pos: "verb", grammar: "godan" },
            
            // Ascoltare (Porta + Orecchio) -> Richiede Porta e Orecchio
            { id: "v_ja_top_53", lang: "ja", level: 3, word: "聞く", pronunciation: "kiku", ipa: "kikɯ", meaning: "To Listen", type: "derived", requires: ["rad_porta_ja", "rad_orecchio_ja"], pos: "verb", grammar: "godan" },
            
            // Leggere (Parola) -> Richiede Parola
            { id: "v_ja_top_54", lang: "ja", level: 2, word: "読む", pronunciation: "yomu", ipa: "jomɯ", meaning: "To Read", type: "derived", requires: ["rad_parola_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_55", lang: "ja", level: 1, word: "書く", pronunciation: "kaku", ipa: "kakɯ", meaning: "To Write", type: "base", pos: "verb", grammar: "godan" },
            
            // Pensare (Campo + Cuore) -> Richiede Campo
            { id: "v_ja_top_56", lang: "ja", level: 2, word: "思う", pronunciation: "omou", ipa: "omoɯ", meaning: "To Think", type: "derived", requires: ["rad_campo_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_57", lang: "ja", level: 2, word: "考える", pronunciation: "kangaeru", ipa: "kaŋɡaeɾɯ", meaning: "To Consider", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_58", lang: "ja", level: 1, word: "知る", pronunciation: "shiru", ipa: "ɕiɾɯ", meaning: "To Know", type: "base", pos: "verb", grammar: "godan" }, // Eccezione Godan!
            { id: "v_ja_top_59", lang: "ja", level: 1, word: "分かる", pronunciation: "wakaru", ipa: "wakaɾɯ", meaning: "To Understand", type: "base", pos: "verb", grammar: "godan" },
            
            // Ricordare (Vedere) -> Richiede Vedere
            { id: "v_ja_top_60", lang: "ja", level: 2, word: "覚える", pronunciation: "oboeru", ipa: "oboeɾɯ", meaning: "To Remember", type: "derived", requires: ["v_ja_top_65"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_61", lang: "ja", level: 2, word: "忘れる", pronunciation: "wasureru", ipa: "wasɯɾeɾɯ", meaning: "To Forget", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_62", lang: "ja", level: 2, word: "教える", pronunciation: "oshieru", ipa: "oɕieɾɯ", meaning: "To Teach", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_63", lang: "ja", level: 2, word: "習う", pronunciation: "narau", ipa: "naɾaɯ", meaning: "To Learn", type: "base", pos: "verb", grammar: "godan" },
            
            // Chiamare (Bocca) -> Richiede Bocca
            { id: "v_ja_top_64", lang: "ja", level: 2, word: "呼ぶ", pronunciation: "yobu", ipa: "jobɯ", meaning: "To Call", type: "derived", requires: ["rad_bocca_ja"], pos: "verb", grammar: "godan" },

            // 6. SENSES AND FEELINGS
            { id: "v_ja_top_65", lang: "ja", level: 1, word: "見る", pronunciation: "miru", ipa: "miɾɯ", meaning: "To See", type: "base", pos: "verb", grammar: "ichidan" },
            
            // Mostrare (Vedere) -> Richiede Vedere
            { id: "v_ja_top_66", lang: "ja", level: 2, word: "見せる", pronunciation: "miseru", ipa: "miseɾɯ", meaning: "To Show", type: "derived", requires: ["v_ja_top_65"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_67", lang: "ja", level: 2, word: "感じる", pronunciation: "kanjiru", ipa: "kaɲdʑiɾɯ", meaning: "To Feel", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_68", lang: "ja", level: 2, word: "笑う", pronunciation: "warau", ipa: "waɾaɯ", meaning: "To Laugh", type: "base", pos: "verb", grammar: "godan" },
            
            // Piangere (Acqua) -> Richiede Acqua
            { id: "v_ja_top_69", lang: "ja", level: 2, word: "泣く", pronunciation: "naku", ipa: "nakɯ", meaning: "To Cry", type: "derived", requires: ["rad_acqua_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_70", lang: "ja", level: 2, word: "怒る", pronunciation: "okoru", ipa: "okoɾɯ", meaning: "To Get Angry", type: "base", pos: "verb", grammar: "godan" },
            
            // Piacere (Donna + Bambino) -> Richiede Donna e Bambino
            { id: "v_ja_top_71", lang: "ja", level: 3, word: "好む", pronunciation: "konomu", ipa: "konomɯ", meaning: "To Prefer", type: "derived", requires: ["rad_donna_ja", "rad_bambino_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_72", lang: "ja", level: 2, word: "楽しむ", pronunciation: "tanoshimu", ipa: "tanoɕimɯ", meaning: "To Enjoy", type: "base", pos: "verb", grammar: "godan" },
            { id: "v_ja_top_73", lang: "ja", level: 2, word: "驚く", pronunciation: "odoroku", ipa: "odoɾokɯ", meaning: "To Be Surprised", type: "base", pos: "verb", grammar: "godan" },
            
            // Essere in difficoltà (Albero nel Recinto) -> Richiede Albero
            { id: "v_ja_top_74", lang: "ja", level: 2, word: "困る", pronunciation: "komaru", ipa: "komaɾɯ", meaning: "To Be Troubled", type: "derived", requires: ["rad_albero_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_75", lang: "ja", level: 2, word: "疲れる", pronunciation: "tsukareru", ipa: "tsɯkaɾeɾɯ", meaning: "To Get Tired", type: "base", pos: "verb", grammar: "ichidan" },

            // 7. SOCIAL INTERACTION
            { id: "v_ja_top_76", lang: "ja", level: 1, word: "会う", pronunciation: "au", ipa: "aɯ", meaning: "To Meet", type: "base", pos: "verb", grammar: "godan" },
            
            // Aspettare (Andare + Tempio) -> Richiede Andare (o base)
            { id: "v_ja_top_77", lang: "ja", level: 1, word: "待つ", pronunciation: "matsu", ipa: "matsɯ", meaning: "To Wait", type: "base", pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_78", lang: "ja", level: 1, word: "あげる", pronunciation: "ageru", ipa: "aɡeɾɯ", meaning: "To Give", type: "base", pos: "verb", grammar: "ichidan" },
            { id: "v_ja_top_79", lang: "ja", level: 1, word: "もらう", pronunciation: "morau", ipa: "moɾaɯ", meaning: "To Receive", type: "base", pos: "verb", grammar: "godan" },
            
            // Prestare (Conchiglia/Soldi) -> Richiede Metallo/Soldi
            { id: "v_ja_top_80", lang: "ja", level: 2, word: "貸す", pronunciation: "kasu", ipa: "kasɯ", meaning: "To Lend", type: "derived", requires: ["rad_metallo_ja"], pos: "verb", grammar: "godan" },
            
            // Prendere in prestito (Persona) -> Richiede Persona
            { id: "v_ja_top_81", lang: "ja", level: 2, word: "借りる", pronunciation: "kariru", ipa: "kaɾiɾɯ", meaning: "To Borrow", type: "derived", requires: ["rad_uomo_ja"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_82", lang: "ja", level: 2, word: "返す", pronunciation: "kaesu", ipa: "kaesɯ", meaning: "To Return", type: "base", pos: "verb", grammar: "godan" },
            
            // Aiutare (Mano) -> Richiede Mano
            { id: "v_ja_top_83", lang: "ja", level: 2, word: "手伝う", pronunciation: "tetsudau", ipa: "tetsɯdaɯ", meaning: "To Help", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_84", lang: "ja", level: 1, word: "頑張る", pronunciation: "ganbaru", ipa: "ɡambaɾɯ", meaning: "To Do one's best", type: "base", pos: "verb", grammar: "godan" },

            // 8. OTHER USEFUL VERBS
            // Iniziare (Donna) -> Richiede Donna
            { id: "v_ja_top_85", lang: "ja", level: 2, word: "始める", pronunciation: "hajimeru", ipa: "hadʑimeɾɯ", meaning: "To Start", type: "derived", requires: ["rad_donna_ja"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_86", lang: "ja", level: 2, word: "始まる", pronunciation: "hajimaru", ipa: "hadʑimaɾɯ", meaning: "To Begin", type: "derived", requires: ["rad_donna_ja"], pos: "verb", grammar: "godan" },
            
            // Finire (Filo) -> Richiede Filo (che non abbiamo, lasciamo base)
            { id: "v_ja_top_87", lang: "ja", level: 2, word: "終わる", pronunciation: "owaru", ipa: "owaɾɯ", meaning: "To Finish", type: "base", pos: "verb", grammar: "godan" },
            
            // Continuare (Filo)
            { id: "v_ja_top_88", lang: "ja", level: 2, word: "続ける", pronunciation: "tsuzukeru", ipa: "tsɯzɯkeɾɯ", meaning: "To Continue", type: "base", pos: "verb", grammar: "ichidan" },
            
            // Cercare (Mano) -> Richiede Mano
            { id: "v_ja_top_89", lang: "ja", level: 2, word: "探す", pronunciation: "sagasu", ipa: "saɡasɯ", meaning: "To Search", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "godan" },
            
            // Trovare (Vedere) -> Richiede Vedere
            { id: "v_ja_top_90", lang: "ja", level: 2, word: "見つける", pronunciation: "mitsukeru", ipa: "mitsɯkeɾɯ", meaning: "To Find", type: "derived", requires: ["v_ja_top_65"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_91", lang: "ja", level: 2, word: "無くす", pronunciation: "nakusu", ipa: "nakɯsɯ", meaning: "To Lose", type: "base", pos: "verb", grammar: "godan" },
            
            // Vincere (Forza) -> Richiede Forza
            { id: "v_ja_top_92", lang: "ja", level: 2, word: "勝つ", pronunciation: "katsu", ipa: "katsɯ", meaning: "To Win", type: "derived", requires: ["rad_forza_ja"], pos: "verb", grammar: "godan" },
            
            // Perdere (Conchiglia/Soldi) -> Richiede Metallo/Soldi
            { id: "v_ja_top_93", lang: "ja", level: 2, word: "負ける", pronunciation: "makeru", ipa: "makeɾɯ", meaning: "To Lose", type: "derived", requires: ["rad_metallo_ja"], pos: "verb", grammar: "ichidan" },
            
            { id: "v_ja_top_94", lang: "ja", level: 2, word: "選ぶ", pronunciation: "erabu", ipa: "eɾabɯ", meaning: "To Choose", type: "base", pos: "verb", grammar: "godan" },
            { id: "v_ja_top_95", lang: "ja", level: 2, word: "違う", pronunciation: "chigau", ipa: "tɕiɡaɯ", meaning: "To Be Different", type: "base", pos: "verb", grammar: "godan" },
            
            // Sedersi (Persona + Terra) -> Richiede Persona e Terra
            { id: "v_ja_top_96", lang: "ja", level: 2, word: "座る", pronunciation: "suwaru", ipa: "sɯwaɾɯ", meaning: "To Sit", type: "derived", requires: ["rad_uomo_ja", "rad_terra_ja"], pos: "verb", grammar: "godan" },
            
            { id: "v_ja_top_97", lang: "ja", level: 1, word: "立つ", pronunciation: "tatsu", ipa: "tatsɯ", meaning: "To Stand", type: "base", pos: "verb", grammar: "godan" },
            
            // Necessitare (Donna) -> Richiede Donna
            { id: "v_ja_top_98", lang: "ja", level: 2, word: "要る", pronunciation: "iru", ipa: "iɾɯ", meaning: "To Need", type: "derived", requires: ["rad_donna_ja"], pos: "verb", grammar: "godan" }, // Eccezione Godan!
            
            // Spingere (Mano) -> Richiede Mano
            { id: "v_ja_top_99", lang: "ja", level: 2, word: "押す", pronunciation: "osu", ipa: "osɯ", meaning: "To Push", type: "derived", requires: ["rad_mano_ja"], pos: "verb", grammar: "godan" },
            
            // Tirare (Arco) -> Base
            { id: "v_ja_top_100", lang: "ja", level: 2, word: "引く", pronunciation: "hiku", ipa: "hikɯ", meaning: "To Pull", type: "base", pos: "verb", grammar: "godan" }
        ]
    },

"verbi_top100_ar": {
        title: "Top 100 Verbs (Arabic)",
        tags: ["verbs", "ar"],
        cards: [
            // 1. PILLAR VERBS
            { id: "v_ar_top_1", lang: "ar", level: 2, word: "كَانَ", pronunciation: "Kāna", ipa: "ˈkaːna", meaning: "To Be (past: was)", type: "derived", requires: ["root_kwn"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_2", lang: "ar", level: 2, word: "فَعَلَ", pronunciation: "Fa'ala", ipa: "ˈfaʕala", meaning: "To Do", type: "derived", requires: ["root_fal"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_3", lang: "ar", level: 2, word: "عَمِلَ", pronunciation: "'Amila", ipa: "ˈʕamila", meaning: "To Work / To Do", type: "derived", requires: ["root_aml"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_4", lang: "ar", level: 2, word: "مَلَكَ", pronunciation: "Malaka", ipa: "ˈmalaka", meaning: "To Possess / To Own", type: "derived", requires: ["root_mlk"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_5", lang: "ar", level: 2, word: "اِسْتَطَاعَ", pronunciation: "Istaṭā'a", ipa: "istaˈtˤɑːʕa", meaning: "To Be Able to", type: "derived", requires: ["root_twq"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_6", lang: "ar", level: 2, word: "أَصْبَحَ", pronunciation: "Aṣbaḥa", ipa: "ˈasˤbaħa", meaning: "To Become", type: "derived", requires: ["root_sbh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_7", lang: "ar", level: 2, word: "بَدَأَ", pronunciation: "Bada'a", ipa: "ˈbadaʔa", meaning: "To Start", type: "derived", requires: ["root_bda"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_8", lang: "ar", level: 2, word: "اِنْتَهَى", pronunciation: "Intahā", ipa: "inˈtahaː", meaning: "To Finish", type: "derived", requires: ["root_nhy"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_9", lang: "ar", level: 2, word: "حَدَثَ", pronunciation: "Ḥadatha", ipa: "ˈħadaθa", meaning: "To Happen", type: "derived", requires: ["root_hdth"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_10", lang: "ar", level: 2, word: "غَيَّرَ", pronunciation: "Ghayyara", ipa: "ˈɣajjara", meaning: "To Change", type: "derived", requires: ["root_ghyr"], pos: "verb", grammar: "verb" },

            // 2. MOVEMENT
            { id: "v_ar_top_11", lang: "ar", level: 2, word: "ذَهَبَ", pronunciation: "Dhahaba", ipa: "ˈðahaba", meaning: "To Go", type: "derived", requires: ["root_dhb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_12", lang: "ar", level: 2, word: "جَاءَ", pronunciation: "Jā'a", ipa: "ˈdʒaːʔa", meaning: "To Come", type: "derived", requires: ["root_jy"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_13", lang: "ar", level: 2, word: "خَرَجَ", pronunciation: "Kharaja", ipa: "ˈxaradʒa", meaning: "To Exit", type: "derived", requires: ["root_khrj"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_14", lang: "ar", level: 2, word: "دَخَلَ", pronunciation: "Dakhala", ipa: "ˈdaxala", meaning: "To Enter", type: "derived", requires: ["root_dkhl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_15", lang: "ar", level: 2, word: "وَصَلَ", pronunciation: "Waṣala", ipa: "ˈwasˤala", meaning: "To Arrive", type: "derived", requires: ["root_wsl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_16", lang: "ar", level: 2, word: "رَجَعَ", pronunciation: "Raja'a", ipa: "ˈradʒaʕa", meaning: "To Return", type: "derived", requires: ["root_rja"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_17", lang: "ar", level: 2, word: "مَشَى", pronunciation: "Mashā", ipa: "ˈmaʃaː", meaning: "To Walk", type: "derived", requires: ["root_mshy"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_18", lang: "ar", level: 2, word: "رَكَضَ", pronunciation: "Rakaḍa", ipa: "ˈrakadˤa", meaning: "To Run", type: "derived", requires: ["root_rkd"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_19", lang: "ar", level: 2, word: "جَلَسَ", pronunciation: "Jalasa", ipa: "ˈdʒalasa", meaning: "To Sit", type: "derived", requires: ["root_jls"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_20", lang: "ar", level: 2, word: "قَامَ", pronunciation: "Qāma", ipa: "ˈqaːma", meaning: "To Stand up", type: "derived", requires: ["root_qwm"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_21", lang: "ar", level: 2, word: "سَقَطَ", pronunciation: "Saqaṭa", ipa: "ˈsaqatˤa", meaning: "To Fall", type: "derived", requires: ["root_sqt"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_22", lang: "ar", level: 2, word: "سَافَرَ", pronunciation: "Sāfara", ipa: "ˈsaːfara", meaning: "To Travel", type: "derived", requires: ["root_sfr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_23", lang: "ar", level: 2, word: "طَارَ", pronunciation: "Ṭāra", ipa: "ˈtˤɑːra", meaning: "To Fly", type: "derived", requires: ["root_tyr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_24", lang: "ar", level: 2, word: "صَعِدَ", pronunciation: "Ṣa'ida", ipa: "ˈsˤaʕida", meaning: "To Climb", type: "derived", requires: ["root_sad"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_25", lang: "ar", level: 2, word: "نَزَلَ", pronunciation: "Nazala", ipa: "ˈnazala", meaning: "To Descend", type: "derived", requires: ["root_nzl"], pos: "verb", grammar: "verb" },

            // 3. SENSES AND PERCEPTION
            { id: "v_ar_top_26", lang: "ar", level: 2, word: "رَأَى", pronunciation: "Ra'ā", ipa: "ˈraʔaː", meaning: "To See", type: "derived", requires: ["root_ray"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_27", lang: "ar", level: 2, word: "نَظَرَ", pronunciation: "Naẓara", ipa: "ˈnazˤara", meaning: "To Look", type: "derived", requires: ["root_nzr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_28", lang: "ar", level: 2, word: "سَمِعَ", pronunciation: "Sami'a", ipa: "ˈsamiʕa", meaning: "To Hear", type: "derived", requires: ["root_sma"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_29", lang: "ar", level: 2, word: "شَعَرَ", pronunciation: "Sha'ara", ipa: "ˈʃaʕara", meaning: "To Feel", type: "derived", requires: ["root_shar"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_30", lang: "ar", level: 2, word: "لَمَسَ", pronunciation: "Lamasa", ipa: "ˈlamasa", meaning: "To Touch", type: "derived", requires: ["root_lms"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_31", lang: "ar", level: 2, word: "ذَاقَ", pronunciation: "Dhāqa", ipa: "ˈðaːqa", meaning: "To Taste", type: "derived", requires: ["root_dhwq"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_32", lang: "ar", level: 2, word: "بَدَا", pronunciation: "Badā", ipa: "ˈbadaː", meaning: "To Seem", type: "derived", requires: ["root_bdw"], pos: "verb", grammar: "verb" },

            // 4. MIND AND FEELINGS
            { id: "v_ar_top_33", lang: "ar", level: 2, word: "عَرَفَ", pronunciation: "'Arafa", ipa: "ˈʕarafa", meaning: "To Know", type: "derived", requires: ["root_arf"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_34", lang: "ar", level: 2, word: "فَهِمَ", pronunciation: "Fahima", ipa: "ˈfahima", meaning: "To Understand", type: "derived", requires: ["root_fhm"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_35", lang: "ar", level: 2, word: "فَكَّرَ", pronunciation: "Fakkara", ipa: "ˈfakkara", meaning: "To Think", type: "derived", requires: ["root_fkr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_36", lang: "ar", level: 2, word: "اِعْتَقَدَ", pronunciation: "I'taqada", ipa: "iʕˈtaqada", meaning: "To Believe", type: "derived", requires: ["root_aqd"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_37", lang: "ar", level: 2, word: "أَرَادَ", pronunciation: "Arāda", ipa: "ʔaˈraːda", meaning: "To Want", type: "derived", requires: ["root_rwd"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_38", lang: "ar", level: 2, word: "أَحَبَّ", pronunciation: "Aḥabba", ipa: "ʔaˈħabba", meaning: "To Love", type: "derived", requires: ["root_hbb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_39", lang: "ar", level: 2, word: "كَرِهَ", pronunciation: "Kariha", ipa: "ˈkariha", meaning: "To Hate", type: "derived", requires: ["root_krh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_40", lang: "ar", level: 2, word: "تَذَكَّرَ", pronunciation: "Tadhakkara", ipa: "taˈðakkara", meaning: "To Remember", type: "derived", requires: ["root_dhkr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_41", lang: "ar", level: 2, word: "نَسِيَ", pronunciation: "Nasiya", ipa: "ˈnasija", meaning: "To Forget", type: "derived", requires: ["root_nsy"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_42", lang: "ar", level: 2, word: "أَمَلَ", pronunciation: "Amala", ipa: "ˈʔamala", meaning: "To Hope", type: "derived", requires: ["root_aml"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_43", lang: "ar", level: 2, word: "خَافَ", pronunciation: "Khāfa", ipa: "ˈxaːfa", meaning: "To Fear", type: "derived", requires: ["root_khwf"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_44", lang: "ar", level: 2, word: "قَرَّرَ", pronunciation: "Qarrara", ipa: "ˈqarrara", meaning: "To Decide", type: "derived", requires: ["root_qrr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_45", lang: "ar", level: 2, word: "تَعَلَّمَ", pronunciation: "Ta'allama", ipa: "taˈʕallama", meaning: "To Learn", type: "derived", requires: ["root_alm"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_46", lang: "ar", level: 2, word: "عَلَّمَ", pronunciation: "'Allama", ipa: "ˈʕallama", meaning: "To Teach", type: "derived", requires: ["root_alm"], pos: "verb", grammar: "verb" },

            // 5. COMMUNICATION
            { id: "v_ar_top_47", lang: "ar", level: 2, word: "قَالَ", pronunciation: "Qāla", ipa: "ˈqaːla", meaning: "To Say", type: "derived", requires: ["root_qwl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_48", lang: "ar", level: 2, word: "تَكَلَّمَ", pronunciation: "Takallama", ipa: "taˈkallama", meaning: "To Speak", type: "derived", requires: ["root_klm"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_49", lang: "ar", level: 2, word: "سَأَلَ", pronunciation: "Sa'ala", ipa: "ˈsaʔala", meaning: "To Ask", type: "derived", requires: ["root_sal"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_50", lang: "ar", level: 2, word: "أَجَابَ", pronunciation: "Ajāba", ipa: "ʔaˈdʒaːba", meaning: "To Answer", type: "derived", requires: ["root_jwb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_51", lang: "ar", level: 2, word: "كَتَبَ", pronunciation: "Kataba", ipa: "ˈkataba", meaning: "To Write", type: "derived", requires: ["root_ktb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_52", lang: "ar", level: 2, word: "قَرَأَ", pronunciation: "Qara'a", ipa: "ˈqaraʔa", meaning: "To Read", type: "derived", requires: ["root_qra"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_53", lang: "ar", level: 2, word: "اِتَّصَلَ", pronunciation: "Ittaṣala", ipa: "itˈtasˤala", meaning: "To Call", type: "derived", requires: ["root_wsl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_54", lang: "ar", level: 2, word: "صَرَخَ", pronunciation: "Ṣarakha", ipa: "ˈsˤaraxa", meaning: "To Shout", type: "derived", requires: ["root_srkh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_55", lang: "ar", level: 2, word: "شَرَحَ", pronunciation: "Sharaḥa", ipa: "ˈʃaraħa", meaning: "To Explain", type: "derived", requires: ["root_shrh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_56", lang: "ar", level: 2, word: "تَرْجَمَ", pronunciation: "Tarjama", ipa: "ˈtardʒama", meaning: "To Translate", type: "derived", requires: ["root_trjm"], pos: "verb", grammar: "verb" },

            // 6. DAILY LIFE
            { id: "v_ar_top_57", lang: "ar", level: 2, word: "أَكَلَ", pronunciation: "Akala", ipa: "ˈʔakala", meaning: "To Eat", type: "derived", requires: ["root_akl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_58", lang: "ar", level: 2, word: "شَرِبَ", pronunciation: "Shariba", ipa: "ˈʃariba", meaning: "To Drink", type: "derived", requires: ["root_shrb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_59", lang: "ar", level: 2, word: "نَامَ", pronunciation: "Nāma", ipa: "ˈnaːma", meaning: "To Sleep", type: "derived", requires: ["root_nwm"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_60", lang: "ar", level: 2, word: "اِسْتَيْقَظَ", pronunciation: "Istayqaẓa", ipa: "isˈtajqazˤa", meaning: "To Wake up", type: "derived", requires: ["root_yqz"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_61", lang: "ar", level: 2, word: "اِشْتَرَى", pronunciation: "Ishtarā", ipa: "iʃˈtaraː", meaning: "To Buy", type: "derived", requires: ["root_shry"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_62", lang: "ar", level: 2, word: "بَاعَ", pronunciation: "Bā'a", ipa: "ˈbaːʕa", meaning: "To Sell", type: "derived", requires: ["root_bya"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_63", lang: "ar", level: 2, word: "دَفَعَ", pronunciation: "Dafa'a", ipa: "ˈdafaʕa", meaning: "To Pay", type: "derived", requires: ["root_dfa"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_64", lang: "ar", level: 2, word: "أَخَذَ", pronunciation: "Akhadha", ipa: "ˈʔaxaða", meaning: "To Take", type: "derived", requires: ["root_akhdh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_65", lang: "ar", level: 2, word: "أَعْطَى", pronunciation: "A'ṭā", ipa: "ˈʔaʕtˤaː", meaning: "To Give", type: "derived", requires: ["root_aty"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_66", lang: "ar", level: 2, word: "لَبِسَ", pronunciation: "Labisa", ipa: "ˈlabisa", meaning: "To Wear", type: "derived", requires: ["root_lbs"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_67", lang: "ar", level: 2, word: "خَلَعَ", pronunciation: "Khala'a", ipa: "ˈxalaʕa", meaning: "To Take off", type: "derived", requires: ["root_khla"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_68", lang: "ar", level: 2, word: "غَسَلَ", pronunciation: "Ghasala", ipa: "ˈɣasala", meaning: "To Wash", type: "derived", requires: ["root_ghsl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_69", lang: "ar", level: 2, word: "طَبَخَ", pronunciation: "Ṭabakha", ipa: "ˈtˤabaxa", meaning: "To Cook", type: "derived", requires: ["root_tbkh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_70", lang: "ar", level: 2, word: "سَكَنَ", pronunciation: "Sakana", ipa: "ˈsakana", meaning: "To Live / Reside", type: "derived", requires: ["root_skn"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_71", lang: "ar", level: 2, word: "عَاشَ", pronunciation: "'Āsha", ipa: "ˈʕaːʃa", meaning: "To Live (alive)", type: "derived", requires: ["root_aysh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_72", lang: "ar", level: 2, word: "مَاتَ", pronunciation: "Māta", ipa: "ˈmaːta", meaning: "To Die", type: "derived", requires: ["root_mwt"], pos: "verb", grammar: "verb" },

            // 7. ACTIONS WITH OBJECTS
            { id: "v_ar_top_73", lang: "ar", level: 2, word: "وَضَعَ", pronunciation: "Waḍa'a", ipa: "ˈwadˤaʕa", meaning: "To Put", type: "derived", requires: ["root_wda"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_74", lang: "ar", level: 2, word: "حَمَلَ", pronunciation: "Ḥamala", ipa: "ˈħamala", meaning: "To Carry", type: "derived", requires: ["root_hml"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_75", lang: "ar", level: 2, word: "فَتَحَ", pronunciation: "Fataḥa", ipa: "ˈfataħa", meaning: "To Open", type: "derived", requires: ["root_fth"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_76", lang: "ar", level: 2, word: "أَغْلَقَ", pronunciation: "Aghlaqa", ipa: "ˈʔaɣlaqa", meaning: "To Close", type: "derived", requires: ["root_ghlq"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_77", lang: "ar", level: 2, word: "كَسَرَ", pronunciation: "Kasara", ipa: "ˈkasara", meaning: "To Break", type: "derived", requires: ["root_ksr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_78", lang: "ar", level: 2, word: "أَصْلَحَ", pronunciation: "Aṣlaḥa", ipa: "ˈʔasˤlaħa", meaning: "To Repair", type: "derived", requires: ["root_slh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_79", lang: "ar", level: 2, word: "اِسْتَخْدَمَ", pronunciation: "Istakhdama", ipa: "isˈtaxdama", meaning: "To Use", type: "derived", requires: ["root_khdm"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_80", lang: "ar", level: 2, word: "بَحَثَ", pronunciation: "Baḥatha", ipa: "ˈbaħaθa", meaning: "To Search", type: "derived", requires: ["root_bhth"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_81", lang: "ar", level: 2, word: "وَجَدَ", pronunciation: "Wajada", ipa: "ˈwadʒada", meaning: "To Find", type: "derived", requires: ["root_wjd"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_82", lang: "ar", level: 2, word: "فَقَدَ", pronunciation: "Faqada", ipa: "ˈfaqada", meaning: "To Lose", type: "derived", requires: ["root_fqd"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_83", lang: "ar", level: 2, word: "قَطَعَ", pronunciation: "Qaṭa'a", ipa: "ˈqatˤaʕa", meaning: "To Cut", type: "derived", requires: ["root_qta"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_84", lang: "ar", level: 2, word: "سَحَبَ", pronunciation: "Saḥaba", ipa: "ˈsaħaba", meaning: "To Pull", type: "derived", requires: ["root_shb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_85", lang: "ar", level: 2, word: "دَفَعَ", pronunciation: "Dafa'a", ipa: "ˈdafaʕa", meaning: "To Push", type: "derived", requires: ["root_dfa"], pos: "verb", grammar: "verb" },

            // 8. SOCIAL AND OTHER
            { id: "v_ar_top_86", lang: "ar", level: 2, word: "قَابَلَ", pronunciation: "Qābala", ipa: "ˈqaːbala", meaning: "To Meet", type: "derived", requires: ["root_qbl"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_87", lang: "ar", level: 2, word: "اِنْتَظَرَ", pronunciation: "Intaẓara", ipa: "inˈtazˤara", meaning: "To Wait", type: "derived", requires: ["root_nzr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_88", lang: "ar", level: 2, word: "سَاعَدَ", pronunciation: "Sā'ada", ipa: "ˈsaːʕada", meaning: "To Help", type: "derived", requires: ["root_sad"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_89", lang: "ar", level: 2, word: "شَكَرَ", pronunciation: "Shakara", ipa: "ˈʃakara", meaning: "To Thank", type: "derived", requires: ["root_shkr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_90", lang: "ar", level: 2, word: "اِعْتَذَرَ", pronunciation: "I'tadhara", ipa: "iʕˈtaðara", meaning: "To Apologize", type: "derived", requires: ["root_adhr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_91", lang: "ar", level: 2, word: "سَمَحَ", pronunciation: "Samaḥa", ipa: "ˈsamaħa", meaning: "To Allow", type: "derived", requires: ["root_smh"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_92", lang: "ar", level: 2, word: "مَنَعَ", pronunciation: "Mana'a", ipa: "ˈmanaʕa", meaning: "To Forbid", type: "derived", requires: ["root_mna"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_93", lang: "ar", level: 2, word: "وَعَدَ", pronunciation: "Wa'ada", ipa: "ˈwaʕada", meaning: "To Promise", type: "derived", requires: ["root_wad"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_94", lang: "ar", level: 2, word: "كَذَبَ", pronunciation: "Kadhaba", ipa: "ˈkaðaba", meaning: "To Lie", type: "derived", requires: ["root_kdhb"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_95", lang: "ar", level: 2, word: "ضَحِكَ", pronunciation: "Ḍaḥika", ipa: "ˈdˤaħika", meaning: "To Laugh", type: "derived", requires: ["root_dhk"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_96", lang: "ar", level: 2, word: "بَكَى", pronunciation: "Bakā", ipa: "ˈbakaː", meaning: "To Cry", type: "derived", requires: ["root_bky"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_97", lang: "ar", level: 2, word: "لَعِبَ", pronunciation: "La'iba", ipa: "ˈlaʕiba", meaning: "To Play", type: "derived", requires: ["root_lab"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_98", lang: "ar", level: 2, word: "فَازَ", pronunciation: "Fāza", ipa: "ˈfaːza", meaning: "To Win", type: "derived", requires: ["root_fwz"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_99", lang: "ar", level: 2, word: "خَسِرَ", pronunciation: "Khasira", ipa: "ˈxasira", meaning: "To Lose", type: "derived", requires: ["root_khsr"], pos: "verb", grammar: "verb" },
            { id: "v_ar_top_100", lang: "ar", level: 2, word: "وُلِدَ", pronunciation: "Wulida", ipa: "ˈwulida", meaning: "To Be Born", type: "derived", requires: ["root_wld"], pos: "verb", grammar: "verb" }
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
    { id: "s_ja_30", lang: "ja", text: "助けて！", pronunciation: "Tasukete!", translation: "Help!", requires: ["v_ja_ext_46"] },

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
