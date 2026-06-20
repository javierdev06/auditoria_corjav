import { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import './App.css';

const secciones = [
  { id: 'resumen', nombre: 'Resumen', componente: <Resumen /> },
  { id: 'sqli', nombre: 'Inyección SQL', componente: <InyeccionSQL /> },
  { id: 'xss', nombre: 'XSS', componente: <XSS /> },
  { id: 'comandos', nombre: 'Inyección de comandos', componente: <Comandos /> },
];

function App() {
  const [activa, setActiva] = useState('resumen');

  const seccionActual = secciones.find((s) => s.id === activa);

  return (
    <div className="app">
      <header className="header">
        <h1>Auditoría de Seguridad — AFP Horizonte</h1>
        <p>TI3034 · Fundamentos de Seguridad de la Información</p>
      </header>

      <nav className="nav">
        {secciones.map((s) => (
          <button
            key={s.id}
            className={activa === s.id ? 'nav-btn activo' : 'nav-btn'}
            onClick={() => setActiva(s.id)}
          >
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