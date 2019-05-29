import GoogleLibPhone from 'google-libphonenumber';

const isEmail = value => 
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

const isPhoneNumber = value => {
  const phoneUtil = GoogleLibPhone.PhoneNumberUtil.getInstance();
  // console.log('phone', phoneUtil.getRegionCodeForNumber('0961832495'));
  
  console.log(GoogleLibPhone, value);
};

export {
  isEmail,
  isPhoneNumber
};
