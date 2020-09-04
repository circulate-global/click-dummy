import React from "react";
import { View, Button } from "react-native";
import { CartNavigationProps } from "../../components/Navigation";

const Overview = ({ navigation }: CartNavigationProps<"Overview">) => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <Button
        title="go to CheckOut"
        onPress={() => navigation.push("CheckOut")}
      />
    </View>
  );
};

export default Overview;
