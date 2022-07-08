import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { FormatedNumber, ImageSlider } from "../../components";
import { useRoute } from "@react-navigation/native";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const HotelDetailsScreen = () => {
  const route = useRoute();

  const { data } = route?.params;
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <View style={{ width: "100%" }}>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "red",
          }}
        >
          <View>
            <FormatedNumber
              value={data.price}
              color={colors.primary}
              size={SIZES.large}
            />
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                marginRight: 5,
                color: colors.primary,
                fontFamily: FONTS.bold,
              }}
            >
              Hotel Policy
            </Text>
            <AntDesign name="exclamationcircle" size={24} color="orange" />
          </TouchableOpacity>
        </View>
        <ImageSlider images={data.otherImages} />
      </View>
    </SafeAreaView>
  );
};

export default HotelDetailsScreen;
