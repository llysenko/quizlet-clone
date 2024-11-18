import { Chip } from '@nextui-org/react';
import Link from 'next/link';

import Heading4 from '@/components/headings/heading-4';

type Set = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  _count: { flashcards: number };
  user: { username: string };
};

export default function AppCarouselCard({ set }: { set: Set }) {
  return (
    // @ts-ignore
    <Link href={`/${set.id}/flash-cards`} className="cursor-pointer border-2 border-grey-3 rounded-md grid">
      <div className="transition-all flex flex-col justify-between w-full h-full border-b-4 p-4 border-white rounded-md hover:border-b-blue-3">
        <div>
          <Heading4>{set.title}</Heading4>

          <div className="my-4 min-h-12">
            <Chip size="sm" className="bg-grey-6">
              {set._count.flashcards} terms
            </Chip>
          </div>
        </div>
        <div>
          <p className="text-ellipsis font-semibold text-sm">{set.user.username}</p>
        </div>
      </div>
    </Link>
  );
}
