'use client';

import { useFormStatus } from 'react-dom';

import Button, { ButtonProps } from '@/components/buttons';

export default function SubmitButton({
  label,
  backgroundColor,
  borderless = false,
  iconSrc,
  mode = 'primary',
  size = 'medium',
  type = 'button',
  width = 'fit',
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      label={pending ? 'Submitting...' : label}
      backgroundColor={backgroundColor}
      borderless={borderless}
      iconSrc={iconSrc}
      mode={mode}
      size={size}
      type="submit"
      width={width}
      disabled={pending}
      {...props}
    />
  );
}
