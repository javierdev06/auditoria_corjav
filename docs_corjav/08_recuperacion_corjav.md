# Mejora tecnológica y plan de recuperación

## Mejora tecnológica

Más allá de corregir cada vulnerabilidad por separado, AFP Horizonte debe adoptar una mejora estructural: incorporar la seguridad en todo el ciclo de desarrollo del portal (enfoque DevSecOps). Esto implica integrar análisis automático de vulnerabilidades en cada despliegue, revisiones de código orientadas a seguridad y pruebas periódicas de penetración sobre el portal. Como complemento, desplegar de forma permanente un Web Application Firewall (WAF) y un sistema de monitoreo que detecte comportamientos anómalos en tiempo real. Esta mejora previene que vulnerabilidades como las detectadas vuelvan a aparecer y reduce la ventana de exposición ante nuevas amenazas.

## Plan de recuperación ante desastres (DR)

Si pese a los controles un ataque llega a concretarse, el plan de recuperación permite restablecer el servicio y limitar el daño. Para AFP Horizonte contempla:

- **Respaldos al día y probados:** mantener copias de seguridad periódicas de la base de datos de afiliados y verificar regularmente que se puedan restaurar correctamente.
- **Restauración desde copia limpia:** ante un incidente, restaurar el servicio desde un respaldo no comprometido, asegurando que la vulnerabilidad explotada ya esté corregida antes de volver a producción.
- **Notificación a afectados y autoridad:** informar a los afiliados afectados y a la autoridad competente, según exige la Ley 19.628 de protección de datos personales, dado que se manejan datos personales sensibles.
- **Aprender del incidente:** analizar la causa raíz, cerrar la falla que permitió el ataque y actualizar los controles para que no se repita.

## Cierre

La seguridad del portal de AFP Horizonte no se logra con una sola medida, sino con la combinación de prevención (evitar la falla), mitigación (reducir el daño) y recuperación (restablecer el servicio). Este enfoque integral protege el activo más importante de la AFP: la confianza de sus afiliados y el ahorro previsional que administra.