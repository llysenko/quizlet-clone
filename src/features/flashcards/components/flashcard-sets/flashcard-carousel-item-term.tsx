'use client';

import { Flashcard } from '.prisma/client';
import Image from 'next/image';

import FlashcardControls from '@/features/flashcards/components/flashcard-sets/flashcard-controls';

import styles from '../../styles.module.scss';

export default function FlashcardCarouselItemTerm({ card }: { card: Flashcard }) {
  function openEditDialog() {
    alert('openEditDialog is not implemented yet');
  }

  return (
    <div className={styles.term}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-2 text-xs font-semibold">
            <Image src="/images/icon__lightbulb.svg" alt="Hint" width={16} height={16} />
            Get a hint
          </div>
          <FlashcardControls card={card} size="sm" edit={openEditDialog} />
        </div>
        <div className="text-wrap break-words text-2xl">{card.term}</div>
        <div></div>
      </div>
    </div>
  );
}
