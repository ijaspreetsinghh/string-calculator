export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const delimiters = /,|\n/;
  const numberArray = numbers.split(delimiters).map(Number);
  return numberArray.reduce((sum, num) => sum + num, 0);
}
