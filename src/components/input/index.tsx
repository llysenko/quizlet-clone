import clsx from 'clsx';
import { useId, useState } from 'react';

import IconButton from '@/components/icon-button';
import InputLabel from '@/components/input-label';

import styles from './styles.module.scss';

export type InputType = 'email' | 'password' | 'text' | 'search';
type InputProps = {
  id: string;
  type: InputType;
  name: string;
  label?: string;
  placeholder: string;
  className?: string;
};

export default function Input({
  data,
  onInputBlur,
  error,
  className = 'bg-grey'
}: {
  data: InputProps;
  onInputBlur?: (target: any) => void;
  error?: any;
  className?: string;
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
          error && 'border-b-2 border-error'
        )}>
        <div className="flex items-center justify-between">
          <input
            id={id}
            autoComplete="off"
            spellCheck="true"
            className="w-full border-0 bg-inherit text-color-h outline-0"
            type={type}
            name={data.name}
            placeholder={data.placeholder}
            onBlur={event => onInputBlur?.(event.target)}
          />
          {data.type === 'password' && (
            <IconButton
              iconSrc="/static/images/icon__eye.svg"
              borderless={true}
              onClick={togglePasswordVisibility}
              className="hover:bg-grey-3"
            />
          )}
        </div>
      </label>
    </div>
  );
}
