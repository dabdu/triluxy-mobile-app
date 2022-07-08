import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors, FONTS, SHADOWS, SIZES } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const FlightDetailsHeader = ({ location, dates, type, text }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderTopColor: "#a3d4fe",
        borderTopWidth: 1,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={27} color={"white"} />
        </TouchableOpacity>
        {type ? (
          <Text
            style={{
              marginLeft: 5,
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              color: "white",
            }}
          >
            {text}
          </Text>
        ) : (
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: SIZES.large,
                fontFamily: FONTS.semiBold,
              }}
            >
              {location}
            </Text>
            <Text style={{ color: "white", fontWeight: "500" }}>{dates}</Text>
          </View>
        )}
      </View>
      <View>
        <Ionicons name="share-outline" size={24} color="white" />
        {/* <Text style={{ fontSize: 10, textAlign: "center", color: "white" }}>
          Share
        </Text> */}
      </View>
    </View>
  );
};

export default FlightDetailsHeader;
