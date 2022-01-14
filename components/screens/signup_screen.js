import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import MyCustomTextInput from '../custom_textinput/custom_textinput';

const SignUpScreen = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.headingText}>Signup Screen</Text>
        <MyCustomTextInput
          placeholderText="Enter your email"
          keyboardType="email-address"
        />
        <MyCustomTextInput
          placeholderText="Enter your password"
          secureTextEntry={true}
          keyboardType="default"
        />
        <MyCustomTextInput
          placeholderText="Enter your OTP"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.button}>
        <Button
          title="SIGN UP"
          color="blue"
          onPress={() => Alert.alert('Sign up successful.')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 32,
    color: 'black',
    marginBottom: 32,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 16,
    width: 200,
    alignSelf: 'center',
  },
});

export default SignUpScreen;
