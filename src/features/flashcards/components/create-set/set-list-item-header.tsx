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
      <div className="text-base font-bold text-cadet-grey">{index}</div>
      <div></div>
      <div>
        <Button isIconOnly variant="light" radius="full" aria-label="Delete" onPress={() => deleteCard(data.id)}>
          <Image src="/images/icon__delete-bin.svg" alt="Delete" width={16} height={16} />
        </Button>
      </div>
    </>
  );
}
