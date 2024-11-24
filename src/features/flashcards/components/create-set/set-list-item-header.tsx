import { Button } from '@nextui-org/react';
import Image from 'next/image';

import { FlashCard } from '@/features/flashcards/lib/types';

type Props = {
  data: FlashCard;
  index: number;
  deleteCard: (id: number) => void;
};

export default function SetListItemHeader({ data, index, deleteCard }: Props) {
  return (
    <>
      <div className="text-cadet-grey font-bold text-base">{index}</div>
      <div></div>
      <div>
        <Button isIconOnly variant="light" radius="full" aria-label="Delete" onClick={() => deleteCard(data.id)}>
          <Image src="/static/images/icon__delete-bin.svg" alt="Delete" width={16} height={16} />
        </Button>
      </div>
    </>
  );
}
