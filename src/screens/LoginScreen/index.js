import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {};
  return (
    <View style={styles.page}>
      <TextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="username"
        style={styles.input}
        autoCapitalize="none"></TextInput>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        style={styles.input}
        secureTextEntry></TextInput>

      <Pressable style={styles.button} onPress={signIn}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default LoginScreen;
