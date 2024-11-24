import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';

import { AchievementIcon } from '@/components/header/achievement-icon';
import { ThemeIcon } from '@/components/header/theme-icon';
import { SettingIcon } from '@/components/icons/setting-icon';

import { User } from '@/features/auth/lib/types';

export default function UserDropdown({ user, signOut }: { user: User; signOut?: () => void }) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar as="button" className="transition-transform" src={user.avatar || '/static/images/default-avatar.svg'} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-dark-electric-blue">
        <DropdownSection showDivider>
          <DropdownItem key="profile" isReadOnly className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <Avatar
                className="transition-transform w-16 h-16"
                src={user.avatar ? user.avatar : '/static/images/default-avatar.svg'}
              />
              <div>
                <p className="font-semibold">{user.username}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection showDivider>
          <DropdownItem
            key="achievements"
            href="/achievements"
            startContent={<AchievementIcon className="size-5 mr-3" />}>
            Achievements
          </DropdownItem>
          <DropdownItem key="settings" startContent={<SettingIcon className="size-5 mr-3" />}>
            Settings
          </DropdownItem>
          <DropdownItem key="theme" startContent={<ThemeIcon className="size-5 mr-3" />}>
            Dark mode
          </DropdownItem>
        </DropdownSection>
        <DropdownSection showDivider>
          <DropdownItem key="logout" onClick={signOut}>
            Log out
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="policy">Privacy policy</DropdownItem>
        <DropdownItem key="help_and_feedback">Help and feedback</DropdownItem>
        <DropdownItem key="upgrade">Upgrade</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
