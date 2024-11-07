import Heading2 from '@/components/headings/heading-2';

import SetCreateControl from '@/features/flashcards/components/set-create-control';
import SetHeader from '@/features/flashcards/components/set-header';
import SetInfo from '@/features/flashcards/components/set-info';
import SetList from '@/features/flashcards/components/set-list';

export default function SetPage() {
  return (
    <div className="bg-grey">
      <SetHeader>
        <Heading2>Create a new flashcard set</Heading2>
        <SetCreateControl />
      </SetHeader>

      <SetInfo />
      <SetList />
    </div>
  );
}
