import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationForm = Yup.object().shape({
  name: Yup.string()
  .min(3, "Your name needs to be at least 3 characters")
  .max(15, "Your name needs to be no more than 15 characters")
  .required("Enter name"),
  email: Yup.string().email("Invalid email").required("Enter email address"),
  tel: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Enter phone number"),
  venue: Yup.string().required(),
  text: Yup.string().required().min(10,"Your message needs to be at least 10 characters").max(300, "Your message needs to be no more than 300 characters"),
});
