import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadAssets from "./src/components/LoadAssets";
import { CartNavigator } from "./src/Cart";

export default function App() {
  return (
    <LoadAssets>
      <CartNavigator />
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
