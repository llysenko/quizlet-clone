import Image from 'next/image';

import styles from './styles.module.scss';

export default function CarouselCard({ data }: { data: any }) {
  return (
    <div className={styles.card} style={{ backgroundColor: data.bgColor, color: data.textColor }}>
      <div className={styles.card__header}>{data.title}</div>
      <div>
        <Image alt={data.title} src={data.imageSrc} width={500} height={500} />
      </div>
    </div>
  );
}
