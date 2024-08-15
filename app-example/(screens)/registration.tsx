import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Registration() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
