import React, { useRef, useEffect, useState, ReactNode } from "react";
import { Animated } from "react-native";
import { useHover } from "react-native-web-hooks";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../components";

interface HoverAnimationProps {
  children: ReactNode;
}

const HoverAnimation = ({ children }: HoverAnimationProps) => {
  const theme = useTheme<Theme>();
  const ref = useRef(null);
  const isHovered = useHover(ref);
  const [animatedValue] = useState(new Animated.Value(0));
  const animation = (toValue: number) =>
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: true
    });
  useEffect(() => {
    animation(isHovered ? 1 : 0).start();
  }, [isHovered]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5]
  });
  return (
    <Animated.View
      style={{
        marginHorizontal: theme.spacing.m,
        transform: [{ translateY }]
      }}
      {...{ ref }}
    >
      {children}
    </Animated.View>
  );
};

export default HoverAnimation;
