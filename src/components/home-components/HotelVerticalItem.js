import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors, FONTS, SHADOWS, SIZES } from "../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import FormatedNumber from "../FormatedNumber";
import { SecBtn } from "../Forms";
import MapMarker from "../MapMarker";
import { useNavigation } from "@react-navigation/native";

const HotelVerticalItem = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        marginVertical: 10,
        ...SHADOWS.medium,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      {/* Image */}
      <Image
        source={{ uri: data.image }}
        style={{
          height: "100%",
          width: "50%",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
      {/* Description */}
      <View style={{ width: "50%", paddingHorizontal: 10, paddingVertical: 5 }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.medium,
            color: colors.darkSecondary,
          }}
        >
          {data.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.small,
              color: "gray",
            }}
          >
            {data.rating} |
          </Text>
          <Ionicons name="star" size={24} color="orange" />
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.small,
              color: "gray",
            }}
          >
            {data.star}
          </Text>
        </View>
        <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
        <MapMarker location={data.location} />
        <Text style={{ fontFamily: FONTS.bold }}>
          address:{" "}
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              fontWeight: "500",
              color: "gray",
              fontStyle: "italic",
            }}
          >
            {data.address}
          </Text>
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <FormatedNumber
              value={data.price}
              color={colors.primary}
              size={SIZES.medium}
            />
            <Text>/</Text>
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "gray",
                fontStyle: "italic",
              }}
            >
              Night
            </Text>
          </View>
          <TouchableOpacity
            style={{
              // width: "100%",
              backgroundColor: colors.secondary,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
              paddingHorizontal: 8,
              borderRadius: 10,
              marginVertical: 10,
              fontFamily: "OpenSansExtraBold",
            }}
            onPress={() => navigation.navigate("HotelDetailsScreen", { data })}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HotelVerticalItem;
