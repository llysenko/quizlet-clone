'use client';

import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import Container from '@/components/container';
import Heading2 from '@/components/headings/heading-2';

type Props = {
  error: Error & { digest?: string };
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  function redirect() {
    router.push('/');
  }

  return (
    <Container className="m-10 text-center">
      <p className="text-palatinate-blue">{t('title')}</p>
      <Heading2 className="my-8">{error.message}</Heading2>
      <p className="mb-10">{t('description')}</p>
      <div className="flex justify-center gap-2">
        <Button
          variant="ghost"
          size="lg"
          color="primary"
          radius="sm"
          className="border-palatinate-blue text-palatinate-blue"
          onPress={reset}>
          {t('reset')}
        </Button>
        <Button variant="ghost" size="lg" radius="sm" className="" onPress={redirect}>
          {t('home')}
        </Button>
      </div>
    </Container>
  );
}
