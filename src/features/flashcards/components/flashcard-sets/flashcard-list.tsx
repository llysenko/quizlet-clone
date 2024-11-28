'use client';

import { Spinner } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';

import Heading3 from '@/components/headings/heading-3';

import { getFlashcards } from '@/features/flashcards/actions';
import FlashcardListFilters from '@/features/flashcards/components/flashcard-sets/flashcard-list-filters';
import FlashcardListItem from '@/features/flashcards/components/flashcard-sets/flashcard-list-item';
import { FILTERS, ORDER } from '@/features/flashcards/lib/constants';

import { Flashcard } from '.prisma/client';

export default function FlashcardList({ set }: any) {
  const [cards, setCards] = useState<Flashcard[]>(set?.flashcards);
  const [currentFilter, setCurrentFilter] = useState<string>(FILTERS.ALL);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function sortCards(event: ChangeEvent<HTMLSelectElement>) {
    setIsLoading(true);

    const sortedCards = await getFlashcards(
      { flashcardSetId: set.id },
      event.target.value === ORDER.ALPHABETICAL ? 'term' : 'createdAt'
    );

    setCards(sortedCards);
    setIsLoading(false);
  }

  async function filterCards(filter: string) {
    if (filter === currentFilter) return;

    setIsLoading(true);

    const conditions: Partial<Flashcard> = { flashcardSetId: set.id };

    if (filter === FILTERS.STARRED) conditions.isStarred = true;

    const filteredCards = await getFlashcards(conditions);

    setCurrentFilter(filter);
    setCards(filteredCards);
    setIsLoading(false);
  }

  return (
    <section className="flex flex-col">
      <header className="mb-6 flex flex-wrap items-center justify-between">
        <Heading3 className="mr-4">Terms in this set ({set?._count.flashcards})</Heading3>
        <FlashcardListFilters
          handleOnChange={sortCards}
          handleFilterCards={filterCards}
          currentFilter={currentFilter}
          starredCount={set?.starred}
        />
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
