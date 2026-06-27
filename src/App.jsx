import { useState, useEffect } from 'react';
import { FileText, Database, Code, Terminal, Server, LayoutGrid, ShieldCheck, RefreshCw, Bot, Sun, Moon } from 'lucide-react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';
import logito from './assets/logito.png';
import './App.css';

const secciones = [
  { id: 'resumen', nombre: 'Resumen', icono: <FileText size={18} strokeWidth={1.75} />, componente: <Resumen /> },
  { id: 'sqli', nombre: 'Inyección SQL', icono: <Database size={18} strokeWidth={1.75} />, componente: <InyeccionSQL /> },
  { id: 'xss', nombre: 'XSS', icono: <Code size={18} strokeWidth={1.75} />, componente: <XSS /> },
  { id: 'comandos', nombre: 'Inyección de comandos', icono: <Terminal size={18} strokeWidth={1.75} />, componente: <Comandos /> },
  { id: 'activos', nombre: 'Activos', icono: <Server size={18} strokeWidth={1.75} />, componente: <Activos /> },
  { id: 'matriz', nombre: 'Matriz de riesgo', icono: <LayoutGrid size={18} strokeWidth={1.75} />, componente: <Matriz /> },
  { id: 'controles', nombre: 'Controles', icono: <ShieldCheck size={18} strokeWidth={1.75} />, componente: <Controles /> },
  { id: 'recuperacion', nombre: 'Recuperación', icono: <RefreshCw size={18} strokeWidth={1.75} />, componente: <Recuperacion /> },
  { id: 'prompts', nombre: 'Bitácora IA', icono: <Bot size={18} strokeWidth={1.75} />, componente: <Prompts /> },
];

function App() {
  
  const [activa, setActiva] = useState('resumen');
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activa]);
  const seccionActual = secciones.find((s) => s.id === activa);
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'claro');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
  }, [tema]);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="proyecto">
          <div>
            <p className="proyecto-nombre">Auditoría de seguridad</p>
            <p className="proyecto-sub">AFP Horizonte</p>
          </div>
        </div>

        <nav className="nav">
          {secciones.map((s) => (
            <button key={s.id} className={activa === s.id ? 'nav-btn activo' : 'nav-btn'} onClick={() => setActiva(s.id)}>{s.icono}<span>{s.nombre}</span></button>
          ))}
        </nav>

        <div className="perfil">
          {perfilAbierto && (
            <div className="perfil-card">
              <img src={logito} alt="Logo de Javier Cortés" className="perfil-card-logo" />
              <p className="perfil-card-nombre">Javier Cortés</p>
              <p className="perfil-card-handle">@javierdev06</p>
              <a className="perfil-card-link" href="https://github.com/javierdev06/auditoria_corjav" target="_blank" rel="noopener noreferrer">
                <svg height="15" width="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span>Ver repositorio</span>
              </a>
            </div>
          )}
          <button className="perfil-btn" onClick={() => setPerfilAbierto(!perfilAbierto)} aria-label="Ver perfil">
            <img src={logito} alt="Logo de Javier Cortés" className="perfil-logo" />
          </button>
        </div>

        <button className="tema-btn" onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
          {tema === 'claro' ? <Moon size={18} strokeWidth={1.75} /> : <Sun size={18} strokeWidth={1.75} />}
          <span>{tema === 'claro' ? 'Modo oscuro' : 'Modo claro'}</span>
        </button>
      </aside>

      <main className="main">
        <header className="main-header">
          <div>
            <p className="main-eyebrow">TI3034 · Fundamentos de Seguridad de la Información</p>
            <h1 className="main-titulo">{seccionActual.nombre}</h1>
          </div>
        </header>

        <section className="contenido">
          <div className="card">
            {seccionActual.componente}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;