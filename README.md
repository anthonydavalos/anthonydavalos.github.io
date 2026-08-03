# Anthony Davalos — Portafolio profesional

Sitio estático que presenta la experiencia profesional de Anthony Davalos en
ingeniería de software, automatización y ciberseguridad defensiva. También
incluye una trayectoria cuantitativa histórica acompañada de fuentes y el
contexto necesario para interpretar sus resultados.

## Tecnología

- Astro 7 y TypeScript estricto.
- Bootstrap, Bootstrap Icons, AOS, GLightbox, Swiper, Isotope, imagesLoaded y
  PureCounter.
- Fuentes Open Sans y Raleway servidas localmente.
- Salida estática preparada para GitHub Pages.

## Requisitos

- Node.js 24 LTS (la versión exacta figura en `.node-version`).
- npm, incluido con Node.js.

## Desarrollo local

```sh
npm ci
npm run dev
```

La aplicación mostrará la dirección local al iniciarse. Para generar y revisar
la versión estática:

```sh
npm run build
npm run preview
```

## Controles de calidad

Antes de abrir una solicitud de cambios, ejecuta:

```sh
npm run quality
npm run security
```

`quality` comprueba formato, lint, tipos, build, licencias y rutas críticas.
`security` revisa vulnerabilidades de dependencias de producción. Los mismos
controles se ejecutan automáticamente en solicitudes de cambios y ramas de
trabajo.

## Contenido y mantenimiento

- Publica únicamente información profesional que pueda respaldarse.
- Conserva porcentajes, cifras, premios y discrepancias con su contexto y
  fuentes correspondientes.
- Mantén los proyectos sensibles como borradores hasta que su repositorio haya
  sido revisado.
- No añadas credenciales, archivos de entorno, documentos personales ni
  material privado de referencia.
- Verifica la licencia y procedencia de cada recurso visual antes de añadirlo.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para el flujo de contribución y
[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) para la publicación prevista en
GitHub Pages.

## Rutas principales

- `/` — presentación profesional.
- `/proyectos/` — proyectos y sus estados.
- `/ciberseguridad/` y `/laboratorio/` — enfoque defensivo y aprendizaje.
- `/trayectoria-cuantitativa/` — reconocimientos y evidencia histórica.
- `/privacidad/`, `/terminos/` y `/licencias/` — información legal y avisos.

Se mantienen `/privacidad.html` y `/terminos.html` como rutas de compatibilidad.

## Licencia

El código de este repositorio se distribuye bajo la GNU General Public License
v3.0. Consulta [LICENSE](LICENSE) y
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para los avisos de
dependencias y fuentes.
