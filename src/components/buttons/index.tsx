import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './styles.module.scss';

export interface ButtonProps {
  borderless?: boolean;
  disabled?: boolean;
  iconSrc?: string;
  label: string;
  mode?: 'primary' | 'accent' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  width?: 'full' | 'fit';
  onClick?: (event?: any) => void;
}

export default function Button({
  borderless = false,
  disabled = false,
  iconSrc,
  label,
  mode = 'primary',
  size = 'md',
  type = 'button',
  width = 'fit',
  onClick
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        styles[`button_${mode}`],
        styles[`button_${size}`],
        styles[`button_${width}`],
        borderless && styles.button_borderless,
        disabled && 'cursor-not-allowed opacity-50'
      )}
      onClick={onClick}>
      {iconSrc && <Image src={iconSrc} height={16} width={16} alt="" className={styles.button__icon} />}
      <span>{label}</span>
    </button>
  );
}
