import Seccion from './Seccion';
import contenido from '../../docs_corjav/03_xss_corjav.md?raw';

function XSS() {
  return <Seccion contenido={contenido} />;
}

export default XSS;