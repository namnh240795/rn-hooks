import { isEmail, isPhoneNumber } from 'src/helpers/validators';

const isPhoneOrEmail = (value) => {
  isPhoneNumber(value);
  console.log(isEmail(value));
};

export {
  isPhoneOrEmail
};
