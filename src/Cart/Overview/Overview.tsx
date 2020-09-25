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

const PERCENTAGE = 0.02;

export const assets = [
  require("./assets/sunglasses.png"),
  require("./assets/flipflop.png"),
  require("./assets/iphonecase.png")
];

const defaultCart = [
  {
    id: 0,
    title: "Sonnenbrille",
    amount: 1,
    price: 24.69,
    delivery: "1–3",
    description: "Matt schwarz",
    source: assets[0]
  },
  {
    id: 1,
    title: "Flip-Flop",
    amount: 2,
    price: 9.99,
    delivery: "1–4",
    description: "Größe 41",
    source: assets[1]
  },
  {
    id: 2,
    title: "iPhone 11 Case",
    amount: 1,
    price: 9.89,
    delivery: "1–5",
    description: "Petrol",
    source: assets[2]
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
  description: string;
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
  const onWidgetPress = () =>
    navigation.navigate("Modal", {
      amount: (totalPrice * PERCENTAGE * 2).toFixed(2).replace(".", ",")
    });
  const onWidgetToggle = () => setIsChecked(prev => !prev);

  useEffect(() => {
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView
        contentContainerStyle={{}}
        style={{
          marginBottom: footerHeight,
          height: 0
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
          borderColor="mainForeground"
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingBottom="m"
          >
            <Text>Gesamtbetrag</Text>
            <Text variant="subtitle2">{`€ ${(
              totalPrice * (isChecked ? 1 + PERCENTAGE : 1)
            ).toFixed(2)}`}</Text>
          </Box>
          <Button
            label="zur Kasse"
            onPress={() => navigation.push("CheckOut", { isChecked })}
            variant="default"
          />
        </Box>
        <Footer backgroundColor="mainBackground" />
      </Box>
    </Box>
  );
};

export default Overview;
