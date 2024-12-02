'use client';

import { ChangeEvent, useState } from 'react';
import { Input, Textarea } from '@nextui-org/react';
import { redirect, useRouter } from 'next/navigation';

import Container from '@/components/container';
import Error from '@/components/error';
import Heading2 from '@/components/headings/heading-2';

import { createFlashcardSetWithCards, updateFlashcardSetWithCards } from '@/features/flashcards/actions';
import AddFlashcardButton from '@/features/flashcards/components/create-set/add-flashcard-button';
import SetCreateControl from '@/features/flashcards/components/create-set/set-create-control';
import SetHeader from '@/features/flashcards/components/create-set/set-header';
import SetInfo from '@/features/flashcards/components/create-set/set-info';
import SetList from '@/features/flashcards/components/create-set/set-list';
import SetListItem from '@/features/flashcards/components/create-set/set-list-item';
import SetSettings from '@/features/flashcards/components/create-set/set-settings';
import SetEditControl from '@/features/flashcards/components/edit-set/set-edit-control';
import { FlashCard } from '@/features/flashcards/lib/types';

type Props = {
  set: {
    flashcards: FlashCard[];
  };
};

export default function SetPage({ set }: any) {
  const [allFlashcards, setFlashcards] = useState<FlashCard[]>(set.flashcards);
  const [errors, setErrors] = useState();
  const router = useRouter();

  async function handleCreateSet(formData: FormData) {
    const response: any = set.id
      ? await updateFlashcardSetWithCards(set.id, formData, allFlashcards)
      : await createFlashcardSetWithCards(formData, allFlashcards);

    response?.errors ? setErrors(response?.errors) : redirect(`/${response?.id}/flash-cards`);
  }

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

  function redirectToSet() {
    router.push(`/${set.id}/flash-cards`);
  }

  return (
    <form action={handleCreateSet} className="bg-ghost-white">
      <SetHeader>
        <Heading2>{!set.id && 'Create a new flashcard set'}</Heading2>
        {set.id ? <SetEditControl handleOnClick={redirectToSet} /> : <SetCreateControl />}
      </SetHeader>

      <SetInfo>
        <Input
          defaultValue={set.title}
          label="Title"
          name="title"
          placeholder="Enter a title, like “Biology - Chapter 22: Evolution"
          radius="lg"
          variant="underlined"
          className="overflow-hidden rounded-lg bg-white"
        />

        <Textarea
          defaultValue={set.description}
          label="Description"
          labelPlacement="inside"
          name="description"
          placeholder="Add a description..."
          variant="underlined"
          className="overflow-hidden rounded-lg bg-white"
        />
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
        {set.id ? (
          <SetEditControl size="lg" handleOnClick={redirectToSet} backBtnVisibility={false} />
        ) : (
          <SetCreateControl size="lg" className="mb-4" />
        )}
      </Container>
    </form>
  );
}
