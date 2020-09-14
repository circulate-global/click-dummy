import React, { useState } from "react";
import {
  Box,
  Text,
  RoundedIcon,
  Checkbox,
  TouchableResize
} from "../../components";
import { useTheme } from "@shopify/restyle";

interface WidgetProps {
  price: number;
  percentage: number;
  onPress: () => void;
  onToggle: () => void;
}
const Widget = ({ price, percentage, onPress, onToggle }: WidgetProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const donation = (price * percentage).toFixed(2);
  const theme = useTheme();
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
              variant={isChecked ? "subtitle1" : "subtitle2"}
            >{`${donation} €`}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Widget;
