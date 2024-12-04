'use client';

import { Flashcard, FlashcardSet } from '.prisma/client';
import { useEffect, useRef, useState } from 'react';

import FlashCardCarouselItem from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-item';
import FlashcardCarouselSettings from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-settings';

type Props = { set: Partial<FlashcardSet> & { flashcards?: Flashcard[] } & { _count?: { flashcards: number } } };

export default function FlashcardCarousel({ set }: Props) {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const listRef = useRef<HTMLDivElement>(null);
  const prevSlideIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (listRef.current) {
      if (prevSlideIndexRef.current !== null) {
        const prevChild = listRef.current.children[prevSlideIndexRef.current] as HTMLElement;

        if (!prevChild) return;

        prevChild.style.display = 'none';
      }

      const currentChild = listRef.current.children[slideIndex] as HTMLElement;

      if (!currentChild) return;

      currentChild.style.display = 'grid';
      prevSlideIndexRef.current = slideIndex;
    }
  }, [slideIndex]);

  function moveToPrevCard() {
    setSlideIndex(prev => prev - 1);
  }

  function moveToNextCard() {
    setSlideIndex(prev => prev + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div ref={listRef}>{set?.flashcards?.map(card => <FlashCardCarouselItem key={card.id} card={card} />)}</div>
      <FlashcardCarouselSettings
        cardsTotalCount={set._count?.flashcards}
        currentCardIndex={slideIndex + 1}
        moveToPrevCard={moveToPrevCard}
        moveToNextCard={moveToNextCard}
      />
    </div>
  );
}
