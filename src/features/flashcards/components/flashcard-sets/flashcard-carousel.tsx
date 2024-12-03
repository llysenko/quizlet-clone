import FlashCardCarouselItem from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-item';
import FlashcardCarouselSettings from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-settings';

import { FlashcardSet } from '.prisma/client';

export default function FlashcardCarousel({ set }: { set: Partial<FlashcardSet> }) {
  return (
    <div className="flex flex-col gap-4">
      <FlashCardCarouselItem />
      <FlashcardCarouselSettings />
    </div>
  );
}
