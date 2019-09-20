import { shallow } from "enzyme";
import "jest-enzyme";
import * as React from "react";
import Field from "./Field";

describe("Field", () => {
  describe("Simple usage", () => {
    const value = "Some text";
    const field = shallow(<Field value={value} />);

    it("has a fieldset", () => {
      expect(field).toContainMatchingElement("fieldset");
    });

    it("has a value", () => {
      expect(field.find("input")).toHaveValue(value);
    });

    it("is editable", () => {
      expect(field.find("input").prop("readOnly")).toBe(false);
    });
  });

  describe("With title", () => {
    const value = "Some text";
    const title = "Field title";
    const field = shallow(<Field value={value} title={title} />);

    it("has a fieldset", () => {
      expect(field).toContainMatchingElement("fieldset");
    });

    it("has a value", () => {
      expect(field.find("input")).toHaveValue(value);
    });

    it("has a title", () => {
      expect(field.find("label")).toHaveText(title);
    });

    it("is editable", () => {
      expect(field.find("input").prop("readOnly")).toBe(false);
    });
  });

  describe("With readOnly set", () => {
    const value = "Some text";
    const readOnlyField = shallow(<Field value={value} readOnly={true} />);
    const editableField = shallow(<Field value={value} readOnly={false} />);

    it("is not editable when readOnly is true", () => {
      expect(readOnlyField.find("input").prop("readOnly")).toBe(true);
    });

    it("is editable when readOnly is false", () => {
      expect(editableField.find("input").prop("readOnly")).toBe(false);
    });
  });
});
