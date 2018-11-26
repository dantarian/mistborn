import { shallow } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import Glyph from "./Glyph";

describe("Glyph", () => {
  describe("Simple usage", () => {
    const glyph = shallow(<Glyph name="steel" />);

    it("renders an image", () => {
      expect(glyph).toHaveDisplayName("img");
    });

    it("points to an SVG", () => {
      expect(glyph).toContainMatchingElement("[src$='.svg']");
    });

    it("is not big", () => {
      expect(glyph).toHaveClassName("icon");
      expect(glyph).not.toHaveClassName("big");
    });

    it("has an empty alt text", () => {
      // These glyphs are intended to be decorative, so no alt text is preferred.
      expect(glyph).toContainMatchingElement("[alt='']");
    });
  });

  describe("Big glyph", () => {
    const glyph = shallow(<Glyph name="steel" big={true} />);

    it("is big", () => {
      expect(glyph).toHaveClassName("big");
    });
  });

  describe("Non-big glyph", () => {
    const glyph = shallow(<Glyph name="steel" big={false} />);

    it("is not big", () => {
      expect(glyph).not.toHaveClassName("big");
    });
  });
});