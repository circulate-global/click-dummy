import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Theme";
import { CartNavigator } from "./src/Cart";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
  "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf")
};

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: 500
      }}
    >
      <ThemeProvider>
        <LoadAssets {...{ fonts }}>
          <CartNavigator />
        </LoadAssets>
      </ThemeProvider>
    </View>
  );
}
