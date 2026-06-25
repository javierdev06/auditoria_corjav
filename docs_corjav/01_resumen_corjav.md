# Resumen ejecutivo

## La empresa y su portal

AFP Horizonte es una administradora de fondos de pensiones (rubro previsión). Su portal de clientes es el sitio donde los afiliados acceden a su cuenta previsional: ingresan con su RUT y consultan sus fondos, cotizaciones y datos. Por su rubro, el portal custodia a la vez dinero y datos personales sensibles —RUT, datos laborales, renta y saldos previsionales—, información protegida por la Ley 19.628 de protección de datos personales. Esta combinación hace que cualquier falla de seguridad tenga consecuencias económicas, legales y reputacionales directas.

## Alcance de la auditoría

Esta auditoría evalúa la seguridad del portal de clientes actuando como auditor externo. Por razones éticas y legales, las pruebas no se realizan sobre un sistema en producción, sino sobre DVWA (Damn Vulnerable Web Application), un entorno controlado y autorizado que actúa como sustituto del portal. Atacar sistemas ajenos sin autorización es delito en Chile (Ley 21.459); estas técnicas se emplean únicamente con fines defensivos. El trabajo recorre las fases de una auditoría: reconocer el sistema, identificar vulnerabilidades, explotarlas en el entorno controlado, analizar el riesgo y reportar los hallazgos con sus medidas.

## Principales hallazgos

Se demostraron y documentaron tres vulnerabilidades web, todas con evidencia propia y puntaje CVSS 3.1:

- **Inyección SQL — CVSS 9.8 (Crítica):** expone la base de datos completa de afiliados.
- **Inyección de comandos — CVSS 9.8 (Crítica):** otorga control del servidor del portal.
- **XSS reflejado — CVSS 6.1 (Media):** permite robar la sesión de un afiliado.

Las tres comparten una misma causa raíz: la aplicación no separa los datos que ingresa el usuario de sus propias instrucciones, de modo que una entrada del usuario puede ejecutarse como si fuera código.

## Conclusión de riesgo y medidas

La auditoría identificó y clasificó cinco activos de información del portal —entre ellos la base de datos de afiliados, los fondos previsionales y el servidor—, asociando cada vulnerabilidad al activo que pone en riesgo. Al cruzar probabilidad e impacto en la matriz de riesgo, la inyección SQL y la inyección de comandos resultan de riesgo crítico, y el XSS de riesgo alto; por eso se priorizan las dos primeras para atención inmediata. Para cada hallazgo se proponen medidas de prevención que atacan la causa raíz y controles de mitigación que reducen el daño residual, apoyados en marcos como OWASP, CIS y NIST. Además, se entrega la solución de remediación con el código corregido de cada ataque. Como mejora tecnológica de fondo se plantea un WAF y la segmentación de red, y se complementa con un plan de recuperación ante desastres con tiempos objetivo definidos (RPO de 1 hora y RTO de 4 horas) para el caso en que un ataque llegue a concretarse.

## Contenido de esta auditoría

Esta auditoría se organiza en secciones navegables: el análisis detallado de cada ataque (evidencia, mecanismo, CVSS y defensa), los activos de información del portal, la matriz de riesgo con su mapa de calor, los controles de prevención y mitigación, el plan de recuperación ante desastres, y la bitácora de uso de inteligencia artificial durante el desarrollo del trabajo.