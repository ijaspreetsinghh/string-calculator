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
});
