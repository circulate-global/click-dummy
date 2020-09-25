import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface CartNavigationProps<RouteName extends keyof CartRoutes> {
  navigation: StackNavigationProp<CartRoutes, RouteName>;
  route: RouteProp<CartRoutes, RouteName>;
}

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Cart: undefined;
  Modal: undefined;
  Landing: undefined;
};

export type CartRoutes = {
  Overview: undefined;
  CheckOut: undefined;
  Modal: undefined;
};
