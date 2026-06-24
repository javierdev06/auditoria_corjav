# Matriz de riesgo

El riesgo de cada vulnerabilidad se calcula como **probabilidad × impacto**. No todas las fallas se corrigen a la vez: la matriz permite ordenar cuáles atender primero según el daño que representan para AFP Horizonte.

## Cómo leer este mapa de calor

El mapa de calor es una forma rápida de ver, de un solo vistazo, qué tan grave es cada problema encontrado. Funciona como una tabla de doble entrada:

- En el eje vertical (izquierda) está la **probabilidad**: qué tan fácil o frecuente es que el problema ocurra, desde "Mínima" (muy raro) hasta "Alta" (ocurre con facilidad).
- En el eje horizontal (arriba) está el **impacto**: cuánto daño causaría si llega a ocurrir, desde "Bajo" (molesto) hasta "Crítico" (gravísimo para el negocio).

Cada problema se ubica en la celda donde se cruzan su probabilidad y su impacto. El **color** de esa celda resume el riesgo: verde es bajo (puede esperar), amarillo es medio, naranjo es alto y rojo es crítico (hay que atenderlo primero). Mientras más arriba y más a la derecha cae un problema, más rojo y más urgente es.

En esta auditoría, la inyección SQL y la inyección de comandos caen en la esquina roja (probabilidad alta, impacto crítico) porque son fáciles de explotar y comprometen los datos y el servidor de AFP Horizonte. El XSS cae en naranjo (probabilidad media, impacto alto): es serio, pero requiere que la víctima haga clic en un enlace, por lo que ocurre con menos frecuencia.

<!-- MAPA -->

## Cómo se leen los ejes

**Probabilidad** — qué tan fácil o frecuente es que la falla se explote. Se estima a partir del vector CVSS (sobre todo el vector de ataque `AV`, la complejidad `AC`, los privilegios requeridos `PR` y la interacción del usuario `UI`) y de la exposición del portal. Niveles, de menor a mayor: Mínima, Baja, Media, Alta.

**Impacto** — cuánto daña al negocio si la falla se materializa. Depende del activo afectado y del rubro: en una AFP, que custodia ahorro previsional y datos personales sensibles, el impacto es estructuralmente alto. Niveles, de menor a mayor: Bajo, Medio, Alto, Crítico.

## Ubicación de cada hallazgo

**Inyección SQL — Probabilidad Alta · Impacto Crítico.** Probabilidad alta: su vector `AV:N/AC:L/PR:N/UI:N` indica que se explota por red, con baja complejidad, sin privilegios y sin que la víctima haga nada; un atacante anónimo puede lanzarla directo contra el formulario del portal. Impacto crítico: compromete la base de datos de afiliados, exponiendo RUT, renta, datos laborales y fondos de todos los clientes, que son datos personales sensibles protegidos por la Ley 19.628. Una filtración masiva implicaría sanciones legales, pérdida económica y daño reputacional. El cruce Alta × Crítico la ubica en la zona roja: riesgo crítico.

**Inyección de comandos — Probabilidad Alta · Impacto Crítico.** Probabilidad alta: comparte el mismo vector `AV:N/AC:L/PR:N/UI:N` que la inyección SQL, por lo que es igual de trivial de explotar. Impacto crítico: otorga control del servidor que sostiene todo el portal, el activo del que dependen todos los demás. Desde ahí el atacante podría leer la base de datos, robar credenciales, instalar software malicioso o dejar el servicio fuera de línea, afectando la continuidad operativa de la AFP. El cruce Alta × Crítico la ubica también en la zona roja: riesgo crítico.

**XSS reflejado — Probabilidad Media · Impacto Alto.** Probabilidad media: aunque su vector también es de red y baja complejidad, incluye `UI:R`, es decir, requiere que la víctima abra un enlace preparado con el payload. Ese paso intermedio reduce la frecuencia con que se concreta frente a las dos anteriores. Impacto alto: permite robar la sesión de un afiliado o redirigirlo a un sitio fraudulento, comprometiendo sus credenciales de acceso; sin embargo, no expone directamente toda la base ni el servidor, por lo que su daño es serio pero más acotado. El cruce Media × Alto la ubica en la zona naranja: riesgo alto.

## Tabla resumen de la matriz

| Vulnerabilidad | Probabilidad | Impacto | Nivel de riesgo |
| --- | :---: | :---: | :---: |
| Inyección SQL | Alta | Crítico | Crítico |
| Inyección de comandos | Alta | Crítico | Crítico |
| XSS (reflejado) | Media | Alto | Alto |

## Priorización

El orden de remediación se desprende de la matriz y es coherente con el CVSS:

1. **Inyección SQL e inyección de comandos** (riesgo crítico, CVSS 9.8): se atienden primero y de forma inmediata, por su máxima probabilidad y máximo impacto.
2. **XSS reflejado** (riesgo alto, CVSS 6.1): se atiende a continuación; sigue siendo prioritario, pero su menor probabilidad e impacto acotado lo dejan bajo las dos críticas.

Esta priorización guía el orden en que se aplican los controles de prevención y mitigación del siguiente apartado.