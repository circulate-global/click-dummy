import React, { useState } from "react";
import { Box, Text } from "../../components";
import { useTheme } from "@shopify/restyle";
import { RoundedIconButton } from "../../components";

export interface CartItemProps {
  cartItem: {
    id: number;
    title: string;
    amount: number;
    price: number;
  };
}
const CartItem = ({ cartItem }: CartItemProps) => {
  const { title, amount: defaultAmount, price } = cartItem;
  const [amount, setAmount] = useState(defaultAmount);
  const theme = useTheme();
  return (
    <Box
      borderRadius={theme.spacing.m}
      marginVertical="m"
      padding={"l"}
      backgroundColor="cartItemBackground"
    >
      <Box flexDirection="row" justifyContent="space-between" marginBottom="m">
        <Text variant="subtitle1">{title}</Text>
        <Text variant="title1">{`${(price * amount).toFixed(2)} €`}</Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Box
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <RoundedIconButton
            name="minus"
            color="cartItemBackground"
            backgroundColor="cartItemForeground"
            size={30}
            onPress={() => {
              setAmount(prev => (prev > 1 ? prev - 1 : 0));
              cartItem.amount = amount > 1 ? amount - 1 : 0;
            }}
          />
          <Text color="cartItemForeground" paddingHorizontal={"s"}>
            {amount}
          </Text>
          <RoundedIconButton
            name="plus"
            color="cartItemBackground"
            backgroundColor="cartItemForeground"
            size={30}
            onPress={() => {
              setAmount(prev => prev + 1);
              cartItem.amount = amount + 1;
            }}
          />
        </Box>
        <Box>
          {amount > 1 && <Text variant="description">{`${price} €`}</Text>}
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
