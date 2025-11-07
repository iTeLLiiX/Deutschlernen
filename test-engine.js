// ============================================
// DEUTSCH MEISTERN - TEST ENGINE
// Rockstar Games Level Quality
// Complete C1 Exam Simulation
// ============================================

// ============================================
// TRANSLATIONS FOR TEST PAGE
// ============================================
const testTranslations = {
    de: {
        // Navigation
        'nav-home': 'Startseite',
        'nav-tests': 'Tests',
        'nav-exam': 'C1 Prüfung',
        
        // Hero
        'test-hero-badge': 'Prüfungsvorbereitung',
        'test-hero-title': 'Tests & Prüfungssimulation',
        'test-hero-desc': 'Bereite dich optimal auf die C1-Prüfung vor mit realistischen Tests und detailliertem Feedback',
        
        // Categories
        'test-cat-reading': 'Leseverstehen',
        'test-cat-listening': 'Hörverstehen',
        'test-cat-writing': 'Schreiben',
        'test-cat-speaking': 'Sprechen',
        'test-cat-reading-num': '8 Tests',
        'test-cat-listening-num': '6 Tests',
        'test-cat-writing-num': '4 Tests',
        'test-cat-speaking-num': '5 Tests',
        
        // Quick Tests
        'test-quick-label': 'Schnelle Tests',
        'test-quick-title': 'Teste dein Wissen',
        'test-quick-desc': 'Kurze Tests für zwischendurch - Dauer: 5-10 Minuten',
        
        // Test Cards
        'test-artikel-title': 'Artikel-Test',
        'test-artikel-desc': 'Teste dein Wissen über der, die, das',
        'test-5min': '5 Min',
        'test-20q': '20 Fragen',
        'test-best': 'Bestes Ergebnis',
        'test-attempts': 'Versuche',
        'test-start': 'Test starten'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-tests': 'Tests',
        'nav-exam': 'C1 Exam',
        
        // Hero
        'test-hero-badge': 'Exam Preparation',
        'test-hero-title': 'Tests & Exam Simulation',
        'test-hero-desc': 'Prepare optimally for the C1 exam with realistic tests and detailed feedback',
        
        // Categories
        'test-cat-reading': 'Reading',
        'test-cat-listening': 'Listening',
        'test-cat-writing': 'Writing',
        'test-cat-speaking': 'Speaking',
        'test-cat-reading-num': '8 Tests',
        'test-cat-listening-num': '6 Tests',
        'test-cat-writing-num': '4 Tests',
        'test-cat-speaking-num': '5 Tests',
        
        // Quick Tests
        'test-quick-label': 'Quick Tests',
        'test-quick-title': 'Test Your Knowledge',
        'test-quick-desc': 'Short tests for in-between - Duration: 5-10 minutes',
        
        // Test Cards
        'test-artikel-title': 'Article Test',
        'test-artikel-desc': 'Test your knowledge of der, die, das',
        'test-5min': '5 Min',
        'test-20q': '20 Questions',
        'test-best': 'Best Score',
        'test-attempts': 'Attempts',
        'test-start': 'Start Test'
    },
    ka: {
        // Navigation
        'nav-home': 'მთავარი',
        'nav-tests': 'ტესტები',
        'nav-exam': 'C1 გამოცდა',
        
        // Hero
        'test-hero-badge': 'გამოცდის მომზადება',
        'test-hero-title': 'ტესტები და გამოცდის სიმულაცია',
        'test-hero-desc': 'მოემზადეთ ოპტიმალურად C1 გამოცდისთვის რეალისტური ტესტებითა და დეტალური უკუკავშირით',
        
        // Categories
        'test-cat-reading': 'კითხვა',
        'test-cat-listening': 'მოსმენა',
        'test-cat-writing': 'წერა',
        'test-cat-speaking': 'საუბარი',
        'test-cat-reading-num': '8 ტესტი',
        'test-cat-listening-num': '6 ტესტი',
        'test-cat-writing-num': '4 ტესტი',
        'test-cat-speaking-num': '5 ტესტი',
        
        // Quick Tests
        'test-quick-label': 'სწრაფი ტესტები',
        'test-quick-title': 'შეამოწმე შენი ცოდნა',
        'test-quick-desc': 'მოკლე ტესტები შუალედში - ხანგრძლივობა: 5-10 წუთი',
        
        // Test Cards
        'test-artikel-title': 'არტიკლის ტესტი',
        'test-artikel-desc': 'შეამოწმე შენი ცოდნა der, die, das-ზე',
        'test-5min': '5 წუთი',
        'test-20q': '20 კითხვა',
        'test-best': 'საუკეთესო შედეგი',
        'test-attempts': 'მცდელობები',
        'test-start': 'ტესტის დაწყება'
    },
    ar: {
        // Navigation
        'nav-home': 'الرئيسية',
        'nav-tests': 'الاختبارات',
        'nav-exam': 'امتحان C1',
        
        // Hero
        'test-hero-badge': 'التحضير للامتحان',
        'test-hero-title': 'الاختبارات ومحاكاة الامتحان',
        'test-hero-desc': 'استعد على النحو الأمثل لامتحان C1 باختبارات واقعية وملاحظات مفصلة',
        
        // Categories
        'test-cat-reading': 'القراءة',
        'test-cat-listening': 'الاستماع',
        'test-cat-writing': 'الكتابة',
        'test-cat-speaking': 'التحدث',
        'test-cat-reading-num': '8 اختبارات',
        'test-cat-listening-num': '6 اختبارات',
        'test-cat-writing-num': '4 اختبارات',
        'test-cat-speaking-num': '5 اختبارات',
        
        // Quick Tests
        'test-quick-label': 'اختبارات سريعة',
        'test-quick-title': 'اختبر معرفتك',
        'test-quick-desc': 'اختبارات قصيرة في ما بين - المدة: 5-10 دقائق',
        
        // Test Cards
        'test-artikel-title': 'اختبار الأداة',
        'test-artikel-desc': 'اختبر معرفتك بـ der, die, das',
        'test-5min': '5 دقائق',
        'test-20q': '20 سؤال',
        'test-best': 'أفضل نتيجة',
        'test-attempts': 'المحاولات',
        'test-start': 'بدء الاختبار'
    }
};

// Apply translations function for test page
function applyTestTranslations(lang) {
    // RTL support for Arabic
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (testTranslations[lang] && testTranslations[lang][key]) {
            el.textContent = testTranslations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save language
    localStorage.setItem('deutschLernenLanguage', lang);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('deutschLernenLanguage') || 'de';
    applyTestTranslations(savedLang);
    
    // Language switcher events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyTestTranslations(btn.dataset.lang));
    });
    
    // Dark mode
    const isDarkMode = localStorage.getItem('deutschLernenDarkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    // Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('deutschLernenDarkMode', isDark);
            const icon = this.querySelector('i');
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }
});

