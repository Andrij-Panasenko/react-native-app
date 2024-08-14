import { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TextInput
              onChangeText={setName}
              placeholder="Name"
              style={styles.input}
            />
            <TextInput
              onChangeText={setPassword}
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
            <Button title="Login" onPress={onLogin} />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
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