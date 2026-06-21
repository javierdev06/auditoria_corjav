# Bitácora de uso de Inteligencia Artificial

Durante esta evaluación utilicé inteligencia artificial como apoyo para construir la aplicación, darle estilo y redactar parte del informe. La herramienta principal fue Claude; también consulté Gemini en algunos puntos y usé la IA de VS Code (Copilot) en el código. En general yo proponía la idea, la estructura o el contexto, y la IA me entregaba el código, los estilos o el borrador, que luego integré, probé y ajusté al caso de AFP Horizonte. Las decisiones finales fueron mías.

## Reutilizar el estilo de la Evaluación 2

**Prompt:** "quiero que esta auditoria use el mismo estilo y las buenas practicas de mi web de la evaluacion 2 de fundamentos de seguridad, como la tarjeta de perfil flotante con mi logo"

**Herramienta:** Claude. **Sección:** App.

**Qué hice yo:** Aporté el código de mi proyecto anterior como referencia y pedí adaptar la tarjeta de perfil flotante a esta auditoría. La IA la ajustó a los colores del nuevo sitio (cian en vez de rojo) y yo la integré, manteniendo las buenas prácticas que ya había validado en la Evaluación 2.

## Resumen de la empresa

**Prompt:** "te paso el contexto de AFP Horizonte y los datos que custodia (fondos, rut, datos laborales y renta), armame el resumen del informe en base a eso"

**Herramienta:** Claude. **Sección:** 01_resumen.

**Qué hice yo:** Le di el contexto base de la empresa y la IA armó el resumen. Lo encontré largo y lo recorté yo hasta dejarlo en dos párrafos.

## Explicación de la inyección SQL

**Prompt:** "te explico como entendi la inyeccion sql con ' OR '1'='1, ayudame a redactarlo bien tecnico para el informe"

**Herramienta:** Claude. **Sección:** 02_sqli.

**Qué hice yo:** Aporté mi entendimiento del ataque y la IA me ayudó a redactarlo. Ajusté el ejemplo de consulta para que usara first_name y surname como en mi captura.

## CVSS de la inyección SQL

**Prompt:** "marque estas metricas en la calculadora para la sqli de una AFP, ayudame a redactar la justificacion del puntaje 9.8"

**Herramienta:** Claude. **Sección:** 02_sqli.

**Qué hice yo:** Marqué yo las métricas en la calculadora oficial y confirmé el 9.8. La IA me ayudó a redactar la justificación.

## Explicación del XSS

**Prompt:** "ayudame a redactar por que funciona el xss reflejado partiendo de que la pagina no limpia mi entrada"

**Herramienta:** Gemini. **Sección:** 03_xss.

**Qué hice yo:** Di la idea base y la IA me ayudó con la redacción. Ejecuté el ataque yo y tomé la captura del popup.

## Diferencia de severidad del XSS

**Prompt:** "ayudame a explicar por que el xss queda en medio y no en critico como la sqli y los comandos"

**Herramienta:** Gemini. **Sección:** 03_xss.

**Qué hice yo:** Planteé la duda y la usé para justificar por qué el XSS va más abajo en la matriz.

## Explicación de la inyección de comandos

**Prompt:** "ayudame a redactar como el ; encadena el ping con cat /etc/passwd y por que eso es controlar el servidor"

**Herramienta:** Claude. **Sección:** 04_comandos.

**Qué hice yo:** Di la idea del encadenamiento y la IA me ayudó a redactarla. Ejecuté el ataque, tomé la captura y verifiqué el CVSS 9.8.

## Análisis de activos

**Prompt:** "estos son los activos que identifique para la AFP (base de afiliados, fondos, credenciales, servidor), ayudame a redactarlos y relacionarlos con cada ataque"

**Herramienta:** Claude. **Sección:** 05_activos.

**Qué hice yo:** Identifiqué yo los activos según mi caso y la IA me ayudó a redactar el análisis y a conectarlos con cada ataque.

## Texto de la matriz de riesgo

**Prompt:** "ubique sqli y comandos en alta-critico y xss en media-alto, ayudame a redactar el texto de la matriz y la priorizacion"

**Herramienta:** Claude. **Sección:** 06_matriz.

