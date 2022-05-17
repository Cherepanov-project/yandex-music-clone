import React from "react";
import Link from "next/link";
import { Formik, Form } from "formik";

import { FormTextInput } from "../../components/form/formTextInput/formTextInput";
import { FormCheckbox } from "../../components/form/formCheckbox/formCheckbox";
import {
  FormContainer,
  Title,
  Center,
  Button,
  MiniLink,
  LinkWrapper,
  LeftSide,
} from "./loginStyles";
import { validationLogin } from "../../utils/validationSchemas";

const SignIn: React.FC = () => {
  return (
    <Formik
      validationSchema={validationLogin}
      initialValues={{
        email: "",
        password: "",
        isRemembered: false,
      }}
      onSubmit={() => {}}
    >
      {() => (
        <Center>
          <FormContainer>
            <Title>Sign in</Title>
            <Form>
              <FormTextInput
                placeholder="Email"
                name="email"
                type="text"
                label="Email Address"
              />

              <FormTextInput
                placeholder="Password"
                name="password"
                type="password"
                label="Password"
                autoComplete="on"
              />
              <FormCheckbox name="isRemembered" label="Remember Me" />
              <Button type="submit">Log In</Button>
              <LinkWrapper>
                <LeftSide>
                  <Link href="/sign-up" passHref>
                    <MiniLink>Sign Up</MiniLink>
                  </Link>
                </LeftSide>
                <Link href="/" passHref>
                  <MiniLink>Lost your password?</MiniLink>
                </Link>
              </LinkWrapper>
            </Form>
          </FormContainer>
        </Center>
      )}
    </Formik>
  );
};

export default SignIn;
