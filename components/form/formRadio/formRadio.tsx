import React from "react";
import { useField } from "formik";

import { IFormRadio } from "../../../model/loginOrRegister/interfaces";
import { HiddenRadio, LabelRadio, StyledRadio } from "./radioStyles";

export const FormRadio = ({ label, ...props }: IFormRadio) => {
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
