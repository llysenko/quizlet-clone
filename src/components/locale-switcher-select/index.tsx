'use client';

import clsx from 'clsx';
import { ChangeEvent, ReactNode, useTransition } from 'react';

import { useRouter, usePathname } from '@/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label className={clsx('relative', isPending && 'transition-opacity [&:disabled]:opacity-30')}>
      <select
        className="inline-flex appearance-none bg-transparent text-sm outline-0"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}>
        {children}
      </select>
    </label>
  );
}
