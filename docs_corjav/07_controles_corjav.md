# Controles: prevención y mitigación

A partir de la priorización de la matriz, se definen los controles para cada hallazgo. La prevención busca evitar que la vulnerabilidad exista; la mitigación reduce el daño en caso de que llegue a explotarse. Cada control se respalda en un marco reconocido —OWASP, CIS Controls o NIST— para que las medidas no sean improvisadas, sino alineadas con buenas prácticas de la industria.

## Prioridad 1 — Inyección SQL (riesgo crítico)

**Prevención:** usar consultas parametrizadas (prepared statements) en todo acceso a la base de datos del portal, de modo que la entrada del usuario se trate siempre como dato y nunca como código. Validar el tipo de cada entrada, por ejemplo forzando el formato correcto del RUT. *Marco: OWASP Top 10 (A03: Inyección) y la OWASP SQL Injection Prevention Cheat Sheet, que recomiendan la consulta parametrizada como defensa principal.*

**Mitigación:** aplicar el principio de mínimo privilegio en la cuenta de base de datos del portal, sin permisos para borrar tablas, y desplegar un Web Application Firewall (WAF) que bloquee patrones de inyección, con monitoreo de consultas anómalas. *Marco: NIST SP 800-53, control AC-6 (Least Privilege), para la cuenta de base de datos; CIS Controls (Seguridad del Software de Aplicaciones) para el WAF y el monitoreo.*

## Prioridad 1 — Inyección de comandos (riesgo crítico)

**Prevención:** nunca pasar la entrada del usuario directamente al sistema operativo. Usar listas blancas que acepten solo valores con formato válido (por ejemplo, solo una dirección IP) y APIs seguras que no invoquen la terminal del sistema. *Marco: OWASP Top 10 (A03: Inyección) y la OWASP OS Command Injection Defense Cheat Sheet.*

**Mitigación:** ejecutar la aplicación con privilegios mínimos para limitar el alcance de un ataque exitoso, complementado con un WAF y monitoreo que detecte comandos del sistema en las entradas. *Marco: NIST SP 800-53, control AC-6 (Least Privilege) para la ejecución con privilegios mínimos; CIS Controls para el monitoreo y la defensa perimetral.*

## Prioridad 2 — XSS (riesgo alto)

**Prevención:** escapar la salida, convirtiendo caracteres como `<` en `&lt;` para que la entrada se muestre como texto y no se ejecute. Validar y sanitizar toda entrada que luego se muestre en pantalla. *Marco: OWASP Top 10 (A03: Inyección) y la OWASP Cross Site Scripting Prevention Cheat Sheet.*

**Mitigación:** aplicar una política CSP (Content Security Policy) que limite qué scripts puede ejecutar el navegador, y usar cookies de sesión con atributos `HttpOnly` y `Secure` para dificultar el robo de sesión. *Marco: OWASP Secure Headers Project (CSP) y la OWASP Session Management Cheat Sheet (cookies HttpOnly/Secure).*

## Políticas transversales

Además de los controles por vulnerabilidad, AFP Horizonte debe adoptar políticas generales: revisiones de código orientadas a seguridad antes de cada despliegue, capacitación de los desarrolladores en codificación segura, y auditorías periódicas del portal. *Marco: CIS Controls (Seguridad del Software de Aplicaciones) y OWASP SAMM para el ciclo de desarrollo seguro; NIST Cybersecurity Framework para las auditorías periódicas.* Estas prácticas previenen que vulnerabilidades similares reaparezcan en el futuro.