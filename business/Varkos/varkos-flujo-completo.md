# Varkos — Flujo Completo de Ventas
## Del primer contacto al cliente activo y la venta de equipo

> Documento operativo maestro. Reemplaza y unifica: varkos-infra-ops, varkos-entregables-niveles, varkos-plan-bruxelles, varkos-plan.
> Complementario a: varkos-expansion-framework.md (se mantiene como archivo independiente).

---

## Principio Central: Flujo Único, Datos Variables

El flujo es el mismo para todos los prospectos. La diferencia está en **qué datos tenemos disponibles** para alimentar cada fase.

| Caso | Datos disponibles | Implicación |
|---|---|---|
| **Caso A: Full** | Maps + Website + Social | Análisis completo, hook dinero calculado |
| **Caso B: Sin web** | Maps + Social | Análisis parcial, hook dinero estimado |
| **Caso C: Sin Maps ni web** | Nombre + Categoría + Ubicación | Solo podemos ofrecer crear la base |
| **Caso D: Nuevo / Por abrir** | Nada aún | Audit de mercado, luego construir desde cero |

> **No hay ramificación de flujo.** El proceso es secuencial. Lo que cambia es qué "slots" se llenan con datos reales y cuáles quedan vacíos — esos vacíos se convierten en **oportunidades de creación**, no en blockers.

**La regla:** si un prospecto no tiene algo (web, Maps, redes), eso se ofrece como servicio base de fundación. No es un "no podemos analizar" — es un "esto es lo primero que construiremos juntos".

---

## Mapa del Flujo Completo

```
BUSCAR PROSPECTO
    ↓
CLASIFICAR CASO (A/B/C/D) — ¿qué datos tenemos disponibles?
    ↓
ANALIZAR SEGÚN DATOS DISPONIBLES (score, servicios, competencia, reseñas, auditorías)
    ↓
CREAR ENTREGABLES CON SALESCRAFTER (carta teaser, presentación PPTX, resumen PDF)
    ↓
CARTA TEASER → Envío al prospecto
    ↓
REUNIÓN + PRESENTACIÓN INTRO (gratis)
    ↓
RETROALIMENTACIÓN (clasificar Stage [0-6] + propuesta de servicio N1/N2/N3)
    ↓
PRESENTACIÓN DIRIGIDA (para quienes aceptaron)
    ↓
MONITOREO DIARIO (infra automatizada)
    ↓
ESCALAMIENTO N1→N2→N3 + EQUIPO
```

---

## FASE 1 — Búsqueda y Clasificación del Prospecto

### Objetivo
Armar un pipeline de prospectos cualificados en la zona objetivo (1-2 ciudades).

### Proceso

1. **Scraping con Apify** — Buscar clínicas médicas/veterinarias/odontológicas en la zona por especialidad (dermatología, ortopedia, oftalmología, urgencias, etc.)

### Clasificación Inicial del Caso

En el mismo momento de extracción, se clasifica qué datos tenemos disponibles:

| Caso | ¿Maps? | ¿Website? | ¿Social? | Acción en análisis |
|---|---|---|---|---|
| **A** | ✓ | ✓ | ✓ | Análisis completo |
| **B** | ✓ | ✗ | ✓/✗ | Análisis parcial, web = oportunidad de creación |
| **C** | ✗ | ✗ | ✓/✗ | Solo datos base, Maps = primera creación |
| **D** | ✗ | ✗ | ✗ | Nada — se ofrece construir todo desde cero |

**Regla:** la clasificación NO cambia el flujo. Solo define qué datos alimentan el análisis y qué se oferta como "fundación".

### Datos que se extraen por prospecto (según caso)

| Dato | Caso A | Caso B | Caso C | Caso D |
|---|---|---|---|---|
| Score general (0-100) | ✓ | ✓ | Estimado | ✗ |
| Servicios en Google Maps | ✓ | ✓ | ✗ | ✗ |
| Servicios en website | ✓ | ✗ | ✗ | ✗ |
| Rating y número de reseñas | ✓ | ✓ | ✗ | ✗ |
| Response rate (% respondidas) | ✓ | ✓ | ✗ | ✗ |
| Competencia en la zona | ✓ | ✓ | ✓ | ✗ |
| Insights de reseñas | ✓ | ✓ | ✗ | ✗ |
| Redes sociales (IG, FB) | ✓ | ✓/✗ | ✓/✗ | ✗ |
| Website existente | ✓ | ✗ | ✗ | ✗ |
| Auditorías web (marketing, geo, SEO) | ✓ | ✗ | ✗ | ✗ |

### Qué ofrecer según el caso

| Caso | Lo que se oferta como "fundación" |
|---|---|
| **A** | Mejoras sobre lo existente — optimización |
| **B** | Creación de página web profesional |
| **C** | Creación de perfil Google Maps + página web |
| **D** | Paquete completo: Maps + web + redes + audit de mercado |

> **La conversación con el cliente:** "Vemos que tienen [X] pero no tienen [Y]. Eso es exactamente lo que podemos resolver primero — antes de hacer cualquier análisis, les construimos esa base para que después tengamos datos reales con los que trabajar. ¿Les parece si empezamos por ahí?"

### Hook dinero según caso

| Caso | Hook dinero disponible | Cómo se calcula |
|---|---|---|
| **A** | Calculado con precisión | Servicios no publicados + reseñas sin responder + volumen de búsqueda |
| **B** | Estimado parcial | Solo lo que podemos ver en Maps |
| **C** | Genérico | "Están invisibles para miles de pacientes que buscan lo que ustedes ofrecen" |
| **D** | N/A — se ofrece audit | "Antes de invertir en equipo o marketing, hay que saber si hay demanda real en la zona" |

### Criterio de priorización

| Prioridad | Tipo de clínica | Por qué |
|---|---|---|
| 1 | Especialidades de alto ticket: dermatología, ortopedia, oftalmología, odontología, cirugía estética | Mayor potencial de equipo + membresía |
| 2 | Clínicas pequeñas-medianas (2-10 médicos) | Necesitan variedad + marketing |
| 3 | Clínicas nuevas (abiertas < 2 años) | Momento de decisión más alto |
| 4 | Clínicas establecidas buscando cambiar/ampliar | Ya tienen flujo, solo necesitan el empujón |

