import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  borderless?: boolean;
  disabled?: boolean;
  iconSrc?: string;
  mode?: 'primary' | 'accent' | 'outlined';
  size?: 'small' | 'medium' | 'large' | 'full';
  type?: 'button' | 'submit';
  width?: 'full' | 'fit';
  onClick?: () => void;
}

export default function Button({
  label,
  backgroundColor,
  borderless = false,
  disabled = false,
  iconSrc,
  mode = 'primary',
  size = 'medium',
  type = 'button',
  width = 'fit',
  ...props
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
      {...props}>
      {iconSrc && <Image src={iconSrc} height={16} width={16} alt="" className={styles.button__icon} />}
      <span>{label}</span>
    </button>
  );
}
