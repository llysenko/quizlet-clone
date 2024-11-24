'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';

import AppTooltip from '@/components/app-tooltip/app-tooltip';
import Input from '@/components/input';

import AppCarousel from '@/features/flashcards/components/create-set/app-carousel';

const items = [
  <img key={1} src="/static/images/bg-auth.png" role="presentation" className="max-h-[150px]" />,
  <img key={2} src="/static/images/flashcards@2x.avif" role="presentation" />,
  <img key={3} src="/static/images/expert_solutions@2x.avif" role="presentation" />,
  <img key={4} src="/static/images/learn@2x.avif" role="presentation" />,
  <img key={5} src="/static/images/logo.svg" role="presentation" />,
  <img key={6} src="/static/images/coppa-seal.0efe00c1.avif" role="presentation" />
];

export default function AddImageSection() {
  return (
    <div className="px-6 pt-7 pb-6 border-t-2 border-ghost-white">
      <div className="flex gap-4 items-center">
        <div className="max-w-[220px]">
          <Input data={{ id: 'imageSearch', name: 'imageSearch', type: 'search', placeholder: 'Enter term' }} />
        </div>
        <Button variant="solid" radius="sm" className="bg-ultramarine-blue text-white">
          Or upload your own image
          <AppTooltip content="Unlock this feature with Quizlet Plus">
            <span className="py-0.5 px-2 bg-ripe-mango rounded-full">
              <Image
                src="/static/images/icon__lock.svg"
                alt="Unlock adding diagram"
                width={16}
                height={23}
                className="h-4"
              />
            </span>
          </AppTooltip>
        </Button>
      </div>

      <div className="py-5">
        <AppCarousel items={items} />
      </div>
    </div>
  );
}
