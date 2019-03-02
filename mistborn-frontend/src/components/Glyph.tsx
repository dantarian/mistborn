import * as React from "react";
import "./Glyph.css";

export type GlyphName =
  | "aluminium"
  | "atium"
  | "bendalloy"
  | "brass"
  | "bronze"
  | "cadmium"
  | "chromium"
  | "copper"
  | "duralumin"
  | "electrum"
  | "gold"
  | "iron"
  | "lerasium"
  | "malatium"
  | "nicrosil"
  | "pewter"
  | "steel"
  | "tin"
  | "zinc";

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
  const glyphs = [
    <Glyph name="aluminium" key="aluminium" altText={altText} />,
    <Glyph name="atium" key="atium" altText={altText} />,
    <Glyph name="bendalloy" key="bendalloy" altText={altText} />,
    <Glyph name="brass" key="brass" altText={altText} />,
    <Glyph name="bronze" key="bronze" altText={altText} />,
    <Glyph name="cadmium" key="cadmium" altText={altText} />,
    <Glyph name="chromium" key="chromium" altText={altText} />,
    <Glyph name="copper" key="copper" altText={altText} />,
    <Glyph name="duralumin" key="duralumin" altText={altText} />,
    <Glyph name="electrum" key="electrum" altText={altText} />,
    <Glyph name="gold" key="gold" altText={altText} />,
    <Glyph name="iron" key="iron" altText={altText} />,
    <Glyph name="lerasium" key="lerasium" altText={altText} />,
    <Glyph name="malatium" key="malatium" altText={altText} />,
    <Glyph name="nicrosil" key="nicrosil" altText={altText} />,
    <Glyph name="pewter" key="pewter" altText={altText} />,
    <Glyph name="steel" key="steel" altText={altText} />,
    <Glyph name="tin" key="tin" altText={altText} />,
    <Glyph name="zinc" key="zinc" altText={altText} />
  ];
  return glyphs[Math.floor(Math.random() * glyphs.length)];
};

export default Glyph;
