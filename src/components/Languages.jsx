import React from 'react';
import { Globe2, MessageSquare, CheckCircle } from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import Badge from './UI/Badge';
import { languages } from '../data/portfolioData';

export default function Languages() {
  return (
    <section id="languages" className="section languages-section">
      <div className="container">
        <SectionTitle
          eyebrow="Multilingual Communication"
          title="Languages"
          highlight="Known"
          subtitle="Effective verbal and written communication across regional, national, and international contexts."
        />

        <div className="languages-grid">
          {languages.map((lang) => (
            <div key={lang.name} className="card language-card">
              <div className="lang-card-header">
                <div className="lang-icon-wrap">
                  <Globe2 size={24} className="text-teal" />
                </div>
                <Badge variant="cyan">{lang.badge}</Badge>
              </div>

              <h3 className="lang-name">{lang.name}</h3>
              <p className="lang-proficiency">{lang.proficiency}</p>

              <div className="lang-divider"></div>

              <div className="lang-highlight-row">
                <MessageSquare size={16} className="text-muted" />
                <span className="lang-highlight-text">{lang.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
