// ============================================
// VIRTUAL CLASSROOM ENGINE
// Immersive Learning Experience
// ============================================

// Set today's date
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('todayDate').textContent = today.toLocaleDateString('de-DE', options);
    
    // Initialize classroom
    initClassroom();
    updateProgressFromMain();
    startChallengeTimer();
    initTipsCarousel();
    loadDailyNote();
    
    // Language & theme (reuse from main)
    const savedLang = localStorage.getItem('deutschLernenLanguage') || 'de';
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        }
    });
    
    const isDarkMode = localStorage.getItem('deutschLernenDarkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('#themeToggle i')?.classList.replace('fa-moon', 'fa-sun');
    }
});

// Initialize classroom
function initClassroom() {
    console.log('🎓 Virtual Classroom initialized!');
}

// Update progress from main app
function updateProgressFromMain() {
    const stats = JSON.parse(localStorage.getItem('deutschLernenStats') || '{"points": 0, "minutesLearned": 0}');
    
    // Update your points
    document.getElementById('yourPoints').textContent = stats.points || 0;
    document.getElementById('todayProgress').textContent = stats.minutesLearned || 0;
    
    // Update weekly points (simulated for now)
    document.getElementById('yourWeeklyPoints').textContent = Math.floor((stats.points || 0) * 0.3);
}

// Activity System
function startActivity(activityId) {
    const activities = {
        'warmup': {
            title: 'Warm-up: Schnelles Vokabel-Spiel',
            description: 'Bereit? Wir starten mit einem schnellen Spiel!',
            action: () => startGame('wordmatch')
        },
        'vocabulary': {
            title: 'Neue Vokabeln lernen',
            description: 'Zeit für neue Wörter!',
            action: () => window.location.href = 'index.html#vokabeln'
        },
        'conversation': {
            title: 'Konversations-Praxis',
            description: 'Lass uns zusammen sprechen!',
            action: () => startScenario('restaurant')
        },
        'grammar': {
            title: 'Grammatik-Workshop',
            description: 'Grammatik macht Spaß!',
            action: () => window.location.href = 'index.html#grammatik'
        },
        'speaking': {
            title: 'Sprech-Übung',
            description: 'Nimm deine Stimme auf!',
            action: () => window.location.href = 'index.html#practiceWord'
        },
        'homework': {
            title: 'Hausaufgaben',
            description: 'Zeit zum Schreiben!',
            action: () => switchNotebook('daily')
        }
    };
    
    const activity = activities[activityId];
    if (activity) {
        showNotification(`🎯 ${activity.title}: ${activity.description}`, 'info');
        setTimeout(() => activity.action(), 1000);
    }
}

// Game System
function startGame(gameId) {
    const games = {
        'wordmatch': () => initWordMatchGame(),
        'speedtyping': () => initSpeedTypingGame(),
        'memory': () => initMemoryGame(),
        'sentencebuilder': () => initSentenceBuilderGame(),
        'listening': () => initListeningGame(),
        'articlerush': () => initArticleRushGame()
    };
    
    if (games[gameId]) {
        document.getElementById('gameModal').classList.add('active');
        games[gameId]();
    }
}

function closeGame() {
    document.getElementById('gameModal').classList.remove('active');
}