**Qué hice yo:** Definí yo las ubicaciones de cada ataque y la IA me ayudó a redactar el texto y la priorización.

## Componente del mapa de calor

**Prompt:** "necesito el mapa de calor de la matriz como componente, con colores segun probabilidad e impacto y que muestre donde cae cada ataque"

**Herramienta:** Claude (apoyo de la IA de VS Code). **Sección:** 06_matriz.

**Qué hice yo:** Di la estructura que quería (filas, columnas, dónde cae cada ataque) y la IA generó el código. Lo integré y corregí el degradado de colores para que coincidiera con la materia.

## Controles de prevención y mitigación

**Prompt:** "ayudame a redactar los controles de los tres ataques ordenados por prioridad de la matriz, apoyados en owasp y nist"

**Herramienta:** Gemini. **Sección:** 07_controles.

**Qué hice yo:** Pedí el orden por prioridad y la IA redactó la base. Revisé que cada defensa coincidiera con su ataque.

## Plan de recuperación

**Prompt:** "ayudame a redactar la mejora tecnologica y el plan de recuperacion de una AFP con los pasos de respaldos, restaurar, notificar y aprender"

**Herramienta:** Claude. **Sección:** 08_recuperacion.

**Qué hice yo:** Di los pasos de la materia y la IA armó el borrador. Lo adapté a la AFP y agregué la Ley 19.628.

## Ley aplicable

**Prompt:** "ayudame a confirmar que ley de proteccion de datos aplica a una AFP chilena y cual al que ataca sin permiso"

**Herramienta:** Gemini. **Sección:** Transversal.

**Qué hice yo:** Consulté la normativa y mencioné la Ley 19.628 para los datos y la 21.459 para el marco del atacante.

## Componente para mostrar el contenido

**Prompt:** "quiero que cada seccion del informe se muestre en el sitio leyendo su archivo, ayudame con el componente"

**Herramienta:** Claude (apoyo de la IA de VS Code). **Sección:** App.

**Qué hice yo:** Di la idea de cómo quería que se mostrara cada sección y la IA generó el componente. Lo integré y lo probé en local.

## Estilo general del sitio

**Prompt:** "quiero que el sitio se vea profesional tipo auditoria, con fondo oscuro y acento cian, dame los estilos"

**Herramienta:** Claude. **Sección:** App.

**Qué hice yo:** Definí yo la dirección visual (oscuro con cian) y la IA me dio los estilos. Probé varias versiones y elegí la que más me gustó, ajustando el orden del contenido.

## Animaciones del sitio

**Prompt:** "agregale animaciones suaves al sitio, que las secciones aparezcan con un efecto y los botones reaccionen al pasar el mouse"

**Herramienta:** Claude. **Sección:** App.

**Qué hice yo:** Pedí el tipo de animaciones que quería y la IA me dio el código. Las probé y ajusté la intensidad para que no quedaran exageradas.

## Mejoras de estilo y detalles visuales

**Prompt:** "ayudame a pulir los detalles visuales del sitio para que se vea mas ordenado y prolijo en todas las secciones"

**Herramienta:** Claude. **Sección:** App.

**Qué hice yo:** Fui pidiendo ajustes puntuales de espaciado y alineación según lo que veía mal, hasta dejar todas las secciones parejas.

## Logo de GitHub en el sitio

**Prompt:** "quiero agregar el logo de github en el sitio con un enlace a mi repositorio, ayudame con eso"

**Herramienta:** Claude. **Sección:** App.

**Qué hice yo:** Di la idea de poner el logo enlazado a mi repo y la IA me ayudó con el código. Lo integré y verifiqué que el enlace funcionara.

## Reflexión final

En la mayoría de las secciones yo aportaba la idea, la estructura o el contexto de AFP Horizonte, y la IA me entregaba el código, los estilos o el borrador del texto. A partir de ahí integraba, probaba y ajustaba: recorté textos, corregí colores, verifiqué todos los CVSS en la calculadora oficial y adapté cada parte al rubro previsional. Usar Claude como herramienta principal, Gemini como contraste y la IA de VS Code para el código me permitió comparar enfoques. Aprendí que la IA acelera el trabajo, pero la responsabilidad de revisar y ajustar lo entregado, especialmente para que el código no quede vulnerable, fue mía.