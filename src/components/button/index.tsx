import Image from 'next/image';
import React from 'react';

import './styles.scss';

interface ButtonProps {
  backgroundColor?: string;
  iconSrc?: string;
  label: string;
  mode?: 'primary' | 'accent' | 'borderless';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ mode = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={['button', `button--${size}`, `button--${mode}`].join(' ')} {...props}>
      {props.iconSrc && <Image src="/static/images/sparkles.png" height={12} width={16} alt="" className="icon" />}
      <span>{label}</span>
    </button>
  );
};
