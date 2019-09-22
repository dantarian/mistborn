import { shallow } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import Header from "./Header";

describe("Section", () => {
  describe("Without nickname", () => {
    const name = "Character Name";
    const concept = "Mistborn Character";
    const header = shallow(<Header name={name} concept={concept} />);

    it("displays the name", () => {
      expect(header).toIncludeText(name);
    });

    it("does not have a dash", () => {
      expect(header).not.toIncludeText("-");
    });

    it("displays the concept", () => {
      expect(header).toIncludeText(concept);
    });
  });

  describe("With nickname", () => {
    const name = "Character Name";
    const nickname = "Nick";
    const concept = "Mistborn Character";
    const header = shallow(
      <Header name={name} nickname={nickname} concept={concept} />
    );

    it("displays the name and nickname", () => {
      expect(header).toIncludeText(`${name} - '${nickname}'`);
    });

    it("displays the concept", () => {
      expect(header).toIncludeText(concept);
    });
  });

  describe("With empty nickname", () => {
    const name = "Character Name";
    const nickname = "  ";
    const concept = "Mistborn Character";
    const header = shallow(
      <Header name={name} nickname={nickname} concept={concept} />
    );

    it("displays the name", () => {
      expect(header).toIncludeText(name);
    });

    it("does not have a dash", () => {
      expect(header).not.toIncludeText("-");
    });
  });
});
