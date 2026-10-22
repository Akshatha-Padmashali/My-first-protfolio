import React from 'react';

export default function SectionTitle({ eyebrow, title, highlight, subtitle, center = true }) {
  return (
    <div className={`section-header ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
