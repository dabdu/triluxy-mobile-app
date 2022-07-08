import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { colors, headerImg, SHADOWS } from "../../../constants/theme";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ placeholder, active, searchPath }) => {
  const navigation = useNavigation();
  const image = { uri: headerImg };
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colors.secondary,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Image */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://stockphoto.com/samples/MzQyNTI0MjUwMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/happy-smiling--man-with-glasses-leaning-against-brick-wall-.jpg&size=1024",
              }}
              style={{ height: 45, width: 45, borderRadius: 100 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "OpenSansBold",
                color: colors.primary,
                marginLeft: 8,
              }}
            >
              Hi, Stella
            </Text>
          </View>
          {/* Icon */}
          <View style={{ position: "relative" }}>
            <Entypo
              name="dot-single"
              size={40}
              color="red"
              style={{ position: "absolute", right: -3, top: -12, zIndex: 1 }}
            />
            <Ionicons name="notifications-outline" size={30} color={"white"} />
          </View>
        </View>
        <Text style={{ color: "white", marginVertical: 5 }}>
          What do you want to do today?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/7b1d/a6e3/b5ffe5b9d2c1e65952fb1de7362f5bcd?Expires=1657497600&Signature=h3ltqtM0W9V18oFALWBbzVKh0XNYZoV~lmBYFDiNHqATJqyu1JzCR4WzE0dx-4QEYRnVCdw~xabEQJHOj8yravGBFkyS9noQ68wJSX~BaRG1i7da6idcJOEML4fORfLoN~v2S~XthS88rbEYH4Jh3vGemwfTl7sXsvppbqWFPZkFnbRHAi536u4ykwv9c5Tki3HISbXA6Ik5VGPA-2-q~OJwZMPl3f8IyrL8FGRZE8ZsiokaYXxDnX0ySTT3FeiJvVP6thaKhc1Q9b6QtoxNOP8tS9k7~2z6VKFvKSxoCGkDyCwv653i5-Ae-04wxCahxSq7GgWQ9XXBt0hzdfFXtg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        }}
        style={{
          height: 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "80%" }}>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 10,
              ...SHADOWS.dark,
            }}
            onPress={() => navigation.navigate(searchPath)}
          >
            <Ionicons
              name="md-search-circle-sharp"
              size={30}
              color={colors.darkSecondary}
            />
            <Text style={{ color: "gray", marginLeft: 5 }}>{placeholder}</Text>
          </TouchableOpacity>
          {/* <InputField
            // value={email}
            placeholder={placeholder}
            Icon={AntDesign}
            iconName="search1"
            // setInput={setEmail}
            background="white"
            noBorder
          /> */}
        </View>
      </ImageBackground>
      {/* Icons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginVertical: 2,
        }}
      >
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("FlightHome")}
        >
          <MaterialIcons
            name="flight"
            size={30}
            color={active === "flight" ? colors.primary : "white"}
          />
          <Text
            style={[
              styles.text,
              { color: active === "flight" ? colors.primary : "white" },
            ]}
          >
            Flights
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("HotelHome")}
        >
          <FontAwesome5
            name="hotel"
            size={30}
            color={active === "hotel" ? colors.primary : "white"}
          />
          <Text
            style={[
              styles.text,
              { color: active === "hotel" ? colors.primary : "white" },
            ]}
          >
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign
            name="car"
            size={30}
            color={active === "car" ? colors.primary : "white"}
          />
          <Text
            style={[
              styles.text,
              { color: active === "car" ? colors.primary : "white" },
            ]}
          >
            Car Rental
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome
            name="taxi"
            size={30}
            color={active === "taxi" ? colors.primary : "white"}
          />
          <Text
            style={[
              styles.text,
              { color: active === "taxi" ? colors.primary : "white" },
            ]}
          >
            Airport Taxi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
    marginVertical: 5,
  },
});
