import { redirect } from 'next/navigation';

import Heading2 from '@/components/headings/heading-2';

import { getUser } from '@/features/auth/db/queries';

export default async function LivePage() {
  const user = await getUser();

  if (user) redirect('/latest');

  return <Heading2 className="p-4 text-center text-3xl font-bold">Live Page Here</Heading2>;
}
