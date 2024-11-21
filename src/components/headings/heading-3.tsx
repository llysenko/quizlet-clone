import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Heading3({
  props,
  children,
  className
}: {
  props?: any;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={clsx(className, 'font-semibold text-xl text-text-color-h')} {...props}>
      {children}
    </h3>
  );
}
