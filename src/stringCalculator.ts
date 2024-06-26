export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const numberArray = numbers.split(",").map(Number);
  return numberArray.reduce((sum, num) => sum + num, 0);
}
