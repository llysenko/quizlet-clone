import React from 'react';

import Button from '@/components/buttons';
import Carousel from '@/components/carousel';
import Heading1 from '@/components/headings/heading-1';

type Props = {
  toggleMenu: () => void;
  t: (key: string, options?: Record<string, any>) => string;
};

export default function Section1({ toggleMenu, t }: Props) {
  return (
    <section className="bg-ghost-white py-16">
      <div className="m-auto flex max-w-[52.5rem] flex-col items-center gap-4 px-8 pb-8 pt-0 text-center">
        <Heading1>{t('headingOne')}</Heading1>
        <p className="min-h-[1.5rem] text-xl leading-[1.4]">{t('descriptionOne')}</p>
        <Button label="Sign up for free" size="md" onClick={toggleMenu} />
        <Button label="I'm a teacher" size="md" borderless={true} mode="accent" />
      </div>
      <Carousel />
    </section>
  );
}
