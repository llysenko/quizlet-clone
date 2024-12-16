import { useActionState, useState } from 'react';
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { z } from 'zod';

import SubmitButton from '@/components/buttons/submit-button';
import Heading2 from '@/components/headings/heading-2';

import { ActionState } from '@/features/auth/lib/types';
import { create } from '@/features/folders/actions';

const TitleSchema = z.string().min(1, { message: 'required' }).max(255);

export default function CreateFolderDialog({
  isOpen = false,
  onOpenChange
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const [title, setTitle] = useState('');
  const [isTitleInvalid, setIsTitleInvalid] = useState<boolean>(false);
  const [formState, formAction, signUpPending] = useActionState<ActionState, FormData>(handleCreateFolder, {
    error: ''
  });

  async function handleCreateFolder(prevState: ActionState, formData: FormData) {
    const validatedTitle = TitleSchema.safeParse(title);

    if (!validatedTitle.success) {
      setIsTitleInvalid(true);
    } else {
      await create(prevState, formData);
      onOpenChange();
    }
  }

  function handleValueChange(value: string) {
    setTitle(value);
    setIsTitleInvalid(!value);
  }

  return (
    <Modal isOpen={isOpen} placement="top" size="2xl" onOpenChange={onOpenChange}>
      <ModalContent>
        <form action={formAction}>
          <div className="p-8">
            <ModalHeader className="flex flex-col gap-1">
              <Heading2>Create a new folder</Heading2>
            </ModalHeader>
            <ModalBody>
              <Input
                isInvalid={isTitleInvalid}
                isRequired={true}
                value={title}
                errorMessage="Please enter a title"
                label="Title"
                name="title"
                placeholder="Title"
                radius="lg"
                type="text"
                variant="flat"
                onValueChange={handleValueChange}
              />
            </ModalBody>
          </div>
          <ModalFooter className="border-t">
            <SubmitButton disabled={isTitleInvalid} label="Create folder" />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
