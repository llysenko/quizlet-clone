'use client';

import Input, { InputType } from '@/components/input';

import SetContainer from '@/features/flashcards/components/set-container';

export default function SetInfo() {
  const data = {
    id: 'flashcardsSetTitle',
    type: 'text' as InputType,
    name: 'flashcardsSetTitle',
    label: '',
    placeholder: 'Enter a title, like “Biology - Chapter 22: Evolution'
  };
  return (
    <div className="h-[216px]">
      <SetContainer>
        <Input data={data} inputBg="bg-white" />
      </SetContainer>
    </div>
  );
}