---

## FASE 2 — Creación de Entregables con SalesCrafter

### Qué es SalesCrafter

SalesCrafter es la capa de inteligencia que toma todos los datos del análisis (score, servicios, reseñas, competencia, auditorías, histórico de menciones) y genera automáticamente todos los entregables personalizados para el prospecto:

- Carta teaser con hook dinero específico
- Presentación PPTX personalizada (slides 1-9)
- Resumen PDF post-reunión
- Dossier del prospecto con puntos débiles y fortalezas detectados

### Inputs que recibe SalesCrafter (según caso)

| Input | Caso A | Caso B | Caso C | Caso D |
|---|---|---|---|---|
| Datos del prospecto | ✓ | ✓ | ✓ | ✓ |
| Score y métricas | ✓ | ✓ | Estimado | ✗ |
| Servicios detectados vs. publicados | ✓ | ✓ | ✗ | ✗ |
| Insights de reseñas | ✓ | ✓ | ✗ | ✗ |
| Competencia en la zona | ✓ | ✓ | ✓ | ✗ |
| Hook dinero | Calculado | Parcial | Genérico | N/A |

### Outputs que genera (según caso)

**Caso A — Análisis completo:**
```
Carta teaser personalizada (PDF)
  → Hook dinero: $X MXN/mes sin capturar (calculado con datos reales)
  → Puntos débiles detectados en el análisis
  → Sin revelar métodos ni soluciones

Presentación PPTX personalizada
  → Cada slide con datos específicos del prospecto
  → Slide 4: cada oportunidad con dato real + analogía + costo estimado
  → Hook dinero en Slide 2 calculado con la fórmula

Resumen PDF post-reunión
  → 3 quick wins específicos del prospecto
  → Niveles de servicio con precios
  → Próximos pasos personalizados
```

**Caso B — Sin web:**
```
Carta teaser personalizada (PDF)
  → Hook dinero: estimado con base en lo visible en Maps
  → Mención: "Hay oportunidades que podemos cuantificar una vez que veamos su web"

Presentación PPTX personalizada
  → Slide 4: oportunidades basadas en Maps, con nota "web por confirmar"
  → Hook dinero estimado con asterisco
```

**Caso C — Sin Maps ni web:**
```
Carta teaser personalizada (PDF)
  → Hook: "Son invisibles para pacientes que buscan lo que ustedes ofrecen"
  → Sin número específico — se ofrece audit como primer paso

Presentación PPTX personalizada
  → Slide 2: sin score — "Aún no tenemos datos, pero podemos conseguirlos"
  → Slide 4: foco en qué les estamos ofreciendo construir
  → Hook dinero: genérico pero con potencial real
```

**Caso D — Por abrir / Sin datos:**
```
Carta teaser personalizada (PDF)
  → Hook: "Antes de invertir en marketing o equipo, hay que saber si hay demanda"
  → Se ofrece audit de mercado sin costo

Presentación PPTX personalizada
  → Foco en el audit y en la oportunidad de construir bien desde el inicio
  → Sin Slide 4 tradicional — se reemplazará con resultados del audit
```

### Dossier interno (para Oscar) — todos los casos

```
→ Puntos fuertes y débiles reales del prospecto
→ Insigths de temas recurrentes en reseñas (si disponibles)
→ Posibles objeciones anticipadas con contra-argumentos
→ Notas sobre doctores mencionados, frases clave del prospecto
→ **Caso y datos disponibles** (para saber qué tan profundo es el análisis)
```

### Ventaja clave

Sin SalesCrafter, la carta y presentación son genéricas y el hook dinero es una estimación aproximada. Con SalesCrafter, cada entregable dice exactamente qué encontró, por qué importa y cuánto cuesta — basado en los datos reales del análisis. Esto hace que el prospecto perciba valor real desde el primer contacto, no promesas vacías.

### Cuándo se ejecuta

SalesCrafter se ejecuta **después del análisis y antes de enviar la carta**. En flujo automático, es el paso que cierra la fase de prospección y abre la fase de contacto.

---

## FASE 3 — Carta Teaser (Entregable 1)

### Cuándo se envía
Después de tener el análisis completo del prospecto y antes de solicitar la reunión.

### Formato
- Sobre premium (azul profundo + dorado)
- Tipografía elegante, espacio en blanco generoso
- Impresa, no digital

### Contenido de la carta según caso

**Caso A y B:**
```
[Nombre del prospecto]

Después de revisar la presencia digital de [nombre de la clínica],
identificamos que están dejando ir aproximadamente $X MXN al mes
en oportunidad de crecimiento.

Solo 20 espacios disponibles este mes para un análisis completo
sin costo.

También podemos ayudarles a equipar su clínica con las mejores
marcas del mercado y financiamiento accesible.

[Nombre]
Varkos — Strategic Advice
[Teléfono/WhatsApp]
```

**Caso C — Sin Maps ni web:**
```
[Nombre del prospecto]

Después de revisar la presencia digital de [nombre de la clínica],
identificamos que actualmente son invisibles para miles de pacientes
que buscan exactamente lo que ustedes ofrecen en Google.

Solo 20 espacios disponibles este mes para un análisis completo
sin costo.

También podemos ayudarles a equipar su clínica con las mejores
marcas del mercado y financiamiento accesible.

[Nombre]
Varkos — Strategic Advice
[Teléfono/WhatsApp]
```

**Caso D — Por abrir:**
```
[Nombre del prospecto]

Antes de abrir una clínica, hay una pregunta que pocos se hacen:
¿ya hay demanda real para lo que van a ofrecer?

Hacemos un audit de mercado sin costo para responder esa pregunta
antes de que inviertan en equipo o marketing.

Solo 20 espacios disponibles este mes.

[Nombre]
Varkos — Strategic Advice
[Teléfono/WhatsApp]
```

### Reglas de la carta

- **Nunca revela el cómo.** Solo dice qué encontraron y que hay ayuda disponible.
- **Hook urgencia:** "Solo 20 espacios" — crea escasez sin ser agresivos.
- **Equipos mencionados brevemente** — plantamos la semilla sin pitching.
- **No menciona precios** — el precio se revela en la reunión.

### Generación

