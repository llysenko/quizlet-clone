import { ReactNode } from 'react';

export default function FlashcardList({ children }: { children: ReactNode }) {
  return <div className="p-4 bg-grey rounded-2xl mb-10 flex flex-col gap-3">{children}</div>;
}
