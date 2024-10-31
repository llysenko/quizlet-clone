import InputLabel from '@/components/input-label';
import Select from '@/components/select';

export default function BirthdayDateSelect({
  onInputChange,
  error,
  errorMsg
}: {
  onInputChange: (date: any) => void;
  error?: any;
  errorMsg?: string;
}) {
  const months = {
    id: 'month',
    name: 'month',
    options: [
      {
        name: 'Month',
        value: '-1'
      },
      {
        name: 'January',
        value: '1'
      },
      {
        name: 'February',
        value: '2'
      },
      {
        name: 'March',
        value: '3'
      },
      {
        name: 'April',
        value: '4'
      },
      {
        name: 'May',
        value: '5'
      },
      {
        name: 'June',
        value: '6'
      },
      {
        name: 'July',
        value: '7'
      },
      {
        name: 'August',
        value: '8'
      },
      {
        name: 'September',
        value: '9'
      },
      {
        name: 'October',
        value: '10'
      },
      {
        name: 'November',
        value: '11'
      },
      {
        name: 'December',
        value: '12'
      }
    ]
  };

  function generateDays() {
    return {
      id: 'day',
      name: 'day',
      options: [
        {
          name: 'Day',
          value: '-1'
        },
        ...Array.from({ length: 31 }, (_, i) => ({ name: i + 1, value: i + 1 }))
      ]
    };
  }

  const days = generateDays();

  function generateYears() {
    const fromCurrentYear = new Date().getFullYear();
    const toPastYear = 1895;

    return {
      id: 'year',
      name: 'year',
      options: [
        {
          name: 'Year',
          value: '-1'
        },
        ...Array.from({ length: fromCurrentYear - toPastYear + 1 }, (_, i) => ({
          name: fromCurrentYear - i,
          value: fromCurrentYear - i
        }))
      ]
    };
  }

  const years = generateYears();
  const tooltipHtml = `Quizlet is open to <i>all ages</i> but requires all users to provide their real date of birth to comply with local laws.`;

  return (
    <div className="mb-6">
      <InputLabel
        label={errorMsg ? errorMsg : 'Birthday'}
        tooltipIconSrc="/static/images/icon__info.svg"
        tooltipHtml={tooltipHtml}
        error={!!errorMsg}
      />
      <div className="flex gap-4">
        <Select data={months} onInputChange={onInputChange} error={error} />
        <Select data={days} onInputChange={onInputChange} error={error} />
        <Select data={years} onInputChange={onInputChange} error={error} />
      </div>
    </div>
  );
}
