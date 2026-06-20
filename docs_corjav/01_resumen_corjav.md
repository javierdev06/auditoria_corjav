# Resumen — Auditoría del portal de clientes de AFP Horizonte

AFP Horizonte es una administradora de fondos de pensiones (rubro previsión y
fondos). Su portal de clientes es el sitio donde los afiliados acceden a su
cuenta previsional: ingresan con su RUT y consultan sus fondos, cotizaciones y
datos. El portal custodia información sensible: fondos, RUT, datos laborales y
de renta.

Esta auditoría se realiza sobre el entorno controlado DVWA como sustituto del
portal. Se demuestran tres ataques (inyección SQL, XSS e inyección de
comandos), se mide su gravedad con CVSS y se construye la matriz de riesgo del
negocio con sus medidas. Atacar sistemas ajenos sin permiso es delito
(Ley 21.459).