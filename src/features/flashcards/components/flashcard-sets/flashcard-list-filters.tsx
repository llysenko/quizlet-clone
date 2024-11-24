'use client';

import { Select, SelectItem } from '@nextui-org/react';

const items = [
  { key: 'Original', label: 'Original' },
  { key: 'Alphabetical', label: 'Alphabetical' }
];

export default function FlashcardListFilters() {
  return (
    <Select
      placeholder="Original"
      aria-label="Sort cards"
      radius="sm"
      className="max-w-xs font-semibold text-dark-electric-blue">
      {items.map(item => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