// ============================================
// TEST DATA
// ============================================

// Artikel Test (20 Fragen)
const artikelTestData = [
    { word: "Haus", article: "das", options: ["der", "die", "das"] },
    { word: "Mutter", article: "die", options: ["der", "die", "das"] },
    { word: "Vater", article: "der", options: ["der", "die", "das"] },
    { word: "Kind", article: "das", options: ["der", "die", "das"] },
    { word: "Buch", article: "das", options: ["der", "die", "das"] },
    { word: "Tisch", article: "der", options: ["der", "die", "das"] },
    { word: "Schule", article: "die", options: ["der", "die", "das"] },
    { word: "Auto", article: "das", options: ["der", "die", "das"] },
    { word: "Frau", article: "die", options: ["der", "die", "das"] },
    { word: "Mann", article: "der", options: ["der", "die", "das"] },
    { word: "Fenster", article: "das", options: ["der", "die", "das"] },
    { word: "Tür", article: "die", options: ["der", "die", "das"] },
    { word: "Garten", article: "der", options: ["der", "die", "das"] },
    { word: "Straße", article: "die", options: ["der", "die", "das"] },
    { word: "Baum", article: "der", options: ["der", "die", "das"] },
    { word: "Blume", article: "die", options: ["der", "die", "das"] },
    { word: "Wasser", article: "das", options: ["der", "die", "das"] },
    { word: "Bruder", article: "der", options: ["der", "die", "das"] },
    { word: "Schwester", article: "die", options: ["der", "die", "das"] },
    { word: "Leben", article: "das", options: ["der", "die", "das"] }
];

// Verb Test (15 Fragen)
const verbTestData = [
    {
        question: "Ich _____ nach Deutschland.",
        verb: "kommen",
        correct: "komme",
        options: ["komme", "kommst", "kommt", "kommen"]
    },
    {
        question: "Du _____ sehr gut Deutsch.",
        verb: "sprechen",
        correct: "sprichst",
        options: ["spreche", "sprichst", "spricht", "sprechen"]
    },
    {
        question: "Er _____ ein Buch.",
        verb: "lesen",
        correct: "liest",
        options: ["lese", "liest", "lest", "lesen"]
    },
    {
        question: "Wir _____ nach Berlin.",
        verb: "fahren",
        correct: "fahren",
        options: ["fahre", "fährst", "fährt", "fahren"]
    },
    {
        question: "Sie (formal) _____ Kaffee.",
        verb: "trinken",
        correct: "trinken",
        options: ["trinke", "trinkst", "trinkt", "trinken"]
    },
    {
        question: "Gestern _____ ich meine Mutter. (Perfekt)",
        verb: "besuchen",
        correct: "habe besucht",
        options: ["besuchte", "habe besucht", "bin besucht", "werde besuchen"]
    },
    {
        question: "Morgen _____ wir ins Kino. (Futur)",
        verb: "gehen",
        correct: "werden gehen",
        options: ["gingen", "sind gegangen", "gehen", "werden gehen"]
    },
    {
        question: "Als Kind _____ ich gerne Fußball. (Präteritum)",
        verb: "spielen",
        correct: "spielte",
        options: ["spiele", "spielte", "habe gespielt", "werde spielen"]
    },
    {
        question: "Sie _____ sehr schnell. (laufen - Präsens)",
        verb: "laufen",
        correct: "läuft",
        options: ["laufe", "läufst", "läuft", "laufen"]
    },
    {
        question: "Wir _____ letzte Woche im Urlaub. (sein - Präteritum)",
        verb: "sein",
        correct: "waren",
        options: ["sind", "waren", "sind gewesen", "werden sein"]
    },
    {
        question: "_____ Sie mir bitte? (helfen - Präsens)",
        verb: "helfen",
        correct: "Helfen",
        options: ["Helfe", "Hilfst", "Hilft", "Helfen"]
    },
    {
        question: "Die Kinder _____ im Garten. (spielen - Präsens)",
        verb: "spielen",
        correct: "spielen",
        options: ["spiele", "spielst", "spielt", "spielen"]
    },
    {
        question: "Er _____ gestern nach Hause. (gehen - Perfekt)",
        verb: "gehen",
        correct: "ist gegangen",
        options: ["ging", "ist gegangen", "hat gegangen", "wird gehen"]
    },
    {
        question: "Ich _____ gerne Pizza. (essen - Präsens)",
        verb: "essen",
        correct: "esse",
        options: ["esse", "isst", "esst", "essen"]
    },
    {
        question: "Sie _____ ein neues Auto. (kaufen - Perfekt)",
        verb: "kaufen",
        correct: "hat gekauft",
        options: ["kaufte", "hat gekauft", "ist gekauft", "wird kaufen"]
    }
];

// Vokabel Test (30 Fragen)
const vokabelTestData = [
    { german: "Hallo", english: "Hello", options: ["Hello", "Goodbye", "Thank you", "Please"] },
    { german: "Danke", english: "Thank you", options: ["Please", "Thank you", "Sorry", "Hello"] },
    { german: "Bitte", english: "Please", options: ["Please", "Thank you", "Hello", "Goodbye"] },
    { german: "Guten Morgen", english: "Good morning", options: ["Good morning", "Good evening", "Good night", "Good day"] },
    { german: "Auf Wiedersehen", english: "Goodbye", options: ["Hello", "Thank you", "Goodbye", "Please"] },
    { german: "Ja", english: "Yes", options: ["Yes", "No", "Maybe", "Okay"] },
    { german: "Nein", english: "No", options: ["Yes", "No", "Maybe", "Never"] },
    { german: "Mutter", english: "Mother", options: ["Mother", "Father", "Brother", "Sister"] },
    { german: "Vater", english: "Father", options: ["Mother", "Father", "Son", "Daughter"] },
    { german: "Bruder", english: "Brother", options: ["Sister", "Brother", "Mother", "Father"] },
    { german: "Schwester", english: "Sister", options: ["Brother", "Sister", "Mother", "Father"] },
    { german: "Kind", english: "Child", options: ["Child", "Adult", "Baby", "Person"] },
    { german: "Haus", english: "House", options: ["House", "Apartment", "Room", "Building"] },
    { german: "Auto", english: "Car", options: ["Bus", "Train", "Car", "Bike"] },
    { german: "Buch", english: "Book", options: ["Book", "Newspaper", "Magazine", "Letter"] },
    { german: "Schule", english: "School", options: ["School", "University", "Office", "Hospital"] },
    { german: "Essen", english: "Food", options: ["Drink", "Food", "Water", "Coffee"] },
    { german: "Trinken", english: "To drink", options: ["To eat", "To drink", "To cook", "To buy"] },
    { german: "Schlafen", english: "To sleep", options: ["To wake", "To sleep", "To dream", "To rest"] },
    { german: "Arbeiten", english: "To work", options: ["To work", "To play", "To rest", "To study"] },
    { german: "Lernen", english: "To learn", options: ["To teach", "To learn", "To study", "To practice"] },
    { german: "Stadt", english: "City", options: ["City", "Village", "Country", "Town"] },
    { german: "Land", english: "Country", options: ["City", "Country", "State", "Region"] },
    { german: "Wasser", english: "Water", options: ["Water", "Juice", "Milk", "Coffee"] },
    { german: "Brot", english: "Bread", options: ["Bread", "Cake", "Cookie", "Pizza"] },
    { german: "Käse", english: "Cheese", options: ["Milk", "Butter", "Cheese", "Yogurt"] },
    { german: "Milch", english: "Milk", options: ["Milk", "Water", "Juice", "Coffee"] },
    { german: "Apfel", english: "Apple", options: ["Apple", "Banana", "Orange", "Pear"] },
    { german: "Tisch", english: "Table", options: ["Chair", "Table", "Desk", "Shelf"] },
    { german: "Stuhl", english: "Chair", options: ["Table", "Chair", "Sofa", "Bed"] }
];

