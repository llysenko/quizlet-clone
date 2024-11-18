import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx(className, 'bg-white rounded-lg')}>{children}</div>;
}
