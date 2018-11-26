import * as React from "react";

import { storiesOf } from "@storybook/react";
import Glyph from "../src/components/Glyph";
import Section from "../src/components/Section";

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
  ));
