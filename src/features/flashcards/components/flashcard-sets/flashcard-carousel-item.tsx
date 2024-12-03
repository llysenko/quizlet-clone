import clsx from 'clsx';

import FlashcardCarouselItemDefinition from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-item-definition';
import FlashcardCarouselItemTerm from '@/features/flashcards/components/flashcard-sets/flashcard-carousel-item-term';

import styles from '../../styles.module.scss';

export default function FlashCardCarouselItem() {
  return (
    <div className={clsx(styles.flashcard_container)}>
      <div className={clsx(styles.flashcard, 'rounded-2xl shadow-[0_0_2rem_0_#282e3e1f]')}>
        <FlashcardCarouselItemTerm />
        <FlashcardCarouselItemDefinition />
      </div>
    </div>
  );
}
