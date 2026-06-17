 # Resumen — Auditoría de seguridad del portal de clientes de AFP Horizonte

## Empresa auditada

AFP Horizonte es una administradora de fondos de pensiones que opera en el
rubro de previsión y fondos. Como AFP, su función es administrar el ahorro
previsional obligatorio de sus afiliados: recibe las cotizaciones mensuales
descontadas de la remuneración de cada trabajador, las invierte en distintos
fondos y gestiona el pago de las pensiones. Esto la convierte en una empresa
que custodia, al mismo tiempo, dinero y datos personales sensibles de miles
de personas.

## El portal de clientes

El portal de clientes es el sitio web donde los afiliados de AFP Horizonte
acceden a su cuenta previsional. A través de él, un afiliado puede iniciar
sesión con su RUT, consultar el saldo y la rentabilidad de sus fondos,
revisar su historial de cotizaciones, actualizar sus datos personales y de
contacto, y realizar trámites como cambios de fondo. Es la cara digital de la
AFP frente a sus clientes y el punto de entrada a toda su información
previsional.

## Datos que custodia el portal

El portal maneja información que es a la vez financiera y personal sensible:

- **Fondos**: el saldo acumulado y la rentabilidad de la cuenta de
  capitalización individual de cada afiliado, es decir, el ahorro de toda su
  vida laboral.
- **RUT**: el identificador único de cada afiliado, que además es la
  credencial de acceso al portal.
- **Datos laborales**: empleador, historial de cotizaciones y situación
  previsional.
- **Datos de renta**: la remuneración del afiliado, base sobre la que se
  calculan las cotizaciones.

## Por qué importa proteger este portal

En una AFP, una falla de seguridad no expone cualquier dato: expone el ahorro
previsional y la información económica de personas que confían en la
institución para administrar su pensión. La exposición o manipulación de
estos datos tiene consecuencias económicas directas para los afiliados, daña
gravemente la reputación de la AFP y la expone a sanciones por incumplimiento
de la normativa de protección de datos personales. Por eso el impacto de cada
vulnerabilidad encontrada en esta auditoría se evalúa considerando el valor de
estos activos.

## Alcance de la auditoría

Esta auditoría se realiza en un ambiente controlado y autorizado, utilizando
la aplicación deliberadamente vulnerable DVWA como sustituto del portal de
AFP Horizonte. Sobre ese entorno se demuestran tres ataques web —inyección
SQL, Cross-Site Scripting (XSS) e inyección de comandos—, se mide su gravedad
con CVSS, se construye la matriz de riesgo del negocio y se proponen medidas
de prevención, mitigación y recuperación. Atacar sistemas ajenos sin permiso
es delito (Ley 21.459); estas técnicas se aplican aquí con fines defensivos.