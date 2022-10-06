import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, FONTS, SHADOWS, SIZES } from "../../../constants/theme";
import FormatedNumber from "../FormatedNumber";
import MapMarker from "../MapMarker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
// import moment from "moment";
import baseURL from "../../../constants/baseURL";
import Spinner from "../Spinner";
import TransparentSpinner from "../TransparentSpinner";

const HotelVerticalItem = ({ data, searchedData }) => {
  const navigation = useNavigation();
  const { hotelName, fImg, state, town } = data;
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [calDays, setCalDays] = useState(null);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const calDate = () => {
    let checkOutArray = searchedData.checkOutDate.split("-");
    let newCheckOutDateFormat = `${monthNames[checkOutArray[1] - 1]} ${
      checkOutArray[2]
    }, ${checkOutArray[0]}`;
    let checkInArray = searchedData.checkInDate.split("-");
    let newCheckInDateFormat = `${monthNames[checkInArray[1] - 1]} ${
      checkInArray[2]
    }, ${checkInArray[0]}`;
    var x = new Date(newCheckOutDateFormat);
    var y = new Date(newCheckInDateFormat);
    // seconds = milliseconds / 1000;
    // minutes = seconds / 60;
    // hours = minutes / 60;
    // Days = hours / 24;
    const diffInDays = Math.floor((x - y) / (1000 * 60 * 60 * 24));
    setCalDays(diffInDays);
  };
  useEffect(() => {
    axios
      .get(`${baseURL}/category/allcategories/${data._id}`)
      .then((res) => {
        setCategories(res.data);
        setCategory(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    calDate();
    return () => {
      setCategory([]);
    };
  }, []);

  if (!category?.categoryName) return <TransparentSpinner />;

  return (
    <TouchableOpacity
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
      onPress={() =>
        navigation.navigate("HotelDetailsScreen", {
          data,
          searchedData,
          categories,
          calDays,
        })
      }
    >
      {/* Image */}
      <Image
        source={{ uri: fImg }}
        style={{
          height: "100%",
          width: "40%",
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
      {/* Description */}
      <View
        style={{ width: "60%", paddingHorizontal: 15, paddingVertical: 15 }}
      >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: colors.darkSecondary,
          }}
        >
          {hotelName}
        </Text>
        {/* <View
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
        </View> */}
        <View style={{ height: 1, width: "100%", backgroundColor: "gray" }} />
        <MapMarker location={`${state} State`} />
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
            flexDirection: "column",
            alignItems: "flex-end",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: SIZES.small, marginVertical: 2 }}>
            {category?.categoryName}
          </Text>
          <Text
            style={{
              fontSize: SIZES.small,
              marginVertical: 2,
              marginBottom: 6,
            }}
          >
            Price for {`${calDays} Nights, ${searchedData.adult} Adults`}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <FormatedNumber
              value={category?.price * calDays}
              color={colors.primary}
              size={SIZES.large}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelVerticalItem;
