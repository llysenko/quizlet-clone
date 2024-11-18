import SubmitButton from '@/components/buttons/submit-button';

import SetCreateDropdown from '@/features/flashcards/components/set-create-dropdown';
import SetCreateModal from '@/features/flashcards/components/set-create-modal';

type Props = {
  size?: 'medium' | 'large';
  className?: string;
};

export default function SetCreateControl({ size = 'medium', className }: Props) {
  return (
    <div className={className}>
      <div className="gap-4 hidden lg:flex">
        <SubmitButton label="Create" mode="outlined" size={size} />
        <SubmitButton label="Create and practice" mode="primary" size={size} />
      </div>
      <div className="hidden md:flex lg:hidden">
        <SetCreateDropdown />
      </div>
      <div className="flex md:hidden">
        <SetCreateModal />
      </div>
    </div>
  );
}
