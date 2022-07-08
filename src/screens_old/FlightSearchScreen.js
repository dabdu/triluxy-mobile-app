import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { DateInput, FlightSearchTabTiltle } from "../components";
import { FlightSearchInput, SecBtn } from "../components/Forms";
import { useNavigation } from "@react-navigation/native";

const FlightSearchScreen = () => {
  const [roundTripTab, setRoundTripTab] = useState(true);
  const [oneWayTab, setOneWayTab] = useState(false);
  const [multiCityTab, setMultiCityTab] = useState(false);
  const [departureDate, setDepartureDate] = useState("Choose Date");
  const [returnDate, setReturnDate] = useState("Choose Date");
  const navigation = useNavigation();
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
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: colors.secondary,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: 20,
          paddingVertical: 8,
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

      {/* ROUND TRIP */}
      {roundTripTab && (
        <View
          style={{
            flexDirection: "column",
            height: "88%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: colors.primary,
              padding: 10,
            }}
          >
            <FlightSearchInput
              placeholder={"City or Airport"}
              desc="To"
              width={"100%"}
            />
            <FlightSearchInput
              placeholder={"City or Airport"}
              desc="Destinations"
              width={"100%"}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <DateInput
                dateInput={departureDate}
                setDateInput={setDepartureDate}
                title={"Departure Date"}
                width={"48%"}
              />
              <DateInput
                dateInput={returnDate}
                setDateInput={setReturnDate}
                title={"Return Date"}
                width={"48%"}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
            <FlightSearchInput
              placeholder="passenger & Class"
              desc="passenger & Class"
              type={"number-pad"}
              width={"100%"}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <SecBtn
              text={"Search"}
              onBtnPress={() => navigation.navigate("FlightSearchScreen")}
            />
          </View>
        </View>
      )}
      {/* ONE WAY */}
      {oneWayTab && (
        <View
          style={{
            flexDirection: "column",
            height: "88%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: colors.primary,
              padding: 10,
            }}
          >
            <FlightSearchInput
              placeholder={"City or Airport"}
              desc="To"
              width={"100%"}
            />
            <FlightSearchInput
              placeholder={"City or Airport"}
              desc="Destinations"
              width={"100%"}
            />
            <DateInput
              dateInput={departureDate}
              setDateInput={setDepartureDate}
              title={"Departure Date"}
              width={"100%"}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
            <FlightSearchInput
              placeholder="passenger & Class"
              desc="passenger & Class"
              type={"number-pad"}
              width={"100%"}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <SecBtn
              text={"Search"}
              onBtnPress={() => navigation.navigate("FlightSearchScreen")}
            />
          </View>
        </View>
      )}
      {/* MULTI WAY */}
      {multiCityTab && (
        <View style={{ marginBottom: 50 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "column",
                // height: "88%",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              {/* <Text>Flight 1</Text> */}
              <View
                style={{
                  width: "90%",
                  backgroundColor: colors.primary,
                  padding: 10,
                }}
              >
                <FlightSearchInput
                  placeholder={"City or Airport"}
                  desc="To"
                  width={"100%"}
                />
                <FlightSearchInput
                  placeholder={"City or Airport"}
                  desc="Destinations"
                  width={"100%"}
                />
                <DateInput
                  dateInput={departureDate}
                  setDateInput={setDepartureDate}
                  title={"Departure Date"}
                  width={"100%"}
                />
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
                <FlightSearchInput
                  placeholder="passenger & Class"
                  desc="passenger & Class"
                  type={"number-pad"}
                  width={"100%"}
                />
              </View>
              {/* <Text>Flight 2</Text> */}
              <View
                style={{
                  width: "90%",
                  backgroundColor: colors.primary,
                  padding: 10,
                  marginVertical: 20,
                  marginBottom: 80,
                }}
              >
                <FlightSearchInput
                  placeholder={"City or Airport"}
                  desc="To"
                  width={"100%"}
                />
                <FlightSearchInput
                  placeholder={"City or Airport"}
                  desc="Destinations"
                  width={"100%"}
                />
                <DateInput
                  dateInput={departureDate}
                  setDateInput={setDepartureDate}
                  title={"Departure Date"}
                  width={"100%"}
                />
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
                <FlightSearchInput
                  placeholder="passenger & Class"
                  desc="passenger & Class"
                  type={"number-pad"}
                  width={"100%"}
                />
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 10,
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <SecBtn
              text={"Search"}
              onBtnPress={() => navigation.navigate("FlightSearchResult")}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default FlightSearchScreen;
