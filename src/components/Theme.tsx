import React, { ReactNode, useContext } from "react";
import {
  createTheme,
  createBox,
  createText,
  ThemeProvider as ReStyleThemeProvider
} from "@shopify/restyle";
import { DarkModeContext } from "../context";

const palette = {
  yellowPrimary: "#FFBD1E",
  redPrimary: "#E07159",
  purplePrimary: "#965E8E",
  greenPrimary: "#A3C76C",

  black: "#0B0B0B",
  white: "white"
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.redPrimary,
    secondary: palette.greenPrimary,
    tercery: palette.purplePrimary,
    baseText: palette.black,
    baseTitle: palette.greenPrimary
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
      fontFamily: "PangeaTrial-Bold",
      color: "baseTitle"
    },
    subtitle1: {
      fontSize: 26,
      fontFamily: "PangeaTrial-Medium",
      color: "baseText"
    },
    subtitle2: {
      fontSize: 26,
      fontFamily: "PangeaTrial-Light",
      color: "baseText"
    },
    body: {
      fontSize: 18,
      fontFamily: "PangeaTrial-Regular",
      color: "baseText"
    },
    button: {
      fontSize: 18,
      fontFamily: "PangeaTrial-Regular",
      color: "secondary",
      textAlign: "center"
    },
    description: {
      fontSize: 15,
      fontFamily: "PangeaTrial-Light",
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
    mainBackground: palette.black,
    mainForeground: palette.white,
    primary: palette.redPrimary,
    secondary: palette.yellowPrimary,
    tercery: palette.yellowPrimary,
    baseText: palette.white,
    baseTitle: palette.yellowPrimary
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
