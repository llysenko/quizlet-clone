import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  borderless?: boolean;
  iconSrc?: string;
  mode?: 'primary' | 'accent' | 'outlined';
  size?: 'small' | 'medium' | 'large' | 'full';
  width?: 'full' | 'fit';
  onClick?: () => void;
}

export default function Button({
  label,
  backgroundColor,
  borderless = false,
  iconSrc,
  mode = 'primary',
  size = 'medium',
  width = 'fit',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        styles[`button_${mode}`],
        styles[`button_${size}`],
        styles[`button_${width}`],
        borderless && styles.button_borderless
      )}
      {...props}>
      {iconSrc && <Image src={iconSrc} height={16} width={16} alt="" className={styles.button__icon} />}
      <span>{label}</span>
    </button>
  );
}