// Word Match Game
function initWordMatchGame() {
    document.getElementById('gameTitle').textContent = 'Wort-Match';
    document.getElementById('gameScore').textContent = '0';
    
    const words = [
        { de: 'Hallo', en: 'Hello' },
        { de: 'Danke', en: 'Thank you' },
        { de: 'Tschüss', en: 'Goodbye' },
        { de: 'Ja', en: 'Yes' },
        { de: 'Nein', en: 'No' },
        { de: 'Bitte', en: 'Please' },
        { de: 'Guten Morgen', en: 'Good morning' },
        { de: 'Guten Tag', en: 'Good day' }
    ];
    
    let score = 0;
    let currentRound = 0;
    let selected = null;
    
    function renderGame() {
        const word = words[currentRound];
        const options = [word.en, ...words.filter(w => w !== word).map(w => w.en).sort(() => Math.random() - 0.5).slice(0, 3)]
            .sort(() => Math.random() - 0.5);
        
        document.getElementById('gameBody').innerHTML = `
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="font-size: 48px; font-weight: 900; color: #1a4a6e; margin-bottom: 20px;">
                    ${word.de}
                </div>
                <p style="font-size: 18px; color: #64748b;">Wähle die richtige Übersetzung:</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                ${options.map((opt, i) => `
                    <button onclick="checkWordMatch('${opt}', '${word.en}')" 
                            style="padding: 24px; font-size: 20px; font-weight: 700; background: white; 
                                   border: 3px solid #e2e8f0; border-radius: 16px; cursor: pointer; 
                                   transition: all 0.3s ease;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div style="text-align: center; margin-top: 40px; font-size: 16px; color: #64748b;">
                Runde: ${currentRound + 1} / ${words.length}
            </div>
        `;
    }
    
    window.checkWordMatch = function(selected, correct) {
        if (selected === correct) {
            score += 10;
            document.getElementById('gameScore').textContent = score;
            showNotification('✅ Richtig!', 'success');
            
            currentRound++;
            if (currentRound < words.length) {
                setTimeout(renderGame, 500);
            } else {
                setTimeout(() => {
                    document.getElementById('gameBody').innerHTML = `
                        <div style="text-align: center;">
                            <div style="font-size: 72px; margin-bottom: 20px;">🎉</div>
                            <h2 style="font-size: 32px; color: #1a4a6e; margin-bottom: 16px;">Fantastisch!</h2>
                            <p style="font-size: 20px; color: #64748b; margin-bottom: 32px;">
                                Du hast <strong>${score}</strong> Punkte erreicht!
                            </p>
                            <button onclick="closeGame()" class="btn btn-primary btn-large">
                                Fertig
                            </button>
                        </div>
                    `;
                    updateGameHighscore('wordmatch', score);
                }, 500);
            }
        } else {
            showNotification('❌ Falsch! Versuch es nochmal!', 'error');
        }
    };
    
    renderGame();
}

// Speed Typing Game
function initSpeedTypingGame() {
    document.getElementById('gameTitle').textContent = 'Schnell-Tipper';
    
    const words = ['Hallo', 'Danke', 'Bitte', 'Tschüss', 'Ja', 'Nein', 'Guten Morgen', 'Guten Tag', 'Auf Wiedersehen', 'Entschuldigung'];
    let score = 0;
    let currentWord = 0;
    let startTime = Date.now();
    
    function nextWord() {
        if (currentWord >= words.length) {
            const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
            document.getElementById('gameBody').innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 72px; margin-bottom: 20px;">⚡</div>
                    <h2>Super schnell!</h2>
                    <p style="font-size: 24px; margin: 20px 0;">Zeit: <strong>${totalTime}s</strong></p>
                    <p>Punkte: <strong>${score}</strong></p>
                    <button onclick="closeGame()" class="btn btn-primary btn-large" style="margin-top: 20px;">Fertig</button>
                </div>
            `;
            updateGameHighscore('speedtyping', score);
            return;
        }
        
        const word = words[currentWord];
        document.getElementById('gameBody').innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 56px; font-weight: 900; color: #1a4a6e; margin-bottom: 40px;">
                    ${word}
                </div>
                <input type="text" id="typeInput" 
                       style="width: 100%; max-width: 400px; padding: 20px; font-size: 24px; 
                              text-align: center; border: 3px solid #e2e8f0; border-radius: 16px;"
                       placeholder="Tippe hier..." autocomplete="off" autofocus>
                <p style="margin-top: 20px; color: #64748b;">Wort ${currentWord + 1} / ${words.length}</p>
            </div>
        `;
        
        const input = document.getElementById('typeInput');
        input.addEventListener('input', (e) => {
            if (e.target.value === word) {
                score += 10;
                document.getElementById('gameScore').textContent = score;
                showNotification('✅ Perfekt!', 'success');
                currentWord++;
                setTimeout(nextWord, 300);
            }
        });
    }
    
    nextWord();
}

// Memory Game
function initMemoryGame() {
    document.getElementById('gameTitle').textContent = 'Vokabel-Memory';
    
    const pairs = [
        { de: 'Hallo', en: 'Hello' },
        { de: 'Danke', en: 'Thank you' },
        { de: 'Tschüss', en: 'Goodbye' },
        { de: 'Ja', en: 'Yes' },
        { de: 'Nein', en: 'No' },
        { de: 'Bitte', en: 'Please' }
    ];
    
    let cards = [];
    pairs.forEach(pair => {
        cards.push({ text: pair.de, pairId: pair.de, type: 'de' });
        cards.push({ text: pair.en, pairId: pair.de, type: 'en' });
    });
    cards = cards.sort(() => Math.random() - 0.5);
    
    let flipped = [];
    let matched = [];
    let moves = 0;
    
    function renderMemory() {
        document.getElementById('gameBody').innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
                ${cards.map((card, i) => `
                    <button onclick="flipCard(${i})" 
                            class="memory-card ${matched.includes(card.pairId) ? 'matched' : ''}" 
                            id="card-${i}"
                            style="padding: 24px; font-size: 18px; font-weight: 700; 
                                   background: ${flipped.includes(i) || matched.includes(card.pairId) ? '#10b981' : '#1a4a6e'}; 
                                   color: white; border: none; border-radius: 12px; cursor: pointer; 
                                   min-height: 100px; transition: all 0.3s ease;">
                        ${flipped.includes(i) || matched.includes(card.pairId) ? card.text : '?'}
                    </button>
                `).join('')}
            </div>
            <p style="text-align: center; margin-top: 24px; font-size: 18px; color: #64748b;">
                Züge: <strong>${moves}</strong> | Gefunden: <strong>${matched.length}/${pairs.length}</strong>
            </p>
        `;
    }
    
    window.flipCard = function(index) {
        if (flipped.length >= 2 || flipped.includes(index) || matched.includes(cards[index].pairId)) return;
        
        flipped.push(index);
        renderMemory();
        
        if (flipped.length === 2) {
            moves++;
            const [first, second] = flipped;
            if (cards[first].pairId === cards[second].pairId) {
                matched.push(cards[first].pairId);
                flipped = [];
                showNotification('✅ Treffer!', 'success');
                if (matched.length === pairs.length) {
                    setTimeout(() => {
                        document.getElementById('gameBody').innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 72px; margin-bottom: 20px;">🎉</div>
                                <h2>Alle gefunden!</h2>
                                <p style="font-size: 20px; margin: 20px 0;">In <strong>${moves}</strong> Zügen!</p>
                                <button onclick="closeGame()" class="btn btn-primary btn-large">Fertig</button>
                            </div>
                        `;
                    }, 500);
                } else {
                    renderMemory();
                }
            } else {
                setTimeout(() => {
                    flipped = [];
                    renderMemory();
                }, 1000);
            }
        }
    };
    
    renderMemory();
}

// Sentence Builder Game
function initSentenceBuilderGame() {
    document.getElementById('gameTitle').textContent = 'Satz-Baumeister';
    
    const sentences = [
        { words: ['Ich', 'bin', 'Mariami'], correct: 'Ich bin Mariami' },
        { words: ['Guten', 'Morgen', '!'], correct: 'Guten Morgen !' },
        { words: ['Wie', 'geht', 'es', 'dir', '?'], correct: 'Wie geht es dir ?' },
        { words: ['Ich', 'komme', 'aus', 'Georgien'], correct: 'Ich komme aus Georgien' }
    ];
    
    let currentSentence = 0;
    let score = 0;
    let userSentence = [];
    
    function renderSentence() {
        const sentence = sentences[currentSentence];
        const shuffled = [...sentence.words].sort(() => Math.random() - 0.5);
        
        document.getElementById('gameBody').innerHTML = `
            <div style="text-align: center; margin-bottom: 40px;">
                <p style="font-size: 18px; color: #64748b; margin-bottom: 20px;">
                    Baue den Satz:
                </p>
                <div id="userSentence" style="min-height: 60px; padding: 20px; background: #f8fafc; 
                                               border-radius: 12px; font-size: 24px; font-weight: 700; 
                                               color: #1a4a6e; margin-bottom: 30px;">
                    ${userSentence.join(' ') || 'Klicke auf die Wörter...'}
                </div>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 30px;">
                ${shuffled.map((word, i) => `
                    <button onclick="addWord('${word}')" 
                            style="padding: 16px 24px; font-size: 18px; font-weight: 700; 
                                   background: white; border: 3px solid #e2e8f0; border-radius: 12px; 
                                   cursor: pointer; transition: all 0.3s ease;">
                        ${word}
                    </button>
                `).join('')}
            </div>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button onclick="clearSentence()" class="btn btn-outline">
                    <i class="fa-solid fa-rotate-left"></i> Zurücksetzen
                </button>
                <button onclick="checkSentence()" class="btn btn-primary">
                    <i class="fa-solid fa-check"></i> Prüfen
                </button>
            </div>
        `;
    }
    
    window.addWord = function(word) {
        userSentence.push(word);
        renderSentence();
    };
    
    window.clearSentence = function() {
        userSentence = [];
        renderSentence();
    };
    
    window.checkSentence = function() {
        const sentence = sentences[currentSentence];
        if (userSentence.join(' ') === sentence.correct) {
            score += 20;
            document.getElementById('gameScore').textContent = score;
            showNotification('✅ Perfekt!', 'success');
            
            currentSentence++;
            userSentence = [];
            
            if (currentSentence < sentences.length) {
                setTimeout(renderSentence, 500);
            } else {
                setTimeout(() => {
                    document.getElementById('gameBody').innerHTML = `
                        <div style="text-align: center;">
                            <div style="font-size: 72px; margin-bottom: 20px;">🌟</div>
                            <h2>Alle Sätze korrekt!</h2>
                            <p style="font-size: 20px; margin: 20px 0;">Score: <strong>${score}</strong></p>
                            <button onclick="closeGame()" class="btn btn-primary btn-large">Fertig</button>
                        </div>
                    `;
                }, 500);
            }
        } else {
            showNotification('❌ Nicht ganz richtig! Versuch es nochmal!', 'error');
        }
    };
    
    renderSentence();
}

// Listening Game
function initListeningGame() {
    document.getElementById('gameTitle').textContent = 'Hör-Challenge';
    document.getElementById('gameBody').innerHTML = `
        <div style="text-align: center;">
            <p style="font-size: 18px; color: #64748b; margin-bottom: 30px;">
                Höre das Wort und tippe es korrekt!
            </p>
            <button onclick="speakWord('Hallo')" class="btn btn-primary btn-large" style="margin-bottom: 30px;">
                <i class="fa-solid fa-volume-high"></i> Wort anhören
            </button>
            <input type="text" id="listeningInput" 
                   style="width: 100%; max-width: 400px; padding: 20px; font-size: 24px; 
                          text-align: center; border: 3px solid #e2e8f0; border-radius: 16px;"
                   placeholder="Tippe das Wort..." autocomplete="off">
            <button onclick="checkListening()" class="btn btn-primary" style="margin-top: 20px;">
                Prüfen
            </button>
        </div>
    `;
}

function checkListening() {
    const input = document.getElementById('listeningInput').value;
    if (input.toLowerCase() === 'hallo') {
        showNotification('✅ Richtig gehört!', 'success');
        setTimeout(closeGame, 1500);
    } else {
        showNotification('❌ Nicht ganz! Hör nochmal genau hin!', 'error');
    }
}

// Article Rush Game
function initArticleRushGame() {
    document.getElementById('gameTitle').textContent = 'Artikel-Rush';
    
    const words = [
        { word: 'Haus', article: 'das' },
        { word: 'Auto', article: 'das' },
        { word: 'Frau', article: 'die' },
        { word: 'Mann', article: 'der' },
        { word: 'Kind', article: 'das' },
        { word: 'Buch', article: 'das' },
        { word: 'Tisch', article: 'der' },
        { word: 'Tür', article: 'die' }
    ];
    
    let currentWord = 0;
    let score = 0;
    let startTime = Date.now();
    
    function renderArticleRush() {
        if (currentWord >= words.length) {
            const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
            document.getElementById('gameBody').innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 72px; margin-bottom: 20px;">⚡</div>
                    <h2>Blitzschnell!</h2>
                    <p style="font-size: 24px; margin: 20px 0;">Zeit: <strong>${totalTime}s</strong></p>
                    <p>Punkte: <strong>${score}</strong></p>
                    <button onclick="closeGame()" class="btn btn-primary btn-large" style="margin-top: 20px;">Fertig</button>
                </div>
            `;
            updateGameHighscore('articlerush', score);
            return;
        }
        
        const current = words[currentWord];
        document.getElementById('gameBody').innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 64px; font-weight: 900; color: #1a4a6e; margin-bottom: 40px;">
                    ${current.word}
                </div>
                <div style="display: flex; gap: 16px; justify-content: center;">
                    <button onclick="checkArticle('der', '${current.article}')" 
                            style="padding: 24px 48px; font-size: 32px; font-weight: 900; 
                                   background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%); 
                                   color: white; border: none; border-radius: 16px; cursor: pointer;">
                        der
                    </button>
                    <button onclick="checkArticle('die', '${current.article}')" 
                            style="padding: 24px 48px; font-size: 32px; font-weight: 900; 
                                   background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%); 
                                   color: white; border: none; border-radius: 16px; cursor: pointer;">
                        die
                    </button>
                    <button onclick="checkArticle('das', '${current.article}')" 
                            style="padding: 24px 48px; font-size: 32px; font-weight: 900; 
                                   background: linear-gradient(135deg, #34d399 0%, #10b981 100%); 
                                   color: white; border: none; border-radius: 16px; cursor: pointer;">
                        das
                    </button>
                </div>
                <p style="margin-top: 30px; font-size: 18px; color: #64748b;">
                    ${currentWord + 1} / ${words.length}
                </p>
            </div>
        `;
    }
    
    window.checkArticle = function(selected, correct) {
        if (selected === correct) {
            score += 10;
            document.getElementById('gameScore').textContent = score;
            showNotification('✅ Richtig!', 'success');
            currentWord++;
            setTimeout(renderArticleRush, 300);
        } else {
            showNotification(`❌ Falsch! Es ist "${correct}"`, 'error');
            currentWord++;
            setTimeout(renderArticleRush, 1000);
        }
    };
    
    renderArticleRush();
}

// Update game highscores
function updateGameHighscore(gameId, score) {
    const current = parseInt(localStorage.getItem(`game_${gameId}_high`) || '0');
    if (score > current) {
        localStorage.setItem(`game_${gameId}_high`, score);
        document.getElementById(`${gameId}High`).textContent = score;
    }
}

// Scenario System
function startScenario(scenarioId) {
    showNotification(`🎭 Szenario "${scenarioId}" wird geladen...`, 'info');
    setTimeout(() => {
        showNotification('💡 Nutze die Konversations-Übungen auf der Hauptseite!', 'info');
        setTimeout(() => window.location.href = 'index.html#ubungen', 1500);
    }, 1500);
}

// Story System
function openChapter(chapterNum) {
    if (chapterNum > 2) {
        showLockedMessage();
        return;
    }
    showNotification(`📖 Kapitel ${chapterNum} wird geöffnet...`, 'info');
    setTimeout(() => window.location.href = 'lektionen.html', 1000);
}

function showLockedMessage() {
    showNotification('🔒 Dieses Kapitel wird freigeschaltet, wenn du das vorherige abgeschlossen hast!', 'info');
}

// Daily Challenge
function startDailyChallenge() {
    showNotification('🚀 Challenge gestartet! Nutze das Voice Recording auf der Hauptseite!', 'info');
    setTimeout(() => window.location.href = 'index.html#practiceWord', 1500);
}

function startChallengeTimer() {
    // Countdown to midnight
    function updateTimer() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight - now;
        
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        
        document.getElementById('challengeTimer').innerHTML = `
            <i class="fa-regular fa-clock"></i>
            <span>${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</span>
        `;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Tips Carousel
let currentTip = 0;

function initTipsCarousel() {
    showTip(0);
}

function showTip(index) {
    const slides = document.querySelectorAll('.tip-slide');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    currentTip = index;
}

function nextTip() {
    const slides = document.querySelectorAll('.tip-slide');
    currentTip = (currentTip + 1) % slides.length;
    showTip(currentTip);
}

function previousTip() {
    const slides = document.querySelectorAll('.tip-slide');
    currentTip = (currentTip - 1 + slides.length) % slides.length;
    showTip(currentTip);
}

window.nextTip = nextTip;
window.previousTip = previousTip;

// Immersion System
function startImmersion(type) {
    showNotification(`🌍 ${type} wird geladen...`, 'info');
    setTimeout(() => {
        showNotification('💡 Feature kommt bald! Nutze YouTube für deutsche Inhalte!', 'info');
    }, 1000);
}

// Notebook System
function switchNotebook(section) {
    const buttons = document.querySelectorAll('.notebook-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // In a full implementation, this would switch notebook sections
    showNotification(`📝 Notizbuch: ${section}`, 'info');
}

function changeDate(direction) {
    showNotification('📅 Datum geändert', 'info');
}

function saveNote(type) {
    const noteText = document.getElementById('dailyNotes').value;
    localStorage.setItem(`note_${type}_${new Date().toDateString()}`, noteText);
    showNotification('💾 Notiz gespeichert!', 'success');
}

function loadDailyNote() {
    const note = localStorage.getItem(`note_daily_${new Date().toDateString()}`) || '';
    const textarea = document.getElementById('dailyNotes');
    if (textarea) {
        textarea.value = note;
    }
}

// Notification System (reuse from main)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Speech synthesis (reuse from main)
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'de-DE';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// Export functions
window.startActivity = startActivity;
window.startGame = startGame;
window.closeGame = closeGame;
window.startScenario = startScenario;
window.openChapter = openChapter;
window.showLockedMessage = showLockedMessage;
window.startDailyChallenge = startDailyChallenge;
window.startImmersion = startImmersion;
window.switchNotebook = switchNotebook;
window.changeDate = changeDate;
window.saveNote = saveNote;
window.checkListening = checkListening;
window.speakWord = speakWord;

