import { Avatar, Chip } from '@nextui-org/react';

import AppCard from '@/components/app-card';
import Heading3 from '@/components/headings/heading-3';

import { getFlashcardSets } from '@/features/flashcards/actions';

export default async function Page() {
  const sets = await getFlashcardSets();

  return (
    <>
      {sets?.length ? (
        <div className="flex flex-col gap-4">
          {sets.map(set => (
            <AppCard href={`/${set.id}`} key={set.id} className="border-transparent bg-white">
              <div className="flex items-center gap-4 text-sm font-semibold">
                <p>{set._count.flashcards} Terms</p>
                <span className="font-semibold text-ghost-white">|</span>
                <div className="flex items-center gap-2">
                  <Avatar src={set?.user?.avatar || '/images/default-avatar.svg'} className="h-4 w-4 text-tiny" />
                  {set.user.username}
                  <Chip size="sm" className="bg-alice-blue">
                    <span className="font-semibold capitalize">{set.user.role}</span>
                  </Chip>
                </div>
              </div>
              <Heading3>{set.title}</Heading3>
            </AppCard>
          ))}
        </div>
      ) : (
        <p className="text-center">You don&apos;t have any sets yet.</p>
      )}
    </>
  );
}