`DOCX → PDF → imprimir`. (Automatable con bot en el futuro.)

---

## FASE 4 — Reunión y Presentación Intro

### Objetivo de esta fase
Que el prospecto nos conozca, vea qué podemos ofrecer y recolectemos inteligencia. 

### Formato de la reunión

1. **Presentación presencial o videollamada**
2. **Duración:** 30-45 minutos
3. **Sin costo** — es puerta de entrada

### Slides de la presentación (confirmadas)

**Regla general de cada slide:** No solo mostrar el dato — explicar por qué importa, con analogía o ejemplo de la vida real cuando sea relevante.

```
Slide 1 — Portada
  Nombre del prospecto, Varkos — Strategic Advice, nombre de Oscar, fecha

Slide 2 — Tu Score (individual, sin promedio zona)
  Hook dinero: ~$X MXN/mes sin capturar

Slide 3 — Top 3 Fortalezas
  Rapport antes de criticar. Lo que están haciendo bien.

Slide 4 — Áreas de Oportunidad (Top 3)
  Tabla: Área | Diagnóstico | Potencial
  Mostrar los problemas con su explicación — por qué cada uno les cuesta dinero
  y cómo se conecta directamente con pacientes que pierden o dejan de llegar.
  Ver sección "Explicación de cada Oportunidad en Slide 4" abajo.

Slide 5 — Niveles de Servicio (N1/N2/N3)
  Precios: $499 / $3,500/mes / $10,000/mes
  + Tiempos de resultados: N1=1-2 años, N2=~1 año, N3=4-6 meses
  (Se presenta después de la retroalimentación)

Slide 6 — Equipos + Financiamiento
  1 ejemplo real: equipo, mensualidad, punto de equilibrio, ganancia

Slide 7 — Beneficios de expandir servicios

Slide 8 — Proyección Dinero

Slide 9 — CTA
```

### Slides según caso

**Caso A — Análisis completo:**
Todas las slides con datos reales. Hook dinero calculado con precisión.

**Caso B — Sin web:**
```
Slide 1 — Portada

Slide 2 — Tu Score
  Hook dinero: estimado con asterisco ("aproximadamente $X")
  Nota interna: "pendiente confirmar con web"

Slide 3 — Top 3 Fortalezas
  Basado en lo que podemos ver (Maps, social)

Slide 4 — Áreas de Oportunidad
  Oportunidades basadas en Maps
  Nota en al menos 1: "Esto se confirmará cuando veamos su web"

Slide 5 — Niveles de Servicio

Slide 6 — Equipos + Financiamiento

Slide 7 — Beneficios de expandir servicios

Slide 8 — Proyección Dinero

Slide 9 — CTA
```

**Caso C — Sin Maps ni web:**
```
Slide 1 — Portada

Slide 2 — Tu Presencia Digital (sin score numérico)
  "Aún no tenemos datos, pero podemos conseguirlos"
  Hook: "Son invisibles para miles de pacientes que buscan lo que ofrecen"

Slide 3 — Top 3 Fortalezas
  Solo si hay datos disponibles (social, referencias, etc.)
  Si no hay datos: "Apenas conocemos su clínica — eso cambiaremos"

Slide 4 — Lo que podemos construir juntos
  No hay oportunidades detectadas — hay oportunidades por crear:
    1. Perfil de Google Maps profesional
    2. Página web que convierta
    3. Estrategia de redes sociales

Slide 5 — Niveles de Servicio

Slide 6 — Equipos + Financiamiento

Slide 7 — Beneficios de expandir servicios

Slide 8 — Proyección Dinero

Slide 9 — CTA
```

**Caso D — Por abrir:**
```
Slide 1 — Portada

Slide 2 — La Pregunta que pocos se hacen
  "¿Ya hay demanda real para lo que van a ofrecer?"

Slide 3 — Qué hacemos nosotros
  Audit de mercado sin costo

Slide 4 — El proceso
  1. Audit de demanda en la zona
  2. Análisis de competencia
  3. Recomendación: abrir, ajustar o esperar

Slide 5 — Por qué ahora
  "Construir bien desde el inicio es más barato que corregir después"

Slide 6 — Niveles de Servicio (con audit incluido)

Slide 7 — Equipos + Financiamiento (para cuando confirmen demanda)

Slide 8 — Próximos pasos

Slide 9 — CTA
```

### Explicación de cada Oportunidad en Slide 4

Cada oportunidad en la Slide 4 sigue esta estructura:

```
OPORTUNIDAD: [Nombre del problema]
  ¿Qué vemos? — El dato específico encontrado en el análisis
  ¿Por qué importa? — Analogía o ejemplo de la vida real
  ¿Cuánto les cuesta? — Estimación concreta en dinero o pacientes perdidos
```

**Ejemplo — Reseñas sin responder:**
> **¿Qué vemos?** Su clínica tiene 4.0 estrellas con 533 reseñas. De esas, 0% han sido respondidas por el dueño.
> **¿Por qué importa?** Imagine que usted va a un restaurante nuevo. Busca reseñas en Google y ve que 12 personas se quejan del servicio. El dueño no ha respondido NI UNA. ¿Qué piensa? Que al dueño no le importa lo que usted piensa de él. Ahora imagine que el dueño hubiera respondido cada una — incluso las negativas, diciendo "lamento que no fue buena experiencia, por favor contáctenos". ¿Cambiaría su decisión? Sí. Eso es lo que pasa con cada paciente que les busca hoy.
> **¿Cuánto les cuesta?** Si de cada 10 personas que leen sus reseñas, 2 se van a la competencia por no ver respuesta — eso son X pacientes al mes que no llegan. Con un ticket promedio de $Y, eso son $Z perdidos mensualmente.

### Reglas de la Presentación Intro

1. **Nunca revelar el COMO.** Solo el QUÉ y el CUÁNTO.
2. **No dar el reporte completo.** El prospecto recibe un resumen de 2 páginas, no el informe técnico.
3. **No proponer servicios específicos todavía.** La propuesta viene después de la retroalimentación.

### Quick wins al final de la presentación

Antes de cerrar, dar **3 acciones priorizadas** que el prospecto puede empezar a hacer hoy sin contrato. Esto:
- Genera credibilidad
- Muestra que sabemos del negocio
- Aumenta la probabilidad de que quieran seguir conversando

