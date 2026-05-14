import reactIcon from './react.svg';
import jsIcon from './js.svg';
import tsIcon from './ts.svg';
import nodeIcon from './node.svg';
import tailwindIcon from './tailwind.svg';
import mongoIcon from './mongo.svg';
import mysqlIcon from './mysql.svg';
import sqlserverIcon from './microsoft-sql-server.svg';
import sqliteIcon from './sqlite.svg';
import linuxIcon from './linux.svg';
import ubuntuIcon from './ubuntu.svg';
import gitIcon from './git.svg';
import githubIcon from './github.svg';
import javaIcon from './java.svg';
import cplusplusIcon from './c++.svg';

// ─── Componente TechCard ───────────────────────────────────────────────────────

function TechCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 w-28 h-28 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-400/40 transition-all duration-200 cursor-default">
      <img src={icon} alt={name} className="w-10 h-10" />
      <span className="text-xs font-semibold text-gray-300">{name}</span>
    </div>
  );
}

// ─── Tipos y estilos de ProjectCard ───────────────────────────────────────────

type ProjectStatus = 'live' | 'private' | 'partial';

interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  extraLink?: { label: string; url: string };
  status: ProjectStatus;
  statusLabel: string;
}

const statusStyles: Record<ProjectStatus, string> = {
  live:    'bg-emerald-900/40 text-emerald-400 border border-emerald-500/30',
  private: 'bg-white/5 text-gray-400 border border-white/10',
  partial: 'bg-amber-900/40 text-amber-400 border border-amber-500/30',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-violet-400/30 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base font-bold text-white leading-snug">{project.title}</h4>
        <span className={`text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap ${statusStyles[project.status]}`}>
          {project.statusLabel}
        </span>
      </div>
      <p className="text-sm text-gray-400 font-normal leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.stack.map(tech => (
          <span key={tech} className="text-xs px-2 py-1 rounded-md bg-violet-900/30 text-violet-300 border border-violet-500/20 font-normal">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-1">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-150"
          >
            Ver proyecto →
          </a>
        )}
        {project.extraLink && (
          <a
            href={project.extraLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-150"
          >
            {project.extraLink.label} →
          </a>
        )}
      </div>
    </div>
  );
}

// ─── Datos de proyectos ────────────────────────────────────────────────────────

const mainProjects: Project[] = [
  {
    title: 'E-commerce Asiel S.A.',
    description:
      'Proyecto de graduación para Asiel S.A., farmacéutica reconocida en Guatemala. ' +
      'E-commerce completo con catálogo de medicamentos, carrito, gestión de pedidos y panel administrativo. ' +
      'Alcanzó puntuación perfecta (100/100) en todas las métricas de Google Lighthouse al momento de la entrega. ' +
      'El proyecto fue valorado en Q74,000 y cedido a la empresa como parte de la tesis. ' +
      'Actualmente en pausa por decisiones del cliente — el proyecto fue entregado y funcionó correctamente.',
    stack: ['React + Vite', 'Node.js', 'MongoDB Atlas', 'JavaScript', 'CSS'],
    status: 'partial',
    statusLabel: 'Entregado',
    link: 'https://asielsa.com',
    extraLink: { label: 'Ver tesis', url: 'https://drive.google.com/file/d/1Xm2St0IVOWBqFzYUsFDQFpWfmeCd2C7t/view?usp=sharing' },
  },
  {
    title: 'American-Things',
    description:
      'E-commerce propio construido sobre los aprendizajes de la tesis, con fuerte énfasis en ciberseguridad. ' +
      'Incluye catálogo, sistema de ofertas y eventos (tipo Black Friday), carrito, coordinación de entregas con GPS, ' +
      'envío de emails automático y personalizado, y ajuste manual de ubicación en mapa. ' +
      'La API corre en un VPS Ubuntu Server configurado desde cero, con protección contra fuerza bruta, ataques de diccionario, ' +
      'enumeración, DDoS, CORS no autorizado, sistema de baneo automático y logs de actividad. ' +
      'Se mantienen buenas métricas de rendimiento y accesibilidad de forma continua.',
    stack: ['React + Vite', 'Node.js', 'SQLite', 'TypeScript', 'Tailwind CSS', 'Ubuntu Server', 'Cloudflare'],
    status: 'live',
    statusLabel: 'En línea',
    link: 'https://american-things.com',
  },
  {
    title: 'Portafolio — FJ The Crew (USA)',
    description:
      'Portafolio web desarrollado como trabajo freelance para un cliente en Estados Unidos. ' +
      'Actualmente publicado y en espera de que el cliente suba su contenido definitivo.',
    stack: ['React + Vite', 'TypeScript', 'Tailwind CSS'],
    status: 'live',
    statusLabel: 'Freelance',
    link: 'https://f-j-thecrew.com',
  },
  {
    title: 'App de contabilidad familiar',
    description:
      'Aplicación web privada desarrollada para ayudar a mis padres a llevar la contabilidad de su negocio físico. ' +
      'No disponible públicamente.',
    stack: ['React + Vite', 'Node.js', 'MySQL'],
    status: 'private',
    statusLabel: 'Privado',
  },
];

