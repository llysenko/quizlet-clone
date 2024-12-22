import { Folder } from '.prisma/client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { PressEvent } from '@react-types/shared';

export default function FoldersListItem({
  folder,
  handleClick
}: {
  folder: Folder;
  handleClick: (event: PressEvent, id: number) => void;
}) {
  return (
    <Button
      size="lg"
      variant="light"
      radius="none"
      className="flex w-full items-center justify-start gap-2 px-6 py-4 text-sm font-semibold text-dark-electric-blue transition-background hover:bg-ghost-white"
      onPress={event => handleClick(event, folder.id)}>
      <Image src="/images/icon__folder.svg" alt="folder" width={24} height={24} />
      {folder.title}
    </Button>
  );
}
