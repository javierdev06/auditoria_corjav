# Activos de información y riesgos según la industria

Un activo de información es todo recurso con valor para AFP Horizonte que debe protegerse. El primer paso de la auditoría es inventariar y clasificar estos activos, porque el impacto de una vulnerabilidad no se mide en abstracto, sino según el activo concreto que pone en riesgo. En una administradora de fondos de pensiones los activos combinan dinero y datos personales sensibles, de modo que su exposición tiene consecuencias económicas, legales y reputacionales directas.

Cada activo se clasifica por su criticidad (Crítico, Alto o Medio) según el daño que provocaría su compromiso, y se indica cuál de las tres propiedades de la seguridad de la información —confidencialidad, integridad o disponibilidad, la tríada CIA— es la más relevante para protegerlo.

## Base de datos de afiliados

Contiene el RUT, los datos laborales y la renta de cada afiliado. Es el activo más sensible en términos de datos personales. Un acceso no autorizado expondría la información económica de miles de personas y vulneraría la Ley 19.628 de protección de datos personales.

**Clasificación:** Crítico · **Propiedad CIA principal:** Confidencialidad · **Amenaza asociada:** inyección SQL.

## Fondos previsionales

Corresponde a los saldos y la rentabilidad de las cuentas de capitalización individual, es decir, el ahorro de toda la vida laboral del afiliado. Es el activo de mayor valor económico; su manipulación o exposición afecta directamente el patrimonio de los afiliados y la confianza en la AFP.

**Clasificación:** Crítico · **Propiedad CIA principal:** Integridad · **Amenaza asociada:** inyección SQL (lectura) e inyección de comandos (a través del servidor).

## Credenciales de acceso

Son las claves con que los afiliados ingresan al portal. Si se comprometen, un atacante puede suplantar a un afiliado y acceder a toda su información previsional.

**Clasificación:** Alto · **Propiedad CIA principal:** Confidencialidad · **Amenaza asociada:** XSS (robo de sesión o captura de credenciales).

## Servidor y aplicación del portal

Es la infraestructura que sostiene el servicio. Si un atacante toma control del servidor, accede a todos los demás activos y puede dejar el portal fuera de servicio.

**Clasificación:** Crítico · **Propiedad CIA principal:** Disponibilidad · **Amenaza asociada:** inyección de comandos.

## Registros y bitácoras del sistema (logs)

Guardan el rastro de los accesos y operaciones del portal. Son la base para detectar incidentes e investigar qué ocurrió tras un ataque. Un atacante con control del servidor podría borrarlos para ocultar su actividad, lo que retrasaría la respuesta y dificultaría la recuperación y la rendición de cuentas.

**Clasificación:** Alto · **Propiedad CIA principal:** Integridad y disponibilidad · **Amenaza asociada:** inyección de comandos.

## Inventario de activos

| Activo | Clasificación | Propiedad CIA | Vulnerabilidad asociada | Impacto principal |
| --- | :---: | :---: | --- | --- |
| Base de datos de afiliados | Crítico | Confidencialidad | Inyección SQL | Filtración masiva de datos personales (Ley 19.628) |
| Fondos previsionales | Crítico | Integridad | Inyección SQL / comandos | Daño al patrimonio y a la confianza del afiliado |
| Credenciales de acceso | Alto | Confidencialidad | XSS | Suplantación de afiliados |
| Servidor y aplicación | Crítico | Disponibilidad | Inyección de comandos | Control total del portal y caída del servicio |
| Registros y bitácoras (logs) | Alto | Integridad | Inyección de comandos | Pérdida de trazabilidad del incidente |

## Relación con la industria

En una AFP, el impacto de cada vulnerabilidad se amplifica porque los activos involucran ahorro previsional obligatorio e información económica protegida por ley. A diferencia de otros rubros, una filtración no solo daña la reputación: compromete el patrimonio de los afiliados y expone a la institución a sanciones regulatorias y a la fiscalización de la Superintendencia de Pensiones. Por eso, en la matriz de riesgo, los impactos sobre estos activos se evalúan como altos o críticos.