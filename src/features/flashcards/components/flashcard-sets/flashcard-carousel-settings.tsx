import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  cardsTotalCount?: number;
  currentCardIndex: number;
  moveToPrevCard: () => void;
  moveToNextCard: () => void;
};

export default function FlashcardCarouselSettings({
  cardsTotalCount,
  currentCardIndex,
  moveToPrevCard,
  moveToNextCard
}: Props) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div>1</div>
      <div className="flex items-center gap-4">
        <Button
          disabled={currentCardIndex === 1}
          aria-label="Previous card"
          radius="full"
          variant="ghost"
          className={clsx(currentCardIndex === 1 && 'cursor-not-allowed opacity-25')}
          onPress={moveToPrevCard}>
          <Image src="/images/icon__arrow.svg" alt="Next" width={32} height={32} />
        </Button>
        <div className="font-semibold text-dark-electric-blue">
          {currentCardIndex} / {cardsTotalCount}
        </div>
        <Button
          disabled={currentCardIndex === cardsTotalCount}
          aria-label="Next card"
          radius="full"
          variant="ghost"
          className={clsx(currentCardIndex === cardsTotalCount && 'cursor-not-allowed opacity-25')}
          onPress={moveToNextCard}>
          <Image src="/images/icon__arrow.svg" alt="Next" width={32} height={32} className="rotate-180" />
        </Button>
      </div>
      <div>3</div>
    </div>
  );
}
