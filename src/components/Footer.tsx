import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Theme } from "./Theme";

interface FooterProps {
  backgroundColor: keyof Theme["colors"];
}

const Footer = ({ backgroundColor }: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box {...{ backgroundColor }} style={{ paddingBottom: insets.bottom }} />
  );
};

export default Footer;
