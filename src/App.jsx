import { NavLink, Route, Routes, Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, Braces, Code2, GraduationCap, Home, Layers3, MonitorPlay, PanelTop, Sparkles } from "lucide-react";

const practicals = [
  {
    path: "/csharp",
    number: "01",
    title: "C# Visual Application",
    short: "C# Practicals",
    description: "Build Windows-style visual applications and understand the code behind each interface.",
    detail: "Windows Forms / Visual Application",
    icon: Braces,
    tone: "violet"
  },
  {
    path: "/web-design",
    number: "02",
    title: "Web Design",
    short: "Web Design Practicals",
    description: "Learn HTML, CSS and JavaScript by creating and previewing practical web pages.",
    detail: "HTML · CSS · JavaScript",
    icon: PanelTop,
    tone: "cyan"
  }
];

function Header() {
  const location = useLocation();
  const activeTitle = practicals.find((item) => item.path === location.pathname)?.short;
  return (
    <header className="topbar">
      <Link to="/" className="brand">
        <span className="brand-mark"><Layers3 size={20} /></span>
        <span>practicales<span className="brand-dot">.</span></span>
      </Link>
      <nav className="top-nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        {practicals.map((item) => <NavLink key={item.path} to={item.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{item.short}</NavLink>)}
      </nav>
      <div className="top-status"><span className="status-dot" /> Learning space</div>
    </header>
  );
}

function Footer() {
  return <footer className="footer"><span>Practicales</span><span>Learn it. Code it. Understand it.</span></footer>;
}

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> YOUR PRACTICAL LEARNING SPACE</div>
          <h1>Turn what you learn<br /><span>into what you build.</span></h1>
          <p className="hero-description">A simple place to follow your daily practical lessons, explore the code, understand how it works, and see the final output.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#today">Explore today&apos;s practicals <ArrowRight size={17} /></a>
            <span className="hero-note"><BookOpen size={15} /> Notes-based lessons</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="code-window">
            <div className="window-head"><i /><i /><i /><span>learning.cs</span></div>
            <div className="code-lines"><span className="code-muted">01</span><span className="code-purple">using</span> System;<br /><span className="code-muted">02</span><span className="code-blue">class</span> Practical<br /><span className="code-muted">03</span>{"{"}<br /><span className="code-muted">04</span>&nbsp;&nbsp;<span className="code-purple">static void</span> Learn()<br /><span className="code-muted">05</span>&nbsp;&nbsp;{"{"}<br /><span className="code-muted">06</span>&nbsp;&nbsp;&nbsp;&nbsp;Build();<br /><span className="code-muted">07</span>&nbsp;&nbsp;{"}"}<br /><span className="code-muted">08</span>{"}"}</div>
            <div className="window-footer"><span className="status-dot" /> Ready to learn</div>
          </div>
          <div className="floating-tag"><Code2 size={16} /> Practical learning</div>
        </div>
      </section>

      <section className="today-section" id="today">
        <div className="section-heading">
          <div><div className="eyebrow">YOUR LEARNING DASHBOARD</div><h2>Today&apos;s practicals</h2><p>Choose a subject to open its practical lesson page.</p></div>
          <span className="date-chip">TODAY <span>•</span> PRACTICALS</span>
        </div>
        <div className="practical-grid">
          {practicals.map((item) => {
            const Icon = item.icon;
            return <article className={`practical-card ${item.tone}`} key={item.path}>
              <div className="card-top"><span className="card-number">PRACTICAL {item.number}</span><span className="card-icon"><Icon size={22} /></span></div>
              <div className="card-content"><h3>{item.title}</h3><p>{item.description}</p></div>
              <div className="card-bottom"><span>{item.detail}</span><Link to={item.path} className="circle-link" aria-label={`Open ${item.title}`}><ArrowRight size={18} /></Link></div>
            </article>;
          })}
        </div>
      </section>
      <section className="learning-note"><div className="note-icon"><GraduationCap size={22} /></div><div><strong>Made from your practical notes</strong><p>Each lesson will include its topic, complete code, a clear explanation of what the code does, and an output preview where possible. Send the relevant notes to add the exact practical content.</p></div></section>
    </main>
  );
}

function LessonPage({ practical }) {
  const Icon = practical.icon;
  return (
    <main className="page-shell lesson-shell">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>{practical.short}</span></div>
      <section className={`lesson-hero ${practical.tone}`}>
        <div className="lesson-icon"><Icon size={26} /></div>
        <div><div className="eyebrow">TODAY&apos;S PRACTICAL · {practical.number}</div><h1>{practical.title}</h1><p>{practical.description}</p></div>
      </section>
      <div className="lesson-layout">
        <aside className="lesson-sidebar">
          <span className="sidebar-label">LESSON CONTENT</span>
          <a className="sidebar-item selected" href="#topic"><BookOpen size={16} /> Topic</a>
          <a className="sidebar-item" href="#code"><Code2 size={16} /> Source code</a>
          <a className="sidebar-item" href="#explanation"><GraduationCap size={16} /> Code explanation</a>
          <a className="sidebar-item" href="#output"><MonitorPlay size={16} /> Output preview</a>
          <div className="sidebar-tip"><Sparkles size={16} /><span>Lessons will be added from your class notes.</span></div>
        </aside>
        <div className="lesson-main">
          <section className="content-panel" id="topic"><div className="panel-heading"><span className="step-index">01</span><div><h2>Practical topic</h2><p>The exact topic will be taken from your note.</p></div></div><div className="empty-topic"><BookOpen size={23} /><div><strong>Waiting for your practical note</strong><p>Upload or paste the note for this practical. I&apos;ll identify the topic and prepare the lesson in the same order as your material.</p></div></div></section>
          <section className="content-panel" id="code"><div className="panel-heading"><span className="step-index">02</span><div><h2>Complete source code</h2><p>Code will be organised and formatted for easy copying.</p></div></div><div className="code-placeholder"><div className="code-toolbar"><span><i /> <i /> <i /></span><span>Source code · Added with notes</span></div><pre><code>// Your practical code will appear here.{"\n"}// Each important section will be explained below.</code></pre></div></section>
          <section className="content-panel" id="explanation"><div className="panel-heading"><span className="step-index">03</span><div><h2>How the code works</h2><p>A step-by-step explanation in simple language.</p></div></div><div className="explanation-placeholder"><GraduationCap size={21} /><span>Every important line or block of code will be explained, including its purpose and how it contributes to the application.</span></div></section>
          <section className="content-panel" id="output"><div className="panel-heading"><span className="step-index">04</span><div><h2>Expected output</h2><p>See what the practical should produce.</p></div></div><div className="output-placeholder"><div className="output-placeholder-head"><span><span className="status-dot" /> OUTPUT PREVIEW</span><span>Preview area</span></div><div className="output-placeholder-body"><MonitorPlay size={30} /><strong>Output preview will appear here</strong><p>For Web Design, an HTML preview can be displayed here. For C# Visual Applications, the expected form layout and behaviour will be described or illustrated.</p></div></div></section>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return <div className="app"><Header /><Routes><Route path="/" element={<HomePage />} />{practicals.map((item) => <Route key={item.path} path={item.path} element={<LessonPage practical={item} />} />)}<Route path="*" element={<HomePage />} /></Routes><Footer /></div>;
}