const uniProjects: Project[] = [
  {
    title: 'Reconocimiento de caracteres con IA',
    description:
      'Modelo entrenado con el dataset EMNIST Balanced integrado en una pizarra virtual web. ' +
      'El usuario dibuja letras o números y el modelo los detecta y convierte en caracteres. ' +
      'Proyecto funcional con margen de mejora, actualmente publicado.',
    stack: ['Python', 'TensorFlow', 'JavaScript', 'HTML/CSS'],
    status: 'live',
    statusLabel: 'Publicado · alcance limitado',
    link: 'https://proy-ia.vercel.app/',
  },
  {
    title: 'Sistema bancario en C++',
    description:
      'Sistema bancario de consola con manejo de cuentas, transacciones, estructuras de datos, archivos y POO. ' +
      'Desarrollado durante la carrera. Código no disponible actualmente.',
    stack: ['C++'],
    status: 'partial',
    statusLabel: 'Universitario',
  },
  {
    title: 'Sistema de cifrado',
    description: 'Implementación de algoritmos de cifrado clásicos como ejercicio académico.',
    stack: ['Java'],
    status: 'partial',
    statusLabel: 'Universitario',
  },
];

// ─── App ───────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col text-white font-bold">

      {/* HEADER */}
      <header className="w-full bg-linear-to-b from-violet-900/80 to-black px-8 py-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-white/10 shrink-0 overflow-hidden border border-white/10">
          {/* Reemplaza src="" con tu foto cuando la tengas */}
          <img src="" alt="Carlos González" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold leading-tight">Carlos Geovanni González López</h1>
          <h2 className="text-base text-gray-400 font-normal">Desarrollador FullStack</h2>
        </div>
        {/* Links de contacto */}
        <div className="ml-auto flex gap-3 text-sm font-normal">
          <a
            href="https://github.com/CarlosGonzalez20"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-lg border border-white/20 text-gray-300 hover:border-violet-400/60 hover:text-white hover:bg-violet-900/20 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="mailto:ll3224645@gmail.com"
            className="px-4 py-1.5 rounded-lg border border-violet-500/40 text-violet-300 hover:border-violet-400 hover:text-white hover:bg-violet-900/30 transition-all duration-200"
          >
            Contacto
          </a>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col gap-12 p-8 max-w-5xl mx-auto w-full">

        {/* Sobre mí */}
        <section>
          <h3 className="text-2xl mb-4">Sobre mí</h3>
          <p className="text-gray-300 text-base leading-relaxed font-normal">
            Soy desarrollador FullStack recién graduado de Ingeniería en Sistemas, con enfoque en web y escritorio.
            He construido proyectos reales de cero: desde un e-commerce completo para una farmacéutica guatemalteca
            hasta herramientas privadas para negocios familiares. Me interesa entender cómo funcionan las cosas por
            dentro, lo que se refleja tanto en mi trabajo con código como en mi afición por la electrónica y el
            hardware con Arduino y Raspberry Pi. Trabajo bien en equipo y he liderado proyectos universitarios con
            resultados exitosos usando Git y GitHub como eje de colaboración.
          </p>
        </section>

        {/* Proyectos */}
        <section>
          <h3 className="text-2xl mb-4">Proyectos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {mainProjects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
          <h4 className="text-lg text-gray-400 font-semibold mb-3">Proyectos universitarios destacados</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {uniProjects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </section>

        {/* Tecnologías que domino */}
        <section>
          <h3 className="text-2xl mb-4">Tecnologías que domino</h3>
          <div className="flex flex-wrap gap-3">
            <TechCard icon={jsIcon} name="JavaScript" />
            <TechCard icon={reactIcon} name="React" />
            <TechCard icon={nodeIcon} name="Node.js" />
            <TechCard icon={mongoIcon} name="MongoDB" />
            <TechCard icon={mysqlIcon} name="MySQL" />
            <TechCard icon={sqlserverIcon} name="SQL Server" />
            <TechCard icon={gitIcon} name="Git" />
            <TechCard icon={githubIcon} name="GitHub" />
          </div>
        </section>

        {/* Tecnologías que estoy aprendiendo */}
        <section>
          <h3 className="text-2xl mb-4">Tecnologías que estoy aprendiendo</h3>
          <div className="flex flex-wrap gap-3">
            <TechCard icon={tsIcon} name="TypeScript" />
            <TechCard icon={tailwindIcon} name="Tailwind CSS" />
            <TechCard icon={sqliteIcon} name="SQLite" />
          </div>
        </section>

        {/* Otros lenguajes */}
        <section>
          <h3 className="text-2xl mb-2">Otros lenguajes</h3>
          <p className="text-sm text-gray-500 font-normal mb-4">
            Sólida base académica en ambos, sin práctica activa en los últimos años.
          </p>
          <div className="flex flex-wrap gap-3">
            <TechCard icon={cplusplusIcon} name="C++" />
            <TechCard icon={javaIcon} name="Java" />
          </div>
        </section>

        {/* Educación */}
        <section>
          <h3 className="text-2xl mb-4">Educación</h3>
          <div className="flex flex-col gap-1 p-5 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <span className="text-base font-bold">Ingeniería en Sistemas</span>
              <span className="text-sm text-gray-400 font-normal">2020 – 2025</span>
            </div>
            <span className="text-sm text-gray-400 font-normal">Universidad Mariano Gálvez de Guatemala</span>
          </div>
        </section>

        {/* También sé */}
        <section>
          <h3 className="text-2xl mb-4">También sé</h3>
          <ul className="flex flex-col gap-2 font-normal text-gray-300 text-sm">
            <li className="flex gap-2"><span className="text-violet-400">→</span> Electrónica: Arduino, Raspberry Pi, teoría y práctica de circuitos</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Sistemas operativos: Linux / Ubuntu Server</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Liderazgo técnico en proyectos de equipo con Git y GitHub</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Redes y protocolos de telecomunicaciones</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Python y C# — vistos durante la carrera y en proyectos puntuales, sin práctica activa</li>
            <li className="flex gap-2"><span className="text-violet-400">→</span> Lenguaje ensamblador — visto durante la carrera, sin práctica activa</li>
          </ul>
        </section>

        {/* Sistemas operativos */}
        <section>
          <h3 className="text-2xl mb-1">Sistemas operativos</h3>
          <p className="text-sm text-gray-500 font-normal mb-4">Familiaridad activa, recuperando práctica en Linux.</p>
          <div className="flex flex-wrap gap-3">
            <TechCard icon={linuxIcon} name="Linux" />
            <TechCard icon={ubuntuIcon} name="Ubuntu Server" />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full h-16 bg-linear-to-t from-emerald-900/80 to-black flex items-center justify-center border-t border-white/5">
        <p className="text-sm font-normal text-gray-500">
          © 2026 · Carlos Geovanni González López · Hecho con React, Vite, TypeScript y Tailwind v4
        </p>
      </footer>

    </div>
  );
}

export default App;