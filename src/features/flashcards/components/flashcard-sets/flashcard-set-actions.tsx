'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

export default function FlashcardSetActions({ set }: any) {
  const router = useRouter();

  function redirectToEditPage() {
    router.push(`/${set.id}/edit`);
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="md" variant="ghost" radius="sm" className="font-semibold text-dark-electric-blue">
        <Image src="/static/images/icon__share.svg" alt="Share the set" width={16} height={16} />
        Share
      </Button>
      <AppTooltip content="Edit" placement="bottom">
        <Button
          isIconOnly
          aria-label="Edit"
          variant="ghost"
          radius="sm"
          className="bg-transparent hover:bg-bright-gray"
          onClick={redirectToEditPage}>
          <Image src="/static/images/icon__pencil.svg" alt="Edit the card" width={24} height={24} />
        </Button>
      </AppTooltip>
      <AppTooltip content="More" placement="bottom">
        <Button
          isIconOnly
          aria-label="More"
          variant="ghost"
          radius="sm"
          className="bg-transparent hover:bg-bright-gray">
          <Image src="/static/images/icon__more.svg" alt="More" width={24} height={24} />
        </Button>
      </AppTooltip>
    </div>
  );
}
