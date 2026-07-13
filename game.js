/* =====================================================
   VALERY - MISIÓN MATEMÁTICAS
   Juego educativo estilo Duolingo (un solo archivo JS)
   6 niveles basados en el examen de recuperación de 4º grado.
   ===================================================== */

/* ============ BANCO DE PREGUNTAS ============
   level 1: Multiplicaciones abreviadas (x10, x100, x1000)
   level 2: Divisiones simples
   level 3: Operaciones combinadas (orden de operaciones)
   level 4: Divisores, M.C.M. y M.C.D.
   level 5: Geometría y medición
   level 6: Estadística
   Formato: { level, q, options[{text}], answer(indice), rule, exp, examples[{op,res}], scene }
*/
const allQuestions = [
    /* ---------- NIVEL 1: MULTIPLICACIONES ABREVIADAS ---------- */
    { level:1, q:"🛒 En la tienda: ¿cuánto es 3.458 × 10?",
      options:[{text:"345.800"},{text:"34.580"},{text:"3.4580"}], answer:1,
      rule:"✖️ Multiplicar por 10",
      exp:"Para multiplicar por 10 solo agregamos UN cero al final (o movemos la coma un lugar a la derecha). Entonces 3.458 se convierte en 34.580.",
      examples:[{op:"3.458 × 10",res:"34.580"},{op:"25 × 10",res:"250"}],
      scene:'<span class="a-bounce">🛒</span><span class="a-float">💰</span>' },

    { level:1, q:"🛒 ¿Cuánto es 6.724 × 1000?",
      options:[{text:"6.724.000"},{text:"67.240"},{text:"672.400"}], answer:0,
      rule:"✖️ Multiplicar por 1000",
      exp:"Al multiplicar por 1000 agregamos TRES ceros al final. Así 6.724 se convierte en 6.724.000.",
      examples:[{op:"6.724 × 1000",res:"6.724.000"},{op:"5 × 1000",res:"5.000"}],
      scene:'<span class="a-float">🧮</span><span class="a-bounce">🔢</span>' },

    { level:1, q:"🛒 ¿Cuánto es 12.305 × 1000?",
      options:[{text:"1.230.500"},{text:"123.050"},{text:"12.305.000"}], answer:2,
      rule:"✖️ Multiplicar por 1000",
      exp:"Multiplicar por 1000 = agregar tres ceros. 12.305 se convierte en 12.305.000.",
      examples:[{op:"12.305 × 1000",res:"12.305.000"},{op:"12 × 1000",res:"12.000"}],
      scene:'<span class="a-bounce">🏷️</span><span class="a-float">✨</span>' },

    { level:1, q:"🛒 ¿Cuánto es 45.678 × 10?",
      options:[{text:"456.780"},{text:"45.6780"},{text:"4.567.800"}], answer:0,
      rule:"✖️ Multiplicar por 10",
      exp:"Por 10 agregamos un solo cero al final. 45.678 se convierte en 456.780.",
      examples:[{op:"45.678 × 10",res:"456.780"},{op:"100 × 10",res:"1.000"}],
      scene:'<span class="a-float">🛍️</span><span class="a-bounce">💵</span>' },

    { level:1, q:"🛒 ¿Cuánto es 8.921 × 100?",
      options:[{text:"89.210"},{text:"892.100"},{text:"8.921.00"}], answer:1,
      rule:"✖️ Multiplicar por 100",
      exp:"Al multiplicar por 100 agregamos DOS ceros al final. 8.921 se convierte en 892.100.",
      examples:[{op:"8.921 × 100",res:"892.100"},{op:"7 × 100",res:"700"}],
      scene:'<span class="a-bounce">🪙</span><span class="a-float">🛒</span>' },

    { level:1, q:"🛒 ¿Cuánto es 350 × 100?",
      options:[{text:"3.500"},{text:"35.000"},{text:"350.000"}], answer:1,
      rule:"✖️ Multiplicar por 100",
      exp:"Por 100 agregamos DOS ceros al final. 350 se convierte en 35.000.",
      examples:[{op:"350 × 100",res:"35.000"},{op:"3 × 100",res:"300"}],
      scene:'<span class="a-float">🏪</span><span class="a-bounce">💲</span>' },

    { level:1, q:"🛒 ¿Cuánto es 42 × 1000?",
      options:[{text:"42.000"},{text:"4.200"},{text:"420.000"}], answer:0,
      rule:"✖️ Multiplicar por 1000",
      exp:"Por 1000 agregamos TRES ceros al final. 42 se convierte en 42.000.",
      examples:[{op:"42 × 1000",res:"42.000"},{op:"9 × 1000",res:"9.000"}],
      scene:'<span class="a-bounce">🧾</span><span class="a-float">💰</span>' },

    { level:1, q:"🛒 ¿Cuánto es 609 × 10?",
      options:[{text:"6.090"},{text:"60.900"},{text:"609"}], answer:0,
      rule:"✖️ Multiplicar por 10",
      exp:"Por 10 agregamos UN cero al final. 609 se convierte en 6.090.",
      examples:[{op:"609 × 10",res:"6.090"},{op:"80 × 10",res:"800"}],
      scene:'<span class="a-float">🛒</span><span class="a-bounce">🪙</span>' },

    /* ---------- NIVEL 2: DIVISIONES SIMPLES ---------- */
    { level:2, q:"🍬 Reparte 20 caramelos entre 4 amigos: 20 ÷ 4 = ?",
      options:[{text:"4"},{text:"5"},{text:"6"}], answer:1,
      rule:"➗ División exacta",
      exp:"Repartimos 20 caramelos en 4 grupos iguales. A cada amigo le tocan 5, porque 5 × 4 = 20. ¡Sin caramelos que sobren!",
      examples:[{op:"20 ÷ 4",res:"5"},{op:"5 × 4",res:"20 ✔"}],
      scene:'<span class="a-bounce">🍬</span><span class="a-float">👧👦</span>' },

    { level:2, q:"🍬 64 ÷ 6 = ? (¡ojo, puede sobrar!)",
      options:[{text:"10 y sobran 4"},{text:"11 sin sobrar"},{text:"9 y sobran 2"}], answer:0,
      rule:"➗ División con residuo",
      exp:"6 × 10 = 60. De 64 a 60 sobran 4. Como 4 es menor que 6, ya no se puede repartir más. Cociente 10 y residuo 4.",
      examples:[{op:"6 × 10",res:"60"},{op:"64 − 60",res:"4 (sobra)"}],
      scene:'<span class="a-bounce">🍬</span><span class="a-float">➗</span>' },

    { level:2, q:"🍬 48 ÷ 8 = ?",
      options:[{text:"7"},{text:"6"},{text:"8"}], answer:1,
      rule:"➗ División exacta",
      exp:"Buscamos qué número por 8 da 48. Como 6 × 8 = 48, el resultado es 6.",
      examples:[{op:"48 ÷ 8",res:"6"},{op:"6 × 8",res:"48 ✔"}],
      scene:'<span class="a-float">🍭</span><span class="a-bounce">8️⃣</span>' },

    { level:2, q:"🍬 27 ÷ 9 = ?",
      options:[{text:"3"},{text:"4"},{text:"2"}], answer:0,
      rule:"➗ División exacta",
      exp:"9 × 3 = 27, así que 27 ÷ 9 = 3. ¡Es la tabla del 9!",
      examples:[{op:"27 ÷ 9",res:"3"},{op:"9 × 3",res:"27 ✔"}],
      scene:'<span class="a-bounce">🍬</span><span class="a-float">9️⃣</span>' },

    { level:2, q:"🍬 49 ÷ 7 = ?",
      options:[{text:"6"},{text:"8"},{text:"7"}], answer:2,
      rule:"➗ División exacta",
      exp:"7 × 7 = 49, entonces 49 ÷ 7 = 7. ¡Un número que se divide por sí mismo!",
      examples:[{op:"49 ÷ 7",res:"7"},{op:"7 × 7",res:"49 ✔"}],
      scene:'<span class="a-float">🍬</span><span class="a-bounce">7️⃣</span>' },

    { level:2, q:"🍬 72 ÷ 9 = ?",
      options:[{text:"8"},{text:"9"},{text:"7"}], answer:0,
      rule:"➗ División exacta",
      exp:"9 × 8 = 72, así que 72 ÷ 9 = 8.",
      examples:[{op:"72 ÷ 9",res:"8"},{op:"9 × 8",res:"72 ✔"}],
      scene:'<span class="a-bounce">🍭</span><span class="a-float">✨</span>' },

    { level:2, q:"🍬 15 ÷ 5 = ?",
      options:[{text:"3"},{text:"5"},{text:"2"}], answer:0,
      rule:"➗ División exacta",
      exp:"5 × 3 = 15, así que 15 ÷ 5 = 3.",
      examples:[{op:"15 ÷ 5",res:"3"},{op:"5 × 3",res:"15 ✔"}],
      scene:'<span class="a-bounce">🍬</span><span class="a-float">5️⃣</span>' },

    { level:2, q:"🍬 40 ÷ 8 = ?",
      options:[{text:"6"},{text:"5"},{text:"4"}], answer:1,
      rule:"➗ División exacta",
      exp:"8 × 5 = 40, así que 40 ÷ 8 = 5.",
      examples:[{op:"40 ÷ 8",res:"5"},{op:"8 × 5",res:"40 ✔"}],
      scene:'<span class="a-float">🍭</span><span class="a-bounce">8️⃣</span>' },

    { level:2, q:"🍬 14 ÷ 2 = ?",
      options:[{text:"7"},{text:"6"},{text:"8"}], answer:0,
      rule:"➗ División exacta",
      exp:"2 × 7 = 14, así que 14 ÷ 2 = 7. ¡Dividir entre 2 es partir a la mitad!",
      examples:[{op:"14 ÷ 2",res:"7"},{op:"2 × 7",res:"14 ✔"}],
      scene:'<span class="a-bounce">🍬</span><span class="a-float">2️⃣</span>' },

    { level:2, q:"🍬 55 ÷ 6 = ? (¡puede sobrar!)",
      options:[{text:"9 y sobran 1"},{text:"8 y sobran 7"},{text:"9 sin sobrar"}], answer:0,
      rule:"➗ División con residuo",
      exp:"6 × 9 = 54. De 55 a 54 sobra 1. Como 1 es menor que 6, ya no se reparte más. Cociente 9 y residuo 1.",
      examples:[{op:"6 × 9",res:"54"},{op:"55 − 54",res:"1 (sobra)"}],
      scene:'<span class="a-float">🍬</span><span class="a-bounce">➗</span>' },

    /* ---------- NIVEL 3: OPERACIONES COMBINADAS ---------- */
    { level:3, q:"🏭 Resuelve: 2 × 4 + 52 + 7 × 8 − 23",
      options:[{text:"93"},{text:"120"},{text:"85"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero las multiplicaciones: 2×4=8 y 7×8=56. Luego sumas y restas de izquierda a derecha: 8 + 52 + 56 − 23 = 93.",
      examples:[{op:"2×4 y 7×8",res:"8 y 56"},{op:"8+52+56−23",res:"93"}],
      scene:'<span class="a-swing">🏭</span><span class="a-float">⚙️</span>' },

    { level:3, q:"🏭 Resuelve: 15 × 6 + 48 − 7 × 5",
      options:[{text:"103"},{text:"95"},{text:"110"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero multiplicamos: 15×6=90 y 7×5=35. Luego: 90 + 48 − 35 = 103.",
      examples:[{op:"15×6 y 7×5",res:"90 y 35"},{op:"90+48−35",res:"103"}],
      scene:'<span class="a-float">🏭</span><span class="a-swing">🔧</span>' },

    { level:3, q:"🏭 Resuelve: 120 − 8 × 9 + 4 × 6",
      options:[{text:"72"},{text:"60"},{text:"84"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero las multiplicaciones: 8×9=72 y 4×6=24. Luego: 120 − 72 + 24 = 72.",
      examples:[{op:"8×9 y 4×6",res:"72 y 24"},{op:"120−72+24",res:"72"}],
      scene:'<span class="a-swing">⚙️</span><span class="a-float">🏭</span>' },

    { level:3, q:"🏭 Resuelve: 5 × 3 + 10 − 2 × 4",
      options:[{text:"17"},{text:"23"},{text:"15"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero multiplicamos: 5×3=15 y 2×4=8. Luego: 15 + 10 − 8 = 17.",
      examples:[{op:"5×3 y 2×4",res:"15 y 8"},{op:"15+10−8",res:"17"}],
      scene:'<span class="a-float">🏭</span><span class="a-swing">⚙️</span>' },

    { level:3, q:"🏭 Resuelve: 100 − 5 × 10 + 3 × 7",
      options:[{text:"71"},{text:"66"},{text:"80"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero multiplicamos: 5×10=50 y 3×7=21. Luego: 100 − 50 + 21 = 71.",
      examples:[{op:"5×10 y 3×7",res:"50 y 21"},{op:"100−50+21",res:"71"}],
      scene:'<span class="a-swing">🏭</span><span class="a-float">✨</span>' },

    { level:3, q:"🏭 Resuelve: 6 × 5 + 20 − 3 × 4",
      options:[{text:"38"},{text:"44"},{text:"32"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero multiplicamos: 6×5=30 y 3×4=12. Luego: 30 + 20 − 12 = 38.",
      examples:[{op:"6×5 y 3×4",res:"30 y 12"},{op:"30+20−12",res:"38"}],
      scene:'<span class="a-float">🏭</span><span class="a-swing">⚙️</span>' },

    { level:3, q:"🏭 Resuelve: 200 − 10 × 5 + 2 × 8",
      options:[{text:"166"},{text:"150"},{text:"176"}], answer:0,
      rule:"🔢 Orden de operaciones",
      exp:"Primero multiplicamos: 10×5=50 y 2×8=16. Luego: 200 − 50 + 16 = 166.",
      examples:[{op:"10×5 y 2×8",res:"50 y 16"},{op:"200−50+16",res:"166"}],
      scene:'<span class="a-swing">🔧</span><span class="a-float">🏭</span>' },

    /* ---------- NIVEL 4: DIVISORES, M.C.M. y M.C.D. ---------- */
    { level:4, q:"📚 ¿Cuáles son TODOS los divisores de 14?",
      options:[{text:"1, 2, 7, 14"},{text:"1, 2, 3, 14"},{text:"2, 7, 14"}], answer:0,
      rule:"🔎 Divisores",
      exp:"Un divisor divide exacto (sin sobrar). 14 se divide entre 1, 2, 7 y 14. El 3 no sirve porque 14 ÷ 3 sobra, y el 1 siempre es divisor.",
      examples:[{op:"14 ÷ 2",res:"7 ✔"},{op:"14 ÷ 7",res:"2 ✔"}],
      scene:'<span class="a-float">📚</span><span class="a-bounce">🔢</span>' },

    { level:4, q:"📚 ¿Cuáles son TODOS los divisores de 20?",
      options:[{text:"1, 2, 4, 5, 10, 20"},{text:"1, 2, 3, 5, 20"},{text:"2, 4, 5, 20"}], answer:0,
      rule:"🔎 Divisores",
      exp:"20 se divide exacto entre 1, 2, 4, 5, 10 y 20. Recuerda incluir el 1 y el mismo número.",
      examples:[{op:"20 ÷ 4",res:"5 ✔"},{op:"20 ÷ 5",res:"4 ✔"}],
      scene:'<span class="a-bounce">📖</span><span class="a-float">✨</span>' },

    { level:4, q:"📚 Calcula el M.C.M. (25, 40)",
      options:[{text:"200"},{text:"100"},{text:"1000"}], answer:0,
      rule:"🔗 Mínimo Común Múltiplo",
      exp:"El M.C.M. es el múltiplo más pequeño común a los dos. Múltiplos de 40: 40, 80, 120, 160, 200... y 200 también es múltiplo de 25 (25×8). Por eso el M.C.M. es 200.",
      examples:[{op:"25 × 8",res:"200"},{op:"40 × 5",res:"200"}],
      scene:'<span class="a-float">📚</span><span class="a-bounce">🔗</span>' },

    { level:4, q:"📚 Calcula el M.C.M. (18, 30)",
      options:[{text:"90"},{text:"60"},{text:"180"}], answer:0,
      rule:"🔗 Mínimo Común Múltiplo",
      exp:"El menor número que es múltiplo de 18 y de 30 a la vez es 90 (18×5=90 y 30×3=90).",
      examples:[{op:"18 × 5",res:"90"},{op:"30 × 3",res:"90"}],
      scene:'<span class="a-bounce">📗</span><span class="a-float">🔗</span>' },

    { level:4, q:"📚 Calcula el M.C.D. (60, 80)",
      options:[{text:"20"},{text:"10"},{text:"40"}], answer:0,
      rule:"🧩 Máximo Común Divisor",
      exp:"El M.C.D. es el divisor más grande común a los dos. El número más grande que divide exacto a 60 y a 80 es 20 (60÷20=3 y 80÷20=4).",
      examples:[{op:"60 ÷ 20",res:"3 ✔"},{op:"80 ÷ 20",res:"4 ✔"}],
      scene:'<span class="a-float">📘</span><span class="a-bounce">🧩</span>' },

    { level:4, q:"📚 Calcula el M.C.D. (180, 240)",
      options:[{text:"60"},{text:"30"},{text:"120"}], answer:0,
      rule:"🧩 Máximo Común Divisor",
      exp:"El divisor común más grande de 180 y 240 es 60 (180÷60=3 y 240÷60=4).",
      examples:[{op:"180 ÷ 60",res:"3 ✔"},{op:"240 ÷ 60",res:"4 ✔"}],
      scene:'<span class="a-bounce">📙</span><span class="a-float">🧩</span>' },

    { level:4, q:"📚 Taller: M.C.M. (10, 12) = ?",
      options:[{text:"60"},{text:"120"},{text:"30"}], answer:0,
      rule:"🔗 Mínimo Común Múltiplo",
      exp:"El menor múltiplo común de 10 y 12 es 60 (10×6=60 y 12×5=60).",
      examples:[{op:"10 × 6",res:"60"},{op:"12 × 5",res:"60"}],
      scene:'<span class="a-float">📚</span><span class="a-bounce">✨</span>' },

    { level:4, q:"📚 Taller: M.C.M. (8, 4) = ?",
      options:[{text:"8"},{text:"32"},{text:"4"}], answer:0,
      rule:"🔗 Mínimo Común Múltiplo",
      exp:"Como 8 ya es múltiplo de 4 (4×2=8), el menor múltiplo común de 8 y 4 es 8.",
      examples:[{op:"8 × 1",res:"8"},{op:"4 × 2",res:"8"}],
      scene:'<span class="a-bounce">📚</span><span class="a-float">🔗</span>' },

    { level:4, q:"📚 Taller: M.C.D. (15, 18) = ?",
      options:[{text:"3"},{text:"5"},{text:"1"}], answer:0,
      rule:"🧩 Máximo Común Divisor",
      exp:"El divisor común más grande de 15 y 18 es 3 (15÷3=5 y 18÷3=6).",
      examples:[{op:"15 ÷ 3",res:"5 ✔"},{op:"18 ÷ 3",res:"6 ✔"}],
      scene:'<span class="a-float">📘</span><span class="a-bounce">🧩</span>' },

    { level:4, q:"📚 Taller: M.C.D. (30, 30) = ?",
      options:[{text:"30"},{text:"15"},{text:"1"}], answer:0,
      rule:"🧩 Máximo Común Divisor",
      exp:"Cuando los dos números son iguales, el M.C.D. es ese mismo número. Por eso M.C.D.(30, 30) = 30.",
      examples:[{op:"30 ÷ 30",res:"1 ✔"},{op:"iguales",res:"M.C.D. = 30"}],
      scene:'<span class="a-bounce">📙</span><span class="a-float">🧩</span>' },

    { level:4, q:"📚 ¿Cuáles son TODOS los divisores de 18?",
      options:[{text:"1, 2, 3, 6, 9, 18"},{text:"1, 2, 4, 9, 18"},{text:"1, 3, 6, 18"}], answer:0,
      rule:"🔎 Divisores",
      exp:"18 se divide exacto entre 1, 2, 3, 6, 9 y 18. El 4 no sirve porque 18 ÷ 4 sobra.",
      examples:[{op:"18 ÷ 3",res:"6 ✔"},{op:"18 ÷ 9",res:"2 ✔"}],
      scene:'<span class="a-float">📗</span><span class="a-bounce">🔢</span>' },

    /* ---------- NIVEL 5: GEOMETRÍA Y MEDICIÓN ---------- */
    { level:5, q:"🔬 Perímetro de un cuadrado de 15 cm por lado",
      options:[{text:"60 cm"},{text:"45 cm"},{text:"225 cm"}], answer:0,
      rule:"📐 Perímetro del cuadrado",
      exp:"El cuadrado tiene 4 lados iguales. El perímetro es la suma de todos: 15 + 15 + 15 + 15 = 60, o más rápido 4 × 15 = 60 cm.",
      examples:[{op:"4 × 15",res:"60 cm"},{op:"15+15+15+15",res:"60 cm"}],
      scene:'<span class="a-bounce">🔬</span><span class="a-float">🟦</span>' },

    { level:5, q:"🔬 Perímetro de un triángulo de lados 8, 8 y 6 cm",
      options:[{text:"22 cm"},{text:"14 cm"},{text:"24 cm"}], answer:0,
      rule:"📐 Perímetro del triángulo",
      exp:"El perímetro es la suma de sus tres lados: 8 + 8 + 6 = 22 cm.",
      examples:[{op:"8 + 8 + 6",res:"22 cm"}],
      scene:'<span class="a-float">🔺</span><span class="a-bounce">📏</span>' },

    { level:5, q:"⏰ 1 día = ¿cuántas horas?",
      options:[{text:"24 horas"},{text:"12 horas"},{text:"60 horas"}], answer:0,
      rule:"⏳ Equivalencias de tiempo",
      exp:"Un día completo tiene 24 horas (12 de día y 12 de noche).",
      examples:[{op:"1 día",res:"24 horas"},{op:"1 semana",res:"7 días"}],
      scene:'<span class="a-spin">⏰</span><span class="a-float">🌞🌙</span>' },

    { level:5, q:"⏰ 1 año = ¿cuántos meses?",
      options:[{text:"12 meses"},{text:"10 meses"},{text:"365 meses"}], answer:0,
      rule:"⏳ Equivalencias de tiempo",
      exp:"Un año tiene 12 meses: enero, febrero, marzo... hasta diciembre.",
      examples:[{op:"1 año",res:"12 meses"},{op:"1 década",res:"10 años"}],
      scene:'<span class="a-float">📅</span><span class="a-bounce">🗓️</span>' },

    { level:5, q:"⏰ 1 siglo = ¿cuántos años?",
      options:[{text:"100 años"},{text:"10 años"},{text:"1000 años"}], answer:0,
      rule:"⏳ Equivalencias de tiempo",
      exp:"Un siglo son 100 años. Una década son 10 años y un milenio son 1000 años.",
      examples:[{op:"1 siglo",res:"100 años"},{op:"1 década",res:"10 años"}],
      scene:'<span class="a-spin">🕰️</span><span class="a-float">💯</span>' },

    { level:5, q:"🕐 El reloj marca la manecilla corta en el 3 y la larga en el 12. ¿Qué hora es?",
      options:[{text:"3:00"},{text:"12:03"},{text:"3:30"}], answer:0,
      rule:"🕐 Leer la hora",
      exp:"La manecilla corta marca la hora (el 3) y la larga los minutos. En el 12 son 00 minutos. Por eso son las 3:00.",
      examples:[{op:"corta en 3",res:"3 horas"},{op:"larga en 12",res:"00 min"}],
      scene:'<span class="a-spin">🕒</span><span class="a-float">⏰</span>' },

    { level:5, q:"🔬 Área de un triángulo de base 6 cm y altura 4 cm",
      options:[{text:"12 cm²"},{text:"24 cm²"},{text:"10 cm²"}], answer:0,
      rule:"📐 Área del triángulo",
      exp:"El área del triángulo es (base × altura) ÷ 2. Entonces (6 × 4) ÷ 2 = 24 ÷ 2 = 12 cm².",
      examples:[{op:"6 × 4",res:"24"},{op:"24 ÷ 2",res:"12 cm²"}],
      scene:'<span class="a-float">🔺</span><span class="a-bounce">📐</span>' },

    { level:5, q:"⏰ 1 semana = ¿cuántos días?",
      options:[{text:"7 días"},{text:"5 días"},{text:"30 días"}], answer:0,
      rule:"⏳ Equivalencias de tiempo",
      exp:"Una semana tiene 7 días: lunes, martes, miércoles, jueves, viernes, sábado y domingo.",
      examples:[{op:"1 semana",res:"7 días"},{op:"1 día",res:"24 horas"}],
      scene:'<span class="a-float">📆</span><span class="a-bounce">🗓️</span>' },

    { level:5, q:"⏰ 1 década = ¿cuántos años?",
      options:[{text:"10 años"},{text:"100 años"},{text:"12 años"}], answer:0,
      rule:"⏳ Equivalencias de tiempo",
      exp:"Una década son 10 años. Recuerda: década = 10, siglo = 100, milenio = 1000.",
      examples:[{op:"1 década",res:"10 años"},{op:"1 siglo",res:"100 años"}],
      scene:'<span class="a-spin">🕰️</span><span class="a-float">🔟</span>' },

    { level:5, q:"🕐 El reloj marca la manecilla corta en el 6 y la larga en el 12. ¿Qué hora es?",
      options:[{text:"6:00"},{text:"12:06"},{text:"6:30"}], answer:0,
      rule:"🕐 Leer la hora",
      exp:"La manecilla corta marca la hora (el 6) y la larga en el 12 son 00 minutos. Por eso son las 6:00.",
      examples:[{op:"corta en 6",res:"6 horas"},{op:"larga en 12",res:"00 min"}],
      scene:'<span class="a-spin">🕕</span><span class="a-float">⏰</span>' },

    /* ---------- NIVEL 6: ESTADÍSTICA ---------- */
    { level:6, q:"🌾 Granja: Patatas 30, Zanahorias 25, Tomates 40, Berenjenas 55, Calabazas 20. ¿Cuál hay MÁS?",
      options:[{text:"Berenjenas"},{text:"Tomates"},{text:"Patatas"}], answer:0,
      rule:"📊 Mayor frecuencia",
      exp:"La frecuencia más alta es el número más grande: 55, que corresponde a las Berenjenas.",
      examples:[{op:"Máximo",res:"55 (Berenjenas)"}],
      scene:'<span class="a-bounce">🍆</span><span class="a-float">🌾</span>' },

    { level:6, q:"🌾 Con los mismos datos, ¿de cuál vegetal hay MENOS?",
      options:[{text:"Calabazas"},{text:"Zanahorias"},{text:"Patatas"}], answer:0,
      rule:"📊 Menor frecuencia",
      exp:"La frecuencia más baja es el número más pequeño: 20, que corresponde a las Calabazas.",
      examples:[{op:"Mínimo",res:"20 (Calabazas)"}],
      scene:'<span class="a-float">🎃</span><span class="a-bounce">📉</span>' },

    { level:6, q:"🌾 ¿Cuántos vegetales hay en TOTAL? (30+25+40+55+20)",
      options:[{text:"170"},{text:"160"},{text:"180"}], answer:0,
      rule:"📊 Frecuencia total",
      exp:"Sumamos todas las frecuencias: 30 + 25 + 40 + 55 + 20 = 170 vegetales en total.",
      examples:[{op:"30+25+40",res:"95"},{op:"95+55+20",res:"170"}],
      scene:'<span class="a-bounce">🧺</span><span class="a-float">🥕</span>' },

    { level:6, q:"🌾 ¿Cuántos tomates MÁS que zanahorias hay? (40 − 25)",
      options:[{text:"15"},{text:"10"},{text:"20"}], answer:0,
      rule:"📊 Comparar datos",
      exp:"Restamos: 40 tomates − 25 zanahorias = 15. Hay 15 tomates más que zanahorias.",
      examples:[{op:"40 − 25",res:"15"}],
      scene:'<span class="a-float">🍅</span><span class="a-bounce">🥕</span>' },

    { level:6, q:"🌾 En un diagrama de barras, ¿cuál barra sería la MÁS ALTA?",
      options:[{text:"La de Berenjenas (55)"},{text:"La de Patatas (30)"},{text:"La de Calabazas (20)"}], answer:0,
      rule:"📊 Diagrama de barras",
      exp:"En un diagrama de barras, la barra más alta representa la mayor cantidad. Como Berenjenas tiene 55 (el mayor), su barra es la más alta.",
      examples:[{op:"Barra más alta",res:"55 (Berenjenas)"}],
      scene:'<span class="a-bounce">📊</span><span class="a-float">🍆</span>' },

    { level:6, q:"🌾 ¿Cuántas zanahorias y calabazas hay juntas? (25 + 20)",
      options:[{text:"45"},{text:"40"},{text:"50"}], answer:0,
      rule:"📊 Sumar frecuencias",
      exp:"Sumamos las dos frecuencias: 25 zanahorias + 20 calabazas = 45.",
      examples:[{op:"25 + 20",res:"45"}],
      scene:'<span class="a-float">🥕</span><span class="a-bounce">🎃</span>' },

    { level:6, q:"🌾 ¿Cuál es la diferencia entre el que MÁS hay y el que MENOS hay? (55 − 20)",
      options:[{text:"35"},{text:"30"},{text:"25"}], answer:0,
      rule:"📊 Rango de los datos",
      exp:"El mayor es 55 (Berenjenas) y el menor es 20 (Calabazas). La diferencia es 55 − 20 = 35.",
      examples:[{op:"55 − 20",res:"35"}],
      scene:'<span class="a-bounce">🍆</span><span class="a-float">🎃</span>' },

    { level:6, q:"🌾 Si hay 40 tomates y 30 patatas, ¿de cuál hay más?",
      options:[{text:"Tomates"},{text:"Patatas"},{text:"Iguales"}], answer:0,
      rule:"📊 Comparar frecuencias",
      exp:"40 es mayor que 30, así que hay más Tomates que Patatas.",
      examples:[{op:"40 vs 30",res:"40 gana 🍅"}],
      scene:'<span class="a-float">🍅</span><span class="a-bounce">🥔</span>' },

    /* ---------- NIVEL 7: ¡A ESCRIBIR! (combina todos los temas, respuesta escrita) ---------- */
    { level:7, type:'write', q:"✏️ Escribe el resultado de 4.567 × 100",
      answer:"456700", answerText:"456.700", accept:["456.700"],
      rule:"✖️ Multiplicar por 100",
      exp:"Por 100 se agregan DOS ceros al final: 4.567 se convierte en 456.700.",
      examples:[{op:"4.567 × 100",res:"456.700"}],
      scene:'<span class="a-bounce">🛒</span><span class="a-float">✏️</span>' },

    { level:7, type:'write', q:"✏️ Escribe el cociente de 56 ÷ 8",
      answer:"7", answerText:"7",
      rule:"➗ División exacta",
      exp:"8 × 7 = 56, así que 56 ÷ 8 = 7.",
      examples:[{op:"56 ÷ 8",res:"7"},{op:"8 × 7",res:"56 ✔"}],
      scene:'<span class="a-bounce">🍬</span><span class="a-float">✏️</span>' },

    { level:7, type:'write', q:"✏️ Resuelve y escribe el resultado: 6 × 7 + 20 − 3 × 4",
      answer:"50", answerText:"50",
      rule:"🔢 Orden de operaciones",
      exp:"Primero las multiplicaciones: 6×7=42 y 3×4=12. Luego: 42 + 20 − 12 = 50.",
      examples:[{op:"6×7 y 3×4",res:"42 y 12"},{op:"42+20−12",res:"50"}],
      scene:'<span class="a-swing">🏭</span><span class="a-float">✏️</span>' },

    { level:7, type:'write', q:"✏️ Escribe el M.C.M. de 6 y 8",
      answer:"24", answerText:"24",
      rule:"🔗 Mínimo Común Múltiplo",
      exp:"El menor número que es múltiplo de 6 y de 8 es 24 (6×4=24 y 8×3=24).",
      examples:[{op:"6 × 4",res:"24"},{op:"8 × 3",res:"24"}],
      scene:'<span class="a-float">📚</span><span class="a-bounce">✏️</span>' },

    { level:7, type:'write', q:"✏️ Escribe el M.C.D. de 24 y 36",
      answer:"12", answerText:"12",
      rule:"🧩 Máximo Común Divisor",
      exp:"El mayor número que divide exacto a 24 y a 36 es 12 (24÷12=2 y 36÷12=3).",
      examples:[{op:"24 ÷ 12",res:"2 ✔"},{op:"36 ÷ 12",res:"3 ✔"}],
      scene:'<span class="a-bounce">📘</span><span class="a-float">✏️</span>' },

    { level:7, type:'write', q:"✏️ Escribe el perímetro (en cm) de un cuadrado de 9 cm por lado",
      answer:"36", answerText:"36 cm", accept:["36cm"],
      rule:"📐 Perímetro del cuadrado",
      exp:"El cuadrado tiene 4 lados iguales: 4 × 9 = 36 cm.",
      examples:[{op:"4 × 9",res:"36 cm"}],
      scene:'<span class="a-float">🟦</span><span class="a-bounce">✏️</span>' },

    { level:7, type:'write', q:"✏️ En la granja hay 30 patatas, 25 zanahorias y 40 tomates. Escribe cuántos vegetales hay en total",
      answer:"95", answerText:"95",
      rule:"📊 Sumar frecuencias",
      exp:"Sumamos las tres cantidades: 30 + 25 + 40 = 95 vegetales.",
      examples:[{op:"30 + 25",res:"55"},{op:"55 + 40",res:"95"}],
      scene:'<span class="a-bounce">🌾</span><span class="a-float">✏️</span>' }
];

/* Nombres e íconos de cada nivel (para el mapa) */
const levelInfo = {
    1: { name:"Multiplica ×10", icon:"🛒", color:"lvl-c1" },
    2: { name:"Divisiones",     icon:"🍬", color:"lvl-c2" },
    3: { name:"Operaciones",    icon:"🏭", color:"lvl-c3" },
    4: { name:"Divisores/MCM/MCD", icon:"📚", color:"lvl-c4" },
    5: { name:"Geometría",      icon:"🔬", color:"lvl-c5" },
    6: { name:"Estadística",    icon:"🌾", color:"lvl-c6" },
    0: { name:"¡Desafío Final!", icon:"🏆", color:"lvl-boss" },
    7: { name:"¡A Escribir!",   icon:"✏️", color:"lvl-write" }
};



/* ============ TIENDA: FONDOS, PERSONAJES, CALCOMANÍAS, TÍTULOS ============ */
const backgrounds = {
    default: { name:"Cielo", emoji:"☁️", price:0 },
    space:   { name:"Espacio", emoji:"🌌", price:20, css:"linear-gradient(135deg,#0b0b2a,#3a1c71)" },
    candy:   { name:"Dulces", emoji:"🍭", price:25, css:"linear-gradient(135deg,#ffafbd,#ffc3a0)" },
    ocean:   { name:"Océano", emoji:"🌊", price:25, css:"linear-gradient(135deg,#2193b0,#6dd5ed)" },
    forest:  { name:"Bosque", emoji:"🌳", price:30, css:"linear-gradient(135deg,#134e2e,#4caf50)" },
    sunset:  { name:"Atardecer", emoji:"🌅", price:30, css:"linear-gradient(135deg,#ff512f,#f09819)" },
    galaxy:  { name:"Galaxia", emoji:"🌠", price:45, css:"linear-gradient(135deg,#3a1c71,#d76d77,#ffaf7b)" },
    rainbow: { name:"Arcoíris", emoji:"🌈", price:40, css:"linear-gradient(135deg,#ff9a9e,#fbc2eb,#a18cd1,#84fab0)" }
};
const characters = {
    owl:     { name:"Búho Sabio", emoji:"🦉", price:0,  sound:"hoot", anim:"react-spin",  says:["¡Uhu! ¡A pensar se ha dicho! 🦉","¡Las mates son divertidas!","¡Muy bien, campeona!"] },
    cat:     { name:"Gatito", emoji:"🐱", price:15, sound:"meow", anim:"react-jump", says:["¡Miau! ¡Vamos a contar! 🐾","¡Tú puedes con los números!","¡Miau miau, muy bien!"] },
    fox:     { name:"Zorrito", emoji:"🦊", price:20, sound:"yip", anim:"react-jump", says:["¡Soy astuto con las mates! 🦊","¡Sigue sumando puntos!","¡Corramos al siguiente nivel!"] },
    robot:   { name:"Robot", emoji:"🤖", price:22, sound:"beep", anim:"react-shake2", says:["Cal-cu-lan-do... ¡genial! 🤖","Beep boop, ¡respuesta correcta!","¡Procesando tu victoria!"] },
    panda:   { name:"Panda", emoji:"🐼", price:25, sound:"munch", anim:"react-wiggle", says:["¡Ñam! ¡Bien hecho! 🎋","¡Un abrazo de panda! 🤗","¡Eres una crack de las mates!"] },
    unicorn: { name:"Unicornio", emoji:"🦄", price:30, sound:"magic", anim:"react-spin", says:["¡Magia matemática! 🌈","¡Eres mágica como yo! ✨","¡Arcoíris de aciertos!"] },
    dragon:  { name:"Dragón", emoji:"🐲", price:40, sound:"roar", anim:"react-shake2", says:["¡Roooar! ¡Poder numérico! 🔥","¡Volemos al 5.0!","¡Eres imparable!"] }
};
function getCharacter(id) { return characters[id] || null; }

const stickers = {
    heart:   { name:"Corazón", emoji:"💖", price:40 },
    star2:   { name:"Estrella", emoji:"⭐", price:50 },
    rocket:  { name:"Cohete", emoji:"🚀", price:55 },
    rainbow: { name:"Arcoíris", emoji:"🌈", price:60 },
    crown:   { name:"Corona", emoji:"👑", price:90 },
    trophy:  { name:"Trofeo", emoji:"🏆", price:130 }
};
const titles = {
    none:     { name:"(Sin título)", emoji:"🚫", text:"", price:0 },
    student:  { name:"Súper Estudiante", emoji:"⭐", text:"⭐ Súper Estudiante", price:10 },
    genius:   { name:"Genio de las Mates", emoji:"🧠", text:"🧠 Genio de las Mates", price:25 },
    princess: { name:"Princesa de los Números", emoji:"👑", text:"👑 Princesa de los Números", price:35 },
    master:   { name:"Maestra de las Mates", emoji:"🎓", text:"🎓 Maestra de las Mates", price:50 }
};

/* ============ PREMIO MAYOR: recompensas en dinero real (con 💎) ============
   Se redimen SOLO al completar los 6 niveles. Cada premio da $5.000 COP.
   Al redimir uno, aparece el siguiente (más caro). */
const cashPrizes = [
    { cost: 10000, cop: 5000 },
    { cost: 30000, cop: 5000 }
];
function getCashRedeemed() { return parseInt(lsGet('vmCashRedeemed','0'),10) || 0; }
function setCashRedeemed(n) { lsSet('vmCashRedeemed', String(Math.max(0, n))); }
function getCashLog() { try { return JSON.parse(lsGet('vmCashLog','[]')); } catch(e){ return []; } }
function addCashLog(entry) { const log = getCashLog(); log.push(entry); lsSet('vmCashLog', JSON.stringify(log)); }
function formatCOP(n) { return '$' + n.toLocaleString('es-CO') + ' COP'; }

/* ============ ESTADO ============ */
let questions = [];
let currentQ = 0;
let score = 0, points = 0, gems = 0, streak = 0, bestStreak = 0;
let answers = [];
let hintUsed = [];
const HINTS_PER_LEVEL = 5;   // pistas disponibles por nivel
let hintsLeft = 0;           // pistas restantes en el nivel actual
let currentLevel = 1;
let soundOn = true, musicOn = false, audioCtx = null;

/* ============ localStorage ============ */
function lsGet(k, d){ try { const v = localStorage.getItem(k); return v===null?d:v; } catch(e){ return d; } }
function lsSet(k, v){ try { localStorage.setItem(k, v); } catch(e){} }
function getGems()  { return parseInt(lsGet('vmGems','0'),10) || 0; }
function setGems(n) { lsSet('vmGems', String(Math.max(0,n))); }
function addGems(n) { setGems(getGems() + n); }
function getPoints()  { return parseInt(lsGet('vmPoints','0'),10) || 0; }
function setPoints(n) { lsSet('vmPoints', String(Math.max(0,n))); }
function addPoints(n) { setPoints(getPoints() + n); }
function getStars()  { return parseInt(lsGet('vmStars','0'),10) || 0; }
function setStars(n) { lsSet('vmStars', String(Math.max(0,n))); }
function addStars(n) { setStars(getStars() + n); }
function getWallet(cur){ return cur==='points'?getPoints():cur==='stars'?getStars():getGems(); }
function spendWallet(cur,n){ if(cur==='points')addPoints(-n); else if(cur==='stars')addStars(-n); else addGems(-n); }
const curEmoji = { gems:'💎', points:'🏆', stars:'⭐' };



/* ---- Inventario y equipamiento ---- */
function getOwned() {
    let o; try { o = JSON.parse(lsGet('vmOwned','null')); } catch(e){ o = null; }
    if (!o) o = {};
    if (!o.bg) o.bg = ['default'];
    if (!o.char) o.char = ['owl'];
    if (!o.sticker) o.sticker = [];
    if (!o.title) o.title = ['none'];
    return o;
}
function setOwned(o){ lsSet('vmOwned', JSON.stringify(o)); }
function getEquip() {
    let e; try { e = JSON.parse(lsGet('vmEquip','null')); } catch(err){ e = null; }
    if (!e) e = {};
    if (!e.bg) e.bg = 'default';
    if (!e.char) e.char = 'owl';
    if (!e.title) e.title = 'none';
    if (e.sticker === undefined) e.sticker = '';
    return e;
}
function setEquip(e){ lsSet('vmEquip', JSON.stringify(e)); }

/* ---- Medallas por nivel ---- */
const rankEmoji = { 3:"🥇", 2:"🥈", 1:"🥉" };
const rankName = { 3:"Oro", 2:"Plata", 3:"Bronce" };
function getMedals() { try { return JSON.parse(lsGet('vmMedals','{}')); } catch(e){ return {}; } }
function saveMedal(level, rank) {
    const m = getMedals();
    if (!m[level] || rank > m[level]) { m[level] = rank; lsSet('vmMedals', JSON.stringify(m)); }
}
function levelUnlocked(level) {
    if (level === 1) return true;
    const m = getMedals();
    if (level === 0 || level === 7 || level === 'ultimate') return [1,2,3,4,5,6].every(l => m[l]); // desafío/escribir/definitivo: todos los niveles
    return !!m[level-1]; // se desbloquea al completar el anterior
}
function allLevelsDone() { const m = getMedals(); return [1,2,3,4,5,6].every(l => m[l]); }
// Cantidad de niveles (1-6) completados, para el medidor de nota
function levelsCompleted() { const m = getMedals(); return [1,2,3,4,5,6].filter(l => m[l]).length; }
// Nota actual de 1.0 a 5.0 según niveles completados
function currentGrade() { return 1 + (levelsCompleted() / 6) * 4; }

/* ============ SONIDOS (Web Audio) ============ */
function getCtx() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); return audioCtx; }
// Desbloquea el audio en el primer gesto del usuario (requerido en móviles)
function unlockAudio() { try { const ctx = getCtx(); if (ctx.state === 'suspended') ctx.resume(); } catch(e){} }

/* ============ LOCUTOR (voz en español) ============ */
let esVoice = null;
function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices() || [];
    esVoice = voices.find(v => /es[-_]/i.test(v.lang)) || voices.find(v => /^es/i.test(v.lang)) || null;
}
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
}
// Habla un texto en español, como un locutor (respeta el botón de sonido)
function speak(text, opts) {
    if (!soundOn) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'es-ES';
        if (esVoice) u.voice = esVoice;
        u.rate = (opts && opts.rate) || 0.95;
        u.pitch = (opts && opts.pitch) || 1.0;
        u.volume = 1.0;
        window.speechSynthesis.speak(u);
    } catch(e){}
}
function playTone(freq, duration, type='sine', startTime=0, vol=0.2) {
    if (!soundOn) return;
    try {
        const ctx = getCtx();
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = type; osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol, ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(ctx.currentTime + startTime); osc.stop(ctx.currentTime + startTime + duration);
    } catch(e){}
}
function slideTone(fromFreq, toFreq, duration, type, vol) {
    if (!soundOn) return;
    try {
        const ctx = getCtx();
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(fromFreq, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(toFreq, ctx.currentTime + duration);
        gain.gain.setValueAtTime(vol || 0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + duration + 0.02);
    } catch(e){}
}
function playClick()   { playTone(500, 0.08, 'square', 0, 0.12); }
function playReward()  { playTone(880, 0.08, 'square', 0, 0.14); playTone(1318, 0.14, 'square', 0.08, 0.14); }
function playCorrect() { playTone(523,0.12,'sine',0); playTone(659,0.12,'sine',0.1); playTone(784,0.2,'sine',0.2); playTone(1046,0.3,'sine',0.32); }
function playWrong()   { playTone(300,0.15,'sawtooth',0,0.18); playTone(200,0.25,'sawtooth',0.15,0.18); }
function playWin()     { [523,659,784,1046,784,1046,1318].forEach((n,i)=>playTone(n,0.25,'triangle',i*0.18,0.22)); }
function playBuy()     { playTone(700,0.1,'square',0,0.15); playTone(1000,0.12,'square',0.1,0.15); playTone(1400,0.18,'square',0.22,0.15); }
function playCharacterSound(type) {
    if (!soundOn) return;
    switch (type) {
        case 'hoot':   slideTone(520,420,0.3,'sine',0.15); break;
        case 'meow':   slideTone(760,520,0.35,'sawtooth',0.16); break;
        case 'yip':    playTone(760,0.08,'square',0,0.14); playTone(1000,0.09,'square',0.09,0.14); break;
        case 'beep':   playTone(880,0.08,'square',0,0.15); playTone(660,0.08,'square',0.1,0.15); playTone(990,0.1,'square',0.2,0.15); break;
        case 'munch':  playTone(200,0.1,'triangle',0,0.16); playTone(170,0.1,'triangle',0.13,0.16); break;
        case 'magic':  [660,880,1046,1318,1568].forEach((n,i)=>playTone(n,0.12,'triangle',i*0.07,0.13)); break;
        case 'roar':   slideTone(220,90,0.5,'sawtooth',0.22); break;
        default:       playReward();
    }
}
function toggleSound() {
    soundOn = !soundOn;
    const b = document.getElementById('sound-toggle');
    b.innerText = soundOn ? '🔊' : '🔇'; b.classList.toggle('off', !soundOn);
    if (soundOn) playClick();
    else if (typeof window !== 'undefined' && 'speechSynthesis' in window) { try { window.speechSynthesis.cancel(); } catch(e){} }
}

/* ============ MÚSICA: "La Primavera" de Vivaldi (dominio público) ============
   Tema principal de "Las Cuatro Estaciones", La Primavera (Spring),
   Op. 8 n.º 1, RV 269, en Mi mayor. Cada nota: [frecuencia Hz, duración ms]; 0 = silencio. */
let musicTimer = null;
let melodyIndex = 0;
const N = {
    R:0, E5:659.25, Fs5:739.99, Gs5:830.61, A5:880.00, As5:932.33,
    B5:987.77, Cs6:1108.73, Ds6:1244.51, E6:1318.51, Fs6:1479.98, B4:493.88
};
const springMelody = [
    /* Frase A (tutti) */
    [N.E5,300],[N.E5,300],[N.E5,300],[N.Gs5,440],
    [N.B5,300],[N.B5,300],[N.B5,300],[N.Gs5,440],
    [N.E5,300],[N.E5,300],[N.E5,300],[N.Gs5,300],[N.Fs5,560],[N.R,140],
    /* Frase A (eco) */
    [N.E5,300],[N.E5,300],[N.E5,300],[N.Gs5,440],
    [N.B5,300],[N.B5,300],[N.B5,300],[N.Gs5,440],
    [N.E5,300],[N.E5,300],[N.E5,300],[N.Gs5,300],[N.Fs5,560],[N.R,140],
    /* Frase B (giro y cadencia) */
    [N.B5,300],[N.Cs6,300],[N.B5,300],[N.As5,300],[N.B5,440],[N.Fs5,440],
    [N.Gs5,300],[N.A5,300],[N.B5,300],[N.Gs5,560],[N.E5,560],[N.R,260]
];
function playMelodyNote() {
    if (!musicOn) return;
    const note = springMelody[melodyIndex];
    const freq = note[0], dur = note[1];
    try {
        if (freq > 0) {
            const ctx = getCtx();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'triangle'; osc.frequency.value = freq;
            const t = ctx.currentTime;
            gain.gain.setValueAtTime(0.0001, t);
            gain.gain.exponentialRampToValueAtTime(0.05, t + 0.03);          // ataque suave (violín)
            gain.gain.exponentialRampToValueAtTime(0.0001, t + dur / 1000);  // liberación
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t); osc.stop(t + dur / 1000 + 0.05);
        }
    } catch(e){}
    melodyIndex = (melodyIndex + 1) % springMelody.length;
    musicTimer = setTimeout(playMelodyNote, dur);   // siguiente nota según su duración
}
function startMusic(){ getCtx(); if (musicTimer) clearTimeout(musicTimer); melodyIndex = 0; playMelodyNote(); }
function stopMusic(){ if (musicTimer) { clearTimeout(musicTimer); musicTimer = null; } }

/* ============ MÚSICA DE FONDO: video de YouTube (reproductor oficial incrustado) ============
   Reproduce el audio del video pedido directamente desde YouTube (sin descargarlo),
   usando la IFrame API oficial. Si el video no permite incrustarse o no hay internet,
   se usa como respaldo el tema de Vivaldi generado localmente. */
const MUSIC_VIDEO_ID = 'k_Y-9lgYID8';
let ytPlayer = null, ytReady = false, ytPending = false;
function loadYouTubeMusic() {
    try {
        if (typeof window === 'undefined') return;
        if (window.YT && window.YT.Player) { createYtPlayer(); return; }
        if (!document.getElementById('yt-iframe-api')) {
            const tag = document.createElement('script');
            tag.id = 'yt-iframe-api';
            tag.src = 'https://www.youtube.com/iframe_api';
            (document.head || document.body).appendChild(tag);
        }
        window.onYouTubeIframeAPIReady = createYtPlayer;
    } catch (e) {}
}
function createYtPlayer() {
    try {
        if (ytPlayer || !window.YT || !window.YT.Player) return;
        ytPlayer = new window.YT.Player('yt-player', {
            videoId: MUSIC_VIDEO_ID,
            playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: MUSIC_VIDEO_ID, playsinline: 1, rel: 0, modestbranding: 1 },
            events: {
                onReady: () => { ytReady = true; if (ytPending) { ytPending = false; playYtMusic(); } },
                onStateChange: (e) => { if (window.YT && window.YT.PlayerState && e.data === window.YT.PlayerState.ENDED) { try { ytPlayer.seekTo(0); ytPlayer.playVideo(); } catch (err) {} } },
                onError: () => { ytReady = false; if (musicOn) startMusic(); }  // respaldo: Vivaldi
            }
        });
    } catch (e) { if (musicOn) startMusic(); }
}
function playYtMusic() {
    if (ytReady && ytPlayer) { try { ytPlayer.unMute(); ytPlayer.setVolume(45); ytPlayer.playVideo(); } catch (e) { startMusic(); } }
    else { ytPending = true; loadYouTubeMusic(); }
}
function pauseYtMusic() { ytPending = false; if (ytReady && ytPlayer) { try { ytPlayer.pauseVideo(); } catch (e) {} } }

function toggleMusic() {
    musicOn = !musicOn;
    document.getElementById('music-toggle').classList.toggle('off', !musicOn);
    if (musicOn) { playClick(); playYtMusic(); }
    else { pauseYtMusic(); stopMusic(); }
}

/* ============ CONFETI Y POPUPS ============ */
function launchConfetti(amount = 40) {
    const colors = ['#FFD700','#FF4500','#32CD32','#1E90FF','#FF69B4','#8A2BE2'];
    for (let i = 0; i < amount; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (2 + Math.random() * 2) + 's';
        p.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 4000);
    }
}
function showRewardPopup(text) {
    const pop = document.createElement('div');
    pop.className = 'reward-popup'; pop.innerText = text;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 1300);
}



/* ============ APLICAR FONDO, PERSONAJE Y TÍTULO ============ */
function applyBackground(id) {
    const b = backgrounds[id] || backgrounds.default;
    if (id === 'default' || !b.css) {
        document.body.style.background = '#7ed6df';
        document.body.style.backgroundImage = 'radial-gradient(#fff 15%, transparent 16%), radial-gradient(#fff 15%, transparent 16%)';
        document.body.style.backgroundSize = '30px 30px';
        document.body.style.backgroundPosition = '0 0, 15px 15px';
    } else {
        document.body.style.backgroundImage = b.css;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
    }
}
function applyCharacter(id) {
    const c = getCharacter(id) || characters.owl;
    document.getElementById('buddy').innerText = c.emoji;
}
function applyTitle(id) {
    const t = titles[id] || titles.none;
    const el = document.getElementById('player-title');
    if (el) { el.innerText = t.text; el.style.display = t.text ? 'inline-block' : 'none'; }
}
function applyEquip() {
    const e = getEquip();
    applyBackground(e.bg); applyCharacter(e.char); applyTitle(e.title);
}

/* ============ MASCOTA ============ */
let bubbleTimer = null;
function showBuddyBubble(text) {
    const bubble = document.getElementById('buddy-bubble');
    if (!bubble) return;
    bubble.innerText = text; bubble.classList.add('show');
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove('show'), 2800);
}
function buddyReact(playSound) {
    const c = getCharacter(getEquip().char) || characters.owl;
    if (playSound !== false) playCharacterSound(c.sound);
    const msg = c.says[Math.floor(Math.random() * c.says.length)];
    showBuddyBubble(msg);
    const buddy = document.getElementById('buddy');
    buddy.classList.remove('react-jump','react-spin','react-shake2','react-wiggle');
    void buddy.offsetWidth;
    buddy.classList.add(c.anim);
    setTimeout(() => buddy.classList.remove(c.anim), 900);
}

/* ============ CALCOMANÍAS AL TOCAR LA PANTALLA ============ */
function isInteractive(el) {
    while (el && el !== document.body) {
        const t = el.tagName;
        if (t === 'BUTTON' || t === 'A' || t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return true;
        if (el.id === 'buddy') return true;
        el = el.parentElement;
    }
    return false;
}
function spawnSticker(x, y, emoji) {
    const s = document.createElement('div');
    s.className = 'sticker-pop'; s.innerText = emoji;
    s.style.left = x + 'px'; s.style.top = y + 'px';
    document.body.appendChild(s);
    if (soundOn) { playTone(660,0.07,'sine',0,0.12); playTone(990,0.09,'sine',0.05,0.12); }
    setTimeout(() => s.remove(), 1300);
}
document.addEventListener('click', function(e){
    const eq = getEquip();
    if (!eq.sticker) return;
    if (isInteractive(e.target)) return;
    const st = stickers[eq.sticker];
    if (st) spawnSticker(e.clientX, e.clientY, st.emoji);
});

/* ============ MAPA DE NIVELES (estilo Duolingo) ============ */
function renderMap() {
    const map = document.getElementById('level-map');
    const medals = getMedals();
    let html = '';
    const order = [1,2,3,4,5,6];
    order.forEach((lvl, i) => {
        const info = levelInfo[lvl];
        const unlocked = levelUnlocked(lvl);
        const done = !!medals[lvl];
        const side = i % 2 === 0 ? 'left' : 'right';
        const cls = 'node-btn ' + info.color + (done ? ' done' : '');
        const medalTag = done ? `<span class="node-medal">${rankEmoji[medals[lvl]]}</span>` : '';
        const lockTag = (!unlocked && !done) ? `<span class="node-lock">🔒</span>` : '';
        const dis = (!unlocked && !done) ? 'disabled' : '';
        html += `<div class="map-node ${side}"><div class="node-wrap">
            <button class="${cls}" ${dis} onclick="startGame(${lvl})">
                ${info.icon}${medalTag}${lockTag}
            </button>
            <span class="node-label">Nivel ${lvl}<br>${info.name}</span>
        </div></div>`;
        html += '<div class="map-connector"></div>';
    });
    // Nodo del Desafío Final (nivel 0), se desbloquea al completar los 6
    const bossInfo = levelInfo[0];
    const bossUnlocked = levelUnlocked(0);
    const bossDone = !!medals[0];
    const bossCls = 'node-btn ' + bossInfo.color + (bossDone ? ' done' : '');
    const bossMedal = bossDone ? `<span class="node-medal">${rankEmoji[medals[0]]}</span>` : '';
    const bossLock = (!bossUnlocked && !bossDone) ? `<span class="node-lock">🔒</span>` : '';
    const bossDis = (!bossUnlocked && !bossDone) ? 'disabled' : '';
    html += `<div class="map-node"><div class="node-wrap">
        <button class="${bossCls}" ${bossDis} onclick="startGame(0)">
            ${bossInfo.icon}${bossMedal}${bossLock}
        </button>
        <span class="node-label">${bossInfo.name}</span>
    </div></div>`;
    // Conector + Nodo "¡A Escribir!" (nivel 7), también se desbloquea al completar los 6
    html += '<div class="map-connector"></div>';
    const wInfo = levelInfo[7];
    const wUnlocked = levelUnlocked(7);
    const wDone = !!medals[7];
    const wCls = 'node-btn ' + wInfo.color + (wDone ? ' done' : '');
    const wMedal = wDone ? `<span class="node-medal">${rankEmoji[medals[7]]}</span>` : '';
    const wLock = (!wUnlocked && !wDone) ? `<span class="node-lock">🔒</span>` : '';
    const wDis = (!wUnlocked && !wDone) ? 'disabled' : '';
    html += `<div class="map-node right"><div class="node-wrap">
        <button class="${wCls}" ${wDis} onclick="startGame(7)">
            ${wInfo.icon}${wMedal}${wLock}
        </button>
        <span class="node-label">${wInfo.name}</span>
    </div></div>`;
    map.innerHTML = html;
    renderGrade();
}

/* ============ MEDIDOR DE NOTA (1.0 → 5.0) ============ */
function renderGrade() {
    const el = document.getElementById('grade-meter');
    if (!el) return;
    const grade = currentGrade();
    const done = levelsCompleted();
    const pct = ((grade - 1) / 4) * 100;
    const color = grade >= 4.5 ? '#10AC84' : grade >= 3 ? '#FF9F43' : '#EE5253';
    el.innerHTML = `
        <div class="grade-top">📊 Nota de Valery:
            <span class="grade-value" style="color:${color}">${grade.toFixed(1)}</span>
        </div>
        <div class="grade-track">
            <div class="grade-fill" style="width:${pct}%; background:${color};"></div>
            <span class="grade-min">1.0</span><span class="grade-max">5.0</span>
        </div>
        <div class="grade-sub">${done}/6 niveles superados ${done===6?'· ¡Nota máxima! 🎉':''}</div>`;
}
function refreshStartHud() {
    document.getElementById('s-stars').innerText = getStars();
    document.getElementById('s-points').innerText = getPoints();
    document.getElementById('s-gems').innerText = getGems();
    document.getElementById('start-gems').innerText = getGems();
}



/* ============ UTILIDADES ============ */
function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function showScreen(id) {
    ['start-screen','progress-screen','shop-screen','game-screen','end-screen','minigame-screen'].forEach(s => {
        document.getElementById(s).classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}

/* ============ JUEGO ============ */
function startGame(level) {
    playClick(); getCtx(); unlockAudio();
    if (!levelUnlocked(level) && !getMedals()[level]) {
        showBuddyBubble(level === 0 ? '¡Completa los 6 niveles primero! 🔒' : '¡Completa el nivel anterior primero! 🔒');
        return;
    }
    currentLevel = level;
    // Elegimos las preguntas: nivel normal = subconjunto del nivel; desafío (0) = mezcla de todos
    let pool;
    if (level === 'ultimate') {
        // Reto Definitivo: al menos una pregunta de CADA tema (niveles 1-7) + relleno al azar, 12 en total
        let guaranteed = [];
        [1, 2, 3, 4, 5, 6, 7].forEach(l => {
            const qs = shuffle(allQuestions.filter(q => q.level === l));
            if (qs[0]) guaranteed.push(qs[0]);
        });
        const rest = shuffle(allQuestions.filter(q => !guaranteed.includes(q)));
        pool = shuffle(guaranteed.concat(rest.slice(0, Math.max(0, 12 - guaranteed.length))));
    } else if (level === 0) {
        pool = shuffle(allQuestions.filter(q => q.type !== 'write')).slice(0, 10); // desafío: 10 de opción múltiple
    } else if (level === 7) {
        pool = shuffle(allQuestions.filter(q => q.level === 7)); // ¡A Escribir!: las 7 preguntas escritas
    } else {
        pool = shuffle(allQuestions.filter(q => q.level === level)).slice(0, 6); // 6 al azar del nivel
    }
    // Preparamos cada pregunta (las de escribir no tienen opciones)
    questions = pool.map(q => {
        if (q.type === 'write') return { ...q };
        const opts = q.options.map((o, idx) => ({ text: o.text, correct: idx === q.answer }));
        return { ...q, shuffledOpts: shuffle(opts) };
    });
    currentQ = 0; score = 0; points = 0; gems = 0; streak = 0; bestStreak = 0;
    answers = new Array(questions.length).fill(null);
    hintUsed = new Array(questions.length).fill(false);
    hintsLeft = HINTS_PER_LEVEL;   // se reinician las 5 pistas al empezar el nivel
    showScreen('game-screen');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQ];
    document.getElementById('feedback').innerText = '';
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('question-text').innerHTML = q.q;

    // Panel visual didáctico según el tipo de pregunta
    const vizEl = document.getElementById('question-visual');
    if (vizEl) vizEl.innerHTML = buildQuestionVisual(q);

    const already = answers[currentQ];
    const optsDiv = document.getElementById('options');
    if (q.type === 'write') {
        optsDiv.innerHTML = `
            <div class="write-row">
                <input type="text" id="write-input" class="write-input" placeholder="Escribe tu respuesta ✏️"
                       inputmode="numeric" autocomplete="off" autofocus
                       onkeydown="if(event.key==='Enter'){checkWriteAnswer();}">
                <button class="btn write-check" onclick="checkWriteAnswer()">✅ Comprobar</button>
            </div>`;
    } else {
        let html = '';
        q.shuffledOpts.forEach((opt, i) => {
            html += `<div class="option-row"><button class="btn btn-option" onclick="checkAnswer(${i}, this)">${opt.text}</button></div>`;
        });
        optsDiv.innerHTML = html;
    }

    // Navegación
    document.getElementById('back-btn').disabled = currentQ === 0;
    document.getElementById('fwd-btn').disabled = !answers[currentQ];

    // Botón de pista: muestra pistas restantes y se desactiva según reglas
    updateHintButton();

    updateHUD();
    updateProgressBar();

    // Si ya fue respondida, mostrarla resuelta
    if (already) revealAnswered();
}

/* Actualiza el botón de pista: muestra las pistas restantes y lo activa/desactiva */
function updateHintButton() {
    const hintBtn = document.getElementById('hint-btn');
    if (!hintBtn) return;
    hintBtn.innerText = '💡 Pista (' + hintsLeft + ')';
    const q = questions[currentQ];
    // Se desactiva si: es de escribir, ya respondió, ya usó pista, o no quedan pistas
    hintBtn.disabled = (q && q.type === 'write') || !!answers[currentQ] || !!hintUsed[currentQ] || hintsLeft <= 0;
}

/* ============ VISUALES DIDÁCTICOS DE CADA PREGUNTA ============
   Dibuja una ayuda visual (sin dar la respuesta) según el nivel/tema. */
function buildQuestionVisual(q) {
    let html = '';
    try {
        switch (q.level) {
            case 1: html = vizMultiplication(q.q); break;
            case 2: html = vizDivision(q.q); break;
            case 3: html = vizOperation(q.q); break;
            case 4: html = vizLibrary(q.q); break;
            case 5: html = vizGeometry(q.q); break;
            case 6: html = vizStats(); break;
        }
    } catch (e) { html = ''; }
    if (!html && q.scene) html = `<div class="viz"><div class="viz-emojis">${q.scene}</div></div>`;
    return html;
}

/* Nivel 1: fichas de ceros para multiplicar por 10/100/1000 */
function vizMultiplication(text) {
    const m = text.match(/([\d.]+)\s*[×x]\s*(\d+)/);
    if (!m) return '';
    const num = m[1], mult = m[2];
    const zeros = (mult.match(/0/g) || []).length;
    let chips = '';
    for (let i = 0; i < zeros; i++) chips += '<span class="zero-chip">0</span>';
    return `<div class="viz"><div class="viz-title">🛒 ¿Cuántos ceros hay que agregar?</div>
        <div><span class="viz-num">${num}</span> <span style="font-size:1.4em">× ${mult} ➡️</span> ${chips}</div>
        <div class="op-hint">Multiplicar por ${mult} = agregar <b>${zeros}</b> cero(s) al final.</div></div>`;
}

/* Nivel 2: caramelos y grupos para repartir */
function vizDivision(text) {
    const m = text.match(/(\d+)\s*÷\s*(\d+)/);
    if (!m) return '';
    const total = +m[1], groups = +m[2];
    const show = Math.min(total, 20);
    let candies = '';
    for (let i = 0; i < show; i++) candies += '🍬';
    if (total > show) candies += ' …';
    let jars = '';
    for (let i = 0; i < groups; i++) jars += '🫙';
    return `<div class="viz"><div class="viz-title">🍬 Reparte ${total} caramelos en ${groups} grupos iguales</div>
        <div class="viz-emojis">${candies}</div>
        <div style="font-size:1.9em;margin-top:6px;">${jars}</div>
        <div class="op-hint">¿Cuántos caramelos le tocan a cada grupo?</div></div>`;
}

/* Nivel 3: resalta las multiplicaciones (se hacen primero) */
function vizOperation(text) {
    const idx = text.indexOf('Resuelve:');
    if (idx < 0) return '';
    const expr = text.slice(idx + 'Resuelve:'.length).trim();
    const hl = expr.replace(/(\d+)\s*×\s*(\d+)/g, '<span class="op-mult">$1 × $2</span>');
    return `<div class="viz"><div class="viz-title">🏭 Primero resuelve lo resaltado (las ×)</div>
        <div class="op-expr">${hl}</div>
        <div class="op-hint">Haz primero las multiplicaciones; luego suma y resta de izquierda a derecha.</div></div>`;
}

/* Nivel 4: biblioteca de números (divisores, MCM, MCD) */
function vizLibrary(text) {
    let m = text.match(/divisores de (\d+)/i);
    if (m) return `<div class="viz"><div class="viz-title">📚 Divisores de ${m[1]}</div>
        <div class="viz-num" style="font-size:2.2em">📖 ${m[1]}</div>
        <div class="op-hint">Un divisor divide exacto, sin que sobre nada.</div></div>`;
    m = text.match(/\((\d+)[,\s]+(\d+)\)/);
    const isMCM = /M\.?\s*C\.?\s*M/i.test(text);
    if (m) return `<div class="viz"><div class="viz-title">📚 ${isMCM ? 'Mínimo Común Múltiplo' : 'Máximo Común Divisor'}</div>
        <div style="font-size:1.9em">📗 <b>${m[1]}</b> &nbsp;&nbsp; 📘 <b>${m[2]}</b></div>
        <div class="op-hint">${isMCM ? 'El menor número que es múltiplo de los dos.' : 'El mayor número que divide a los dos.'}</div></div>`;
    return '';
}

/* Nivel 5: figuras y relojes dibujados en SVG */
function vizGeometry(text) {
    let m = text.match(/cuadrado de (\d+)/i);
    if (m) return vizSquare(+m[1]);
    m = text.match(/base (\d+).*altura (\d+)/i);
    if (m) return vizTriangleArea(+m[1], +m[2]);
    m = text.match(/(\d+),\s*(\d+)\s*y\s*(\d+)\s*cm/i);
    if (m) return vizTrianglePerim(+m[1], +m[2], +m[3]);
    m = text.match(/corta en el (\d+)/i);
    if (m) return vizClock(+m[1], 0);
    if (/1 d[ií]a/i.test(text)) return vizTime('🌞🌙', '1 día = ¿? horas');
    if (/1 semana/i.test(text)) return vizTime('📆', '1 semana = ¿? días');
    if (/1 año/i.test(text)) return vizTime('🗓️', '1 año = ¿? meses');
    if (/1 d[ée]cada/i.test(text)) return vizTime('🔟 🗓️', '1 década = ¿? años');
    if (/1 siglo/i.test(text)) return vizTime('💯 🕰️', '1 siglo = ¿? años');
    return '';
}
function vizSquare(side) {
    return `<div class="viz"><div class="viz-title">🔬 Cuadrado de ${side} cm por lado</div>
    <svg viewBox="0 0 170 150" width="200">
      <rect x="35" y="20" width="100" height="100" fill="#A0E7E5" stroke="#0ABDE3" stroke-width="4"/>
      <text x="85" y="14" text-anchor="middle" font-size="13" fill="#333">${side} cm</text>
      <text x="85" y="140" text-anchor="middle" font-size="13" fill="#333">${side} cm</text>
      <text x="22" y="74" text-anchor="middle" font-size="13" fill="#333" transform="rotate(-90 22 74)">${side} cm</text>
      <text x="150" y="74" text-anchor="middle" font-size="13" fill="#333" transform="rotate(90 150 74)">${side} cm</text>
    </svg>
    <div class="op-hint">Perímetro = suma de los 4 lados (4 × lado).</div></div>`;
}
function vizTrianglePerim(a, b, c) {
    return `<div class="viz"><div class="viz-title">🔬 Triángulo de lados ${a}, ${b} y ${c} cm</div>
    <svg viewBox="0 0 180 140" width="220">
      <polygon points="90,15 20,120 160,120" fill="#FDCB6E" stroke="#E17055" stroke-width="4"/>
      <text x="40" y="65" font-size="13" fill="#333">${a} cm</text>
      <text x="120" y="65" font-size="13" fill="#333">${b} cm</text>
      <text x="90" y="135" text-anchor="middle" font-size="13" fill="#333">${c} cm</text>
    </svg>
    <div class="op-hint">Perímetro = suma de los tres lados.</div></div>`;
}
function vizTriangleArea(base, height) {
    return `<div class="viz"><div class="viz-title">🔬 Triángulo: base ${base} cm, altura ${height} cm</div>
    <svg viewBox="0 0 180 140" width="220">
      <polygon points="90,15 20,120 160,120" fill="#A0E7E5" stroke="#0ABDE3" stroke-width="4"/>
      <line x1="90" y1="15" x2="90" y2="120" stroke="#E17055" stroke-width="2" stroke-dasharray="5,4"/>
      <text x="96" y="72" font-size="12" fill="#E17055">altura ${height}</text>
      <text x="90" y="135" text-anchor="middle" font-size="13" fill="#333">base ${base} cm</text>
    </svg>
    <div class="op-hint">Área = (base × altura) ÷ 2.</div></div>`;
}
function vizClock(h, m) {
    const cx = 75, cy = 75;
    const hourAng = (((h % 12) + m / 60) * 30 - 90) * Math.PI / 180;
    const minAng = ((m * 6) - 90) * Math.PI / 180;
    const hx = cx + 32 * Math.cos(hourAng), hy = cy + 32 * Math.sin(hourAng);
    const mx = cx + 48 * Math.cos(minAng), my = cy + 48 * Math.sin(minAng);
    let ticks = '';
    for (let i = 0; i < 12; i++) {
        const a = (i * 30 - 90) * Math.PI / 180;
        ticks += `<line x1="${(cx+58*Math.cos(a)).toFixed(1)}" y1="${(cy+58*Math.sin(a)).toFixed(1)}" x2="${(cx+51*Math.cos(a)).toFixed(1)}" y2="${(cy+51*Math.sin(a)).toFixed(1)}" stroke="#333" stroke-width="2"/>`;
    }
    return `<div class="viz"><div class="viz-title">🕐 ¿Qué hora marca el reloj?</div>
    <svg viewBox="0 0 150 150" width="170">
      <circle cx="75" cy="75" r="62" fill="#fff" stroke="#333" stroke-width="4"/>
      ${ticks}
      <line x1="75" y1="75" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="#333" stroke-width="5" stroke-linecap="round"/>
      <line x1="75" y1="75" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" stroke="#EE5253" stroke-width="3" stroke-linecap="round"/>
      <circle cx="75" cy="75" r="4" fill="#0ABDE3"/>
    </svg>
    <div class="op-hint">La aguja corta marca la hora; la larga, los minutos.</div></div>`;
}
function vizTime(emoji, label) {
    return `<div class="viz"><div class="viz-title">⏳ Equivalencias de tiempo</div>
      <div style="font-size:3em">${emoji}</div>
      <div class="viz-eq big">${label}</div></div>`;
}

/* Nivel 6: gráfico de barras real de la granja */
function vizStats() {
    const data = [['🥔',30,'#FF9F43'],['🥕',25,'#EE5253'],['🍅',40,'#e74c3c'],['🍆',55,'#5F27CD'],['🎃',20,'#10AC84']];
    const max = 55, H = 120;
    let bars = '';
    data.forEach(d => {
        const h = Math.max(6, Math.round(d[1] / max * H));
        bars += `<div class="barcol"><div class="bar-val">${d[1]}</div><div class="bar" style="height:${h}px;background:${d[2]}"></div><div class="bar-lbl">${d[0]}</div></div>`;
    });
    return `<div class="viz"><div class="viz-title">🌾 Diagrama de barras de la granja</div>
      <div class="barchart">${bars}</div>
      <div class="op-hint">🥔 30 · 🥕 25 · 🍅 40 · 🍆 55 · 🎃 20</div></div>`;
}

/* Pista 50/50: elimina una opción incorrecta. Máximo 5 por nivel, una por pregunta. */
function useHint() {
    if (answers[currentQ] || hintUsed[currentQ]) return;
    if (hintsLeft <= 0) { showBuddyBubble('¡Ya usaste tus 5 pistas de este nivel! 💡'); playWrong(); return; }
    const q = questions[currentQ];
    const wrong = [];
    q.shuffledOpts.forEach((o, i) => { if (!o.correct) wrong.push(i); });
    if (!wrong.length) return;
    const removeIdx = wrong[Math.floor(Math.random() * wrong.length)];
    const btns = document.querySelectorAll('#options .btn-option');
    if (btns[removeIdx]) {
        btns[removeIdx].disabled = true;
        btns[removeIdx].style.opacity = '0.3';
        btns[removeIdx].style.textDecoration = 'line-through';
    }
    hintUsed[currentQ] = true;
    hintsLeft--;                 // consume una pista del nivel
    updateHintButton();
    playClick();
    showBuddyBubble('¡Quité una opción incorrecta! Te quedan ' + hintsLeft + ' pistas. 💡');
}

function revealAnswered() {
    const q = questions[currentQ];
    const rec = answers[currentQ];
    if (q.type === 'write') {
        const input = document.getElementById('write-input');
        if (input) {
            input.value = (rec.typed !== undefined ? rec.typed : '');
            input.disabled = true;
            input.classList.add(rec.correct ? 'write-ok' : 'write-no');
        }
        const chk = document.querySelector('.write-check');
        if (chk) chk.disabled = true;
    } else {
        const btns = document.querySelectorAll('#options .btn-option');
        btns.forEach((b, i) => {
            b.disabled = true;
            if (q.shuffledOpts[i].correct) b.style.background = '#32CD32';
            else if (i === rec.picked && !rec.correct) b.style.background = '#EE5253';
        });
    }
    showExplanation(rec.correct);
    document.getElementById('feedback').innerHTML = rec.correct
        ? '<span style="color:#228B22;">¡Correcto! 🎉</span>'
        : '<span style="color:#EE5253;">¡Ups! ❌</span>';
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('fwd-btn').disabled = false;
}

function checkAnswer(selectedIndex, btn) {
    if (answers[currentQ]) return; // ya respondida
    const q = questions[currentQ];
    const isCorrect = q.shuffledOpts[selectedIndex].correct;
    const btns = document.querySelectorAll('#options .btn-option');
    btns.forEach((b, i) => {
        b.disabled = true;
        if (q.shuffledOpts[i].correct) b.style.background = '#32CD32';
    });
    if (!isCorrect) btn.style.background = '#EE5253';

    answers[currentQ] = { picked: selectedIndex, correct: isCorrect };

    const fb = document.getElementById('feedback');
    if (isCorrect) {
        score += 1; streak += 1; if (streak > bestStreak) bestStreak = streak;
        let earnedP = 10, earnedG = 2;
        if (streak >= 3) { earnedP += 5; earnedG += 1; } // bono por racha
        points += earnedP; gems += earnedG;
        addPoints(earnedP); addGems(earnedG); addStars(1);
        fb.innerHTML = '<span style="color:#228B22;">¡Correcto! 🎉</span>';
        playCorrect(); launchConfetti(streak >= 3 ? 45 : 25);
        showRewardPopup(`+${earnedP} 🏆`);
        if (streak === 3) showBuddyBubble('¡Racha de 3! 🔥 ¡Bonus!');
        buddyReact(false);
        // El locutor felicita en voz alta
        speak('¡Excelente, Valery!', { pitch: 1.15 });
    } else {
        streak = 0;
        fb.innerHTML = '<span style="color:#EE5253;">¡Ups! ❌</span>';
        playWrong();
        const b = document.getElementById('game-container');
        b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'), 500);
        // La mascota dice "buh" en cada respuesta incorrecta (globo + voz de locutor)
        const buhMsgs = ['¡Buuuh! 👎', '¡Buh, buh! 🫤', '¡Buuuh! ¡Inténtalo otra vez! 💪', '¡Buh! Casi... 😅'];
        showBuddyBubble(buhMsgs[Math.floor(Math.random() * buhMsgs.length)]);
        // El locutor abuchea en voz alta
        speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
        const buddy = document.getElementById('buddy');
        if (buddy) { buddy.classList.remove('react-shake2'); void buddy.offsetWidth; buddy.classList.add('react-shake2'); setTimeout(()=>buddy.classList.remove('react-shake2'), 900); }
    }
    showExplanation(isCorrect);
    updateHUD();
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('fwd-btn').disabled = false;
}

/* Valida la respuesta escrita: compara solo los dígitos (ignora puntos, espacios, "cm") */
function validateWrite(input, q) {
    const norm = s => String(s).toLowerCase().replace(/[^\d]/g, '');
    const u = norm(input);
    if (u === '') return false;
    const cands = [q.answer].concat(q.accept || []).map(norm);
    return cands.includes(u);
}

/* Comprueba la respuesta escrita del nivel "¡A Escribir!" */
function checkWriteAnswer() {
    if (answers[currentQ]) return;
    const q = questions[currentQ];
    const input = document.getElementById('write-input');
    if (!input) return;
    const typed = input.value.trim();
    if (typed === '') {
        input.classList.add('write-no');
        setTimeout(() => input.classList.remove('write-no'), 400);
        showBuddyBubble('Escribe tu respuesta ✏️');
        return;
    }
    const isCorrect = validateWrite(typed, q);
    answers[currentQ] = { typed: typed, correct: isCorrect };
    input.disabled = true;
    const chk = document.querySelector('.write-check');
    if (chk) chk.disabled = true;
    input.classList.add(isCorrect ? 'write-ok' : 'write-no');

    const fb = document.getElementById('feedback');
    if (isCorrect) {
        score += 1; streak += 1; if (streak > bestStreak) bestStreak = streak;
        let earnedP = 12, earnedG = 3;               // escribir vale un poco más
        if (streak >= 3) { earnedP += 5; earnedG += 1; }
        points += earnedP; gems += earnedG;
        addPoints(earnedP); addGems(earnedG); addStars(1);
        fb.innerHTML = '<span style="color:#228B22;">¡Correcto! 🎉</span>';
        playCorrect(); launchConfetti(streak >= 3 ? 45 : 25);
        showRewardPopup(`+${earnedP} 🏆`);
        if (streak === 3) showBuddyBubble('¡Racha de 3! 🔥 ¡Bonus!');
        buddyReact(false);
        speak('¡Excelente, Valery!', { pitch: 1.15 });
    } else {
        streak = 0;
        fb.innerHTML = '<span style="color:#EE5253;">¡Ups! ❌</span>';
        playWrong();
        const b = document.getElementById('game-container');
        b.classList.add('shake'); setTimeout(() => b.classList.remove('shake'), 500);
        showBuddyBubble('¡Buuuh! Mira la explicación 👇');
        speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
        const buddy = document.getElementById('buddy');
        if (buddy) { buddy.classList.remove('react-shake2'); void buddy.offsetWidth; buddy.classList.add('react-shake2'); setTimeout(() => buddy.classList.remove('react-shake2'), 900); }
    }
    showExplanation(isCorrect);
    updateHUD();
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('fwd-btn').disabled = false;
    updateHintButton();
}

function showExplanation(isCorrect) {
    const q = questions[currentQ];
    const box = document.getElementById('explanation-box');
    const correctText = (q.type === 'write') ? (q.answerText || q.answer) : q.options[q.answer].text;
    let html = `<span class="exp-header ${isCorrect?'ok':'no'}">${isCorrect?'✅ ¡Muy bien!':'💡 ¡Casi! Aprende esto:'}</span>`;
    html += `<span class="exp-rule">${q.rule}</span>`;
    if (!isCorrect) html += `<p class="exp-text">La respuesta correcta es <span class="correct-answer">${correctText}</span>.</p>`;
    html += `<p class="exp-text">${q.exp}</p>`;
    if (q.scene) html += `<div class="scene">${q.scene}</div>`;
    if (q.examples && q.examples.length) {
        html += `<div class="examples-box"><span class="examples-title">📝 Ejemplos:</span>`;
        q.examples.forEach(ex => {
            html += `<div class="example-item"><span class="op">${ex.op}</span> = <span class="res">${ex.res}</span></div>`;
        });
        html += `</div>`;
    }
    box.innerHTML = html;
    box.classList.remove('hidden');
}



function updateHUD() {
    document.getElementById('score').innerText = score;
    document.getElementById('points').innerText = points;
    document.getElementById('gems').innerText = gems;
    document.getElementById('streak').innerText = streak;
}
function updateProgressBar() {
    const pct = (currentQ / questions.length) * 100;
    document.getElementById('progress-bar').style.width = pct + '%';
}
function nextQuestion() {
    playClick();
    if (currentQ < questions.length - 1) { currentQ++; showQuestion(); }
    else endLevel();
}
function goBack() { playClick(); if (currentQ > 0) { currentQ--; showQuestion(); } }
function goForward() { playClick(); if (answers[currentQ] && currentQ < questions.length - 1) { currentQ++; showQuestion(); } }
function goMenu() {
    playClick();
    showScreen('start-screen');
    renderMap(); refreshStartHud(); applyEquip(); renderMinigames();
}

function endLevel() {
    document.getElementById('progress-bar').style.width = '100%';
    const total = questions.length;
    let rank = 1; // bronce
    if (score === total) rank = 3;        // oro: todo perfecto
    else if (score >= Math.ceil(total * 0.6)) rank = 2; // plata: 60%+
    saveMedal(currentLevel, rank);

    // Reto Definitivo: 100 diamantes CADA vez que se completa (oro, plata o bronce)
    if (currentLevel === 'ultimate') { gems += 100; addGems(100); }

    document.getElementById('final-score').innerText = score + '/' + total;
    document.getElementById('final-points').innerText = points;
    document.getElementById('final-gems').innerText = gems;
    document.getElementById('final-streak').innerText = bestStreak;
    document.getElementById('final-medal').innerText = rank === 3 ? '🥇' : rank === 2 ? '🥈' : '🥉';

    let msg = '';
    if (rank === 3) msg = '¡PERFECTO! 🌟 Medalla de ORO. ¡Eres una campeona!';
    else if (rank === 2) msg = '¡Muy bien! 🥈 Medalla de PLATA. ¡Sigue así!';
    else msg = '¡Buen intento! 🥉 Repite el nivel para ganar oro.';

    if (currentLevel === 0) {
        // Desafío Final
        msg = (rank === 3)
            ? '🏆 ¡DESAFÍO FINAL SUPERADO A LA PERFECCIÓN! ¡Eres una LEYENDA de las mates! 👑'
            : '🏆 ¡Completaste el Desafío Final! ¡Increíble, Valery!';
    } else if (currentLevel === 7) {
        // Nivel ¡A Escribir!
        msg = (rank === 3)
            ? '✏️ ¡ESCRIBISTE TODO PERFECTO! ¡Dominas todos los temas, Valery! 👑'
            : '✏️ ¡Completaste el nivel de Escribir! ¡Muy bien!';
    } else if (currentLevel === 'ultimate') {
        // Reto Definitivo (todo mezclado) — premio de 100 diamantes
        const medalWord = rank === 3 ? 'ORO 🥇' : rank === 2 ? 'PLATA 🥈' : 'BRONCE 🥉';
        msg = `🌟 ¡Completaste el RETO DEFINITIVO con medalla de ${medalWord}! `
            + `¡Ganaste 💎 100 diamantes! Puedes repetirlo para ganar más. 🎁`;
    }

    // Nota actual y si completó todos los niveles
    const allDone = allLevelsDone();
    if (currentLevel !== 'ultimate') msg += ` 📊 Tu nota ahora es ${currentGrade().toFixed(1)}.`;
    if (allDone && currentLevel !== 0 && currentLevel !== 7 && currentLevel !== 'ultimate') {
        msg += ' 🎓 ¡Completaste TODOS los niveles! ¡Pasaste de 1.0 a 5.0! 🏆 Ahora prueba el 🏆 Desafío Final.';
    }

    document.getElementById('end-message').innerText = msg;
    showScreen('end-screen');
    playWin(); launchConfetti((currentLevel === 0 || currentLevel === 'ultimate') ? 120 : 80);
    showRewardPopup(currentLevel === 'ultimate' ? '💎 +100 diamantes!' : (currentLevel === 0 ? '👑 ¡Leyenda!' : '🏅 ¡Nivel superado!'));
}

/* ============ TIENDA ============ */
function openShop() {
    playClick();
    showScreen('shop-screen');
    renderShop();
}
function closeShop() { playClick(); goMenu(); }

function renderShop() {
    document.getElementById('shop-stars').innerText = getStars();
    document.getElementById('shop-points').innerText = getPoints();
    document.getElementById('shop-gems').innerText = getGems();
    const owned = getOwned(); const equip = getEquip();

    renderGrandPrize();
    renderShopSection('shop-backgrounds', backgrounds, 'bg', 'gems', owned, equip);
    renderShopSection('shop-characters', characters, 'char', 'gems', owned, equip);
    renderShopSection('shop-stickers', stickers, 'sticker', 'points', owned, equip);
    renderShopSection('shop-titles', titles, 'title', 'stars', owned, equip);
}

/* Renderiza el Premio Mayor (recompensa en dinero real) */
function renderGrandPrize() {
    const cont = document.getElementById('shop-grandprize');
    if (!cont) return;
    const redeemed = getCashRedeemed();
    const log = getCashLog();
    const allDone = allLevelsDone();

    let html = '';
    if (redeemed >= cashPrizes.length) {
        // Ya redimió todos los premios disponibles
        html += `<div class="shop-item grand-prize">
            <div class="shop-emoji">🏅</div>
            <div class="shop-name">¡Todos los premios redimidos!</div>
            <div class="cop-badge">🎉 ¡Eres una campeona! 🎉</div>
            <div class="grand-note">Total ganado: ${formatCOP(cashPrizes.reduce((s,p)=>s+p.cop,0))}</div>
        </div>`;
    } else {
        const prize = cashPrizes[redeemed];
        const gems = getGems();
        let btn;
        if (!allDone) {
            btn = `<button class="btn btn-buy locked" onclick="redeemCash()">🔒 Completa los 6 niveles</button>`;
        } else if (gems < prize.cost) {
            btn = `<button class="btn btn-buy locked" onclick="redeemCash()">${prize.cost.toLocaleString('es-CO')} 💎</button>`;
        } else {
            btn = `<button class="btn btn-buy own" style="background:#10AC84;box-shadow:0 5px 0 #0a8f6d;" onclick="redeemCash()">¡Redimir por ${prize.cost.toLocaleString('es-CO')} 💎!</button>`;
        }
        html += `<div class="shop-item grand-prize">
            <div class="shop-emoji">🪙</div>
            <div class="shop-name">Premio de Oro</div>
            <div class="cop-badge">💵 Redime ${formatCOP(prize.cop)}</div>
            ${btn}
            <div class="grand-note">Tienes ${gems.toLocaleString('es-CO')} 💎 · Cuesta ${prize.cost.toLocaleString('es-CO')} 💎</div>
        </div>`;
    }

    // Historial de premios redimidos (para que los papás lleven la cuenta)
    if (log.length) {
        html += `<div class="grand-log"><b>🧾 Premios redimidos:</b>`;
        log.forEach(e => {
            html += `<div class="log-item">${formatCOP(e.cop)} · código <b>${e.code}</b> · ${e.date}</div>`;
        });
        html += `</div>`;
    }
    cont.innerHTML = html;
}

/* Redime un premio en dinero real (solo si completó todos los niveles y tiene 💎) */
function redeemCash() {
    const redeemed = getCashRedeemed();
    if (redeemed >= cashPrizes.length) return;
    const prize = cashPrizes[redeemed];

    if (!allLevelsDone()) {
        showBuddyBubble('¡Primero completa los 6 niveles! 🔒');
        playWrong(); return;
    }
    if (getGems() < prize.cost) {
        showBuddyBubble('¡Te faltan 💎! Juega más para ganar. 😉');
        playWrong(); return;
    }
    // Descontar gemas, registrar y avanzar al siguiente premio
    addGems(-prize.cost);
    const code = 'VAL-' + Math.floor(1000 + Math.random() * 9000);
    const date = new Date().toLocaleDateString('es-CO');
    addCashLog({ cop: prize.cop, code: code, date: date });
    setCashRedeemed(redeemed + 1);

    playWin(); launchConfetti(140);
    const next = cashPrizes[redeemed + 1];
    const extra = next
        ? `¡Se desbloqueó un nuevo premio de ${formatCOP(next.cop)} por ${next.cost.toLocaleString('es-CO')} 💎!`
        : '¡Redimiste todos los premios! 🏆';
    showCertificate(prize.cop, code, extra);
    renderShop();
}

/* Muestra el certificado de premio */
function showCertificate(cop, code, extra) {
    document.getElementById('cert-cop').innerText = formatCOP(cop);
    document.getElementById('cert-code').innerText = code;
    document.getElementById('cert-extra').innerText = extra || '';
    document.getElementById('cert-overlay').classList.remove('hidden');
}
function closeCertificate() {
    document.getElementById('cert-overlay').classList.add('hidden');
    playClick();
}

function renderShopSection(containerId, data, kind, cur, owned, equip) {
    const cont = document.getElementById(containerId);
    let html = '';
    Object.keys(data).forEach(id => {
        const item = data[id];
        const isOwned = owned[kind].includes(id) || item.price === 0;
        const isEquipped = (kind === 'sticker') ? (equip.sticker === id) : (equip[kind] === id);
        let btn;
        if (isEquipped) btn = `<button class="btn btn-buy equip" disabled>✅ Usando</button>`;
        else if (isOwned) btn = `<button class="btn btn-buy own" onclick="equipItem('${kind}','${id}')">Usar</button>`;
        else btn = `<button class="btn btn-buy locked" onclick="buyItem('${kind}','${id}','${cur}',${item.price})">${item.price} ${curEmoji[cur]}</button>`;
        html += `<div class="shop-item ${isEquipped?'equipped':''}">
            <div class="shop-emoji">${item.emoji}</div>
            <div class="shop-name">${item.name}</div>
            ${btn}
        </div>`;
    });
    cont.innerHTML = html;
}

function buyItem(kind, id, cur, price) {
    if (getWallet(cur) < price) {
        showBuddyBubble('¡Te faltan ' + curEmoji[cur] + '! Juega más para ganar. 😉');
        playWrong(); return;
    }
    spendWallet(cur, price);
    const owned = getOwned();
    if (!owned[kind].includes(id)) owned[kind].push(id);
    setOwned(owned);
    playBuy(); showRewardPopup('¡Comprado! 🎉');
    equipItem(kind, id);
}

function equipItem(kind, id) {
    const equip = getEquip();
    if (kind === 'sticker') equip.sticker = (equip.sticker === id) ? '' : id;
    else equip[kind] = id;
    setEquip(equip);
    applyEquip(); renderShop(); playClick();
    if (kind === 'char') buddyReact();
}



/* ============ PROGRESO: GUARDAR / CARGAR ============ */
function openProgress() {
    playClick();
    showScreen('progress-screen');
    const data = {
        gems: getGems(), points: getPoints(), stars: getStars(),
        medals: getMedals(), owned: getOwned(), equip: getEquip(),
        cashRedeemed: getCashRedeemed(), cashLog: getCashLog(),
        journeyMax: getJourneyMax(), mgDone: getMgDone()
    };
    document.getElementById('export-code').value = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    document.getElementById('import-msg').innerText = '';
    document.getElementById('import-code').value = '';
}
function closeProgress() { playClick(); goMenu(); }
function copyProgressCode() {
    const ta = document.getElementById('export-code');
    ta.select();
    try { document.execCommand('copy'); showBuddyBubble('¡Código copiado! 📋'); }
    catch(e) { showBuddyBubble('Selecciona y copia el código 📋'); }
    playClick();
}
function importProgress() {
    const code = document.getElementById('import-code').value.trim();
    const msg = document.getElementById('import-msg');
    if (!code) { msg.style.color = '#EE5253'; msg.innerText = 'Pega un código primero.'; return; }
    try {
        const data = JSON.parse(decodeURIComponent(escape(atob(code))));
        if (data.gems !== undefined) setGems(data.gems);
        if (data.points !== undefined) setPoints(data.points);
        if (data.stars !== undefined) setStars(data.stars);
        if (data.medals) lsSet('vmMedals', JSON.stringify(data.medals));
        if (data.owned) setOwned(data.owned);
        if (data.equip) setEquip(data.equip);
        if (data.cashRedeemed !== undefined) setCashRedeemed(data.cashRedeemed);
        if (data.cashLog) lsSet('vmCashLog', JSON.stringify(data.cashLog));
        if (data.journeyMax !== undefined) lsSet('vmJourneyMax', String(data.journeyMax));
        if (data.mgDone) lsSet('vmMgDone', JSON.stringify(data.mgDone));
        msg.style.color = '#228B22'; msg.innerText = '¡Progreso cargado! 🎉';
        playWin(); applyEquip();
    } catch(e) {
        msg.style.color = '#EE5253'; msg.innerText = 'El código no es válido. 😕';
        playWrong();
    }
}

/* ============ SELECTOR DE TIPO DE LETRA ============ */
const fontList = [
    { name:"Comic", css:"'Comic Neue', 'Comic Sans MS', cursive" },
    { name:"Redonda", css:"'Baloo 2', cursive" },
    { name:"Suave", css:"'Fredoka', sans-serif" },
    { name:"Clara", css:"'Nunito', sans-serif" },
    { name:"Escrita", css:"'Patrick Hand', cursive" }
];
function applyFont(css) { document.documentElement.style.setProperty('--game-font', css); }
function renderFontPicker() {
    const cont = document.getElementById('font-picker');
    const current = lsGet('vmFont', fontList[0].css);
    cont.innerHTML = fontList.map(f =>
        `<div class="font-opt ${f.css===current?'active':''}" style="font-family:${f.css}" onclick="pickFont('${f.css.replace(/'/g,"\\'")}')">${f.name}</div>`
    ).join('');
}
function pickFont(css) { applyFont(css); lsSet('vmFont', css); renderFontPicker(); playClick(); }
function cycleFont() {
    const current = lsGet('vmFont', fontList[0].css);
    let idx = fontList.findIndex(f => f.css === current);
    idx = (idx + 1) % fontList.length;
    pickFont(fontList[idx].css);
    showBuddyBubble('Letra: ' + fontList[idx].name + ' 🔤');
}

/* ============ INICIALIZACIÓN ============ */
function init() {
    applyFont(lsGet('vmFont', fontList[0].css));
    loadYouTubeMusic();   // prepara el reproductor de YouTube para la música de fondo
    applyEquip();
    renderMap();
    refreshStartHud();
    renderMinigames();
    renderFontPicker();
    // Desbloquear audio en el primer gesto del usuario (móviles/navegadores lo exigen)
    document.addEventListener('pointerdown', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });
    // Saludo de la mascota
    setTimeout(() => showBuddyBubble('¡Hola Valery! Toca un nivel para empezar. 🚀'), 800);
}
document.addEventListener('DOMContentLoaded', init);



/* =====================================================
   MINI-JUEGOS INTERACTIVOS (basados en el taller de recuperación)
   ===================================================== */
const minigamesData = [
    { id:'division', emoji:'🍬', name:'Reparto de Caramelos', tag:'Divisiones (2,3,4,5,6)' },
    { id:'zeros',    emoji:'0️⃣', name:'Máquina de Ceros',      tag:'× 10, 100, 1000' },
    { id:'mcm',      emoji:'🪜', name:'Escalera de Múltiplos',  tag:'M.C.M.' },
    { id:'tables',   emoji:'✖️', name:'Tablas de Multiplicar',  tag:'Tablas del 2 al 9' },
    { id:'journey',  emoji:'🚀', name:'Aventura de las Tablas',  tag:'Escribe del 1 al 10 · 3 pistas' }
];
function getMgDone() { try { return JSON.parse(lsGet('vmMgDone','{}')); } catch(e){ return {}; } }
function setMgDone(id) { const d = getMgDone(); d[id] = true; lsSet('vmMgDone', JSON.stringify(d)); }
function renderMinigames() {
    const grid = document.getElementById('minigames-grid');
    if (!grid) return;
    const done = getMgDone();
    let html = minigamesData.map(g => `
        <div class="mg-card" onclick="openMinigame('${g.id}')">
            <div class="mg-emoji">${g.emoji}</div>
            <div class="mg-name">${g.name}</div>
            <div class="mg-tag">${g.tag}</div>
            ${done[g.id] ? '<div class="node-medal">🏅 ¡Completado!</div>' : ''}
        </div>`).join('');
    // Reto Definitivo: usa el motor de preguntas (todo mezclado) y da 100 💎 cada vez
    const unlocked = levelUnlocked('ultimate');
    const uRank = getMedals()['ultimate'];
    const medalTxt = uRank ? (uRank === 3 ? '🥇 Oro' : uRank === 2 ? '🥈 Plata' : '🥉 Bronce') : '';
    html += `
        <div class="mg-card mg-ultimate ${unlocked ? '' : 'mg-locked'}" onclick="${unlocked ? "startGame('ultimate')" : "mgUltimateLocked()"}">
            <div class="mg-emoji">🌟</div>
            <div class="mg-name">Reto Definitivo</div>
            <div class="mg-tag">¡TODO mezclado! · +100 💎 cada vez</div>
            ${unlocked ? (medalTxt ? `<div class="node-medal">Mejor: ${medalTxt}</div>` : '') : '<div class="node-medal">🔒 Completa los 6 niveles</div>'}
        </div>`;
    grid.innerHTML = html;
}
function mgUltimateLocked() {
    showBuddyBubble('¡Completa los 6 niveles para desbloquear el Reto Definitivo! 🔒');
    playWrong();
}

let mg = null; // estado del mini-juego actual
function mgUpdateHud() {
    document.getElementById('mg-stars').innerText = getStars();
    document.getElementById('mg-points').innerText = getPoints();
    document.getElementById('mg-gems').innerText = getGems();
    document.getElementById('mg-round').innerText = (mg && mg.round) ? mg.round : 1;
}
function openMinigame(id) {
    playClick(); getCtx(); unlockAudio();
    showScreen('minigame-screen');
    if (id === 'division') mgDivisionStart();
    else if (id === 'zeros') mgZerosStart();
    else if (id === 'mcm') mgMcmStart();
    else if (id === 'tables') mgTablesStart();
    else if (id === 'journey') mgJourneyStart();
}
function mgRestart() { if (mg) { playClick(); openMinigame(mg.id); } }
function mgReward(points, gems) {
    addPoints(points); addGems(gems); addStars(1);
    mgUpdateHud(); showRewardPopup('+' + points + ' 🏆');
}
function mgNext() {
    if (!mg) return;
    if (mg.round >= mg.total) { setTimeout(mgComplete, 950); return; }
    mg.round++; mgUpdateHud();
    setTimeout(() => {
        if (mg.id === 'division') mgDivisionRound();
        else if (mg.id === 'zeros') mgZerosRound();
        else if (mg.id === 'mcm') mgMcmRound();
        else if (mg.id === 'tables') mgTablesRound();
    }, 950);
}
function mgComplete() {
    setMgDone(mg.id);
    document.getElementById('mg-title').innerText = '🏅 ¡Juego Completado!';
    document.getElementById('mg-instructions').innerText = '';
    // Celebración especial del juego de tablas: 50 diamantes + tabla dominada
    let body;
    if (mg.id === 'tables') {
        addGems(50);                                   // 50 💎 cada vez que se completa (100%)
        const precision = Math.round((mg.firstTry || 0) / (mg.total || 10) * 100);
        const perfect = (mg.firstTry || 0) >= (mg.total || 10);
        const stats = `<div class="viz-title" style="font-size:1.05em;">💎 +50 diamantes · 🔥 Mejor combo: ${mg.bestCombo || 0}</div>
            <div style="font-size:0.95em;color:#666;margin:4px 0;">${perfect ? '🌟 ¡100% PERFECTO! (todo a la primera)' : 'Precisión a la primera: ' + precision + '%'}</div>`;
        showRewardPopup('💎 +50');
        if (mg.table > 0) {
            body = `<div style="font-size:2.4em">🏆⭐</div>
                <div style="font-size:1.2em;font-weight:bold;color:#10AC84;">¡Dominaste la tabla del ${mg.table}!</div>
                ${stats}${buildTableChart(mg.table, true)}`;
        } else {
            body = `<div style="font-size:2.6em">🏆🎲</div>
                <div style="font-size:1.2em;font-weight:bold;color:#10AC84;">¡Practicaste muchas tablas, Valery!</div>
                ${stats}`;
        }
    } else {
        body = `<div style="font-size:3em">🏆</div>
            <div style="font-size:1.3em;font-weight:bold;color:#10AC84;">¡Muy bien, Valery! Terminaste este juego.</div>`;
    }
    document.getElementById('mg-area').innerHTML = `<div class="viz">${body}</div>`;
    document.getElementById('mg-feedback').innerHTML = '';
    document.getElementById('mg-controls').innerHTML =
        `<button class="btn" onclick="goMenu()">🗺️ Volver al mapa</button>
         <button class="btn" style="background:#EE5253;box-shadow:0 6px 0 #b83b3b;" onclick="mgRestart()">🔄 Jugar otra vez</button>`;
    playWin(); launchConfetti(90); speak('¡Excelente, Valery!', { pitch: 1.15 });
    renderMinigames();
}
function mgNumberOptions(correct, count) {
    const set = new Set([correct]);
    let guard = 0;
    while (set.size < count && guard++ < 60) {
        const cand = correct + (Math.floor(Math.random() * 5) - 2);
        if (cand > 0 && cand !== correct) set.add(cand);
    }
    let n = 1;
    while (set.size < count) { if (correct + n > 0) set.add(correct + n); n++; }
    return shuffle([...set]);
}



/* ===== JUEGO 1: Reparto de Caramelos (División) ===== */
function mgDivisionStart() {
    mg = { id:'division', round:1, total:3 };
    document.getElementById('mg-title').innerText = '🍬 Reparto de Caramelos';
    mgUpdateHud();
    mgDivisionRound();
}
function mgDivisionRound() {
    const divisors = [2, 3, 4, 5, 6];              // números del taller
    const divisor = divisors[Math.floor(Math.random() * divisors.length)];
    const quotient = 2 + Math.floor(Math.random() * 8);
    const remainder = Math.floor(Math.random() * divisor);
    mg.divisor = divisor;
    mg.quotient = quotient;
    mg.remainder = remainder;
    mg.dividend = divisor * quotient + remainder;
    mg.plates = new Array(divisor).fill(0);
    mg.pile = mg.dividend;
    document.getElementById('mg-instructions').innerText =
        `Reparte ${mg.dividend} caramelos entre ${divisor} platos. Toca "Repartir uno a cada plato".`;
    document.getElementById('mg-feedback').innerHTML = '';
    mgDivisionRender();
}
function mgDivisionRender() {
    let pile = ''; const showP = Math.min(mg.pile, 30);
    for (let i = 0; i < showP; i++) pile += '🍬';
    if (mg.pile > showP) pile += ' …';
    let plates = '';
    mg.plates.forEach(c => {
        let cs = ''; for (let i = 0; i < c; i++) cs += '🍬';
        plates += `<div class="plate"><div class="plate-candies">${cs || '·'}</div><div class="plate-count">${c}</div></div>`;
    });
    const canDeal = mg.pile >= mg.divisor;
    document.getElementById('mg-area').innerHTML = `
        <div class="mg-progress">Ronda ${mg.round} de ${mg.total} · ${mg.dividend} ÷ ${mg.divisor}</div>
        <div><b>Caramelos por repartir: ${mg.pile}</b></div>
        <div class="candy-pile">${pile || '(vacío)'}</div>
        <div class="plates-row">${plates}</div>
        ${(mg.pile > 0 && !canDeal) ? `<div class="leftover">Sobran: ${mg.pile} 🍬</div>` : ''}`;
    document.getElementById('mg-controls').innerHTML = canDeal
        ? `<button class="btn" onclick="mgDivisionDeal()">🎁 Repartir uno a cada plato</button>`
        : `<button class="btn" style="background:#10AC84;box-shadow:0 6px 0 #0a8f6d;" onclick="mgDivisionAsk()">✅ ¡Ya repartí!</button>`;
}
function mgDivisionDeal() {
    if (mg.pile < mg.divisor) return;
    for (let i = 0; i < mg.divisor; i++) mg.plates[i]++;
    mg.pile -= mg.divisor;
    playClick();
    mgDivisionRender();
}
function mgDivisionAsk() {
    playClick();
    const opts = mgNumberOptions(mg.quotient, 3);
    const tiles = opts.map(n => `<button class="num-tile" onclick="mgDivisionAnswer(${n})">${n}</button>`).join('');
    document.getElementById('mg-instructions').innerText = '¿Cuántos caramelos le tocaron a CADA plato?';
    document.getElementById('mg-controls').innerHTML = '';
    document.getElementById('mg-area').innerHTML += `<div class="num-tiles">${tiles}</div>`;
}
function mgDivisionAnswer(n) {
    const fb = document.getElementById('mg-feedback');
    if (n === mg.quotient) {
        fb.innerHTML = `<span style="color:#228B22;">¡Correcto! Cada plato: ${mg.quotient}${mg.remainder ? `, y sobran ${mg.remainder}` : ''} 🎉</span>`;
        playCorrect(); launchConfetti(30); speak('¡Excelente, Valery!', { pitch: 1.15 }); buddyReact(false);
        mgReward(10, 3); mgNext();
    } else {
        fb.innerHTML = `<span style="color:#EE5253;">¡Buuuh! Cuenta los caramelos de un solo plato. 👀</span>`;
        playWrong(); speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
    }
}



/* ===== JUEGO 2: Máquina de Ceros (Multiplicación abreviada) ===== */
function mgZerosStart() {
    mg = { id:'zeros', round:1, total:5 };
    document.getElementById('mg-title').innerText = '0️⃣ Máquina de Ceros';
    mgUpdateHud();
    mgZerosRound();
}
function mgZerosRound() {
    const bases = [5, 12, 34, 7, 60, 125, 8, 9, 40, 3, 250, 46];
    const mults = [10, 100, 1000];
    mg.base = bases[Math.floor(Math.random() * bases.length)];
    mg.mult = mults[Math.floor(Math.random() * mults.length)];
    mg.needZeros = String(mg.mult).length - 1;
    mg.added = 0;
    document.getElementById('mg-instructions').innerText =
        `Multiplica ${mg.base} × ${mg.mult}. Toca los ceros 🟡 para agregarlos al final del número.`;
    document.getElementById('mg-feedback').innerHTML = '';
    mgZerosRender();
}
function mgZerosRender() {
    const display = String(mg.base) + '0'.repeat(mg.added);
    document.getElementById('mg-area').innerHTML = `
        <div class="mg-progress">Ronda ${mg.round} de ${mg.total}</div>
        <div style="font-size:1.3em;">${mg.base} × ${mg.mult} =</div>
        <div class="zero-machine">${display}</div>
        <div class="zero-tray">
            <div class="zero-drag" onclick="mgZerosAdd()">0</div>
            <div class="zero-drag" onclick="mgZerosAdd()">0</div>
            <div class="zero-drag" onclick="mgZerosAdd()">0</div>
        </div>`;
    document.getElementById('mg-controls').innerHTML =
        `<button class="btn" style="background:#FF9F43;box-shadow:0 6px 0 #cc7d2f;" onclick="mgZerosRemove()">⬅️ Quitar cero</button>
         <button class="btn" style="background:#10AC84;box-shadow:0 6px 0 #0a8f6d;" onclick="mgZerosCheck()">✅ ¡Listo!</button>`;
}
function mgZerosAdd() { mg.added++; playClick(); mgZerosRender(); }
function mgZerosRemove() { if (mg.added > 0) { mg.added--; playClick(); mgZerosRender(); } }
function mgZerosCheck() {
    const fb = document.getElementById('mg-feedback');
    if (mg.added === mg.needZeros) {
        const result = mg.base * mg.mult;
        fb.innerHTML = `<span style="color:#228B22;">¡Correcto! ${mg.base} × ${mg.mult} = ${result.toLocaleString('es-CO')} 🎉</span>`;
        playCorrect(); launchConfetti(30); speak('¡Excelente, Valery!', { pitch: 1.15 }); buddyReact(false);
        mgReward(10, 3); mgNext();
    } else {
        const diff = mg.needZeros - mg.added;
        fb.innerHTML = `<span style="color:#EE5253;">¡Buuuh! Por ${mg.mult} se agregan ${mg.needZeros} ceros. ${diff > 0 ? 'Faltan ' + diff : 'Sobran ' + (-diff)}.</span>`;
        playWrong(); speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
    }
}



/* ===== JUEGO 3: Escalera de Múltiplos (M.C.M.) ===== */
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return a * b / gcd(a, b); }
function mgMcmStart() {
    mg = { id:'mcm', round:1, total:3 };
    document.getElementById('mg-title').innerText = '🪜 Escalera de Múltiplos';
    mgUpdateHud();
    mgMcmRound();
}
function mgMcmRound() {
    const pairs = [[8, 4], [10, 12], [6, 4], [5, 10], [3, 6]]; // incluye los del taller
    const p = pairs[Math.floor(Math.random() * pairs.length)];
    mg.a = p[0]; mg.b = p[1];
    mg.mcm = lcm(mg.a, mg.b);
    mg.stepsA = 1; mg.stepsB = 1;
    document.getElementById('mg-instructions').innerText =
        `Toca "+ número" para construir los múltiplos de ${mg.a} y ${mg.b}. Cuando el MISMO número aparezca en las dos escaleras, ¡tócalo! Ese es el M.C.M.`;
    document.getElementById('mg-feedback').innerHTML = '';
    mgMcmRender();
}
function mgMcmRender() {
    const listA = []; for (let i = 1; i <= mg.stepsA; i++) listA.push(mg.a * i);
    const listB = []; for (let i = 1; i <= mg.stepsB; i++) listB.push(mg.b * i);
    const common = new Set(listA.filter(x => listB.includes(x)));
    const col = (list) => list.map(v => {
        const c = common.has(v);
        return `<div class="mult-step ${c ? 'common' : ''}" ${c ? `onclick="mgMcmPick(${v})"` : ''}>${v}</div>`;
    }).join('');
    document.getElementById('mg-area').innerHTML = `
        <div class="mg-progress">Ronda ${mg.round} de ${mg.total} · M.C.M. de ${mg.a} y ${mg.b}</div>
        <div class="mult-cols">
            <div class="mult-col"><h4>Múltiplos de ${mg.a}</h4>${col(listA)}
                <button class="num-tile" style="width:100%" onclick="mgMcmStep('a')">+ ${mg.a}</button></div>
            <div class="mult-col"><h4>Múltiplos de ${mg.b}</h4>${col(listB)}
                <button class="num-tile" style="width:100%" onclick="mgMcmStep('b')">+ ${mg.b}</button></div>
        </div>`;
    document.getElementById('mg-controls').innerHTML = '';
}
function mgMcmStep(which) {
    if (which === 'a') mg.stepsA++; else mg.stepsB++;
    playClick();
    mgMcmRender();
}
function mgMcmPick(v) {
    const fb = document.getElementById('mg-feedback');
    if (v === mg.mcm) {
        fb.innerHTML = `<span style="color:#228B22;">¡Correcto! El M.C.M. de ${mg.a} y ${mg.b} es ${mg.mcm} 🎉</span>`;
        playCorrect(); launchConfetti(30); speak('¡Excelente, Valery!', { pitch: 1.15 }); buddyReact(false);
        mgReward(12, 4); mgNext();
    } else {
        fb.innerHTML = `<span style="color:#EE5253;">¡Buuuh! El M.C.M. es el número común MÁS PEQUEÑO. 👀</span>`;
        playWrong(); speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
    }
}



/* ===== JUEGO 4: Tablas de Multiplicar (didáctico e interactivo) =====
   Incluye: modo estudiar la tabla, arreglo de puntos, combos con bonus,
   barra de progreso de estrellas, ayuda de conteo saltado y celebración final. */
const TABLE_COLORS = { 2:'#FF9F43', 3:'#10AC84', 4:'#0ABDE3', 5:'#EE5253', 6:'#5F27CD', 7:'#E84393', 8:'#F368E0', 9:'#FF6B6B', 0:'#6C5CE7' };
// Tipos de reto combinados para variar el juego de tablas
const TABLE_CHALLENGES = ['product', 'missing', 'truefalse', 'skip', 'write'];
function mgTablesStart() {
    mg = { id:'tables', round:1, total:10, combo:0, bestCombo:0, correctCount:0 };
    document.getElementById('mg-title').innerText = '✖️ Tablas de Multiplicar';
    mgUpdateHud();
    mgTablesSelect();
}
function mgTablesSelect() {
    document.getElementById('mg-instructions').innerText = '¿Qué tabla quieres practicar?';
    document.getElementById('mg-feedback').innerHTML = '';
    document.getElementById('mg-controls').innerHTML = '';
    let tiles = '';
    for (let t = 2; t <= 9; t++) {
        tiles += `<button class="num-tile" style="background:${TABLE_COLORS[t]};box-shadow:0 4px 0 rgba(0,0,0,0.25);" onclick="mgTablesChoose(${t})">${t}</button>`;
    }
    tiles += `<button class="num-tile" style="background:#333;box-shadow:0 4px 0 #000;min-width:90px;" onclick="mgTablesChoose(0)">🎲 Mezcla</button>`;
    document.getElementById('mg-area').innerHTML =
        `<div class="num-tiles" style="max-width:400px;margin:10px auto;">${tiles}</div>`;
}
/* Construye la tabla completa (opcionalmente resaltando cada fila) */
function buildTableChart(table, celebrate) {
    let rows = '';
    for (let i = 1; i <= 10; i++) {
        rows += `<div class="trow"${celebrate ? ` style="animation-delay:${i * 0.06}s"` : ''}>
            <span class="tq">${table} × ${i}</span><span class="teq">=</span><span class="ta">${table * i}</span></div>`;
    }
    return `<div class="table-chart" style="--tcol:${TABLE_COLORS[table] || '#6C5CE7'}">${rows}</div>`;
}
/* Paso 1: al elegir una tabla, se puede estudiar antes de jugar */
function mgTablesChoose(table) {
    playClick();
    mg.table = table;
    if (table === 0) { mgTablesPlay(); return; }   // mezcla: directo a jugar
    document.getElementById('mg-instructions').innerText = `📖 Estudia la tabla del ${table}. Cuando estés lista, ¡a jugar!`;
    document.getElementById('mg-feedback').innerHTML = '';
    document.getElementById('mg-area').innerHTML = buildTableChart(table);
    document.getElementById('mg-controls').innerHTML =
        `<button class="btn" style="background:#10AC84;box-shadow:0 6px 0 #0a8f6d;" onclick="mgTablesPlay()">🎮 ¡A jugar!</button>
         <button class="btn" style="background:#9370DB;box-shadow:0 6px 0 #6A5ACD;" onclick="mgTablesSpeakTable()">🔊 Escuchar</button>`;
}
/* Lee la tabla en voz alta (locutor) */
function mgTablesSpeakTable() {
    if (!mg || !mg.table) return;
    const parts = [];
    for (let i = 1; i <= 10; i++) parts.push(`${mg.table} por ${i} es ${mg.table * i}`);
    speak(parts.join('. '), { rate: 1.0 });
}
function mgTablesPlay() {
    playClick();
    mg.round = 1; mg.total = 10; mg.combo = 0; mg.bestCombo = 0; mg.correctCount = 0; mg.firstTry = 0;
    mg.queue = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    mgUpdateHud();
    mgTablesRound();
}
function mgTablesRound() {
    const b = mg.queue[mg.round - 1];
    const a = mg.table === 0 ? (2 + Math.floor(Math.random() * 8)) : mg.table;
    mg.a = a; mg.b = b; mg.product = a * b; mg.tries = 0;
    // La primera ronda es multiplicación normal; luego se mezclan los retos
    mg.challenge = mg.round === 1 ? 'product' : TABLE_CHALLENGES[Math.floor(Math.random() * TABLE_CHALLENGES.length)];
    if (mg.challenge === 'skip') {
        mg.skipPos = 2 + Math.floor(Math.random() * 4);   // 2..5
        mg.answer = mg.a * mg.skipPos;
    } else if (mg.challenge === 'missing') {
        mg.answer = mg.b;
    } else if (mg.challenge === 'truefalse') {
        if (Math.random() < 0.5) mg.shown = mg.product;
        else { const off = (Math.random() < 0.5 ? 1 : -1) * mg.a; mg.shown = (mg.product + off > 0) ? mg.product + off : mg.product + mg.a; }
        mg.tfAnswer = (mg.shown === mg.product);
        mg.answer = mg.product;
    } else {
        mg.answer = mg.product;
    }
    document.getElementById('mg-feedback').innerHTML = '';
    mgTablesRender();
}
function mgDots(color) {
    let dots = '';
    for (let r = 0; r < mg.a; r++) {
        let row = '';
        for (let c = 0; c < mg.b; c++) row += `<span class="dot" style="background:${color}"></span>`;
        dots += `<div class="dot-row">${row}</div>`;
    }
    return `<div class="dot-grid" style="border-color:${color}">${dots}</div>`;
}
function skipHelpHtml() {
    let seq = '';
    for (let i = 1; i <= mg.b; i++) {
        const v = mg.a * i;
        seq += `<span class="skip-n ${i === mg.b ? 'hi' : ''}">${v}</span>${i < mg.b ? '<span class="skip-ar">→</span>' : ''}`;
    }
    return `<div class="skip-line"><div class="skip-title">Cuenta de ${mg.a} en ${mg.a}:</div>${seq}</div>`;
}
function mgTablesRender(showHelp) {
    const color = TABLE_COLORS[mg.table] || '#6C5CE7';
    let stars = '';
    for (let i = 0; i < mg.total; i++) stars += `<span class="pstar ${i < mg.correctCount ? 'on' : ''}">${i < mg.correctCount ? '⭐' : '·'}</span>`;
    const comboTag = mg.combo >= 2 ? `<span class="combo">🔥 Combo x${mg.combo}</span>` : '';
    const header = `<div class="mg-progress">Ronda ${mg.round}/${mg.total} · Tabla ${mg.table === 0 ? 'mezclada 🎲' : 'del ' + mg.table} ${comboTag}</div>
        <div class="pstar-row">${stars}</div>`;
    const inst = document.getElementById('mg-instructions');
    let body = '';

    if (mg.challenge === 'product') {
        inst.innerText = `Toca el resultado de ${mg.a} × ${mg.b}`;
        const tiles = mgProductOptions(mg.a, mg.b).map(n => `<button class="num-tile" onclick="mgTablesPick(${n})">${n}</button>`).join('');
        body = `<div class="challenge-tag">✖️ Multiplica</div>
            <div class="mg-eq" style="color:${color}">${mg.a} × ${mg.b}</div>
            ${mgDots(color)}<div style="font-size:0.85em;color:#666;">${mg.a} fila(s) de ${mg.b}</div>
            ${showHelp ? skipHelpHtml() : ''}<div class="num-tiles">${tiles}</div>`;
    } else if (mg.challenge === 'missing') {
        inst.innerText = `¿Por cuánto multiplicas ${mg.a} para llegar a ${mg.product}?`;
        const tiles = mgFactorOptions(mg.b).map(n => `<button class="num-tile" onclick="mgTablesPick(${n})">${n}</button>`).join('');
        body = `<div class="challenge-tag">🧩 Factor que falta</div>
            <div class="mg-eq" style="color:${color}">${mg.a} × ⬜ = ${mg.product}</div>
            ${showHelp ? skipHelpHtml() : ''}<div class="num-tiles">${tiles}</div>`;
    } else if (mg.challenge === 'truefalse') {
        inst.innerText = `¿Esta multiplicación es correcta?`;
        body = `<div class="challenge-tag">✅❌ ¿Verdadero o Falso?</div>
            <div class="mg-eq" style="color:${color}">${mg.a} × ${mg.b} = ${mg.shown}</div>
            ${showHelp ? `<div class="skip-line"><div class="skip-title">Lo correcto es ${mg.a} × ${mg.b} = ${mg.product}</div></div>` : ''}
            <div class="num-tiles">
                <button class="num-tile" style="background:#10AC84;box-shadow:0 4px 0 #0a8f6d;min-width:120px;" onclick="mgTablesPickTF(true)">✅ Verdadero</button>
                <button class="num-tile" style="background:#EE5253;box-shadow:0 4px 0 #b83b3b;min-width:120px;" onclick="mgTablesPickTF(false)">❌ Falso</button>
            </div>`;
    } else if (mg.challenge === 'skip') {
        inst.innerText = `¿Qué número falta en la cuenta?`;
        let seq = '';
        for (let i = 1; i <= 5; i++) {
            seq += (i === mg.skipPos) ? `<span class="skip-n hi">?</span>` : `<span class="skip-n">${mg.a * i}</span>`;
            if (i < 5) seq += '<span class="skip-ar">→</span>';
        }
        const tiles = mgProductOptions(mg.a, mg.skipPos).map(n => `<button class="num-tile" onclick="mgTablesPick(${n})">${n}</button>`).join('');
        body = `<div class="challenge-tag">🪜 Cuenta de ${mg.a} en ${mg.a}</div>
            <div class="skip-line" style="font-size:1.15em">${seq}</div>
            ${showHelp ? `<div class="skip-line"><div class="skip-title">El número que falta es ${mg.answer}</div></div>` : ''}
            <div class="num-tiles">${tiles}</div>`;
    } else if (mg.challenge === 'write') {
        inst.innerText = `Escribe el resultado de ${mg.a} × ${mg.b}`;
        body = `<div class="challenge-tag">⌨️ Escribe la respuesta</div>
            <div class="mg-eq" style="color:${color}">${mg.a} × ${mg.b} =</div>
            ${mgDots(color)}
            ${showHelp ? skipHelpHtml() : ''}
            <div class="write-row">
                <input type="text" id="mg-write-input" class="write-input" inputmode="numeric" autocomplete="off" placeholder="?" onkeydown="if(event.key==='Enter')mgTablesWrite()">
                <button class="btn write-check" onclick="mgTablesWrite()">✅</button>
            </div>`;
    }
    document.getElementById('mg-area').innerHTML = header + body;
    document.getElementById('mg-controls').innerHTML = '';
}
function mgProductOptions(a, b) {
    const correct = a * b;
    const distractors = new Set();
    const cands = [a * (b + 1), a * (b - 1), (a + 1) * b, (a - 1) * b, correct + 2, correct - 2, correct + a];
    for (const c of cands) { if (c > 0 && c !== correct) distractors.add(c); if (distractors.size >= 3) break; }
    let n = 1;
    while (distractors.size < 3) { if (correct + n > 0) distractors.add(correct + n); n++; }
    return shuffle([correct, ...[...distractors].slice(0, 3)]);
}
function mgFactorOptions(b) {
    const d = new Set();
    [b + 1, b - 1, b + 2, b - 2].forEach(c => { if (c >= 1 && c <= 12 && c !== b) d.add(c); });
    let n = 3;
    while (d.size < 3) { if (b + n <= 12) d.add(b + n); else if (b - n >= 1) d.add(b - n); n++; }
    return shuffle([b, ...[...d].slice(0, 3)]);
}
/* Resultado unificado para todos los tipos de reto */
function mgTablesResult(isCorrect) {
    const fb = document.getElementById('mg-feedback');
    if (isCorrect) {
        if ((mg.tries || 0) === 0) mg.firstTry++;   // acertó a la primera
        mg.combo++; if (mg.combo > mg.bestCombo) mg.bestCombo = mg.combo;
        mg.correctCount++;
        const bonus = mg.combo >= 3 ? 4 : 0;
        let msg = '¡Correcto! 🎉';
        if (mg.combo === 3) msg = '🔥 ¡Combo x3!';
        else if (mg.combo >= 5) msg = `🔥🔥 ¡Increíble, combo x${mg.combo}!`;
        fb.innerHTML = `<span style="color:#228B22;">${msg}</span>`;
        playCorrect(); launchConfetti(mg.combo >= 3 ? 40 : 22); buddyReact(false);
        speak(mg.combo >= 3 ? '¡Combo! ¡Excelente, Valery!' : '¡Excelente, Valery!', { pitch: 1.15 });
        mgReward(8 + bonus, 2); mgNext();
    } else {
        mg.combo = 0; mg.tries = (mg.tries || 0) + 1;
        fb.innerHTML = `<span style="color:#EE5253;">¡Buuuh! Mira la pista 👇</span>`;
        playWrong(); speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
        mgTablesRender(true);   // vuelve a dibujar con la ayuda
    }
}
function mgTablesPick(n) { mgTablesResult(n === mg.answer); }
function mgTablesPickTF(v) { mgTablesResult(v === mg.tfAnswer); }
function mgTablesWrite() {
    const input = document.getElementById('mg-write-input');
    if (!input) return;
    const val = parseInt(String(input.value).replace(/[^\d]/g, ''), 10);
    if (isNaN(val)) { showBuddyBubble('Escribe un número ✏️'); return; }
    mgTablesResult(val === mg.product);
}



/* =====================================================
   JUEGO 5: AVENTURA DE LAS TABLAS (del 1 al 10, escrito)
   Recorre las 10 tablas en orden. Cada tabla: escribe ×1 a ×10.
   3 pistas por tabla (se reinician al empezar cada tabla). Muy didáctico.
   ===================================================== */
function getJourneyMax() { return parseInt(lsGet('vmJourneyMax', '0'), 10) || 0; }
function setJourneyMax(n) { if (n > getJourneyMax()) lsSet('vmJourneyMax', String(n)); }

function mgJourneyStart() {
    mg = { id: 'journey' };
    document.getElementById('mg-title').innerText = '🚀 Aventura de las Tablas';
    mgUpdateHud();
    mgJourneyMap();
}
/* Mapa de las 10 tablas (camino a completar) */
function mgJourneyMap() {
    const max = getJourneyMax();
    document.getElementById('mg-instructions').innerText = max >= 10
        ? '¡Completaste la aventura! Toca una tabla para repasarla. 🌟'
        : 'Escribe las tablas del 1 al 10 para completar el nivel. ✏️';
    document.getElementById('mg-feedback').innerHTML = '';
    document.getElementById('mg-controls').innerHTML = max > 0
        ? `<button class="btn" style="background:#10AC84;box-shadow:0 6px 0 #0a8f6d;" onclick="mgJourneyPlayTable(${Math.min(max + 1, 10)})">▶️ ${max >= 10 ? 'Repasar tabla del 10' : 'Continuar (tabla del ' + (max + 1) + ')'}</button>`
        : `<button class="btn" style="background:#10AC84;box-shadow:0 6px 0 #0a8f6d;" onclick="mgJourneyPlayTable(1)">▶️ ¡Empezar por la tabla del 1!</button>`;
    let nodes = '';
    for (let t = 1; t <= 10; t++) {
        const done = t <= max, current = t === max + 1, locked = t > max + 1;
        const cls = 'jnode' + (done ? ' done' : '') + (current ? ' current' : '') + (locked ? ' locked' : '');
        const click = locked ? '' : `onclick="mgJourneyPlayTable(${t})"`;
        const badge = done ? '⭐' : (locked ? '🔒' : '▶️');
        nodes += `<div class="${cls}" ${click}><span class="jn-num">${t}</span><span class="jn-badge">${badge}</span></div>`;
    }
    const pct = Math.round(max / 10 * 100);
    document.getElementById('mg-area').innerHTML = `
        <div class="mg-progress">Tablas completadas: ${max}/10</div>
        <div class="jmap">${nodes}</div>
        <div class="jbar"><div class="jbar-fill" style="width:${pct}%"></div></div>`;
}
function mgJourneyPlayTable(t) {
    playClick();
    mg.table = t; mg.qIndex = 1; mg.hints = 3; mg.combo = 0; mg.hintShown = false;
    mgJourneyQuestion();
}
function mgJourneyQuestion() {
    mg.answer = mg.table * mg.qIndex; mg.tries = 0; mg.hintShown = false;
    document.getElementById('mg-instructions').innerText = `Tabla del ${mg.table} · escribe el resultado`;
    document.getElementById('mg-feedback').innerHTML = '';
    mgJourneyRender();
}
function mgJourneyDots(t, q, color) {
    let dots = '';
    for (let r = 0; r < t; r++) { let row = ''; for (let c = 0; c < q; c++) row += `<span class="dot" style="background:${color}"></span>`; dots += `<div class="dot-row">${row}</div>`; }
    return `<div class="dot-grid" style="border-color:${color}">${dots}</div>`;
}
function mgJourneyRender(showHelp) {
    const t = mg.table, q = mg.qIndex, color = TABLE_COLORS[t] || '#6C5CE7';
    let prog = '';
    for (let i = 1; i <= 10; i++) prog += `<span class="pstar ${i < q ? 'on' : ''}">${i < q ? '⭐' : (i === q ? '✏️' : '·')}</span>`;
    const dots = (mg.answer <= 30) ? mgJourneyDots(t, q, color) : `<div style="font-size:0.9em;color:#666;margin:6px 0;">${t} grupos de ${q}</div>`;
    let help = '';
    if (showHelp) {
        let seq = '';
        for (let i = 1; i <= q; i++) { seq += `<span class="skip-n ${i === q ? 'hi' : ''}">${i === q ? '?' : t * i}</span>${i < q ? '<span class="skip-ar">→</span>' : ''}`; }
        help = `<div class="skip-line"><div class="skip-title">Cuenta de ${t} en ${t}:</div>${seq}</div>`;
    }
    document.getElementById('mg-area').innerHTML = `
        <div class="mg-progress">Tabla del ${t} · ${q}/10</div>
        <div class="pstar-row">${prog}</div>
        <div class="mg-eq" style="color:${color}">${t} × ${q} =</div>
        ${dots}
        ${help}
        <div class="write-row">
            <input type="text" id="journey-input" class="write-input" inputmode="numeric" autocomplete="off" placeholder="?" onkeydown="if(event.key==='Enter')mgJourneyCheck()">
            <button class="btn write-check" onclick="mgJourneyCheck()">✅</button>
        </div>`;
    document.getElementById('mg-controls').innerHTML = `
        <button class="btn hint-btn" onclick="mgJourneyHint()" ${mg.hints <= 0 ? 'disabled' : ''}>💡 Pista (${mg.hints})</button>
        <button class="btn" style="background:#9370DB;box-shadow:0 6px 0 #6A5ACD;" onclick="mgJourneyMap()">🗺️ Mapa</button>`;
}
function mgJourneyHint() {
    if (mg.hints <= 0) { showBuddyBubble('¡Ya usaste tus 3 pistas de esta tabla! 💡'); playWrong(); return; }
    if (!mg.hintShown) { mg.hints--; mg.hintShown = true; }   // 1 pista por pregunta
    playClick();
    showBuddyBubble(`Cuenta de ${mg.table} en ${mg.table} 👇`);
    mgJourneyRender(true);
}
function mgJourneyCheck() {
    const input = document.getElementById('journey-input');
    if (!input) return;
    const val = parseInt(String(input.value).replace(/[^\d]/g, ''), 10);
    if (isNaN(val)) { showBuddyBubble('Escribe un número ✏️'); return; }
    const fb = document.getElementById('mg-feedback');
    if (val === mg.answer) {
        mg.combo++;
        const bonus = mg.combo >= 3 ? 2 : 0;
        mgReward(6 + bonus, 1);
        fb.innerHTML = `<span style="color:#228B22;">¡Correcto! ${mg.table} × ${mg.qIndex} = ${mg.answer} 🎉</span>`;
        playCorrect(); launchConfetti(mg.combo >= 3 ? 36 : 18); buddyReact(false);
        speak('¡Excelente, Valery!', { pitch: 1.15 });
        mg.qIndex++;
        if (mg.qIndex > 10) setTimeout(mgJourneyTableComplete, 800);
        else setTimeout(mgJourneyQuestion, 650);
    } else {
        mg.combo = 0; mg.tries++;
        fb.innerHTML = `<span style="color:#EE5253;">¡Buuuh! Usa una 💡 pista si la necesitas.</span>`;
        playWrong(); speak('¡Buuuh!', { pitch: 0.7, rate: 0.85 });
    }
}
function mgJourneyTableComplete() {
    setJourneyMax(mg.table);
    addGems(20); addStars(1); mgUpdateHud();
    const done = getJourneyMax();
    launchConfetti(90); playWin();
    if (mg.table >= 10) {
        setMgDone('journey'); addGems(100); mgUpdateHud();
        document.getElementById('mg-title').innerText = '🏆 ¡Aventura Completada!';
        document.getElementById('mg-instructions').innerText = '';
        document.getElementById('mg-area').innerHTML = `<div class="viz">
            <div style="font-size:3em">🏆🚀🌟</div>
            <div style="font-size:1.3em;font-weight:bold;color:#10AC84;">¡Aprendiste TODAS las tablas del 1 al 10, Valery!</div>
            <div class="viz-title">💎 +100 diamantes de premio final</div></div>`;
        document.getElementById('mg-feedback').innerHTML = '';
        document.getElementById('mg-controls').innerHTML = `
            <button class="btn" onclick="goMenu()">🗺️ Volver al mapa</button>
            <button class="btn" style="background:#EE5253;box-shadow:0 6px 0 #b83b3b;" onclick="mgJourneyStart()">🔄 Repasar</button>`;
        speak('¡Felicitaciones, Valery! ¡Aprendiste todas las tablas!', { pitch: 1.1 });
        renderMinigames();
    } else {
        document.getElementById('mg-title').innerText = `⭐ ¡Tabla del ${mg.table} completada!`;
        document.getElementById('mg-instructions').innerText = '';
        document.getElementById('mg-area').innerHTML = `<div class="viz">
            <div style="font-size:2.6em">⭐🎉</div>
            <div style="font-size:1.2em;font-weight:bold;color:#10AC84;">¡Completaste la tabla del ${mg.table}!</div>
            <div class="viz-title">💎 +20 diamantes · ${done}/10 tablas</div>
            ${buildTableChart(mg.table, true)}</div>`;
        document.getElementById('mg-feedback').innerHTML = '';
        document.getElementById('mg-controls').innerHTML = `
            <button class="btn" style="background:#10AC84;box-shadow:0 6px 0 #0a8f6d;" onclick="mgJourneyPlayTable(${mg.table + 1})">➡️ Tabla del ${mg.table + 1}</button>
            <button class="btn" style="background:#9370DB;box-shadow:0 6px 0 #6A5ACD;" onclick="mgJourneyMap()">🗺️ Ver mapa</button>`;
        speak(`¡Muy bien! Completaste la tabla del ${mg.table}`, { pitch: 1.15 });
    }
}