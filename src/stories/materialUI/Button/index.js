import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import Button from "@material-ui/core/Button";
import {
  CONTENT_GROUP,
  APPEARANCE_GROUP,
  BEHAVIOUR_GROUP
} from "../../constants";

const colorLabel = "Colors";
const colors = {
  default: "default",
  inherit: "inherit",
  primary: "primary",
  secondary: "secondary"
};
const defaultColourValue = "default";

const sizeLabel = "Size";
const sizeValue = {
  small: "small",
  medium: "medium",
  large: "large"
};
const defaultSizeValue = "medium";

const variantLabel = "Variant";
const variantOptions = {
  text: "text",
  outlined: "outlined",
  contained: "contained"
};
const defaultVariantValue = "text";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

export const button = storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => (
    <Button
      onClick={action("clicked")}
      color={select(colorLabel, colors, defaultColourValue, APPEARANCE_GROUP)}
      size={select(sizeLabel, sizeValue, defaultSizeValue, APPEARANCE_GROUP)}
      variant={select(
        variantLabel,
        variantOptions,
        defaultVariantValue,
        BEHAVIOUR_GROUP
      )}
    >
      Hello Button
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
