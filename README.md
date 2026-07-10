# El Gran Desafio Matematico de Valery

Un juego educativo interactivo en HTML5, CSS3 y JavaScript diseñado para ayudar a Valery Anahy Tellez a repasar y recuperar su nota de matematicas de cuarto grado.

## Como Jugar

1. Abre `index.html` en un navegador web moderno
2. Haz clic en "Comenzar Aventura"
3. Completa los 6 niveles en orden
4. Gana medallas y alcanza la nota de 5.0!

## Niveles

| Nivel | Tema | Mecanica |
|-------|------|----------|
| 1 | Multiplicaciones Abreviadas | Multiplicar por 10, 100, 1000 |
| 2 | Divisiones Simples | Dividir con y sin residuo |
| 3 | Operaciones Combinadas | Orden de operaciones (PEMDAS) |
| 4 | Divisores, M.C.M. y M.C.D. | Seleccionar divisores y calcular |
| 5 | Geometria y Medicion | Perimetro, area, tiempo y relojes |
| 6 | Estadistica | Tablas de frecuencia y graficos |

## Estructura del Proyecto

```
matematicas-/
├── index.html          # Pagina principal del juego
├── css/
│   └── styles.css      # Estilos visuales
├── js/
│   ├── game-engine.js  # Motor del juego (estado, navegacion, puntuacion)
│   ├── levels.js       # Datos y renderizado de los 6 niveles
│   └── main.js         # Controlador principal y handlers de eventos
└── README.md           # Este archivo
```

## Caracteristicas

- Diseño responsive para tablet y movil
- Sonidos de feedback (correcto/incorrecto)
- Sistema de puntuacion y medallas
- Progreso guardado en localStorage
- Animacion de confeti al completar todos los niveles
- Interfaz amigable para niños

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor ni instalacion
