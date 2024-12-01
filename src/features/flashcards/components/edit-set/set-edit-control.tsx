import { Button } from '@nextui-org/react';
import clsx from 'clsx';

import SubmitButton from '@/components/buttons/submit-button';

type Props = {
  backBtnVisibility?: boolean;
  size?: 'md' | 'lg';
  className?: string;
  handleOnClick: () => void;
};

export default function SetEditControl({ backBtnVisibility = true, size = 'md', className, handleOnClick }: Props) {
  return (
    <div className={clsx(className, backBtnVisibility ? 'justify-between' : 'justify-end', 'flex w-full items-center')}>
      {backBtnVisibility && (
        <Button
          size={size}
          radius="sm"
          variant="solid"
          className="bg-ultramarine-blue text-white"
          onClick={handleOnClick}>
          Back to set
        </Button>
      )}

      <SubmitButton label="Done" mode="primary" size={size} />
    </div>
  );
}
