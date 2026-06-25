# Mejora tecnológica, solución y recuperación

## Mejora tecnológica

Más allá de corregir cada vulnerabilidad por separado, AFP Horizonte debe adoptar una mejora estructural: incorporar la seguridad en todo el ciclo de desarrollo del portal (enfoque DevSecOps). Esto implica integrar análisis automático de vulnerabilidades en cada despliegue, revisiones de código orientadas a seguridad y pruebas periódicas de penetración sobre el portal. Como complemento, desplegar de forma permanente un Web Application Firewall (WAF) y un sistema de monitoreo que detecte comportamientos anómalos en tiempo real.

A nivel de infraestructura, aplicar segmentación de red: separar el servidor de base de datos del servidor web en zonas aisladas, con reglas de firewall que solo permitan el tráfico estrictamente necesario entre ellas. Así, si un atacante compromete la capa web (por ejemplo, mediante inyección de comandos), no obtiene acceso directo a la base de datos de afiliados. Esta defensa en profundidad reduce el impacto de un ataque exitoso y evita que el compromiso de un solo componente exponga todos los activos.

## Solución: remediación de las vulnerabilidades

Como auditor, el paso siguiente es entregar a AFP Horizonte la solución concreta para corregir de raíz cada vulnerabilidad explotada. La remediación no solo describe la defensa, sino que muestra el cambio en el código del portal.

**Inyección SQL.** Reemplazar toda consulta que concatene la entrada del usuario por consultas parametrizadas, donde el dato viaja separado de la instrucción:

```php
// Vulnerable: la entrada se pega dentro del SQL
$sql = "SELECT nombre FROM users WHERE id = '$id'";

// Solución: consulta parametrizada, el dato nunca es código
$stmt = $conn->prepare("SELECT nombre FROM users WHERE id = ?");
$stmt->bind_param("i", $id);
```

**XSS reflejado.** Escapar toda salida que provenga del usuario antes de mostrarla, para que el navegador la trate como texto y no como código:

```php
// Vulnerable: imprime la entrada tal cual
echo "Hola " . $_GET['name'];

// Solución: se escapa la salida
echo "Hola " . htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');
```

**Inyección de comandos.** No pasar la entrada del usuario al sistema operativo; validar con lista blanca y usar funciones que no invoquen la terminal:

```php
// Vulnerable: la entrada se ejecuta en el sistema
shell_exec("ping -c 4 " . $_GET['ip']);

// Solución: validar formato de IP antes de usarla
if (filter_var($ip, FILTER_VALIDATE_IP)) {
    shell_exec("ping -c 4 " . escapeshellarg($ip));
}
```

Tras aplicar estas correcciones, el portal debe volver a probarse (idealmente en el mismo entorno controlado) para confirmar que los tres ataques ya no funcionan antes de regresar a producción.

## Plan de recuperación ante desastres (DR)

Si pese a los controles un ataque llega a concretarse, el plan de recuperación permite restablecer el servicio y limitar el daño. Para AFP Horizonte contempla:

**Respaldos al día y probados.** Mantener copias de seguridad automáticas de la base de datos de afiliados cada hora, almacenadas en una ubicación separada del servidor del portal. No basta con respaldar: hay que verificar periódicamente que las copias se pueden restaurar de verdad, mediante pruebas de restauración programadas.

**Restauración desde copia limpia.** Ante un incidente, restaurar el servicio desde un respaldo no comprometido, confirmando antes que la vulnerabilidad explotada ya fue corregida (ver remediación). Nunca se vuelve a producción con la falla abierta, para no repetir el ataque.

**Notificación a afectados y autoridad.** Informar a los afiliados afectados y a la autoridad competente, según exige la Ley 19.628 de protección de datos personales, y reportar a la Superintendencia de Pensiones como regulador del rubro. La comunicación debe ser oportuna y transparente para proteger a los afiliados y la reputación de la AFP.

**Aprender del incidente.** Analizar la causa raíz, cerrar la falla que permitió el ataque y actualizar los controles para que no se repita, dejando registro en la bitácora del sistema.

## Tiempos objetivo de recuperación

Un plan de recuperación serio define dos métricas que le ponen número a la respuesta:

- **RPO (Recovery Point Objective): 1 hora.** Es la cantidad máxima de datos que se acepta perder, medida en tiempo. Con respaldos cada hora, en el peor caso se perdería como máximo la última hora de movimientos. Se fija exigente porque se trata de fondos previsionales y datos de afiliados, donde perder información es muy grave.
- **RTO (Recovery Time Objective): 4 horas.** Es el tiempo máximo que el portal puede estar caído antes de volver a estar operativo. Cuatro horas equilibra la urgencia (los afiliados consultan su ahorro) con lo que es realista lograr al restaurar desde una copia limpia.

## Equipo de respuesta y comunicación

La recuperación necesita responsables claros. AFP Horizonte debe definir un equipo de respuesta a incidentes con roles asignados: quién contiene el ataque, quién restaura el servicio, quién comunica a los afiliados y quién reporta a la autoridad. Durante la crisis, debe mantenerse un canal de comunicación interno para coordinar la respuesta y uno externo para informar a los afectados, evitando el silencio que daña la confianza.

## Cierre

La seguridad del portal de AFP Horizonte no se logra con una sola medida, sino con la combinación de prevención (evitar la falla), mitigación (reducir el daño), solución (corregir de raíz lo explotado) y recuperación (restablecer el servicio con tiempos definidos). Este enfoque integral protege el activo más importante de la AFP: la confianza de sus afiliados y el ahorro previsional que administra.