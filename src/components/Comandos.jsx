import { useState } from 'react';
import Seccion from './Seccion';
import contenido from '../../docs_corjav/04_comandos_corjav.md?raw';

const boxCode = { background: '#141d31', color: '#e2e8f0', padding: '12px 14px', borderRadius: '8px', fontFamily: 'Consolas, ui-monospace, monospace', fontSize: '0.82rem', overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '6px 0' };
const panel = (color, fondo) => ({ border: `1px solid ${color}`, background: fondo, borderRadius: '8px', padding: '14px 16px', marginTop: '12px' });
const boton = (bg) => ({ background: bg, color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer', marginRight: '8px' });
const demoWrap = { marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e6e9f0' };

function DemoComandos() {
  const [vista, setVista] = useState('none');
  return (
    <div style={demoWrap}>
      <h3 style={{ margin: '0 0 6px' }}>Demostración interactiva</h3>
      <p style={{ margin: '0 0 12px', color: '#374151', lineHeight: 1.6 }}>Reproduce el ataque con la misma entrada usada en DVWA. Es una simulación controlada: no se ejecuta ningún comando real sobre este sitio.</p>
      <p style={{ margin: '0 0 2px', fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Entrada del atacante</p>
      <div style={boxCode}>127.0.0.1; cat /etc/passwd</div>
      <div style={{ marginTop: '14px' }}>
        <button className="demo-btn" style={boton('#dc2626')} onClick={() => setVista('ataque')}>Probar ataque</button>
        <button className="demo-btn" style={boton('#16a34a')} onClick={() => setVista('solucion')}>Aplicar solución</button>
        {vista !== 'none' && <button className="demo-btn" style={boton('#6b7280')} onClick={() => setVista('none')}>Reiniciar</button>}
      </div>
      {vista === 'ataque' && (
        <div className="demo-panel" style={panel('#dc2626', '#fef2f2')}>
          <p style={{ margin: '0 0 6px', fontWeight: 600, color: '#b91c1c' }}>Ataque exitoso</p>
          <p style={{ margin: '0 0 4px' }}>Comando ejecutado en el servidor:</p>
          <div style={boxCode}>ping -c 4 127.0.0.1; cat /etc/passwd</div>
          <p style={{ margin: '8px 0 4px' }}>Tras el ping, el servidor ejecutó el segundo comando y expuso el archivo de usuarios del sistema:</p>
          <div style={boxCode}>{`root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
mysql:x:101:101:MySQL Server:/nonexistent:/bin/false`}</div>
        </div>
      )}
      {vista === 'solucion' && (
        <div className="demo-panel" style={panel('#16a34a', '#f0fdf4')}>
          <p style={{ margin: '0 0 6px', fontWeight: 600, color: '#15803d' }}>Ataque bloqueado</p>
          <p style={{ margin: '0 0 4px' }}>Con validación por lista blanca, la entrada se revisa antes de usarse:</p>
          <div style={boxCode}>{`filter_var("127.0.0.1; cat /etc/passwd", FILTER_VALIDATE_IP)
-- resultado: false`}</div>
          <p style={{ margin: '8px 0 0' }}>La entrada no es una dirección IP válida, por lo que se rechaza y nunca llega al sistema. Entrada rechazada.</p>
        </div>
      )}
    </div>
  );
}

const partes = contenido.split('<!-- DEMO -->');
const antes = partes[0];
const despues = partes[1] || '';

function Comandos() {
  return (
    <div>
      <Seccion contenido={antes} />
      <DemoComandos />
      {despues && <Seccion contenido={despues} />}
    </div>
  );
}

export default Comandos;