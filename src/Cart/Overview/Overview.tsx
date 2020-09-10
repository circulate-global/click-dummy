import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Box, Button, Text, Footer } from "../../components";
import { CartNavigationProps } from "../../components/Navigation";
import CartItem from "./CartItem";
import {
  Transition,
  Transitioning,
  TransitioningView
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";
import Widget from "./Widget";

const defaultCart = [
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
  },
  {
    id: 3,
    title: "Tomato",
    amount: 2,
    price: 0.85
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
}

const getTotalPrice = (cart: ItemProps[]) =>
  parseFloat(
    cart.reduce((n, { amount, price }) => n + amount * price, 0).toFixed(2)
  );

const Overview = ({ navigation }: CartNavigationProps<"Overview">) => {
  const [cart, setCart] = useState(defaultCart);
  const [totalPrice, setTotalPrice] = useState(getTotalPrice(cart));
  const [footerHeight, setFooterHeight] = useState(0);
  const ref = useRef<TransitioningView>(null);
  const theme = useTheme();
  const onWidgetPress = () => navigation.navigate("Modal");

  useEffect(() => {
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.m,
          paddingBottom: footerHeight
        }}
      >
        <Transitioning.View {...{ ref, transition }}>
          {cart.map((item, idx) => {
            const onItemChange = () => {
              cart[idx] = item;
              setTotalPrice(getTotalPrice(cart));
            };
            return (
              <CartItem key={item.id} cartItem={item} onChange={onItemChange} />
            );
          })}
          <Box justifyContent="center">
            <Button
              label="remove Element"
              onPress={() => {
                if (ref.current) {
                  ref.current.animateNextTransition();
                }
                setCart(cart.filter(i => i.id !== 2));
              }}
              variant="primary"
            />
            <Widget
              price={totalPrice}
              percentage={0.03}
              onPress={onWidgetPress}
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
          padding={"m"}
          backgroundColor="navigationPrimary"
          borderTopLeftRadius={theme.spacing.m}
          borderTopRightRadius={theme.spacing.m}
        >
          <Box
            flexDirection="row"
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Text color="mainBackground">{`Gesamtbetrag: ${totalPrice} €`}</Text>
          </Box>
          <Button
            label="go to CheckOut"
            onPress={() => navigation.push("CheckOut")}
            variant="default"
          />
        </Box>
        <Footer backgroundColor="navigationPrimary" />
      </Box>
    </Box>
  );
};

export default Overview;
