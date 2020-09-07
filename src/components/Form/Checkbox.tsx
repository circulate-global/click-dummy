import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { Box, Text, Theme } from "../Theme";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  const theme = useTheme<Theme>();
  const color = checked ? theme.colors.baseTitle : theme.colors.mainBackground;
  return (
    <BorderlessButton
      onPress={() => onChange()}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="s"
          height={20}
          width={20}
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="baseText"
          borderRadius={theme.spacing.m}
          style={{ backgroundColor: color }}
        >
          <Icon name="check" color={theme.colors.mainBackground} />
        </Box>
        <Text variant="description">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
