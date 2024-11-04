export default function generateDays() {
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
