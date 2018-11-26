import * as React from "react";

import { storiesOf } from "@storybook/react";
import Glyph from "../src/components/Glyph";
import Section from "../src/components/Section";

import "../src/index.css";

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
