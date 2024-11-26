'use client';

import { Select, SelectItem } from '@nextui-org/react';
import { ChangeEventHandler } from 'react';

const items = [
  { key: 'original', label: 'Original' },
  { key: 'alphabetical', label: 'Alphabetical' }
];

export default function FlashcardListFilters({ handleOnChange }: { handleOnChange: ChangeEventHandler }) {
  return (
    <Select
      name="order"
      placeholder="Original"
      aria-label="Sort cards"
      radius="sm"
      className="max-w-xs font-semibold text-dark-electric-blue"
      onChange={handleOnChange}>
      {items.map(item => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
