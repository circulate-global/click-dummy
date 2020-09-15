import React, { ReactNode } from "react";
import { Box, Theme, Text } from "./Theme";
import { View, StyleSheet } from "react-native";

interface BadgeProps {
  children: ReactNode;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"] | undefined;
  size: number;
  badgeContent: number | string;
}
const Badge = ({
  children,
  color,
  backgroundColor,
  size,
  badgeContent
}: BadgeProps) => {
  return (
    <Box>
      {children}
      <Box
        position="absolute"
        top={-size / 3}
        right={-size / 3}
        height={size}
        minWidth={size}
        borderRadius={size / 2}
        alignItems="center"
        justifyContent="center"
        {...{ backgroundColor }}
      >
        <Text {...{ color }}>{badgeContent}</Text>
      </Box>
    </Box>
  );
};

Badge.defaultProps = {
  size: 22
};

export default Badge;
