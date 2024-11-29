import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { updateFlashcard } from '@/features/flashcards/actions';

import styles from '../../styles.module.scss';
import { Flashcard } from '.prisma/client';

export default function FlashcardListItem({
  card,
  handleStarredCount
}: {
  card: Flashcard;
  handleStarredCount: (isStarred: boolean) => void;
}) {
  const [isFlashcardStarred, setIsFlashcardStarred] = useState(card.isStarred);

  async function toggleStarred() {
    setIsFlashcardStarred(!isFlashcardStarred);

    const updatedFlashcard = await updateFlashcard(card.id, { isStarred: !isFlashcardStarred });

    handleStarredCount(updatedFlashcard.isStarred);
  }

  return (
    <div
      key={card.id}
      className={clsx(styles.shadow, 'flex min-h-[3.625rem] justify-between rounded bg-white px-6 py-5')}>
      <div className="flex w-full gap-2">
        <div className={clsx(card.definition && 'border-r-2 border-ghost-white', 'w-1/3 py-2 pr-4')}>{card.term}</div>
        <div className="flex-1 py-2 pl-8 pr-4">{card.definition}</div>
      </div>
      <div className="flex w-[6.75rem]">
        <Button
          isIconOnly
          aria-label="Star the card"
          radius="full"
          className="bg-transparent hover:bg-bright-gray"
          onClick={toggleStarred}>
          <Image
            src="/static/images/icon__star.svg"
            alt="Star the card"
            width={24}
            height={24}
            className={clsx(isFlashcardStarred && styles.active)}
          />
        </Button>
        <Button
          isIconOnly
          aria-label="Play the card sound"
          radius="full"
          className="bg-transparent hover:bg-bright-gray">
          <Image src="/static/images/icon__sound.svg" alt="Play the card sound" width={24} height={24} />
        </Button>
        <Button isIconOnly aria-label="Edit" radius="full" className="bg-transparent hover:bg-bright-gray">
          <Image src="/static/images/icon__pencil.svg" alt="Edit the card" width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}
