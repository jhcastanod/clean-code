export function blackGreenOrRedColor(): string {
  const colors = ['black', 'green', 'red'];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomColor = colors[randomIndex];

  return randomColor;
}