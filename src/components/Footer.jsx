import React from 'react';
import { ArrowUp, Heart, FileDown, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <span className="brand-logo-icon">AP</span>
              <span className="footer-brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-bio">
              Artificial Intelligence & Machine Learning Engineering student at AJ Institute of Engineering & Technology. Focused on data systems, machine learning, and disciplined engineering.
            </p>
            <div className="footer-meta-items">
              <span className="footer-meta-item">
                <MapPin size={14} className="text-teal" />
                <span>{personalInfo.location}</span>
              </span>
              <span className="footer-meta-item">
                <Mail size={14} className="text-cyan" />
                <span>{personalInfo.email}</span>
              </span>
              <span className="footer-meta-item">
                <Phone size={14} className="text-blue" />
                <span>{personalInfo.phone}</span>
              </span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#internship">Internship</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-col-title">Portfolio Highlights</h4>
            <ul className="footer-links-list">
              <li><a href="#projects">DBMS & ML Projects</a></li>
              <li><a href="#certifications">7 Certifications</a></li>
              <li><a href="#languages">Languages Known</a></li>
              <li><a href="#contact">Contact Channel</a></li>
              <li>
                <a href={personalInfo.resumePath} target="_blank" rel="noopener noreferrer" className="footer-resume-link">
                  <FileDown size={14} />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Portfolio built strictly with verified credentials.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
