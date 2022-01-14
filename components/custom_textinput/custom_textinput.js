import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const MyCustomTextInput = props => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholderText}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 12,
    backgroundColor: '#eceef2',
    borderRadius: 16,
    padding: 16,
    fontSize: 18,
  },
});

export default MyCustomTextInput;
