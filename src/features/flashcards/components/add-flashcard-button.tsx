import Card from '@/features/flashcards/components/card';

import styles from '../styles.module.scss';

type Props = {
  next: number;
  addCard: () => void;
};

export default function AddFlashcardButton({ next, addCard }: Props) {
  return (
    <Card className={styles.addFlashcardBtn__container}>
      <p className="text-grey font-bold tetx-xl">{next}</p>
      <button type="button" className={styles.addFlashcardBtn} onClick={addCard}>
        Add a card
      </button>
    </Card>
  );
}
