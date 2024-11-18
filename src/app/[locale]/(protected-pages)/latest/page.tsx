import Container from '@/components/container';

import { getLatestFlashcardSets } from '@/features/flashcards/actions';
import RecentSets from '@/features/flashcards/components/recent-sets';

export default async function LatestPage() {
  const sets = await getLatestFlashcardSets();

  return (
    <Container>
      <RecentSets sets={sets} />
    </Container>
  );
}
