import React from "react";
import { useField } from "formik";

import { Input, ErrorMsg, Label } from "./textInputStyles";

interface InputInterface {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  autoComplete?: string;
}

export const FormTextInput = ({ label, ...props }: InputInterface) => {
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
