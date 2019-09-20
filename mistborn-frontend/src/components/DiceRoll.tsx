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
      <div className="dice-rolls">
        {props.results.map((value, index) => die(value, index))}
      </div>
      <p>Result: {props.result}</p>
      <p>Nudges: {props.nudges}</p>
    </>
  );
};

export default DiceRoll;

const die: (value: number, index: number) => JSX.Element = (value, index) => (
  <Die value={value} key={index} />
);
