import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

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
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isFlashcardStarred, setIsFlashcardStarred] = useState<boolean>(card.isStarred);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const termRef = useRef<HTMLTextAreaElement | null>(null);

  useLayoutEffect(() => {
    if (termRef && termRef.current) {
      termRef.current.style.height = `${termRef?.current?.scrollHeight}px`;
    }
  }, [termRef.current?.scrollHeight]);

  useLayoutEffect(() => {
    if (descriptionRef && descriptionRef.current) {
      descriptionRef.current.style.height = `${descriptionRef?.current?.scrollHeight}px`;
    }
  }, [descriptionRef.current?.scrollHeight]);

  async function toggleStarred() {
    setIsFlashcardStarred(!isFlashcardStarred);

    const updatedFlashcard = await updateFlashcard(card.id, { isStarred: !isFlashcardStarred });

    handleStarredCount(updatedFlashcard.isStarred);
  }

  function toggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  return (
    <div
      key={card.id}
      className={clsx(styles.shadow, 'flex min-h-[3.625rem] justify-between rounded bg-white px-6 py-5')}>
      <div className="flex w-full gap-2">
        <textarea
          ref={termRef}
          readOnly={true}
          value={card.term}
          className={clsx(
            card.definition && 'border-r-2 border-ghost-white',
            'h-auto w-1/3 resize-none overflow-hidden py-2 pr-4'
          )}>
          {card.term}
        </textarea>
        <textarea
          ref={descriptionRef}
          readOnly={true}
          value={card.definition}
          className="h-auto flex-1 resize-none overflow-hidden py-2 pl-8 pr-4">
          {card.definition}
        </textarea>
      </div>
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
              className={clsx(isFlashcardStarred && styles.active)}
            />
          </Button>
        </AppTooltip>
        <AppTooltip content="Play audio for this term">
          <Button
            isIconOnly
            aria-label="Play the card sound"
            radius="full"
            className="bg-transparent hover:bg-bright-gray">
            <Image src="/static/images/icon__sound.svg" alt="Play the card sound" width={24} height={24} />
          </Button>
        </AppTooltip>
        <AppTooltip content="Edit">
          <Button
            isIconOnly
            aria-label="Edit"
            radius="full"
            className="bg-transparent hover:bg-bright-gray"
            onClick={toggleEditMode}>
            <Image
              src="/static/images/icon__pencil.svg"
              alt="Edit the card"
              width={24}
              height={24}
              className={clsx(isEditMode && styles.active)}
            />
          </Button>
        </AppTooltip>
      </div>
    </div>
  );
}
