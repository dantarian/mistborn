import * as React from "react";
import './Glyph.css';

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
  big?: boolean;
}

const Glyph: React.SFC<IGlyphProps> = (props) => {
  return (
    <img 
      src={require(`./images/steel_alphabet/${props.name}.svg`)}
      className={getCssClass(props.big)} />
  );
};

const getCssClass: (big?: boolean) => string = (big = false) => {
  return ( big ? "big " : "" ) + "icon";
};

export default Glyph;

