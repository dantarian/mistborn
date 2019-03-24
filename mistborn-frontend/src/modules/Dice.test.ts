import "jest";
import { numberOfDice, rollMany, rollOne } from "./Dice";

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

describe("numberOfDice", () => {
  it("return 2 if the pool size is less than 2", () => {
    expect(numberOfDice(-1)).toEqual(2);
    expect(numberOfDice(0)).toEqual(2);
    expect(numberOfDice(1)).toEqual(2);
  });
  it("return 10 if the pool size is greater than 10", () => {
    expect(numberOfDice(11)).toEqual(10);
    expect(numberOfDice(12)).toEqual(10);
    expect(numberOfDice(13)).toEqual(10);
  });
  it("return the pool size if the pool size is between 2 and 10", () => {
    expect(numberOfDice(2)).toEqual(2);
    expect(numberOfDice(3)).toEqual(3);
    expect(numberOfDice(4)).toEqual(4);
    expect(numberOfDice(5)).toEqual(5);
    expect(numberOfDice(6)).toEqual(6);
    expect(numberOfDice(7)).toEqual(7);
    expect(numberOfDice(8)).toEqual(8);
    expect(numberOfDice(9)).toEqual(9);
    expect(numberOfDice(10)).toEqual(10);
  });
});
