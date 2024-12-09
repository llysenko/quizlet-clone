'use client';

import { Flashcard, FlashcardSet } from '.prisma/client';
import { ChangeEvent, useState } from 'react';
import { Button, Spinner } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Heading3 from '@/components/headings/heading-3';

import { getFlashcards } from '@/features/flashcards/actions';
import FlashcardListFilters from '@/features/flashcards/components/flashcard-sets/flashcard-list-filters';
import FlashcardListItem from '@/features/flashcards/components/flashcard-sets/flashcard-list-item';
import { FILTERS, ORDER } from '@/features/flashcards/lib/constants';

type Props = {
  set: Partial<FlashcardSet & { flashcards?: Flashcard[] } & { starred: number } & { _count: { flashcards: number } }>;
};

export default function FlashcardList({ set }: Props) {
  const [cards, setCards] = useState<Flashcard[]>(set?.flashcards || []);
  const [currentFilter, setCurrentFilter] = useState<string>(FILTERS.ALL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [starredCount, setStarredCount] = useState<number>(set?.starred || 0);
  const router = useRouter();

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
    if (filter === FILTERS.STARRED && starredCount === 0) return;

    setIsLoading(true);

    const conditions: Partial<Flashcard> = { flashcardSetId: set.id };

    if (filter === FILTERS.STARRED) conditions.isStarred = true;

    const filteredCards = await getFlashcards(conditions);

    setCurrentFilter(filter);
    setCards(filteredCards);
    setIsLoading(false);
  }

  function calcStarredCount(isStarred: boolean) {
    setStarredCount(isStarred ? starredCount + 1 : starredCount - 1);
  }

  function redirectToEditPage() {
    router.push(`/${set.id}/edit`);
  }

  return (
    <section className="flex flex-col">
      <header className="mb-6 flex flex-wrap items-center justify-between">
        <Heading3 className="mr-4">Terms in this set ({set?._count?.flashcards})</Heading3>
        <FlashcardListFilters
          handleOnChange={sortCards}
          handleFilterCards={filterCards}
          currentFilter={currentFilter}
          starredCount={starredCount}
        />
      </header>

      <div className="mb-10 flex flex-col gap-3 rounded-2xl bg-ghost-white p-4">
        {isLoading ? (
          <Spinner color="warning" size="md" />
        ) : (
          cards.map(card => <FlashcardListItem key={card.id} card={card} />)
        )}
      </div>

      <div className="mb-10 flex justify-center">
        <Button
          size="lg"
          variant="ghost"
          radius="sm"
          className="font-semibold text-dark-electric-blue hover:bg-bright-gray"
          onClick={redirectToEditPage}>
          Add or remove terms
          <Image src="/images/icon__pencil.svg" alt="Edit the set" width={16} height={16} />
        </Button>
      </div>
    </section>
  );
}
