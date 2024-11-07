import Button from '@/components/buttons';

import SetCreateDropdown from '@/features/flashcards/components/set-create-dropdown';
import SetCreateModal from '@/features/flashcards/components/set-create-modal';

type Props = {
  size?: 'medium' | 'large';
};
export default function SetCreateControl({ size = 'medium' }: Props) {
  return (
    <>
      <div className="gap-4 hidden lg:flex">
        <Button label="Create" mode="outlined" size={size} />
        <Button label="Create and practice" mode="primary" size={size} />
      </div>
      <div className="hidden md:flex lg:hidden">
        <SetCreateDropdown />
      </div>
      <div className="flex md:hidden">
        <SetCreateModal />
      </div>
    </>
  );
}
