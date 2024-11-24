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
    <Link href={`/${set.id}/flash-cards`} className="cursor-pointer border-2 border-bright-gray rounded-md grid">
      <div className="transition-all flex flex-col justify-between w-full h-full border-b-4 p-4 border-white rounded-md hover:border-b-maximum-blue-purple">
        <div>
          <Heading4 className="line-clamp-1">{set.title}</Heading4>

          <div className="my-4 min-h-12">
            <Chip size="sm" className="bg-alice-blue">
              {set._count.flashcards} terms
            </Chip>
          </div>
        </div>
        <div>
          <p className="line-clamp-1 font-semibold text-sm">{set.user.username}</p>
        </div>
      </div>
    </Link>
  );
}
