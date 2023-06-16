const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexUser = /^[^\s]{4,}$/;
const regexPass = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;

export function validateRegister(inputs) {
  const errors = {};

  // if (inputs.email === "" && !focus.email)
  //   errors.email = "This field is required";
  // else if (inputs.email !== undefined && !regexEmail.test(inputs.email))
  //   errors.email = "Format not allowed";
  // if (inputs.username === "" && !focus.username)
  //   errors.username = "This field is required";
  // else if (inputs.username !== undefined && !regexUser.test(inputs.username))
  //   errors.username = "Must have a least 4 characters";
  // if (inputs.password === "" && !focus.password)
  //   errors.password = "This field is required";
  // else if (inputs.password !== undefined && !regexPass.test(inputs.password))
  //   errors.password =
  //     "The password must have at least 6 characters, one uppercase letter, one special character, and one number";

  if (inputs.email !== "" && !regexEmail.test(inputs.email)) errors.email = "Format not allowed";
  if (inputs.username !== "" && !regexUser.test(inputs.username))
    errors.username = "Must have a least 4 characters";
  if (inputs.password !== "" && !regexPass.test(inputs.password))
    errors.password =
      "The password must have at least 6 characters, one uppercase letter, one special character, and one number";

  return errors;
}
