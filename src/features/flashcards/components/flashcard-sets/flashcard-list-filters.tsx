'use client';

import { Select, SelectItem } from '@nextui-org/react';

const items = [
  { key: 'Original', label: 'Original' },
  { key: 'Alphabetical', label: 'Alphabetical' }
];

export default function FlashcardListFilters() {
  return (
    <Select placeholder="Original" className="max-w-xs font-semibold text-gray-600">
      {items.map(item => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
