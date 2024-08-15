import { Collapsible } from "@/components/Collapsible";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Collapsible title="Colapsible menu No1">
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
      </Collapsible>
      <Collapsible title="Colapsible menu No2">
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
      </Collapsible>
      <Collapsible title="Colapsible menu No3">
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
        <Text>8evgyrtdhn8isu</Text>
      </Collapsible>
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
