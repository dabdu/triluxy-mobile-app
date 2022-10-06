import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  LineDivider,
  MapMarker,
  SubHeader,
  TransparentSpinner,
} from "../../components";
import { PrimaryBtn, SecBtn } from "../../components/Forms";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { containerLight } from "../../../constants/layouts";
import { getWordDate } from "../../../constants/functions";

const RestaurantBookingDetails = () => {
  const route = useRoute();
  const { data, restaurant } = route?.params;
  console.log(restaurant, data);
  const navigation = useNavigation();
  const { address, fImg, state, town, restaurantName } = restaurant;
  const { checkInDate, checkInTime, reservePersons, status, createdAt } = data;
  if (!data || !restaurant) return <TransparentSpinner />;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
        width: "100%",
        paddingHorizontal: 30,
      }}
    >
      {/* Restaurant Details */}
      <View
        style={[
          containerLight,

          {
            paddingVertical: 10,
            paddingHorizontal: 20,
          },
        ]}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: colors.primary,
            paddingVertical: 10,
          }}
        >
          Restaurant{" "}
          <Ionicons
            name="restaurant-outline"
            size={24}
            color={colors.secondary}
          />{" "}
          Details
        </Text>
        <LineDivider />
        <Image
          source={{ uri: fImg }}
          style={{
            height: 120,
            width: 120,
            borderRadius: 50,
            marginVertical: 10,
          }}
        />
        <SubHeader text={restaurantName} color={colors.primary} />
        <MapMarker location={`${address}, ${town}, ${state}.`} />
        <PrimaryBtn
          text={"More Info"}
          onBtnPress={() =>
            navigation.navigate("SingleRestaurant", { data: restaurant })
          }
        />
      </View>
      {/* Booking Details */}
      <View style={containerLight}>
        <SubHeader text={"Booking Details"} />
        <LineDivider />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: colors.darkPrimary,
                }}
              >
                Check In Date
              </Text>
              <Text style={styles.contDesc}>{getWordDate(checkInDate)}</Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: colors.darkPrimary,
                }}
              >
                CheckIn Time
              </Text>
              <Text style={styles.contDesc}>{checkInTime}</Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: colors.darkPrimary,
                }}
              >
                Person(s)
              </Text>
              <Text style={styles.contDesc}>{reservePersons}</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 8,
                color: colors.primary,
                fontFamily: FONTS.bold,
              }}
            >
              Reservation Status
            </Text>
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
              }}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantBookingDetails;
const styles = StyleSheet.create({});
