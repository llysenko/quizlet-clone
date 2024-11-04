export default function generateYears() {
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
