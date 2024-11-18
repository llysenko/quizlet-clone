'use client';

import { redirect } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import Container from '@/components/container';
import Error from '@/components/error';
import Heading2 from '@/components/headings/heading-2';
import Input from '@/components/input';
import Textarea from '@/components/textarea';

import { createFlashcardSetWithCards } from '@/features/flashcards/actions';
import AddFlashcardButton from '@/features/flashcards/components/add-flashcard-button';
import SetCreateControl from '@/features/flashcards/components/set-create-control';
import SetHeader from '@/features/flashcards/components/set-header';
import SetInfo from '@/features/flashcards/components/set-info';
import SetList from '@/features/flashcards/components/set-list';
import SetListItem from '@/features/flashcards/components/set-list-item';
import SetSettings from '@/features/flashcards/components/set-settings';
import { DESCRIPTION_DATA, TITLE_DATA } from '@/features/flashcards/lib/constants';
import { FlashCard } from '@/features/flashcards/lib/types';

type Props = {
  cards: FlashCard[];
};

export default function SetPage({ cards }: Props) {
  const [allFlashcards, setFlashcards] = useState<FlashCard[]>(cards);
  const [errors, setErrors] = useState();

  function addNewCard() {
    const lastId = allFlashcards
      .map(card => card.id)
      .sort((a, b) => a - b)
      .at(-1);

    setFlashcards([...allFlashcards, { id: (lastId || 1) + 1 }]);
  }

  function deleteCard(cardId: number) {
    setFlashcards(allFlashcards.filter(card => card.id !== cardId));
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const card: FlashCard | undefined = allFlashcards.find(card => card.id === +event.target.id);

    if (card) card[event.target.name] = event.target.value;
  }

  async function handleCreateSet(formData: FormData) {
    const response: any = await createFlashcardSetWithCards(formData, allFlashcards);

    response?.errors ? setErrors(response?.errors) : redirect(`/${response?.id}/flash-cards`);
  }

  return (
    <form action={handleCreateSet} className="bg-grey">
      <SetHeader>
        <Heading2>Create a new flashcard set</Heading2>
        <SetCreateControl />
      </SetHeader>

      <SetInfo>
        <Input data={TITLE_DATA} className="bg-white" error={true} />
        <Textarea data={DESCRIPTION_DATA} className="bg-white" />
      </SetInfo>

      <SetSettings />

      {errors && (
        <Container>
          <Error>{Object.values(errors)}</Error>
        </Container>
      )}

      <SetList className="flex flex-col gap-4">
        {allFlashcards.map((card, index) => (
          <SetListItem
            key={card.id}
            data={card}
            index={index + 1}
            deleteCard={deleteCard}
            handleOnChange={handleOnChange}
          />
        ))}
        <AddFlashcardButton next={allFlashcards.length + 1} addCard={addNewCard} />
      </SetList>

      <Container className="flex justify-end">
        <SetCreateControl size="large" className="mb-4" />
      </Container>
    </form>
  );
}
