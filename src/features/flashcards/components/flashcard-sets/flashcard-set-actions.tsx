import { Button } from '@nextui-org/react';
import Image from 'next/image';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

export default function FlashcardSetActions() {
  return (
    <div className="flex items-center gap-2">
      <Button size="md" variant="ghost" radius="sm" className="text-gray-600 font-semibold">
        <Image src="/static/images/icon__share.svg" alt="Share the set" width={16} height={16} />
        Share
      </Button>
      <AppTooltip content="Edit" placement="bottom">
        <Button isIconOnly aria-label="Edit" variant="ghost" radius="sm" className="bg-transparent hover:bg-grey-3">
          <Image src="/static/images/icon__pencil.svg" alt="Edit the card" width={24} height={24} />
        </Button>
      </AppTooltip>
      <AppTooltip content="More" placement="bottom">
        <Button isIconOnly aria-label="Star" variant="ghost" radius="sm" className="bg-transparent hover:bg-grey-3">
          <Image src="/static/images/icon__more.svg" alt="Star the card" width={24} height={24} />
        </Button>
      </AppTooltip>
    </div>
  );
}
