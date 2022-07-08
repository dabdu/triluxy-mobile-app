import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ active, searchPath }) => {
  const navigation = useNavigation();
  const newPath = searchPath ? searchPath : "FlightSearchScreen";
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#E5FBFF",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate(newPath)}
      >
        <AntDesign
          name="search1"
          size={24}
          color={active === "search" ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.text,
            { color: active === "search" ? colors.primary : colors.secondary },
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign
          name="hearto"
          size={24}
          color={active === "favourites" ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.text,
            {
              color:
                active === "favourites" ? colors.primary : colors.secondary,
            },
          ]}
        >
          favourites
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="briefcase-outline"
          size={24}
          color={active === "booking" ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.text,
            { color: active === "booking" ? colors.primary : colors.secondary },
          ]}
        >
          Bookings
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons
          name="md-wallet-outline"
          size={24}
          color={active === "wallet" ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.text,
            { color: active === "wallet" ? colors.primary : colors.secondary },
          ]}
        >
          Wallet
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5
          name="user-circle"
          size={24}
          color={active === "profile" ? colors.primary : colors.secondary}
        />
        <Text
          style={[
            styles.text,
            { color: active === "profile" ? colors.primary : colors.secondary },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
