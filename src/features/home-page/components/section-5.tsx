import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/buttons';
import Heading2 from '@/components/headings/heading-2';

import SectionContainer from '@/features/home-page/components/section-container';

type Props = {
  toggleMenu: () => void;
  t: (key: string, options?: Record<string, any>) => string;
};

export default function Section5({ toggleMenu, t }: Props) {
  return (
    <div className="bg-lavender">
      <SectionContainer>
        <div className="flex flex-wrap-reverse items-center px-8 lg:flex-nowrap">
          <div className="w-full grow lg:w-1/2">
            <h4 className="text-xl font-bold uppercase">teachers</h4>
            <Heading2>Empower your students</Heading2>
            <div className="py-12 text-left">
              <p className="text-xl">
                Help every student confidently learn anything. With free flashcard sets, study modes, and in-class games
                like Quizlet Live, you can instantly create a more engaged classroom.
              </p>
            </div>
            <Button label="Sign up as a teacher" size="lg" onClick={toggleMenu} />
            <div className="mt-8">
              <Link href="#" className="text-xl text-ultramarine-blue hover:text-palatinate-blue">
                See how teachers use Quizlet
              </Link>
            </div>
          </div>
          <div className="mb-20 ml-0 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:ml-20 lg:w-1/2">
            <Image height={357} width={461} alt="Flashcards" src="/images/ZpFqjB5LeNNTxHvk_teacher-image-LOH.avif" />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
