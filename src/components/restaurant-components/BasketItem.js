import { View, Text, Image } from "react-native";
import React from "react";
import FormatedNumber from "../FormatedNumber";
import { colors } from "../../../constants/theme";

const BasketItem = ({ data, width }) => {
  const { menuId, menuName, menuImg, price, qty, restaurantId } = data;
  console.log(data);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
        borderColor: colors.bgGray,
        borderBottomWidth: 1,
      }}
    >
      <Text>{qty}</Text>
      <Image source={{ uri: menuImg }} style={{ height: 30, width: 30 }} />
      <Text style={{ width: width ? width : "30%" }}>{menuName}</Text>
      <FormatedNumber value={price} size={12} />
      <View style={{ width: "16%" }}>
        <FormatedNumber size={14} value={price * qty} />
      </View>
    </View>
  );
};

export default BasketItem;
