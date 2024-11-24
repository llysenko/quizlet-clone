import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

export default function FlashcardSetData({ set }: { set: any }) {
  return (
    <div className="flex gap-2">
      <AppTooltip content={`Visit ${set?.user.username}'s profile`} placement="right-end">
        <Link href={`/user/${set?.user.username}/sets`}>
          <Avatar src={set?.user.avatar || '/static/images/default-avatar.svg'} className="w-12 h-12" />
        </Link>
      </AppTooltip>
      <div>
        <p className="text-cadet-grey mb-[-.125rem] text-xxs">Created by</p>
        <p className="font-semibold text-base">{set?.user.username}</p>
        <p className="text-cadet-grey text-xs">Created {set?.createdAt.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