---

## FASE 5 — Retroalimentación (El Paso Clave)

### La frase de transición

Después de terminar la presentación y antes de hablar de servicios:

> **"Todo lo que les hemos mostrado es lo que vemos desde afuera — el perfil de Google, las reseñas, la competencia. Nosotros tenemos identificadas las áreas de mayor oportunidad de crecimiento y optimización PERO… ustedes conocen su negocio por dentro. De todo lo que les presentamos,  ¿En qué sienten que les podríamos apoyar más?"**

### Por qué es importante

Este momento hace tres cosas:
1. **Invierte el poder.** El prospecto deja de ser receptor pasivo y se convierte en coconstructor del plan.
2. **Revela el Stage real.** Las respuestas de la retroalimentación confirman o corrigen lo que el análisis externo sugería.
3. **Hace que el prospecto se comprometa.** Quien dice "creo que nos falta esto" ya está parcialmente vendido a la solución.

### Las 5 preguntas de diagnóstico (Expansion Framework)

Usar estas preguntas como guía de conversación — no como interrogatorio. Escuchar, identificar patrones, clasificar Stage.

| # | Pregunta | Detecta |
|---|---|---|
| 1 | **"¿Cuántos servicios tienen publicados en Google y cuántos ofrecen realmente?"** | Stage 0-1 (oferta invisible) vs. Stage 2+ (ya publicaron) |
| 2 | **"¿Cuántos pacientes nuevos les llegan al mes por Google Maps y cuántos por redes sociales?"** | Stage 2 (tráfico) vs. Stage 3+ (ya tienen tráfico pero no cierran) |
| 3 | **"De cada 10 llamadas, ¿cuántas se convierten en cita?"** | Stage 3 (conversión) — confianza insuficiente |
| 4 | **"¿Cuántos pacientes regresan en los siguientes 6 meses?"** | Stage 4 (retención) — falta sistema de relación |
| 5 | **"Si se van de vacaciones 2 semanas, ¿la clínica funciona igual?"** | Stage 5-6 (liderazgo/estructura) — dependencia del dueño |

### Guía de interpretación rápida para Oscar

| Señal de respuesta | Stage probable |
|---|---|
| "No sabíamos que había que publicar los servicios" / < 5 servicios publicados | Stage 0-1 |
| "Nos encuentran pero no llaman" / Pocos pacientes por Maps | Stage 2 |
| "Llaman pero no agendas o llegamos y el paciente desconfía" | Stage 3 |
| "Los pacientes son de primera vez, no regresan" | Stage 4 |
| "Si yo no estoy, las cosas no funcionan igual" | Stage 5-6 |

### Casos C y D: El Stage se confirma en la reunión

Para prospectos sin Maps ni web (Casos C y D), el análisis inicial es limitado. El objetivo de la reunión es **confirmar el Stage real** preguntando:

- "¿Tienen perfil de Google Maps?" → Si no: crear es el primer paso
- "¿Tienen página web?" → Si no: web es parte de la solución
- "¿Cuántos servicios ofrecen y cuántos publicaron?"

**Regla para Casos C y D:** si no tienen Maps, web ni datos, el Stage real se confirma en la reunión. La propuesta inicial incluye construir la base (GBP + web) como servicio de fundación — esto puede venderse como:
- Servicio único de setup (no mensual)
- O incluido en N1 si el cliente decide suscribirse

### Qué hacer cuando el prospecto no responde la pregunta directamente

- Si evade: reformular con ejemplo. *"Por ejemplo, de los pacientes que atiende al mes, ¿cuántos vienen por primera vez y cuántos son repetición?"*
- Si dice "todo aplica": pedir que prioricen. *"Si tuviéramos que enfocarnos en solo una de estas áreas, ¿cuál sería la más urgente para ustedes?"*
- Si dice "no sé": normalizar. *"Es normal no tener el dato exacto — eso es parte de lo que medimos. Solo con que me des una idea más o menos."*

### Confirmar el Stage antes de proponer

> **"De lo que platicamos, me parece que están principalmente en la etapa donde el problema es [descripción del Stage]. Eso significa que lo primero que tenemos que resolver es [objetivo del Stage]. ¿Les suena exacto o ven algo diferente desde su perspectiva?"**

Obtener confirmación antes de pasar a la propuesta de servicio.

---

## FASE 6 — Clasificación por Stage y Propuesta de Servicio

### Tabla de conexión Stage → Servicio

| Stage | Nombre | Problema central | Objetivo del stage | Servicio Varkos | Cuándo hablar de equipo |
|---|---|---|---|---|---|
| **0** | Pre-Revenue | No hay ingresos aún | Validar demanda y posicionar antes de abrir | Audit de mercado (gratis) | Después del audit, cuando confirmen demanda |
| **1** | Fundaciones | Oferta confusa o invisible | Articular qué venden y diferenciarse | N1 ($499/mes) | En N1, cuando se publiquen servicios |
| **2** | Tráfico | No les encuentran | Ser encontrados para lo que ya son especialistas | N1 ($499/mes) + GBP | En Stage 2, como respuesta a demanda descubierta |
| **3** | Conversión | Llegan pero no cierran | Generar confianza suficiente para agendar | N2 ($3,500/mes) | En Stage 3, como contenido de confianza |
| **4** | Retención | Pacientes no regresan ni referieren | Sistema de relación y referidos | N2 ($3,500/mes) | En Stage 4, como motivo para regresar |
| **5** | Optimización | Dueño es el sistema | Liberar al dueño, documentar procesos | N3 ($10,000/mes) | En Stage 5, como amplificador de oferta premium |
| **6** | Escalabilidad | Funciona sin dueño, límite externo | Expandir fuentes de ingreso y estructura | N3 ($10,000/mes) + equipo | En Stage 6, como infraestructura de expansión |

### Regla: proponer el siguiente nivel, no el actual

| Si el prospecto está en... | Proponer... |
|---|---|
| Stage 0 | Audit gratis + configuración GBP inicial |
| Stage 1 | N1 para resolver oferta invisible |
| Stage 2 | N1 para resolver visibilidad |
| Stage 3 | N2 para resolver conversión |
| Stage 4 | N2 → escalar a N3 |
| Stage 5 | N3 — ejecución completa |
| Stage 6 | N3 + equipo — expansión |

