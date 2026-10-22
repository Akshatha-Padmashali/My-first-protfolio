import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import { educationList } from '../data/portfolioData';

export default function Education() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={24} className="text-teal" />;
      case 'Award':
        return <Award size={24} className="text-cyan" />;
      case 'BookOpen':
        return <BookOpen size={24} className="text-blue" />;
      default:
        return <GraduationCap size={24} className="text-teal" />;
    }
  };

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionTitle
          eyebrow="Academic Background"
          title="Educational"
          highlight="Qualifications"
          subtitle="A proven track record of academic excellence from foundational schooling to specialized AI & ML engineering."
        />

        <div className="education-grid">
          {educationList.map((edu, idx) => (
            <div key={edu.id} className="card education-card">
              <div className="edu-card-top">
                <div className="edu-header-left">
                  <div className="edu-icon-container">
                    {getIcon(edu.icon)}
                  </div>
                  <div>
                    <span className="edu-level-badge">{edu.tag}</span>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-field">{edu.field}</p>
                  </div>
                </div>

                <div className="edu-score-badge">
                  <span className="edu-score-label">{edu.scoreType}</span>
                  <span className="edu-score-number">{edu.score}</span>
                </div>
              </div>

              <div className="edu-institution-row">
                <MapPin size={16} className="text-muted" />
                <span className="edu-inst-name">{edu.institution}</span>
              </div>

              <p className="edu-description">{edu.description}</p>

              <div className="edu-card-footer">
                <div className="edu-verified-chip">
                  <CheckCircle2 size={15} className="text-teal" />
                  <span>Verified Resume Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
