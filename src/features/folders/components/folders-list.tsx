import { Folder } from '.prisma/client';
import { PressEvent } from '@react-types/shared';

import FoldersListItem from '@/features/folders/components/folders-list-item';

export default function FoldersList({
  folders,
  handleClick
}: {
  folders: Folder[];
  handleClick: (event: PressEvent, id: number) => void;
}) {
  return (
    <>
      {folders.map(folder => (
        <FoldersListItem key={folder.id} folder={folder} handleClick={handleClick} />
      ))}
    </>
  );
}
