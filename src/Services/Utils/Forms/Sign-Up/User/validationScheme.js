import * as yup from "yup";
import { Genders } from "../../../Enums/Gender/genders";
import { ValidationMessages } from "../../../Enums/Validation/validationMessages";


export const SignUpUserValidationScheme = yup.object().shape({
  firstName: yup.string().required(ValidationMessages.REQUIRED),
  lastName: yup.string().required(ValidationMessages.REQUIRED),
  email: yup
    .string()
    .email(ValidationMessages.EMAIL)
    .required(ValidationMessages.REQUIRED),
  password: yup.string().required(ValidationMessages.REQUIRED),
  rePassword: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .oneOf([yup.ref("password"), null], ValidationMessages.PASSWORDNOTMATCH),
  phoneNumber: yup.string().required(ValidationMessages.REQUIRED),

  //FIXME: Genders enum yup kullanımına bak
  gender: yup.mixed().oneOf(Object.values(Genders)),
  birthDate: yup.string(),
});
