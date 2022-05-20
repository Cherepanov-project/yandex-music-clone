import React from "react";
import { useField } from "formik";
import { InputColumn, Inp, Err } from "../../styles/contactUsStyle";

interface InputFormInterface {
  placeholder: string;
  name: string;
  type: string;
  value: string;
}
const FormInput = ({ ...props }: InputFormInterface) => {
  const [field, meta] = useField(props);
  return (
    <InputColumn>
      <Inp {...props} {...field} />
      {meta.touched && meta.error && <Err>{meta.error}</Err>}
    </InputColumn>
  );
};
export default FormInput;
