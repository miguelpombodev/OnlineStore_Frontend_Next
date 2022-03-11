export default function formatLowerSnakeCaseName(name: string): string {
  const formattedName = name.replaceAll(' ', '-').toLowerCase();

  return formattedName;
}
