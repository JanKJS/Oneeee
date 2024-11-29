import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmailLinkProps {
  className?: string;
}

export default function EmailLink({ className = '' }: EmailLinkProps) {
  return (
    <Link 
      to="/contact" 
      className={`inline-flex items-center gap-1 text-primary hover:text-primary-dark transition-colors ${className}`}
    >
      <Mail className="w-4 h-4" />
      info@cryptowatcher.org
    </Link>
  );
}