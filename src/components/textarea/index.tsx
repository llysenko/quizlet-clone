import clsx from 'clsx';
import { ChangeEvent, useId, useState } from 'react';

import InputLabel from '@/components/input-label';

import styles from './styles.module.scss';

type Props = {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  className?: string;
};

export default function Textarea({
  data,
  error,
  className = 'bg-grey'
}: {
  data: Props;
  error?: any;
  className?: string;
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
        htmlFor={data.id}
        className={clsx(
          'flex flex-col justify-center overflow-hidden rounded-lg px-4 py-3.5',
          styles.label,
          className,
          error && 'border-b-2 border-error'
        )}>
        <div className="flex items-center justify-between">
          <textarea
            className="w-full border-0 bg-inherit text-color-h text-sm outline-0 resize-none overflow-y-auto"
            autoComplete="off"
            spellCheck="true"
            id={id}
            name={data.name}
            placeholder={data.placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      </label>
    </div>
  );
}
