'use client';

import { use } from 'react';

import Heading3 from '@/components/headings/heading-3';

import AppCarouselCard from '@/features/flashcards/components/create-set/app-carousel-card';
import { FlashcardSet } from '@/features/flashcards/lib/types';

export default function RecentSets({ sets }: { sets: Promise<FlashcardSet[]> }) {
  const flashcardSets = use(sets);

  return (
    <div className="flex flex-col gap-4">
      <Heading3>Recent</Heading3>
      {flashcardSets?.length ? (
        flashcardSets?.map((set: FlashcardSet) => <AppCarouselCard key={set.id} set={set} />)
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
