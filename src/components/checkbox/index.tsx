import styles from './styles.module.scss';
import clsx from 'clsx';

type CheckboxProps = {
  id: string;
  name: string;
  label: string;
};

export default function Checkbox({ data }: { data: CheckboxProps }) {
  return (
    <label
      className={clsx(
        styles.container,
        'flex cursor-pointer items-center text-sm font-semibold leading-[1.4rem] text-text-color-h'
      )}>
      <input type="checkbox" id={data.id} name={data.name} />
      <span className={styles.checkmark}></span>
      <p className="ml-4 text-sm font-semibold leading-[1.4rem] text-text-color-h">{data.label}</p>
    </label>
  );
}
