import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const FormInput = ({ label, errorMessage, ...props }: any) => (
  <View style={styles.container}>
    <Text>{label}</Text>
    <TextInput style={styles.input} {...props} />
    {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default FormInput;
