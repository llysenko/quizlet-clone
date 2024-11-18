import { Input } from '@nextui-org/react';
import { ChangeEvent } from 'react';

type Props = {
  cardId: number;
  label: string;
  name: string;
  placeholder: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SetListItemInput({ cardId, label, name, placeholder, handleOnChange }: Props) {
  return (
    <>
      <Input
        className="border-black"
        color="warning"
        type="text"
        variant="underlined"
        id={cardId.toString()}
        name={name}
        placeholder={placeholder}
        onChange={event => handleOnChange(event)}
      />
      <div className="flex mt-3 justify-between">
        <p className="pl-1 uppercase text-grey-5 text-ellipsis overflow-hidden whitespace-nowrap text-xs">{label}</p>
        {/*<p className="pl-1 uppercase text-ellipsis overflow-hidden whitespace-nowrap text-xs text-green-1">*/}
        {/*  choose language*/}
        {/*</p>*/}
      </div>
    </>
  );
}
