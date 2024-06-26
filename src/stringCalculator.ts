export function Add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    let customDelimiter = numbers.substring(2, delimiterEndIndex);
    // Escape special characters in the custom delimiter for the regular expression
    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    delimiter = new RegExp(customDelimiter);
    numString = numbers.substring(delimiterEndIndex + 1);
  }

  const tokens = numString.split(delimiter);

  const invalidTokens = tokens.filter((token) => {
    // Check if the token is not a valid number
    const num = Number(token);
    return isNaN(num) && token !== ""; // Empty string should be ignored
  });

  if (invalidTokens.length > 0) {
    throw new Error(`unsupported operand ${invalidTokens.join(", ")}`);
  }

  const numberArray = tokens.map(Number);

  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  return numberArray
    .filter((num) => num <= 1000) // Ignore numbers greater than 1000
    .reduce((sum, num) => sum + num, 0);
}
