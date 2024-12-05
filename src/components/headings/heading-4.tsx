import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Heading4({ children, className }: { children: ReactNode; className?: string }) {
  return <h4 className={clsx(className, 'text-base font-semibold text-gunmetal')}>{children}</h4>;
}
