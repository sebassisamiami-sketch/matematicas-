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
      scene:'<span class="a-float">🍅</span><span class="a-bounce">🥔</span>' }
];

/* Nombres e íconos de cada nivel (para el mapa) */
const levelInfo = {
    1: { name:"Multiplica ×10", icon:"🛒", color:"lvl-c1" },
    2: { name:"Divisiones",     icon:"🍬", color:"lvl-c2" },
    3: { name:"Operaciones",    icon:"🏭", color:"lvl-c3" },
    4: { name:"Divisores/MCM/MCD", icon:"📚", color:"lvl-c4" },
    5: { name:"Geometría",      icon:"🔬", color:"lvl-c5" },
    6: { name:"Estadística",    icon:"🌾", color:"lvl-c6" },
    0: { name:"¡Desafío Final!", icon:"🏆", color:"lvl-boss" }
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

/* ============ ESTADO ============ */
let questions = [];
let currentQ = 0;
let score = 0, points = 0, gems = 0, streak = 0, bestStreak = 0;
let answers = [];
let hintUsed = [];
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
    if (level === 0) return [1,2,3,4,5,6].every(l => m[l]); // desafío final: todos los niveles
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
}

/* ============ MÚSICA ============ */
let musicTimer = null;
const melody = [523,523,587,659,659,587,523,494,440,440,494,523,523,494,494,0];
let melodyIndex = 0;
function playMelodyNote() {
    if (!musicOn) return;
    try {
        const ctx = getCtx(); const freq = melody[melodyIndex];
        if (freq > 0) {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'triangle'; osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.34);
        }
        melodyIndex = (melodyIndex + 1) % melody.length;
    } catch(e){}
}
function startMusic(){ getCtx(); if (musicTimer) clearInterval(musicTimer); musicTimer = setInterval(playMelodyNote, 320); }
function stopMusic(){ if (musicTimer) { clearInterval(musicTimer); musicTimer = null; } }
function toggleMusic() {
    musicOn = !musicOn;
    document.getElementById('music-toggle').classList.toggle('off', !musicOn);
    if (musicOn) { playClick(); startMusic(); } else { stopMusic(); }
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
    ['start-screen','progress-screen','shop-screen','game-screen','end-screen'].forEach(s => {
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
    if (level === 0) {
        pool = shuffle(allQuestions).slice(0, 10); // desafío final: 10 preguntas variadas
    } else {
        pool = shuffle(allQuestions.filter(q => q.level === level)).slice(0, 6); // 6 al azar del nivel
    }
    // Mezclamos también las opciones de cada pregunta
    questions = pool.map(q => {
        const opts = q.options.map((o, idx) => ({ text: o.text, correct: idx === q.answer }));
        const shuffledOpts = shuffle(opts);
        return { ...q, shuffledOpts };
    });
    currentQ = 0; score = 0; points = 0; gems = 0; streak = 0; bestStreak = 0;
    answers = new Array(questions.length).fill(null);
    hintUsed = new Array(questions.length).fill(false);
    showScreen('game-screen');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQ];
    document.getElementById('feedback').innerText = '';
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('question-text').innerHTML = q.q;

    const already = answers[currentQ];
    const optsDiv = document.getElementById('options');
    let html = '';
    q.shuffledOpts.forEach((opt, i) => {
        html += `<div class="option-row"><button class="btn btn-option" onclick="checkAnswer(${i}, this)">${opt.text}</button></div>`;
    });
    optsDiv.innerHTML = html;

    // Navegación
    document.getElementById('back-btn').disabled = currentQ === 0;
    document.getElementById('fwd-btn').disabled = !answers[currentQ];

    // Botón de pista: activo solo si no se ha respondido ni usado la pista
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) hintBtn.disabled = !!answers[currentQ] || !!hintUsed[currentQ];

    updateHUD();
    updateProgressBar();

    // Si ya fue respondida, mostrarla resuelta
    if (already) revealAnswered();
}

/* Pista 50/50: elimina una opción incorrecta (gratis, una vez por pregunta) */
function useHint() {
    if (answers[currentQ] || hintUsed[currentQ]) return;
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
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) hintBtn.disabled = true;
    playClick();
    showBuddyBubble('¡Quité una opción incorrecta! 💡');
}

function revealAnswered() {
    const q = questions[currentQ];
    const rec = answers[currentQ];
    const btns = document.querySelectorAll('#options .btn-option');
    btns.forEach((b, i) => {
        b.disabled = true;
        if (q.shuffledOpts[i].correct) b.style.background = '#32CD32';
        else if (i === rec.picked && !rec.correct) b.style.background = '#EE5253';
    });
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
    } else {
        streak = 0;
        fb.innerHTML = '<span style="color:#EE5253;">¡Ups! ❌</span>';
        playWrong();
        const b = document.getElementById('game-container');
        b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'), 500);
    }
    showExplanation(isCorrect);
    updateHUD();
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('fwd-btn').disabled = false;
}

function showExplanation(isCorrect) {
    const q = questions[currentQ];
    const box = document.getElementById('explanation-box');
    const correctText = q.options[q.answer].text;
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
    renderMap(); refreshStartHud(); applyEquip();
}

function endLevel() {
    document.getElementById('progress-bar').style.width = '100%';
    const total = questions.length;
    let rank = 1; // bronce
    if (score === total) rank = 3;        // oro: todo perfecto
    else if (score >= Math.ceil(total * 0.6)) rank = 2; // plata: 60%+
    saveMedal(currentLevel, rank);

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
    }

    // Nota actual y si completó todos los niveles
    const allDone = allLevelsDone();
    msg += ` 📊 Tu nota ahora es ${currentGrade().toFixed(1)}.`;
    if (allDone && currentLevel !== 0) {
        msg += ' 🎓 ¡Completaste TODOS los niveles! ¡Pasaste de 1.0 a 5.0! 🏆 Ahora prueba el 🏆 Desafío Final.';
    }

    document.getElementById('end-message').innerText = msg;
    showScreen('end-screen');
    playWin(); launchConfetti(currentLevel === 0 ? 120 : 80);
    showRewardPopup(currentLevel === 0 ? '👑 ¡Leyenda!' : '🏅 ¡Nivel superado!');
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

    renderShopSection('shop-backgrounds', backgrounds, 'bg', 'gems', owned, equip);
    renderShopSection('shop-characters', characters, 'char', 'gems', owned, equip);
    renderShopSection('shop-stickers', stickers, 'sticker', 'points', owned, equip);
    renderShopSection('shop-titles', titles, 'title', 'stars', owned, equip);
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
        medals: getMedals(), owned: getOwned(), equip: getEquip()
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
    applyEquip();
    renderMap();
    refreshStartHud();
    renderFontPicker();
    // Desbloquear audio en el primer gesto del usuario (móviles/navegadores lo exigen)
    document.addEventListener('pointerdown', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });
    // Saludo de la mascota
    setTimeout(() => showBuddyBubble('¡Hola Valery! Toca un nivel para empezar. 🚀'), 800);
}
document.addEventListener('DOMContentLoaded', init);