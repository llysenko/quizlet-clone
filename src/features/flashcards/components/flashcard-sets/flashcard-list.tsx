'use client';

import { ChangeEvent, useState } from 'react';

import FlashcardListItem from '@/features/flashcards/components/flashcard-sets/flashcard-list-item';
import Heading3 from '@/components/headings/heading-3';
import FlashcardListFilters from '@/features/flashcards/components/flashcard-sets/flashcard-list-filters';
import { getFlashcards } from '@/features/flashcards/actions';

import { Flashcard } from '.prisma/client';

export default function FlashcardList({
  set
}: {
  set: { flashcards: Flashcard[]; _count: { flashcards: number }; id: number };
}) {
  const [cards, setCards] = useState<Flashcard[]>(set?.flashcards);

  async function sortCards(event: ChangeEvent<HTMLSelectElement>) {
    const sortedCards = await getFlashcards(set.id, event.target.value === 'alphabetical' ? 'term' : 'createdAt');

    setCards(sortedCards);
  }

  return (
    <section className="flex flex-col">
      <header className="flex items-center justify-between mb-6">
        <Heading3>Terms in this set ({set?._count.flashcards})</Heading3>
        <FlashcardListFilters handleOnChange={sortCards} />
      </header>

      <div className="mb-10 flex flex-col gap-3 rounded-2xl bg-ghost-white p-4">
        {cards.map(card => (
          <FlashcardListItem key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
