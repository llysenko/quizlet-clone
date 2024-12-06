import { FlashcardSet, User } from '.prisma/client';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

import Heading4 from '@/components/headings/heading-4';

export default function AppCarouselCard({
  set
}: {
  set: FlashcardSet & { _count?: { flashcards: number } } & { user?: Partial<User> };
}) {
  return (
    <Link href={`/${set.id}/flash-cards`} className="grid cursor-pointer rounded-md border-2 border-bright-gray">
      <div className="flex h-full w-full flex-col justify-between rounded-md border-b-4 border-white p-4 transition-all hover:border-b-maximum-blue-purple">
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
      </div>
    </Link>
  );
}
