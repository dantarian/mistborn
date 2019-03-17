/**
 * Finds the pair-or-better with the highest value, up to a maximum value of 5,
 * ignoring order (i.e. pairs do not need to be adjacent).
 *
 * @param diceResults the array of numbers to check for pairs
 * @returns the highest value, up to 5, that appears at least twice in the input array.
 */
export const bestPair: (diceResults: number[]) => number = diceResults => {
  if (countValue(diceResults, 5) >= 2) {
    return 5;
  } else if (countValue(diceResults, 4) >= 2) {
    return 4;
  } else if (countValue(diceResults, 3) >= 2) {
    return 3;
  } else if (countValue(diceResults, 2) >= 2) {
    return 2;
  } else if (countValue(diceResults, 1) >= 2) {
    return 1;
  } else {
    return 0;
  }
};

/**
 * Returns the number of instances of the given value in the array.
 *
 * @param values the array to search over
 * @param valueToCount the value to look for
 * @returns the number of instances of valueToCount in values
 */
export const countValue: (values: number[], valueToCount: number) => number = (
  values,
  valueToCount
) => {
  return values.filter(val => val === valueToCount).length;
};

/**
 * Calculates the modifier to apply to the result based on the number of dice
 * in the pool.
 *
 * @param dice the number of dice in the pool
 * @returns the modifier that can be applied to the result
 */
export const modifier: (dice: number) => number = dice => {
  return dice < 2 ? dice - 2 : 0;
};

/**
 * Calculates the number of nudges, based on the original pool size and the
 * results of the dice roll. Dice not rolled count as nudges, as do 6s in
 * the results.
 *
 * @param poolSize the size of the dice pool
 * @param diceResults the results of rolling the dice
 * @returns the number of nudges that resulted from the dice roll
 */
export const nudges: (poolSize: number, diceResults: number[]) => number = (
  poolSize,
  diceResults
) => {
  const extras =
    poolSize > diceResults.length ? poolSize - diceResults.length : 0;
  return extras + countValue(diceResults, 6);
};
