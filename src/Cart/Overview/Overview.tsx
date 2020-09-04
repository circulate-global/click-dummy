import React from "react";
import { View } from "react-native";
import { Box, Button } from "../../components";
import { CartNavigationProps } from "../../components/Navigation";
import CartItem, { CartItemProps } from "./CartItem";

const Cart: CartItemProps[] = [
  {
    id: 0,
    title: "Sneakers",
    amount: 1,
    price: 4.45
  },
  {
    id: 1,
    title: "Chips",
    amount: 2,
    price: 1.95
  },
  {
    id: 2,
    title: "Potato",
    amount: 1,
    price: 0.45
  }
];

const Overview = ({ navigation }: CartNavigationProps<"Overview">) => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      {Cart.map((item, idx) => (
        <CartItem {...item} />
      ))}
      <Box justifyContent="center">
        <Button
          label="go to CheckOut"
          onPress={() => navigation.push("CheckOut")}
          variant="default"
        />
      </Box>
    </Box>
  );
};

export default Overview;
