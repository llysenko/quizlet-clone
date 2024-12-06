'use client';

import { Flashcard } from '.prisma/client';
import { useRef } from 'react';

import FlashcardCarouselItemDefinition from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-item-definition';
import FlashcardCarouselItemTerm from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-item-term';

import styles from '../../styles.module.scss';

export default function FlashCardCarouselItem({ card }: { card: Flashcard }) {
  const flashcardRef = useRef<HTMLDivElement>(null);

  function flipCard() {
    if (flashcardRef && flashcardRef.current) {
      flashcardRef.current.style.transform =
        flashcardRef.current.style.transform === 'rotateX(180deg)' ? 'rotateX(0)' : 'rotateX(180deg)';
    }
  }

  return (
    <>
      {card && (
        <div className={styles.flashcard_container} onClick={flipCard}>
          <div ref={flashcardRef} className={styles.flashcard}>
            <FlashcardCarouselItemTerm card={card} />
            <FlashcardCarouselItemDefinition card={card} />
          </div>
        </div>
      )}
    </>
  );
}
