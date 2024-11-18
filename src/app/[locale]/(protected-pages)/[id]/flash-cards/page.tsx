import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import AppTooltip from '@/components/app-tooltip/app-tooltip';
import Footer from '@/components/footer';
import Heading2 from '@/components/headings/heading-2';
import Heading3 from '@/components/headings/heading-3';

import { getSetById } from '@/features/flashcards/actions';

export default async function Page({ params }: { params: { id: number } }) {
  const set = await getSetById(+params.id);

  return (
    <div>
      <div className="max-w-[77.125rem] m-auto px-10 pt-6">
        <Heading2 className="mb-4">{set?.title}</Heading2>

        <section className="py-8">
          <div className="flex gap-2">
            <AppTooltip content={`Visit ${set?.user.username}'s profile`} placement="right-end">
              <Link href={`/user/${set?.user.username}/sets`}>
                <Avatar src={set?.user.avatar || '/static/images/default-avatar.svg'} className="w-12 h-12" />
              </Link>
            </AppTooltip>
            <div>
              <p className="text-grey-5 mb-[-.125rem] text-xxs">Created by</p>
              <p className="font-semibold text-base">{set?.user.username}</p>
              <p className="text-grey-5 text-xs">Created {set?.createdAt.toLocaleDateString()}</p>
            </div>
          </div>
          <div></div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <Heading3>Terms in this set ({set?._count.flashcards})</Heading3>
            <Dropdown>
              <DropdownTrigger>
                <Button size="lg" variant="light" radius="sm" className="font-semibold text-gray-600">
                  Original
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Original</DropdownItem>
                <DropdownItem key="copy">Alphabetical</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="p-4 bg-grey rounded-2xl mb-10 flex flex-col gap-3">
            {set?.flashcards.map(card => (
              <div
                key={card.id}
                className="bg-white px-6 py-5 flex rounded min-h-[3.625rem] justify-between"
                style={{ boxShadow: '0 .125rem .25rem 0 #282e3e1f' }}>
                <div className="flex gap-2 w-full">
                  <div className={clsx(card.definition && 'border-r-2 border-grey-4', 'w-1/3 pr-4 py-2')}>
                    {card.term}
                  </div>
                  <div className="flex-1 pr-4 pl-8 py-2">{card.definition}</div>
                </div>
                <div className="w-[6.75rem] flex">
                  <Button isIconOnly aria-label="Star" radius="full" className="bg-transparent hover:bg-grey-3">
                    <Image src="/static/images/icon__star.svg" alt="Star the card" width={24} height={24} />
                  </Button>
                  <Button isIconOnly aria-label="Star" radius="full" className="bg-transparent hover:bg-grey-3">
                    <Image src="/static/images/icon__sound.svg" alt="Play the card" width={24} height={24} />
                  </Button>
                  <Button isIconOnly aria-label="Edit" radius="full" className="bg-transparent hover:bg-grey-3">
                    <Image src="/static/images/icon__pencil.svg" alt="Edit the card" width={24} height={24} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center mb-10">
          <Button size="lg" variant="ghost" radius="sm" className="text-gray-600 font-semibold hover:bg-grey-3">
            Add or remove terms
            <Image src="/static/images/icon__pencil.svg" alt="Edit the set" width={16} height={16} />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
