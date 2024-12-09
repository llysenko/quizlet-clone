import { Flashcard } from '.prisma/client';
import { useState } from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

import { updateFlashcard } from '@/features/flashcards/actions';
import styles from '@/features/flashcards/styles.module.scss';

enum Handler {
  Star = 'STAR',
  Play = 'PLAY',
  Edit = 'EDIT'
}

const controlsData = [
  {
    id: 1,
    alt: 'Star the card',
    ariaLabel: 'Star the card',
    tooltipContent: 'Star',
    imagePath: '/images/icon__star.svg',
    handler: Handler.Star
  },
  {
    id: 2,
    alt: 'Play the card sound',
    ariaLabel: 'Play the card sound',
    tooltipContent: 'Play audio for this term',
    imagePath: '/images/icon__sound.svg',
    handler: Handler.Play
  },
  {
    id: 3,
    alt: 'Edit the card',
    ariaLabel: 'Edit the card',
    tooltipContent: 'Edit',
    imagePath: '/images/icon__pencil.svg',
    handler: Handler.Edit
  }
];

type Props = {
  card: Flashcard;
  size?: string;
  edit: (isEditMode: boolean) => void;
};

export default function FlashcardControls({ card, size = 'lg', edit }: Props) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isFlashcardStarred, setIsFlashcardStarred] = useState<boolean>(card.isStarred);

  async function toggleStarred() {
    setIsFlashcardStarred(!isFlashcardStarred);

    await updateFlashcard(card.id, { isStarred: !isFlashcardStarred });
  }

  function play() {
    alert('Play is not implemented yet.');
  }

  function setEditMode() {
    setIsEditMode(prevState => !prevState);
    edit(!isEditMode);
  }

  return (
    <div className="flex w-[6.75rem]">
      {controlsData.map(data => (
        <AppTooltip key={data.id} content={data.tooltipContent}>
          <Button
            isIconOnly
            aria-label={data.ariaLabel}
            radius="full"
            className="bg-transparent hover:bg-bright-gray"
            onClick={
              data.handler === Handler.Star ? toggleStarred : data.handler === Handler.Play ? play : setEditMode
            }>
            <Image
              src={data.imagePath}
              alt={data.alt}
              width={24}
              height={24}
              className={clsx(
                data.handler === Handler.Star && isFlashcardStarred && styles.active,
                data.handler === Handler.Edit && isEditMode && styles.active,
                styles[`icon__${size}`]
              )}
            />
          </Button>
        </AppTooltip>
      ))}
    </div>
  );
}
