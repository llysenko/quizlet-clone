import InputLabel from '@/components/input-label';
import Select from '@/components/select';

import { MONTHS } from '@/features/auth/lib/constants';
import generateDays from '@/features/auth/utils/generate-days';
import generateYears from '@/features/auth/utils/generate-years';

const days = generateDays();
const years = generateYears();

export default function BirthdayDateSelect({
  onInputChange,
  error,
  errorMsg
}: {
  onInputChange: (date: any) => void;
  error?: any;
  errorMsg?: string;
}) {
  const tooltipHtml = (
    <div className="w-[246px]">
      Quizlet is open to <i>all ages</i> but requires all users to provide their real date of birth to comply with local
      laws.
    </div>
  );

  return (
    <div className="mb-6">
      <InputLabel
        label={errorMsg ? errorMsg : 'Birthday'}
        tooltipIconSrc="/static/images/icon__info.svg"
        tooltipHtml={tooltipHtml}
        error={!!errorMsg}
      />
      <div className="flex gap-4">
        <Select data={MONTHS} onInputChange={onInputChange} error={error} />
        <Select data={days} onInputChange={onInputChange} error={error} />
        <Select data={years} onInputChange={onInputChange} error={error} />
      </div>
    </div>
  );
}
