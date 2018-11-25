import {shallow} from 'enzyme';
import * as React from "react";
import Glyph from "./Glyph";

describe("Glyph", () => {
  const glyph = shallow(<Glyph name="steel" />);

  it("renders an image", () => {
    expect(glyph.is('img')).toEqual(true);
  });
  it("points to an SVG", () => {
    expect(glyph.is("[src$='.svg']")).toEqual(true);
  });
});
