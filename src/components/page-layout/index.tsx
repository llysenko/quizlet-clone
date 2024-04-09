import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <main className="p-2">
      {children}
    </main>
  );
}
