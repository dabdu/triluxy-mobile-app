import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Footer from "../../components/Layouts/Footer";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { useAuthContext } from "../../../context/AuthContext";
import { Spinner, TransparentSpinner } from "../../components";
import { MenuItem } from "../../components/auth-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useEffect } from "react";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { authUser, onLogout, isLoading } = useAuthContext();
  // console.log(authUser);
  // if (!authUser) return <Spinner />;
  // const getUser = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("user");
  //     if (!jsonValue) {
  //       console.log("error from aysnc");
  //       // navigation.navigate("LoginScreen");
  //       // navigation.reset({
  //       //   index: 0,
  //       //   routes: [{ name: "LoginScreen" }],
  //       // });
  //     } else {
  //       console.log(JSON.parse(jsonValue));
  //     }
  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log(e);
  //     // error reading value
  //   }
  // };
  useEffect(() => {
    // console.log("mounted");
    console.log(authUser);
    // getUser();
  }, []);
  if (isLoading) return <TransparentSpinner />;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView>
        {/* Header */}
        <View style={{ position: "relative", alignItems: "center" }}>
          <View
            style={{
              height: 150,
              width: "100%",
              backgroundColor: colors.secondary,
            }}
          />
          <View>
            <Image
              source={{ uri: authUser?.profileImg }}
              style={{
                height: 150,
                width: 150,
                marginTop: -70,
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 6,
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: colors.darkPrimary,
                fontSize: SIZES.large,
                fontFamily: FONTS.bold,
              }}
            >
              {authUser?.name}
            </Text>
            <Text
              style={{
                color: colors.darkPrimary,
                fontSize: SIZES.medium,
                fontFamily: FONTS.semiBold,
              }}
            >
              {authUser?.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            marginHorizontal: 17,
            paddingHorizontal: 15,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            borderColor: colors.darkGray,
            borderWidth: 1,
          }}
        >
          <View style={{ width: "100%" }}>
            <MenuItem
              Icon={FontAwesome}
              iconName={"user-circle"}
              text={"Manage Account"}
              path={"ManageAccountScreen"}
            />
            <MenuItem
              Icon={FontAwesome}
              iconName={"user-circle"}
              text={"Manage Account"}
              path={"ManageAccountScreen"}
            />
            <MenuItem
              Icon={FontAwesome}
              iconName={"user-circle"}
              text={"Manage Account"}
              path={"ManageAccountScreen"}
            />
            <MenuItem
              Icon={FontAwesome}
              iconName={"user-circle"}
              text={"Manage Account"}
              path={"ManageAccountScreen"}
            />
            <MenuItem
              Icon={AntDesign}
              iconName={"logout"}
              text={"Logout"}
              onPress={onLogout}
            />
          </View>
        </View>
      </ScrollView>
      <Footer active={"profile"} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
