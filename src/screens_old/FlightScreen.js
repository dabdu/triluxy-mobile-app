import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  ListItem,
  SemiRounded,
  HorizontalBookingItem,
  FlightSearchTabTiltle,
} from "../components";
import { colors, logo, subHeading } from "../../constants/theme";
import {} from "@expo/vector-icons";
import {
  MaterialIcons,
  Fontisto,
  AntDesign,
  EvilIcons,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { FlightSearchInput, PrimaryBtn } from "../components/Forms";
const FlightScreen = () => {
  const [activeFlight, setActiveFlight] = useState(true);
  const [activeHotel, setActiveHotel] = useState(false);
  const [activeCar, setActiveCar] = useState(false);
  const [activeCruise, setActiveCruise] = useState(false);
  const [roundTripTab, setRoundTripTab] = useState(true);
  const [oneWayTab, setOneWayTab] = useState(false);
  const [multiCityTab, setMultiCityTab] = useState(false);

  //   useEffect(() => {
  //     setActiveFlight(true);
  //   }, []);
  const data = [
    {
      id: 12,
      name: "Dubai",
      image:
        "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
      price: 2300,
      isFavorite: true,
    },
    {
      id: 122,
      name: "Dubai",
      image:
        "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
      price: 2300,
      isFavorite: false,
    },
    {
      id: 121,
      name: "Dubai",
      image:
        "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
      price: 2300,
      isFavorite: true,
    },
    {
      id: 123,
      name: "Dubai",
      image:
        "https://th.bing.com/th/id/R.ed041b61d80635960008bb44b178d590?rik=l6qdGZrAUfcAzA&pid=ImgRaw&r=0",
      price: 2300,
      isFavorite: false,
    },
  ];
  const onFlights = () => {
    setActiveFlight(true);
    setActiveHotel(false);
    setActiveCar(false);
    setActiveCruise(false);
  };
  const onHotels = () => {
    setActiveFlight(false);
    setActiveHotel(true);
    setActiveCar(false);
    setActiveCruise(false);
  };
  const onCars = () => {
    setActiveFlight(false);
    setActiveHotel(false);
    setActiveCar(true);
    setActiveCruise(false);
  };
  const onCruises = () => {
    setActiveFlight(false);
    setActiveHotel(false);
    setActiveCar(false);
    setActiveCruise(true);
  };
  const onRoundCityTab = () => {
    setRoundTripTab(true);
    setOneWayTab(false);
    setMultiCityTab(false);
  };
  const onOneWaytab = () => {
    setRoundTripTab(false);
    setOneWayTab(true);
    setMultiCityTab(false);
  };
  const onMultiCityTab = () => {
    setRoundTripTab(false);
    setOneWayTab(false);
    setMultiCityTab(true);
  };
  return (
    <ScrollView>
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
              source={logo}
              style={{ height: 40, width: 40 }}
              resizeMode="contain"
            />
            <View>
              <Ionicons name="notifications-outline" size={35} color="white" />
            </View>
          </View>
          <Text
            style={{
              fontSize: 32,
              fontFamily: "OpenSansRegular",
              color: "white",
              fontWeight: "900",
              marginTop: 20,
              marginHorizontal: 30,
              //   marginBottom: 10,
            }}
          >
            Let's Book your Flight!
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 30, marginVertical: 18 }}
          >
            <HorizontalBookingItem
              Icon={MaterialIcons}
              name={"flight"}
              title="Flights"
              onPress={onFlights}
              active={activeFlight}
            />
            <HorizontalBookingItem
              Icon={MaterialIcons}
              name={"local-hotel"}
              title="Hotels"
              onPress={onHotels}
              active={activeHotel}
            />
            <HorizontalBookingItem
              Icon={AntDesign}
              name={"car"}
              title="Cars"
              onPress={onCars}
              active={activeCar}
            />
            <HorizontalBookingItem
              Icon={Fontisto}
              name={"ship"}
              title="Cruises"
              onPress={onCruises}
              active={activeCruise}
            />
          </ScrollView>
        </View>
      </SemiRounded>
      <View
        style={{
          marginVertical: 25,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            paddingBottom: 19,
            paddingHorizontal: 10,
            borderRadius: 15,
            borderColor: colors.secondary,
            borderWidth: 1,
            marginTop: -100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <FlightSearchTabTiltle
              title="Round Trip"
              active={roundTripTab}
              onPress={onRoundCityTab}
            />
            <FlightSearchTabTiltle
              title="One Way"
              active={oneWayTab}
              onPress={onOneWaytab}
            />
            <FlightSearchTabTiltle
              title="multiCityTab"
              active={multiCityTab}
              onPress={onMultiCityTab}
            />
          </View>
          {roundTripTab && (
            <View>
              <FlightSearchInput
                placeholder={"City or Airport"}
                desc="From"
                type={"input"}
                Icon={EvilIcons}
                iconName="location"
              />
              <FlightSearchInput
                placeholder={"City or Airport"}
                desc="To"
                type={"input"}
                Icon={EvilIcons}
                iconName="location"
              />
              <View style={{ flexDirection: "row", width: "100%" }}>
                <View style={{ width: "50%" }}>
                  <FlightSearchInput
                    placeholder={"Date"}
                    desc="Depature"
                    type={"date"}
                    Icon={FontAwesome}
                    iconName="calendar"
                  />
                </View>
                <View style={{ width: "50%" }}>
                  <FlightSearchInput
                    placeholder={"Date"}
                    desc="Return"
                    type={"date"}
                    Icon={FontAwesome}
                    iconName="calendar"
                  />
                </View>
              </View>
              <FlightSearchInput
                placeholder={"Passengers"}
                desc="Passengers"
                type={"date"}
                Icon={FontAwesome}
                iconName="user-circle-o"
              />
              <FlightSearchInput
                placeholder={"Economy"}
                desc="Coach"
                type={"select"}
                Icon={FontAwesome5}
                iconName="fantasy-flight-games"
              />
              <PrimaryBtn text={"Find Flight"} />
            </View>
          )}
          {oneWayTab && <Text>oneWayTab</Text>}
          {multiCityTab && <Text>multiCityTab</Text>}
        </View>
        <Text style={subHeading}>Popular Flights Destinations</Text>
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
          {data && data.map((item) => <ListItem key={item.id} data={item} />)}
        </View>
      </View>
    </ScrollView>
  );
};

export default FlightScreen;
