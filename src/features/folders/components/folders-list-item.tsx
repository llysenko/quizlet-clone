import { FlashcardSet, Folder } from '.prisma/client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { PressEvent } from '@react-types/shared';
import clsx from 'clsx';

export default function FoldersListItem({
  set,
  folder,
  handleClick
}: {
  set: Partial<FlashcardSet>;
  folder: Folder & { flashcardSets: FlashcardSet[] };
  handleClick: (event: PressEvent, id: number) => void;
}) {
  const isCurrentSetFolder = folder.flashcardSets.find(f => f.id === set.id);

  return (
    <Button
      size="lg"
      variant="light"
      radius="none"
      className={clsx(
        isCurrentSetFolder ? 'text-ultramarine-blue' : 'text-dark-electric-blue',
        'flex w-full items-center justify-start gap-2 px-6 py-4 text-sm font-semibold transition-background hover:bg-ghost-white'
      )}
      onPress={event => handleClick(event, folder.id)}>
      <Image
        src={isCurrentSetFolder ? '/images/icon__check_mark.svg' : '/images/icon__folder.svg'}
        alt="folder"
        width={24}
        height={24}
      />
      {folder.title}
    </Button>
  );
}
