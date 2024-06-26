export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  const numberArray = numbers.split(",").map(Number);

  if (numberArray.length === 1) {
    return numberArray[0];
  }
  return 0;
}
