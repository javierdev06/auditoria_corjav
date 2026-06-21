import Seccion from './Seccion';
import contenido from '../../docs_corjav/06_matriz_corjav.md?raw';

// Niveles de impacto (columnas) y probabilidad (filas)
const impactos = ['Bajo', 'Medio', 'Alto', 'Crítico'];
const probabilidades = ['Alta', 'Media', 'Baja', 'Mínima'];

// Color de cada celda segun la combinacion probabilidad x impacto
function colorCelda(prob, imp) {
  const p = probabilidades.indexOf(prob); // 0 = Alta ... 3 = Minima
  const i = impactos.indexOf(imp);        // 0 = Bajo ... 3 = Critico
  // probScore: Alta=3, Media=2, Baja=1, Minima=0
  const probScore = 3 - p;
  // impScore: Bajo=0, Medio=1, Alto=2, Critico=3
  const impScore = i;
  const nivel = probScore + impScore; // 0 a 6
  if (nivel >= 5) return '#e53935'; // rojo (critico)
  if (nivel === 4) return '#ef6c00'; // naranjo (alto)
  if (nivel >= 2) return '#fdd835'; // amarillo (medio)
  return '#43a047';                 // verde (bajo)
}

// Hallazgos ubicados en la matriz
const hallazgos = {
  'Alta-Crítico': ['SQLi', 'Comandos'],
  'Media-Alto': ['XSS'],
};

function Matriz() {
  return (
    <div>
      <Seccion contenido={contenido} />

      <div className="mapa-calor">
        <table>
          <thead>
            <tr>
              <th></th>
              {impactos.map((imp) => (
                <th key={imp}>{imp}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {probabilidades.map((prob) => (
              <tr key={prob}>
                <th>{prob}</th>
                {impactos.map((imp) => {
                  const clave = `${prob}-${imp}`;
                  const items = hallazgos[clave];
                  return (
                    <td
                      key={imp}
                      style={{ backgroundColor: colorCelda(prob, imp) }}
                    >
                      {items ? items.join(' + ') : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="leyenda">
          Probabilidad (filas) × Impacto (columnas). Las celdas con hallazgos
          muestran su ubicación en la matriz.
        </p>
      </div>
    </div>
  );
}

export default Matriz;