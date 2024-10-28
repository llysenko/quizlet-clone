import clsx from 'clsx';
import { useState } from 'react';

import styles from './styles.module.scss';

type CheckboxProps = {
  id: string;
  name: string;
  label: string;
};

export default function Checkbox({ data }: { data: CheckboxProps }) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleCheckboxChange(e: any) {
    setIsChecked(e.target.checked);
  }

  return (
    <label
      htmlFor={data.id}
      className={clsx(
        styles.container,
        'flex cursor-pointer items-center text-sm font-semibold leading-[1.4rem] text-text-color-h'
      )}>
      <input type="checkbox" id={data.id} name={data.name} checked={isChecked} onChange={handleCheckboxChange} />
      <span className={styles.checkmark}></span>
      <p className="ml-4 text-sm font-semibold leading-[1.4rem] text-text-color-h">{data.label}</p>
    </label>
  );
}
