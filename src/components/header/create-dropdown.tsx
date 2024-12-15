import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import CreateFolderDialog from '@/components/header/create-folder-dialog';
import { PlusIcon } from '@/components/icons/plus-icon';

import { User } from '@/features/auth/lib/types';

enum Item {
  Set = 'SET',
  Guide = 'GUIDE',
  Test = 'TEST',
  Folder = 'FOLDER',
  Class = 'CLASS'
}

type MenuItem = {
  imagePath: string;
  isPublic: boolean;
  key: Item;
  label: string;
  href?: string;
};

const allMenuItems: MenuItem[] = [
  {
    label: 'Flashcard set',
    key: Item.Set,
    href: '/create-set',
    imagePath: 'icon__flashcards.svg',
    isPublic: true
  },
  {
    label: 'Study guide',
    key: Item.Guide,
    href: '/about',
    imagePath: 'icon__list-plus.svg',
    isPublic: false
  },
  {
    label: 'Practice test',
    key: Item.Test,
    href: '/about',
    imagePath: 'icon__todo-list.svg',
    isPublic: false
  },
  {
    label: 'Folder',
    key: Item.Folder,
    imagePath: 'icon__folder.svg',
    isPublic: true
  },
  {
    label: 'Class',
    key: Item.Class,
    href: '/about',
    imagePath: 'icon__users.svg',
    isPublic: true
  }
];

const publicOnlyMenuItems = allMenuItems.filter(item => item.isPublic);

export default function CreateDropdown({ user }: { user: User | null }) {
  const menuItems = user ? allMenuItems : publicOnlyMenuItems;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  function createFolder() {
    onOpen();
  }

  function handleMenuItemClick(item: MenuItem) {
    item.href ? router.push(item.href) : item.key === Item.Folder ? createFolder() : alert('Not implemented yet!');
  }

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          {user ? (
            <Button isIconOnly className="bg-ultramarine-blue" radius="sm" aria-label="Create">
              <PlusIcon className="size-6 text-white" />
            </Button>
          ) : (
            <Button variant="light" aria-label="Create" radius="sm" className="font-medium text-ultramarine-blue">
              <PlusIcon className="size-4 text-ultramarine-blue" /> Create
            </Button>
          )}
        </DropdownTrigger>
        <DropdownMenu aria-label="Create Actions" variant="flat" items={menuItems}>
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
      <CreateFolderDialog isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
