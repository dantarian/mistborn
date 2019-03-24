import * as React from "react";
import "./DiceRoll.css";
import Die from "./Die";

export interface IDiceRollProps {
  results: number[];
  result: number;
  nudges: number;
}

const DiceRoll: React.SFC<IDiceRollProps> = props => {
  return (
    <>
      <div className="dice-rolls">{props.results.map(die)}</div>
      <p>Result: {props.result}</p>
      <p>Nudges: {props.nudges}</p>
    </>
  );
};

export default DiceRoll;

const die: (value: number) => JSX.Element = value => <Die value={value} />;
