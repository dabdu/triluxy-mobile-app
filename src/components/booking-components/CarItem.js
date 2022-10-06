import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FormatedNumber from "../FormatedNumber";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { containerDark } from "../../../constants/layouts";
import { getWordDate } from "../../../constants/functions";
import { useNavigation } from "@react-navigation/native";

const CarItem = ({ data }) => {
  const navigation = useNavigation();

  const { status, createdAt, amount, pickupDate, returnDate, days } = data;
  const getDate = () => {
    let tempDate = new Date(createdAt);
    let fDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    return fDate;
  };
  return (
    <TouchableOpacity
      style={[containerDark, {}]}
      onPress={() => navigation.navigate("BookedCarDetails", { data })}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text
            style={{
              color: colors.primary,
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
            }}
          >
            {`Car rented from ${getWordDate(pickupDate)} to ${getWordDate(
              returnDate
            )}`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <Text>{`Rented for ${days} Days`}</Text>
          </View>

          <Text
            style={{
              color: "gray",
              fontFamily: FONTS.medium,
              paddingVertical: 5,
            }}
          >
            {getWordDate(getDate())}
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 8,
              backgroundColor:
                status === "RETURNED" ? colors.successColor : colors.secondary,
              borderRadius: 10,
              color: "white",
              fontFamily: FONTS.bold,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            {status}
          </Text>
          <FormatedNumber
            value={amount}
            size={SIZES.medium}
            color={colors.successColor}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;
