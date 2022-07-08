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
import { InputField, SecBtn } from "../../components/Forms";
import { MainHeading } from "../../components/Typography";

const LoginScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onSignIn = async () => {
    try {
      if (email && password === "") {
        // Thorw Error, and Continue other validations
      } else {
        //  Email Not Availibity
      }
      await console.log(email, password);
    } catch (error) {
      Alert.alert(error);
    }
  };
  return (
    <View
      style={{
        height: "100%",
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ width: "100%", marginTop: 30 }}>
        <Image source={image1} style={{ height: 250, width: "100%" }} />
      </View>
      <View style={{ marginVertical: 60, marginBottom: 30 }}>
        <MainHeading title={"Sign In"} marginVertical={5} />
        <Text
          style={{
            fontFamily: "OpenSansBold",
            textAlign: "center",
            color: colors.secondary,
          }}
        >
          Don't have an Account?{" "}
          <Text
            style={{
              fontSize: 16,
              color: colors.primary,
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
        <InputField
          value={email}
          placeholder="Enter Your Email"
          Icon={MaterialIcons}
          iconName="email"
          setInput={setEmail}
          type={"email-address"}
        />
        <InputField
          value={password}
          placeholder="Password"
          Icon={AntDesign}
          iconName="lock1"
          setInput={setPassword}
          type={"visible-password"}
        />
        <Text
          style={{
            color: "gray",
            fontFamily: "OpenSansBold",
            textAlign: "right",
            textDecorationLine: "underline",
            textDecorationColor: "gray",
          }}
          onPress={() => navigation.navigate("ForgetPassword")}
        >
          Forget Password?
        </Text>
        <View style={{ marginTop: 40 }}>
          <SecBtn text={"Login"} onBtnPress={onSignIn} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
