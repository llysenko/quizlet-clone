import { redirect } from 'next/navigation';
import React from 'react';

import { getUser } from '@/features/auth/db/queries';
import HomePage from '@/features/home-page/components/home-page';

export default async function IndexPage() {
  const user = await getUser();

  if (user) redirect('/latest');

  return <HomePage />;
}
