# Activos de información y riesgos según la industria

Un activo de información es todo lo que tiene valor para AFP Horizonte y debe protegerse. En una administradora de fondos de pensiones, los activos combinan dinero y datos personales sensibles, por lo que su exposición tiene consecuencias económicas y legales directas. A continuación se identifican los activos del portal de clientes y el riesgo que corre cada uno según el rubro previsional.

## Base de datos de afiliados

Contiene el RUT, los datos laborales y la renta de cada afiliado. Es el activo más sensible en términos de datos personales. Un acceso no autorizado expondría información económica de miles de personas y vulneraría la Ley 19.628 de protección de datos personales. Es el principal objetivo de una inyección SQL.

## Fondos previsionales

Corresponde a los saldos y la rentabilidad de las cuentas de capitalización individual, es decir, el ahorro de toda la vida laboral del afiliado. Es el activo de mayor valor económico. Su manipulación o exposición afecta directamente el patrimonio de los afiliados y la confianza en la AFP.

## Credenciales de acceso

Son las claves con que los afiliados ingresan al portal. Si se comprometen, un atacante puede suplantar a un afiliado y acceder a toda su información previsional. El XSS apunta a este activo, ya que permite robar sesiones o capturar credenciales.

## Servidor y aplicación del portal

Es la infraestructura que sostiene el servicio. Si un atacante toma control del servidor, accede a todos los demás activos y puede dejar el portal fuera de servicio. La inyección de comandos apunta a este activo y representa el escenario más grave para la continuidad del negocio.

## Relación con la industria

En una AFP, el impacto de cada vulnerabilidad se amplifica porque los activos involucran ahorro previsional obligatorio e información económica protegida por ley. A diferencia de otros rubros, una filtración no solo daña la reputación: compromete el patrimonio de los afiliados y expone a la institución a sanciones regulatorias. Por eso, en la matriz de riesgo, los impactos sobre estos activos se evalúan como altos o críticos.