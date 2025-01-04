import { Suspense } from 'react';

import Container from '@/components/container';

import { getLatestFlashcardSets } from '@/features/flashcards/actions';
import RecentSets from '@/features/flashcards/components/create-set/recent-sets';

export default function LatestPage() {
  const sets = getLatestFlashcardSets();

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <RecentSets sets={sets} />
      </Suspense>
    </Container>
  );
}
