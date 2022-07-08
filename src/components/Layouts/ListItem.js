import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");
import { Shadow } from "react-native-shadow-2";
import { colors, FONTS, SHADOWS, SIZES } from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const ListItem = ({ data }) => {
  const navigation = useNavigation();
  const image = { uri: data.image };
  return (
    <View
      style={{
        width: width / 2 - 30,
        margin: 5,
        position: "relative",
        marginVertical: 10,
        borderColor: "#939090",
        borderRadius: 10,
        ...SHADOWS.light,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: 15,
        }}
      >
        <View style={{ margin: 5, position: "relative" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 35,
              width: 35,
              borderRadius: 100,
              position: "absolute",
              top: 5,
              right: 5,
              zIndex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign
              name={data.isFavorite ? "heart" : "hearto"}
              size={24}
              color={data.isFavorite ? "red" : "red"}
            />
          </TouchableOpacity>
          <Image
            style={{
              height: 130,
              width: "100%",
              borderRadius: 15,
            }}
            source={image}
          />
        </View>
        <View style={{ marginHorizontal: 10, marginVertical: 0 }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: colors.darkPrimary,
              marginVertical: 3,
              fontFamily: FONTS.bold,
            }}
          >
            {data.name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 2,
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.font,
                fontWeight: "900",
                color: colors.darkSecondary,
                fontFamily: "OpenSansRegular",
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "500" }}>From </Text>N
              {data.price}
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              onPress={() => navigation.navigate("ListItemDetails", { data })}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "800",
                  color: colors.darkSecondary,
                }}
              >
                Details
              </Text>
              <AntDesign name="right" size={12} color={colors.darkSecondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
