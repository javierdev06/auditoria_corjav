import Seccion from './Seccion';
import contenido from '../../docs_corjav/04_comandos_corjav.md?raw';

function Comandos() {
  return <Seccion contenido={contenido} />;
}

export default Comandos;