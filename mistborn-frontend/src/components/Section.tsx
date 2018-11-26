import * as React from "react";
import Glyph, { GlyphName } from "./Glyph";
import "./Section.css";

export interface ISectionProps {
  title: string;
  glyph: GlyphName;
  actions?: React.ReactHTML;
}

const Section: React.SFC<ISectionProps> = props => {
  const contents = props.children ? <main>{props.children}</main> : "";

  return (
    <section className={"section " + dashCase(props.title)}>
      <header>
        <Glyph name={props.glyph} />
        {" " + props.title}
      </header>
      {contents}
    </section>
  );
};

export default Section;

const dashCase: (input: string) => string = input => {
  return input
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-");
};
