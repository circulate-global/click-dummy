import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface CartNavigationProps<RouteName extends keyof CartRoutes> {
  navigation: StackNavigationProp<CartRoutes, RouteName>;
  route: RouteProp<CartRoutes, RouteName>;
}

export type AppRoutes = {
  Cart: undefined;
  Modal: undefined;
};

export type CartRoutes = {
  Overview: undefined;
  CheckOut: undefined;
  Modal: undefined;
};