### Tiempos de resultados por nivel

Antes de cerrar la propuesta, dar expectativa clara de tiempos:

> "¿En cuánto tiempo quieren ver resultados?"
> - **N1:** "Los verán entre 1 y 2 años — el monitoreo y diagnóstico起作用 poco a poco. Pero los verán sostenidamente."
> - **N2:** "Los verán aproximadamente en 1 año — la ejecución activa acelera el proceso."
> - **N3:** "Los verán entre 4 y 6 meses — gestión completa significa que las acciones se ejecutan desde la primera semana."

Esto alinea expectativas y justifica el salto de precio entre niveles.

### Qué decir en cada Stage al momento de proponer

**Stage 0:**
> "Lo que necesitan antes de abrir es validar que hay demanda en la zona y asegurar que cuando abran, Google ya los tenga bien posicionados. Hacemos un audit de mercado sin costo para ver qué oportunidades hay. Si el audit confirma que hay demanda, la configuración del perfil de Google es el primer paso — y eso lo pueden hacer con nosotros sin costo."

**Stage 1:**
> "Lo que vemos es que tienen más servicios de los que Google conoce. Eso significa que gente que busca exactamente lo que ustedes ofrecen no los encuentra. Lo primero es publicar lo que ya tienen y construir la propuesta de valor. Eso lo cover con N1 — monitoreo mensual, análisis de qué falta, y una asesoría al mes para resolverlo."

**Stage 2:**
> "El problema no es el servicio — es que no aparecen cuando alguien los busca para lo que son especialistas. N1 les da monitoreo mensual y las acciones específicas para cambiar eso. Si en un mes no vemos movimiento, seguimos ajustando."

**Stage 3:**
> "Ya les llegan pacientes, pero no se traducen en citas o en confianza suficiente para elegirlos. Eso se resuelve con un plan más activo — N2 incluye que nosotros ejecutemos las acciones del mes, no solo las recomendamos. Así ustedes se dedican a su clínica mientras nosotros resolvemos la parte digital."

**Stage 4:**
> "El mayor costo es adquirir un paciente nuevo. Si los pacientes que ya tienen no regresan, están gastando 5-7 veces más en adquisición de lo necesario. N2 empieza a resolver eso con el sistema de seguimiento, y N3 lo lleva al siguiente nivel con gestión completa."

**Stage 5:**
> "El punto donde están es que ya generan bien, pero están atrapados en el día a día. Necesitan que alguien maneje lo digital para que ustedes se concentren en lo que solo ustedes pueden hacer. N3 es exactamente eso — gestión completa del perfil y una red social, sin que ustedes tengan que tocar nada."

**Stage 6:**
> "Lo que tienen funciona y puede crecer. El siguiente paso es identificar nuevas fuentes de ingreso — nuevos servicios o equipos que generen procedimientos facturables. N3 cubre la operación, y juntos identificamos la siguiente oportunidad de equipo con financiamiento estructurado."

### Propuesta para Casos C y D: Servicio de Fundación

Para prospectos sin presencia digital, la propuesta incluye **crear la base**:

| Qué crear | Descripción | Precio sugerido |
|---|---|---|
| Perfil Google Business | Configuración completa de GBP con categorías, horarios, fotos | $1,500 MXN único |
| Página web básica | Web profesional de 3-5 páginas, optimizada para SEO local | Incluido en N1 o $3,000 único |
| Redes sociales setup | Configuración de IG/FB con estrategia inicial | $1,000 MXN único |

**Opciones de venta:**

1. **Servicio único de fundación** — Se vende antes de N1/N2/N3. El cliente decide después si quiere monitoreo.
2. **Incluido en N1** — Si el cliente acepta N1, el setup de GBP y web va incluido. Eso les da data real para monitorear.
3. **Mixto** — Setup de GBP único ($1,500) + N1 mensual. El web se hace después si hay demanda.

**Regla:** no cobrar N1/N2/N3 a alguien que no tiene Maps ni web. Primero se construye la base, luego se monitorea.

---

## Inventario Completo de Servicios Varkos

> **Nota:** Las auditorías son internas (base de la carta, presentaciones y estrategia de expansión). No se cobran al cliente.

---

### 1. GOOGLE BUSINESS PROFILE (GBP) — Creación o Rediseño

Mismo servicio para clínicas nuevas (crear desde cero) o clínicas establecidas (rediseñar cuando el perfil existe pero está mal configurado):

| Servicio | Tipo | Precio |
|---|---|---|
| Creación / Rediseño de perfil + 7 publicaciones iniciales | Único | $1,500 MXN |
| Monitoreo + notificaciones | Mensual | Incluido en N1 |
| Sugerencias + guías de mejora | Mensual | Incluido en N2 |
| Ejecución completa (actualizar, responder, optimizar) | Mensual | Incluido en N3 |
| Publicaciones GBP (ofertas, eventos, actualizaciones) | Mensual | Incluido en N3 (4/mes), Add-on 8/mes $500 MXN |

**Qué incluye la creación/rediseño:**
- Crear o corregir categoría correcta según especialidad
- Horarios, dirección, teléfono
- Fotos profesionales (guía para el cliente o las tomamos)
- Descripción optimizada
- Servicios listados correctamente
- Verificación del perfil (check azul)

---

### Redes Sociales (FB + IG + TikTok) — Creación o Rediseño

Mismo servicio para clínicas nuevas (crear desde cero) o clínicas establecidas (rediseñar cuando ya tienen cuentas pero están mal o inactivas):

| Servicio | Tipo | Precio |
|---|---|---|
| Creación / Rediseño Facebook | Único | $1,000 MXN |
| Creación / Rediseño Instagram | Único | $1,000 MXN |
| Creación / Rediseño TikTok | Único | $1,000 MXN |
| Paquete completo (FB + IG + TikTok) | Único | $2,500 MXN |
| 7 posts iniciales (2/semana × 1 mes) | Única | Incluido en setup |
| Monitoreo + notificaciones (comentarios, menciones, crecimiento) | Mensual | Incluido en N1 |
| Sugerencias + estrategia de contenido + guías de respuesta | Mensual | Incluido en N2 |
| Administración completa (publicar, responder, gestionar) | Mensual | Incluido en N3 |

