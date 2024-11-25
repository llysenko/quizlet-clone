import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

interface IconButtonProps {
  iconSrc: string;
  bgColor?: string;
  borderless?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  onClick?: (event?: any) => void;
}

export default function IconButton({
  iconSrc,
  bgColor,
  borderless = false,
  className,
  size = 'medium',
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      title={props.title}
      className={clsx(className, styles.button, styles[`button_${size}`], borderless && styles.button_borderless)}
      {...props}>
      <Image src={iconSrc} height={24} width={24} alt="" className="h-6 w-6" />
    </button>
  );
}
