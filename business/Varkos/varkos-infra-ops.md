# Varkos — Infra y Ops

> Guardado 2026-04-13. Pendiente de retomar después de definir los planes.

---

## Stack tecnológico

- **VPS** (servidor propio)
- **n8n** — automatización y forms
- **Postgres** — base de datos de prospectos
- **Apify** — scraping de Google Maps/Reseñas

---

## Tabla Postgres: `varkos_prospects`

```sql
CREATE TABLE varkos_prospects (
  id              SERIAL PRIMARY KEY,
  client_name     VARCHAR(255) NOT NULL,
  google_maps_url VARCHAR(512) NOT NULL,
  apify_dataset_id VARCHAR(255),  -- nullable, se llena cuando Apify genera dataset
  plan_level      VARCHAR(10) NOT NULL,  -- N1 / N2 / N3
  active          BOOLEAN DEFAULT true,
  created_at      TIMESTAMP DEFAULT NOW(),
  cancelled_at    TIMESTAMP
);
```

---

## Forms n8n

### Alta de prospecto
- Nombre del cliente
- Google Maps URL o Profile ID
- Plan contratado (N1 / N2 / N3)
- Submit → INSERT en Postgres, `active = true`

### Cancelación
- Input: Google Maps URL o ID del cliente
- Submit → UPDATE `active = false`, `cancelled_at = NOW()`

> Se mantiene el registro histórico aunque cancelen — si regresan, se reactiva la línea.

---

## Workflow Monitoreo Diario

```
Schedule (diario 8am)
    ↓
Postgres → SELECT * FROM varkos_prospects WHERE active = true
    ↓
Para cada prospecto:
    HTTP Request → Apify API (dataset items)
    ↓
Code node → comparar con última lectura en Postgres:
    - ¿Score cambió ±X?
    - ¿Nueva reseña?
    - ¿Reseña sin respuesta?
    - ¿Nueva respuesta del cliente?
    ↓
├─ [sin cambios] → Postgres → INSERT nueva lectura
└─ [hay cambios] → Postgres → INSERT lectura + alertar (email/WhatsApp)
```

### Qué se guarda por lectura

```sql
CREATE TABLE varkos_readings (
  id                    SERIAL PRIMARY KEY,
  prospect_id           INT REFERENCES varkos_prospects(id),
  score                 INT,
  total_reseñas         INT,
  rating_promedio       DECIMAL(3,2),
  reseñas_sin_responder INT,
  fecha_lectura         TIMESTAMP DEFAULT NOW()
);
```

### Qué activa alerta
- Score cambió ±X puntos
- Nueva reseña sin leer
- Reseña nueva (cualquier rating)
- El cliente respondió algo

---

## Pendientes

- [ ] Definir estructura de la tabla y relaciones
- [ ] Armar forms de alta y cancelación en n8n
- [ ] Armar workflow de monitoreo diario
- [ ] Configurar Apify con los actors correctos
- [ ] Definir canal de alertas (email, WhatsApp, etc.)
- [ ] Testear end-to-end con prospecto de prueba
