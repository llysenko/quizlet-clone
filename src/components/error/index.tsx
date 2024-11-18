import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Error({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx(className, 'rounded-lg border-2 border-error p-4 font-semibold text-error')}>{children}</div>
  );
}
