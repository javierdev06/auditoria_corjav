import Seccion from './Seccion';
import contenido from '../../docs_corjav/02_sqli_corjav.md?raw';

function InyeccionSQL() {
  return <Seccion contenido={contenido} />;
}

export default InyeccionSQL;