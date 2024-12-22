import { FlashcardSet, Folder } from '.prisma/client';
import { PressEvent } from '@react-types/shared';

import FoldersListItem from '@/features/folders/components/folders-list-item';

export default function FoldersList({
  set,
  folders,
  handleClick
}: {
  set: Partial<FlashcardSet>;
  folders: Folder[];
  handleClick: (event: PressEvent, id: number) => void;
}) {
  return (
    <>
      {folders.map(folder => (
        <FoldersListItem set={set} key={folder.id} folder={folder} handleClick={handleClick} />
      ))}
    </>
  );
}
