import { ReactNode } from 'react';

export default function Heading1({ props, children }: { props?: any; children: ReactNode }) {
  return (
    <h1 className="font-bold text-heading-1" {...props}>
      {children}
    </h1>
  );
}
