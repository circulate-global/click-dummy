import React from "react";
import { View } from "react-native";
import { Box, Theme } from "../components";
import { ThumbnailProps } from "./Thumbnail";
import { useTheme } from "@shopify/restyle";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

interface PaginationProps {
  currentIndex: Animated.Value<number>;
  data: ThumbnailProps[];
}
const Pagination = ({ currentIndex, data }: PaginationProps) => {
  const theme = useTheme<Theme>();
  const size = theme.spacing.m;
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      {data.map((_, index) => {
        const inputRange = [index - 1, index, index + 1];
        const opacity = interpolate(currentIndex, {
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: Extrapolate.CLAMP
        });
        const scale = interpolate(currentIndex, {
          inputRange,
          outputRange: [1, 1.2, 1],
          extrapolate: Extrapolate.CLAMP
        });
        return (
          <Animated.View
            key={index}
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
        );
      })}
    </Box>
  );
};

export default Pagination;
