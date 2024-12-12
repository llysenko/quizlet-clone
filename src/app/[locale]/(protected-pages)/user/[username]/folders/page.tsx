import Image from 'next/image';

import AppCard from '@/components/app-card';
import Heading3 from '@/components/headings/heading-3';

import { getFolders } from '@/features/folders/actions';

export default async function FoldersPage() {
  const folders = await getFolders();

  return (
    <>
      {folders?.length ? (
        <div className="flex flex-col gap-4">
          {folders.map(folder => (
            <AppCard
              href={`/user/${folder.user.username}/folders/${folder.id}`}
              key={folder.id}
              className="border-transparent bg-white">
              <div className="flex items-center gap-4 text-sm font-semibold">
                <p>15 Items</p>
              </div>
              <Heading3 className="flex items-center gap-2">
                <Image src="/images/icon__folder.svg" alt="Folder" width={16} height={16} />
                {folder.title}
              </Heading3>
            </AppCard>
          ))}
        </div>
      ) : (
        <p className="text-center">You don&apos;t have any folders yet.</p>
      )}
    </>
  );
}
