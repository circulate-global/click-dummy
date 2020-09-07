import React, { ReactNode } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

interface BorderlessTapProps {
  onPress: () => void;
  children: ReactNode;
}

const BorderlessTap = ({ children, onPress }: BorderlessTapProps) => {
  return <BorderlessButton>{children}</BorderlessButton>;
};

export default BorderlessTap;
