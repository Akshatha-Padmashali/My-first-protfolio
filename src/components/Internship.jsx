import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Terminal, Layers, Sparkles } from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import Badge from './UI/Badge';
import { internshipExperience } from '../data/portfolioData';

export default function Internship() {
  return (
    <section id="internship" className="section internship-section">
      <div className="container">
        <SectionTitle
          eyebrow="Hands-On Industry Experience"
          title="Practical"
          highlight="Internship"
          subtitle="Applied machine learning, data cleaning, and statistical visualization on real-world datasets."
        />

        <div className="internship-spotlight">
          <div className="card internship-feature-card">
            <div className="internship-header-bar">
              <div className="internship-company-block">
                <div className="internship-badge-icon">
                  <Briefcase size={28} className="text-teal" />
                </div>
                <div>
                  <div className="internship-company-row">
                    <h3 className="internship-company">{internshipExperience.company}</h3>
                    <Badge variant="teal">{internshipExperience.status}</Badge>
                  </div>
                  <h4 className="internship-role">{internshipExperience.role}</h4>
                </div>
              </div>

              <div className="internship-duration-pill">
                <Calendar size={16} className="text-cyan" />
                <span>{internshipExperience.duration}</span>
              </div>
            </div>

            <div className="internship-divider"></div>

            <div className="internship-body">
              <div className="internship-narrative">
                <p className="internship-lead">
                  {internshipExperience.summary}
                </p>

                <h5 className="responsibilities-title">
                  <Sparkles size={16} className="text-teal" />
                  <span>Key Responsibilities & Project Milestones:</span>
                </h5>

                <ul className="responsibilities-list">
                  {internshipExperience.responsibilities.map((resp, i) => (
                    <li key={i} className="resp-item">
                      <CheckCircle2 size={18} className="resp-icon text-teal" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="internship-tools-panel">
                <div className="tools-panel-header">
                  <Terminal size={18} className="text-cyan" />
                  <span>Tools & Technologies Leveraged</span>
                </div>

                <div className="tools-chips-wrap">
                  {internshipExperience.toolsUsed.map((tool) => (
                    <span key={tool} className="tool-chip">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="internship-key-takeaway">
                  <div className="takeaway-title">
                    <Layers size={16} className="text-teal" />
                    <span>Core Takeaways</span>
                  </div>
                  <p className="takeaway-text">
                    Gained hands-on experience in the complete data science lifecycle, from handling messy real-world data and missing values to exploratory distribution plotting and building predictive models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
