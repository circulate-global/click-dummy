import React, { useEffect, ReactNode } from "react";
import { Animated, StyleSheet, Image, Platform } from "react-native";
import { Svg, Path } from "react-native-svg";
import { Resizable } from "react-native-web-hooks";
import { Box, Text } from "../components";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { Instagram, Facebook, Linkedin, Mail } from "./Icons";
import HoverAnimation from "./HoverAnimation";
import { BorderlessButton } from "react-native-gesture-handler";

const AnimatedPath = Animated.createAnimatedComponent(Path);
export const BORDER_WIDTH = 14;
export const assets = [require("./assets/logo.png")];

export interface IconProps {
  name: string;
  onPress: () => void;
  icon: ReactNode;
}

const socialIcons: IconProps[] = [
  {
    name: "instagram",
    onPress: () => {
      Platform.OS === "web"
        ? window.open(
            "https://www.instagram.com/circulate_global/?hl=en",
            "_target"
          )
        : WebBrowser.openBrowserAsync(
            "https://www.instagram.com/circulate_global/?hl=en"
          );
    },
    icon: <Instagram />
  },
  {
    name: "linkedin",
    onPress: () =>
      Platform.OS === "web"
        ? window.open(
            "https://www.linkedin.com/company/69827163/admin/",
            "_target"
          )
        : WebBrowser.openBrowserAsync(
            "https://www.linkedin.com/company/69827163/admin/"
          ),
    icon: <Linkedin />
  },
  {
    name: "mail",
    onPress: () => Linking.openURL("mailto:letplastic@circulate.global"),
    icon: <Mail />
  }
];

interface ResizableProps {
  width: number;
  height: number;
}

interface PathProps {
  id: number;
  d: string[];
  viewBox: string;
  color: string;
  transform: string | undefined;
}

const svgPaths: PathProps[] = [
  // {
  //   id: 0,
  //   d: [
  //     "M48.2,-66.1C55.9,-51.1,50.8,-29.6,53.6,-10C56.3,9.5,66.9,27.1,63.2,39.1C59.4,51.1,41.3,57.4,25.6,57.7C9.9,57.9,-3.5,52.1,-21.4,49.6C-39.3,47.1,-61.8,47.9,-70,38.2C-78.2,28.5,-72.2,8.4,-65.5,-8.5C-58.9,-25.3,-51.5,-39,-40.5,-53.4C-29.5,-67.8,-14.7,-82.9,2.8,-86.2C20.3,-89.5,40.6,-81.1,48.2,-66.1Z",
  //     "M45.9,-55.6C60.3,-42.7,73.2,-28.9,78,-12.2C82.8,4.5,79.3,24.2,69.1,37.9C58.8,51.7,41.6,59.5,26.4,59.3C11.2,59.1,-2.2,50.9,-15.9,45.2C-29.7,39.6,-43.8,36.5,-51.5,27.6C-59.1,18.7,-60.3,3.9,-59.1,-11.8C-57.9,-27.5,-54.5,-44.1,-44.2,-57.8C-34,-71.6,-17,-82.4,-0.6,-81.6C15.8,-80.9,31.5,-68.6,45.9,-55.6Z",
  //     "M42.3,-46.7C57.7,-37.5,74.9,-26.9,73.8,-15.6C72.7,-4.3,53.3,7.6,40.1,16.4C27,25.2,20.1,30.9,9.9,40.3C-0.4,49.7,-14,62.8,-25.7,62.2C-37.4,61.6,-47.1,47.2,-57.4,31.9C-67.8,16.6,-78.9,0.4,-74.2,-10.9C-69.6,-22.1,-49.3,-28.3,-34.3,-37.5C-19.3,-46.8,-9.6,-59.1,1.9,-61.4C13.5,-63.6,27,-55.9,42.3,-46.7Z"
  //   ],
  //   viewBox: "0 0 200 200",
  //   color: "white",
  //   transform: "translate(-20, 0)"
  // },
  {
    id: 1,
    d: [
      "M0,160L34.3,165.3C68.6,171,137,181,206,160C274.3,139,343,85,411,90.7C480,96,549,160,617,160C685.7,160,754,96,823,64C891.4,32,960,32,1029,42.7C1097.1,53,1166,75,1234,80C1302.9,85,1371,75,1406,69.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
      "M0,320L34.3,298.7C68.6,277,137,235,206,181.3C274.3,128,343,64,411,64C480,64,549,128,617,160C685.7,192,754,192,823,170.7C891.4,149,960,107,1029,96C1097.1,85,1166,107,1234,122.7C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
      "M0,224L34.3,229.3C68.6,235,137,245,206,224C274.3,203,343,149,411,144C480,139,549,181,617,181.3C685.7,181,754,139,823,106.7C891.4,75,960,53,1029,42.7C1097.1,32,1166,32,1234,64C1302.9,96,1371,160,1406,192L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
    ],
    viewBox: "0 0 1440 320",
    color: "#43959e",
    transform: undefined
  }
];

const Landing = () => {
  const animationValue = new Animated.Value(0);
  const animation = (toValue: number) =>
    Animated.timing(animationValue, {
      toValue,
      duration: 10000,
      useNativeDriver: true
    });

  useEffect(() => {
    Animated.loop(Animated.sequence([animation(1), animation(0)])).start();
  }, []);
  return (
    <Resizable>
      {({ width, height }: ResizableProps) => {
        const aspectRatio =
          (height - 2 * BORDER_WIDTH) / (width - 2 * BORDER_WIDTH);
        return (
          <Box
            borderColor="mainBackground"
            borderWidth={BORDER_WIDTH}
            {...{ width, height }}
          >
            <Box
              flex={1}
              backgroundColor="primary"
              borderRadius={2}
              overflow="hidden"
            >
              {svgPaths.map(
                ({ id, d, color, viewBox, transform }: PathProps) => {
                  return (
                    <Box
                      key={id}
                      style={{
                        ...StyleSheet.absoluteFillObject
                      }}
                    >
                      <Svg
                        width={width - 2 * BORDER_WIDTH}
                        height={height - 2 * BORDER_WIDTH}
                        {...{ viewBox }}
                      >
                        <AnimatedPath
                          d={animationValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: d
                          })}
                          fill={color}
                          transform={
                            transform ||
                            `translate(0, ${(aspectRatio * 1440 - 320) / 2})`
                          }
                        />
                      </Svg>
                    </Box>
                  );
                }
              )}
              <Box
                justifyContent="center"
                alignItems="center"
                style={{
                  ...StyleSheet.absoluteFillObject
                }}
              >
                <Box
                  width={width > 500 ? 500 : width - 4 * BORDER_WIDTH}
                  alignItems="center"
                >
                  <Image
                    source={assets[0]}
                    style={{
                      width: "100%",
                      height: 100
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    variant="subtitle3"
                    paddingTop="m"
                    color="mainBackground"
                    textAlign="center"
                  >
                    {`funding the planet’s biggest plastic \n cleanup with Plastic Credits`}
                  </Text>
                </Box>
              </Box>
              <Box
                justifyContent="flex-end"
                alignItems="center"
                style={{
                  ...StyleSheet.absoluteFillObject
                }}
              >
                <Box flexDirection="row" marginVertical="l">
                  {socialIcons.map(item => (
                    <HoverAnimation key={item.name}>
                      <BorderlessButton
                        onPress={item.onPress}
                        style={{
                          width: 50,
                          height: 50,
                          margin: BORDER_WIDTH / 2
                        }}
                      >
                        {item.icon}
                      </BorderlessButton>
                    </HoverAnimation>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      }}
    </Resizable>
  );
};

export default Landing;
