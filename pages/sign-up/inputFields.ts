import { TextInputInterface } from "../../components/form/formTextInput/inputInterface";

export const arrFields: Array<TextInputInterface> = [
  {
    placeholder: "Username",
    name: "username",
    type: "text",
    label: "Username *",
  },
  {
    placeholder: "Email",
    name: "email",
    type: "text",
    label: "Email *",
  },
  {
    placeholder: "First name",
    name: "firstName",
    type: "text",
    label: "First Name",
  },
  {
    placeholder: "Last name",
    name: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    placeholder: "Password",
    name: "password",
    type: "password",
    label: "Password *",
    autoComplete: "on",
  },
  {
    placeholder: "Repeat password",
    name: "passwordConfirm",
    type: "password",
    label: "Repeat Password *",
    autoComplete: "on",
  },
];
