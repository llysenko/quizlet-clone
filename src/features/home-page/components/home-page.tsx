'use client';

import { useTranslations } from 'next-intl';

import { useAuthDialogStore } from '@/store';

import Section1 from '@/features/home-page/components/section-1';
import Section2 from '@/features/home-page/components/section-2';
import Section3 from '@/features/home-page/components/section-3';
import Section4 from '@/features/home-page/components/section-4';
import Section5 from '@/features/home-page/components/section-5';

export default function HomePage() {
  const t = useTranslations('IndexPage');
  const { open, setOpen } = useAuthDialogStore();

  function toggleMenu() {
    setOpen(!open);

    document.body.classList.remove(open ? 'overflow-hidden' : 'overflow-auto');
    document.body.classList.add(open ? 'overflow-auto' : 'overflow-hidden');
  }

  return (
    <>
      <Section1 toggleMenu={toggleMenu} t={t} />
      <Section2 t={t} />
      <Section3 toggleMenu={toggleMenu} t={t} />
      <Section4 toggleMenu={toggleMenu} t={t} />
      <Section5 toggleMenu={toggleMenu} t={t} />
    </>
  );
}
