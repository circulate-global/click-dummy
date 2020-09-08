import React, { useState } from "react";
import {
  Box,
  Text,
  BorderlessTab,
  RoundedIcon,
  AnimatedBoxExample
} from "../../components";
import { useTheme } from "@shopify/restyle";
import Checkbox from "../../components/Form/Checkbox";

interface WidgetProps {
  price: number;
  percentage: number;
  onPress: () => void;
}
const Widget = ({ price, percentage, onPress }: WidgetProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const donation = (price * percentage).toFixed(2);
  const theme = useTheme();
  return (
    <Box
      paddingVertical="m"
      borderBottomWidth={2}
      borderBottomColor="buttonPrimary"
      marginBottom="m"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          height={100}
          width={100}
          backgroundColor="buttonPrimary"
          justifyContent="center"
          alignItems="center"
          borderRadius={theme.spacing.m}
        >
          <Text color="mainBackground">circulate</Text>
        </Box>
        <Box flex={1} padding="m">
          <Text>I'm investing for a plastic free future!</Text>
          <BorderlessTab {...{ onPress }}>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Text color="buttonPrimary">see my impact</Text>
              <RoundedIcon
                name="info"
                size={25}
                color="buttonPrimary"
                backgroundColor="mainBackground"
              />
            </Box>
          </BorderlessTab>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingTop="s"
          >
            <Checkbox
              checked={isChecked}
              label="donate"
              onChange={() => setIsChecked(prev => !prev)}
            />
            <Text variant="description">{`${donation} €`}</Text>
          </Box>
        </Box>
      </Box>
      <AnimatedBoxExample />
    </Box>
  );
};

export default Widget;
