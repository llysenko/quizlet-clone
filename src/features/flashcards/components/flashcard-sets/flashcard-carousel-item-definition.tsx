'use client';

import { Flashcard } from '.prisma/client';

import FlashcardControls from '@/features/flashcards/components/flashcard-sets/flashcard-controls';

import styles from '../../styles.module.scss';

export default function FlashcardCarouselItemDefinition({ card }: { card: Flashcard }) {
  function openEditDialog() {
    alert('openEditDialog is not implemented yet');
  }

  return (
    <div className={styles.definition}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-end">
          <FlashcardControls card={card} size="sm" edit={openEditDialog} />
        </div>
        <div className="text-wrap break-words text-2xl">{card.definition}</div>
        <div></div>
      </div>
    </div>
  );
}
