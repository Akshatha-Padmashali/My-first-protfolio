import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  Cpu, 
  Network, 
  TerminalSquare, 
  Database,
  Sparkles,
  MessageSquare,
  Users,
  Clock,
  Presentation,
  Check
} from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import Badge from './UI/Badge';
import { technicalSkills, softSkills } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getTechIcon = (name) => {
    switch (name) {
      case 'Code2':
        return <Code2 size={24} className="text-teal" />;
      case 'Binary':
        return <Binary size={24} className="text-cyan" />;
      case 'Cpu':
        return <Cpu size={24} className="text-blue" />;
      case 'Network':
        return <Network size={24} className="text-teal" />;
      case 'TerminalSquare':
        return <TerminalSquare size={24} className="text-cyan" />;
      case 'Database':
        return <Database size={24} className="text-blue" />;
      default:
        return <Code2 size={24} className="text-teal" />;
    }
  };

  const getSoftIcon = (name) => {
    switch (name) {
      case 'Problem Solving':
        return <Sparkles size={22} className="text-teal" />;
      case 'Communication':
        return <MessageSquare size={22} className="text-cyan" />;
      case 'Teamwork':
        return <Users size={22} className="text-blue" />;
      case 'Time Management':
        return <Clock size={22} className="text-teal" />;
      case 'Presentation Skills':
        return <Presentation size={22} className="text-cyan" />;
      default:
        return <Check size={22} className="text-teal" />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionTitle
          eyebrow="Competencies & Proficiencies"
          title="Skills &"
          highlight="Expertise"
          subtitle="Curated core competencies across artificial intelligence, database architecture, and interpersonal collaboration."
        />

        {/* Tab Controls */}
        <div className="skills-tabs">
          <button
            type="button"
            className={`skills-tab-btn ${activeTab === 'all' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Competencies
          </button>
          <button
            type="button"
            className={`skills-tab-btn ${activeTab === 'technical' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Core ({technicalSkills.length})
          </button>
          <button
            type="button"
            className={`skills-tab-btn ${activeTab === 'soft' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skills ({softSkills.length})
          </button>
        </div>

        {/* Technical Skills Area */}
        {(activeTab === 'all' || activeTab === 'technical') && (
          <div className="skills-group-block">
            <div className="group-header">
              <h3 className="group-title">
                <Code2 size={20} className="text-teal" />
                <span>Technical Skills</span>
              </h3>
              <span className="group-caption">Fundamental languages, core domains & relational data systems</span>
            </div>

            <div className="skills-cards-grid">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="card skill-card">
                  <div className="skill-card-top">
                    <div className="skill-icon-bubble">
                      {getTechIcon(skill.icon)}
                    </div>
                    <Badge variant="teal">{skill.badge}</Badge>
                  </div>

                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category-label">{skill.category}</span>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills Area */}
        {(activeTab === 'all' || activeTab === 'soft') && (
          <div className="skills-group-block">
            <div className="group-header">
              <h3 className="group-title">
                <Users size={20} className="text-cyan" />
                <span>Soft Skills & Professional Qualities</span>
              </h3>
              <span className="group-caption">Interpersonal, cognitive, and collaborative strengths</span>
            </div>

            <div className="soft-skills-grid">
              {softSkills.map((skill) => (
                <div key={skill.name} className="card soft-skill-card">
                  <div className="soft-skill-icon-wrap">
                    {getSoftIcon(skill.name)}
                  </div>
                  <div className="soft-skill-info">
                    <h4 className="soft-skill-name">{skill.name}</h4>
                    <p className="soft-skill-desc">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
