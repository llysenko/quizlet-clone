import clsx from 'clsx';
import Image from 'next/image';

import styles from './styles.module.scss';

type Props = {
  bgColorClass: string;
  imageSrc: string;
  textColorClass: string;
  title: string;
};

export default function CarouselCard({ data }: { data: Props }) {
  return (
    <div className={clsx(styles.card, data.bgColorClass, data.textColorClass)}>
      <div className={styles.card__header}>{data.title}</div>
      <div>
        <Image alt={data.title} src={data.imageSrc} width={500} height={500} />
      </div>
    </div>
  );
}
