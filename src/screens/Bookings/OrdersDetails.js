import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { containerLight } from "../../../constants/layouts";
import { getWordDate } from "../../../constants/functions";
import { BasketItem } from "../../components/restaurant-components";

const OrdersDetails = () => {
  const route = useRoute();
  const { data, restaurant } = route?.params;
  console.log(restaurant, data);
  const navigation = useNavigation();
  const { address, fImg, state, town, restaurantName } = restaurant;
  const {
    amount,
    deliveryAddress,
    orderedItems,
    status,
    paymentMode,
    transactionId,
    transactionRef,
  } = data;
  if (!data || !restaurant) return <TransparentSpinner />;
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
          <View
            style={{
              width: "100%",
            }}
          >
            <View style={{ paddingVertical: 10 }}>
              <Text>Transaction ID:</Text>
              <Text>{transactionId}</Text>
            </View>
            <View style={{ paddingVertical: 5 }}>
              <Text>Transaction Ref:</Text>
              <Text>{transactionRef}</Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
                color: colors.primary,
                paddingVertical: 10,
              }}
            >
              Ordered Items
            </Text>
            <View style={{}}>
              {orderedItems &&
                orderedItems.map((item) => (
                  <BasketItem data={item} key={item._id} width={"20%"} />
                ))}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text>Total</Text>
                <FormatedNumber
                  value={amount}
                  size={SIZES.large}
                  color={colors.primary}
                />
              </View>
            </View>
          </View>
          {/* Order Status */}
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
              Order Status
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 8,
                backgroundColor:
                  status === "COMPLETED"
                    ? colors.successColor
                    : colors.secondary,
                borderRadius: 10,
                color: "white",
                fontFamily: FONTS.bold,
              }}
            >
              {status === "COMPLETED" ? "DELIVERED & RECIEVED" : status}
            </Text>
          </View>
          {/* Mode Of Payment */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 15,
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
              Mode Of Payment
            </Text>
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 8,
                backgroundColor: colors.primary,
                borderRadius: 10,
                color: "white",
                fontFamily: FONTS.bold,
              }}
            >
              {paymentMode}
            </Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <SubHeader text={"Delivery Address"} color={colors.darkPrimary} />
            <MapMarker location={`${deliveryAddress?.description}`} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrdersDetails;
const styles = StyleSheet.create({});
