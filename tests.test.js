import {
  capitalize,
  reverse,
  Calculator,
  cesarCypher,
  analyzeArr,
} from "./functions";

describe("capitalize", () => {
  test("capitalizes a single word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("capitalizes a multi-word string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
});

describe("reverse a string", () => {
  test("reverse a single word", () => {
    expect(reverse("hello")).toBe("olleh");
  });
  test("reverse a multi word string", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });
});

describe("math functions", () => {
  test("add 3+5", () => {
    expect(Calculator.add(3, 5)).toBe(8);
  });
  test("subtract", () => {
    expect(Calculator.subtract(100, 20)).toBe(80);
  });
  test("multiply 20x5", () => {
    expect(Calculator.multiply(20, 5)).toBe(100);
  });
  test("multiply 20x5", () => {
    expect(Calculator.divide(20, 5)).toBe(4);
  });
});

describe("cesarcypher", () => {
  test("cipher alphabet by 1", () => {
    expect(cesarCypher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
      "bcdefghijklmnopqrstuvwxyza"
    );
  });
  test("cipher alphabet by 28", () => {
    expect(cesarCypher("abcdefghijklmnopqrstuvwxyz", 28)).toBe(
      "cdefghijklmnopqrstuvwxyzab"
    );
  });
  test("works with uppercase letters thrown in ", () => {
    expect(cesarCypher("abcDefghijkLmnopqrsTUvwxyz", 1)).toBe(
      "bcdefghijklmnopqrstuvwxyza"
    );
  });
  test("works with a string with spaces", () => {
    expect(cesarCypher("hello there", 2)).toBe("jgnnq vjgtg");
  });
});

describe("analyze array", () => {
  test("returns error if parameter is not an array", () => {
    expect(analyzeArr("this is a string")).toBe("?");
  });
  test("converts string numbers  in input array to number type", () => {
    expect(analyzeArr([1, 2, 3, "4", 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });
  test("returns error if any array element is not a number ", () => {
    expect(analyzeArr([1, 2, 3, "b", 5])).toBe("?");
  });
  test("returns average, min, max, and length", () => {
    expect(analyzeArr([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
