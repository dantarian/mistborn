import { shallow } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import Die from "./Die";

describe("Die", () => {
  it("shows one spot when a 1 is rulled", () => {
    const die = shallow(<Die value={1} />);
    expect(die.find(".spot")).toHaveLength(1);
  });

  it("shows two spots when a 2 is rolled", () => {
    const die = shallow(<Die value={2} />);
    expect(die.find(".spot")).toHaveLength(2);
  });

  it("shows three spots when a 3 is rolled", () => {
    const die = shallow(<Die value={3} />);
    expect(die.find(".spot")).toHaveLength(3);
  });

  it("shows four spots when a 4 is rolled", () => {
    const die = shallow(<Die value={4} />);
    expect(die.find(".spot")).toHaveLength(4);
  });

  it("shows five spots when a 5 is rolled", () => {
    const die = shallow(<Die value={5} />);
    expect(die.find(".spot")).toHaveLength(5);
  });

  it("shows a glyph when a 6 is rolled", () => {
    const die = shallow(<Die value={6} />);
    expect(die).toContainMatchingElement("Glyph");
  });
});
