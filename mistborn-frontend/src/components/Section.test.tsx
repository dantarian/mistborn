import { shallow } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import Section from "./Section";

describe("Section", () => {
  describe("Simple usage", () => {
    const title = "Section Name";
    const glyph = "steel";
    const section = shallow(<Section glyph={glyph} title={title} />);

    it("has a header", () => {
      expect(section).toContainMatchingElement("header");
    });

    it("has a header containg the title", () => {
      expect(section.find("header")).toIncludeText(title);
    });

    it("has a header containing the glyph", () => {
      expect(section.find("header")).toContainMatchingElement("Glyph");
    });

    it("has a class matching the title", () => {
      expect(section).toHaveClassName("section-name");
    });

    it("has no main element", () => {
      expect(section).not.toContainMatchingElement("main");
    });
  });

  describe("With child text", () => {
    const title = "Section Name";
    const glyph = "aluminium";
    const childText = "Here is some content.";
    const section = shallow(
      <Section glyph={glyph} title={title}>
        {childText}
      </Section>
    );

    it("has a main element containing the children", () => {
      expect(section.find("main")).toIncludeText(childText);
    });
  });
});
