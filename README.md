# Filipo Café Resto Bar · Carta Digital 2026 🍽️

Carta digital oficial, interactiva y de alto rendimiento para **Filipo Café Resto Bar** (Salta, Argentina).

Desarrollada con **React 19**, **TypeScript**, **Tailwind CSS v4** y **Vite**, optimizada para dispositivos móviles (Mobile-First) y sincronizada en tiempo real con **Google Sheets**.

---

## 🌟 Características Principales

* 🔄 **Sincronización en Vivo con Google Sheets:** Los platos, precios, descripciones y disponibilidad se actualizan en tiempo real directamente desde una planilla pública de Google Sheets en formato CSV.
* 📦 **Fallback Offline Robusto:** Si el dispositivo pierde conexión o la API tarda en responder (timeout de 10s), la aplicación conmuta de forma transparente al menú local estático sin interrumpir la experiencia.
* 🖼️ **CDN Automático para Fotos de Google Drive:** Convierte de forma inteligente enlaces compartidos de Google Drive al CDN directo de alta velocidad (`lh3.googleusercontent.com`), evitando bloqueos y errores de carga.
* ⚡ **Compilación Standalone Single-File:** Genera un único archivo HTML (`dist/index.html`) con todos los scripts y estilos inyectados, ideal para subir a cualquier hosting estático o abrir localmente sin servidor.
* 🔍 **Búsqueda Instantánea con Filtros:** Buscador en vivo con sugerencias rápidas, soporte de teclado (<kbd>Escape</kbd>), sanitización de caracteres y conteo dinámico de coincidencias.
* 📱 **Navegación Móvil Editorial:** Paginación fluida por gestos táctiles (*swipe* horizontal), carrusel interactivo de categorías, selector desplegable tipo *bottom sheet* y botón flotante de acceso rápido.
* 💬 **Integración con WhatsApp:** Botón directo en el detalle de cada plato para consultar disponibilidad con un mensaje preconfigurado.
* ♿ **Accesibilidad & SEO Integral:** Estándares WCAG (A11y), atributos ARIA, navegación por teclado (<kbd>Enter</kbd>, <kbd>Espacio</kbd>, <kbd>Escape</kbd>), metadatos Open Graph, Twitter Cards y marcado enriquecido JSON-LD `schema.org/Restaurant` para posicionamiento en Salta.

---

## 🛠️ Stack Tecnológico

| Herramienta | Versión | Propósito |
| :--- | :--- | :--- |
| **React** | 19.2 | Librería de interfaz de usuario |
| **TypeScript** | 5.9 | Tipado estático estricto |
| **Vite** | 7.3 | Entorno de desarrollo ultrarrápido y empaquetador |
| **Tailwind CSS** | 4.3 | Sistema de diseño y estilos |
| **PapaParse** | 5.7 | Parser de CSV en streaming para Google Sheets |
| **Lucide React** | 1.34 | Iconografía vectorial |
| **vite-plugin-singlefile** | 2.3 | Bundling autónomo en un único `index.html` |

---

## 🚀 Instalación y Uso Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/filipo-nuevo-menu.git
cd filipo-nuevo-menu
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno (Opcional)
Copia el archivo de ejemplo:
```bash
cp .env.example .env
```
Edita `.env` con la URL CSV de tu planilla de Google Sheets:
```env
VITE_GOOGLE_SHEET_URL="https://docs.google.com/spreadsheets/d/e/TU_ID_DE_PUBLICACION/pub?output=csv"
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL que muestra la terminal (por defecto `http://localhost:5174`).

### 5. Compilar para producción
```bash
npm run build
```
El archivo de producción se generará en la carpeta `dist/index.html`.

### 6. Verificación de tipos TypeScript
```bash
npm run typecheck
```

---

## 📊 Estructura de la Planilla de Google Sheets

Para que la carta se sincronice correctamente con tu planilla de Google Drive / Sheets, publica la hoja como CSV (`Archivo > Compartir > Publicar en la web > Formato CSV`) con las siguientes columnas recomendadas:

| Columna | Obligatorio | Descripción | Ejemplo |
| :--- | :---: | :--- | :--- |
| **nombre** | Sí | Nombre del plato o bebida | *Tabla Filipo Especial* |
| **categoria** | Sí | Nombre de la sección | *Tablas* |
| **precio** | Sí | Valor numérico o con formato | *18500* o *$18.500* |
| **descripcion** | No | Detalle de ingredientes | *Lomo, pollo, papas fritas y salsas* |
| **imagen_url** | No | Enlace de Google Drive o web | `https://drive.google.com/file/d/...` |
| **categoria_foto** | No | Foto de portada de la sección | `https://drive.google.com/file/d/...` |
| **etiquetas** | No | Tags separados por coma | *Para compartir, Promo* |
| **disponible** | No | Estado (`si` / `no`) | *si* |
| **destacado** | No | Marca de plato estrella (`si` / `no`) | *si* |

---

## 📁 Estructura del Proyecto

```text
filipo-nuevo-menu/
├── public/                     # Favicons, logo y fotos de respaldo
│   ├── favicon.png
│   ├── logo.png
│   └── platos/                 # Imágenes estáticas locales
├── src/
│   ├── assets/                 # Logotipos e iconos de redes
│   ├── components/             # Componentes React modulares
│   │   ├── CategoryNav.tsx     # Barra de navegación por categorías
│   │   ├── CategorySheet.tsx   # Menú desplegable tipo índice
│   │   ├── DishCard.tsx        # Tarjeta individual de plato
│   │   ├── DishDetailModal.tsx # Modal de vista ampliada y WhatsApp
│   │   ├── FloatingCategoryButton.tsx # Botón flotante al scrollear
│   │   ├── Footer.tsx          # Pie de página y redes sociales
│   │   ├── Header.tsx          # Encabezado minimalista con buscador
│   │   ├── MenuSkeleton.tsx    # Esqueleto de carga animado
│   │   └── SearchBar.tsx       # Barra de búsqueda con sanitización
│   ├── config/                 # URLs de Google Sheets por defecto
│   ├── data/                   # Menú local de respaldo (24 secciones)
│   ├── hooks/                  # useMenu para consumo reactivo
│   ├── services/               # menuService con parser PapaParse y timeout
│   ├── types/                  # Definiciones de TypeScript
│   ├── utils/                  # Resolutor de CDN y formateadores
│   ├── App.tsx                 # Contenedor principal de la aplicación
│   ├── index.css               # Directivas Tailwind v4 y paleta oficial
│   └── main.tsx                # Punto de entrada de React
├── index.html                  # HTML con metadatos SEO y Schema.org
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración TypeScript bundler mode
└── vite.config.ts              # Configuración Vite y singlefile
```

---

## 🌐 Opciones de Despliegue

La carpeta `dist/` contiene todo lo necesario para ser publicada en cualquier servicio:

1. **Vercel / Netlify / Cloudflare Pages:**
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
2. **Servidor Apache / Nginx / CPanel:**
   * Sube directamente el archivo `dist/index.html` y la carpeta `dist/platos` a la carpeta raíz de tu hosting (`public_html`).
3. **GitHub Pages:**
   * Puedes usar la acción oficial de GitHub Actions para desplegar la carpeta `dist`.

---

## 📄 Licencia

Desarrollado para **Filipo Café Resto Bar** · Salta, Argentina. Todos los derechos reservados.
