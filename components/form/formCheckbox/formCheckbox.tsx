import React from "react";
import { useField } from "formik";
import { IFormCheckbox } from "../../../model/loginOrRegister/interfaces";

import { Label, HiddenCheckbox, StyledCheckbox, Icon } from "./checkboxStyles";
import { ErrorMsg } from "../formTextInput/textInputStyles";

export const FormCheckbox = ({ label, ...props }: IFormCheckbox) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label>
        <HiddenCheckbox {...field} {...props} />
        <StyledCheckbox>
          <Icon>
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        {label}
      </Label>
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </>
  );
};
