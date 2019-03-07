import "jest";
import { rollMany, rollOne } from "./Dice";

describe("rollOne", () => {
  it("rolls a number between 1 and 6 by default", () => {
    const result = rollOne();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });

  it("rolls a number between 1 and the number of sides when specified", () => {
    const sides = 30;
    const result = rollOne();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(sides);
  });
});

describe("rollMany", () => {
  it("rolls the number of dice specified", () => {
    const dice = 20;
    const result = rollMany(dice);
    expect(result).toHaveLength(dice);
    expect(Math.min(...result)).toBeGreaterThanOrEqual(1);
    expect(Math.max(...result)).toBeLessThanOrEqual(6);
  });

  it("rolls the number of dice with the number of sides specified", () => {
    const dice = 20;
    const sides = 15;
    const result = rollMany(dice);
    expect(result).toHaveLength(dice);
    expect(Math.min(...result)).toBeGreaterThanOrEqual(1);
    expect(Math.max(...result)).toBeLessThanOrEqual(sides);
  });
});
