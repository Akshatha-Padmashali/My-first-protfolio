import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#internship', label: 'Internship' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#languages', label: 'Languages' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = navLinks.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}
      role="banner"
    >
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-logo-icon">AP</div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-sub">AI & ML Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" role="navigation" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {link.label}
                    {isActive && <span className="nav-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions (Resume, GitHub & Mobile Toggle) */}
        <div className="navbar-actions">
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm nav-github-btn"
              title="View GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
              <span className="desktop-only-text">GitHub</span>
            </a>
          )}

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm resume-btn"
            title="Download Akshatha's Resume PDF"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles size={16} className="text-teal" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mobile-resume-btn"
              onClick={closeMenu}
            >
              <FileDown size={18} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
