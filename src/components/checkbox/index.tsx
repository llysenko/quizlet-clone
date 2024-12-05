import clsx from 'clsx';

import styles from './styles.module.scss';

type CheckboxProps = {
  id: string;
  name: string;
  label: string;
};

export default function Checkbox({ data, error }: { data: CheckboxProps; error: string | null }) {
  return (
    <label
      htmlFor={data.id}
      className={clsx(
        styles.container,
        'flex cursor-pointer items-center text-sm font-semibold leading-[1.4rem] text-gunmetal'
      )}>
      <input type="checkbox" id={data.id} name={data.name} />
      <span className={styles.checkmark}></span>
      <p className={clsx(styles.label, error && styles.label_error)}>{data.label}</p>
    </label>
  );
}
