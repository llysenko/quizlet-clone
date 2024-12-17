'use client';

import { useId, useState } from 'react';
import clsx from 'clsx';

import IconButton from '@/components/icon-button';
import InputLabel from '@/components/input-label';

import styles from './styles.module.scss';

export type InputType = 'email' | 'password' | 'text' | 'search';
type InputProps = {
  type: InputType;
  name: string;
  label?: string;
  placeholder: string;
};

export default function Input({
  data,
  onInputBlur,
  error,
  className = 'bg-ghost-white',
  defaultValue
}: {
  data: InputProps;
  onInputBlur?: (target: EventTarget & HTMLInputElement) => void;
  error?: string;
  className?: string;
  defaultValue?: string;
}) {
  const [type, setType] = useState<InputType>(data.type);
  const id = useId();

  function togglePasswordVisibility() {
    setType(type === 'password' ? 'text' : 'password');
  }

  return (
    <div>
      {data.label && <InputLabel label={error ? error : data.label} error={!!error} />}
      <label
        htmlFor={id}
        className={clsx(
          'relative flex flex-col justify-center overflow-hidden rounded-lg px-4 py-2.5',
          styles.label,
          className,
          error && 'border-error border-b-2'
        )}>
        <div className="flex items-center justify-between">
          <input
            id={id}
            defaultValue={defaultValue}
            autoComplete="off"
            spellCheck="true"
            className="w-full border-0 bg-inherit text-gunmetal outline-0"
            type={type}
            name={data.name}
            placeholder={data.placeholder}
            onBlur={event => onInputBlur?.(event.target)}
          />
          {data.type === 'password' && (
            <IconButton
              borderless={true}
              className="hover:bg-bright-gray"
              iconSrc="/images/icon__eye.svg"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </label>
    </div>
  );
}
