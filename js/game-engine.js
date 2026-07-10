/**
 * ============================================
 * MOTOR DEL JUEGO - Game Engine
 * Maneja el estado global, navegacion, puntuacion
 * y la logica de feedback.
 * ============================================
 */

const GameEngine = {
    // Estado del juego
    state: {
        currentScreen: 'welcome',
        currentLevel: null,
        currentQuestion: 0,
        totalScore: 0,
        levelScores: [0, 0, 0, 0, 0, 0],
        levelsCompleted: [false, false, false, false, false, false],
        correctInLevel: 0,
        totalQuestionsInLevel: 0
    },

    /**
     * Inicializa el motor del juego
     */
    init() {
        this.loadState();
        this.updateUI();
    },

    /**
     * Guarda el estado en localStorage
     */
    saveState() {
        try {
            const saveData = {
                totalScore: this.state.totalScore,
                levelScores: this.state.levelScores,
                levelsCompleted: this.state.levelsCompleted
            };
            localStorage.setItem('valeryMathGame', JSON.stringify(saveData));
        } catch (e) {
            console.warn('No se pudo guardar el progreso:', e);
        }
    },

    /**
     * Carga el estado desde localStorage
     */
    loadState() {
        try {
            const saved = localStorage.getItem('valeryMathGame');
            if (saved) {
                const data = JSON.parse(saved);
                this.state.totalScore = data.totalScore || 0;
                this.state.levelScores = data.levelScores || [0, 0, 0, 0, 0, 0];
                this.state.levelsCompleted = data.levelsCompleted || [false, false, false, false, false, false];
            }
        } catch (e) {
            console.warn('No se pudo cargar el progreso:', e);
        }
    },


    /**
     * Muestra una pantalla y oculta las demas
     */
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(`screen-${screenId}`);
        if (screen) {
            screen.classList.add('active');
            this.state.currentScreen = screenId;
        }
    },

    /**
     * Actualiza todos los elementos de UI
     */
    updateUI() {
        // Puntuacion total
        const scoreEl = document.getElementById('total-score');
        if (scoreEl) scoreEl.textContent = this.state.totalScore;

        // Barra de progreso
        const completed = this.state.levelsCompleted.filter(Boolean).length;
        const progressBar = document.getElementById('global-progress');
        const progressText = document.getElementById('progress-text');
        if (progressBar) progressBar.style.width = `${(completed / 6) * 100}%`;
        if (progressText) progressText.textContent = `${completed}/6 Niveles`;
    },

    /**
     * Genera las tarjetas de niveles
     */
    renderLevels() {
        const grid = document.getElementById('levels-grid');
        if (!grid) return;

        const levelData = [
            { icon: '🛒', title: 'Multiplicaciones Rapidas', desc: 'Multiplica por 10, 100, 1000' },
            { icon: '🍬', title: 'Division Dulce', desc: 'Divide caramelos entre amigos' },
            { icon: '🏭', title: 'Fabrica de Operaciones', desc: 'Orden de operaciones' },
            { icon: '📚', title: 'Biblioteca de Numeros', desc: 'Divisores, M.C.M. y M.C.D.' },
            { icon: '🔬', title: 'Laboratorio de Geometria', desc: 'Perimetro, area y tiempo' },
            { icon: '🌾', title: 'Campo de Estadistica', desc: 'Graficos y tablas' }
        ];

        grid.innerHTML = levelData.map((level, i) => {
            const isCompleted = this.state.levelsCompleted[i];
            const isLocked = i > 0 && !this.state.levelsCompleted[i - 1] && !isCompleted;
            let cardClass = 'level-card';
            if (isCompleted) cardClass += ' completed';
            if (isLocked) cardClass += ' locked';

            return `
                <div class="${cardClass}" onclick="Game.selectLevel(${i})" data-level="${i}">
                    <div class="level-icon">${level.icon}</div>
                    <div class="level-number">Nivel ${i + 1}</div>
                    <div class="level-title">${level.title}</div>
                    ${isCompleted ? '<div class="level-medal">🏅</div>' : ''}
                    ${isLocked ? '<div class="level-medal">🔒</div>' : ''}
                </div>
            `;
        }).join('');
    },


    /**
     * Inicia un nivel especifico
     */
    startLevel(levelIndex) {
        this.state.currentLevel = levelIndex;
        this.state.currentQuestion = 0;
        this.state.correctInLevel = 0;

        const levelNames = [
            'Multiplicaciones Rapidas',
            'Division Dulce',
            'Fabrica de Operaciones',
            'Biblioteca de Numeros',
            'Laboratorio de Geometria',
            'Campo de Estadistica'
        ];

        document.getElementById('current-level-badge').textContent = `Nivel ${levelIndex + 1}`;
        document.getElementById('current-level-name').textContent = levelNames[levelIndex];
        document.getElementById('level-score').textContent = '0';

        this.showScreen('game');
        this.renderQuestion();
    },

    /**
     * Renderiza la pregunta actual del nivel
     */
    renderQuestion() {
        const level = this.state.currentLevel;
        const qIndex = this.state.currentQuestion;
        const questions = LevelData.getQuestions(level);

        this.state.totalQuestionsInLevel = questions.length;
        document.getElementById('question-counter').textContent =
            `${qIndex + 1}/${questions.length}`;

        const content = document.getElementById('game-content');
        const question = questions[qIndex];

        // Delegar la renderizacion al modulo del nivel correspondiente
        content.innerHTML = LevelData.renderQuestion(level, question, qIndex);
    },

    /**
     * Verifica la respuesta del usuario
     */
    checkAnswer(userAnswer, correctAnswer, hint) {
        const isCorrect = LevelData.validateAnswer(
            this.state.currentLevel,
            userAnswer,
            correctAnswer
        );

        if (isCorrect) {
            this.state.correctInLevel++;
            const points = 10;
            this.state.totalScore += points;
            this.state.levelScores[this.state.currentLevel] += points;
            document.getElementById('level-score').textContent =
                this.state.levelScores[this.state.currentLevel];
            this.showFeedback(true, '¡Correcto! ¡Excelente!', '');
        } else {
            const hintText = hint || `La respuesta correcta es: ${correctAnswer}`;
            this.showFeedback(false, '¡Ups! No es correcto.', hintText);
        }

        this.saveState();
        this.updateUI();
    },


    /**
     * Muestra el overlay de feedback (correcto/incorrecto)
     */
    showFeedback(isCorrect, text, hint) {
        const overlay = document.getElementById('feedback-overlay');
        const icon = document.getElementById('feedback-icon');
        const textEl = document.getElementById('feedback-text');
        const hintEl = document.getElementById('feedback-hint');

        icon.textContent = isCorrect ? '✅' : '❌';
        textEl.textContent = text;
        textEl.style.color = isCorrect ? 'var(--success)' : 'var(--secondary)';
        hintEl.textContent = hint || '';

        overlay.classList.remove('hidden');

        // Efecto de sonido simulado con Web Audio API
        this.playSound(isCorrect);
    },

    /**
     * Oculta el feedback y avanza a la siguiente pregunta
     */
    nextQuestion() {
        document.getElementById('feedback-overlay').classList.add('hidden');

        this.state.currentQuestion++;

        if (this.state.currentQuestion >= this.state.totalQuestionsInLevel) {
            this.completeLevel();
        } else {
            this.renderQuestion();
        }
    },

    /**
     * Marca el nivel como completado
     */
    completeLevel() {
        const level = this.state.currentLevel;
        this.state.levelsCompleted[level] = true;
        this.saveState();

        // Mostrar pantalla de nivel completado
        document.getElementById('correct-answers').textContent =
            `${this.state.correctInLevel}/${this.state.totalQuestionsInLevel}`;
        document.getElementById('points-earned').textContent =
            this.state.levelScores[level];
        document.getElementById('level-complete-text').textContent =
            `¡Has completado el Nivel ${level + 1}! Ganaste una medalla.`;

        this.showScreen('level-complete');

        // Si todos los niveles estan completados, mostrar pantalla final
        if (this.state.levelsCompleted.every(Boolean)) {
            setTimeout(() => this.showFinalScreen(), 3000);
        }
    },

    /**
     * Muestra la pantalla final con confeti
     */
    showFinalScreen() {
        document.getElementById('final-total-score').textContent = this.state.totalScore;

        // Generar medallas
        const medalsContainer = document.getElementById('medals-collection');
        const medalNames = [
            'Multiplicador', 'Divisor', 'Operador',
            'Bibliotecario', 'Geometra', 'Estadistico'
        ];
        medalsContainer.innerHTML = medalNames.map((name, i) => `
            <div class="medal-item">
                <div class="medal-emoji">🏅</div>
                <div class="medal-label">${name}</div>
            </div>
        `).join('');

        this.showScreen('final');
        this.startConfetti();
    },


    /**
     * Animacion de confeti en canvas
     */
    startConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;

        const colors = ['#6C63FF', '#FF6B6B', '#4ECB71', '#FFD93D', '#FF9F43', '#A29BFE'];
        const confetti = [];

        for (let i = 0; i < 150; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 3 + 2,
                angle: Math.random() * 360,
                spin: Math.random() * 5 - 2.5
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let active = false;

            confetti.forEach(c => {
                c.y += c.speed;
                c.angle += c.spin;

                if (c.y < canvas.height + 20) {
                    active = true;
                    ctx.save();
                    ctx.translate(c.x, c.y);
                    ctx.rotate((c.angle * Math.PI) / 180);
                    ctx.fillStyle = c.color;
                    ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
                    ctx.restore();
                }
            });

            if (active) requestAnimationFrame(animate);
        };

        animate();
    },

    /**
     * Reproduce un sonido (correcto o incorrecto) usando Web Audio API
     */
    playSound(isCorrect) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            if (isCorrect) {
                // Sonido agradable ascendente
                oscillator.frequency.setValueAtTime(523, audioCtx.currentTime);
                oscillator.frequency.setValueAtTime(659, audioCtx.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(784, audioCtx.currentTime + 0.2);
            } else {
                // Sonido de error descendente
                oscillator.frequency.setValueAtTime(330, audioCtx.currentTime);
                oscillator.frequency.setValueAtTime(262, audioCtx.currentTime + 0.15);
            }

            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);

            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.4);
        } catch (e) {
            // Silenciar errores de audio
        }
    },

    /**
     * Reinicia todo el juego
     */
    reset() {
        this.state.totalScore = 0;
        this.state.levelScores = [0, 0, 0, 0, 0, 0];
        this.state.levelsCompleted = [false, false, false, false, false, false];
        this.state.currentLevel = null;
        this.state.currentQuestion = 0;
        this.state.correctInLevel = 0;
        this.saveState();
        this.updateUI();
    }
};
