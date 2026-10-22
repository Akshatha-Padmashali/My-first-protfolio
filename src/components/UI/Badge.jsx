import React from 'react';

export default function Badge({ children, variant = 'teal', className = '' }) {
  const variantClass = {
    teal: 'badge-teal',
    cyan: 'badge-cyan',
    slate: 'badge-slate',
  }[variant] || 'badge-teal';

  return (
    <span className={`badge ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
