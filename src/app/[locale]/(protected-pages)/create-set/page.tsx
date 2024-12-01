import SetPage from '@/features/flashcards/components/create-set/set-page';

export default function CreateSetPage() {
  const initFlashcardsSet = Array.from({ length: 5 }).map((_, index) => ({ id: index + 1 }));

  return <SetPage set={{ flashcards: initFlashcardsSet }} />;
}
