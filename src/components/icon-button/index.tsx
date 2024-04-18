import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import './styles.scss';

interface IconButtonProps {
  backgroundColor?: string;
  iconSrc: string;
  title?: string;
  borderless?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function IconButton({
  size = 'medium',
  backgroundColor,
  borderless = false,
  iconSrc,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      title={props.title}
      className={clsx('icon-button', `icon-button--${size}`, borderless && 'icon-button--borderless')}
      {...props}>
      <Image src={iconSrc} height={24} width={24} alt="" />
    </button>
  );
}
