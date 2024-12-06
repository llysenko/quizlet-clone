'use client';

import { FlashcardSet } from '.prisma/client';

import Heading3 from '@/components/headings/heading-3';

import AppCarousel from '@/features/flashcards/components/create-set/app-carousel';
import AppCarouselCard from '@/features/flashcards/components/create-set/app-carousel-card';

export default function RecentSets({ sets }: { sets: FlashcardSet[] }) {
  const items = sets.map((set: FlashcardSet) => <AppCarouselCard key={set.id} set={set} />);

  return (
    <div className="flex flex-col gap-4">
      <Heading3>Recent</Heading3>
      <AppCarousel items={items} />
    </div>
  );
}
