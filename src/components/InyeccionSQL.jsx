import { useState } from 'react';
import Seccion from './Seccion';
import contenido from '../../docs_corjav/02_sqli_corjav.md?raw';

const boxCode = { background: '#141d31', color: '#e2e8f0', padding: '12px 14px', borderRadius: '8px', fontFamily: 'Consolas, ui-monospace, monospace', fontSize: '0.82rem', overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '6px 0' };
const panel = (color, fondo) => ({ border: `1px solid ${color}`, background: fondo, borderRadius: '8px', padding: '14px 16px', marginTop: '12px' });
const boton = (bg) => ({ background: bg, color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '8px', fontSize: '0.84rem', fontWeight: 600, cursor: 'pointer', marginRight: '8px' });
const demoWrap = { marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e6e9f0' };

function DemoSQL() {
  const [vista, setVista] = useState('none');
  return (
    <div className="demo" style={demoWrap}>
      <h3 style={{ margin: '0 0 6px' }}>Demostración interactiva</h3>
      <p className="demo-desc" style={{ margin: '0 0 12px', color: '#374151', lineHeight: 1.6 }}>Reproduce el ataque con la misma entrada usada en DVWA. Es una simulación controlada: no se ejecuta nada real sobre este sitio.</p>
      <p className="demo-label" style={{ margin: '0 0 2px', fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Entrada del atacante</p>
      <div style={boxCode}>{`' OR '1'='1`}</div>
      <div style={{ marginTop: '14px' }}>
        <button className="demo-btn" style={boton('#dc2626')} onClick={() => setVista('ataque')}>Probar ataque</button>
        <button className="demo-btn" style={boton('#16a34a')} onClick={() => setVista('solucion')}>Aplicar solución</button>
        {vista !== 'none' && <button className="demo-btn" style={boton('#6b7280')} onClick={() => setVista('none')}>Reiniciar</button>}
      </div>
      {vista === 'ataque' && (
        <div className="demo-panel" style={panel('#dc2626', '#fef2f2')}>
          <p style={{ margin: '0 0 6px', fontWeight: 600, color: '#b91c1c' }}>Ataque exitoso</p>
          <p style={{ margin: '0 0 4px' }}>Consulta ejecutada:</p>
          <div style={boxCode}>SELECT * FROM users WHERE user = '' OR '1'='1'</div>
          <p style={{ margin: '8px 0 4px' }}>La condición <code>'1'='1'</code> siempre es verdadera, por lo que se devolvieron <strong>todos</strong> los usuarios:</p>
          <div style={boxCode}>{`admin        | admin
gordonb      | Gordon Brown
1337         | Hack Me
pablo        | Pablo Picasso
smithy       | Bob Smith`}</div>
        </div>
      )}
      {vista === 'solucion' && (
        <div className="demo-panel" style={panel('#16a34a', '#f0fdf4')}>
          <p style={{ margin: '0 0 6px', fontWeight: 600, color: '#15803d' }}>Ataque bloqueado</p>
          <p style={{ margin: '0 0 4px' }}>Con consulta parametrizada, la entrada viaja como dato, no como código:</p>
          <div style={boxCode}>{`SELECT nombre FROM users WHERE id = ?
-- parámetro: "' OR '1'='1"`}</div>
          <p style={{ margin: '8px 0 0' }}>Resultado: <strong>0 registros</strong>. La base buscó un usuario llamado literalmente <code>' OR '1'='1</code>, que no existe. Acceso denegado.</p>
        </div>
      )}
    </div>
  );
}

const partes = contenido.split('<!-- DEMO -->');
const antes = partes[0];
const despues = partes[1] || '';

function InyeccionSQL() {
  return (
    <div>
      <Seccion contenido={antes} />
      <DemoSQL />
      {despues && <Seccion contenido={despues} />}
    </div>
  );
}

export default InyeccionSQL;