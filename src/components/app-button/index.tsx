import { MouseEvent } from 'react';
import { Button } from '@nextui-org/react';

type Props = {
  label?: string;
  pending?: boolean;
  size?: 'lg' | 'md' | 'sm';
  type?: 'button' | 'submit' | 'reset';
};

export default function AppButton({
  props,
  handleClick
}: {
  props: Props;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button
      aria-disabled={props.pending}
      disabled={props.pending}
      size={props.size || 'md'}
      type={props.type || 'button'}
      radius="sm"
      variant="solid"
      className="bg-ultramarine-blue text-white hover:bg-palatinate-blue"
      onClick={handleClick}>
      {props.label}
    </Button>
  );
}
