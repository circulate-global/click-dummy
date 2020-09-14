import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Box, Button, Text, Footer, Theme } from "../../components";
import { CartNavigationProps } from "../../components/Navigation";
import CartItem from "./CartItem";
import {
  Transition,
  Transitioning,
  TransitioningView
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";
import Widget from "./Widget";

const PERCENTAGE = 0.03;

export const assets = [require("../../../assets/example.jpg")];

const defaultCart = [
  {
    id: 0,
    title: "Sneakers",
    amount: 1,
    price: 4.45,
    delivery: "1-3",
    size: "600ml",
    source: assets[0]
  },
  {
    id: 1,
    title: "Chips",
    amount: 2,
    price: 1.95,
    delivery: "1-4",
    size: "600ml",
    source: assets[0]
  },
  {
    id: 2,
    title: "Potato",
    amount: 1,
    price: 0.45,
    delivery: "1-5",
    size: "600ml",
    source: assets[0]
  },
  {
    id: 3,
    title: "Tomato",
    amount: 2,
    price: 0.85,
    delivery: "3-4",
    size: "600ml",
    source: assets[0]
  }
];

const transition = (
  <Transition.Together>
    <Transition.Change delayMs={500} />
    <Transition.Out
      type="slide-right"
      durationMs={500}
      interpolation="easeInOut"
    />
  </Transition.Together>
);

export interface ItemProps {
  id: number;
  title: string;
  amount: number;
  price: number;
  delivery: string;
  size: string;
  source: number;
}

const getTotalPrice = (cart: ItemProps[]) =>
  parseFloat(
    cart.reduce((n, { amount, price }) => n + amount * price, 0).toFixed(2)
  );

const Overview = ({ navigation }: CartNavigationProps<"Overview">) => {
  const [cart, setCart] = useState(defaultCart);
  const [totalPrice, setTotalPrice] = useState(getTotalPrice(cart));
  const [footerHeight, setFooterHeight] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef<TransitioningView>(null);
  const theme = useTheme<Theme>();
  const onWidgetPress = () => navigation.navigate("Modal");
  const onWidgetToggle = () => setIsChecked(prev => !prev);

  useEffect(() => {
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.m
        }}
        style={{
          marginBottom: footerHeight
        }}
      >
        <Transitioning.View {...{ ref, transition }}>
          {cart.map((item, idx) => {
            const onItemChange = () => {
              if (item.amount === -1) {
                setCart(cart.filter(i => i.id !== item.id));
                if (ref.current) {
                  ref.current.animateNextTransition();
                }
              } else {
                cart[idx] = item;
                setCart(cart);
              }
              setTotalPrice(getTotalPrice(cart));
            };
            return (
              <CartItem key={item.id} cartItem={item} onChange={onItemChange} />
            );
          })}
          <Box justifyContent="center">
            <Widget
              price={totalPrice}
              percentage={PERCENTAGE}
              onPress={onWidgetPress}
              onToggle={onWidgetToggle}
            />
          </Box>
        </Transitioning.View>
      </ScrollView>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: { height }
          }
        }) => setFooterHeight(height)}
      >
        <Box
          marginHorizontal="m"
          paddingVertical="m"
          backgroundColor="mainBackground"
          borderTopWidth={2}
          borderColor="secondary"
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingBottom="m"
          >
            <Text color="baseTitle">Gesamtbetrag</Text>
            <Text color="baseTitle">{`${(
              totalPrice * (isChecked ? 1 + PERCENTAGE : 1)
            ).toFixed(2)} €`}</Text>
          </Box>
          <Button
            label="zur Kasse"
            onPress={() => navigation.push("CheckOut")}
            variant="primary"
          />
        </Box>
        <Footer backgroundColor="mainBackground" />
      </Box>
    </Box>
  );
};

export default Overview;
