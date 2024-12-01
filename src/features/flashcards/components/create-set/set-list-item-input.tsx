import { ChangeEvent } from 'react';
import { Input } from '@nextui-org/react';

type Props = {
  cardId: number;
  defaultValue?: string;
  label: string;
  name: string;
  placeholder: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SetListItemInput({ cardId, defaultValue, label, name, placeholder, handleOnChange }: Props) {
  return (
    <>
      <Input
        className="border-black"
        color="warning"
        type="text"
        variant="underlined"
        id={cardId.toString()}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={event => handleOnChange(event)}
      />
      <div className="mt-3 flex justify-between">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap pl-1 text-xs uppercase text-cadet-grey">
          {label}
        </p>
        {/*<p className="pl-1 uppercase text-ellipsis overflow-hidden whitespace-nowrap text-xs text-medium-turquoise">*/}
        {/*  choose language*/}
        {/*</p>*/}
      </div>
    </>
  );
}
