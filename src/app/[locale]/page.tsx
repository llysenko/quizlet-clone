import React from 'react';
import { useTranslations } from 'next-intl';

import Button from '@/components/button';
import Carousel from '@/components/carousel';
import Image from 'next/image';
import Link from 'next/link';

// import { getPosts } from '@/actions/posts';

// type Post = {
//   id: number;
//   title: string;
//   content: string;
//   published: boolean;
// };
export default function IndexPage() {
  const t = useTranslations('IndexPage');
  // const posts: Post[] | { error: any } = await getPosts();

  return (
    <>
      <section className="bg-grey-4 py-16">
        <div className="m-auto flex max-w-[52.5rem] flex-col items-center gap-4 px-8 pb-8 pt-0 text-center">
          <h1 className="text-heading-1 font-bold">{t('headingOne')}</h1>
          <p className="min-h-[1.5rem] text-xl leading-[1.4]">{t('descriptionOne')}</p>
          <Button label="Sign up for free" size="medium" />
          <Button label="I'm a teacher" size="medium" borderless={true} mode="accent" />
        </div>
        <Carousel />
      </section>
      <section className="py-12">
        <div className="m-auto max-w-[64rem]">
          <div className="flex flex-wrap-reverse items-center px-8 lg:flex-nowrap">
            <div className="w-full grow lg:w-1/2">
              <h2 className="text-heading-2 font-bold">Every class, every test, one ultimate study app</h2>
              <div className="py-12 text-left">
                <p className="text-xl">
                  Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime,
                  anywhere with our free app.
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="#">
                  <Image src="/static/images/app-store.svg" alt="App Store" width={129} height={40} />
                </Link>
                <Link href="#">
                  <Image src="/static/images/google-play.svg" alt="App Store" width={129} height={40} />
                </Link>
              </div>
            </div>
            <div className="mb-20 ml-0 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:ml-20 lg:w-1/2">
              <Image
                src="/static/images/ZpWfER5LeNNTxK_S_flashcards-image.avif"
                alt="Flashcards"
                width={461}
                height={357}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="m-auto max-w-[64rem]">
          <div className="flex flex-wrap items-center px-8 lg:flex-nowrap">
            <div className="mb-20 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:w-1/2">
              <Image
                src="/static/images/ZpWfEh5LeNNTxK_T_study-guides-image.avif"
                alt="Flashcards"
                width={461}
                height={357}
              />
            </div>
            <div className="ml-0 w-full grow lg:ml-20 lg:w-1/2">
              <h2 className="text-heading-2 font-bold">Make class material instantly studiable</h2>
              <div className="py-12 text-left">
                <p className="text-xl">
                  Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.
                </p>
              </div>
              <Button label="Try it out" size="large" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="m-auto max-w-[64rem]">
          <div className="flex flex-wrap-reverse items-center px-8 lg:flex-nowrap">
            <div className="w-full grow lg:w-1/2">
              <h2 className="text-heading-2 font-bold">Test prep for any subject</h2>
              <div className="py-12 text-left">
                <p className="text-xl">
                  Memorize anything with personalized practice tests and study sessions in Learn. 98% of students say
                  Quizlet has improved their understanding.
                </p>
              </div>
              <Button label="Get started" size="large" />
            </div>
            <div className="mb-20 ml-0 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:ml-20 lg:w-1/2">
              <Image src="/static/images/ZpWfEx5LeNNTxK_U_learn-image.avif" alt="Flashcards" width={461} height={357} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-light py-12">
        <div className="m-auto max-w-[64rem]">
          <div className="flex flex-wrap-reverse items-center px-8 lg:flex-nowrap">
            <div className="w-full grow lg:w-1/2">
              <h4 className="text-xl font-bold uppercase">teachers</h4>
              <h2 className="text-heading-2 font-bold">Empower your students</h2>
              <div className="py-12 text-left">
                <p className="text-xl">
                  Help every student confidently learn anything. With free flashcard sets, study modes, and in-class
                  games like Quizlet Live, you can instantly create a more engaged classroom.
                </p>
              </div>
              <Button label="Sign up as a teacher" size="large" />
              <div className="mt-8">
                <Link href="#" className="text-xl text-blue hover:text-blue-2">
                  See how teachers use Quizlet
                </Link>
              </div>
            </div>
            <div className="mb-20 ml-0 flex w-full shrink-0 grow-[1.12] justify-center lg:mb-0 lg:ml-20 lg:w-1/2">
              <Image
                src="/static/images/ZpFqjB5LeNNTxHvk_teacher-image-LOH.avif"
                alt="Flashcards"
                width={461}
                height={357}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
