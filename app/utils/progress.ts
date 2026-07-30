export function renderProgressBar(
  current: number,
  total: number,
  barLength: number = 10
): string {
  const filled = Math.round((current / total) * barLength);
  const empty = barLength - filled;
  return "█".repeat(filled) + "░".repeat(empty) + ` ${current}/${total}`;
}
