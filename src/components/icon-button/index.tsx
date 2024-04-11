import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import './styles.scss';

interface IconButtonProps {
  backgroundColor?: string;
  iconSrc: string;
  borderless?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const IconButton = ({
  size = 'medium',
  backgroundColor,
  borderless = false,
  iconSrc,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('icon-button', `icon-button--${size}`, borderless && 'icon-button--borderless')}
      {...props}>
      <Image src={iconSrc} height={24} width={24} alt="" />
    </button>
  );
};
