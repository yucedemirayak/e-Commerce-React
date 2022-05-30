import * as yup from "yup";
import { ValidationMessages } from "../../../Enums/Validation/validationMessages";

export const SignUpShopOwnerValidationScheme = yup.object().shape({
  shopName: yup.string().required(ValidationMessages.REQUIRED),
  shopOwnerFirstName: yup.string().required(ValidationMessages.REQUIRED),
  shopOwnerLastName: yup.string().required(ValidationMessages.REQUIRED),
  VKN: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  password: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .min(8, ValidationMessages.MINPASSWORD),
  rePassword: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .oneOf([yup.ref("password"), null], ValidationMessages.PASSWORDNOTMATCH),
  contactNumber: yup.phoneNumber(ValidationMessages.PHONENUMBER),
});
