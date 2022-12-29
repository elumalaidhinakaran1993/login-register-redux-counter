import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string("email should be a string *")
    .required("email address is required *"),
  password: yup
    .string("password should be a string *")
    .required("password is required *")
});

export const registerSchema = yup.object().shape({
  email: yup
    .string("email should be a string *")
    .required("email address is required *"),
  password: yup
    .string("password should be a string *")
    .required("password is required *")
    .min(5, "password should have a minimum length of 5 *")
    .max(12, "password should have a maximum length of 12 *"),
  name: yup

    .string(" name is should be string *")
    .required("name is required *"),
  mobilenumber: yup
    .string()
    .required("mobile number is required!")
    .min(10, "mobile number should have a minimum length of 10 *")
    .max(15, "mobile number should have a maximum length of 15 *"),
  profession: yup.string().required("select one Professional")
});
