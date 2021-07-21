import * as yup from "yup";

const YupValidation = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long"),

  email: yup.string().email().required("Email is required"),

  password: yup
    .string()
    .required("Must enter your password")
    .min(8, "must be at least 8 characters long"),
  service: yup.boolean().oneOf([true], "You must accept Terms and Services"),
});

export default YupValidation;
