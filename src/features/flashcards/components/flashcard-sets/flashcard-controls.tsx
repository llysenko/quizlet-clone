import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

import styles from '@/features/flashcards/styles.module.scss';

export default function FlashCardControls({
  isEditMode,
  isFlashcardStarred,
  size = 'lg',
  setIsEditMode,
  toggleStarred
}: any) {
  return (
    <div className="flex w-[6.75rem]">
      <AppTooltip content="Star">
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
            className={clsx(isFlashcardStarred && styles.active, styles[`icon__${size}`])}
          />
        </Button>
      </AppTooltip>
      <AppTooltip content="Play audio for this term">
        <Button
          isIconOnly
          aria-label="Play the card sound"
          radius="full"
          className="bg-transparent hover:bg-bright-gray">
          <Image
            src="/static/images/icon__sound.svg"
            alt="Play the card sound"
            width={24}
            height={24}
            className={styles[`icon__${size}`]}
          />
        </Button>
      </AppTooltip>
      <AppTooltip content="Edit">
        <Button
          isIconOnly
          aria-label="Edit"
          radius="full"
          className="bg-transparent hover:bg-bright-gray"
          onClick={() => setIsEditMode(!isEditMode)}>
          <Image
            src="/static/images/icon__pencil.svg"
            alt="Edit the card"
            width={24}
            height={24}
            className={clsx(isEditMode && styles.active, styles[`icon__${size}`])}
          />
        </Button>
      </AppTooltip>
    </div>
  );
}
