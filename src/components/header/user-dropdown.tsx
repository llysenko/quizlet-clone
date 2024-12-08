import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import Image from 'next/image';

import { User } from '@/features/auth/lib/types';

const menuItemsSectionOne = [
  {
    id: 1,
    alt: 'Achievements',
    href: '/achievements',
    imagePath: '/static/images/icon__achievement.png',
    label: 'Achievements'
  },
  {
    id: 2,
    alt: 'Settings',
    href: '/achievements',
    imagePath: '/static/images/icon__settings.png',
    label: 'Settings'
  },
  {
    id: 3,
    alt: 'Theme mode',
    href: '/achievements',
    imagePath: '/static/images/icon__theme-mode.png',
    label: 'Dark mode'
  }
];

const menuItemsSectionThree = [
  {
    id: 4,
    key: 'policy',
    href: '/achievements',
    label: 'Privacy policy'
  },
  {
    id: 5,
    key: 'help_and_feedback',
    href: '/achievements',
    label: 'Help and feedback'
  },
  {
    id: 6,
    key: 'upgrade',
    href: '/achievements',
    label: 'Upgrade'
  }
];

export default function UserDropdown({ user, signOut }: { user: User; signOut?: () => void }) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar as="button" className="transition-transform" src={user.avatar || '/static/images/default-avatar.svg'} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-dark-electric-blue">
        <DropdownSection showDivider>
          <DropdownItem key="profile" textValue={user.username} isReadOnly className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <Avatar
                className="h-16 w-16 transition-transform"
                src={user.avatar ? user.avatar : '/static/images/default-avatar.svg'}
              />
              <div>
                <p className="font-semibold">{user.username}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection showDivider aria-label="Dynamic Actions" items={menuItemsSectionOne}>
          {item => (
            <DropdownItem key={item.id} href={item.href} textValue={item.label}>
              <div className="flex items-center gap-4">
                <Image src={item.imagePath} alt={item.alt} width={24} height={24} className="h-auto w-5" />
                {item.label}
              </div>
            </DropdownItem>
          )}
        </DropdownSection>
        <DropdownSection showDivider>
          <DropdownItem key="logout" onClick={signOut}>
            Log out
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Dynamic Actions" items={menuItemsSectionThree}>
          {item => <DropdownItem key={item.key}>{item.label}</DropdownItem>}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
