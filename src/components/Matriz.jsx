import Seccion from './Seccion';
import contenido from '../../docs_corjav/06_matriz_corjav.md?raw';

const probabilidades = ['Alta', 'Media', 'Baja', 'Mínima'];
const impactos = ['Bajo', 'Medio', 'Alto', 'Crítico'];

const probValor = { 'Mínima': 1, 'Baja': 2, 'Media': 3, 'Alta': 4 };
const impValor = { 'Bajo': 1, 'Medio': 2, 'Alto': 3, 'Crítico': 4 };

const colores = {
  'Bajo': '#7ac74f',
  'Medio': '#ffd93d',
  'Alto': '#ff9f40',
  'Crítico': '#f5455c',
};

function nivelRiesgo(prob, imp) {
  const score = probValor[prob] * impValor[imp];
  if (score >= 12) return 'Crítico';
  if (score >= 8) return 'Alto';
  if (score >= 4) return 'Medio';
  return 'Bajo';
}

const hallazgos = {
  'Alta-Crítico': ['SQLi', 'Comandos'],
  'Media-Alto': ['XSS'],
};

const celdaHeader = {
  background: '#2b3a55',
  color: '#ffffff',
  fontSize: '0.74rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.03em',
  textAlign: 'center',
  padding: '10px 8px',
  border: '3px solid #ffffff',
};

const chip = {
  display: 'inline-block',
  background: '#1f2a37',
  color: '#ffffff',
  fontSize: '0.66rem',
  fontWeight: 600,
  padding: '2px 7px',
  borderRadius: '999px',
  margin: '4px 2px 0',
};

const ejeTitulo = {
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#6b7280',
};

function Matriz() {
  return (
    <div>
      <Seccion contenido={contenido} />

      <div style={{ overflowX: 'auto', margin: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ ...ejeTitulo, display: 'flex', alignItems: 'center', justifyContent: 'center', writingMode: 'vertical-rl', transform: 'rotate(180deg)', padding: '0 8px' }}>Probabilidad de que ocurra</div>

          <div style={{ flex: 1 }}>
            <p style={{ ...ejeTitulo, textAlign: 'center', margin: '0 0 6px' }}>Impacto o consecuencias</p>
            <table style={{ borderCollapse: 'separate', borderSpacing: 0, width: '100%', tableLayout: 'fixed' }}>
              <thead>
                <tr>
                  <th style={{ ...celdaHeader, background: 'transparent', width: '78px' }}></th>
                  {impactos.map((imp) => (
                    <th key={imp} style={celdaHeader}>{imp}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {probabilidades.map((prob) => (
                  <tr key={prob}>
                    <th style={{ ...celdaHeader, width: '78px' }}>{prob}</th>
                    {impactos.map((imp) => {
                      const nivel = nivelRiesgo(prob, imp);
                      const items = hallazgos[`${prob}-${imp}`];
                      return (
                        <td key={imp} style={{ background: colores[nivel], color: '#1f2a37', textAlign: 'center', verticalAlign: 'middle', padding: '14px 6px', border: '3px solid #ffffff', fontWeight: 700, fontSize: '0.82rem' }}>
                          {nivel}
                          {items && (
                            <div>
                              {items.map((it) => (
                                <span key={it} style={chip}>{it}</span>
                              ))}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px', fontSize: '0.8rem', color: '#374151', alignItems: 'center' }}>
          {impactos.map((n) => (
            <span key={n} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: colores[n], display: 'inline-block' }}></span>
              {n}
            </span>
          ))}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ ...chip, margin: 0 }}>SQLi</span>
            ubicación de cada hallazgo
          </span>
        </div>
      </div>
    </div>
  );
}

export default Matriz;