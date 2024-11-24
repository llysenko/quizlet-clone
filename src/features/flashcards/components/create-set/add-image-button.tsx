import Image from 'next/image';

import styles from '../../styles.module.scss';

export default function AddImageButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className={styles.addImageBtn} onClick={onClick}>
      <Image src="/static/images/icon__image.svg" alt="Image" width={24} height={24} className="text-charcoal" />
      Image
    </button>
  );
}
