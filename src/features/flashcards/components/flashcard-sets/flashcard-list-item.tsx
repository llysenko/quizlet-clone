import { Flashcard } from '.prisma/client';
import { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { updateFlashcard } from '@/features/flashcards/actions';
import FlashCardControls from '@/features/flashcards/components/flashcard-sets/flashcard-controls';

import styles from '../../styles.module.scss';

export default function FlashcardListItem({
  card,
  handleStarredCount
}: {
  card: Flashcard;
  handleStarredCount: (isStarred: boolean) => void;
}) {
  const [changedCard, setChangedCard] = useState<any>();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isFlashcardStarred, setIsFlashcardStarred] = useState<boolean>(card.isStarred);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const definitionRef = useRef<HTMLTextAreaElement | null>(null);
  const termRef = useRef<HTMLTextAreaElement | null>(null);

  useLayoutEffect(() => {
    if (termRef && termRef.current) {
      termRef.current.style.height = `${termRef?.current?.scrollHeight}px`;
    }
  }, [termRef.current?.scrollHeight]);

  useLayoutEffect(() => {
    if (definitionRef && definitionRef.current) {
      definitionRef.current.style.height = `${definitionRef?.current?.scrollHeight}px`;
    }
  }, [definitionRef.current?.scrollHeight]);

  useEffect(() => {
    async function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsEditMode(false);

        if (changedCard) {
          const { id, ...rest } = changedCard;
          await updateFlashcard(id, rest);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [changedCard]);

  function handleOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setChangedCard((prevCard: { id: number; term: string; definition: string }) => ({
      ...prevCard,
      id: card.id,
      [name]: value
    }));
  }

  async function toggleStarred() {
    setIsFlashcardStarred(!isFlashcardStarred);

    const updatedFlashcard = await updateFlashcard(card.id, { isStarred: !isFlashcardStarred });

    handleStarredCount(updatedFlashcard.isStarred);
  }

  return (
    <div
      id={card.id.toString()}
      ref={cardRef}
      key={card.id}
      className={clsx(styles.shadow, 'flex min-h-[3.625rem] justify-between rounded bg-white px-6 py-5')}>
      <div className="flex w-full gap-2">
        <div className={clsx(card.definition && 'border-r-2 border-ghost-white', 'w-1/3')}>
          <textarea
            ref={termRef}
            readOnly={!isEditMode}
            defaultValue={card.term}
            name="term"
            className="h-auto w-full resize-none overflow-hidden py-2 pr-4 outline-0"
            onChange={handleOnChange}></textarea>
        </div>
        <div className="flex h-full w-full">
          <textarea
            ref={definitionRef}
            readOnly={!isEditMode}
            defaultValue={card.definition}
            name="definition"
            className="h-auto w-full flex-1 resize-none overflow-hidden py-2 pl-8 pr-4 outline-0"
            onChange={handleOnChange}></textarea>
        </div>
      </div>
      <FlashCardControls
        isEditMode={isEditMode}
        isFlashcardStarred={isFlashcardStarred}
        setIsEditMode={setIsEditMode}
        toggleStarred={toggleStarred}
      />
    </div>
  );
}
