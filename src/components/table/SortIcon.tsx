import React from 'react';
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';

interface SortIconProps {
  currentField: string;
  field: string;
  direction: 'asc' | 'desc';
}

export default function SortIcon({ currentField, field, direction }: SortIconProps) {
  if (currentField !== field) {
    return <ArrowUpDown className="w-4 h-4 text-text-tertiary" />;
  }
  
  return direction === 'asc' ? 
    <ArrowUp className="w-4 h-4 text-primary" /> : 
    <ArrowDown className="w-4 h-4 text-primary" />;
}