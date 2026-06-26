import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

function Seccion({ contenido }) {
  return (
    <div className="seccion">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          img: ({ src, alt }) => {
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