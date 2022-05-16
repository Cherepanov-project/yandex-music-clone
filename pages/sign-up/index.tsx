import React from 'react';
import { Formik, Form } from 'formik';

import { FormTextInput } from '../../components/form/formTextInput/formTextInput';
import { FormRadio } from "../../components/form/formRadio/formRadio";
import { Title, Center, Button } from '../sign-in/loginStyles';
import { validationRegister } from "../../utils/validationSchemas";
import { List, Item, Container } from './registerStyles';

const SignUp: React.FC = () => {
    return (
        <Formik
            validationSchema={validationRegister}
            initialValues={{
                username: '',
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                passwordConfirm: '',
                tariff: 'premium',
            }}
            onSubmit={(data, actions) => {
                console.log('Submitted =)');
                console.log('data: ', data);
            }}
        >
            {({ values}) => (
                <Center>
                    <Container>
                        <Title>Register</Title>
                        <Form>
                            <List>
                                <Item>
                                    <FormTextInput placeholder="Username" name="username" type="text" label="Username *" />
                                </Item>
                                <Item>
                                    <FormTextInput placeholder="Email" name="email" type="text" label="Email *" />
                                </Item>
                                <Item>
                                    <FormTextInput placeholder="First name" name="firstName" type="text" label="First Name" />
                                </Item>
                                <Item>
                                    <FormTextInput placeholder="Last name" name="lastName" type="text" label="Last Name"  />
                                </Item>
                                <Item>
                                    <FormTextInput placeholder="Password" autoComplete="on" name="password" type="password" label="Password *" />
                                </Item>
                                <Item>
                                    <FormTextInput placeholder="Repeat password" name="passwordConfirm" type="password" label="Repeat Password *" autoComplete="on" />
                                </Item>
                            </List>
                            <FormRadio name="tariff" label="Premium - 199$ / 1 Month" value="premium" checked={values.tariff === 'premium'} />
                            <FormRadio name="tariff" label="Standard - 99$ / 1 Month" value="standard" checked={values.tariff === 'standard'} />
                            <FormRadio name="tariff" label="Basic - 29$ / 1 Month" value="basic" checked={values.tariff === 'basic'} />
                            <Button type="submit">REGISTER</Button>
                        </Form>
                    </Container>
                </Center>
            )}
        </Formik>
    );
};

export default SignUp;