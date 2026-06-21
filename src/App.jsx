import { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';
import miLogo from './assets/logito.png';
import './App.css';

const secciones = [
  { id: 'resumen', nombre: 'Resumen', componente: <Resumen /> },
  { id: 'sqli', nombre: 'Inyección SQL', componente: <InyeccionSQL /> },
  { id: 'xss', nombre: 'XSS', componente: <XSS /> },
  { id: 'comandos', nombre: 'Inyección de comandos', componente: <Comandos /> },
  { id: 'activos', nombre: 'Activos', componente: <Activos /> },
  { id: 'matriz', nombre: 'Matriz de riesgo', componente: <Matriz /> },
  { id: 'controles', nombre: 'Controles', componente: <Controles /> },
  { id: 'recuperacion', nombre: 'Recuperación', componente: <Recuperacion /> },
  { id: 'prompts', nombre: 'Bitácora IA', componente: <Prompts /> },
];

function App() {
  const [activa, setActiva] = useState('resumen');
  const [modalAbierto, setModalAbierto] = useState(false);
  const seccionActual = secciones.find((s) => s.id === activa);

  return (
    <div className="app">
      {modalAbierto && (
        <div style={{
          position: 'fixed', bottom: '75px', right: '4.5rem',
          background: '#161d26', border: '1.5px solid #00bcd4',
          borderRadius: '10px', padding: '1.25rem 1.25rem 1rem',
          width: '210px', zIndex: 1000,
          boxShadow: '0 8px 24px rgba(0,188,212,0.25)',
        }}>
          <button onClick={() => setModalAbierto(false)} style={{
            position: 'absolute', top: '0.5rem', right: '0.6rem',
            background: 'transparent', border: 'none', color: '#666',
            cursor: 'pointer', fontSize: '0.85rem'
          }}>✕</button>
          <img src={miLogo} alt="logo" style={{
            width: '60px', height: '60px', borderRadius: '50%',
            objectFit: 'cover', border: '2px solid #00bcd4',
            display: 'block', margin: '0 auto 0.6rem'
          }} />
          <p style={{ color: '#FFFFFF', margin: '0 0 0.15rem', fontSize: '0.95rem', textAlign: 'center', fontWeight: '600' }}>Javier Cortes</p>
          <p style={{ color: '#00bcd4', margin: '0 0 0.9rem', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center' }}>Desarrollador Web</p>
          <a href="https://github.com/javierdev06" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: '#00bcd4', color: '#0f1419',
            padding: '0.45rem', borderRadius: '5px', textDecoration: 'none',
            fontSize: '0.7rem', textAlign: 'center', letterSpacing: '0.04em', marginBottom: '0.4rem', fontWeight: '600'
          }}>github.com/javierdev06</a>
          <a href="https://github.com/javierdev06/auditoria_corjav" target="_blank" rel="noopener noreferrer" style={{
            display: 'block', background: 'transparent', color: '#00bcd4',
            padding: '0.45rem', borderRadius: '5px', textDecoration: 'none',
            fontSize: '0.7rem', textAlign: 'center', letterSpacing: '0.04em', border: '1px solid #00bcd4'
          }}>Ver repositorio</a>
        </div>
      )}

      <button onClick={() => setModalAbierto(!modalAbierto)} style={{
        position: 'fixed', bottom: '1rem', right: '1rem',
        background: 'transparent', border: 'none',
        borderRadius: '50%', cursor: 'pointer',
        transition: 'all 0.25s ease', zIndex: 999, padding: 0
      }}>
        <img src={miLogo} alt="logo" style={{
          width: '60px', height: '60px', borderRadius: '50%',
          objectFit: 'cover', border: '2px solid #00bcd4', display: 'block'
        }} />
      </button>

      <header className="header">
        <h1>Auditoría de Seguridad — AFP Horizonte</h1>
        <p>TI3034 · Fundamentos de Seguridad de la Información</p>
      </header>
      <nav className="nav">
        {secciones.map((s) => (
          <button key={s.id} className={activa === s.id ? 'nav-btn activo' : 'nav-btn'} onClick={() => setActiva(s.id)}>
            {s.nombre}
          </button>
        ))}
      </nav>
      <main className="contenido">
        {seccionActual.componente}
      </main>
    </div>
  );
}

export default App;