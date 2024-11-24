import clsx from 'clsx';

import styles from './styles.module.scss';

export default function Divider({ text, className }: { text: string; className?: string }) {
  return (
    <div className={clsx(styles.divider, 'flex items-center justify-center', className)}>
      <div className="relative text-sm font-semibold text-dark-electric-blue">{text}</div>
    </div>
  );
}
