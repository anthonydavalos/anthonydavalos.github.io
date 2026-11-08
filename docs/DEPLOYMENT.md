# Despliegue en GitHub Pages

## Estado actual

El sitio ya está publicado en [https://mcofit.com](https://mcofit.com) mediante
GitHub Pages. El repositorio público existente es
[anthonydavalos/anthonydavalos.github.io](https://github.com/anthonydavalos/anthonydavalos.github.io).
El origen de publicación en **Settings → Pages** es **GitHub Actions**.

La configuración de Astro utiliza `site: "https://mcofit.com"`, salida estática
y `trailingSlash: "always"`, sin `base` adicional. El dominio se utiliza en las
URL canónicas y en el [índice de sitemaps](https://mcofit.com/sitemap-index.xml).

## Preparar una actualización

1. Comprueba `git status` y conserva cualquier cambio local antes de cambiar de
   rama. Actualiza las referencias con `git fetch origin`.
2. Actualiza `main` mediante avance rápido (`git merge --ff-only origin/main`
   desde `main`) y crea una rama descriptiva para la tarea. Si hay divergencias,
   revísalas antes de continuar; no sobrescribas el historial.
3. Utiliza Node.js 24. La versión local indicada en `.node-version` es 24.14.0;
   los workflows seleccionan la versión principal 24. Confirma `node --version`
   y ejecuta `npm ci`, `npm run quality` y `npm run security`.
4. Revisa el diff y los archivos preparados para el commit. No incluyas archivos
   de entorno, documentos privados, material de referencia, archivos comprimidos
   ni credenciales. `_references/` debe permanecer excluida de Git y del sitio.
5. Confirma [LICENSE](../LICENSE) y
   [THIRD_PARTY_NOTICES.md](../THIRD_PARTY_NOTICES.md).
6. Cuando el cambio esté listo para revisión, publica la rama y abre una
   solicitud de cambios hacia `main`. No es necesario recrear el repositorio
   ni volver a configurar Pages para cada actualización.

## Revisión y despliegue

El workflow [Quality checks](../.github/workflows/quality.yml) ejecuta los
controles de formato, lint, tipos, compilación, licencias, páginas y revisión de
vulnerabilidades de producción en las solicitudes de cambios. Mantén la
protección de `main` y sus controles obligatorios antes de integrar cambios.

Al integrar una solicitud en `main`, el workflow
[Deploy GitHub Pages](../.github/workflows/deploy-pages.yml) se activa por el
push a esa rama. Instala las dependencias con `npm ci`, compila con
`npm run build`, sube únicamente `dist` y lo despliega en el entorno
`github-pages`. Los archivos fuente no se publican como artefacto del sitio.

El workflow también admite ejecución manual (`workflow_dispatch`). Para
republicar una versión aprobada, selecciona `main`; no despliegues una rama de
trabajo mediante esa opción.

Después de un despliegue:

1. Comprueba en **Actions** que `Deploy GitHub Pages` terminó correctamente
   para el commit integrado.
2. Revisa las rutas principales en `https://mcofit.com`, las rutas heredadas
   `/privacidad.html` y `/terminos.html`, y la respuesta de una ruta inexistente.
3. Comprueba las URL canónicas, `/sitemap-index.xml` y el sitemap al que apunta.
4. Revisa navegación e imágenes en móvil y escritorio cuando el cambio afecte
   a la presentación del sitio.

## Mantenimiento posterior

- Trabaja siempre desde una rama descriptiva y utiliza solicitudes de cambios.
- Mantén la protección de `main` con revisiones y controles de calidad
  obligatorios.
- No publiques directamente desde una rama de trabajo ni desde archivos fuente.
- Antes de cada publicación, revisa enlaces, evidencia de contenido, licencias
  y cambios en dependencias.
- Si se agrega un recurso visual, documenta su procedencia y confirma que no
  contiene metadatos personales o confidenciales.

## Dominio personalizado

El dominio personalizado es `mcofit.com`, con HTTPS habilitado. Su DNS se
administra en GoDaddy y su asociación con el sitio se gestiona en
**Settings → Pages** del repositorio existente.

Las actualizaciones habituales de contenido o código no requieren cambios de
DNS, eliminar el dominio ni repetir la verificación de propiedad. Conserva los
registros de verificación existentes. Si se cambia el dominio en el futuro,
revisa conjuntamente Pages, DNS, HTTPS y el valor `site` de Astro para mantener
coherentes los enlaces canónicos y los sitemaps.
