import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Theme";
import { CartNavigator } from "./src/Cart";
import { assets as overviewAssets } from "./src/Cart/Overview";
import Modal, { assets as modalAssets } from "./src/Modal";
import { ContextWrapper } from "./src/context";
import { AppRoutes } from "./src/components/Navigation";
import Landing, { assets as landingAssets } from "./src/Landing";

const fonts = {
  "PangeaTrial-Bold": require("./assets/fonts/PangeaTrial-Bold.otf"),
  "PangeaTrial-Light": require("./assets/fonts/PangeaTrial-Light.otf"),
  "PangeaTrial-Regular": require("./assets/fonts/PangeaTrial-Regular.otf"),
  "PangeaTrial-Medium": require("./assets/fonts/PangeaTrial-Medium.otf"),
  "PangeaTrial-SemiBold": require("./assets/fonts/PangeaTrial-SemiBold.otf")
};

const assets = [...overviewAssets, ...modalAssets, ...landingAssets];

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
            <AppStack.Navigator
              headerMode="none"
              mode="modal"
              initialRouteName="Landing"
            >
              <AppStack.Screen name="Cart" component={CartNavigator} />
              <AppStack.Screen name="Modal" component={Modal} />
              <AppStack.Screen name="Landing" component={Landing} />
            </AppStack.Navigator>
          </LoadAssets>
        </ThemeProvider>
      </ContextWrapper>
    </View>
  );
}
