import "jest";
import { bestPair, countValue, modifier, nudges } from "./DiceResults";

describe("bestPair", () => {
  it("returns 0 for an empty array", () => {
    expect(bestPair([])).toBe(0);
  });

  it("returns 0 when no pairs are found", () => {
    expect(bestPair([1, 2, 3, 4, 5, 6])).toBe(0);
  });

  it("returns 0 when the only pair is 6s", () => {
    expect(bestPair([1, 2, 3, 4, 5, 6, 6])).toBe(0);
  });

  it("returns 1 when the best pair is 1s", () => {
    expect(bestPair([1, 1, 2, 3, 4])).toBe(1);
  });

  it("returns the highest result for multiple pairs <= 5", () => {
    expect(bestPair([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])).toBe(5);
  });

  it("returns the best result below 6 for multiple pairs including 6s", () => {
    expect(bestPair([5, 5, 6, 6])).toBe(5);
  });

  it("doesn't care about order", () => {
    expect(bestPair([1, 3, 5, 4, 2, 3, 2])).toBe(3);
  });

  it("matches even if there are more than two of a value", () => {
    expect(bestPair([3, 3, 3, 3, 3, 3])).toBe(3);
  });

  it("ignores values higher than 5", () => {
    expect(bestPair([6, 6, 7, 7, 8, 8])).toBe(0);
  });
});

describe("countValue", () => {
  it("returns 0 for an empty array", () => {
    expect(countValue([], 1)).toBe(0);
  });

  it("returns 0 if array does not contain value", () => {
    expect(countValue([1, 2, 3], 45)).toBe(0);
  });

  it("returns 1 when array contains only 1 instance of value", () => {
    expect(countValue([1], 1)).toBe(1);
  });

  it("returns 1 when array contains 1 instance of value as well as other values", () => {
    expect(countValue([1, 2, 3], 1)).toBe(1);
  });

  it("returns 3 when array contains 3 instances of value", () => {
    expect(countValue([45, 1, 45, 8, 45], 45)).toBe(3);
  });
});

describe("modifier", () => {
  it("returns 0 for an input >= 2", () => {
    expect(modifier(2)).toBe(0);
    expect(modifier(3)).toBe(0);
    expect(modifier(12345)).toBe(0);
  });

  it("returns (2 - input) for an input <= 1", () => {
    expect(modifier(1)).toBe(-1);
    expect(modifier(0)).toBe(-2);
    expect(modifier(-15)).toBe(-17);
  });
});

describe("nudges", () => {
  it("returns 0 when poolSize <= 10 and array contains no 6s", () => {
    expect(nudges(5, [1, 2, 3, 4, 5])).toBe(0);
  });

  it("returns (poolSize - array length) when poolSize > array length and array contains no 6s", () => {
    expect(nudges(13, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).toBe(3);
  });

  it("returns number of 6s when poolSize <= 10 and array contains 6s", () => {
    expect(nudges(4, [1, 6, 2, 6])).toBe(2);
  });

  it("returns sum of (poolsize - array length) and number of 6s when poolSize > array length and array contains 6s", () => {
    expect(nudges(15, [6, 6, 1, 2, 3, 4, 6, 6, 3, 2, 1, 2])).toBe(7);
  });
});
