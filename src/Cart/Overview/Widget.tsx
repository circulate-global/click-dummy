import React, { useState, useRef, useEffect } from "react";
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

interface WidgetProps {
  price: number;
  percentage: number;
  onPress: () => void;
  onToggle: () => void;
}
const Widget = ({ price, percentage, onPress, onToggle }: WidgetProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const explosion = useRef(null);
  const donation = (price * percentage).toFixed(2);
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
      borderBottomColor="primary"
      marginBottom="m"
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
          <Text color="mainBackground">circulate</Text>
        </Box>
        <Box flex={1} paddingLeft="m">
          <Text>YEAH!</Text>
          <Text>I'm investing for a plastic free future!</Text>
          <Box alignItems="flex-start" paddingVertical="s">
            <TouchableResize {...{ onPress }}>
              <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Text color="tercery">see my impact</Text>
                <RoundedIcon
                  name="info"
                  size={25}
                  color="tercery"
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
      {isChecked && (
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
          ref={explosion}
        />
      )}
    </Box>
  );
};

export default React.memo(Widget);
