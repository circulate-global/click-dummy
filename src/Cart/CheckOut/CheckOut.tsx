import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import { CartNavigationProps } from "../../components/Navigation";
import {
  Transition,
  Transitioning,
  TransitioningView
} from "react-native-reanimated";
import { Box, Footer } from "../../components";
import { useTheme } from "@shopify/restyle";

const transition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" delayMs={500} />
  </Transition.Together>
);

const CheckOut = ({ navigation }: CartNavigationProps<"CheckOut">) => {
  const ref = useRef<TransitioningView>(null);
  const theme = useTheme();
  useEffect(() => {
    if (ref.current) ref.current.animateNextTransition();
  }, []);
  return (
    <Box flex={1} backgroundColor="mainBackground" justifyContent="flex-end">
      <Transitioning.View {...{ ref, transition }}>
        <Box
          height={200}
          width={"auto"}
          backgroundColor="navigationPrimary"
          borderTopLeftRadius={theme.spacing.m}
          borderTopRightRadius={theme.spacing.m}
        />
        <Footer backgroundColor="navigationPrimary" />
      </Transitioning.View>
    </Box>
  );
};

export default CheckOut;
