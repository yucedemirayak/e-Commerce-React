import * as yup from "yup";
import { ValidationMessages } from "../../../Enums/Validation/validationMessages";

export const SingUpAdminValidationScheme = yup.object().shape({
  fullName: yup.string().required(ValidationMessages.REQUIRED),
  email: yup
    .string()
    .email(ValidationMessages.EMAIL)
    .required(ValidationMessages.REQUIRED),
  password: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .min(8, ValidationMessages.MINPASSWORD),
  rePassword: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .oneOf([yup.ref("password"), null], ValidationMessages.PASSWORDNOTMATCH),
});
