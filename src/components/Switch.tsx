import React from "react";
import { Switch as RNSwitch, SwitchProps as RNSwitchPRops } from "react-native";
import { useTheme } from "@shopify/restyle";

interface SwitchProps extends RNSwitchPRops {
  variant: "default" | "primary";
}
const Switch = ({ variant, ...props }: SwitchProps) => {
  const theme = useTheme();
  const color =
    variant === "default"
      ? theme.colors.buttonPrimary
      : theme.colors.buttonSecondary;
  return <RNSwitch thumbColor={color} {...props} />;
};

export default Switch;
