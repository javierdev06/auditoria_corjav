import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Seccion({ contenido }) {
  return (
    <div className="seccion">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => {
            // Las imágenes en el .md usan ruta relativa (img_corjav/...).
            // En el sitio viven en public (/img_corjav/...), así que
            // anteponemos "/" si la ruta no la trae.
            const ruta = src.startsWith('/') ? src : '/' + src;
            return <img src={ruta} alt={alt} style={{ maxWidth: '100%' }} />;
          },
        }}
      >
        {contenido}
      </ReactMarkdown>
    </div>
  );
}

export default Seccion;