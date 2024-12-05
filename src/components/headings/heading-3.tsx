import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Heading3({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={clsx(className, 'text-xl font-semibold text-gunmetal')}>{children}</h3>;
}
