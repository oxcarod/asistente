# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Asistente Personal

Carpeta central de información personal, ideas, pendientes y datos. Es una knowledge base en markdown — **no es un proyecto de software**, no hay build, no hay tests.

## Estructura

```
asistente/
├── CLAUDE.md          ← Este archivo
├── MEMORY.md          ← Índice de memorias guardadas
├── 100kusd.md         ← Plan estratégico $100K USD (Beracah + LeWangs)
├── docs/
│   ├── PLAN.md        ← Plan de sesiones activo
│   ├── ideas-de-negocio.md
│   └── frases-para-discursos.md
├── health/
│   └── paleo_recipes.md
├── personal/
│   ├── about_me.md    ← Elevator pitch / presentación personal
│   └── memory_exercises.md
└── entertainment/
    └── watchlist.md
```

## Cómo funciona

- Todo está en markdown plano — el formato es la estructura.
- `MEMORY.md` es el índice de las notas con frontmatter de tipo `reference`.
- Las notas tienen frontmatter YAML con `name`, `description`, `type` para permitir recall.
- El usuario gestiona información pidiéndome que agregue, edite o consulte sus notas.

## Comandos implícitos (del usuario)

| Solicitud | Acción |
|---|---|
| "Agrega una nota sobre X" | Crear/actualizar archivo en carpeta correspondiente |
| "Tengo una idea: ..." | Guardar en `docs/ideas-de-negocio.md` |
| "Anota esto como pendiente" | Agregar a `docs/PLAN.md` |
| "Guarda este dato" | Guardar con frontmatter en carpeta adecuada |
| "Muéstrame mis notas" | Listar archivos en `MEMORY.md` |
| "Muéstrame el plan de $100K" | Leer `100kusd.md` |
| "Dame mi presentación" | Leer `personal/about_me.md` |
| "Bórralo de la watchlist" | Editar `entertainment/watchlist.md` |

## Notas clave del usuario

- **Negocios:** Beracah (~10,000 productos médicos), LeWangs (comercial/propulsor), meta $100K USD netos.
- **Diet:** Paleo — recetas en `health/paleo_recipes.md`.
- **Memory training:** Rutinas diarias documentadas en `personal/memory_exercises.md`.
- **3D printing:** Entusiasta — ve potencial en cada hogar.
- **Ventas:** Habilidad central — compra/remate, lectura de personas, pitch.
