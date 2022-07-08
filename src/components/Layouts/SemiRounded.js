import { View, Text } from "react-native";
import React from "react";
import { colors, width } from "../../../constants/theme";

const SemiRounded = ({ children }) => {
  return (
    <View
      style={{
        height: 200,
        width: width,
        backgroundColor: colors.secondary,
        borderTopColor: colors.secondary,
        borderTopWidth: 0.5,
        marginTop: 32,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      {children}
    </View>
  );
};

export default SemiRounded;
