import React from "react";
import { useField } from "formik";

import { Input, ErrorMsg, Label } from "./textInputStyles";
import { TextInputInterface } from "./inputInterface";

export const FormTextInput = ({ label, ...props }: TextInputInterface) => {
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
