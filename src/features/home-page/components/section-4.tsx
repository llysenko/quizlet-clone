import React from 'react';
import Image from 'next/image';

import Button from '@/components/buttons';
import Heading2 from '@/components/headings/heading-2';

import SectionContainer from '@/features/home-page/components/section-container';

type Props = {
  toggleMenu: () => void;
  t: (key: string, options?: Record<string, any>) => string;
};

export default function Section4({ toggleMenu, t }: Props) {
  return (
    <SectionContainer>
      <div className="flex flex-wrap-reverse items-center px-8 lg:flex-nowrap">
        <div className="w-full grow lg:w-1/2">
          <Heading2>Test prep for any subject</Heading2>
          <div className="py-12 text-left">
            <p className="text-xl">
              Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say
              Quizlet has improved their understanding.
            </p>
          </div>
          <Button label="Get started" size="lg" onClick={toggleMenu} />
        </div>
        <div className="mb-20 ml-0 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:ml-20 lg:w-1/2">
          <Image src="/static/images/ZpWfEx5LeNNTxK_U_learn-image.avif" alt="Flashcards" width={461} height={357} />
        </div>
      </div>
    </SectionContainer>
  );
}
