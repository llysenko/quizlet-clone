'use client';

import { Flashcard } from '.prisma/client';
import Image from 'next/image';
import clsx from 'clsx';

import FlashcardControls from '@/features/flashcards/components/flashcard-sets/flashcard-controls';

import styles from '../../styles.module.scss';

export default function FlashcardCarouselItemTerm({ card }: { card: Flashcard }) {
  return (
    <div className={clsx(styles.term, 'z-10')}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-2 text-xs font-semibold">
            <Image src="/static/images/icon__lightbulb.svg" alt="Hint" width={16} height={16} />
            Get a hint
          </div>
          <FlashcardControls card={card} size="sm" />
        </div>
        <div className="text-wrap break-words text-2xl">{card.term}</div>
        <div></div>
      </div>
    </div>
  );
}
