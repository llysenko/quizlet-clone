import clsx from 'clsx';
import { ReactNode } from 'react';

export default function SectionContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={clsx(className, 'py-12 m-auto max-w-[64rem]')}>{children}</section>;
}
