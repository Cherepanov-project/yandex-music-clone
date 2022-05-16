export interface IFormInput {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  autoComplete?: string;
}

export interface IFormCheckbox {
  name: string;
  label?: string;
}

export interface IFormRadio {
  name: string;
  value: string;
  checked?: boolean;
  label?: string;
}
