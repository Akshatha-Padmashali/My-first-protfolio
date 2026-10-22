import React, { useState } from 'react';
import { Database, Activity, CheckCircle2, Layers, Cpu, Code2, ExternalLink } from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import Badge from './UI/Badge';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'Database':
        return <Database size={28} className="text-teal" />;
      case 'Activity':
        return <Activity size={28} className="text-cyan" />;
      default:
        return <Code2 size={28} className="text-teal" />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionTitle
          eyebrow="Practical Engineering"
          title="Featured"
          highlight="Projects"
          subtitle="Real-world academic and predictive systems implementing robust database models and machine learning pipelines."
        />

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="card project-card">
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  {getProjectIcon(proj.icon)}
                </div>
                <div className="project-header-meta">
                  <Badge variant={proj.id === 'heart-disease-prediction' ? 'cyan' : 'teal'}>
                    {proj.badge}
                  </Badge>
                  <span className="project-category">{proj.category}</span>
                </div>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-subtitle-text">{proj.subtitle}</p>

              <p className="project-summary">{proj.summary}</p>

              <div className="project-highlights-box">
                <h4 className="highlights-heading">
                  <Layers size={15} className="text-teal" />
                  <span>Key Implementation Details</span>
                </h4>
                <ul className="project-points-list">
                  {proj.keyPoints.map((point, idx) => (
                    <li key={idx} className="project-point-item">
                      <CheckCircle2 size={16} className="point-icon text-teal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {proj.technologies.map((tech) => (
                    <span key={tech} className="tech-badge-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
