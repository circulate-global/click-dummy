import React, { ReactNode, useContext } from "react";
import {
  createTheme,
  createBox,
  createText,
  ThemeProvider as ReStyleThemeProvider
} from "@shopify/restyle";
import { DarkModeContext } from "../context";

const palette = {
  blueLight: "#4A9CE8",
  bluePrimary: "#0D3B66",
  blueDark: "#071F36",

  yellowLight: "#F6DB79",
  yellowPrimary: "#F4D35E",
  yellowDark: "#997A0B",

  redLight: "#FA8B75",
  redPrimary: "#F95738",
  redDark: "#631303",

  purpleLight: "#B09BC5",
  purplePrimary: "#481878",
  purpleDark: "#2F0F4F",

  black: "#0B0B0B",
  white: "#F0F2F3"
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.redPrimary,
    secondary: palette.bluePrimary,
    tercery: palette.purplePrimary,
    baseText: palette.black,
    baseTitle: palette.bluePrimary
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  textVariants: {
    title1: {
      fontSize: 28,
      fontFamily: "Roboto-Bold",
      color: "baseTitle"
    },
    subtitle1: {
      fontSize: 26,
      fontFamily: "Roboto-Medium",
      color: "baseText"
    },
    subtitle2: {
      fontSize: 26,
      fontFamily: "Roboto-Light",
      color: "baseText"
    },
    body: {
      fontSize: 18,
      fontFamily: "Roboto-Regular",
      color: "baseText"
    },
    button: {
      fontSize: 18,
      fontFamily: "Roboto-MediumItalic",
      color: "secondary",
      textAlign: "center"
    },
    description: {
      fontSize: 15,
      fontFamily: "Roboto-LightItalic",
      color: "baseText"
    }
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  }
});

const darkTheme = {
  ...theme,
  colors: {
    mainBackground: palette.bluePrimary,
    mainForeground: palette.white,
    primary: palette.redPrimary,
    secondary: palette.yellowPrimary,
    tercery: palette.yellowPrimary,
    baseText: palette.white,
    baseTitle: palette.yellowLight
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <ReStyleThemeProvider theme={darkMode ? darkTheme : theme}>
      {children}
    </ReStyleThemeProvider>
  );
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

Text.defaultProps = {
  variant: "body"
};

export default theme;
