import { ChangeEvent, useState } from 'react';

import AddImageButton from '@/features/flashcards/components/create-set/add-image-button';
import AddImageSection from '@/features/flashcards/components/create-set/add-image-section';
import Card from '@/features/flashcards/components/create-set/card';
import SetListItemHeader from '@/features/flashcards/components/create-set/set-list-item-header';
import SetListItemInput from '@/features/flashcards/components/create-set/set-list-item-input';
import { FlashCard } from '@/features/flashcards/lib/types';

type Props = {
  data: FlashCard;
  index: number;
  deleteCard: (id: number) => void;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SetListItem({ data, index, deleteCard, handleOnChange }: Props) {
  const [isAddImageSectionVisible, setIsAddImageSectionVisible] = useState<boolean>(false);

  function toggleAddImageSection() {
    setIsAddImageSectionVisible(prevState => !prevState);
  }

  return (
    <Card>
      <div className="flex items-center justify-between border-b-2 border-ghost-white px-6 py-3">
        <SetListItemHeader data={data} index={index} deleteCard={deleteCard} />
      </div>
      <div className="flex flex-wrap gap-8 px-6 pb-6 pt-7 sm:flex-nowrap">
        <div className="w-full sm:w-1/2">
          <SetListItemInput
            label="term"
            placeholder="Enter term"
            name="term"
            cardId={data.id}
            defaultValue={data.term}
            handleOnChange={handleOnChange}
          />
        </div>
        <div className="flex w-full gap-4 sm:w-1/2">
          <div className="grow">
            <SetListItemInput
              label="definition"
              placeholder="Enter definition"
              name="definition"
              cardId={data.id}
              defaultValue={data.definition}
              handleOnChange={handleOnChange}
            />
          </div>
          <AddImageButton onClick={toggleAddImageSection} />
        </div>
      </div>
      {isAddImageSectionVisible && <AddImageSection />}
    </Card>
  );
}
