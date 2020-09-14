import React, { useState } from "react";
import { Box, Text, BorderlessTap, RoundedIcon, Theme } from "../../components";
import { useTheme } from "@shopify/restyle";
import { RoundedIconButton } from "../../components";
import { ItemProps } from "./Overview";
import { Image } from "react-native";

export interface CartItemProps {
  cartItem: ItemProps;
  onChange: () => void;
}
const CartItem = ({ cartItem, onChange }: CartItemProps) => {
  const { title, amount, price, delivery, size, source } = cartItem;
  const theme = useTheme<Theme>();
  return (
    <Box
      marginVertical="m"
      paddingBottom="m"
      borderBottomWidth={1}
      borderColor="secondary"
      backgroundColor="mainBackground"
    >
      <Box flexDirection="row" marginBottom="m">
        <Image
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: theme.colors.mainForeground,
            backgroundColor: "white"
          }}
          resizeMode="contain"
          {...{ source }}
        />
        <Box flex={1} paddingLeft="m">
          <Text variant="subtitle2">{title}</Text>
          <Text variant="subtitle2">{size}</Text>
          <Text variant="description">{`Lieferzeit: in ca. ${delivery} Werktagen*`}</Text>
          <Text variant="description">{`${price} €`}</Text>
        </Box>
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <Box
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            flexDirection="row"
            width={100}
            justifyContent="space-between"
            alignItems="center"
            borderRadius={theme.spacing.m}
            borderColor="mainForeground"
            borderWidth={1}
          >
            <Box borderColor="mainForeground" borderRightWidth={1}>
              <RoundedIconButton
                name="minus"
                color="mainForeground"
                backgroundColor="mainBackground"
                size={30}
                onPress={() => {
                  cartItem.amount = amount > 1 ? amount - 1 : 0;
                  onChange();
                }}
              />
            </Box>
            <Text color="mainForeground" paddingHorizontal={"s"}>
              {amount}
            </Text>
            <Box borderColor="mainForeground" borderLeftWidth={1}>
              <RoundedIconButton
                name="plus"
                color="mainForeground"
                backgroundColor="mainBackground"
                size={30}
                onPress={() => {
                  cartItem.amount = amount + 1;
                  onChange();
                }}
              />
            </Box>
          </Box>
          <BorderlessTap
            onPress={() => {
              cartItem.amount = -1;
              onChange();
            }}
          >
            <Box flexDirection="row" alignItems="center" paddingTop="s">
              <RoundedIcon
                name="x-circle"
                color="mainForeground"
                backgroundColor="mainBackground"
                size={20}
              />
              <Text variant="description"> Entfernen</Text>
            </Box>
          </BorderlessTap>
          <Text variant="subtitle1">{`${(price * amount).toFixed(2)} €`}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
