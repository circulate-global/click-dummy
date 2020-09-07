import React, { useRef } from "react";
import { View } from "react-native";
import { CartNavigationProps } from "../../components/Navigation";
import {
  Transition,
  Transitioning,
  TransitioningView
} from "react-native-reanimated";
import { Box } from "../../components";

const transition = (
  <Transition.Sequence>
    <Transition.Change />
    <Transition.Out type="slide-right" interpolation="easeInOut" />
  </Transition.Sequence>
);

const CheckOut = ({ navigation }: CartNavigationProps<"CheckOut">) => {
  const ref = useRef<TransitioningView>(null);
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Transitioning.View {...{ ref, transition }}></Transitioning.View>
    </Box>
  );
};

export default CheckOut;
