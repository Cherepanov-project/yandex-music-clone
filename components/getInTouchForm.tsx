import { Formik } from "formik";
import emailjs, { send } from "@emailjs/browser";
import {
  TitleForm,
  FormRow,
  InputColumn,
  Inp,
  TxtArea,
  TextAr,
  BtnForm,
  Err,
} from "../styles/contactUsStyle";
import { validationForm } from "../utils/validationForm";

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
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              "service_lki8rzt",
              "template_t8yp2s8",
              values,
              "fRelFQIL89Ww4jArC"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          resetForm();
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
        }) => (
          <>
            <TitleForm>Get in Touch</TitleForm>
            <form onSubmit={handleSubmit}>
              <FormRow>
                <InputColumn>
                  <Inp
                    placeholder="Your Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {touched.name && errors.name && <Err>{errors.name}</Err>}
                </InputColumn>
                <InputColumn>
                  <Inp
                    placeholder="Email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Err>{errors.email}</Err>}
                </InputColumn>
                <InputColumn>
                  <Inp
                    placeholder="Cell Phone"
                    name="tel"
                    type="tel"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                  {touched.tel && errors.tel && <Err>{errors.tel}</Err>}
                </InputColumn>
                <InputColumn>
                  <Inp
                    placeholder="Venue"
                    name="venue"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.venue}
                  />
                  {touched.venue && errors.venue && <Err>{errors.venue}</Err>}
                </InputColumn>
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
                  <BtnForm type="submit" disabled={!isValid}>
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
