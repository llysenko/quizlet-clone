import { ReactNode } from 'react';

export default function Heading2({ props, children }: { props?: any; children: ReactNode }) {
  return (
    <h2 className="font-bold text-xl md:text-heading-2 whitespace-nowrap" {...props}>
      {children}
    </h2>
  );
}
