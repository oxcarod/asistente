# Cómo Subir Workflows a n8n.lewangs.com

Este documento documenta el proceso completo para subir workflows JSON a tu instancia de n8n usando la API REST.

---

## Credenciales

- **Email:** os.stark007@gmail.com
- **Password:** Cowboy007/
- **Base URL:** https://n8n.lewangs.com

---

## Paso 1: Autenticarse y Guardar Cookies

```bash
curl -s -X POST "https://n8n.lewangs.com/rest/login" \
  -H "Content-Type: application/json" \
  -d '{"emailOrLdapLoginId": "os.stark007@gmail.com", "password": "Cowboy007/"}' \
  -c /tmp/n8n-cookies.txt -b /tmp/n8n-cookies.txt \
  -w "\nHTTP_CODE: %{http_code}"
```

**Esperar:** HTTP 200 y respuesta JSON con `{"data": {...}}`

Las cookies se guardan en `/tmp/n8n-cookies.txt` y se reutilizan en siguientes requests.

---

## Paso 2: Subir el Workflow

```bash
curl -s -X POST "https://n8n.lewangs.com/rest/workflows" \
  -H "Content-Type: application/json" \
  -b /tmp/n8n-cookies.txt \
  -d @workflows/mi-workflow.json \
  -w "\nHTTP_CODE: %{http_code}" | tail -5
```

**Esperar:** HTTP 200 con `{"data": {"id": "abc123", "name": "Mi Workflow", ...}}`

El ID del workflow creado viene en `data.id` de la respuesta.

---

## Paso 3: Activar el Workflow

Usa la UI de n8n para activar. La API requiere un `versionId` que cambia con cada update, así que es más práctico activar manualmente:

1. Abre n8n en el navegador: https://n8n.lewangs.com
2. Ve al workflow creado
3. Toggle "Inactive" → "Active" (top-right)
4. **Importante:** Ve a Workflow Settings → activa "Available in MCP" para que el workflow sea ejecutable via MCP

---

## Listar Workflows

```bash
curl -s "https://n8n.lewangs.com/rest/workflows" \
  -b /tmp/n8n-cookies.txt | jq '.data[].name'
```

## Ver Detalle de un Workflow

```bash
curl -s "https://n8n.lewangs.com/rest/workflows/<ID>" \
  -b /tmp/n8n-cookies.txt | jq '.data.name, .data.active'
```

## Obtener Webhook URLs de Test

```bash
curl -s "https://n8n.lewangs.com/rest/workflows/<ID>" \
  -b /tmp/n8n-cookies.txt | jq -r '.data.nodes[] |
  select(.type == "n8n-nodes-base.webhook") |
  "\(.name): https://n8n.lewangs.com/webhook-test/\(.parameters.path)"
'
```

## Actualizar un Workflow Existente

```bash
curl -s -X PUT "https://n8n.lewangs.com/rest/workflows/<ID>" \
  -H "Content-Type: application/json" \
  -b /tmp/n8n-cookies.txt \
  -d @workflows/mi-workflow-v2.json | jq '.data.id'
```

---

## Notas Importantes

1. **Las cookies expiran** — si un request da 401, vuelve a hacer login
2. **El workflow debe estar activo** para que los webhooks funcionen en producción (`/webhook/`)
3. **MCP no es lo mismo que API REST** — el MCP usa un token de supergateway diferente (`start-mcp.sh`), no sirve para subir workflows
4. **n8n REST API requiere autenticación por cookies o API key** — el bearer token del MCP no funciona para la REST API

---

## Troubleshooting

### "Unauthorized" en POST /rest/workflows
- Las cookies expiraron → hacer login de nuevo

### "Workflow not available in MCP"
- El workflow no tiene MCP habilitado → ir a Workflow Settings en la UI y activar "Available in MCP"

### Workflow responde 404 en webhooks
- El workflow no está activo → activar en la UI

### "Could not find property option" al activar
- El endpoint `POST /activate` de la API es problemático → usar la UI para activar
