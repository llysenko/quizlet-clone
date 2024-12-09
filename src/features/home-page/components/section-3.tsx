import React from 'react';
import Image from 'next/image';

import Button from '@/components/buttons';
import Heading2 from '@/components/headings/heading-2';

import SectionContainer from '@/features/home-page/components/section-container';

type Props = {
  toggleMenu: () => void;
  t: (key: string, options?: Record<string, any>) => string;
};

export default function Section3({ toggleMenu, t }: Props) {
  return (
    <SectionContainer>
      <div className="flex flex-wrap items-center px-8 lg:flex-nowrap">
        <div className="mb-20 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:w-1/2">
          <Image src="/images/ZpWfEh5LeNNTxK_T_study-guides-image.avif" alt="Flashcards" width={461} height={357} />
        </div>
        <div className="ml-0 w-full grow lg:ml-20 lg:w-1/2">
          <Heading2>Make class material instantly studiable</Heading2>
          <div className="py-12 text-left">
            <p className="text-xl">
              Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.
            </p>
          </div>
          <Button label="Try it out" size="lg" onClick={toggleMenu} />
        </div>
      </div>
    </SectionContainer>
  );
}
