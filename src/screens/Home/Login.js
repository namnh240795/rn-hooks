import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { validatePhoneOrEmail, isPhoneOrEmail } from './_common';

const Login = ({ initialValues, validate, submit }) => {
  const [value, setValue] = useState(initialValues || null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setValue(e);
    isPhoneOrEmail(e);
  };

  const handleSubmit = () => {
    submit && submit(value);
  };

  return (
    <View>
      <TextInput
        defaultValue={initialValues} 
        onChangeText={handleChange}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
