import React, { useState, useEffect } from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import {
  Box,
  Text,
  RoundedIconButton,
  Theme,
  Button,
  TouchableResize
} from "../components";
import { AppNavigationProps } from "../components/Navigation";
import Thumbnail, { ThumbnailProps } from "./Thumbnail";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import * as Linking from "expo-linking";

export const assets = [
  require("./assets/sneha.jpg"),
  require("./assets/factory.jpg")
];

const { width: wWidth } = Dimensions.get("window");

const galerie: ThumbnailProps[] = [
  {
    index: 0,
    picture: {
      src: assets[0],
      height: 300,
      width: 300
    }
  },
  {
    index: 1,
    picture: {
      src: assets[1],
      height: 200,
      width: 200
    }
  }
];

const list: { name: string; text: string }[] = [
  {
    name: "account",
    text: "Sneha"
  },
  {
    name: "factory",
    text: "Saahas Zero Waste"
  },
  {
    name: "map-marker",
    text: "Bangalore/Indien"
  },
  {
    name: "scale-balance",
    text: "Bangalore/Indien"
  }
];

const Modal = ({ navigation, route }: AppNavigationProps<"Modal">) => {
  const theme = useTheme<Theme>();
  const width = wWidth > 500 ? 500 : wWidth;
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    if (route.params?.amount) {
      setAmount(route.params.amount);
    }
  }, [route.params?.amount]);
  return (
    <Box flex={1} backgroundColor="mainBackground" maxWidth={500}>
      <ScrollView>
        <Box height={350} justifyContent="center" alignItems="center">
          <Thumbnail index={0} picture={galerie[0].picture} />
        </Box>
        <Box padding="m">
          <Text variant="subtitle1" paddingBottom="m">
            Dein Impact:
          </Text>
          {list.map(item => (
            <Box
              key={item.name}
              flexDirection="row"
              alignItems="center"
              paddingBottom="s"
            >
              <Icon name={item.name} color={theme.colors.primary} size={20} />
              {item.name !== "scale-balance" ? (
                <Text paddingLeft="s">{item.text}</Text>
              ) : (
                <Text paddingLeft="s" variant="bodyBold">
                  {amount} kg
                </Text>
              )}
            </Box>
          ))}
          <Text paddingVertical="s">
            Mit deinem Beitrag sorgst du dafür, dass Sneha {amount} kg
            Plastikmüll in deinem Namen sammelt, recycelt und wieder in den
            Kreislauf bringt.
          </Text>
        </Box>
        <Box height={200}>
          <Image source={assets[1]} style={{ width, height: 200 }} />
          <Box position="absolute" left={0} right={0} top={0} bottom={0}>
            <Box
              flex={1}
              flexDirection="row"
              alignContent="center"
              justifyContent="center"
            >
              <Box justifyContent="center">
                <TouchableResize
                  onPress={() => Linking.openURL("http://circulate.global")}
                >
                  <Box borderRadius={theme.spacing.m} overflow="hidden">
                    <Text
                      color="primary"
                      paddingVertical="xs"
                      paddingHorizontal="m"
                      style={{
                        opacity: 0.8,
                        backgroundColor: theme.colors.mainBackground
                      }}
                    >
                      mehr erfahren
                    </Text>
                  </Box>
                </TouchableResize>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box padding="m">
          <Text paddingBottom="l" paddingTop="s">
            {`Übrigens: Mit unserem Abo kannst du auch gleich deinen gesamten Plastik Fußabdruck kompensieren. \nGutes tun kann so einfach sein!`}
          </Text>
          <Button
            label="jetzt Abo abschließen"
            onPress={() => Linking.openURL("http://circulate.global")}
            variant="primary"
          />
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
