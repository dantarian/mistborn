import * as React from 'react';
import Glyph, { GlyphName } from "./Glyph";

export interface ISectionProps {
  title: string;
  glyph: GlyphName;
  actions?: React.ReactHTML;
  children?: React.ReactHTML;
}

const Section: React.SFC<ISectionProps> = (props) => {
  return (
    <section className={dashCase(props.title)}>
        <header>
            <Glyph name={props.glyph} />
            {props.title}
        </header>
    </section>
  );
}

export default Section;

const dashCase: (input: string) => string = (input) => {
    return input.trim().toLowerCase().split(" ").join("-");
};