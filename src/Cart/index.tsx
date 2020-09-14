import React, { useContext } from "react";
import { RoundedIconButton } from "../components";
import { createStackNavigator } from "@react-navigation/stack";
import { CartRoutes } from "../components/Navigation";

import Overview from "./Overview";
import CheckOut from "./CheckOut";
import { useTheme } from "@shopify/restyle";
import { DarkModeContext } from "../context";

const CartStack = createStackNavigator<CartRoutes>();

export const CartNavigator = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.mainBackground
        },
        headerTitleStyle: {
          fontFamily: "Roboto-Medium"
        },
        headerTintColor: theme.colors.secondary,
        headerRight: () => (
          <RoundedIconButton
            onPress={toggleDarkMode}
            name={darkMode ? "sun" : "moon"}
            size={40}
            color="secondary"
            backgroundColor="mainBackground"
          />
        )
      }}
    >
      <CartStack.Screen
        name="Overview"
        component={Overview}
        options={{ title: "Warenkorb" }}
      />
      <CartStack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{ title: "Kasse" }}
      />
    </CartStack.Navigator>
  );
};
