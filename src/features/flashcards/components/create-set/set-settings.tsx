import { Button } from '@nextui-org/react';
import Image from 'next/image';

import AppTooltip from '@/components/app-tooltip/app-tooltip';
import Container from '@/components/container';
import { PlusIcon } from '@/components/icons/plus-icon';

import { SparkleIcon } from '@/features/flashcards/components/create-set/sparkle-icon';

const buttons = [
  {
    id: '1',
    alt: 'Manage access',
    ariaLabel: 'Manage access',
    iconSrc: '/static/images/icon__gear.svg',
    tooltipContent: 'Manage access'
  },
  {
    id: '2',
    alt: 'Flip terms and definitions',
    ariaLabel: 'Flip terms and definitions',
    iconSrc: '/static/images/icon__flip_arrows.svg',
    tooltipContent: 'Flip terms and definitions'
  },
  {
    id: '3',
    alt: 'Keyboard shortcuts',
    ariaLabel: 'Keyboard shortcuts',
    iconSrc: '/static/images/icon__keyboard.svg',
    tooltipContent: 'Keyboard shortcuts'
  }
];
export default function SetSettings() {
  return (
    <Container className="hidden items-center justify-between flex-wrap gap-4 sm:flex">
      <div className="flex gap-4">
        <Button
          variant="bordered"
          radius="sm"
          className="text-gray-600 bg-white hover:bg-grey-3"
          startContent={<PlusIcon className="w-4 text-gray-600" />}>
          Import
        </Button>
        <Button
          variant="bordered"
          radius="sm"
          className="text-gray-600 bg-white hover:bg-grey-3"
          startContent={<PlusIcon className="w-4 text-gray-600" />}>
          Add diagram
          <AppTooltip content="Unlock this feature with Quizlet Plus">
            <span className="py-0.5 px-2 bg-yellow rounded-full">
              <Image
                src="/static/images/icon__lock.svg"
                alt="Unlock adding diagram"
                width={16}
                height={23}
                className="h-4 w-auto"
              />
            </span>
          </AppTooltip>
        </Button>
        <Button
          variant="bordered"
          radius="sm"
          className="text-gray-600 bg-white hover:bg-grey-3"
          startContent={<SparkleIcon className="size-4 text-gray-600" />}>
          Create from notes
        </Button>
      </div>
      <div className="flex gap-4">
        {buttons.map(button => (
          <AppTooltip key={button.id} content={button.tooltipContent}>
            <Button
              isIconOnly
              variant="bordered"
              radius="full"
              className="text-gray-600 bg-white hover:bg-grey-3"
              aria-label={button.ariaLabel}>
              <Image src={button.iconSrc} alt={button.alt} width={24} height={24} className="w-6 h-auto" />
            </Button>
          </AppTooltip>
        ))}
      </div>
    </Container>
  );
}
