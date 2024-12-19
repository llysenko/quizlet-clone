'use client';

import { Flashcard, FlashcardSet, User } from '.prisma/client';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, user } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import AppTooltip from '@/components/app-tooltip/app-tooltip';

type MenuItem = {
  imagePath: string;
  key: string;
  label: string;
  href?: string;
};

const menuItems: MenuItem[] = [
  {
    label: 'Add to folder',
    key: 'addToFolder',
    href: '/create-set',
    imagePath: 'icon__folder.svg'
  }
];

type Props = {
  set: Partial<FlashcardSet & { flashcards?: Flashcard[] } & { user: Partial<User> }> & { starred: number };
};

export default function FlashcardSetActions({ set }: Props) {
  const router = useRouter();

  function redirectToEditPage() {
    router.push(`/${set.id}/edit`);
  }

  function handleMenuItemClick(item: MenuItem) {
    alert('Not implemented yet!');
  }

  return (
    <div className="flex items-center gap-2">
      <Button size="md" variant="ghost" radius="sm" className="font-semibold text-dark-electric-blue">
        <Image src="/images/icon__share.svg" alt="Share the set" width={16} height={16} />
        Share
      </Button>
      <AppTooltip content="Edit" placement="bottom">
        <Button
          isIconOnly
          aria-label="Edit"
          variant="ghost"
          radius="sm"
          className="bg-transparent hover:bg-bright-gray"
          onPress={redirectToEditPage}>
          <Image src="/images/icon__pencil.svg" alt="Edit the card" width={24} height={24} />
        </Button>
      </AppTooltip>

      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            isIconOnly
            aria-label="More"
            variant="ghost"
            radius="sm"
            className="bg-transparent hover:bg-bright-gray">
            <Image src="/images/icon__more.svg" alt="More" width={24} height={24} />
          </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label="Edit Set Actions" variant="flat" items={menuItems}>
          {item => (
            <DropdownItem
              key={item.label}
              textValue={item.label}
              className="text-dark-electric-blue"
              onPress={() => handleMenuItemClick(item)}>
              <div className="flex items-center gap-3">
                <Image src={`/images/${item.imagePath}`} alt={item.label} width={24} height={24} className="size-5" />
                <p>{item.label}</p>
              </div>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
