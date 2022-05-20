import React from "react";
import { Formik, Form } from "formik";

import { FormTextInput } from "../../components/form/formTextInput/formTextInput";
import { FormRadio } from "../../components/form/formRadio/formRadio";
import { Title, Center, Button } from "../sign-in/loginStyles";
import { validationRegister } from "../../utils/validationSchemas";
import { List, Item, Container } from "./registerStyles";
import { arrFields } from "./inputFields";

const SignUp: React.FC = () => {

  const listFields = arrFields.map((props) => {
    return (
      <Item key={props.name}>
        <FormTextInput {...props} />
      </Item>
    );
  });

  return (
    <Formik
      validationSchema={validationRegister}
      initialValues={{
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
        tariff: "premium",
      }}
      onSubmit={() => {}}
    >
      {({ values }) => (
        <Center>
          <Container>
            <Title>Register</Title>
            <Form>
              <List>{listFields}</List>
              <FormRadio
                name="tariff"
                label="Premium - 199$ / 1 Month"
                value="premium"
                checked={values.tariff === "premium"}
              />
              <FormRadio
                name="tariff"
                label="Standard - 99$ / 1 Month"
                value="standard"
                checked={values.tariff === "standard"}
              />
              <FormRadio
                name="tariff"
                label="Basic - 29$ / 1 Month"
                value="basic"
                checked={values.tariff === "basic"}
              />
              <Button type="submit">REGISTER</Button>
            </Form>
          </Container>
        </Center>
      )}
    </Formik>
  );
};

export default SignUp;
