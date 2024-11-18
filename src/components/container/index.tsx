import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Container({ className, children }: { className?: any; children: ReactNode }) {
  return <div className={clsx('p-4 md:px-12 md:py-6 m-auto max-w-[81.25rem]', className)}>{children}</div>;
}
