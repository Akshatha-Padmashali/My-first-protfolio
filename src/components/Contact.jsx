import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  FileDown
} from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onShowToast) {
      onShowToast(`Copied ${type === 'email' ? 'email address' : 'phone number'} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Akshatha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Create a mailto URL to launch default mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    if (onShowToast) {
      onShowToast('Preparing message in your default email client...');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact"
          highlight="Akshatha"
          subtitle="Open for internships, entry-level engineering roles, and AI/ML project collaborations."
        />

        <div className="contact-grid">
          {/* Direct Channels */}
          <div className="contact-info-column">
            <div className="card contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-bubble">
                  <Mail size={24} className="text-teal" />
                </div>
                <div className="contact-card-title-wrap">
                  <span className="contact-card-label">Email Me</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-value-link">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="contact-card-actions">
                <a href={`mailto:${personalInfo.email}`} className="btn btn-sm btn-primary">
                  <Send size={14} />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  className="btn btn-sm btn-secondary copy-btn"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-teal" /> : <Copy size={14} />}
                  <span>{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="card contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-bubble">
                  <Phone size={24} className="text-cyan" />
                </div>
                <div className="contact-card-title-wrap">
                  <span className="contact-card-label">Call / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="contact-value-link">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="contact-card-actions">
                <a href={`tel:${personalInfo.phone}`} className="btn btn-sm btn-primary">
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
                <button
                  type="button"
                  className="btn btn-sm btn-secondary copy-btn"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number to clipboard"
                >
                  {copiedType === 'phone' ? <Check size={14} className="text-cyan" /> : <Copy size={14} />}
                  <span>{copiedType === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="card contact-card">
              <div className="contact-card-header">
                <div className="contact-icon-bubble">
                  <MapPin size={24} className="text-blue" />
                </div>
                <div className="contact-card-title-wrap">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-value-text">{personalInfo.location}</span>
                </div>
              </div>
              <div className="location-note">
                <span>Karnataka, India • Open to relocation & on-site/remote roles</span>
              </div>
            </div>

            <div className="card resume-download-card">
              <div className="resume-card-left">
                <FileDown size={28} className="text-teal" />
                <div>
                  <h4 className="resume-box-title">Looking for my complete resume?</h4>
                  <p className="resume-box-sub">Download the verified 1-page PDF document</p>
                </div>
              </div>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="card contact-form-card">
            <div className="form-card-header">
              <Sparkles size={20} className="text-teal" />
              <h3>Send a Direct Message</h3>
            </div>
            <p className="form-lead">
              Fill out this quick form to send an email directly to my inbox at {personalInfo.email}.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Internship / Role / Collaboration Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Share details about the role, project, or schedule a conversation..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-submit"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
