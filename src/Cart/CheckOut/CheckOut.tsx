import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { CartNavigationProps } from "../../components/Navigation";
import {
  Transition,
  Transitioning,
  TransitioningView
} from "react-native-reanimated";
import {
  Box,
  Footer,
  Button,
  BorderlessTap,
  Text,
  RoundedIcon,
  Theme
} from "../../components";
import { useTheme } from "@shopify/restyle";
import { ImageBackground } from "react-native";

export const assets = [require("./assets/jungle.jpg")];

const transition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" delayMs={500} />
  </Transition.Together>
);

const CheckOut = ({ navigation, route }: CartNavigationProps<"CheckOut">) => {
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef<TransitioningView>(null);
  const theme = useTheme<Theme>();
  useLayoutEffect(() => {
    if (ref.current) ref.current.animateNextTransition();
  }, []);
  useEffect(() => {
    if (route.params?.isChecked) {
      setIsChecked(route.params.isChecked);
    }
  }, [route.params?.isChecked]);
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      justifyContent="space-between"
    >
      <Box padding="m">
        <Box borderRadius={theme.spacing.m} overflow="hidden">
          {isChecked ? (
            <ImageBackground source={assets[0]} style={{ height: 300 }}>
              <Box
                flex={1}
                padding="l"
                alignItems="flex-start"
                justifyContent="flex-end"
              >
                <Text variant="subtitle3" style={{ color: "white" }}>
                  Du Champ!
                </Text>
                <Text style={{ color: "white" }}>
                  Dank dir ist unsere Welt ein bisschen sauberer!
                </Text>
              </Box>
            </ImageBackground>
          ) : (
            <Text>Auf Wiedersehen</Text>
          )}
        </Box>
      </Box>
      <Transitioning.View {...{ ref, transition }}>
        <Box
          height={200}
          width={"auto"}
          backgroundColor="mainBackground"
          justifyContent="center"
          padding="m"
        >
          <Button variant="default" onPress={() => null} label="Zahlen" />
        </Box>
        <Footer backgroundColor="mainBackground" />
      </Transitioning.View>
    </Box>
  );
};

export default CheckOut;
