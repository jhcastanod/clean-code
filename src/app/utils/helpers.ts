export function getRandomRouletteColor(): string {
  const colors = ['black', 'green', 'red'];
  const randomIndex = Math.floor(Math.random() * 3);
  const color = colors[randomIndex];

  return color;
}