// Grammar Mix Test (25 Fragen)
const grammarTestData = [
    {
        question: "Ich gehe _____ Schule.",
        correct: "zur",
        options: ["zur", "zu", "in die", "nach"]
    },
    {
        question: "Das ist _____ Buch. (my)",
        correct: "mein",
        options: ["mein", "meine", "meinen", "meiner"]
    },
    {
        question: "Ich komme _____ Deutschland.",
        correct: "aus",
        options: ["von", "aus", "nach", "zu"]
    },
    {
        question: "Er wohnt _____ Berlin.",
        correct: "in",
        options: ["in", "zu", "nach", "bei"]
    },
    {
        question: "Ich fahre _____ Berlin.",
        correct: "nach",
        options: ["in", "zu", "nach", "bei"]
    },
    {
        question: "Das Auto gehört _____ Mann. (Dativ)",
        correct: "dem",
        options: ["der", "dem", "den", "des"]
    },
    {
        question: "Ich sehe _____ Hund. (Akkusativ)",
        correct: "den",
        options: ["der", "dem", "den", "des"]
    },
    {
        question: "Das Buch _____ Mannes. (Genitiv)",
        correct: "des",
        options: ["der", "dem", "den", "des"]
    },
    {
        question: "Ich _____ gerne Deutsch lernen. (möchten)",
        correct: "möchte",
        options: ["möchte", "möchten", "möchtest", "möchtet"]
    },
    {
        question: "Du _____ heute nicht arbeiten. (müssen)",
        correct: "musst",
        options: ["muss", "musst", "müsst", "müssen"]
    },
    {
        question: "Wenn ich Zeit _____, würde ich kommen. (haben - Konjunktiv II)",
        correct: "hätte",
        options: ["habe", "hatte", "hätte", "würde haben"]
    },
    {
        question: "Der Mann, _____ Auto rot ist, ist mein Nachbar.",
        correct: "dessen",
        options: ["der", "dessen", "dem", "den"]
    },
    {
        question: "Das Buch, _____ ich lese, ist interessant.",
        correct: "das",
        options: ["das", "dass", "dem", "den"]
    },
    {
        question: "Ich denke, _____ es morgen regnet.",
        correct: "dass",
        options: ["das", "dass", "ob", "wenn"]
    },
    {
        question: "Ich freue mich _____ deinen Besuch.",
        correct: "auf",
        options: ["auf", "über", "für", "an"]
    },
    {
        question: "Er interessiert sich _____ Kunst.",
        correct: "für",
        options: ["für", "über", "an", "auf"]
    },
    {
        question: "Sie ist größer _____ ihr Bruder.",
        correct: "als",
        options: ["als", "wie", "von", "zu"]
    },
    {
        question: "Er ist genauso alt _____ ich.",
        correct: "wie",
        options: ["als", "wie", "von", "zu"]
    },
    {
        question: "Ich habe _____ Zeit als du.",
        correct: "mehr",
        options: ["mehr", "viel", "größer", "besser"]
    },
    {
        question: "Das ist _____ schönste Tag.",
        correct: "der",
        options: ["der", "die", "das", "den"]
    },
    {
        question: "Nachdem ich _____ hatte, ging ich schlafen. (essen - Plusquamperfekt)",
        correct: "gegessen",
        options: ["esse", "aß", "gegessen", "essen"]
    },
    {
        question: "Ich würde kommen, _____ ich Zeit hätte.",
        correct: "wenn",
        options: ["wenn", "als", "wann", "ob"]
    },
    {
        question: "Sie arbeitet, _____ Geld zu verdienen.",
        correct: "um",
        options: ["um", "zu", "für", "damit"]
    },
    {
        question: "Er lernt Deutsch, _____ er in Deutschland studieren kann.",
        correct: "damit",
        options: ["um", "zu", "damit", "dass"]
    },
    {
        question: "Das Buch wurde _____ gelesen. (Passiv)",
        correct: "von mir",
        options: ["von mir", "durch mich", "mit mir", "bei mir"]
    }
];

