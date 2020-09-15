import React, { useRef, useLayoutEffect } from "react";
import { CartNavigationProps } from "../../components/Navigation";
import {
  Transition,
  Transitioning,
  TransitioningView
} from "react-native-reanimated";
import { Box, Footer, Button } from "../../components";
import { useTheme } from "@shopify/restyle";

const transition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" delayMs={500} />
  </Transition.Together>
);

const CheckOut = ({ navigation }: CartNavigationProps<"CheckOut">) => {
  const ref = useRef<TransitioningView>(null);
  const theme = useTheme();
  useLayoutEffect(() => {
    if (ref.current) ref.current.animateNextTransition();
  }, []);
  return (
    <Box flex={1} backgroundColor="mainBackground" justifyContent="flex-end">
      <Transitioning.View {...{ ref, transition }}>
        <Box
          height={200}
          width={"auto"}
          backgroundColor="secondary"
          justifyContent="center"
          padding="m"
        >
          <Button
            variant="primary"
            onPress={() => alert("Danke")}
            label="Zahlen"
          />
        </Box>
        <Footer backgroundColor="secondary" />
      </Transitioning.View>
    </Box>
  );
};

export default CheckOut;
