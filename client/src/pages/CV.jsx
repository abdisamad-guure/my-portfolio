import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { projects, skills } from '../data';

// Add the owner's PDF here when supplied. Vite verifies the file at build time.
const documents = import.meta.glob('/public/assets/*.[pP][dD][fF]', { eager: true, query: '?url', import: 'default' });
const cvUrl = Object.entries(documents).find(([path]) => /\/abdisamad-guure-cv\.pdf$/i.test(path))?.[1];

export default function CV() {
  return <section className="cv-page">
    <div className="cv-heading"><div><p className="kicker">Professional profile</p><h1>My skills.<br/><em>Your next developer.</em></h1></div>
      {cvUrl ? <a className="btn primary" href={cvUrl} download="Abdisamad-Guure-CV.pdf">Download CV <Download size={18}/></a> : <a className="btn primary" href="mailto:gcigale8@gmail.com?subject=CV%20request">Request my CV <Mail size={18}/></a>}
    </div>
    <article className="resume-sheet">
      <header className="resume-header"><div><p className="kicker">Full-stack developer · MERN</p><h2>Abdisamad Mohamud Mohamed</h2><p>Also known as Guure</p></div><img src="/assets/abdisamad-guure.jpeg" alt="Abdisamad Guure" width="88" height="88"/></header>
      <div className="resume-contact"><span><MapPin size={16}/> Mogadishu, Somalia</span><a href="mailto:gcigale8@gmail.com">gcigale8@gmail.com</a><a href="https://github.com/abdisamad-guure" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></div>
      <section className="resume-section"><h3>Profile</h3><p>I build modern web applications with MongoDB, Express, React, and Node.js. My focus is responsive interfaces, clear application logic, and maintainable code. I am open to freelance and full-time opportunities.</p></section>
      <section className="resume-section"><h3>Education</h3><div><div className="resume-project"><h4>Bachelor’s Degree in Public Administration</h4></div><div className="resume-project"><h4>Master’s Degree in International Relations</h4></div></div></section>
      <section className="resume-section"><h3>Technical skills</h3><div className="resume-skills">{skills.map(skill => <div key={skill.group}><h4>{skill.group}</h4><p>{skill.items.join(' · ')}</p></div>)}</div></section>
      <section className="resume-section"><h3>Selected projects</h3><div>{projects.map(project => <div className="resume-project" key={project.slug}><Link to={`/projects/${project.slug}`}><h4>{project.title}</h4><ArrowUpRight size={18}/></Link><p>{project.summary}</p><small>{project.stack.join(' / ')}</small></div>)}</div></section>
      <section className="resume-section"><h3>Languages</h3><p>Somali · English</p></section>
    </article>
  </section>;
}
