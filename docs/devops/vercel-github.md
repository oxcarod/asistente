---
name: Configurar Vercel con GitHub
description: Instrucciones para conectar deploy automático de Vercel con GitHub
type: reference
---

# Configurar Vercel con GitHub

> Cómo hacer deploy automático cada vez que haces push a tu repositorio.

---

## Paso 1: Crear el Deploy Hook en Vercel

1. Ve a **Project Settings → Git → Deploy Hooks**
2. Crea un hook (ej: "Auto Deploy")
3. Copia la URL generada

---

## Paso 2: Agregar el Webhook en GitHub

1. Ve a **Repository Settings → Webhooks → Add webhook**
2. Pega la **Vercel Deploy Hook URL**
3. Content type: `application/json`
4. Select: **Just the push event**
5. Enable: **SSL verification**
6. Add webhook

Listo. Cada push a tu repositorio disparará un deploy en Vercel automáticamente.

---

## Fix: "Author is required"

Si GitHub te pide un autor en el commit:

### Configurar el autor globally:

```bash
git config user.name "oxcarod"
git config user.email "oxcarod@hotmail.com"
```

### Verificar:

```bash
git config user.name
git config user.email
```

### Corregir el último commit:

```bash
git commit --amend --author="oxcarod <oxcarod@hotmail.com>"
```

### Hacer un commit de prueba para confirmar:

```bash
echo "# Updated" >> README.md
git add .
git commit -m "Update with proper author info"
git push origin master
```

> **Importante:** Usa el email asociado a tu cuenta de GitHub para que la atribución funcione correctamente.