---

### 3. PÁGINA WEB (Construcción o Rediseño)

Mismo servicio para clínicas nuevas (desde cero) o clínicas establecidas (rediseñar cuando ya tienen web y nos dan acceso):

| Opción | Estructura | Total |
|---|---|---|
| **Anual** | $2,799 construcción + $1,799 hosting al inicio | $4,598 MXN |
| **Construcción + mensual** | $2,799 al inicio + $200/mes hosting | $5,199 MXN |
| **Mensual** | $499/mes × 12 meses | $5,988 MXN |

**Qué incluye:**
| Incluido | Descripción |
|---|---|
| Diseño | Template profesional adaptado a la especialidad médica |
| Páginas | Home, Servicios, Sobre nosotros, Contacto (4-5 páginas) |
| SEO básico | Meta tags, estructura, mapa del sitio |
| Mobile responsive | Adaptado a teléfono |
| Formulario de contacto | Con validación básica |
| SSL | Certificado HTTPS |
| Google Maps integrado | Su perfil de GBP embebido |

**Add-on blog mensual:** $500 MXN/mes — posts de blog en conjunto con sus médicos para mejorar SEO y posicionamiento geo-local.

---

### 4. PUBLICIDAD PAGADA

| Servicio | Tipo | Precio |
|---|---|---|
| Setup Google Ads | Único | $1,500 MXN |
| Setup Facebook/Instagram Ads | Único | $1,500 MXN |
| Gestión mensual Google Ads | Mensual | $2,000 MXN/mes |
| Gestión mensual Facebook/Instagram Ads | Mensual | $2,000 MXN/mes |

> **Nota:** publicidad pagada es add-on independiente de los niveles N1/N2/N3.

---

### 5. CONSULTORÍA ESTRATÉGICA

| Servicio | Tipo | Precio |
|---|---|---|
| Plan de expansión (1 por año) | Único | Incluido en N3 |
| Secret Shopper (cliente misterioso) | Único | $5,000 MXN |

**Secret Shopper incluye:**
- 1 consulta/prueba como paciente normal
- 1 estudio o laboratorio adicional (si aplica)
- Reporte completo de hallazgos
- **Válido dentro de los primeros 2 meses de contratación**

---

### 6. PUBLICIDAD PAGADA

| Servicio | Tipo | Precio |
|---|---|---|
| Setup Google Ads | Único | $1,500 MXN |
| Setup Facebook/Instagram Ads | Único | $1,500 MXN |
| Gestión mensual Google Ads | Mensual | $2,000 MXN/mes |
| Gestión mensual Facebook/Instagram Ads | Mensual | $2,000 MXN/mes |

> **Nota:** publicidad pagada es add-on opcional en cualquier nivel N1/N2/N3.

---

### 7. CAMPANAS

Campañas temáticas para atraer pacientes y generar posicionamiento:

| Campaña | Ejemplo | Descripción |
|---|---|---|
| **Conciencia** | Cancer de mama, diabetes, salud cardíaca | Educación + oferta de servicio gratuito o优惠 |
| **Promoción** | Toma de presión gratis, consulta gratis, estudios de laboratorio | Evento temporal para generar leads |
| **Temporada** | Regreso a clases, vacaciones, Día de la Madre | Ofertas especiales por temporada |
| **Lanzamiento** | Nuevo servicio o equipo | Dar a conocer nueva capacidad |

| Servicio | Tipo | Precio |
|---|---|---|
| Diseño de campaña | Único | $1,000 MXN |
| Gestión mensual de campaña | Mensual | $1,500 MXN/mes |

> **Nota:** campañas son add-on opcional en cualquier nivel N1/N2/N3. Se pueden hacer 1-2 campañas por mes según demanda.

---

### 8. BLOG MENSUAL

| Servicio | Tipo | Precio |
|---|---|---|
| Posts de blog en conjunto con sus médicos | Mensual | $500 MXN/mes |

**Objetivo:** mejorar SEO y posicionamiento geo-local. Los posts se escriben con colaboración del médico (entrevista breve + revisión).

> **Nota:** blog es add-on opcional en cualquier nivel N1/N2/N3.

---

### 9. EQUIPO MÉDICO

| Servicio | Tipo | Precio |
|---|---|---|
| Venta de equipo con financiamiento | Por equipo | Mark-up % |
| Consultoría de equipamiento | Incluida | En N3 |

---

## Integración en N1 / N2 / N3

| Servicio | N1 ($499/mes) | N2 ($3,500/mes) | N3 ($10,000/mes) |
|---|---|---|---|
| **GBP** | Monitoreo + notificaciones | + Sugerencias + guías | + Ejecución completa |
| **Publicaciones GBP** | — | — | Incluido (4/mes), Add-on 8/mes |
| **Redes (FB + IG + TikTok)** | Monitoreo + notificaciones | + Estrategia + guías | + 7 posts/mes + administración |
| **Ads pagados** | Add-on opcional | Add-on opcional | Add-on opcional |
| **Web** | — | — | Hosting incluido |
| **Blog mensual** | Add-on opcional | Add-on opcional | Add-on opcional |
| **Campañas** | Add-on opcional | Add-on opcional | Add-on opcional |
| **Auditorías** | Acceso a datos | Acceso completo | + Auditorías ilimitadas |
| **Consultoría** | — | — | Plan expansión (1/año) + Secret Shopper ($5K) |
| **Equipo médico** | Oportunidad 1/mes | Oportunidad + análisis | Consultoría completa |

---

## Servicio de Construcción Web — Desde Cero (o Rediseño)

### Stack técnico

| Componente | Qué se usa | Responsable |
|---|---|---|
| Desarrollo | Claude Code (AI) | Varkos |
| Servidor | VPS con EasyPanel + Nixpacks | Varkos |
| Repositorio | GitHub del cliente | Cliente (le damos acceso) |
| Dominio | Hostinger (comprado por el cliente) | Cliente |
| Mantenimiento | Actualizaciones y hosting | Varkos |

### Costos reales que paga Varkos

