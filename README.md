# Auditoría de Seguridad — AFP Horizonte

Aplicación web desarrollada para la Evaluación Sumativa N°3 de **TI3034 — Fundamentos de Seguridad de la Información** (INACAP Valparaíso, Otoño 2026).

El proyecto consiste en una auditoría de seguridad sobre el portal de clientes de una empresa ficticia, **AFP Horizonte** (rubro previsión / fondos de pensiones), realizada en el entorno controlado DVWA. Presenta tres ataques web, mide su gravedad con CVSS, construye una matriz de riesgo y propone medidas de prevención, mitigación y recuperación.

## Empresa auditada

- **Empresa:** AFP Horizonte (ficticia)
- **Rubro:** Previsión / fondos de pensiones
- **Datos que custodia el portal:** Fondos, RUT, datos laborales y de renta

## Stack técnico

- **React + Vite** — aplicación de una sola página
- **react-markdown** — renderiza el contenido de los archivos `.md` en el sitio
- **GitHub** — control de versiones
- **Vercel** — despliegue continuo (cada push actualiza el sitio)

## Enlaces

- **Repositorio:** https://github.com/javierdev06/auditoria_corjav
- **Sitio en producción:** https://auditoria-corjav.vercel.app

## Estructura del proyecto

auditoria_corjav/

├── docs_corjav/                 # Contenido de la auditoría (fuente de verdad)
│   ├── 01_resumen_corjav.md
│   ├── 02_sqli_corjav.md
│   ├── 03_xss_corjav.md
│   ├── 04_comandos_corjav.md
│   ├── 05_activos_corjav.md
│   ├── 06_matriz_corjav.md
│   ├── 07_controles_corjav.md
│   ├── 08_recuperacion_corjav.md
│   ├── 09_prompts_corjav.md      # Bitácora de uso de IA
│   └── img_corjav/               # Capturas de los ataques
│       ├── sqli_corjav.png
│       ├── xss_corjav.png
│       └── comandos_corjav.png
├── public/
│   └── img_corjav/               # Copia de las imágenes para el sitio
├── src/
│   ├── assets/
│   │   └── logito.png            # Logo personal (perfil flotante)
│   ├── components/
│   │   ├── Seccion.jsx           # Componente base que renderiza Markdown
│   │   ├── Resumen.jsx
│   │   ├── InyeccionSQL.jsx
│   │   ├── XSS.jsx
│   │   ├── Comandos.jsx
│   │   ├── Activos.jsx
│   │   ├── Matriz.jsx            # Incluye el mapa de calor visual
│   │   ├── Controles.jsx
│   │   ├── Recuperacion.jsx
│   │   └── Prompts.jsx
│   ├── App.jsx                   # Navegación + perfil flotante
│   └── App.css                   # Estilos
└── README.md
## Contenido de la auditoría

La auditoría se divide en dos informes:

**Informe A — Análisis de Vulnerabilidades**
1. Resumen de la empresa y su portal
2. Inyección SQL (CVSS 9.8 — Crítica)
3. XSS reflejado (CVSS 6.1 — Media)
4. Inyección de comandos (CVSS 9.8 — Crítica)

**Informe B — Matriz de Riesgo**
5. Activos de información según la industria
6. Matriz de riesgo con mapa de calor visual
7. Controles de prevención y mitigación
8. Mejora tecnológica y plan de recuperación (DR)

**Transversal**
9. Bitácora de uso de IA

## Arquitectura del contenido

Cada sección vive como un archivo `.md` en `docs_corjav/`. Un componente React por sección importa su archivo con `?raw` (función de Vite que trae el texto crudo) y lo pasa al componente `Seccion.jsx`, que lo renderiza con `react-markdown`. Las imágenes se referencian de forma relativa en los `.md` y el componente ajusta la ruta para que carguen desde `public/`.

La matriz de riesgo (`Matriz.jsx`) añade, además del texto, un mapa de calor construido como tabla con celdas coloreadas según probabilidad e impacto.

## Características de la aplicación

- Navegación por secciones en una sola barra
- Diseño oscuro con acento cian (estética de ciberseguridad)
- Animaciones suaves al cambiar de sección
- Tarjeta de perfil flotante con enlace al repositorio
- Mapa de calor interactivo para la matriz de riesgo

## Notas de desarrollo

- Los ataques se ejecutaron sobre el DVWA del curso (nivel de seguridad *Low*), con capturas como evidencia.
- Los puntajes CVSS se verificaron en la calculadora oficial de FIRST (first.org/cvss/calculator/3.1).
- Empresa y datos son ficticios; el análisis se construyó de forma plausible según el rubro previsional.
- Marco ético-legal: las técnicas se aplicaron solo sobre el entorno autorizado (Ley 21.459).

## Ejecutar en local