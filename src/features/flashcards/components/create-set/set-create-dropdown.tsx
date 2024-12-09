'use client';

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import Image from 'next/image';

export default function SetCreateDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="solid" className="bg-ultramarine-blue" radius="sm">
          Create
          <Image src="/images/icon__chevron_down.svg" alt="" width="16" height="16" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="Dropdown menu with description">
        <DropdownSection showDivider>
          <DropdownItem key="create_and_practice">Create and practice</DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem key="create_and_review">Create and review</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
