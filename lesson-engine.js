// ============================================
// LESSON ENGINE - A1 TO C2
// Complete Learning Path to Native Level
// ============================================

// Filter lessons by level
function filterLessons(level) {
    const sections = document.querySelectorAll('.level-section');
    const buttons = document.querySelectorAll('.level-selector-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (level === 'all') {
        sections.forEach(section => section.classList.remove('hidden'));
    } else {
        sections.forEach(section => {
            if (section.dataset.level === level) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }
}

// Open lesson detail
function openLesson(lessonId) {
    // In a full implementation, this would open a modal or new page with full lesson content
    // For now, we'll show an alert with lesson info
    const lessonContent = getLessonContent(lessonId);
    
    if (lessonContent) {
        showLessonModal(lessonContent);
    }
}

// Get lesson content by ID
function getLessonContent(lessonId) {
    const lessons = {
        'a1-1': {
            title: 'Begrüßungen & Vorstellungen',
            level: 'A1',
            duration: 20,
            vocabCount: 25,
            description: 'Lerne die wichtigsten Begrüßungen und wie du dich vorstellst',
            topics: ['Hallo, Guten Tag, Guten Morgen', 'Wie heißt du? / Wie heißen Sie?', 'Ich heiße...', 'Woher kommst du?', 'Ich komme aus...', 'Freut mich!'],
            available: true
        },
        'c2-5': {
            title: 'Meisterschaft - Wie ein Muttersprachler',
            level: 'C2',
            duration: 70,
            vocabCount: 150,
            description: 'Erreiche Muttersprachler-Niveau mit perfekter Beherrschung',
            topics: [
                'Feine Unterschiede zwischen Synonymen',
                'Kontextangemessene Sprache',
                'Kulturelle Codes verstehen',
                'Natürliche Sprechweise',
                'Implizite Bedeutungen erkennen',
                'Wie Deutsche denken und sprechen'
            ],
            available: true
        },
        'special-1': {
            title: 'Deutsche Geschichte & Kultur',
            level: 'Special',
            duration: 60,
            vocabCount: 100,
            description: 'Verstehe Deutschland durch seine Geschichte und Kultur',
            topics: [
                'Von Preußen bis zur Wiedervereinigung',
                'Deutsche Philosophen und Denker',
                'Kulturelle Traditionen',
                'Feiertage und Bräuche',
                'Deutsches Selbstverständnis'
            ],
            available: true
        }
    };
    
    return lessons[lessonId] || {
        title: 'Lektion verfügbar',
        level: 'Info',
        description: 'Diese Lektion ist Teil des Gesamtkurses. Nutze die Hauptseite und Tests um systematisch zu lernen!',
        topics: ['Vokabeln auf der Hauptseite', 'Grammatik-Erklärungen', 'Tests zur Überprüfung', 'C1-Prüfungssimulation'],
        available: true
    };
}

function showLessonModal(content) {
    const modal = document.createElement('div');
    modal.className = 'lesson-detail-modal';
    modal.innerHTML = `
        <div class="lesson-detail-content">
            <div class="lesson-detail-header">
                <div>
                    <span class="lesson-level-badge">${content.level}</span>
                    <h2>${content.title}</h2>
                </div>
                <button class="modal-close-btn" onclick="this.closest('.lesson-detail-modal').remove()">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
            <div class="lesson-detail-body">
                <p class="lesson-desc">${content.description}</p>
                
                ${content.vocabCount ? `
                <div class="lesson-info-box">
                    <div class="info-item">
                        <i class="fa-solid fa-book"></i>
                        <span><strong>${content.vocabCount}</strong> Vokabeln</span>
                    </div>
                    <div class="info-item">
                        <i class="fa-regular fa-clock"></i>
                        <span><strong>${content.duration}</strong> Minuten</span>
                    </div>
                </div>
                ` : ''}
                
                <h3>Inhalte dieser Lektion:</h3>
                <ul class="lesson-topics-list">
                    ${content.topics.map(topic => `
                        <li><i class="fa-solid fa-check"></i> ${topic}</li>
                    `).join('')}
                </ul>
                
                <div class="lesson-cta">
                    <p><i class="fa-solid fa-lightbulb"></i> <strong>Tipp:</strong> Nutze die Hauptseite für interaktive Vokabel-Lektionen, Flashcards zum Üben und die Test-Seite für Prüfungsvorbereitung!</p>
                    <div class="lesson-cta-buttons">
                        <button class="btn btn-outline" onclick="window.location.href='index.html#vokabeln'">
                            <i class="fa-solid fa-book"></i>
                            Zu den Vokabeln
                        </button>
                        <button class="btn btn-primary" onclick="window.location.href='tests.html'">
                            <i class="fa-solid fa-clipboard-check"></i>
                            Tests machen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('visible'), 100);
}

// Calculate total progress
function calculateProgress() {
    const totalLessons = 31; // 27 regular + 4 special
    const completedLessons = parseInt(localStorage.getItem('completedLessons') || '0');
    const totalVocab = parseInt(localStorage.getItem('totalVocabLearned') || '0');
    const totalTime = parseInt(localStorage.getItem('totalLearningMinutes') || '0');
    
    // Update displays
    document.getElementById('totalLessonsCompleted').textContent = completedLessons;
    document.getElementById('totalVocabCount').textContent = totalVocab;
    document.getElementById('totalTimeSpent').textContent = Math.floor(totalTime / 60) + 'h';
    
    // Determine current level
    let currentLevel = 'A1';
    if (totalVocab >= 1500 || completedLessons >= 23) currentLevel = 'C2';
    else if (totalVocab >= 1200 || completedLessons >= 19) currentLevel = 'C1';
    else if (totalVocab >= 800 || completedLessons >= 15) currentLevel = 'B2';
    else if (totalVocab >= 500 || completedLessons >= 11) currentLevel = 'B1';
    else if (totalVocab >= 200 || completedLessons >= 7) currentLevel = 'A2';
    
    document.getElementById('currentLevel').textContent = currentLevel;
    
    // Update progress circle
    const percentage = (completedLessons / totalLessons) * 100;
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    document.querySelector('.progress-ring').style.strokeDashoffset = offset;
    
    // Update path nodes
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const currentIndex = levels.indexOf(currentLevel);
    
    document.querySelectorAll('.path-node').forEach((node, index) => {
        node.classList.remove('completed', 'current');
        if (index < currentIndex) {
            node.classList.add('completed');
        } else if (index === currentIndex) {
            node.classList.add('current');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    calculateProgress();
    
    // Language switcher
    const savedLang = localStorage.getItem('deutschLernenLanguage') || 'de';
    if (typeof applyTestTranslations === 'function') {
        applyTestTranslations(savedLang);
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            localStorage.setItem('deutschLernenLanguage', lang);
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
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
    
    document.getElementById('themeToggle')?.addEventListener('click', function() {
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
    
    // Back to top
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton?.classList.add('visible');
        } else {
            backToTopButton?.classList.remove('visible');
        }
    });
    
    backToTopButton?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Scroll progress
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.scroll-progress').style.width = scrolled + '%';
    });
});

window.filterLessons = filterLessons;
window.openLesson = openLesson;

