import { ReactNode } from 'react';

export default function Heading4({ props, children }: { props?: any; children: ReactNode }) {
  return (
    <h4 className="font-semibold text-base text-text-color-h" {...props}>
      {children}
    </h4>
  );
}
