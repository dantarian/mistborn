/**
 * Roll a number of regular dice, and return the results as an array.
 *
 * @param dice the number of dice to roll
 * @param sides the number of sides each die has (default: 6)
 * @returns an array containing the results of rolling the dice.
 */
export const rollMany: (dice: number, sides?: number) => number[] = (
  dice,
  sides
) => {
  return new Array<number>(dice).fill(0).map(() => rollOne(sides));
};

/**
 * Roll a single (regular, fair) die and return the result.
 *
 * @param sides the number of sides the die has (default: 6)
 * @returns the result of rolling the die.
 */
export const rollOne: (sides?: number) => number = sides => {
  return Math.floor(Math.random() * (sides || 6)) + 1;
};

/**
 * Works out the number of dice to roll for a given pool size.
 * @param poolSize the size of the pool
 */
export const numberOfDice: (poolSize: number) => number = poolSize =>
  Math.min(10, Math.max(poolSize, 2));
