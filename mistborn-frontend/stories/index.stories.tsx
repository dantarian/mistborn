import * as React from "react";

import { storiesOf } from "@storybook/react";

import DiceRoll from "../src/components/DiceRoll";
import Die from "../src/components/Die";
import Field from "../src/components/Field";
import Glyph from "../src/components/Glyph";
import Section from "../src/components/Section";

import "../src/index.css";
import { numberOfDice, rollMany } from "../src/modules/Dice";
import { bestPair, modifier, nudges } from "../src/modules/DiceResults";

storiesOf("Glyph", module)
  .add("aluminium", () => <Glyph name="aluminium" />)
  .add("atium", () => <Glyph name="atium" />)
  .add("bendalloy", () => <Glyph name="bendalloy" />)
  .add("brass", () => <Glyph name="brass" />)
  .add("bronze", () => <Glyph name="bronze" />)
  .add("cadmium", () => <Glyph name="cadmium" />)
  .add("chromium", () => <Glyph name="chromium" />)
  .add("copper", () => <Glyph name="copper" />)
  .add("duralumin", () => <Glyph name="duralumin" />)
  .add("electrum", () => <Glyph name="electrum" />)
  .add("gold", () => <Glyph name="gold" />)
  .add("iron", () => <Glyph name="iron" />)
  .add("lerasium", () => <Glyph name="lerasium" />)
  .add("malatium", () => <Glyph name="malatium" />)
  .add("nicrosil", () => <Glyph name="nicrosil" />)
  .add("pewter", () => <Glyph name="pewter" />)
  .add("steel", () => <Glyph name="steel" />)
  .add("tin", () => <Glyph name="tin" />)
  .add("zinc", () => <Glyph name="zinc" />)
  .add("with big=true", () => <Glyph name="steel" big={true} />)
  .add("with big=false", () => <Glyph name="steel" big={false} />);

storiesOf("Section", module)
  .add("simple section", () => <Section glyph="steel" title="Simple Section" />)
  .add("with text contents", () => (
    <Section glyph="aluminium" title="Section With Text">
      Here is some text.
    </Section>
  ))
  .add("with element contents", () => (
    <Section glyph="pewter" title="Section With Element">
      <div>This is a div element.</div>
    </Section>
  ))
  .add("with mulitple element contents", () => (
    <Section glyph="bronze" title="Section With Multiple Elements">
      <div>This is a div element.</div>
      <div>This is another div element.</div>
    </Section>
  ));

storiesOf("Field", module)
  .add("unpopulated, no title", () => <Field value="" readOnly={true} />)
  .add("unpopulated, with title", () => (
    <Field value="" title="Title" readOnly={true} />
  ))
  .add("populated, no title", () => <Field value="Contents" readOnly={true} />)
  .add("populated, with title", () => (
    <Field value="Contents" title="Title" readOnly={true} />
  ))
  .add("editable, unpopulated, no title", () => <Field value="" />)
  .add("editable, unpopulated, with title", () => (
    <Field value="" title="Title" />
  ))
  .add("editable, populated, no title", () => <Field value="Contents" />)
  .add("editable, populated, with title", () => (
    <Field value="Contents" title="Title" />
  ));

const diceRoll: (poolSize: number) => JSX.Element = poolSize => {
  const results = rollMany(numberOfDice(poolSize));
  return (
    <Section title={`${poolSize} dice`} glyph="atium">
      <DiceRoll
        results={results}
        result={bestPair(results) + modifier(poolSize)}
        nudges={nudges(poolSize, results)}
      />
    </Section>
  );
};

storiesOf("DiceRoll", module)
  .add("No dice", () => diceRoll(0))
  .add("1 die", () => diceRoll(1))
  .add("2 dice", () => diceRoll(2))
  .add("3 dice", () => diceRoll(3))
  .add("4 dice", () => diceRoll(4))
  .add("5 dice", () => diceRoll(5))
  .add("6 dice", () => diceRoll(6))
  .add("7 dice", () => diceRoll(7))
  .add("8 dice", () => diceRoll(8))
  .add("9 dice", () => diceRoll(9))
  .add("10 dice", () => diceRoll(10))
  .add("11 dice", () => diceRoll(11))
  .add("12 dice", () => diceRoll(12))
  .add("13 dice", () => diceRoll(13))
  .add("14 dice", () => diceRoll(14))
  .add("15 dice", () => diceRoll(15))
  .add("16 dice", () => diceRoll(16));

storiesOf("Die", module)
  .add("Rolled a 1", () => <Die value={1} />)
  .add("Rolled a 2", () => <Die value={2} />)
  .add("Rolled a 3", () => <Die value={3} />)
  .add("Rolled a 4", () => <Die value={4} />)
  .add("Rolled a 5", () => <Die value={5} />)
  .add("Rolled a nudge", () => <Die value={6} />);
