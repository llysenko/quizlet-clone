import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

export default function FlashcardSetData({ set }: { set: any }) {
  return (
    <div className="flex gap-2">
      <AppTooltip content={`Visit ${set?.user.username}'s profile`} placement="right-end">
        <Link href={`/user/${set?.user.username}/sets`}>
          <Avatar src={set?.user.avatar || '/static/images/default-avatar.svg'} className="h-12 w-12" />
        </Link>
      </AppTooltip>

      <div>
        <p className="mb-[-.125rem] text-xxs text-cadet-grey">Created by</p>
        <p className="text-base font-semibold">{set?.user.username}</p>
        <p className="text-xs text-cadet-grey">Created {set?.createdAt.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
