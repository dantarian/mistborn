import * as React from "react";
import "./Die.css";
import { randomGlyph } from "./Glyph";

interface IDieProps {
  value: number;
}

const Die: React.SFC<IDieProps> = props => {
  return <div className="die">{spots(props.value)}</div>;
};

export default Die;

const spots: (value: number) => JSX.Element = value => {
  if (value === 6) {
    return randomGlyph();
  } else {
    return (
      <div className="spots">
        <div className={topLeft(value)} />
        <div className={topMiddle(value)} />
        <div className={topRight(value)} />
        <div className={middleLeft(value)} />
        <div className={middleMiddle(value)} />
        <div className={middleRight(value)} />
        <div className={bottomLeft(value)} />
        <div className={bottomMiddle(value)} />
        <div className={bottomRight(value)} />
      </div>
    );
  }
};

const SPOT = "spot";
const GAP = "gap";

const topLeft: (value: number) => string = value => {
  if (value !== 1) {
    return SPOT;
  }
  return GAP;
};

const topMiddle: (value: number) => string = value => {
  return GAP;
};

const topRight: (value: number) => string = value => {
  if (value > 3) {
    return SPOT;
  }
  return GAP;
};

const middleLeft: (value: number) => string = value => {
  return GAP;
};

const middleMiddle: (value: number) => string = value => {
  if (value % 2 === 1) {
    return SPOT;
  }
  return GAP;
};

const middleRight: (value: number) => string = value => {
  return GAP;
};

const bottomLeft: (value: number) => string = value => {
  if (value > 3) {
    return SPOT;
  }
  return GAP;
};

const bottomMiddle: (value: number) => string = value => {
  return GAP;
};

const bottomRight: (value: number) => string = value => {
  if (value !== 1) {
    return SPOT;
  }
  return GAP;
};
