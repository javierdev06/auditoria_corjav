# Ataque 3 — Inyección de comandos

## Evidencia

Ejecutado en DVWA (nivel *Low*), módulo **Command Injection**. En el campo
"Enter an IP address" se ingresó: 127.0.0.1; cat /etc/passwd

![Inyección de comandos en DVWA](img_corjav/comandos_corjav.png)

*En la imagen, además del resultado del ping a 127.0.0.1, el servidor muestra
el contenido de /etc/passwd, listando las cuentas de usuario del sistema. Esto
confirma que se ejecutó un comando del sistema operativo a través del campo.*

## Por qué funciona

La aplicación arma un comando del sistema usando la entrada del usuario: ping -c 4 127.0.0.1
Al ingresar `127.0.0.1; cat /etc/passwd`, el comando queda: ping -c 4 127.0.0.1; cat /etc/passwd

El carácter `;` encadena dos comandos: el servidor ejecuta el ping y, a
continuación, lee el archivo. La causa raíz es que la aplicación pasa la
entrada del usuario directamente al sistema operativo, tratándola como
instrucción en lugar de como dato.

## Gravedad (CVSS 3.1)

- **Puntaje: 9.8 — Crítica**
- **Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H**

Se explota por red, sin privilegios ni interacción, con impacto alto en las
tres dimensiones: permite leer, modificar y borrar archivos del servidor. Es
una de las vulnerabilidades más críticas porque equivale a controlar el
servidor.

## Impacto para AFP Horizonte

Controlar el servidor del portal le daría al atacante acceso a toda la
infraestructura de AFP Horizonte: podría leer la base de datos de afiliados,
robar credenciales, instalar software malicioso o dejar el portal fuera de
servicio. Es el escenario más grave para la continuidad del negocio.

## Prevención (3.1.4)

**Nunca pasar la entrada del usuario directamente al sistema operativo.** Usar
listas blancas que acepten solo valores con formato válido (por ejemplo, solo
una IP) y APIs seguras que no invoquen la terminal del sistema.

## Mitigación (3.1.5)

Ejecutar la aplicación con **privilegios mínimos** para que, aun si se explota,
el atacante no pueda acceder a archivos críticos. Complementar con un **WAF** y
monitoreo que detecte comandos del sistema en las entradas.