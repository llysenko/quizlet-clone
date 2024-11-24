'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';

export default function SetCreateModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button radius="full" variant="bordered" size="sm" isIconOnly aria-label="Open modal" onPress={onOpen}>
        <Image src="/static/images/icon__settings.svg" alt="" width="16" height="16" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        closeButton={
          <Button isIconOnly size="lg" variant="light">
            <Image src="/static/images/icon__close.svg" alt="Close" width={24} height={24} />
          </Button>
        }>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                <h2 className="py-4 font-bold text-heading-2 whitespace-nowrap">Options</h2>
              </ModalHeader>
              <ModalBody className="px-6 py-0 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <h3 className="uppercase text-sm">Visible to</h3>
                  <div>
                    <Button>Everyone</Button>
                  </div>
                  <p>All Quizlet users can use this set</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="uppercase text-sm">EDITABLE BY</h3>
                  <div>
                    <Button>Just me</Button>
                  </div>
                  <p>Only you can edit this set</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} className="bg-ultramarine-blue" radius="sm" fullWidth={true}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
