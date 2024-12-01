import SubmitButton from '@/components/buttons/submit-button';

import SetCreateDropdown from '@/features/flashcards/components/create-set/set-create-dropdown';
import SetCreateModal from '@/features/flashcards/components/create-set/set-create-modal';

type Props = {
  size?: 'md' | 'lg';
  className?: string;
};

export default function SetCreateControl({ size = 'md', className }: Props) {
  return (
    <div className={className}>
      <div className="hidden gap-4 lg:flex">
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
