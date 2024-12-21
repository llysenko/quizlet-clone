import { Folder } from '.prisma/client';
import Image from 'next/image';

export default function FoldersList({ folders }: { folders: Folder[] }) {
  return (
    <ul>
      {folders.map(folder => (
        <li
          key={folder.id}
          className="flex cursor-pointer items-center gap-2 px-6 py-4 text-sm font-semibold text-dark-electric-blue transition-background hover:bg-ghost-white">
          <Image src="/images/icon__folder.svg" alt="folder" width={24} height={24} />
          {folder.title}
        </li>
      ))}
    </ul>
  );
}
