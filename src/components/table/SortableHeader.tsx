import React from 'react';
import SortIcon from './SortIcon';

interface SortableHeaderProps {
  field: string;
  label: string;
  currentField: string;
  direction: 'asc' | 'desc';
  onSort: (field: string) => void;
}

export default function SortableHeader({ 
  field, 
  label, 
  currentField, 
  direction, 
  onSort 
}: SortableHeaderProps) {
  return (
    <th 
      className="px-6 py-3 text-right cursor-pointer hover:bg-background-lighter transition-colors"
      onClick={() => onSort(field)}
    >
      <div className="flex items-center justify-end gap-1 text-text-secondary">
        {label}
        <SortIcon
          currentField={currentField}
          field={field}
          direction={direction}
        />
      </div>
    </th>
  );
}