'use client';

import { MouseEvent } from 'react';
import { useFormStatus } from 'react-dom';

import AppButton from '@/components/app-button';
import { ButtonProps } from '@/components/buttons';

export default function SubmitButton({ label, size = 'md' }: ButtonProps) {
  const { pending } = useFormStatus();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (pending) event.preventDefault();
  }

  return (
    <AppButton
      props={{ label: pending ? 'Submitting...' : label, pending, size, type: 'submit' }}
      handleClick={handleClick}
    />
  );
}
