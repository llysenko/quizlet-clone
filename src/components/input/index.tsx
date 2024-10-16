import InputLabel from '@/components/input-label';
import IconButton from '@/components/icon-button';
import { useState } from 'react';

export type InputType = 'email' | 'password' | 'text';
type InputProps = {
  id: string;
  type: InputType;
  name: string;
  placeholder: string;
};

export default function Input({ data }: { data: InputProps }) {
  const [type, setType] = useState<InputType>(data.type);

  function togglePasswordVisibility() {
    setType(type === 'password' ? 'text' : 'password');
  }

  return (
    <div>
      <InputLabel label={data.name} />
      <label className="relative flex h-[3rem] flex-col justify-center overflow-hidden rounded-lg bg-grey px-4 py-1">
        <div className="flex items-center justify-between">
          <input
            autoComplete="off"
            type={type}
            id={data.id}
            placeholder={data.placeholder}
            className="border-0 bg-inherit text-gray-600 outline-0"
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
