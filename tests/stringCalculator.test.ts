import { Add } from "../src/stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(Add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(Add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(Add("1,2")).toBe(3);
  });
  test("should handle new line characters as separators", () => {
    expect(Add("1\n2,3")).toBe(6);
  });
  test("should handle an unknown number of numbers", () => {
    expect(Add("1,2,3,4")).toBe(10);
  });
  test("should handle different delimiters", () => {
    expect(Add("//;\n1;2")).toBe(3);
  });
  test("should handle different delimiters with multiple numbers", () => {
    expect(Add("//|\n1|2|3")).toBe(6);
  });
  test("should throw an exception for negative numbers", () => {
    expect(() => Add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });
  test("should throw an exception for multiple negative numbers", () => {
    expect(() => Add("1,-2,-3")).toThrow("negative numbers not allowed -2, -3");
  });
  test("should ignore numbers greater than 1000", () => {
    expect(Add("2,1001")).toBe(2);
  });
  test("should handle a mix of valid and ignored numbers", () => {
    expect(Add("2,1001,3,1002")).toBe(5);
  });
  test("should throw an exception for unsupported operand", () => {
    expect(() => Add("2,xyz,3")).toThrow("unsupported operand xyz");
  });
});