| Concepto | Costo mensual real |
|---|---|
| VPS (servidor) | ~$5-10 USD/mes |
| Dominio (renovación anual) | ~$10-15 USD/año |

**Costo real total año 1:** ~$70-135 USD (servidor + dominio)

---

## Cómo hablar de equipo según el Stage

| Stage | Qué decir de equipo |
|---|---|
| Stage 0 | "Cuando confirmen que hay demanda para un servicio, el equipo se justifica con los primeros pacientes que lleguen." |
| Stage 1 | "Al publicar fisioterapia, por ejemplo, van a descubrir si hay demanda real. Si la hay, el equipo se paga solo." |
| Stage 2 | "Ya hay demanda para rehabilitación — ahora la pregunta es si tienen capacidad. Si no, el equipo permite atender más sin más doctores." |
| Stage 3 | "El equipo quirúrgico y los testimonios post-operatorios generan confianza antes de que llegue el paciente." |
| Stage 4 | "Un programa de rehabilitación con equipo especializado es el mejor motivo para regresar a pacientes satisfechos." |
| Stage 5 | "El Plan de Rehabilitación Integral que pueden ofrecer con N3 requiere equipo especializado — eso es lo que propone la expansión." |
| Stage 6 | "Segunda ubicación o nuevo servicio especializado — el equipo es la infraestructura de esa expansión." |

> **Nota — Guía para el cierre de la reunión:** Nunca terminar sin siguiente paso concretado.
> - **Si aceptó:** "¿Cuándo quieren empezar — mañana o la siguiente semana?"
> - **Si quiere pensarlo:** "¿Qué información les faltaría para decidir? Me contactan directamente."
> - **Si rechaza:** "Sin problema. Les dejamos el resumen con los 3 quick wins para que lo revisen. Cuando quieran reconsiderar, aquí estamos."

---

## FASE 7 — Entregables Post-Reunión

### Entregable 3 — Resumen PDF post-reunión

Se entrega después de la reunión, independientemente del resultado.

**Contenido del resumen (1-2 páginas):**
- Score actual y contexto
- 3 quick wins (acciones que pueden empezar hoy sin contrato)
- Niveles de servicio con precios (N1/N2/N3)
- Próximos pasos concretos
- Datos de contacto

**Regla:** El reporte técnico completo NO se entrega nunca. Es la retención.

### Política de seguimiento

| Resultado | Seguimiento |
|---|---|
| Aceptó N1/N2/N3 | Enviar resumen PDF + agendar fecha de inicio |
| Quiere pensarlo | Esperar 5 días, mensaje breve: "¿Tuvieron chance de revisar el resumen?" |
| Rechazó | Agregar a monitoreo pasivo, re-contactar en 30-60 días con dato nuevo (score cambió, nueva reseña, etc.) |

---

## FASE 8 — Presentación Dirigida

### Para quién es
Para los prospectos que aceptaron el servicio (N1/N2/N3) después de la retroalimentación. Es la presentación de cierre que muestra el plan específico construido para ellos.

### Cuándo ocurre
Se agenda al final de la retroalimentación, una vez aceptado el servicio. Puede ser el mismo día o días después.

### Objetivo
Reforzar la decisión, mostrar el plan personalizado, y abrir la conversación sobre equipo si aplica.

### Diferencia con la Presentación Intro

| | Presentación Intro | Presentación Dirigida |
|---|---|---|
| **Para quién** | Todos los prospectos | Solo quienes aceptaron |
| **Cuándo** | Primera reunión | Después del cierre |
| **Contenido** | Score, oportunidades genéricas | Plan específico por Stage + servicio elegido |
| **Hook dinero** | Calculado por SalesCrafter | Confirmado con datos del prospecto |

### Contenido de la Presentación Dirigida

1. **Portada** — Nombre del prospecto, nivel de servicio contratado, fecha de inicio
2. **Tu Stage** — Clasificación resultante del Expansion Framework con explicación
3. **Plan de los próximos 90 días** — Acciones prioritarias basadas en el Stage
4. **Qué haremos nosotros** — Responsabilidades de Varkos según el nivel contratado
5. **Qué necesitarán de su lado** — Recursos o acceso necesarios (GBP, redes, etc.)
6. **Equipo médico — Oportunidades detectadas** — Los equipos más relevantes para su especialidad con ejemplo de financiamiento
7. **Próximos pasos** — Fecha de siguiente reunión o início

---

## FASE 9 — Monitoreo y Evolución del Cliente

### Workflow diario (automatizado con n8n)

```
Cada día a las 8am:
    → SELECT * FROM varkos_prospects WHERE active = true
    → Para cada prospecto:
        → HTTP Request → Apify API (dataset items)
        → Comparar con última lectura en Postgres:
            - ¿Score cambió ±X?
            - ¿Nueva reseña?
            - ¿Reseña sin responder?
            - ¿Nueva respuesta del cliente?
            - También se pueden monitorear las interacciones históricas de las redes sociales
            - Competencia (ver qué se puede monitorear)
            - El reporte de GBP cada Mes
        → Si hay cambios → INSERT nueva lectura + alertar (email/WhatsApp)
        → Si no hay cambios → solo guardar lectura
```

### Datos guardados por lectura

```sql
CREATE TABLE varkos_readings (
  id                    SERIAL PRIMARY KEY,
  prospect_id           INT REFERENCES varkos_prospects(id),
  score                 INT,
  total_resenas         INT,
  rating_promedio       DECIMAL(3,2),
  resenas_sin_responder INT,
  fecha_lectura         TIMESTAMP DEFAULT NOW()
);
```

### Qué activa alerta

- Score cambió ±5 puntos
- Nueva reseña sin leer
- Reseña nueva (cualquier rating)
- El cliente respondió algo públicamente

### Monitoreo según el caso inicial

**Caso A y B:** El monitoreo empieza desde el día 1 con datos reales.

**Caso C y D — Monitoreo diferido:**
Al inicio no hay datos para monitorear (no existe Maps, web ni reseñas). El monitoreo empieza cuando:
1. Se crea el perfil de Google Maps
2. Se crea la página web
3. Empiezan a llegar reseñas

