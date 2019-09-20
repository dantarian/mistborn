import { uniqueId } from "lodash";
import * as React from "react";
import "./Field.css";

export interface IFieldProps {
  title?: string;
  readOnly?: boolean;
  value: string;
}

const Field: React.SFC<IFieldProps> = props => {
  const readOnly = props.readOnly === undefined ? false : props.readOnly;
  const [id] = React.useState(() => uniqueId("field-"));

  return (
    <fieldset className={props.title ? dashCase(props.title) : ""}>
      {fieldLabel(id, props.title)}
      <input
        id={id}
        readOnly={readOnly}
        defaultValue={props.value}
        type="text"
      />
    </fieldset>
  );
};

export default Field;

const dashCase: (input: string) => string = input => {
  return input
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-");
};

const fieldLabel: (id: string, input?: string) => JSX.Element | undefined = (
  id,
  input
) => {
  if (input) {
    return (
      <label htmlFor={id}>
        {input}
        <br />
      </label>
    );
  } else {
    return;
  }
};
