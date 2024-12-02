import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  size?: 'md' | 'sm';
  children: ReactNode;
};
export default function Container({ className, size = 'md', children }: Props) {
  return <div className={clsx(styles[`${size}`], 'm-auto p-4 md:px-12 md:py-6', className)}>{children}</div>;
}
