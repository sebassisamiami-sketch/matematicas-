/**
 * ============================================
 * CONTROLADOR PRINCIPAL DEL JUEGO
 * Conecta la interfaz de usuario con el motor
 * del juego y los datos de niveles.
 * ============================================
 */

const Game = {
    /**
     * Inicia el juego desde la pantalla de bienvenida
     */
    start() {
        GameEngine.init();
        GameEngine.renderLevels();
        GameEngine.showScreen('levels');
        GameEngine.updateUI();
    },

    /**
     * Vuelve a la pantalla de bienvenida
     */
    showWelcome() {
        GameEngine.showScreen('welcome');
    },

    /**
     * Vuelve a la pantalla de niveles
     */
    backToLevels() {
        GameEngine.renderLevels();
        GameEngine.updateUI();
        GameEngine.showScreen('levels');
    },

    /**
     * Selecciona un nivel para jugar
     */
    selectLevel(index) {
        // Verificar si el nivel esta bloqueado
        if (index > 0 && !GameEngine.state.levelsCompleted[index - 1] && !GameEngine.state.levelsCompleted[index]) {
            return; // Nivel bloqueado
        }
        GameEngine.startLevel(index);
    },

    /**
     * Avanza a la siguiente pregunta
     */
    nextQuestion() {
        GameEngine.nextQuestion();
    },

    /**
     * Reinicia el juego completamente
     */
    restart() {
        GameEngine.reset();
        GameEngine.showScreen('welcome');
    },


    // ============================================
    // HANDLERS DE NIVEL 1: Multiplicaciones
    // ============================================
    submitLevel1() {
        const input = document.getElementById('answer-input');
        const userAnswer = parseInt(input.value);
        const q = LevelData.level1Questions[GameEngine.state.currentQuestion];

        if (isNaN(userAnswer) || input.value === '') {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        const hint = `${q.num} x ${q.mult} = ${q.answer}. Recuerda mover la coma ${
            q.mult === 10 ? '1 posicion' : q.mult === 100 ? '2 posiciones' : '3 posiciones'
        } a la derecha.`;
        GameEngine.checkAnswer(userAnswer, q.answer, hint);
    },

    // ============================================
    // HANDLERS DE NIVEL 2: Divisiones
    // ============================================
    submitLevel2() {
        const q = LevelData.level2Questions[GameEngine.state.currentQuestion];
        const quotientInput = document.getElementById('answer-quotient');
        const userQuotient = parseInt(quotientInput.value);

        if (isNaN(userQuotient) || quotientInput.value === '') {
            quotientInput.classList.add('incorrect');
            setTimeout(() => quotientInput.classList.remove('incorrect'), 500);
            return;
        }

        let isCorrect = userQuotient === q.quotient;

        if (q.remainder > 0) {
            const remainderInput = document.getElementById('answer-remainder');
            const userRemainder = parseInt(remainderInput.value);
            if (isNaN(userRemainder)) {
                if (remainderInput) remainderInput.classList.add('incorrect');
                setTimeout(() => { if (remainderInput) remainderInput.classList.remove('incorrect'); }, 500);
                return;
            }
            isCorrect = isCorrect && userRemainder === q.remainder;
        }

        const hint = q.remainder > 0
            ? `${q.dividend} ÷ ${q.divisor} = ${q.quotient} con residuo ${q.remainder}`
            : `${q.dividend} ÷ ${q.divisor} = ${q.quotient}`;

        if (isCorrect) {
            GameEngine.state.correctInLevel++;
            GameEngine.state.totalScore += 10;
            GameEngine.state.levelScores[1] += 10;
            document.getElementById('level-score').textContent = GameEngine.state.levelScores[1];
            GameEngine.showFeedback(true, '¡Correcto! ¡Excelente!', '');
        } else {
            GameEngine.showFeedback(false, '¡Ups! No es correcto.', hint);
        }
        GameEngine.saveState();
        GameEngine.updateUI();
    },


    // ============================================
    // HANDLERS DE NIVEL 3: Operaciones combinadas
    // ============================================
    submitLevel3() {
        const input = document.getElementById('answer-input');
        const userAnswer = parseInt(input.value);
        const q = LevelData.level3Questions[GameEngine.state.currentQuestion];

        if (isNaN(userAnswer) || input.value === '') {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        GameEngine.checkAnswer(userAnswer, q.answer, q.hint);
    },

    // ============================================
    // HANDLERS DE NIVEL 4: Divisores, MCM, MCD
    // ============================================
    toggleDivisor(element) {
        element.classList.toggle('selected');
    },

    submitLevel4Divisors() {
        const q = LevelData.level4Questions[GameEngine.state.currentQuestion];
        const selected = document.querySelectorAll('.divisor-chip.selected');
        const userAnswer = Array.from(selected).map(el => parseInt(el.dataset.value));

        // Marcar visualmente correcto/incorrecto
        document.querySelectorAll('.divisor-chip').forEach(chip => {
            const val = parseInt(chip.dataset.value);
            if (q.answer.includes(val)) {
                chip.classList.add('correct');
            } else if (chip.classList.contains('selected')) {
                chip.classList.add('incorrect');
            }
        });

        const isCorrect = LevelData.validateAnswer(3, userAnswer, q.answer);
        const hint = `Los divisores de ${q.number} son: ${q.answer.join(', ')}`;

        if (isCorrect) {
            GameEngine.state.correctInLevel++;
            GameEngine.state.totalScore += 10;
            GameEngine.state.levelScores[3] += 10;
            document.getElementById('level-score').textContent = GameEngine.state.levelScores[3];
            GameEngine.showFeedback(true, '¡Correcto! ¡Excelente!', '');
        } else {
            GameEngine.showFeedback(false, '¡Ups! No es correcto.', hint);
        }
        GameEngine.saveState();
        GameEngine.updateUI();
    },

    submitLevel4MCM() {
        const input = document.getElementById('answer-input');
        const userAnswer = parseInt(input.value);
        const q = LevelData.level4Questions[GameEngine.state.currentQuestion];

        if (isNaN(userAnswer) || input.value === '') {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        const tipo = q.type === 'mcm' ? 'M.C.M.' : 'M.C.D.';
        const hint = `El ${tipo} de ${q.numbers[0]} y ${q.numbers[1]} es ${q.answer}`;
        GameEngine.checkAnswer(userAnswer, q.answer, hint);
    },


    // ============================================
    // HANDLERS DE NIVEL 5: Geometria y Medicion
    // ============================================
    submitLevel5() {
        const input = document.getElementById('answer-input');
        const userAnswer = parseFloat(input.value);
        const q = LevelData.level5Questions[GameEngine.state.currentQuestion];

        if (isNaN(userAnswer) || input.value === '') {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        let hint = '';
        if (q.type === 'perimeter_square') {
            hint = `Perimetro = 4 x ${q.side} = ${q.answer} cm`;
        } else if (q.type === 'time_equiv') {
            hint = `La respuesta correcta es ${q.answer}`;
        }

        GameEngine.checkAnswer(userAnswer, q.answer, hint);
    },

    submitLevel5Triangle() {
        const q = LevelData.level5Questions[GameEngine.state.currentQuestion];
        const perimeterInput = document.getElementById('answer-perimeter');
        const areaInput = document.getElementById('answer-area');

        const userPerimeter = parseFloat(perimeterInput.value);
        const userArea = parseFloat(areaInput.value);

        if (isNaN(userPerimeter) || perimeterInput.value === '') {
            perimeterInput.classList.add('incorrect');
            setTimeout(() => perimeterInput.classList.remove('incorrect'), 500);
            return;
        }

        const perimeterCorrect = Math.abs(userPerimeter - q.perimeterAnswer) < 0.5;
        const areaCorrect = isNaN(userArea) ? false : Math.abs(userArea - q.areaAnswer) < 1;

        const isCorrect = perimeterCorrect && areaCorrect;
        const hint = `Perimetro = ${q.sides.join(' + ')} = ${q.perimeterAnswer} cm. Area = (${q.base} x ${q.height}) / 2 = ${q.areaAnswer} cm²`;

        if (isCorrect) {
            GameEngine.state.correctInLevel++;
            GameEngine.state.totalScore += 10;
            GameEngine.state.levelScores[4] += 10;
            document.getElementById('level-score').textContent = GameEngine.state.levelScores[4];
            GameEngine.showFeedback(true, '¡Correcto! ¡Excelente!', '');
        } else {
            GameEngine.showFeedback(false, '¡Ups! No es correcto.', hint);
        }
        GameEngine.saveState();
        GameEngine.updateUI();
    },

    submitLevel5Clock() {
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.trim();
        const q = LevelData.level5Questions[GameEngine.state.currentQuestion];

        if (!userAnswer) {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        // Normalizar respuesta del usuario
        const normalized = userAnswer.replace(/\s/g, '');
        const correct = q.answer;

        const isCorrect = normalized === correct ||
            normalized === correct.replace(':', 'h') ||
            normalized === correct.replace(':', '.');

        const hint = `La hora correcta es ${q.answer}`;

        if (isCorrect) {
            GameEngine.state.correctInLevel++;
            GameEngine.state.totalScore += 10;
            GameEngine.state.levelScores[4] += 10;
            document.getElementById('level-score').textContent = GameEngine.state.levelScores[4];
            GameEngine.showFeedback(true, '¡Correcto! ¡Excelente!', '');
        } else {
            GameEngine.showFeedback(false, '¡Ups! No es correcto.', hint);
        }
        GameEngine.saveState();
        GameEngine.updateUI();
    },


    // ============================================
    // HANDLERS DE NIVEL 6: Estadistica
    // ============================================
    submitLevel6Table() {
        const q = LevelData.level6Questions[GameEngine.state.currentQuestion];
        const inputs = document.querySelectorAll('.freq-input');
        let allCorrect = true;
        let allFilled = true;

        inputs.forEach(input => {
            const item = input.dataset.item;
            const userVal = parseInt(input.value);
            if (isNaN(userVal) || input.value === '') {
                allFilled = false;
                return;
            }
            if (userVal !== q.data[item]) {
                allCorrect = false;
            }
        });

        if (!allFilled) {
            // Resaltar campos vacios
            inputs.forEach(input => {
                if (input.value === '') {
                    input.style.borderColor = 'var(--secondary)';
                    setTimeout(() => input.style.borderColor = '#E2E8F0', 1000);
                }
            });
            return;
        }

        const hint = Object.entries(q.data).map(([k, v]) => `${k}: ${v}`).join(', ');

        if (allCorrect) {
            GameEngine.state.correctInLevel++;
            GameEngine.state.totalScore += 10;
            GameEngine.state.levelScores[5] += 10;
            document.getElementById('level-score').textContent = GameEngine.state.levelScores[5];
            GameEngine.showFeedback(true, '¡Correcto! ¡Tabla perfecta!', '');
        } else {
            GameEngine.showFeedback(false, '¡Ups! Revisa los valores.', `Valores correctos: ${hint}`);
        }
        GameEngine.saveState();
        GameEngine.updateUI();
    },

    submitLevel6Order() {
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.trim().toLowerCase();

        if (!userAnswer) {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        // Orden correcto: Calabazas(20), Zanahorias(25), Patatas(30), Tomates(40), Berenjenas(55)
        const correctOrder = 'calabazas, zanahorias, patatas, tomates, berenjenas';
        const normalizedUser = userAnswer.replace(/\s*,\s*/g, ', ').toLowerCase();

        const isCorrect = normalizedUser === correctOrder;
        const hint = 'Orden correcto: Calabazas (20), Zanahorias (25), Patatas (30), Tomates (40), Berenjenas (55)';

        if (isCorrect) {
            GameEngine.state.correctInLevel++;
            GameEngine.state.totalScore += 10;
            GameEngine.state.levelScores[5] += 10;
            document.getElementById('level-score').textContent = GameEngine.state.levelScores[5];
            GameEngine.showFeedback(true, '¡Correcto! ¡Excelente orden!', '');
        } else {
            GameEngine.showFeedback(false, '¡Ups! El orden no es correcto.', hint);
        }
        GameEngine.saveState();
        GameEngine.updateUI();
    },

    submitLevel6Option(selected) {
        const q = LevelData.level6Questions[GameEngine.state.currentQuestion];

        // Resaltar boton seleccionado
        document.querySelectorAll('.btn-answer').forEach(btn => {
            if (btn.textContent.trim() === selected) {
                btn.classList.add(selected === q.answer ? 'correct' : 'incorrect');
            }
            if (btn.textContent.trim() === q.answer) {
                btn.classList.add('correct');
            }
        });

        const isCorrect = selected === q.answer;
        const hint = `La respuesta correcta es: ${q.answer}`;

        setTimeout(() => {
            if (isCorrect) {
                GameEngine.state.correctInLevel++;
                GameEngine.state.totalScore += 10;
                GameEngine.state.levelScores[5] += 10;
                document.getElementById('level-score').textContent = GameEngine.state.levelScores[5];
                GameEngine.showFeedback(true, '¡Correcto! ¡Excelente!', '');
            } else {
                GameEngine.showFeedback(false, '¡Ups! No es correcto.', hint);
            }
            GameEngine.saveState();
            GameEngine.updateUI();
        }, 500);
    },

    submitLevel6Sum() {
        const input = document.getElementById('answer-input');
        const userAnswer = parseInt(input.value);
        const q = LevelData.level6Questions[GameEngine.state.currentQuestion];

        if (isNaN(userAnswer) || input.value === '') {
            input.classList.add('incorrect');
            setTimeout(() => input.classList.remove('incorrect'), 500);
            return;
        }

        const hint = `30 + 25 + 40 + 55 + 20 = ${q.answer}`;
        GameEngine.checkAnswer(userAnswer, q.answer, hint);
    }
};

// ============================================
// INICIALIZACION AL CARGAR LA PAGINA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    GameEngine.init();
});
