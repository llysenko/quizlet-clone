'use client';

import { useFormStatus } from 'react-dom';

import Button, { ButtonProps } from '@/components/buttons';

export default function SubmitButton({
  borderless = false,
  iconSrc,
  label,
  mode = 'primary',
  size = 'medium',
  width = 'fit'
}: ButtonProps) {
  const { pending } = useFormStatus();

  function handleClick(event: Event) {
    if (pending) event.preventDefault();
  }

  return (
    <Button
      aria-disabled={pending}
      label={pending ? 'Submitting...' : label}
      borderless={borderless}
      iconSrc={iconSrc}
      mode={mode}
      size={size}
      type="submit"
      width={width}
      disabled={pending}
      onClick={handleClick}
    />
  );
}
