import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import './styles.scss';

interface ButtonProps {
  backgroundColor?: string;
  iconSrc?: string;
  label: string;
  borderless?: boolean;
  mode?: 'primary' | 'accent';
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  mode = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  borderless = false,
  iconSrc,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx('button', `button--${size}`, `button--${mode}`, borderless && 'button--borderless')}
      {...props}>
      {iconSrc && <Image src={iconSrc} height={12} width={16} alt="" className="icon" />}
      <span>{label}</span>
    </button>
  );
}
