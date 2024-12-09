import Image from 'next/image';

import styles from '../../styles.module.scss';

export default function AddImageButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className={styles.addImageBtn} onClick={onClick}>
      <Image src="/images/icon__image.svg" alt="Image" width={24} height={24} className="text-charcoal" />
      Image
    </button>
  );
}
