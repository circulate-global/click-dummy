import React from "react";
import { View, ScrollView } from "react-native";
import { Box, Text, RoundedIconButton, Theme } from "../components";
import { AppNavigationProps } from "../components/Navigation";
import { ThumbnailProps } from "./Thumbnail";
import Galerie from "./Galerie";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

export const assets = [
  require("./assets/1.jpg"),
  require("./assets/2.jpg"),
  require("./assets/3.jpg"),
  require("./assets/4.jpg")
];

const galerie: ThumbnailProps[] = [
  {
    index: 0,
    picture: {
      src: assets[0],
      height: 250,
      width: 250
    }
  },
  {
    index: 1,
    picture: {
      src: assets[1],
      height: 250,
      width: 250
    }
  },
  {
    index: 2,
    picture: {
      src: assets[2],
      height: 250,
      width: 250
    }
  },
  {
    index: 3,
    picture: {
      src: assets[3],
      height: 250,
      width: 250
    }
  }
];

const advantages: string[] = [
  "scale up opeations",
  "process higher amounts of plastic",
  "uplift more waste workers from the informal sector into stable employment",
  "invest in technical infrastructure"
];

const Modal = ({ navigation }: AppNavigationProps<"Modal">) => {
  const theme = useTheme<Theme>();
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView>
        <Box height={400}>
          <Galerie thumbnails={galerie} />
        </Box>
        <Box padding="m">
          <Text variant="subtitle1" paddingBottom="m">
            Our first partnership: Saahas Zero Waste.
          </Text>
          <Text paddingBottom="m">
            The waste management organization from Bangalore/Inda has a strong
            focus on ethical standards and the inclusion of marginalized soical
            groups and women.
          </Text>
          <Text paddingBottom="m">
            With support from <Text color="primary">circulate</Text>, Saahas
            can:
          </Text>
          {advantages.map((item, index) => (
            <View key={index}>
              <Box paddingBottom="s" flexDirection="row" maxWidth={300}>
                <Icon
                  name="arrow-right"
                  style={{
                    paddingRight: 10,
                    paddingTop: 6,
                    color: theme.colors.primary
                  }}
                />
                <Text>{item}</Text>
              </Box>
            </View>
          ))}
        </Box>
      </ScrollView>
      <Box position="absolute" top={40} left={20}>
        <RoundedIconButton
          name="chevron-left"
          size={40}
          backgroundColor="mainBackground"
          color="mainForeground"
          onPress={() => navigation.goBack()}
        />
      </Box>
    </Box>
  );
};

export default Modal;
