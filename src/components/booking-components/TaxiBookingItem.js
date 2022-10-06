import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FormatedNumber from "../FormatedNumber";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { containerDark } from "../../../constants/layouts";
import { getWordDate } from "../../../constants/functions";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const TaxiBookingItem = ({ data }) => {
  const navigation = useNavigation();

  const {
    status,
    createdAt,
    amount,
    pickupDate,
    pickupTime,
    originDesc,
    destDesc,
  } = data;
  console.log(data);
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
      onPress={() => navigation.navigate("TaxiBookingDetails", { data })}
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
          <View>
            <Text
              style={{
                color: colors.primary,
                fontFamily: FONTS.semiBold,
                //   fontSize: SIZES.medium,
              }}
            >
              {`${originDesc}`}
            </Text>
            <View style={{ width: "100%", alignItems: "center" }}>
              <FontAwesome name="angle-double-down" size={24} color="red" />
            </View>
            <Text
              style={{
                color: colors.primary,
                fontFamily: FONTS.semiBold,
                //   fontSize: SIZES.medium,
              }}
            >
              {`${destDesc}`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <Text>{`On ${getWordDate(pickupDate)} By ${pickupTime}`}</Text>
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
                status === "CHECKEDOUT"
                  ? colors.successColor
                  : colors.secondary,
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
      {status === "BOOKED" && (
        <Text
          style={{
            textAlign: "center",
            color: colors.darkPrimary,
            fontStyle: "italic",
          }}
        >
          Awaiting Confirmation, yet to assigned Driver
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TaxiBookingItem;