**Flujo de monitoreo para Casos C y D:**
```
Día 0: Se acepta crear GBP + web
    ↓
Setup: Se crea el perfil, se configura todo
    ↓
Día 30: Primera lectura — baseline del nuevo perfil
    ↓
Monitoreo activo: N1/N2/N3 según lo contratado
    ↓
Cada día: se guardan lecturas, se alertan cambios
```

### Cuándo escalar N1 → N2 → N3

| Señal | Escalar a... |
|---|---|
| El cliente ejecuta bien las acciones de N1 y pide más | Ofrecer N2 — "Podemos ejecutarlo nosotros directamente" |
| N1 funcionando + hay margen para gestionar más | N2 |
| N2 funcionando + el cliente dice "es que no tengo tiempo de supervisar" | N3 |
| N3 estable + el cliente menciona expansión | Sesión de equipo + expansión |

### N3 — Cliente misterioso (Secret Shopper)

Uno de los servicios más atractivo de N3 es enviar un cliente misterioso que experimenta el servicio completo desde la perspectiva del paciente:

1. Se agenda una consulta/prueba como paciente normal
2. Se evalúa TODO: atención telefónica, recepción, trato del personal, tiempos de espera, instalación, claridad en cobros, seguimiento post-consulta
3. Al final se revela su identidad y se presenta el reporte completo con hallazgos reales
4. El cliente paga su propia consulta/prueba — Varkos cubre solo la gestión y el reporte

**Valor para el cliente:** ven su clínica como la ve el paciente, sin filtros. Los problemas que no sabían que existían se vuelven tangibles.

**Cómo usarlo como palanca de venta:** al presentar N3, mencionar: "Si contrato N3 completo, uno de los primeros pasos que podemos hacer es enviar a alguien anónimo a experimentar su servicio y documentar exactamente qué vive un paciente — desde que agenda hasta que sale. Eso les da información real que nadie más les puede dar."

**Secret Shopper como puente N1→N3:** cuando un cliente está en N1 y se le presenta el Secret Shopper como opción, es la herramienta más poderosa para demostrar que N3 vale la diferencia de precio.

### Cuándo hablar de equipo con cliente activo

1. **En cada asesoría de N1** — hasta 1 oportunidad de equipo por mes. Si hay interés, cotizar.
2. **En cada asesoría de N2** — misma regla. Más datos = mejor propuesta.
3. **En la sesión mensual de N3** — dedicada a expansión de servicios y equipamiento.
4. **Después de GBP** — cuando ya tenemos panorama real del espacio, servicios y pacientes.

### Regla del equipo como accelerante

> "Hay dos formas en que ayudamos a crecer un negocio como el suyo. La primera es atraer más pacientes con lo que ya tienen — eso es marketing y sistemas. La segunda es añadir servicios nuevos que generen ingresos adicionales — para eso tenemos acceso directo a equipamiento médico con financiamiento. Ambas las cover dentro de Varkos."

### Caducidad de la relación (qué hacer en cada escenario)

| Si el cliente... | Nosotros... |
|---|---|
| Se queda solo en N1 | Monitoreo pasivo, seguir en contacto, oferta GBP cuando esté listo |
| Quiere escalar a N2/N3 | Aplicar la lógica: entre más profundo, más datos para propuesta de equipo |
| Quiere solo sesión de GBP (sin N1/N2/N3) | Vender GBP standalone — mínimo $499 |
| Cancela N2 | Ofrecer regresar a N1 ($499), sesión GBP con descuento |
| Cancela N3 | Bajar a N2, mantener conversación de inteligencia activa |
| Pasa a GBP y tenemos panorama real | Hacer propuesta de equipo con datos reales |
| Compra equipo | Seguir monitoreando, generar próxima oportunidad de equipo |
| Se va a Stage 9 (quiere vender) | Referir a especialista M&A — fuera del alcance de Varkos |

---

## Resumen de Precios y Contratos

| Servicio | Precio | Contrato | Tiempo de resultados |
|---|---|---|---|
| Audit de mercado (Stage 0/D) | Gratis | — | — |
| **Setup GBP (Caso C)** | $1,500 MXN | Único | Setup en 1-2 semanas |
| **Web completa + hosting año 1** | $3,000 MXN + $1,500 hosting | Mixto | Web en 2-3 semanas |
| **Renovación hosting año 2+** | $2,500 MXN/año | Anual | — |
| **Setup redes sociales** | $1,000 MXN | Único | Setup en 1 semana |
| **Paquete fundación completo** | $4,500 MXN | Único | Todo en 3-4 semanas |
| Presentación 1 (gratis) | Gratis | — | — |
| Presentación 2 | $499 MXN | Único | — |
| Sesión GBP | $499-$1,500 MXN | Única | — |
| N1 — Monitoreo mensual | $499 MXN/mes | Mes a mes | 1-2 años |
| N2 — Ejecución mensual | $3,500 MXN/mes | Mes a mes | ~1 año |
| N3 — Gestión completa | $10,000 MXN/mes | Mes a mes | 4-6 meses |
| N3 — Secret Shopper | Cliente paga su consulta/prueba | Única dentro de N3 | — |
| Equipo médico | Mark-up por equipo | Según financiamiento | — |

### Paquetes de Fundación (Casos C y D)

| Paquete | Incluye | Precio | Renovación año 2+ |
|---|---|---|---|
| **Esencial** | GBP + Hosting año 1 | $4,500 MXN | $2,500/año |
| **Profesional** | GBP + Web + Hosting año 1 | $6,000 MXN | $2,500/año |
| **Completo** | GBP + Web + Redes + Hosting año 1 | $7,500 MXN | $3,000/año |

### Lógica de precios según caso

| Caso | Primer servicio | Siguiente paso |
|---|---|---|
| **A** | N1/N2/N3 según Stage | Escalar según evolución |
| **B** | N1 (con monitor de web pendiente) | Añadir web cuando la creen |
| **C** | Paquete Esencial/Profesional + N1 | Escalar cuando haya data |
| **D** | Audit gratis | Paquete según presupuesto si audit confirma demanda |

---

*Documento integrado. Complementario a varkos-expansion-framework.md (7 niveles + diagnóstico).*
*Fuentes integradas: varkos-infra-ops, varkos-entregables-niveles, varkos-plan-bruxelles, varkos-plan, varkos-expansion-framework.*
