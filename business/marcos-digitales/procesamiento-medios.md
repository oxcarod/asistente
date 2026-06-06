# Procesamiento de Medios — Marcos Digitales

Scripts para automatizar la edición de fotos y videos al formato del marco (480x860).

## Formato del Marco

- **Resolución:** 480x860 pixeles (ratio ~0.558)
- **Orientación:** Vertical (retrato)

---

## Opción 1: Scripts de Python

### Requisitos
```bash
pip install Pillow
# Para videos还需要 ffmpeg instalado
```

### fotos_procesar.py
```python
from PIL import Image, ImageEnhance
import os
import sys

def procesar_foto(ruta_entrada, ruta_salida=None):
    """
    Procesa una foto para el marco digital:
    - Encuadra proporcionalmente a 480x860
    - Mejora contraste, color y nitidez
    """
    TARGET_WIDTH = 480
    TARGET_HEIGHT = 860
    RATIO = TARGET_WIDTH / TARGET_HEIGHT

    img = Image.open(ruta_entrada)

    # Mantener orientación natural (no rotar)
    ratio_foto = img.width / img.height

    if ratio_foto > RATIO:
        # Foto más ancha - cortar laterales
        new_width = int(img.height * RATIO)
        left = (img.width - new_width) // 2
        img = img.crop((left, 0, left + new_width, img.height))
    else:
        # Foto más alta - cortar arriba/abajo
        new_height = int(img.width / RATIO)
        top = (img.height - new_height) // 2
        img = img.crop((0, top, img.width, top + new_height))

    # Redimensionar final
    img = img.resize((TARGET_WIDTH, TARGET_HEIGHT), Image.LANCZOS)

    # Mejoras profesionales
    img = ImageEnhance.Contrast(img).enhance(1.2)
    img = ImageEnhance.Color(img).enhance(1.15)
    img = ImageEnhance.Sharpness(img).enhance(1.1)

    if ruta_salida is None:
        ruta_salida = f"{os.path.splitext(ruta_entrada)[0]}_procesada.jpg"

    img.save(ruta_salida, quality=95, optimize=True)
    print(f"✓ Guardado: {ruta_salida}")

def procesar_carpeta(carpeta_entrada, carpeta_salida=None):
    """Procesa todas las fotos en una carpeta"""
    if carpeta_salida is None:
        carpeta_salida = carpeta_entrada

    formatos = ('.jpg', '.jpeg', '.png', '.webp')
    procesados = 0

    for archivo in os.listdir(carpeta_entrada):
        if archivo.lower().endswith(formatos):
            ruta = os.path.join(carpeta_entrada, archivo)
            salida = os.path.join(carpeta_salida, archivo)
            try:
                procesar_foto(ruta, salida)
                procesados += 1
            except Exception as e:
                print(f"✗ Error con {archivo}: {e}")

    print(f"\n{procesados} fotos procesadas")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        procesar_carpeta(sys.argv[1])
    else:
        print("Uso: python fotos_procesar.py <carpeta>")
```

### videos_procesar.py
```python
import subprocess
import os
import sys

def procesar_video(ruta_entrada, ruta_salida=None):
    """
    Procesa un video para el marco digital:
    - Encuadra proporcionalmente a 480x860
    - Mejora contraste y saturación
    """
    if ruta_salida is None:
        base = os.path.splitext(ruta_entrada)[0]
        ruta_salida = f"{base}_procesado.mp4"

    cmd = [
        'ffmpeg', '-y', '-i', ruta_entrada,
        '-vf', f'scale=480:-1,crop=480:860,eq=contrast=1.1:saturation=1.15',
        '-c:v', 'libx264', '-preset', 'fast', '-crf', '23',
        '-c:a', 'aac', '-b:a', '128k',
        '-movflags', '+faststart',
        ruta_salida
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        print(f"✓ Guardado: {ruta_salida}")
    else:
        print(f"✗ Error: {result.stderr}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        archivo = sys.argv[1]
        if os.path.isdir(archivo):
            for f in os.listdir(archivo):
                if f.endswith(('.mp4', '.mov', '.avi')):
                    procesar_video(os.path.join(archivo, f))
        else:
            procesar_video(archivo)
    else:
        print("Uso: python videos_procesar.py <archivo.mp4 | carpeta>")
```

---

## Opción 2: FFmpeg Directo (sin Python)

### Para una foto:
```bash
# Requiere ImageMagick
convert foto.jpg -resize 480x860^ -gravity center -extent 480x860 -contrast -modulate 100,115 foto_procesada.jpg
```

### Para un video:
```bash
ffmpeg -i video.mp4 \
  -vf "scale=480:-1,crop=480:860,eq=contrast=1.1:saturation=1.15" \
  -c:v libx264 -preset fast -crf 23 \
  -c:a aac \
  video_procesado.mp4
```

### Procesar carpeta de videos:
```bash
for f in *.mp4; do ffmpeg -i "$f" -vf "scale=480:-1,crop=480:860,eq=contrast=1.1:saturation=1.15" -c:v libx264 "${f%.mp4}_proc.mp4"; done
```

---

## Verificaciones

- [ ] Instalar Python y Pillow
- [ ] Instalar ffmpeg (para videos)
- [ ] Probar con 5 fotos de ejemplo
- [ ] Probar con 2 videos de ejemplo
- [ ] Medir tiempo de procesamiento por archivo
- [ ] Definir si se procesa en local o en la nube

---

*Creado: 2026-05-13*