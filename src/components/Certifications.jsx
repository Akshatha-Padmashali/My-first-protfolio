import React from 'react';
import { 
  Award, 
  Code, 
  Binary, 
  FileCode2, 
  BrainCircuit, 
  FileSpreadsheet, 
  Sparkles, 
  LineChart,
  CheckCircle2
} from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import Badge from './UI/Badge';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={22} className="text-teal" />;
      case 'Binary':
        return <Binary size={22} className="text-cyan" />;
      case 'FileCode2':
        return <FileCode2 size={22} className="text-blue" />;
      case 'BrainCircuit':
        return <BrainCircuit size={22} className="text-teal" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet size={22} className="text-cyan" />;
      case 'Sparkles':
        return <Sparkles size={22} className="text-blue" />;
      case 'LineChart':
        return <LineChart size={22} className="text-teal" />;
      default:
        return <Award size={22} className="text-teal" />;
    }
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <SectionTitle
          eyebrow="Continuous Learning"
          title="Certified"
          highlight="Courses"
          subtitle="Specialized certifications completed across programming, generative AI, algorithms, and data analysis."
        />

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={cert.title} className="card cert-card">
              <div className="cert-card-top">
                <div className="cert-icon-box">
                  {getCertIcon(cert.icon)}
                </div>
                <Badge variant="teal">{cert.category}</Badge>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>

              <div className="cert-card-footer">
                <div className="cert-status">
                  <CheckCircle2 size={15} className="text-teal" />
                  <span>Verified Coursework</span>
                </div>
                <span className="cert-index">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
