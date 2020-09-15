import React, { useContext } from "react";
import { RoundedIconButton, Theme, RoundedIcon, Box } from "../components";
import { createStackNavigator } from "@react-navigation/stack";
import { CartRoutes } from "../components/Navigation";

import Overview from "./Overview";
import CheckOut from "./CheckOut";
import { useTheme } from "@shopify/restyle";
import { DarkModeContext } from "../context";

const CartStack = createStackNavigator<CartRoutes>();

export const CartNavigator = () => {
  const theme = useTheme<Theme>();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.mainBackground
        },
        headerTitleStyle: {
          fontFamily: "PangeaTrial-Medium"
        },
        headerTintColor: theme.colors.mainForeground,
        headerLeft: () => (
          <Box paddingLeft="s">
            <RoundedIcon
              name={"menu"}
              size={40}
              color="mainForeground"
              backgroundColor="mainBackground"
            />
          </Box>
        ),
        headerRight: () => (
          <Box paddingRight="s">
            <RoundedIconButton
              onPress={toggleDarkMode}
              name={darkMode ? "sun" : "moon"}
              size={40}
              color="secondary"
              backgroundColor="mainBackground"
            />
          </Box>
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
