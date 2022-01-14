import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const MyFirstApp = () => {
  return (
    <View style={styles.center}>
      <Text>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default MyFirstApp;
