import React from "react";
import { Image, Dimensions, ScrollView } from "react-native";
import { Box, Text, Footer, RoundedIconButton } from "../components";
import { AppNavigationProps } from "../components/Navigation";

const { width: wWidth } = Dimensions.get("window");

const Modal = ({ navigation }: AppNavigationProps<"Modal">) => {
  const width = wWidth > 500 ? 500 : wWidth;
  const height = (width * 522) / 800;
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView>
        <Image
          source={require("../../assets/example.jpg")}
          style={{ width, height }}
        />
        <Box padding="m">
          <Text variant="subtitle1" paddingBottom="m">
            Circulate: What we do
          </Text>
          <Text paddingBottom="m">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </Text>
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