// C1 Exam Data
const c1ExamData = {
    lesen: {
        aufgabe1: {
            title: "Lückentext: Globalisierung und Kultur",
            text: `Die Globalisierung hat in den letzten Jahrzehnten zu tiefgreifenden Veränderungen in allen Bereichen 
            des gesellschaftlichen Lebens geführt. Besonders __1__ betroffen ist der kulturelle Austausch zwischen 
            verschiedenen Nationen. Während Kritiker __2__, dass durch die Globalisierung lokale Traditionen verloren 
            gehen, sehen Befürworter darin eine Chance für __3__ Verständnis zwischen den Kulturen.
            
            Die Digitalisierung hat diesen Prozess __4__ beschleunigt. Heute können Menschen aus verschiedenen Ländern 
            in Echtzeit miteinander kommunizieren und Informationen austauschen. Dies __5__ sowohl Chancen als auch 
            Herausforderungen mit sich. Einerseits ermöglicht es den Zugang zu einer Vielfalt von Perspektiven, 
            andererseits kann es zu einer __6__ führen, bei der oberflächliche Inhalte dominieren.
            
            Bildungseinrichtungen spielen eine __7__ Rolle dabei, junge Menschen auf diese globalisierte Welt 
            vorzubereiten. Sie müssen __8__ vermitteln, wie man kritisch mit Informationen umgeht und gleichzeitig 
            offen für neue Erfahrungen bleibt. Die __9__ liegt darin, eine Balance zwischen der Bewahrung eigener 
            kultureller Werte und der Offenheit gegenüber fremden Einflüssen zu finden.
            
            Letztendlich hängt die Qualität des kulturellen Austauschs von der __10__ der Beteiligten ab, respektvoll 
            und aufgeschlossen miteinander umzugehen.`,
            questions: [
                { number: 1, correct: "stark", options: ["stark", "schwach", "wenig", "kaum"] },
                { number: 2, correct: "befürchten", options: ["hoffen", "befürchten", "wünschen", "erwarten"] },
                { number: 3, correct: "interkulturelles", options: ["interkulturelles", "nationales", "lokales", "regionales"] },
                { number: 4, correct: "erheblich", options: ["kaum", "wenig", "erheblich", "selten"] },
                { number: 5, correct: "bringt", options: ["bringt", "nimmt", "gibt", "macht"] },
                { number: 6, correct: "Verflachung", options: ["Verflachung", "Vertiefung", "Verbesserung", "Verstärkung"] },
                { number: 7, correct: "entscheidende", options: ["kleine", "unwichtige", "entscheidende", "nebensächliche"] },
                { number: 8, correct: "Kompetenzen", options: ["Probleme", "Kompetenzen", "Schwierigkeiten", "Hindernisse"] },
                { number: 9, correct: "Herausforderung", options: ["Lösung", "Antwort", "Herausforderung", "Vereinfachung"] },
                { number: 10, correct: "Bereitschaft", options: ["Ablehnung", "Bereitschaft", "Weigerung", "Unfähigkeit"] }
            ]
        },
        aufgabe2: {
            title: "Text Rekonstruktion: Klimawandel",
            text: `Der Klimawandel stellt eine der größten Herausforderungen unserer Zeit dar. [A] Die wissenschaftliche 
            Gemeinschaft ist sich weitgehend einig, dass menschliche Aktivitäten die Hauptursache für die globale 
            Erwärmung sind. [B] Fossile Brennstoffe wie Kohle, Öl und Gas setzen bei ihrer Verbrennung große Mengen 
            Kohlendioxid frei. [C] Dieses Gas trägt maßgeblich zum Treibhauseffekt bei und führt zu einem Anstieg 
            der globalen Durchschnittstemperatur. [D]`,
            sentences: [
                "Jedoch gibt es noch immer einige Skeptiker, die diese Zusammenhänge anzweifeln.",
                "Die Folgen sind bereits heute spürbar: Extreme Wetterereignisse nehmen zu.",
                "Internationale Abkommen wie das Pariser Klimaabkommen versuchen, gegenzusteuern.",
                "Erneuerbare Energien bieten eine nachhaltige Alternative zu fossilen Brennstoffen.",
                "Jeder Einzelne kann durch bewusstes Verhalten einen Beitrag leisten."
            ],
            correctOrder: [0, 2, 1, 4, 3]
        }
    },
    hoeren: {
        aufgabe1: {
            title: "Interview mit einem Umweltexperten",
            audio: "interview_umwelt",
            transcript: `Interviewer: Guten Tag, Herr Professor Weber. Vielen Dank, dass Sie sich die Zeit nehmen.
            
            Prof. Weber: Gern geschehen. Es ist mir eine Freude, über dieses wichtige Thema zu sprechen.
            
            Interviewer: Herr Professor, Sie erforschen seit über 20 Jahren die Auswirkungen des Klimawandels. 
            Was hat sich in dieser Zeit am meisten verändert?
            
            Prof. Weber: Die Geschwindigkeit der Veränderungen hat alle unsere Prognosen übertroffen. Was wir 
            für das Jahr 2050 vorhergesagt hatten, erleben wir teilweise bereits heute. Das ist äußerst besorgniserregend.`,
            questions: [
                {
                    question: "Wie lange forscht Professor Weber bereits zum Klimawandel?",
                    correct: "über 20 Jahre",
                    options: ["10 Jahre", "15 Jahre", "über 20 Jahre", "25 Jahre"]
                },
                {
                    question: "Was hat Professor Weber am meisten überrascht?",
                    correct: "Die Geschwindigkeit der Veränderungen",
                    options: [
                        "Die Langsamkeit der Veränderungen",
                        "Die Geschwindigkeit der Veränderungen",
                        "Die Stabilität des Klimas",
                        "Die Genauigkeit der Prognosen"
                    ]
                },
                {
                    question: "Wie bewertet der Professor die aktuelle Situation?",
                    correct: "Besorgniserregend",
                    options: ["Optimistisch", "Neutral", "Besorgniserregend", "Hoffnungsvoll"]
                }
            ]
        }
    },
    schreiben: {
        aufgabe1: {
            title: "Formeller Brief - Beschwerde",
            instructions: `Sie haben in einem Online-Shop ein defektes Produkt erhalten.
            
Schreiben Sie einen formellen Brief an den Kundenservice (ca. 200 Wörter) mit folgenden Punkten:

• Beschreiben Sie das Problem genau
• Erklären Sie, wann und wo Sie das Produkt gekauft haben
• Sagen Sie, was Sie vom Unternehmen erwarten (Umtausch, Rückerstattung, etc.)
• Setzen Sie eine angemessene Frist

Achten Sie auf:
- Formelle Anrede und Grußformel
- Höfliche aber bestimmte Formulierung
- Logische Struktur
- Mindestens 200 Wörter`,
            wordCountMin: 200,
            wordCountMax: 250
        },
        aufgabe2: {
            title: "Argumentativer Text - Homeoffice",
            instructions: `Schreiben Sie einen argumentativen Text zum Thema:

"Sollten Arbeitnehmer das Recht haben, dauerhaft im Homeoffice zu arbeiten?"

Ihr Text sollte folgende Punkte enthalten:

• Ihre Position zum Thema
• Mindestens 3 Argumente für Ihre Position
• Mindestens 2 Gegenargumente
• Eine Schlussfolgerung

Achten Sie auf:
- Klare Argumentation
- Verwendung von Konnektoren (jedoch, dennoch, trotzdem, etc.)
- Sachliche Sprache
- Mindestens 200 Wörter`,
            wordCountMin: 200,
            wordCountMax: 280
        }
    },
    sprechen: {
        aufgabe1: {
            title: "Vortrag - Thema präsentieren",
            instructions: `Sie haben 15 Minuten Vorbereitungszeit und 5 Minuten für den Vortrag.

Wählen Sie eines der folgenden Themen:

1. "Die Bedeutung von Sport für die Gesundheit"
2. "Soziale Medien - Fluch oder Segen?"
3. "Elektromobilität - die Zukunft des Verkehrs?"

Ihr Vortrag sollte enthalten:
• Eine Einleitung zum Thema
• Hauptargumente (Pro/Contra)
• Beispiele aus Ihrem Land/Ihrer Erfahrung
• Eine Schlussfolgerung

Vorbereitungszeit: 15 Minuten
Sprechzeit: 5 Minuten`,
            topics: [
                "Die Bedeutung von Sport für die Gesundheit",
                "Soziale Medien - Fluch oder Segen?",
                "Elektromobilität - die Zukunft des Verkehrs?"
            ],
            prepTime: 900, // 15 minutes
            speakTime: 300 // 5 minutes
        },
        aufgabe2: {
            title: "Diskussion",
            instructions: `Reagieren Sie auf die Aussagen Ihres Gesprächspartners und diskutieren Sie.

Sie werden zu Ihrem Vortrag Fragen gestellt bekommen. Antworten Sie ausführlich und begründen 
Sie Ihre Meinungen.

Zeit: ca. 5 Minuten`,
            duration: 300
        }
    }
};

