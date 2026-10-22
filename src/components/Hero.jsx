import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Languages as LanguagesIcon,
  Sparkles,
  Github
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Main Hero Content */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <Sparkles size={14} className="badge-icon-sparkle" />
              <span>AI & Machine Learning Engineering</span>
            </span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="hero-tagline">
            Building intelligent solutions through machine learning, robust database architecture, and systematic problem solving.
          </p>

          <p className="hero-objective">
            "{personalInfo.careerObjective}"
          </p>

          {/* Quick Contact Chips */}
          <div className="hero-contact-chips">
            <a href={`mailto:${personalInfo.email}`} className="contact-chip" title="Send email">
              <Mail size={15} />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="contact-chip" title="Call">
              <Phone size={15} />
              <span>{personalInfo.phone}</span>
            </a>
            <div className="contact-chip location-chip">
              <MapPin size={15} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileDown size={18} />
              <span>Resume PDF</span>
            </a>

            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="View GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Visual Card / Quick Metric Deck */}
        <div className="hero-visual">
          <div className="hero-card-glow-bg"></div>
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="avatar-monogram">AP</div>
              <div className="card-identity">
                <h3 className="card-name">{personalInfo.name}</h3>
                <p className="card-role">B.E. in AI & ML Candidate</p>
                <p className="card-inst">AJ Institute of Engineering & Technology</p>
              </div>
            </div>

            <div className="hero-metrics-grid">
              <div className="metric-box">
                <div className="metric-icon-wrap icon-teal">
                  <GraduationCap size={20} />
                </div>
                <div className="metric-data">
                  <span className="metric-value">8.53</span>
                  <span className="metric-label">Engineering CGPA</span>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap icon-cyan">
                  <Award size={20} />
                </div>
                <div className="metric-data">
                  <span className="metric-value">92.66%</span>
                  <span className="metric-label">PUC Score</span>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap icon-blue">
                  <BookOpen size={20} />
                </div>
                <div className="metric-data">
                  <span className="metric-value">7</span>
                  <span className="metric-label">Certifications</span>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-icon-wrap icon-indigo">
                  <LanguagesIcon size={20} />
                </div>
                <div className="metric-data">
                  <span className="metric-value">4</span>
                  <span className="metric-label">Languages</span>
                </div>
              </div>
            </div>

            <div className="hero-card-footer">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Internship Completed at Thiranex</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
