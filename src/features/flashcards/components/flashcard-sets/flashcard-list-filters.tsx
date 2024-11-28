'use client';

import { Select, SelectItem } from '@nextui-org/react';
import clsx from 'clsx';
import { ChangeEventHandler } from 'react';

import { FILTERS } from '@/features/flashcards/lib/constants';

const items = [
  { key: 'original', label: 'Original' },
  { key: 'alphabetical', label: 'Alphabetical' }
];

export default function FlashcardListFilters({
  handleOnChange,
  handleFilterCards,
  currentFilter = FILTERS.ALL,
  starredCount = 0
}: {
  handleOnChange: ChangeEventHandler;
  handleFilterCards: (filter: string) => void;
  currentFilter: string;
  starredCount: number;
}) {
  return (
    <div className="flex grow items-center justify-end gap-8">
      <div className="flex items-center gap-8 border-b-2 border-bright-gray">
        <button
          className={clsx(
            currentFilter === FILTERS.ALL && 'border-ultramarine-blue',
            'mb-[-2px] border-b-2 border-transparent bg-transparent px-0 py-2 text-sm font-semibold hover:border-ultramarine-blue'
          )}
          onClick={() => handleFilterCards(FILTERS.ALL)}>
          All
        </button>
        <button
          className={clsx(
            currentFilter === FILTERS.STARRED && 'border-ultramarine-blue',
            'mb-[-2px] border-b-2 border-transparent bg-transparent px-0 py-2 text-sm font-semibold hover:border-ultramarine-blue'
          )}
          onClick={() => handleFilterCards(FILTERS.STARRED)}>
          Starred ({starredCount})
        </button>
      </div>
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
    </div>
  );
}
