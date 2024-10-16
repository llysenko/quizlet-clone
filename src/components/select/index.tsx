import Image from 'next/image';

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

export default function Select({ data }: { data: SelectData }) {
  return (
    <div className="relative inline-block">
      <select id={data.id} name={data.name} className={styles.select}>
        {data.options.map((option: Option) => (
          <option key={option.value} value={option.value} defaultValue={data.id}>
            {option.name}
          </option>
        ))}
      </select>
      <Image src="/static/images/icon__chevron.svg" alt="" width={6} height={16} className={styles.icon} />
    </div>
  );
}
