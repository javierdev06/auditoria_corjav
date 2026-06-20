import Seccion from './Seccion';
import contenido from '../../docs_corjav/01_resumen_corjav.md?raw';

function Resumen() {
  return <Seccion contenido={contenido} />;
}

export default Resumen;