import InputLabel from '@/components/input-label';
import Select from '@/components/select';

export default function BirthdayDateSelect() {
  const months = {
    id: 'months',
    name: 'months',
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
      id: 'days',
      name: 'days',
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
      id: 'years',
      name: 'years',
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
      <InputLabel label="Birthday" tooltipIconSrc="/static/images/icon__info.svg" tooltipHtml={tooltipHtml} />
      <div className="flex gap-4">
        <Select data={months} />
        <Select data={days} />
        <Select data={years} />
      </div>
    </div>
  );
}
