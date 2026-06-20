# Ataque 2 — XSS (Cross-Site Scripting)

## Evidencia

Ejecutado en DVWA (nivel Low), módulo **XSS (Reflected)**. En el campo "What's your name?" se ingresó:  <script>alert('AFP Horizonte - XSS')</script>


![XSS reflejado en DVWA](img_corjav/xss_corjav.png)

*En la imagen, la entrada se interpreta como código y el navegador ejecuta el
script, mostrando un popup con el mensaje "AFP Horizonte - XSS". En la URL se
observa el payload inyectado, confirmando que el código se reflejó y ejecutó.*

## Por qué funciona

La aplicación inserta la entrada del usuario dentro del HTML sin sanitizarla.
Una entrada normal:

```html
<p>Hola Pedro</p>
```

Una entrada maliciosa con una etiqueta script:

```html
<p>Hola <script>alert('AFP Horizonte - XSS')</script></p>
```

El navegador no distingue entre el contenido propio de la página y la entrada
del usuario, por lo que ejecuta el script. La causa raíz es la misma que en la
inyección SQL: la aplicación mezcla datos del usuario con su propio código.

## Gravedad (CVSS 3.1)

- **Puntaje: 6.1 — Media**
- **Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N**

Se explota por red y sin privilegios, pero requiere interacción de la víctima
(UI:R), ya que debe abrir el enlace con el payload. El impacto es bajo en
confidencialidad e integridad y afecta a otro contexto (Scope changed, S:C),
porque el código corre en el navegador de la víctima, no en el servidor.

## Impacto para AFP Horizonte

Mediante XSS, un atacante puede robar la sesión de un afiliado, redirigirlo a
un sitio falso o presentarle un formulario fraudulento que imite el portal.
Esto permitiría suplantar al afiliado y acceder a sus datos previsionales o
capturar sus credenciales de acceso.

## Prevención (3.1.4)

**Escapar la salida**: convertir caracteres como `<` en `&lt;` para que la
entrada del usuario se muestre como texto y nunca se interprete como código.
Validar y sanitizar toda entrada que luego se muestre en pantalla.

## Mitigación (3.1.5)

Aplicar una **política CSP (Content Security Policy)** que limite qué scripts
puede ejecutar el navegador, bloqueando los inyectados. Complementar con el
uso de cookies de sesión con atributos `HttpOnly` y `Secure` para dificultar
el robo de sesión.