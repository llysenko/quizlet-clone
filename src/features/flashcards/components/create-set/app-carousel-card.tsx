import { FlashcardSet, User } from '.prisma/client';
import { Chip } from '@nextui-org/react';

import AppCard from '@/components/app-card';
import Heading4 from '@/components/headings/heading-4';

export default function AppCarouselCard({
  set
}: {
  set: FlashcardSet & { _count?: { flashcards: number } } & { user?: Partial<User> };
}) {
  return (
    <AppCard href={`/${set.id}/flash-cards`}>
      <div>
        <Heading4 className="line-clamp-1">{set.title}</Heading4>

        <div className="my-4 min-h-12">
          <Chip size="sm" className="bg-alice-blue">
            {set._count?.flashcards} terms
          </Chip>
        </div>
      </div>
      <div>
        <p className="line-clamp-1 text-sm font-semibold">{set.user?.username}</p>
      </div>
    </AppCard>
  );
}
