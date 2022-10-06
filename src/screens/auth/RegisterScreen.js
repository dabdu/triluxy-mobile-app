import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { logo, colors, image1 } from "../../../constants/theme";
import { InputField, LoadingBtn, SecBtn } from "../../components/Forms";
import { MainHeading } from "../../components/Typography";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { Spinner } from "../../components";
import baseURL from "../../../constants/baseURL";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onSignUp = () => {
    setLoading(true);
    if (fullName === "" || email === "" || phone === "" || password === "") {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Empty Fields",
        text2: "Please Filled all Fields",
      });
      setLoading(false);
    } else {
      let user = {
        name: fullName,
        email: email,
        phoneNumber: phone,
        password: password,
        userRole: "User",
        userStatus: "active",
      };
      axios
        .post(`${baseURL}/user/register`, user)
        .then((res) => {
          if (res.status == 201) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "User Register Succesfully",
              text2: "Please Login",
            });
            setLoading(false);
            setTimeout(() => {
              navigation.navigate("LoginScreen");
            }, 500);
            // navigation.navigate("FlightHome");
            // setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Something Went wrong",
            text2: "Please Try Again",
          });
          setLoading(false);
        });
    }
  };
  // if (loading) return <Spinner />;
  return (
    <View
      style={{
        height: "100%",
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View style={{ width: "100%", marginTop: 20 }}>
        <Image source={image1} style={{ height: 250, width: "100%" }} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ marginVertical: 20 }}>
          <MainHeading title={"SignUp"} marginVertical={5} />
          <Text
            style={{
              fontFamily: "OpenSansBold",
              textAlign: "center",
              color: colors.secondary,
            }}
          >
            Already have an Account?{" "}
            <Text
              style={{
                fontSize: 16,
                color: colors.primary,
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              {" "}
              Sign In
            </Text>
          </Text>
        </View>
        <View style={{ width: "100%", zIndex: 20 }}>
          <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
          >
            <InputField
              value={fullName}
              placeholder="Enter Your Name"
              Icon={AntDesign}
              iconName="user"
              setInput={setFullName}
            />
            <InputField
              value={email}
              placeholder="Enter Your Email"
              Icon={MaterialIcons}
              iconName="email"
              setInput={setEmail}
              type={"email-address"}
            />
            <InputField
              value={phone}
              placeholder="Enter Your Phone Number"
              Icon={Feather}
              iconName="phone-call"
              setInput={setPhone}
              type={"numeric"}
            />
            <InputField
              value={password}
              placeholder="Password"
              Icon={AntDesign}
              iconName="lock1"
              setInput={setPassword}
              password
            />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Ionicons
                name="checkmark-done-circle-sharp"
                size={24}
                color={colors.secondary}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: "OpenSansMedium",
                  fontWeight: "700",
                }}
              >
                By continuing you agree to our Terms and condition and the
                privacy Policy
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              {loading ? (
                <LoadingBtn />
              ) : (
                <SecBtn text={"Sign Up"} onBtnPress={onSignUp} />
              )}
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
