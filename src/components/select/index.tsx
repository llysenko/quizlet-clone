import { ChangeEvent } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Option = {
  name: string | number;
  value: string | number;
};
type SelectData = {
  id: string;
  name: string;
  options: Array<Option>;
};

export default function Select({
  data,
  error,
  onInputChange
}: {
  data: SelectData;
  error: string | string[] | undefined;
  onInputChange: (event: ChangeEvent) => void;
}) {
  return (
    <div className="relative inline-block">
      <select
        id={data.id}
        name={data.name}
        className={clsx(error && error.includes(data.name) && styles.select_error, styles.select)}
        onChange={e => onInputChange(e)}>
        {data.options.map((option: Option) => (
          <option key={option.value} value={option.value} defaultValue={data.id}>
            {option.name}
          </option>
        ))}
      </select>
      <Image src="/images/icon__chevron.svg" alt="" width={6} height={16} className={styles.icon} />
    </div>
  );
}
