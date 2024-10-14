import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  borderless?: boolean;
  iconSrc?: string;
  mode?: 'primary' | 'accent';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  label,
  backgroundColor,
  borderless = false,
  iconSrc,
  mode = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles[`button_${mode}`],
        styles[`button_${size}`],
        borderless && styles.button_borderless
      )}
      {...props}>
      {iconSrc && <Image src={iconSrc} height={16} width={16} alt="" className={styles.button__icon} />}
      <span>{label}</span>
    </button>
  );
}
