import React from "react";
import { useField } from "formik";
import { IFormInput } from "../../../model/loginOrRegister/interfaces";

import { Input, ErrorMsg, Label } from "./textInputStyles";

export const FormTextInput = ({ label, ...props }: IFormInput) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label>
        {label}
        <Input
          {...props}
          {...field}
          error={Boolean(meta.error && meta.touched)}
        />
      </Label>
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </>
  );
};
