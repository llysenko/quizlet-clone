'use client';

import clsx from 'clsx';

import FlashCardControls from '@/features/flashcards/components/flashcard-sets/flashcard-controls';

import styles from '../../styles.module.scss';

export default function FlashcardCarouselItemDefinition({
  isEditMode,
  isFlashcardStarred,
  setIsEditMode,
  toggleStarred
}: any) {
  return (
    <div className={clsx(styles.definition, 'px-8 py-6')}>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex items-center justify-end">
          <FlashCardControls
            isEditMode={isEditMode}
            isFlashcardStarred={isFlashcardStarred}
            setIsEditMode={setIsEditMode}
            toggleStarred={toggleStarred}
            size="sm"
          />
        </div>
        <div className="text-wrap break-words text-2xl">Definition</div>
        <div></div>
      </div>
    </div>
  );
}
