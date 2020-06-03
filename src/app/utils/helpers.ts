export function getRandomRouletteColor(): string {
  const colors = ['black', 'green', 'red'];
  const colorIndex = Math.floor(Math.random() * 3);
  const color = colors[colorIndex];

  return color;
}