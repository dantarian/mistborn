import * as React from "react";
import "./Glyph.css";

const tuple = <T extends string[]>(...args: T) => args;
const glyphNames = tuple(
  "aluminium",
  "atium",
  "bendalloy",
  "brass",
  "bronze",
  "cadmium",
  "chromium",
  "copper",
  "duralumin",
  "electrum",
  "gold",
  "iron",
  "lerasium",
  "malatium",
  "nicrosil",
  "pewter",
  "steel",
  "tin",
  "zinc"
);
export type GlyphName = typeof glyphNames[number];

export interface IGlyphProps {
  name: GlyphName;
  big?: boolean;
  altText?: string;
}

const Glyph: React.SFC<IGlyphProps> = props => (
  <img
    src={require(`./images/steel_alphabet/${props.name}.svg`)}
    className={getCssClass(props.big)}
    alt={props.altText || ""}
  />
);

const getCssClass: (big?: boolean) => string = (big = false) => {
  return (big ? "big " : "") + "icon";
};

export const randomGlyph = (altText?: string) => {
  const glyph = glyphNames[Math.floor(Math.random() * glyphNames.length)];
  return <Glyph name={glyph} altText={altText} />;
};

export default Glyph;
