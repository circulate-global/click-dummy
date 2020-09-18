import React from "react";
import { View, Animated } from "react-native";
import { Box, Theme } from "../components";
import { ThumbnailProps } from "./Thumbnail";
import { useTheme } from "@shopify/restyle";
import { BorderlessButton } from "react-native-gesture-handler";

interface PaginationProps {
  currentIndex: Animated.AnimatedDivision;
  data: ThumbnailProps[];
  onDotPress: (index: number) => void;
}
const Pagination = ({ currentIndex, data, onDotPress }: PaginationProps) => {
  const theme = useTheme<Theme>();
  const size = theme.spacing.m;
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      {data.map((_, index) => {
        const inputRange = [index - 1, index, index + 1];
        const opacity = currentIndex.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: "clamp"
        });
        const scale = currentIndex.interpolate({
          inputRange,
          outputRange: [1, 1.2, 1],
          extrapolate: "clamp"
        });
        const onPress = () => onDotPress(index);
        return (
          <BorderlessButton key={index} {...{ onPress }}>
            <Animated.View
              style={{
                height: size,
                width: size,
                backgroundColor: theme.colors.primary,
                borderRadius: size / 2,
                margin: theme.spacing.s,
                opacity,
                transform: [
                  {
                    scale
                  }
                ]
              }}
            />
          </BorderlessButton>
        );
      })}
    </Box>
  );
};

export default Pagination;
