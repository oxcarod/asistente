# Market Suite x Varkos — Plan de Entregables y Niveles de Servicio

**Fecha:** 2026-04-07
**Estado:** Brainstorming completo — listo para implementar
**Empresa:** Varkos (Strategic Advice) — branding con logo existente

---

## Contexto

Market Suite аудита prospectos (clínicas médicas/veterinarias en México).
Se están afinando los últimos detalles del sistema. La implementación corre en otra sesión de Claude Code.
El plan estratégico para los $100K USD está en `C:\Users\oxcar\Documents\projects\asistente\100kusd.md`.

**Flujo de venta Varkos:**

```
Carta física (premium) → Si médico te recibe → Presentación PPTX → Resumen PDF para el médico
```

---

## Los 3 Entregables (Herramientas de Venta — NO SE COBRAN)

### Entregable 1: Carta-Presentación (Física) — TEASER

**Formato:** Sobre premium que se abre como invitación. Paleta azul profundo + dorado. Tipografía elegante. Imprimible en casa o en imprenta profesional.

**Propósito:** Primer contacto. Generar intriga → que el médico quiera recibirte.

**Regla:** No da detalles. Solo teasea que hay ayuda disponible en dos frentes (marketing + equipos). No revela nada que el prospecto pueda usar solo.

**Contenido:**

- Nombre del prospecto personalizado
- Hook dinero: "Está dejando ir $380K MXN/mes..."
- Hook urgencia: "Solo 20 espacios disponibles..."
- Una línea de equipos: "También ayudarle a equipar su clínica con las mejores marcas y financiamiento accesible"
- Tu nombre como contacto directo
- CTA:勾起 curiosidad para la cita (no dar más detalles)

**Generación:** DOCX → PDF → imprimir. Botón en debug.html: "Generar Carta".

---

### Entregable 2: Presentación PPTX (~10-12 slides) — LA PRESENTACIÓN COMPLETA

**Formato:** Archivo PPTX abierto en laptop. Diseño profesional, mismo estilo visual que la carta. Nombre "Varkos" en portada.

**Propósito:** Reunión de venta — mostrar valor completo, abrir las dos conversaciones (marketing + equipos).

**Contenido (slide por slide):**

1. **Portada** — Nombre del prospecto, "Varkos — Strategic Advice", tu nombre, fecha
2. **Score vs promedio zona** — Visual impactante: su posición actual vs competidores, qué significa esa posición en dinero perdido
3. **Top 3 problemas detectados** — Solo el problema (QUIÉN es el culpable, no la solución). No revelar cómo resolver.
4. **Top 3 oportunidades** — QUÉ podría hacer y cuánto podría ganar. El qué, no el cómo.
5. **Proyección dinero** — "Si resuelve estos 3 problemas, esto es lo que ganaría al mes / año"
6. **¿Cómo le podemos ayudar?** — Niveles de servicio N1/N2/N3 con precios en MXN/mes
7. **Plan de Alto Desempeño** — Resultados garantizados en 30 días (% aumento en flujo). Gancho de cierre.
8. **Equipos médicos** — Portfolio completo (~10,000 productos). Categorías. "Desde un consultorio hasta un hospital completo."
9. **Equipo + Financiamiento** — "Los equipos se pagan solos." Ejemplo ilustrativo real (precios pendientes del usuario). Plazos 12-36 meses.
10. **Beneficios de expandir servicios** — Cuánto genera un equipo nuevo en procedimientos facturables.
11. **Casos de éxito** — Anónimos, de la industria. No revelar诊所 de la zona.
12. **CTA** — Siguiente paso: agendar, firmar contrato, contacto Varkos.

**Regla:** Nunca revelar el CÓMO. Solo el QUÉ y el CUÁNTO. La implementación se vende en la conversación, no en la presentación.

**Regla:** Los entregables son gratis. No se cobran. Son herramientas de venta para cerrar paquetes.

**Generación:** python-pptx. Botón en debug.html → descarga .pptx

**Pendiente:** Precios de equipos más fáciles de vender (el usuario proporcionará después — equipos con menor capacitación, sin equipos auxiliares, pocos insumos).

---

### Entregable 3: Resumen Ejecutivo PDF — GUÍA POST-REUNIÓN

**Formato:** PDF de 1-2 páginas. El médico se lo lleva después de la reunión.

**Propósito:** Documento de referencia rápida. Que el médico tenga todo lo que necesita para tomar la decisión.

**Contenido:**

- Resumen score y posición (1 párrafo)
- Mejoras rápidas que podría implementar (quick wins vs transformación real)
- Niveles de servicio N1/N2/N3 con precios en MXN/mes
- Plan de Alto Desempeño (precio + resultados garantizados)
- Equipos médicos: categorías + mensaje financiamiento "se paga solo"
- Próximos pasos concretos (qué hacer hoy, esta semana, este mes)
- Tu contacto + CTA

**Regla:** Todo lo que necesita saber para tomar decisión está en este documento. Pero no revela el cómo.

**Generación:** python-docx → PDF. Botón en debug.html → descarga

---

## Niveles de Servicio (LO QUE SÍ SE COBRA)

