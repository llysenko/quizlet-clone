import { ReactNode } from 'react';

export default function Heading1({ children }: { children: ReactNode }) {
  return <h1 className="text-heading-1 font-bold">{children}</h1>;
}
