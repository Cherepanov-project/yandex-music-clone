import * as Yup from 'yup';

export const validationLogin = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Enter email address'),
    password: Yup.string().required('Enter password'),
    isRemembered: Yup.boolean(),
});

export const validationRegister = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Your username needs to be at least 5 characters')
        .max(15, 'Your username needs to be no more than 15 characters')
        .required('Enter username'),
    email: Yup.string()
        .email('Invalid email')
        .required('Enter email address'),
    firstName: Yup.string()
        .min(3, 'Your name needs to be at least 3 characters')
        .max(20, 'Your name needs to be no more than 20 characters'),
    lastName: Yup.string()
        .min(3, 'Your last name needs to be at least 3 characters')
        .max(20, 'Your last name needs to be no more than 20 characters'),
    password: Yup.string().required('Enter password'),
    passwordConfirm: Yup.string()
        .required('Confirm password')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});