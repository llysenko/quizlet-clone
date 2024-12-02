import { ReactNode } from 'react';

export default function FlashcardStudyModeList({ children }: { children: ReactNode }) {
  return <ul className="mb-6 flex flex-wrap gap-4">{children}</ul>;
}
