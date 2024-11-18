import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Heading2({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={clsx(className, 'font-bold text-xl md:text-heading-2')}>{children}</h2>;
}
