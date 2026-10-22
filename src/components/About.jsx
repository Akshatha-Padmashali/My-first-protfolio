import React from 'react';
import { Brain, Database, Cpu, Target, UserCheck, BookOpen } from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Brain size={26} className="text-teal" />,
      title: "Machine Learning & Data",
      description:
        "Passionate about analyzing complex datasets, identifying predictive patterns, and implementing machine learning algorithms with Python, Pandas, and NumPy.",
    },
    {
      icon: <Database size={26} className="text-cyan" />,
      title: "Database Management & SQL",
      description:
        "Skilled in relational schema design, query optimization, ACID compliance, and structuring reliable data storage workflows for real-world applications.",
    },
    {
      icon: <Cpu size={26} className="text-blue" />,
      title: "Core Engineering Foundations",
      description:
        "Strong foundation in Data Structures and Algorithms, Object-Oriented Programming (Java & Python), and rigorous analytical problem-solving methodologies.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionTitle
          eyebrow="Profile Overview"
          title="About"
          highlight="Akshatha Padmashali"
          subtitle="Engineering student dedicated to transforming complex data into impactful, intelligent software."
        />

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="card about-story-card">
            <div className="story-header">
              <div className="story-badge">
                <Target size={16} />
                <span>Career Objective</span>
              </div>
            </div>

            <blockquote className="objective-quote">
              "{personalInfo.careerObjective}"
            </blockquote>

            <p className="about-paragraph">
              Currently pursuing my Bachelor of Engineering in Artificial Intelligence and Machine Learning at{' '}
              <strong>AJ Institute of Engineering & Technology</strong>, Mangaluru, maintaining a strong{' '}
              <strong>CGPA of 8.53</strong>. My academic journey has been driven by a curiosity to understand how algorithms learn from data and how organized database schemas empower reliable software.
            </p>

            <p className="about-paragraph">
              Having completed a practical <strong>Data Analysis & Machine Learning Internship at Thiranex</strong>, I have worked hands-on with data cleaning, exploratory data analysis, and predictive modeling using Python, Google Colab, and industry-standard libraries.
            </p>

            <div className="about-highlights-list">
              <div className="about-hl-item">
                <UserCheck size={18} className="hl-icon" />
                <span>Eager to collaborate with engineering teams on challenging AI/ML problems.</span>
              </div>
              <div className="about-hl-item">
                <BookOpen size={18} className="hl-icon" />
                <span>Consistent academic record with 96.64% in SSLC and 92.66% in Pre-University.</span>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="pillars-column">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-text">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
