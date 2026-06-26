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