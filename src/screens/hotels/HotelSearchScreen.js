import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import {
  DateInput,
  FlightSearchTabTiltle,
  HorizontalBookingItem,
  ListItem,
  SemiRounded,
  SubHeader,
} from "../../components";
import {
  MaterialIcons,
  Fontisto,
  AntDesign,
  EvilIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { colors, fonts, logo, SIZES } from "../../../constants/theme";
import { InputField, SecBtn } from "../../components/Forms";
import { useNavigation } from "@react-navigation/native";
import {
  DiscountComponent,
  FlightSearchInput,
  RecentSearches,
} from "../../components/flight-components";
import Footer from "../../components/Layouts/Footer";
import { hotels } from "../../../constants/dummy";
const HotelSearchScreen = () => {
  const [checkInDate, setCheckInDate] = useState("Choose Date");
  const [checkOutDate, setCheckOutDate] = useState("Choose Date");
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView style={{ backgroundColor: colors.bgGray, marginBottom: 20 }}>
        <SemiRounded>
          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 30,
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://stockphoto.com/samples/ODA2NjU1MDAzMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/portrait-of-smart-friendly-smiling-kazakh-man-in-glasses-dressed-in-business-suit-in-office-on-white-background-asian-handsome-successful-businessman.jpg",
                }}
                style={{ height: 40, width: 40, borderRadius: 100 }}
              />
              <View>
                <Ionicons
                  name="notifications-outline"
                  size={35}
                  color="white"
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: SIZES.extraLarge,
                fontFamily: "OpenSansRegular",
                color: "white",
                fontWeight: "900",
                marginTop: 20,
                marginHorizontal: 30,
                //   marginBottom: 10,
              }}
            >
              Let's Book your Hotel!
            </Text>
          </View>
        </SemiRounded>
        <View
          style={{
            marginVertical: 25,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 20,
              borderRadius: 15,
              borderColor: colors.secondary,
              borderWidth: 1,
              marginTop: -100,
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View style={{ width: "100%" }}>
                <View style={{ width: "100%" }}>
                  <InputField
                    placeholder={"Type Destination"}
                    iconName={"md-search"}
                    Icon={Ionicons}
                    background={"white"}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    marginVertical: 5,
                  }}
                >
                  <DateInput
                    dateInput={checkInDate}
                    setDateInput={setCheckInDate}
                    title={"Check In Date"}
                    width={"48%"}
                  />
                  <DateInput
                    dateInput={checkOutDate}
                    setDateInput={setCheckOutDate}
                    title={"Check Out Date"}
                    width={"48%"}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <FlightSearchInput
                    placeholder="0"
                    desc="Adult"
                    type={"number-pad"}
                    width={"32%"}
                  />
                  <FlightSearchInput
                    placeholder="0"
                    desc="Children"
                    type={"number-pad"}
                    width={"32%"}
                  />
                  <FlightSearchInput
                    placeholder="0"
                    desc="Infant"
                    type={"number-pad"}
                    width={"32%"}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                }}
              >
                <SecBtn
                  text={"Find Hotel"}
                  onBtnPress={() => navigation.navigate("SearchResult")}
                />
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <SubHeader text={"Popular Hotels"} color={colors.darkPrimary} />
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              {hotels &&
                hotels.map((item) => <ListItem key={item.id} data={item} />)}
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer active={"search"} />
    </View>
  );
};

export default HotelSearchScreen;
