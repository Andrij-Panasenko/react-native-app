import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
} from "react-native";
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    Alert.alert(
      "Credentials",
      `${name} + ${password}`,
      [
        {
          text: "-_-",
          onPress: () => {
            setName("");
            setPassword("");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Text>Login Screen</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" style={styles.input} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
