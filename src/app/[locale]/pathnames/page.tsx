'use client';

import { useTranslations } from 'next-intl';

export default function PathnamesPage() {
  const t = useTranslations('PathnamesPage');

  return (
    <div className="max-w-[490px]">
      {t.rich('description', {
        p: chunks => <p className="mt-4">{chunks}</p>,
        code: chunks => <code className="font-mono text-white">{chunks}</code>
      })}
    </div>
  );
}
