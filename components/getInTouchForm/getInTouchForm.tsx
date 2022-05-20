import { Formik } from "formik";
import emailjs, { send } from "@emailjs/browser";
import FormInput from "./formInput";
import {
  TitleForm,
  FormRow,
  TxtArea,
  TextAr,
  BtnForm,
  Err,
} from "../../styles/contactUsStyle";
import { validationForm } from "../../utils/validationForm";

const inputs = [
  { placeholder: "Your Name", name: "name", type: "text", value: "" },
  { placeholder: "Email", name: "email", type: "text", value: "" },
  { placeholder: "Cell Phone Name", name: "tel", type: "tel", value: "" },
  { placeholder: "Venue", name: "venue", type: "text", value: "" },
];
const GetInTouchForm = () => {
  return (
    <>
      <Formik
        validationSchema={validationForm}
        initialValues={{
          name: "",
          email: "",
          tel: "",
          venue: "",
          text: "",
        }}
        validateOnBlur
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            setSubmitting(true);
            await emailjs.send(
              "service_lki8rzt",
              "template_t8yp2s8",
              values,
              "fRelFQIL89Ww4jArC"
            );
            resetForm();
            setSubmitting(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <TitleForm>Get in Touch</TitleForm>
            <form onSubmit={handleSubmit}>
              <FormRow>
                {inputs.map((props) => (
                  <FormInput {...props} key={props.name} />
                ))}
                <TxtArea>
                  <TextAr
                    rows={6}
                    placeholder="Your Message"
                    value={values.text}
                    name="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></TextAr>
                  {touched.text && errors.text && <Err>{errors.text}</Err>}
                  <BtnForm type="submit" disabled={!isValid || isSubmitting}>
                    SEND
                  </BtnForm>
                </TxtArea>
              </FormRow>
            </form>
          </>
        )}
      </Formik>
    </>
  );
};
export default GetInTouchForm;
