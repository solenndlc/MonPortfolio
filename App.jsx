import React from 'react';
import './App.css';

// Remplacer les liens par vos propres images, projets et coordonnées
const portfolioData = {
  name: "SOLENN DELACROIX",
  title: "Étudiante en Informatique & Apprentie AMOA / DevOps",
  bio: "Passionnée par le développement logiciel, l'automatisation de tests et les infrastructures Cloud/DevOps. Actuellement en fin de cycle BUT Informatique et prête à relever de nouveaux défis.",
  skills: [
    "Python / Automation (Screenpy, Selenium)",
    "CI/CD & DevOps Tools",
    "Méthodes Agiles / AMOA",
    "React / JavaScript / HTML & CSS"
  ],
  projects: [
    {
      id: 1,
      title: "SIFEM2",
      description: "Automatisation de tests d'interface utilisateur (UI) et validation des composants de navigation (breadcrumbs/menus).",
      tags: ["Python", "Screenplay Pattern", "Pytest"]
    },
    {
      id: 2,
      title: "Infrastructure Cloud & CI/CD",
      description: "Mise en place de pipelines de déploiement continu et gestion de la configuration d'environnements virtualisés.",
      tags: ["Docker", "GitLab CI", "Linux"]
    }
  ],
  contact: {
    email: "votre.email@example.com",
    linkedin: "https://linkedin.com/in/votre-profil",
    github: "https://github.com/votre-github"
  }
};

function App() {
  return (
    <div className="portfolio-container">
      {/* Header / Hero Section */}
      <header className="hero-section">
        <h1 className="hero-name">{portfolioData.name}</h1>
        <p className="hero-title">{portfolioData.title}</p>
        <p className="hero-bio">{portfolioData.bio}</p>
        
        <div className="social-links">
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-social">LinkedIn</a>
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="btn-social">GitHub</a>
          <a href={`mailto:${portfolioData.contact.email}`} className="btn-social">Contact</a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-tag">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">Projets Récents</h2>
        <div className="projects-list">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} - {portfolioData.name} • Conçu avec React</p>
      </footer>
    </div>
  );
}

export default App;
