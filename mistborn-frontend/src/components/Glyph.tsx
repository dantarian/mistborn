import * as React from "react";

type GlyphName = 
  "aluminium"
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
  | "zinc"

export interface IGlyphProps {
  name: GlyphName;
}

const Glyph: React.SFC<IGlyphProps> = (props) => {
  return <img src={require(`./images/steel_alphabet/${props.name}.svg`)} />;
};

export default Glyph;

