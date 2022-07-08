import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const WarningText = ({ text, right }) => {
  return (
    <View
      style={{
        flexDirection: right ? "row-reverse" : "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <AntDesign name="exclamationcircle" size={24} color="black" />

      <Text>{text}</Text>
    </View>
  );
};

export default WarningText;
