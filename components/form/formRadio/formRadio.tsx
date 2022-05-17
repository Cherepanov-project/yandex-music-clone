import React from "react";
import { useField } from "formik";

import { HiddenRadio, LabelRadio, StyledRadio } from "./radioStyles";

interface RadioInterface {
  name: string;
  value: string;
  checked?: boolean;
  label?: string;
}

export const FormRadio = ({ label, ...props }: RadioInterface) => {
  const [field] = useField(props);
  return (
    <>
      <LabelRadio>
        <HiddenRadio {...field} {...props} />
        <StyledRadio />
        {label}
      </LabelRadio>
    </>
  );
};
