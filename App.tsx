import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Theme";
import { CartNavigator } from "./src/Cart";
import { assets as overviewAssets } from "./src/Cart/Overview";
import Modal from "./src/Modal";
import { ContextWrapper } from "./src/context";
import { AppRoutes } from "./src/components/Navigation";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
  "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf")
};

const assets = [...overviewAssets];

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: 500
      }}
    >
      <ContextWrapper>
        <ThemeProvider>
          <LoadAssets {...{ fonts, assets }}>
            <AppStack.Navigator headerMode="none" mode="modal">
              <AppStack.Screen name="Cart" component={CartNavigator} />
              <AppStack.Screen name="Modal" component={Modal} />
            </AppStack.Navigator>
          </LoadAssets>
        </ThemeProvider>
      </ContextWrapper>
    </View>
  );
}
