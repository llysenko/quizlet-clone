'use client';

import { Spinner } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';

import Heading3 from '@/components/headings/heading-3';

import { getFlashcards } from '@/features/flashcards/actions';
import FlashcardListFilters from '@/features/flashcards/components/flashcard-sets/flashcard-list-filters';
import FlashcardListItem from '@/features/flashcards/components/flashcard-sets/flashcard-list-item';

import { Flashcard } from '.prisma/client';

export default function FlashcardList({
  set
}: {
  set: { flashcards: Flashcard[]; _count: { flashcards: number }; id: number };
}) {
  const [cards, setCards] = useState<Flashcard[]>(set?.flashcards);
  const [isLoading, setIsLoading] = useState(false);

  async function sortCards(event: ChangeEvent<HTMLSelectElement>) {
    setIsLoading(true);

    const sortedCards = await getFlashcards(set.id, event.target.value === 'alphabetical' ? 'term' : 'createdAt');

    setCards(sortedCards);
    setIsLoading(false);
  }

  return (
    <section className="flex flex-col">
      <header className="mb-6 flex items-center justify-between">
        <Heading3>Terms in this set ({set?._count.flashcards})</Heading3>
        <FlashcardListFilters handleOnChange={sortCards} />
      </header>

      <div className="mb-10 flex flex-col gap-3 rounded-2xl bg-ghost-white p-4">
        {isLoading ? (
          <Spinner color="warning" size="md" />
        ) : (
          cards.map(card => <FlashcardListItem key={card.id} card={card} />)
        )}
      </div>
    </section>
  );
}
