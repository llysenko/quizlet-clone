import Image from 'next/image';

import { Link } from '@/navigation';

type StudyMode = {
  href: string;
  iconPath: string;
  id: number;
  title: string;
};

export default function FlashcardStudlyModeListItem({ mode }: { mode: StudyMode }) {
  return (
    <li className="flex shrink grow basis-6 rounded-lg border-b-4 border-transparent bg-ghost-white shadow-[0_.0625rem_.1875rem_0_#282e3e1f] hover:border-maximum-blue-purple">
      <Link href={mode.href} className="flex h-full w-full flex-col items-center justify-center gap-4 px-2 py-4">
        <Image src={mode.iconPath} alt={mode.title} width={32} height={32} />
        <p className="font-semibold">{mode.title}</p>
      </Link>
    </li>
  );
}
