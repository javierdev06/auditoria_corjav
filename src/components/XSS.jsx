import { useState } from 'react';
import Seccion from './Seccion';
import contenido from '../../docs_corjav/03_xss_corjav.md?raw';

const boxCode = { background: '#141d31', color: '#e2e8f0', padding: '12px 14px', borderRadius: '8px', fontFamily: 'Consolas, ui-monospace, monospace', fontSize: '0.82rem', overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '6px 0' };
const panel = (color, fondo) => ({ border: `1px solid ${color}`, background: fondo, borderRadius: '8px', padding: '14px 16px', marginTop: '12px' });
const boton = (bg) => ({ background: bg, color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer', marginRight: '8px' });
const demoWrap = { marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e6e9f0' };

function DemoXSS() {
  const [vista, setVista] = useState('none');
  return (
    <div className="demo" style={demoWrap}>
      <h3 style={{ margin: '0 0 6px' }}>Demostración interactiva</h3>
      <p className="demo-desc" style={{ margin: '0 0 12px', color: '#374151', lineHeight: 1.6 }}>Reproduce el ataque con la misma entrada usada en DVWA. Es una simulación controlada: no se ejecuta ningún script real sobre este sitio.</p>
      <p className="demo-label" style={{ margin: '0 0 2px', fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Entrada del atacante</p>
      <div style={boxCode}>{`<script>alert('Alerta de seguridad: verifique sus datos para no perder acceso')</script>`}</div>
      <div style={{ marginTop: '14px' }}>
        <button className="demo-btn" style={boton('#dc2626')} onClick={() => setVista('ataque')}>Probar ataque</button>
        <button className="demo-btn" style={boton('#16a34a')} onClick={() => setVista('solucion')}>Aplicar solución</button>
        {vista !== 'none' && <button className="demo-btn" style={boton('#6b7280')} onClick={() => setVista('none')}>Reiniciar</button>}
      </div>
      {vista === 'ataque' && (
        <div className="demo-panel" style={panel('#dc2626', '#fef2f2')}>
          <p style={{ margin: '0 0 10px', fontWeight: 600, color: '#b91c1c' }}>Ataque exitoso: el navegador ejecutó el script</p>
          <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', overflow: 'hidden', maxWidth: '440px' }}>
            <div style={{ background: '#e5e7eb', padding: '8px 12px', fontSize: '0.8rem', color: '#374151' }}>El sitio dice</div>
            <div style={{ background: '#fff', padding: '16px' }}>
              <p style={{ margin: '0 0 14px', color: '#1f2a37' }}>Alerta de seguridad: verifique sus datos para no perder acceso</p>
              <div style={{ textAlign: 'right' }}>
                <span style={{ background: '#2563eb', color: '#fff', padding: '5px 16px', borderRadius: '6px', fontSize: '0.82rem' }}>Aceptar</span>
              </div>
            </div>
          </div>
          <p style={{ margin: '10px 0 0' }}>Este mensaje simula un engaño de phishing que suplanta a la AFP para robar las credenciales del afiliado.</p>
        </div>
      )}
      {vista === 'solucion' && (
        <div className="demo-panel" style={panel('#16a34a', '#f0fdf4')}>
          <p style={{ margin: '0 0 6px', fontWeight: 600, color: '#15803d' }}>Ataque bloqueado</p>
          <p style={{ margin: '0 0 4px' }}>Con <code>htmlspecialchars()</code> la salida se escapa y el navegador la muestra como texto, sin ejecutarla:</p>
          <div style={boxCode}>{`Hola &lt;script&gt;alert('Alerta de seguridad...')&lt;/script&gt;`}</div>
          <p style={{ margin: '8px 0 0' }}>En pantalla se ve el texto literal del script. No aparece ningún popup.</p>
        </div>
      )}
    </div>
  );
}

const partes = contenido.split('<!-- DEMO -->');
const antes = partes[0];
const despues = partes[1] || '';

function XSS() {
  return (
    <div>
      <Seccion contenido={antes} />
      <DemoXSS />
      {despues && <Seccion contenido={despues} />}
    </div>
  );
}

export default XSS;