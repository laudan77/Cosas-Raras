# Cosas Raras — guía para montar el sitio desde cero

Esta carpeta (`cosas-raras/`) tiene el código completo y exacto del sitio.
Sigue estos pasos en orden y vas a tener tu propia copia, en tu propia
cuenta de GitHub y Vercel, con tu propio dominio.

No hace falta saber programar para seguir esta guía — son puntos de
menú y comandos para copiar y pegar en la Terminal (Mac) o en Git Bash /
PowerShell (Windows).

## Lo que vas a necesitar

- Una cuenta de **GitHub** (gratis) → github.com
- Una cuenta de **Vercel** (gratis) → vercel.com — se crea con un clic
  usando tu cuenta de GitHub, no hace falta registrarte aparte.
- Un dominio comprado en cualquier proveedor (Namecheap, GoDaddy, o
  directamente en Vercel) — este paso es opcional al principio, el sitio
  funciona sin dominio propio con una URL tipo `tu-proyecto.vercel.app`.

## Paso 1 — Crear el repositorio en GitHub

1. Entra a **github.com/new**.
2. Nombre del repositorio: `cosas-raras` (o el que quieras).
3. Puede ser público o privado, es indistinto.
4. **No marques** "Add a README file" ni ningún otro checkbox — el
   repositorio debe quedar completamente vacío.
5. Dale **Create repository**. Te va a mostrar una URL parecida a
   `https://github.com/tu-usuario/cosas-raras.git` — guárdala, la usas
   en el paso siguiente.

## Paso 2 — Subir el código

1. Descomprime el archivo `cosas-raras.zip` que te compartieron.
2. Abre una Terminal dentro de la carpeta `cosas-raras` que quedó
   descomprimida (en Mac: clic derecho → "Nueva Terminal en la carpeta";
   en Windows: clic derecho → "Git Bash Here").
3. Corre estos comandos uno por uno, reemplazando la URL del paso 1:

```bash
git init
git add .
git commit -m "Sitio Cosas Raras"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/cosas-raras.git
git push -u origin main
```

4. Actualiza la página de tu repositorio en GitHub — ya deberías ver
   todos los archivos ahí.

## Paso 3 — Conectar Vercel

1. Entra a **vercel.com**, dale **Sign Up** o **Log In** y elige
   **Continue with GitHub**.
2. Autoriza a Vercel a ver tus repositorios (puedes limitarlo solo al
   repo `cosas-raras` cuando te lo pregunte).

## Paso 4 — Crear el proyecto

1. En el dashboard de Vercel, **Add New… → Project**.
2. Busca e importa el repositorio `cosas-raras`.
3. **Root Directory**: déjalo tal cual está (`./`) — no necesitas
   tocarlo, porque en tu repo el código ya está en la raíz.
4. **Framework Preset**: se detecta solo como "Next.js".
5. No necesitas agregar ninguna variable de entorno.
6. Dale **Deploy** y espera 1-2 minutos.

Cuando termine, Vercel te da una URL como `cosas-raras.vercel.app` — el
sitio ya está en vivo ahí.

## Paso 5 — Antes de compartirlo con clientes

Ve a **Settings → Deployment Protection** dentro del proyecto y
confirma que **Vercel Authentication** esté apagado. Si está prendido,
cualquier visitante va a tener que iniciar sesión en Vercel para ver el
sitio, lo cual no quieres para una página pública de ventas.

## Paso 6 — Conectar tu dominio propio (cuando lo compres)

1. Compra el dominio donde prefieras (Namecheap, GoDaddy, Vercel
   Domains, etc.).
2. En el proyecto de Vercel: **Settings → Domains → Add**, escribe tu
   dominio (ej. `cosasraras.co`).
3. Vercel te va a mostrar uno o dos registros DNS para agregar en el
   panel de tu proveedor de dominio (normalmente un registro `A` y uno
   `CNAME`, o si compraste el dominio en Vercel mismo, se conecta solo).
4. Espera unos minutos a que propague — Vercel te avisa cuando el
   dominio queda activo con HTTPS automático.

## Cómo editar el contenido del sitio

Todo el texto, precios, WhatsApp, email y colores de marca están en un
solo archivo, para que sea fácil de cambiar sin tocar el diseño:

- **`src/lib/content.ts`** — número de WhatsApp, correo, precios,
  descripciones de las lámparas (Aura, Frida), colores disponibles.
- **`public/images/`** — las fotos. Para cambiar una foto, reemplaza el
  archivo `.webp` con el mismo nombre, o agrega una nueva y actualiza la
  ruta en `content.ts`.
- **`src/app/globals.css`** y **`tailwind.config.ts`** — la paleta de
  colores de la marca (vino, oliva, rosa, crema).

## Para ver los cambios en tu computador antes de subirlos (opcional)

Si instalas [Node.js](https://nodejs.org) (versión 20 o más nueva),
puedes correr el sitio en tu propia máquina:

```bash
npm install
npm run dev
```

Y abrir `http://localhost:3000` en el navegador. Cada vez que guardes un
cambio en el código, la página se actualiza sola.

Cuando quieras publicar los cambios, solo tienes que hacer:

```bash
git add .
git commit -m "Describe qué cambiaste"
git push
```

Vercel detecta el push automáticamente y vuelve a publicar el sitio en
1-2 minutos, sin que tengas que hacer nada más en su página.
