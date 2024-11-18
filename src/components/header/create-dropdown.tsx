import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { PlusIcon } from '@/components/icons/plus-icon';

import { User } from '@/features/auth/lib/types';

const allMenuItems = [
  {
    label: 'Flashcard set',
    key: 'flashcard_set',
    href: '/create-set',
    iconSrc: 'icon__flashcards.svg',
    isPublic: true
  },
  {
    label: 'Study guide',
    key: 'Study_guide',
    href: '/about',
    iconSrc: 'icon__list-plus.svg',
    isPublic: false
  },
  {
    label: 'Practice test',
    key: 'practice_test',
    href: '/about',
    iconSrc: 'icon__todo-list.svg',
    isPublic: false
  },
  {
    label: 'Folder',
    key: 'folder',
    href: '/about',
    iconSrc: 'icon__folder.svg',
    isPublic: true
  },
  {
    label: 'Class',
    key: 'class',
    href: '/about',
    iconSrc: 'icon__users.svg',
    isPublic: true
  }
];

const publicOnlyMenuItems = allMenuItems.filter(item => item.isPublic);

export default function CreateDropdown({ user }: { user: User | null }) {
  const menuItems = user ? allMenuItems : publicOnlyMenuItems;
  const router = useRouter();

  function handleMenuItemClick(href: string) {
    // @ts-ignore
    router.push(href);
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        {user ? (
          <Button isIconOnly className="bg-blue" radius="sm" aria-label="Create">
            <PlusIcon className="text-white size-6" />
          </Button>
        ) : (
          <Button variant="light" aria-label="Create" className="text-blue font-medium">
            <PlusIcon className="text-blue size-4" /> Create
          </Button>
        )}
      </DropdownTrigger>
      <DropdownMenu aria-label="Create Actions" variant="flat">
        {menuItems.map(item => (
          <DropdownItem key={item.key} className="text-gray-600" onClick={() => handleMenuItemClick(item.href)}>
            <div className="flex items-center gap-3">
              <Image
                src={`/static/images/${item.iconSrc}`}
                alt={item.label}
                width={24}
                height={24}
                className="size-5"
              />
              <p>{item.label}</p>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
