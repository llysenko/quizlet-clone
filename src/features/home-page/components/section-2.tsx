import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Heading2 from '@/components/headings/heading-2';

import SectionContainer from '@/features/home-page/components/section-container';

export default function Section2({ t }: { t: (key: string, options?: Record<string, any>) => string }) {
  return (
    <SectionContainer>
      <div className="flex flex-wrap-reverse items-center px-8 lg:flex-nowrap">
        <div className="w-full grow lg:w-1/2">
          <Heading2>Every class, every test, one ultimate study app</Heading2>
          <div className="py-12 text-left">
            <p className="text-xl">
              Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime,
              anywhere with our free app.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="#">
              <Image src="/images/app-store.svg" alt="App Store" width={129} height={40} />
            </Link>
            <Link href="#">
              <Image src="/images/google-play.svg" alt="Google Play" width={129} height={40} />
            </Link>
          </div>
        </div>
        <div className="mb-20 ml-0 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:ml-20 lg:w-1/2">
          <Image src="/images/ZpWfER5LeNNTxK_S_flashcards-image.avif" alt="Flashcards" width={461} height={357} />
        </div>
      </div>
    </SectionContainer>
  );
}
