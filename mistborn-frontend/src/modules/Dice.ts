export const rollMany: (dice: number, sides?: number) => number[] = (
  dice,
  sides
) => {
  return new Array<number>(dice).fill(0).map(() => rollOne(sides));
};

export const rollOne: (sides?: number) => number = sides => {
  return Math.floor(Math.random() * (sides || 6)) + 1;
};
