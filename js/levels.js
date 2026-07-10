/**
 * ============================================
 * DATOS Y LOGICA DE LOS 6 NIVELES
 * Cada nivel tiene sus preguntas, renderizado
 * y validacion de respuestas.
 * ============================================
 */

const LevelData = {

    /**
     * Retorna las preguntas para un nivel dado
     */
    getQuestions(levelIndex) {
        switch (levelIndex) {
            case 0: return this.level1Questions;
            case 1: return this.level2Questions;
            case 2: return this.level3Questions;
            case 3: return this.level4Questions;
            case 4: return this.level5Questions;
            case 5: return this.level6Questions;
            default: return [];
        }
    },

    // ============================================
    // NIVEL 1: MULTIPLICACIONES ABREVIADAS
    // ============================================
    level1Questions: [
        { num: '3.458', mult: 10, answer: 34580, display: '3.458 x 10' },
        { num: '6.724', mult: 1000, answer: 6724000, display: '6.724 x 1000' },
        { num: '12.305', mult: 1000, answer: 12305000, display: '12.305 x 1000' },
        { num: '45.678', mult: 10, answer: 456780, display: '45.678 x 10' },
        { num: '8.921', mult: 100, answer: 892100, display: '8.921 x 100' }
    ],

    // ============================================
    // NIVEL 2: DIVISIONES SIMPLES
    // ============================================
    level2Questions: [
        { dividend: 20, divisor: 4, quotient: 5, remainder: 0, display: '20 ÷ 4' },
        { dividend: 64, divisor: 6, quotient: 10, remainder: 4, display: '64 ÷ 6' },
        { dividend: 48, divisor: 8, quotient: 6, remainder: 0, display: '48 ÷ 8' },
        { dividend: 27, divisor: 9, quotient: 3, remainder: 0, display: '27 ÷ 9' },
        { dividend: 15, divisor: 5, quotient: 3, remainder: 0, display: '15 ÷ 5' },
        { dividend: 49, divisor: 7, quotient: 7, remainder: 0, display: '49 ÷ 7' },
        { dividend: 72, divisor: 9, quotient: 8, remainder: 0, display: '72 ÷ 9' },
        { dividend: 40, divisor: 8, quotient: 5, remainder: 0, display: '40 ÷ 8' },
        { dividend: 14, divisor: 2, quotient: 7, remainder: 0, display: '14 ÷ 2' }
    ],


    // ============================================
    // NIVEL 3: OPERACIONES COMBINADAS
    // ============================================
    level3Questions: [
        { expression: '2 x 4 + 52 + 7 x 8 - 23', answer: 93, display: '2 x 4 + 52 + 7 x 8 - 23',
          hint: 'Primero multiplica: 2x4=8 y 7x8=56. Luego suma y resta: 8+52+56-23=93' },
        { expression: '15 x 6 + 48 - 7 x 5', answer: 103, display: '15 x 6 + 48 - 7 x 5',
          hint: 'Primero multiplica: 15x6=90 y 7x5=35. Luego: 90+48-35=103' },
        { expression: '120 - 8 x 9 + 4 x 6', answer: 72, display: '120 - 8 x 9 + 4 x 6',
          hint: 'Primero multiplica: 8x9=72 y 4x6=24. Luego: 120-72+24=72' },
        { expression: '5 x 3 + 10 - 2 x 4', answer: 17, display: '5 x 3 + 10 - 2 x 4',
          hint: 'Primero multiplica: 5x3=15 y 2x4=8. Luego: 15+10-8=17' },
        { expression: '100 - 5 x 10 + 3 x 7', answer: 71, display: '100 - 5 x 10 + 3 x 7',
          hint: 'Primero multiplica: 5x10=50 y 3x7=21. Luego: 100-50+21=71' }
    ],

    // ============================================
    // NIVEL 4: DIVISORES, M.C.M. y M.C.D.
    // ============================================
    level4Questions: [
        { type: 'divisors', number: 14, answer: [1, 2, 7, 14],
          display: 'Selecciona todos los divisores de 14' },
        { type: 'divisors', number: 20, answer: [1, 2, 4, 5, 10, 20],
          display: 'Selecciona todos los divisores de 20' },
        { type: 'mcm', numbers: [25, 40], answer: 200,
          display: 'Calcula el M.C.M. de 25 y 40' },
        { type: 'mcm', numbers: [18, 30], answer: 90,
          display: 'Calcula el M.C.M. de 18 y 30' },
        { type: 'mcd', numbers: [60, 80], answer: 20,
          display: 'Calcula el M.C.D. de 60 y 80' },
        { type: 'mcd', numbers: [180, 240], answer: 60,
          display: 'Calcula el M.C.D. de 180 y 240' },
        { type: 'mcm', numbers: [8, 4], answer: 8,
          display: 'Taller: Calcula el M.C.M. de 8 y 4' },
        { type: 'mcm', numbers: [10, 12], answer: 60,
          display: 'Taller: Calcula el M.C.M. de 10 y 12' },
        { type: 'mcd', numbers: [15, 18], answer: 3,
          display: 'Taller: Calcula el M.C.D. de 15 y 18' },
        { type: 'mcd', numbers: [30, 30], answer: 30,
          display: 'Taller: Calcula el M.C.D. de 30 y 30' }
    ],


    // ============================================
    // NIVEL 5: GEOMETRIA Y MEDICION
    // ============================================
    level5Questions: [
        { type: 'perimeter_square', side: 15, answer: 60,
          display: 'Halla el perimetro de un cuadrado de 15 cm por lado' },
        { type: 'triangle', sides: [8, 8, 6], base: 6, height: 7.42, perimeterAnswer: 22, areaAnswer: 22.25,
          display: 'Halla el area y perimetro de un triangulo (lados: 8, 8 y 6 cm, altura: 7.42 cm)' },
        { type: 'time_equiv', question: '1 dia = ¿? horas', answer: 24,
          display: '¿Cuantas horas tiene un dia?' },
        { type: 'time_equiv', question: '1 semana = ¿? dias', answer: 7,
          display: '¿Cuantos dias tiene una semana?' },
        { type: 'time_equiv', question: '1 año = ¿? meses', answer: 12,
          display: '¿Cuantos meses tiene un año?' },
        { type: 'time_equiv', question: '1 decada = ¿? años', answer: 10,
          display: '¿Cuantos años tiene una decada?' },
        { type: 'time_equiv', question: '1 siglo = ¿? años', answer: 100,
          display: '¿Cuantos años tiene un siglo?' },
        { type: 'clock', hour: 3, minute: 15, answer: '3:15',
          display: 'Lee la hora del reloj' },
        { type: 'clock', hour: 7, minute: 30, answer: '7:30',
          display: 'Lee la hora del reloj' },
        { type: 'clock', hour: 10, minute: 45, answer: '10:45',
          display: 'Lee la hora del reloj' }
    ],

    // ============================================
    // NIVEL 6: ESTADISTICA
    // ============================================
    level6Questions: [
        { type: 'frequency_table',
          data: { 'Patatas': 30, 'Zanahorias': 25, 'Tomates': 40, 'Berenjenas': 55, 'Calabazas': 20 },
          display: 'Completa la tabla de frecuencias de la granja' },
        { type: 'bar_chart',
          data: { 'Patatas': 30, 'Zanahorias': 25, 'Tomates': 40, 'Berenjenas': 55, 'Calabazas': 20 },
          display: 'Ordena los vegetales de menor a mayor cantidad' },
        { type: 'stats_question',
          question: '¿Cual vegetal tiene la mayor frecuencia?',
          options: ['Patatas', 'Zanahorias', 'Tomates', 'Berenjenas', 'Calabazas'],
          answer: 'Berenjenas',
          display: '¿Cual vegetal tiene la mayor cantidad en la granja?' },
        { type: 'stats_question',
          question: '¿Cual vegetal tiene la menor frecuencia?',
          options: ['Patatas', 'Zanahorias', 'Tomates', 'Berenjenas', 'Calabazas'],
          answer: 'Calabazas',
          display: '¿Cual vegetal tiene la menor cantidad en la granja?' },
        { type: 'stats_sum',
          question: '¿Cual es el total de vegetales en la granja?',
          answer: 170,
          display: '¿Cual es el total de todos los vegetales?' }
    ],


    // ============================================
    // RENDERIZADO DE PREGUNTAS POR NIVEL
    // ============================================
    renderQuestion(levelIndex, question, qIndex) {
        switch (levelIndex) {
            case 0: return this.renderLevel1(question);
            case 1: return this.renderLevel2(question);
            case 2: return this.renderLevel3(question);
            case 3: return this.renderLevel4(question);
            case 4: return this.renderLevel5(question);
            case 5: return this.renderLevel6(question, qIndex);
            default: return '<p>Error: Nivel no encontrado</p>';
        }
    },

    /**
     * NIVEL 1: Multiplicaciones abreviadas
     */
    renderLevel1(q) {
        const zeros = q.mult === 10 ? '0' : q.mult === 100 ? '00' : '000';
        return `
            <div class="question-container">
                <p class="question-context">🛒 Tienda de Matematicas: Calcula el precio total</p>
                <div class="question-text">
                    <span class="highlight">${q.display}</span> = ?
                </div>
                <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                    Pista: Multiplicar por ${q.mult} es agregar ${zeros.length} cero(s) al final.
                </p>
                <div class="answer-section">
                    <div class="answer-input-group">
                        <input type="number" class="answer-input" id="answer-input"
                               placeholder="Tu respuesta" autofocus
                               onkeypress="if(event.key==='Enter') Game.submitLevel1()">
                        <button class="btn-submit" onclick="Game.submitLevel1()">
                            Verificar ✓
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * NIVEL 2: Divisiones simples
     */
    renderLevel2(q) {
        const hasRemainder = q.remainder > 0;
        return `
            <div class="question-container">
                <p class="question-context">🍬 Reparte los caramelos entre amigos</p>
                <div class="question-text">
                    <span class="highlight">${q.display}</span>
                </div>
                <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                    ${hasRemainder ? 'Esta division tiene residuo. Escribe cociente y residuo.' : 'Escribe el resultado de la division.'}
                </p>
                <div class="answer-section">
                    <div class="answer-input-group">
                        <label class="input-label">Cociente:</label>
                        <input type="number" class="small-input" id="answer-quotient"
                               placeholder="?" autofocus>
                        ${hasRemainder ? `
                            <label class="input-label">Residuo:</label>
                            <input type="number" class="small-input" id="answer-remainder" placeholder="?">
                        ` : ''}
                        <button class="btn-submit" onclick="Game.submitLevel2()">
                            Verificar ✓
                        </button>
                    </div>
                </div>
            </div>
        `;
    },


    /**
     * NIVEL 3: Operaciones combinadas
     */
    renderLevel3(q) {
        return `
            <div class="question-container">
                <p class="question-context">🏭 La Fabrica de Operaciones: Resuelve en el orden correcto</p>
                <div class="question-text">
                    <span class="highlight">${q.display}</span> = ?
                </div>
                <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                    Recuerda: Primero las multiplicaciones, luego sumas y restas (de izquierda a derecha).
                </p>
                <div class="answer-section">
                    <div class="answer-input-group">
                        <input type="number" class="answer-input" id="answer-input"
                               placeholder="Resultado" autofocus
                               onkeypress="if(event.key==='Enter') Game.submitLevel3()">
                        <button class="btn-submit" onclick="Game.submitLevel3()">
                            Verificar ✓
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * NIVEL 4: Divisores, M.C.M. y M.C.D.
     */
    renderLevel4(q) {
        if (q.type === 'divisors') {
            // Generar chips con numeros del 1 al numero dado
            const maxNum = q.number;
            const chips = [];
            for (let i = 1; i <= maxNum; i++) {
                chips.push(i);
            }
            return `
                <div class="question-container">
                    <p class="question-context">📚 Biblioteca de Numeros: Encuentra los divisores</p>
                    <div class="question-text">
                        ${q.display}
                    </div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Un divisor es un numero que divide exactamente (residuo 0). Haz clic en todos los divisores.
                    </p>
                    <div class="divisor-chips" id="divisor-chips">
                        ${chips.map(n => `
                            <div class="divisor-chip" data-value="${n}" onclick="Game.toggleDivisor(this)">
                                ${n}
                            </div>
                        `).join('')}
                    </div>
                    <div class="mt-20">
                        <button class="btn-submit" onclick="Game.submitLevel4Divisors()">
                            Verificar ✓
                        </button>
                    </div>
                </div>
            `;
        } else {
            // MCM o MCD - input numerico
            const tipo = q.type === 'mcm' ? 'M.C.M.' : 'M.C.D.';
            return `
                <div class="question-container">
                    <p class="question-context">📚 Biblioteca de Numeros: Calcula el ${tipo}</p>
                    <div class="question-text">
                        ${q.display}
                    </div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        ${q.type === 'mcm'
                            ? 'El M.C.M. es el menor numero que es multiplo de ambos.'
                            : 'El M.C.D. es el mayor numero que divide a ambos.'}
                    </p>
                    <div class="answer-section">
                        <div class="answer-input-group">
                            <input type="number" class="answer-input" id="answer-input"
                                   placeholder="${tipo}" autofocus
                                   onkeypress="if(event.key==='Enter') Game.submitLevel4MCM()">
                            <button class="btn-submit" onclick="Game.submitLevel4MCM()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    },


    /**
     * NIVEL 5: Geometria y Medicion
     */
    renderLevel5(q) {
        if (q.type === 'perimeter_square') {
            return `
                <div class="question-container">
                    <p class="question-context">🔬 Laboratorio de Geometria</p>
                    <div class="question-text">${q.display}</div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Recuerda: Perimetro del cuadrado = 4 x lado
                    </p>
                    <div class="answer-section">
                        <div class="answer-input-group">
                            <input type="number" class="answer-input" id="answer-input"
                                   placeholder="Perimetro (cm)" autofocus
                                   onkeypress="if(event.key==='Enter') Game.submitLevel5()">
                            <button class="btn-submit" onclick="Game.submitLevel5()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (q.type === 'triangle') {
            return `
                <div class="question-container">
                    <p class="question-context">🔬 Laboratorio de Geometria</p>
                    <div class="question-text">${q.display}</div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Perimetro = suma de lados. Area = (base x altura) / 2
                    </p>
                    <div class="answer-section">
                        <div class="input-row">
                            <label class="input-label">Perimetro (cm):</label>
                            <input type="number" class="small-input" id="answer-perimeter" placeholder="?">
                        </div>
                        <div class="input-row">
                            <label class="input-label">Area (cm²):</label>
                            <input type="number" step="0.01" class="small-input" id="answer-area" placeholder="?">
                        </div>
                        <div class="mt-20">
                            <button class="btn-submit" onclick="Game.submitLevel5Triangle()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (q.type === 'time_equiv') {
            return `
                <div class="question-container">
                    <p class="question-context">⏰ Maquina del Tiempo</p>
                    <div class="question-text">${q.display}</div>
                    <div class="answer-section">
                        <div class="answer-input-group">
                            <input type="number" class="answer-input" id="answer-input"
                                   placeholder="?" autofocus
                                   onkeypress="if(event.key==='Enter') Game.submitLevel5()">
                            <button class="btn-submit" onclick="Game.submitLevel5()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (q.type === 'clock') {
            // Dibujar reloj analogico con SVG
            const hourAngle = (q.hour % 12) * 30 + q.minute * 0.5;
            const minuteAngle = q.minute * 6;
            return `
                <div class="question-container">
                    <p class="question-context">⏰ Lee la hora del reloj</p>
                    <div class="clock-container">
                        <div class="clock">
                            <div class="clock-hand hour" style="transform: rotate(${hourAngle}deg)"></div>
                            <div class="clock-hand minute" style="transform: rotate(${minuteAngle}deg)"></div>
                            <div class="clock-center"></div>
                        </div>
                    </div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Escribe la hora en formato H:MM (ejemplo: 3:45)
                    </p>
                    <div class="answer-section">
                        <div class="answer-input-group">
                            <input type="text" class="answer-input" id="answer-input"
                                   placeholder="H:MM" autofocus
                                   onkeypress="if(event.key==='Enter') Game.submitLevel5Clock()">
                            <button class="btn-submit" onclick="Game.submitLevel5Clock()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
        return '<p>Pregunta no disponible</p>';
    },


    /**
     * NIVEL 6: Estadistica
     */
    renderLevel6(q, qIndex) {
        if (q.type === 'frequency_table') {
            const items = Object.keys(q.data);
            return `
                <div class="question-container">
                    <p class="question-context">🌾 Campo de Estadistica: Datos de la granja</p>
                    <div class="question-text">${q.display}</div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Datos: Patatas=30, Zanahorias=25, Tomates=40, Berenjenas=55, Calabazas=20
                    </p>
                    <table class="freq-table">
                        <tr>
                            <th>Vegetal</th>
                            <th>Frecuencia Absoluta</th>
                        </tr>
                        ${items.map(item => `
                            <tr>
                                <td>${item}</td>
                                <td><input type="number" class="freq-input" data-item="${item}" placeholder="?"></td>
                            </tr>
                        `).join('')}
                    </table>
                    <div class="mt-20">
                        <button class="btn-submit" onclick="Game.submitLevel6Table()">
                            Verificar ✓
                        </button>
                    </div>
                </div>
            `;
        } else if (q.type === 'bar_chart') {
            // Pregunta de ordenar de menor a mayor
            const items = Object.entries(q.data).sort(() => Math.random() - 0.5);
            return `
                <div class="question-container">
                    <p class="question-context">🌾 Campo de Estadistica: Diagrama de barras</p>
                    <div class="question-text">${q.display}</div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Escribe los vegetales en orden de menor a mayor cantidad, separados por coma.
                        <br>Datos: Patatas=30, Zanahorias=25, Tomates=40, Berenjenas=55, Calabazas=20
                    </p>
                    <div class="bar-chart-container">
                        <div class="bar-chart" id="preview-chart">
                            ${Object.entries(q.data).map(([name, val]) => `
                                <div class="bar-item">
                                    <div class="bar" style="height: ${(val / 55) * 200}px; background: ${
                                        name === 'Patatas' ? '#FF9F43' :
                                        name === 'Zanahorias' ? '#FF6B6B' :
                                        name === 'Tomates' ? '#EE5A24' :
                                        name === 'Berenjenas' ? '#6C63FF' : '#4ECB71'
                                    }"></div>
                                    <div class="bar-label">${name}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="answer-section">
                        <div class="answer-input-group">
                            <input type="text" class="answer-input" id="answer-input"
                                   style="width: 350px;"
                                   placeholder="Ej: Calabazas, Zanahorias, ..."
                                   onkeypress="if(event.key==='Enter') Game.submitLevel6Order()">
                            <button class="btn-submit" onclick="Game.submitLevel6Order()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (q.type === 'stats_question') {
            return `
                <div class="question-container">
                    <p class="question-context">🌾 Campo de Estadistica</p>
                    <div class="question-text">${q.display}</div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Datos de la granja: Patatas=30, Zanahorias=25, Tomates=40, Berenjenas=55, Calabazas=20
                    </p>
                    <div class="options-grid">
                        ${q.options.map(opt => `
                            <button class="btn-answer" onclick="Game.submitLevel6Option('${opt}')">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (q.type === 'stats_sum') {
            return `
                <div class="question-container">
                    <p class="question-context">🌾 Campo de Estadistica</p>
                    <div class="question-text">${q.display}</div>
                    <p class="mt-10" style="color: var(--text-light); font-size: 0.9em;">
                        Suma: 30 + 25 + 40 + 55 + 20 = ?
                    </p>
                    <div class="answer-section">
                        <div class="answer-input-group">
                            <input type="number" class="answer-input" id="answer-input"
                                   placeholder="Total" autofocus
                                   onkeypress="if(event.key==='Enter') Game.submitLevel6Sum()">
                            <button class="btn-submit" onclick="Game.submitLevel6Sum()">
                                Verificar ✓
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
        return '<p>Pregunta no disponible</p>';
    },


    // ============================================
    // VALIDACION DE RESPUESTAS
    // ============================================
    validateAnswer(levelIndex, userAnswer, correctAnswer) {
        if (Array.isArray(correctAnswer) && Array.isArray(userAnswer)) {
            // Comparar arrays (para divisores)
            if (userAnswer.length !== correctAnswer.length) return false;
            const sortedUser = [...userAnswer].sort((a, b) => a - b);
            const sortedCorrect = [...correctAnswer].sort((a, b) => a - b);
            return sortedUser.every((val, i) => val === sortedCorrect[i]);
        }

        if (typeof userAnswer === 'string' && typeof correctAnswer === 'string') {
            return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        }

        // Comparacion numerica con tolerancia
        const numUser = parseFloat(userAnswer);
        const numCorrect = parseFloat(correctAnswer);
        if (!isNaN(numUser) && !isNaN(numCorrect)) {
            return Math.abs(numUser - numCorrect) < 0.5;
        }

        return String(userAnswer).trim() === String(correctAnswer).trim();
    }
};
