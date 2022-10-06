import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FormatedNumber,
  LineDivider,
  MapMarker,
  SubHeader,
  TransparentSpinner,
} from "../../components";
import { PrimaryBtn, SecBtn } from "../../components/Forms";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { containerLight } from "../../../constants/layouts";
import { getWordDate } from "../../../constants/functions";
import baseURL from "../../../constants/baseURL";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";

const TaxiBookingDetails = () => {
  const [car, setCar] = useState(null);
  const route = useRoute();
  const { data } = route?.params;
  const navigation = useNavigation();
  const {
    _id,
    amount,
    assignedCarId,
    categoryId,
    createdAt,
    destDesc,
    destLat,
    destLng,
    originDesc,
    originLat,
    originLng,
    pickupDate,
    pickupTime,
    status,
    transactionId,
    transactionRef,
    userId,
  } = data;
  const { authUser } = useAuthContext();
  console.log(data);
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${authUser?.token}`,
  //     },
  //   };
  //   const fetchData = async () => {
  //     await axios
  //       .get(`${baseURL}/taxi/details/${carId}`, config)
  //       .then((res) => {
  //         setCar(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return () => {
  //       setCar({});
  //     };
  //   };
  //   fetchData();
  // }, []);
  // if (car === null) return <TransparentSpinner />;
  console.log(data);
  return (
    <ScrollView>
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
        {/* Car Details */}
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
            Taxi <Fontisto name="taxi" size={24} color={colors.secondary} />{" "}
            Details
          </Text>
          <LineDivider />
          {assignedCarId === "" ? (
            <Text>You Haven't Been Assigned Taxi Driver</Text>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Image
                  source={{ uri: car?.carImages[0] }}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 30,
                    marginVertical: 10,
                  }}
                />
                <View>
                  <SubHeader text={car?.carName} color={colors.primary} />
                  <Text>Model: {`${car?.carModel}`}</Text>
                  <Text>Color: {car?.carColor}</Text>
                  <Text>Plate Number: {car?.plateNumber}</Text>
                </View>
              </View>
              <PrimaryBtn
                text={"More Info"}
                onBtnPress={() =>
                  navigation.navigate("CarInfoScreen", { data: car })
                }
              />
            </>
          )}
        </View>
        {/* Booking Details */}
        {/*  */}
        {/* Pickup and Return Date */}
        <View style={containerLight}>
          <SubHeader text={"Booking Details"} />
          <LineDivider />
          <View style={{ width: "100%" }}>
            {/* <View
              style={{
                paddingVertical: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontFamily: FONTS.semiBold }}>
                Transaction ID:
              </Text>
              <Text>{transactionId}</Text>
            </View>
            <View
              style={{
                paddingVertical: 5,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ fontFamily: FONTS.semiBold }}>
                Transaction Ref:
              </Text>
              <Text>{transactionRef}</Text>
            </View> */}
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
                  Pickup Date
                </Text>
                <Text style={styles.contDesc}>{getWordDate(pickupDate)}</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: colors.darkPrimary,
                  }}
                >
                  Return Date
                </Text>
                <Text style={styles.contDesc}>{pickupTime}</Text>
              </View>
              {/* <View>
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: colors.darkPrimary,
                  }}
                >
                  Days
                </Text>
                <Text style={styles.contDesc}>{days}</Text>
              </View> */}
            </View>
            <LineDivider />
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
              <SubHeader text={"From"} />
              <MapMarker location={`${originDesc}`} />
            </View>
            <LineDivider />
            <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
              <SubHeader text={"To"} />
              <MapMarker location={`${destDesc}`} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  color: colors.primary,
                  fontFamily: FONTS.bold,
                }}
              >
                Amount
              </Text>
              <FormatedNumber
                value={amount}
                color={colors.successColor}
                size={SIZES.large}
              />
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
                Booking Status
              </Text>
              <Text
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 8,
                  backgroundColor:
                    status === "RETURNED"
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
    </ScrollView>
  );
};

export default TaxiBookingDetails;
const styles = StyleSheet.create({});
