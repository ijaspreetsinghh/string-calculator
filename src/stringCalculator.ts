export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numString = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = numString.split(delimiter).map(Number);
  return numberArray.reduce((sum, num) => sum + num, 0);
}
