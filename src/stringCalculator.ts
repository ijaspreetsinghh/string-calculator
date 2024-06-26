export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    let customDelimiter = numbers.substring(2, delimiterEndIndex);
    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    delimiter = new RegExp(customDelimiter);
    numString = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = numString.split(delimiter).map(Number);

  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  const invalidOperands = numberArray.filter((num) => isNaN(num));
  if (invalidOperands.length > 0) {
    throw new Error(`unsupported operand ${invalidOperands.join(", ")}`);
  }

  return numberArray
    .filter((num) => num <= 1000) // Ignore numbers greater than 1000
    .reduce((sum, num) => sum + num, 0);
}
