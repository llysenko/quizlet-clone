import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Heading4({
  props,
  children,
  className
}: {
  props?: any;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4 className={clsx(className, 'font-semibold text-base text-gunmetal')} {...props}>
      {children}
    </h4>
  );
}
