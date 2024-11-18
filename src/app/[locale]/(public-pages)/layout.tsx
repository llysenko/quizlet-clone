import { ReactNode } from 'react';

import Footer from '@/components/footer';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <div className="page-footer">
        <Footer />
      </div>
    </>
  );
}
