import { Flashcard } from '.prisma/client';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

import { updateFlashcard } from '@/features/flashcards/actions';
import styles from '@/features/flashcards/styles.module.scss';

const controlsData = [
  {
    id: 'star',
    alt: 'Star the card',
    tooltipContent: 'Star',
    imagePath: '/static/images/icon__star.svg'
  },
  {
    id: 'sound',
    alt: 'Play the card sound',
    tooltipContent: 'Play audio for this term',
    imagePath: '/static/images/icon__sound.svg'
  },
  {
    id: 'edit',
    alt: 'Edit the card',
    tooltipContent: 'Edit',
    imagePath: '/static/images/icon__pencil.svg'
  }
];

type Props = {
  card: Flashcard;
  size?: string;
};

export default function FlashcardControls({ card, size = 'lg' }: Props) {
  const [isFlashcardStarred, setIsFlashcardStarred] = useState<boolean>(card.isStarred);

  async function toggleStarred() {
    setIsFlashcardStarred(!isFlashcardStarred);

    await updateFlashcard(card.id, { isStarred: !isFlashcardStarred });
  }

  function edit() {
    console.log('edit');
  }

  return (
    <div className="flex w-[6.75rem]">
      {controlsData.map(data => (
        <AppTooltip key={data.id} content={data.tooltipContent}>
          <Button
            isIconOnly
            aria-label={data.alt}
            radius="full"
            className="bg-transparent hover:bg-bright-gray"
            onClick={data.id === 'star' ? toggleStarred : edit}>
            <Image
              src={data.imagePath}
              alt={data.alt}
              width={24}
              height={24}
              className={clsx(data.id === 'star' && isFlashcardStarred && styles.active, styles[`icon__${size}`])}
            />
          </Button>
        </AppTooltip>
      ))}
    </div>
  );
}
