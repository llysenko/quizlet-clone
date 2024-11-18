import clsx from 'clsx';
import { useState } from 'react';

import IconButton from '@/components/icon-button';
import InputLabel from '@/components/input-label';

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

  function togglePasswordVisibility() {
    setType(type === 'password' ? 'text' : 'password');
  }

  return (
    <div>
      {data.label && <InputLabel label={error ? error : data.label} error={!!error} />}
      <label
        htmlFor={data.id}
        className={clsx(
          'relative flex flex-col justify-center overflow-hidden rounded-lg px-4 py-2.5',
          className,
          error && 'border-b-2 border-error'
        )}>
        <div className="flex items-center justify-between">
          <input
            autoComplete="off"
            type={type}
            id={data.id}
            name={data.name}
            placeholder={data.placeholder}
            className="w-full border-0 bg-inherit text-color-h outline-0"
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
      <style jsx>{`
        label:focus-within {
          border-bottom: 2px solid #282e3e;
        }
      `}</style>
    </div>
  );
}
