import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Footer from "../../components/Layouts/Footer";
import { colors, FONTS, SIZES } from "../../../constants/theme";
import { useAuthContext } from "../../../context/AuthContext";
import { Spinner, TransparentSpinner } from "../../components";
import { MenuItem } from "../../components/auth-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useEffect } from "react";
import { S3Image } from "aws-amplify-react-native";
import { useTaxiContext } from "../../../context/TaxiContext";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { authUser, onLogout, isLoading } = useAuthContext();
  const { driver } = useTaxiContext();
  console.log(driver);
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
            <S3Image
              imgKey={authUser?.profileImg}
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
            {authUser?.userRole === "carRentor" && (
              <>
                <MenuItem
                  Icon={MaterialCommunityIcons}
                  iconName={"car"}
                  text={"Manage Car Details"}
                  path={"UserManageCars"}
                />
                <MenuItem
                  Icon={MaterialCommunityIcons}
                  iconName={"car-2-plus"}
                  text={"Add New Car"}
                  path={"AddCarDetails"}
                />
              </>
            )}
            {authUser?.userRole === "taxiDriver" && (
              <>
                <MenuItem
                  Icon={FontAwesome}
                  iconName={"taxi"}
                  text={"Manage Your Taxi"}
                  path={"TaxiManageCar"}
                />
              </>
            )}
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
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
                marginVertical: 5,
              }}
              onPress={onLogout}
            >
              <View>
                <AntDesign name={"logout"} color={colors.primary} size={28} />
              </View>
              <Text
                style={{
                  marginLeft: 12,
                  fontSize: SIZES.small,
                  color: colors.darkPrimary,
                  fontFamily: FONTS.semiBold,
                }}
              >
                {"Logout"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer active={"profile"} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
