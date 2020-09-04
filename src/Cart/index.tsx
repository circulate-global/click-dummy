import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartRoutes } from "../components/Navigation";

import Overview from "./Overview";
import CheckOut from "./CheckOut";

const CartStack = createStackNavigator<CartRoutes>();

export const CartNavigator = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Overview" component={Overview} />
      <CartStack.Screen name="CheckOut" component={CheckOut} />
    </CartStack.Navigator>
  );
};
