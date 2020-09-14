import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Theme, Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center"
  }
});

interface ButtonProps {
  variant: "default" | "primary";
  label?: string;
  onPress: () => void;
}

const Button = ({ label, onPress, variant }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.mainBackground;
  const color =
    variant === "primary" ? theme.colors.mainBackground : theme.colors.primary;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
