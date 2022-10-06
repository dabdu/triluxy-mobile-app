import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors, FONTS, SIZES } from "../../../constants/theme";

const MenuItem = ({ Icon, iconName, text, path, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        marginVertical: 5,
      }}
      onPress={onPress}
    >
      <View>
        <Icon name={iconName} color={colors.primary} size={28} />
      </View>
      <Text
        style={{
          marginLeft: 12,
          fontSize: SIZES.small,
          color: colors.darkPrimary,
          fontFamily: FONTS.semiBold,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
