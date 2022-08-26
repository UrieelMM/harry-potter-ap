import * as Yup from "yup";

export function validationSchema() {
  return {
    name: Yup.string().required(true),
    birthday: Yup.string().required(true),
    eyes: Yup.string().required(true),
    hair: Yup.string().required(true),
    gender: Yup.string().required(true),
    position: Yup.string().required(true),
    photo: Yup.string().required(true),
  };
}
