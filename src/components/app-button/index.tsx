import { MouseEvent } from 'react';
import { Button } from '@nextui-org/react';

type Props = {
  label?: string;
  disabled?: boolean;
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
      aria-disabled={props.disabled}
      isDisabled={props.disabled}
      size={props.size || 'md'}
      type={props.type || 'button'}
      radius="sm"
      variant="solid"
      className="bg-ultramarine-blue text-white hover:bg-palatinate-blue"
      onPress={handleClick}>
      {props.label}
    </Button>
  );
}