| Nivel  | Nombre                  | Incluye                                                                                                                     | Precio                  |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **N1** | Diagnóstico + Monitoreo | Score, ranking, monitoreo mensual, reporte trimestral                                                                       | $2,000-$5,000 MXN/mes   |
| **N2** | Consultoría (Receta)    | N1 + plan de acción detallado, recomendaciones específicas, 2-4 asesorías/mes                                               | $5,000-$15,000 MXN/mes  |
| **N3** | Ejecución Completa      | N2 + nosotros lo hacemos: optimización de perfil, campañas de reseñas, contenido, gestión de redes, coordinación de equipos | $15,000-$40,000 MXN/mes |

**Contrato:** Mes a mes. Sin mínimo.

**Up-sell equipos médicos:** Todos los niveles incluyen opción de venta de equipos Beracah/LeWangs como complemento. En la presentación y resumen se abre esa conversación.

---

## Plan de Alto Desempeño (Garantía de Resultados en 30 Días)

**Problema:** Marketing no da resultados instantáneos. Clínicas cancelan antes de ver efecto.

**Solución:** Plan opcional con garantía de resultados medidos en % de aumento de flujo de pacientes.

**Resultados garantizados:**

- 10% aumento en flujo de pacientes en 30 días (clínicas pequeñas)
- 15-20% aumento en flujo de pacientes en 30 días (clínicas medianas)
- Acompañado de: incremento en reseñas Google, engagement en redes

**Qué incluye:**

- Campaña agresiva de generación de reseñas (20-50 reseñas nuevas)
- Relaunch / apertura flash si aplica
- Push de redes sociales con contenido de alto engagement
- Campaña de referidos con incentivo inmediato
- Landing page o promoción localizada

**Garantía:** Si no se cumple el % de aumento, se devuelve parte del dinero o se continúa gratis hasta ver impacto.

**Precio sugerido:** $8,000-$20,000 MXN (pago único o integrado en 2 meses de N3).

**Propósito:** Gancho de cierre para clientes que dudan. Reduce resistencia a firmar mes a mes.

**Integración con N1/N2/N3:** Se ofrece como "primer paso" antes de quedarse en un nivel. Ej: "Empecemos con el Plan de Alto Desempeño para ver resultados inmediatos, y después migramos a N2 para mantener el impulso."

---

## Equipos Médicos — Categorías y Financiamiento

**Enfoque:** Categorías + financiamiento. No precios específicos (~10,000 productos).

**Foco de venta:** Equipos más fáciles de vender — requieren poca capacitación, sin equipos auxiliares, pocos insumos recurrentes.

**Categorías para los entregables:**

- Imagenología (rayos X, ultrasonido, tomografía, resonancia)
- Laboratorio clínico
- Área de emergencias / urgencias
- Quirófanos y cirugía
- Cardiología y diagnóstico cardiovascular
- Neonatología
- Rehabilitación física
- Instrumental y consumibles
- Mobiliario médico

**Mensaje clave:** "Desde un consultorio básico hasta un hospital completo — tenemos todo lo que necesita."

**Modelo de financiamiento:**

- Plazos: 12-36 meses
- Tasa competitiva
- El equipo se paga con los ingresos que genera: mientras genera, se cubre la mensualidad. Al terminar de pagar, todo es ganancia pura.

**Propósito del mensaje:** Eliminar la barrera de "es mucha inversión". Si el equipo se paga solo, la objeción desaparece.

**Pendiente:** Precios de los equipos más fáciles de vender. El usuario proporcionará los datos reales (equipos con menor capacitación, sin equipos auxiliares, pocos insumos).

---

## Modelos de Ingreso

**Los entregables NO se cobran.** Son parte del proceso de venta. Se dan gratis para generar la cita y cerrar el paquete.

**Lo que SÍ se cobra:**

- Paquetes de servicio N1 / N2 / N3 (mensuales, mes a mes)
- Plan de Alto Desempeño (pago único o integrado en N3)

**Generación de entregables:** Son herramientas de venta, no productos vendidos.

---

## Pendiente de definir (residuales)

1. **Precios de equipos más fáciles de vender** — El usuario proporcionará los datos. Equipos con menor capacitación, sin equipos auxiliares, pocos insumos recurrentes.
2. **Ejemplo ilustrativo en presentación** — Una vez tenga los precios reales, ajustar el slide 9 (ejemplo de "equipos que se pagan solos").

---

## Resumen de Conceptos Clave

| Concepto      | Detalle                                                                                 |
| ------------- | --------------------------------------------------------------------------------------- |
| Empresa       | Varkos (Strategic Advice)                                                               |
| Logo          | Ya existe                                                                               |
| Flujo         | Carta → Presentación → Resumen → Cerrar N1/N2/N3                                        |
| Entregables   | Gratis (no se cobran)                                                                   |
| Se cobra      | N1 ($2k-$5k/mes), N2 ($5k-$15k/mes), N3 ($15k-$40k/mes), Plan Alto Desempeño ($8k-$20k) |
| Contrato      | Mes a mes, sin mínimo                                                                   |
| Equipos       | Beracah (~10,000 productos), financiamiento 12-36 meses                                 |
| Hook dinero   | "$380K MXN/mes dejando ir oportunidad"                                                  |
| Hook urgencia | "Solo 20 espacios este mes"                                                             |
| Regla de oro  | Nunca revelar el CÓMO — solo el QUÉ y el CUÁNTO                                         |

---

*Documento de brainstorming — la implementación corre en otra sesión de Claude Code en salesSystem.*