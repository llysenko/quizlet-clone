import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <main className="p-2">
      {children}
    </main>
  );
}
