import { ReactNode } from 'react';

export default function Heading3({ props, children }: { props?: any; children: ReactNode }) {
  return (
    <h3 className="font-semibold text-xl text-text-color-h" {...props}>
      {children}
    </h3>
  );
}
