import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';

import styles from '../../styles.module.scss';
import { Flashcard } from '.prisma/client';

export default function FlashcardListItem({ card }: { card: Flashcard }) {
  return (
    <div
      key={card.id}
      className={clsx(styles.shadow, 'bg-white px-6 py-5 flex rounded min-h-[3.625rem] justify-between')}>
      <div className="flex gap-2 w-full">
        <div className={clsx(card.definition && 'border-r-2 border-ghost-white', 'w-1/3 pr-4 py-2')}>{card.term}</div>
        <div className="flex-1 pr-4 pl-8 py-2">{card.definition}</div>
      </div>
      <div className="w-[6.75rem] flex">
        <Button isIconOnly aria-label="Star" radius="full" className="bg-transparent hover:bg-bright-gray">
          <Image src="/static/images/icon__star.svg" alt="Star the card" width={24} height={24} />
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
