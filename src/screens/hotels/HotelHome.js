import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { Header, ListItem, SubHeader } from "../../components";
import { colors } from "../../../constants/theme";
import { CountryItem } from "../../components/flight-components";
import Footer from "../../components/Layouts/Footer";
import { hotels } from "../../../constants/dummy";

const HotelHome = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Header
        placeholder={"Search For Some where to stay"}
        active={"hotel"}
        searchPath={"HotelSearchScreen"}
      />

      <Footer active={"search"} searchPath={"HotelSearchScreen"} />
    </View>
  );
};

export default HotelHome;
