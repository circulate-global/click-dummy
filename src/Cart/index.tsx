import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartRoutes } from "../components/Navigation";

import Overview from "./Overview";
import CheckOut from "./CheckOut";
import { useTheme } from "@shopify/restyle";

const CartStack = createStackNavigator<CartRoutes>();

export const CartNavigator = () => {
  const theme = useTheme();
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.navigationPrimary
        },
        headerTitleStyle: {
          color: theme.colors.navigationSecondary
        }
      }}
    >
      <CartStack.Screen name="Overview" component={Overview} />
      <CartStack.Screen name="CheckOut" component={CheckOut} />
    </CartStack.Navigator>
  );
};
