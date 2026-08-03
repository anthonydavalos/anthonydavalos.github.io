# Despliegue en GitHub Pages

## Estado previsto

El sitio está configurado para la URL `https://anthonydavalos.github.io` y se
publicará desde el repositorio público del mismo nombre. Esta guía describe la
secuencia de publicación cuando el repositorio remoto haya sido creado y la
revisión de la rama de trabajo haya concluido.

## Antes de publicar

1. Confirma que el repositorio remoto no existe antes de crearlo y no sustituyas
   un repositorio existente.
2. Revisa la rama de trabajo mediante una solicitud de cambios hacia `main`.
3. Ejecuta `npm ci`, `npm run quality` y `npm run security`.
4. Comprueba que no se hayan incluido archivos de entorno, documentos privados,
   material de referencia, archivos comprimidos ni credenciales.
5. Confirma [LICENSE](../LICENSE) y
   [THIRD_PARTY_NOTICES.md](../THIRD_PARTY_NOTICES.md).
6. Verifica que la rama `main` tenga únicamente contenido revisado y que no se
   requiera una sobrescritura forzada.

## Publicación inicial

1. Crea el repositorio público `anthonydavalos.github.io` sin importar
   historial de repositorios archivados.
2. Conecta el remoto, publica la rama de trabajo y abre la solicitud de cambios
   hacia `main`.
3. Tras aprobar e integrar la solicitud, ve a **Settings → Pages** en GitHub.
4. Selecciona **GitHub Actions** como origen de publicación.
5. Guarda la configuración. El flujo `Deploy GitHub Pages` generará `dist` y
   publicará únicamente el resultado estático al recibir cambios en `main`.
6. Espera a que la ejecución de publicación termine correctamente.
7. Comprueba las rutas principales, las rutas heredadas y la página 404 en la
   URL pública.

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

No hay dominio personalizado configurado en esta versión. La publicación se
mantendrá en `anthonydavalos.github.io` hasta que se apruebe una configuración
de dominio independiente.
