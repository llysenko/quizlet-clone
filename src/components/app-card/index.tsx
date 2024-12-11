import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function AppCard({
  children,
  href,
  className
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={clsx(className, 'grid cursor-pointer rounded-md border-2 border-bright-gray')}>
      <div className="flex h-full w-full flex-col justify-between rounded-md border-b-4 border-white px-5 py-3 shadow-[0_.125rem_.25rem_#00000014] transition-all hover:border-b-maximum-blue-purple">
        {children}
      </div>
    </Link>
  );
}
