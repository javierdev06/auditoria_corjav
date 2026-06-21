# Controles: prevención y mitigación

A partir de la priorización de la matriz, se definen los controles para cada hallazgo. La prevención busca evitar que la vulnerabilidad exista; la mitigación reduce el daño en caso de que llegue a explotarse. Los controles se basan en marcos reconocidos como OWASP, CIS Controls y NIST.

## Prioridad 1 — Inyección SQL (riesgo crítico)

**Prevención:** usar consultas parametrizadas (prepared statements) en todo acceso a la base de datos del portal, de modo que la entrada del usuario se trate siempre como dato y nunca como código. Validar el tipo de cada entrada, por ejemplo forzando el formato correcto del RUT.

**Mitigación:** aplicar el principio de mínimo privilegio en la cuenta de base de datos del portal, sin permisos para borrar tablas, y desplegar un Web Application Firewall (WAF) que bloquee patrones de inyección. Monitorear las consultas anómalas para detectar intentos de explotación.

## Prioridad 1 — Inyección de comandos (riesgo crítico)

**Prevención:** nunca pasar la entrada del usuario directamente al sistema operativo. Usar listas blancas que acepten solo valores con formato válido (por ejemplo, solo una dirección IP) y APIs seguras que no invoquen la terminal del sistema.

**Mitigación:** ejecutar la aplicación con privilegios mínimos para limitar el alcance de un ataque exitoso, complementado con un WAF y monitoreo que detecte comandos del sistema en las entradas.

## Prioridad 2 — XSS (riesgo alto)

**Prevención:** escapar la salida, convirtiendo caracteres como `<` en `&lt;` para que la entrada se muestre como texto y no se ejecute. Validar y sanitizar toda entrada que luego se muestre en pantalla.

**Mitigación:** aplicar una política CSP (Content Security Policy) que limite qué scripts puede ejecutar el navegador, y usar cookies de sesión con atributos `HttpOnly` y `Secure` para dificultar el robo de sesión.

## Políticas transversales

Además de los controles por vulnerabilidad, AFP Horizonte debe adoptar políticas generales: revisiones de código orientadas a seguridad antes de cada despliegue, capacitación de los desarrolladores en codificación segura, y auditorías periódicas del portal. Estas prácticas previenen que vulnerabilidades similares reaparezcan en el futuro.