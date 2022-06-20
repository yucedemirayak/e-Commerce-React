import * as yup from "yup";
import { ValidationMessages } from "../../Enums/Validation/validationMessages";

export const LogInValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email(ValidationMessages.EMAIL)
    .required(ValidationMessages.REQUIRED),
  password: yup
    .string()
    .min(8, ValidationMessages.MINPASSWORD)
    .required(ValidationMessages.REQUIRED),
});