// ============================================
// TEST ENGINE
// ============================================
let currentTest = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let testStartTime = null;
let testTimer = null;
let testTimeLimit = 0;

function startTest(testType) {
    // Initialize test
    currentTest = testType;
    currentQuestionIndex = 0;
    userAnswers = [];
    testStartTime = Date.now();
    
    // Prepare questions based on test type
    switch(testType) {
        case 'artikel':
            currentQuestions = shuffleArray([...artikelTestData]);
            testTimeLimit = 5 * 60; // 5 minutes
            break;
        case 'verb':
            currentQuestions = shuffleArray([...verbTestData]);
            testTimeLimit = 8 * 60; // 8 minutes
            break;
        case 'vocab':
            currentQuestions = shuffleArray([...vokabelTestData]);
            testTimeLimit = 10 * 60; // 10 minutes
            break;
        case 'grammar':
            currentQuestions = shuffleArray([...grammarTestData]);
            testTimeLimit = 12 * 60; // 12 minutes
            break;
    }
    
    // Open test modal
    openTestModal();
    displayQuestion();
    startTestTimer();
}

function openTestModal() {
    const modal = document.getElementById('testModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTestModal() {
    if (confirm('Möchtest du den Test wirklich beenden? Dein Fortschritt geht verloren.')) {
        const modal = document.getElementById('testModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        stopTestTimer();
    }
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showTestResults();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    const body = document.getElementById('testModalBody');
    
    let questionHTML = '';
    
    if (currentTest === 'artikel') {
        questionHTML = `
            <div class="test-question">
                <h4>Welcher Artikel passt zu diesem Wort?</h4>
                <div class="test-question-text">
                    <strong style="font-size: 32px;">${question.word}</strong>
                </div>
                <div class="test-options">
                    ${question.options.map((option, index) => `
                        <div class="test-option" onclick="selectAnswer(${index}, '${option}')">
                            <div class="option-radio"></div>
                            <div class="option-text"><strong>${option}</strong> ${question.word}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (currentTest === 'verb') {
        questionHTML = `
            <div class="test-question">
                <h4>Fülle die Lücke mit der richtigen Verbform:</h4>
                <div class="test-question-text">
                    ${question.question}
                </div>
                <div class="test-options">
                    ${question.options.map((option, index) => `
                        <div class="test-option" onclick="selectAnswer(${index}, '${option}')">
                            <div class="option-radio"></div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (currentTest === 'vocab') {
        questionHTML = `
            <div class="test-question">
                <h4>Was bedeutet dieses deutsche Wort auf Englisch?</h4>
                <div class="test-question-text">
                    <strong style="font-size: 32px;">${question.german}</strong>
                </div>
                <div class="test-options">
                    ${question.options.map((option, index) => `
                        <div class="test-option" onclick="selectAnswer(${index}, '${option}')">
                            <div class="option-radio"></div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (currentTest === 'grammar') {
        questionHTML = `
            <div class="test-question">
                <h4>Wähle die richtige Antwort:</h4>
                <div class="test-question-text">
                    ${question.question}
                </div>
                <div class="test-options">
                    ${question.options.map((option, index) => `
                        <div class="test-option" onclick="selectAnswer(${index}, '${option}')">
                            <div class="option-radio"></div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    body.innerHTML = questionHTML;
    
    // Update counter
    document.getElementById('currentQuestionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestionsNum').textContent = currentQuestions.length;
    
    // Update buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    // Restore previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const options = document.querySelectorAll('.test-option');
        options[userAnswers[currentQuestionIndex].index].classList.add('selected');
    }
}

function selectAnswer(index, answer) {
    // Remove previous selection
    document.querySelectorAll('.test-option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    document.querySelectorAll('.test-option')[index].classList.add('selected');
    
    // Save answer
    userAnswers[currentQuestionIndex] = { index, answer };
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Bitte wähle eine Antwort!');
        return;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuestions.length) {
        showTestResults();
    } else {
        displayQuestion();
    }
}

function startTestTimer() {
    let timeLeft = testTimeLimit;
    const timerDisplay = document.getElementById('testTimer');
    
    testTimer = setInterval(() => {
        timeLeft--;
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Warning at 1 minute
        if (timeLeft === 60) {
            timerDisplay.classList.add('warning');
        }
        
        // Danger at 30 seconds
        if (timeLeft === 30) {
            timerDisplay.classList.remove('warning');
            timerDisplay.classList.add('danger');
        }
        
        // Time's up
        if (timeLeft <= 0) {
            stopTestTimer();
            showTestResults();
        }
    }, 1000);
}

function stopTestTimer() {
    if (testTimer) {
        clearInterval(testTimer);
        testTimer = null;
    }
}

function showTestResults() {
    stopTestTimer();
    
    // Calculate score
    let correct = 0;
    let total = currentQuestions.length;
    
    userAnswers.forEach((userAnswer, index) => {
        const question = currentQuestions[index];
        let correctAnswer;
        
        if (currentTest === 'artikel') {
            correctAnswer = question.article;
        } else if (currentTest === 'verb') {
            correctAnswer = question.correct;
        } else if (currentTest === 'vocab') {
            correctAnswer = question.english;
        } else if (currentTest === 'grammar') {
            correctAnswer = question.correct;
        }
        
        if (userAnswer && userAnswer.answer === correctAnswer) {
            correct++;
        }
    });
    
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 60;
    
    // Display results
    const body = document.getElementById('testModalBody');
    body.innerHTML = `
        <div class="test-results-screen">
            <div class="result-icon ${passed ? '' : 'failed'}">
                <i class="fa-solid fa-${passed ? 'trophy' : 'times'}"></i>
            </div>
            <h3>${passed ? 'Herzlichen Glückwunsch!' : 'Nicht bestanden'}</h3>
            <div class="test-score-display ${passed ? '' : 'failed'}">${percentage}%</div>
            <p class="test-score-label">${correct} von ${total} Fragen richtig</p>
            
            <div class="test-breakdown">
                <h4>Detaillierte Auswertung</h4>
                <div class="breakdown-grid">
                    <div class="breakdown-item">
                        <strong>${correct}</strong>
                        <span>Richtig</span>
                    </div>
                    <div class="breakdown-item">
                        <strong>${total - correct}</strong>
                        <span>Falsch</span>
                    </div>
                    <div class="breakdown-item">
                        <strong>${percentage}%</strong>
                        <span>Ergebnis</span>
                    </div>
                    <div class="breakdown-item">
                        <strong>${Math.floor((Date.now() - testStartTime) / 1000 / 60)}</strong>
                        <span>Minuten</span>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; gap: 16px; justify-content: center;">
                <button class="btn btn-outline" onclick="closeTestModal()">
                    <i class="fa-solid fa-times"></i>
                    Schließen
                </button>
                <button class="btn btn-primary" onclick="startTest('${currentTest}')">
                    <i class="fa-solid fa-rotate"></i>
                    Noch einmal
                </button>
            </div>
        </div>
    `;
    
    // Hide navigation buttons
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    
    // Save result
    saveTestResult(currentTest, percentage, correct, total);
    
    // Update points
    if (typeof updateTotalPoints === 'function') {
        updateTotalPoints(correct * 5);
    }
}

function saveTestResult(testType, percentage, correct, total) {
    const results = JSON.parse(localStorage.getItem('testResults')) || [];
    results.push({
        type: testType,
        percentage,
        correct,
        total,
        timestamp: new Date().toISOString(),
        passed: percentage >= 60
    });
    localStorage.setItem('testResults', JSON.stringify(results));
    
    // Update best score
    const bestKey = `${testType}TestBest`;
    const countKey = `${testType}TestCount`;
    
    const currentBest = parseInt(localStorage.getItem(bestKey) || '0');
    const currentCount = parseInt(localStorage.getItem(countKey) || '0');
    
    if (percentage > currentBest) {
        localStorage.setItem(bestKey, percentage.toString());
        document.getElementById(bestKey).textContent = percentage + '%';
    }
    
    localStorage.setItem(countKey, (currentCount + 1).toString());
    document.getElementById(countKey).textContent = currentCount + 1;
}

// ============================================
// C1 FULL EXAM SIMULATION
// ============================================
let examState = {
    currentPart: 'start',
    partIndex: 0,
    questionIndex: 0,
    answers: {},
    startTime: null,
    partTimes: {}
};

function startFullExam() {
    if (!confirm('Die Prüfung dauert ca. 3h 40min. Bist du bereit?\n\nDu solltest:\n• Genug Zeit haben\n• Nicht gestört werden\n• Kopfhörer bereit haben\n• Ein ruhiges Umfeld haben')) {
        return;
    }
    
    examState = {
        currentPart: 'lesen',
        partIndex: 0,
        questionIndex: 0,
        answers: {},
        startTime: Date.now(),
        partTimes: {}
    };
    
    openExamModal();
    startExamPart('lesen');
}

function openExamModal() {
    const modal = document.getElementById('examModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExamModal() {
    if (confirm('Möchtest du die Prüfung wirklich beenden?\n\nAlle Antworten gehen verloren!')) {
        const modal = document.getElementById('examModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function startExamPart(part) {
    const modal = document.getElementById('examModal');
    const timeLimit = {
        'lesen': 70 * 60,
        'hoeren': 40 * 60,
        'schreiben': 80 * 60,
        'sprechen': 30 * 60
    };
    
    examState.currentPart = part;
    examState.partTimes[part] = Date.now();
    
    let partHTML = '';
    
    if (part === 'lesen') {
        partHTML = renderLesenPart();
    } else if (part === 'hoeren') {
        partHTML = renderHoerenPart();
    } else if (part === 'schreiben') {
        partHTML = renderSchreibenPart();
    } else if (part === 'sprechen') {
        partHTML = renderSprechenPart();
    }
    
    modal.innerHTML = `
        <div class="exam-modal-content">
            <div class="exam-header">
                <div class="exam-header-left">
                    <div class="exam-logo">
                        <i class="fa-solid fa-graduation-cap"></i> Goethe C1
                    </div>
                    <div class="exam-part-indicator">
                        Teil ${['lesen', 'hoeren', 'schreiben', 'sprechen'].indexOf(part) + 1}: ${part.charAt(0).toUpperCase() + part.slice(1)}
                    </div>
                </div>
                <div class="exam-header-right">
                    <div class="exam-timer-large" id="examTimer">70:00</div>
                    <button class="exam-exit-btn" onclick="closeExamModal()">
                        <i class="fa-solid fa-door-open"></i> Beenden
                    </button>
                </div>
            </div>
            <div class="exam-body">
                ${partHTML}
            </div>
            <div class="exam-footer">
                <button class="btn btn-outline" onclick="previousExamQuestion()">
                    <i class="fa-solid fa-chevron-left"></i>
                    Zurück
                </button>
                <div class="exam-progress-bar">
                    <div class="exam-progress-bar-track">
                        <div class="exam-progress-bar-fill" style="width: 0%" id="examProgressFill"></div>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="nextExamQuestion()">
                    Weiter
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    `;
    
    startExamTimer(timeLimit[part]);
}

function renderLesenPart() {
    const data = c1ExamData.lesen.aufgabe1;
    return `
        <div class="exam-instructions">
            <h3><i class="fa-solid fa-book-open"></i> Leseverstehen - Aufgabe 1</h3>
            <p><strong>Lückentext</strong></p>
            <ul>
                <li>Lesen Sie den Text und wählen Sie für jede Lücke die passende Antwort</li>
                <li>Sie haben <strong>70 Minuten</strong> für alle Lese-Aufgaben</li>
                <li>Sie können zwischen den Aufgaben hin- und herwechseln</li>
            </ul>
        </div>
        
        <div class="exam-text-passage">
            <h4>${data.title}</h4>
            ${data.text.split('\n').map(p => `<p>${p.trim()}</p>`).join('')}
        </div>
        
        ${data.questions.map((q, index) => `
            <div class="test-question" style="margin-bottom: 32px;">
                <h4>Lücke ${q.number}: Welches Wort passt?</h4>
                <div class="test-options">
                    ${q.options.map((option, optIndex) => `
                        <div class="test-option" onclick="selectExamAnswer('lesen', ${index}, ${optIndex}, '${option}')">
                            <div class="option-radio"></div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

function renderHoerenPart() {
    return `
        <div class="exam-instructions">
            <h3><i class="fa-solid fa-headphones"></i> Hörverstehen - Aufgabe 1</h3>
            <p><strong>Interview</strong></p>
            <ul>
                <li>Sie hören ein Interview zweimal</li>
                <li>Beantworten Sie die Fragen nach dem Hören</li>
                <li>Sie haben <strong>40 Minuten</strong> für alle Hör-Aufgaben</li>
            </ul>
        </div>
        
        <div class="audio-player-exam">
            <button class="btn btn-primary btn-large" onclick="playExamAudio('interview')">
                <i class="fa-solid fa-play"></i>
                Audio abspielen (2x)
            </button>
            <p class="audio-note">Das Audio wird automatisch 2x abgespielt</p>
        </div>
        
        <div class="exam-note" style="margin: 32px 0;">
            <i class="fa-solid fa-info-circle"></i>
            <span><strong>Simulation:</strong> In der echten Prüfung würden Sie hier ein echtes Audio hören. 
            Für diese Demo beantworten Sie bitte die Fragen basierend auf dem Transkript.</span>
        </div>
        
        <div class="exam-text-passage">
            <h4>Transkript (nur für Demo-Zwecke sichtbar)</h4>
            <p>${c1ExamData.hoeren.aufgabe1.transcript}</p>
        </div>
        
        ${c1ExamData.hoeren.aufgabe1.questions.map((q, index) => `
            <div class="test-question" style="margin-bottom: 32px;">
                <h4>Frage ${index + 1}: ${q.question}</h4>
                <div class="test-options">
                    ${q.options.map((option, optIndex) => `
                        <div class="test-option" onclick="selectExamAnswer('hoeren', ${index}, ${optIndex}, '${option}')">
                            <div class="option-radio"></div>
                            <div class="option-text">${option}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

function renderSchreibenPart() {
    const data = c1ExamData.schreiben.aufgabe1;
    return `
        <div class="exam-instructions">
            <h3><i class="fa-solid fa-pen"></i> Schriftlicher Ausdruck - Aufgabe 1</h3>
            <p><strong>Formeller Brief</strong></p>
            <ul>
                <li>Sie haben <strong>80 Minuten</strong> für beide Schreib-Aufgaben</li>
                <li>Jeder Text sollte <strong>ca. 200 Wörter</strong> haben</li>
                <li>Achten Sie auf korrekte Grammatik und Rechtschreibung</li>
            </ul>
        </div>
        
        <div class="exam-text-passage">
            <h4>${data.title}</h4>
            <div style="white-space: pre-line; margin-bottom: 24px;">${data.instructions}</div>
        </div>
        
        <div class="writing-area">
            <textarea id="writingText1" class="exam-textarea" placeholder="Schreiben Sie hier Ihren Text..." 
                      oninput="updateWordCount(1)"></textarea>
            <div class="word-count-display">
                <span>Wörter: <strong id="wordCount1">0</strong> / ${data.wordCountMin}-${data.wordCountMax}</span>
            </div>
        </div>
    `;
}

function renderSprechenPart() {
    const data = c1ExamData.sprechen.aufgabe1;
    return `
        <div class="exam-instructions">
            <h3><i class="fa-solid fa-microphone"></i> Mündlicher Ausdruck - Aufgabe 1</h3>
            <p><strong>Vortrag</strong></p>
            <ul>
                <li>Vorbereitungszeit: <strong>15 Minuten</strong></li>
                <li>Sprechzeit: <strong>5 Minuten</strong></li>
                <li>Wählen Sie ein Thema und bereiten Sie einen Vortrag vor</li>
            </ul>
        </div>
        
        <div class="topic-selection">
            <h4>Wählen Sie ein Thema:</h4>
            ${data.topics.map((topic, index) => `
                <div class="topic-card" onclick="selectTopic(${index})">
                    <div class="topic-number">${index + 1}</div>
                    <div class="topic-text">${topic}</div>
                </div>
            `).join('')}
        </div>
        
        <div id="preparationArea" style="display: none;">
            <h4>Notizen für Ihren Vortrag:</h4>
            <textarea class="exam-textarea" id="speakingNotes" placeholder="Machen Sie sich Notizen für Ihren Vortrag..."></textarea>
            
            <div class="speaking-timer-display">
                <h4>Vorbereitungszeit verbleibend:</h4>
                <div class="prep-timer" id="prepTimer">15:00</div>
            </div>
            
            <button class="btn btn-primary btn-large" onclick="startSpeaking()" id="startSpeakingBtn" style="display: none;">
                <i class="fa-solid fa-microphone"></i>
                Vortrag beginnen
            </button>
        </div>
        
        <div id="speakingArea" style="display: none;">
            <div class="speaking-recording">
                <div class="recording-indicator">
                    <div class="rec-dot"></div>
                    <span>Aufnahme läuft...</span>
                </div>
                <div class="speaking-timer-large" id="speakingTimer">05:00</div>
                <p>Halten Sie Ihren Vortrag. Sie haben 5 Minuten Zeit.</p>
                <button class="btn btn-primary btn-large" onclick="stopSpeaking()">
                    <i class="fa-solid fa-stop"></i>
                    Vortrag beenden
                </button>
            </div>
        </div>
    `;
}

function selectExamAnswer(part, questionIndex, optionIndex, answer) {
    // Remove previous selections
    document.querySelectorAll('.test-option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection
    event.target.closest('.test-option').classList.add('selected');
    
    // Save answer
    if (!examState.answers[part]) {
        examState.answers[part] = {};
    }
    examState.answers[part][questionIndex] = { optionIndex, answer };
}

function startExamTimer(seconds) {
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('examTimer');
    
    if (testTimer) clearInterval(testTimer);
    
    testTimer = setInterval(() => {
        timeLeft--;
        
        const minutes = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (timeLeft === 300) {
            timerDisplay.classList.add('warning');
        }
        
        if (timeLeft === 60) {
            timerDisplay.classList.remove('warning');
            timerDisplay.classList.add('danger');
        }
        
        if (timeLeft <= 0) {
            clearInterval(testTimer);
            alert('Die Zeit für diesen Prüfungsteil ist abgelaufen!');
            nextExamPart();
        }
    }, 1000);
}

function nextExamPart() {
    const parts = ['lesen', 'hoeren', 'schreiben', 'sprechen'];
    const currentIndex = parts.indexOf(examState.currentPart);
    
    if (currentIndex < parts.length - 1) {
        startExamPart(parts[currentIndex + 1]);
    } else {
        showExamResults();
    }
}

function previousExamQuestion() {
    // Implementation for navigation within exam parts
}

function nextExamQuestion() {
    // Check if all required answers are provided
    // Then move to next question or next part
}

function playExamAudio(audioId) {
    alert('Audio wird abgespielt...\n\n(In der echten Prüfung würden Sie jetzt ein echtes Audio hören)');
    if (typeof speakWord === 'function') {
        speakWord(c1ExamData.hoeren.aufgabe1.transcript.substring(0, 100));
    }
}

function updateWordCount(textNum) {
    const textarea = document.getElementById(`writingText${textNum}`);
    const counter = document.getElementById(`wordCount${textNum}`);
    const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    counter.textContent = words;
    
    if (words >= 200) {
        counter.style.color = '#10b981';
    } else {
        counter.style.color = '#ef4444';
    }
}

function selectTopic(index) {
    document.querySelectorAll('.topic-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.topic-card').classList.add('selected');
    
    document.getElementById('preparationArea').style.display = 'block';
    startPreparationTimer();
}

function startPreparationTimer() {
    let timeLeft = 900; // 15 minutes
    const timerDisplay = document.getElementById('prepTimer');
    const startBtn = document.getElementById('startSpeakingBtn');
    
    const timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 60) {
            timerDisplay.style.color = '#ef4444';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            startBtn.style.display = 'block';
            startBtn.click();
        }
    }, 1000);
    
    setTimeout(() => {
        startBtn.style.display = 'block';
    }, 13 * 60 * 1000); // Show after 13 minutes
}

function startSpeaking() {
    document.getElementById('preparationArea').style.display = 'none';
    document.getElementById('speakingArea').style.display = 'block';
    
    let timeLeft = 300; // 5 minutes
    const timerDisplay = document.getElementById('speakingTimer');
    
    const timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            stopSpeaking();
        }
    }, 1000);
}

function stopSpeaking() {
    alert('Vortrag beendet! Gut gemacht!\n\nIn der echten Prüfung würde jetzt die Diskussion (Aufgabe 2) folgen.');
    showExamResults();
}

function showExamResults() {
    clearInterval(testTimer);
    
    // Calculate total score (simplified for demo)
    const totalTime = Math.floor((Date.now() - examState.startTime) / 1000 / 60);
    
    const modal = document.getElementById('examModal');
    modal.innerHTML = `
        <div class="exam-modal-content">
            <div class="exam-results-final">
                <div class="exam-results-header">
                    <i class="fa-solid fa-certificate"></i>
                    <h2>Goethe-Zertifikat C1</h2>
                    <h3>Prüfungssimulation Abgeschlossen</h3>
                </div>
                
                <div class="exam-results-body">
                    <div class="final-score-display">
                        <div class="score-circle">
                            <div class="score-number">Demo</div>
                            <div class="score-label">Modus</div>
                        </div>
                    </div>
                    
                    <div class="exam-parts-results">
                        <h4>Ergebnisse nach Prüfungsteilen:</h4>
                        <div class="part-result-grid">
                            <div class="part-result">
                                <i class="fa-solid fa-book-open"></i>
                                <strong>Leseverstehen</strong>
                                <span>Abgeschlossen</span>
                            </div>
                            <div class="part-result">
                                <i class="fa-solid fa-headphones"></i>
                                <strong>Hörverstehen</strong>
                                <span>Abgeschlossen</span>
                            </div>
                            <div class="part-result">
                                <i class="fa-solid fa-pen"></i>
                                <strong>Schreiben</strong>
                                <span>Abgeschlossen</span>
                            </div>
                            <div class="part-result">
                                <i class="fa-solid fa-microphone"></i>
                                <strong>Sprechen</strong>
                                <span>Abgeschlossen</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exam-timing">
                        <h4>Zeitmanagement:</h4>
                        <p>Gesamtzeit: <strong>${totalTime} Minuten</strong></p>
                        <p>Zielzeit: <strong>220 Minuten</strong> (3h 40min)</p>
                    </div>
                    
                    <div class="exam-feedback">
                        <h4><i class="fa-solid fa-lightbulb"></i> Feedback:</h4>
                        <ul>
                            <li>✅ Du hast die komplette Prüfungssimulation durchlaufen!</li>
                            <li>✅ Du kennst jetzt den Aufbau der C1-Prüfung</li>
                            <li>✅ Du weißt, worauf es ankommt</li>
                            <li>💪 Weiter so! Mit regelmäßiger Übung schaffst du die echte Prüfung!</li>
                        </ul>
                    </div>
                    
                    <div class="exam-certificate">
                        <div class="certificate-content">
                            <h4>Teilnahmebescheinigung</h4>
                            <p><strong>Mariami</strong></p>
                            <p>hat erfolgreich die</p>
                            <p><strong>Goethe-Zertifikat C1 Prüfungssimulation</strong></p>
                            <p>absolviert</p>
                            <p class="certificate-date">${new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <div class="certificate-signature">
                                <p>Mit Stolz erstellt von Nico 💝</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="exam-results-footer">
                    <button class="btn btn-outline btn-large" onclick="closeExamModal()">
                        <i class="fa-solid fa-times"></i>
                        Schließen
                    </button>
                    <button class="btn btn-primary btn-large" onclick="startFullExam()">
                        <i class="fa-solid fa-rotate"></i>
                        Nochmal versuchen
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add achievement
    if (typeof unlockAchievement === 'function') {
        unlockAchievement('exam-completed', '🎓 Erste Prüfung absolviert!');
    }
    
    // Add extra points
    if (typeof updateTotalPoints === 'function') {
        updateTotalPoints(100);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ============================================
// INITIALIZE TEST SCORES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Load best scores
    ['artikel', 'verb', 'vocab', 'grammar'].forEach(testType => {
        const bestKey = `${testType}TestBest`;
        const countKey = `${testType}TestCount`;
        
        const best = localStorage.getItem(bestKey) || '0';
        const count = localStorage.getItem(countKey) || '0';
        
        const bestEl = document.getElementById(bestKey);
        const countEl = document.getElementById(countKey);
        
        if (bestEl) bestEl.textContent = best + '%';
        if (countEl) countEl.textContent = count;
    });
    
    // Load test results history
    loadTestResults();
});

function loadTestResults() {
    const results = JSON.parse(localStorage.getItem('testResults')) || [];
    const container = document.getElementById('testResultsContainer');
    
    if (!container) return;
    
    if (results.length === 0) {
        return;
    }
    
    const testNames = {
        'artikel': 'Artikel-Test',
        'verb': 'Verb-Konjugation',
        'vocab': 'Vokabel-Test A1',
        'grammar': 'Grammatik Mix B1'
    };
    
    container.innerHTML = results.slice(-10).reverse().map(result => `
        <div class="result-card ${result.passed ? '' : 'failed'}">
            <div class="result-info">
                <h4>${testNames[result.type] || result.type}</h4>
                <div class="result-meta">
                    <span><i class="fa-regular fa-calendar"></i> ${new Date(result.timestamp).toLocaleDateString('de-DE')}</span>
                    <span><i class="fa-regular fa-clock"></i> ${new Date(result.timestamp).toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'})}</span>
                    <span><i class="fa-solid fa-${result.passed ? 'check' : 'times'}"></i> ${result.passed ? 'Bestanden' : 'Nicht bestanden'}</span>
                </div>
            </div>
            <div class="result-score">
                <div class="score-number">${result.percentage}%</div>
                <div class="score-label">${result.correct}/${result.total}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// EXPORT FUNCTIONS
// ============================================
window.startTest = startTest;
window.closeTestModal = closeTestModal;
window.selectAnswer = selectAnswer;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.startFullExam = startFullExam;
window.closeExamModal = closeExamModal;
window.selectExamAnswer = selectExamAnswer;
window.playExamAudio = playExamAudio;
window.updateWordCount = updateWordCount;
window.selectTopic = selectTopic;
window.startSpeaking = startSpeaking;
window.stopSpeaking = stopSpeaking;
window.previousExamQuestion = previousExamQuestion;
window.nextExamQuestion = nextExamQuestion;

console.log('✅ Test Engine loaded - Rockstar Games Level!');

