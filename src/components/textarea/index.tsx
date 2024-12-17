'use client';

import { ChangeEvent, useId, useState } from 'react';
import clsx from 'clsx';

import InputLabel from '@/components/input-label';

import styles from './styles.module.scss';

type Props = {
  name: string;
  label?: string;
  placeholder: string;
};

export default function Textarea({
  data,
  error,
  className = 'bg-ghost-white',
  defaultValue
}: {
  data: Props;
  error?: any;
  className?: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState('');
  const id = useId();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <InputLabel label={error ? error : data.label} error={!!error} />
      <label
        htmlFor={id}
        className={clsx(
          'flex flex-col justify-center overflow-hidden rounded-lg px-4 py-3.5',
          styles.label,
          className,
          error && 'border-error border-b-2'
        )}>
        <div className="flex items-center justify-between">
          <textarea
            className="w-full resize-none overflow-y-auto border-0 bg-inherit text-sm text-gunmetal outline-0"
            autoComplete="off"
            spellCheck="true"
            id={id}
            name={data.name}
            placeholder={data.placeholder}
            defaultValue={defaultValue}
            onChange={handleChange}
          />
        </div>
      </label>
    </div>
  );
}
