import { mount } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import DiceRoll from "./DiceRoll";

describe("DiceRoll", () => {
  const diceRoll = mount(
    <DiceRoll results={[1, 2, 3, 4, 5, 6]} result={0} nudges={1} />
  );

  it("displays the supplied dice results", () => {
    expect(diceRoll.find(".die")).toHaveLength(6);
  });

  it("displays the overall result", () => {
    expect(diceRoll).toIncludeText("Result: 0");
  });

  it("displays the number of nudges", () => {
    expect(diceRoll).toIncludeText("Nudges: 1");
  });
});
