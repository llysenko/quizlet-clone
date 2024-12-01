import { useId } from 'react';

import Card from '@/features/flashcards/components/create-set/card';

import styles from '../../styles.module.scss';

type Props = {
  next: number;
  addCard: () => void;
};

export default function AddFlashcardButton({ next, addCard }: Props) {
  const id = useId();

  return (
    <Card className={styles.addFlashcardBtn__container}>
      <p className="tetx-xl font-bold text-ghost-white">{next}</p>
      <button type="button" className={styles.addFlashcardBtn} onClick={addCard}>
        Add a card
      </button>
    </Card>
  );
}
