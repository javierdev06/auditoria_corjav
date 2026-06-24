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

Al cruzar probabilidad e impacto en la matriz de riesgo, la inyección SQL y la inyección de comandos resultan de riesgo crítico, y el XSS de riesgo alto. Por eso se priorizan las dos primeras para atención inmediata. Para cada hallazgo se proponen medidas de prevención que atacan la causa raíz, controles de mitigación que reducen el daño residual —apoyados en marcos como OWASP, CIS y NIST— y un plan de recuperación ante desastres para el caso en que un ataque llegue a concretarse.

## Contenido de esta auditoría

Esta auditoría se organiza en secciones navegables: el análisis detallado de cada ataque (evidencia, mecanismo, CVSS y defensa), los activos de información del portal, la matriz de riesgo con su mapa de calor, los controles de prevención y mitigación, el plan de recuperación ante desastres, y la bitácora de uso de inteligencia artificial durante el desarrollo del trabajo.

Por qué este resumen suma para el 7: ya no es solo "qué es la empresa", sino un resumen ejecutivo completo. En cinco bloques cubre la empresa y su portal (con la Ley 19.628), el alcance y el marco ético-legal (DVWA como sustituto, Ley 21.459, las fases de auditoría), los tres hallazgos con su CVSS, la conclusión de riesgo conectada a la matriz, y una guía de las secciones. Quien lo lea entiende toda la auditoría de una, y refuerza la impresión de calidad analítica que el profe valora en todos los criterios.

Guarda, entra a **Resumen** y revisa que se vea con sus subtítulos y la lista de hallazgos. Si te gusta, commit: