import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Box,
  Text,
  RoundedIcon,
  Checkbox,
  TouchableResize,
  Theme
} from "../../components";
import { useTheme } from "@shopify/restyle";
import ConfettiCannon from "react-native-confetti-cannon";

const logo = require("../../../assets/logo_white.png");
interface WidgetProps {
  price: number;
  percentage: number;
  onPress: () => void;
  onToggle: () => void;
}
const Widget = ({ price, percentage, onPress, onToggle }: WidgetProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const explosion = useRef(null);
  const donation = (price * percentage).toFixed(2).replace(".", ",");
  const theme = useTheme<Theme>();
  useEffect(() => {
    if (isChecked && explosion.current) {
      // @ts-ignore
      explosion.current.start();
    }
  }, [isChecked]);
  return (
    <Box
      paddingVertical="m"
      borderBottomWidth={2}
      borderBottomColor="mainForeground"
      marginHorizontal="m"
      marginBottom="xs"
    >
      <Box flexDirection="row" justifyContent="space-between">
        <Box
          height={100}
          width={100}
          backgroundColor="primary"
          justifyContent="center"
          alignItems="center"
          borderRadius={theme.spacing.m}
        >
          <Image
            source={logo}
            style={{
              height: 50,
              width: 130
            }}
            resizeMode="contain"
          />
        </Box>
        <Box flex={1} paddingLeft="m">
          <Text variant="subtitle3">Kompensiere deinen Plastikfußabdruck</Text>
          <Text variant="description">für eine sauberere Welt!</Text>
          <Box alignItems="flex-start" paddingVertical="s">
            <TouchableResize {...{ onPress }}>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Text color="primary">was bewirke ich</Text>
                <RoundedIcon
                  name="help-circle"
                  size={25}
                  color="primary"
                  backgroundColor="mainBackground"
                />
              </Box>
            </TouchableResize>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingTop="s"
          >
            <Checkbox
              checked={isChecked}
              label="Mitwirken"
              onChange={() => {
                setIsChecked(prev => !prev);
                onToggle();
              }}
            />
            <Text
              variant={"subtitle2"}
              style={{ opacity: isChecked ? 1 : 0.5 }}
            >
              {`€ ${donation}`}
            </Text>
          </Box>
        </Box>
      </Box>
      {isChecked && <Confetti ref={explosion} />}
    </Box>
  );
};

const Confetti = React.memo(
  React.forwardRef<ConfettiCannon>((_, ref) => {
    const theme = useTheme<Theme>();
    return (
      <ConfettiCannon
        count={200}
        origin={{ x: -40, y: 0 }}
        fallSpeed={2000}
        autoStart={false}
        autoStartDelay={500}
        colors={[
          theme.colors.primary,
          theme.colors.secondary,
          theme.colors.tercery
        ]}
        ref={ref}
      />
    );
  })
);

export default React.memo(Widget);
