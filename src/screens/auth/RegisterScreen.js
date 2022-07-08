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

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onSignUp = async () => {
    try {
      if (fullName === "" && email && password === "") {
        // Thorw Error, and Continue other validations
      } else {
        //  Email Availibity
      }
      await console.log(fullName, email, password);
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
      <View style={{ marginVertical: 30 }}>
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
      <View style={{ width: "100%", paddingHorizontal: 30 }}>
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
          value={password}
          placeholder="Password"
          Icon={AntDesign}
          iconName="lock1"
          setInput={setPassword}
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
            By continuing you agree to our Terms and condition and the privacy
            Policy
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <SecBtn text={"Sign Up"} onBtnPress={onSignUp} />

          <Text
            style={{
              fontFamily: "OpenSansMedium",
              textAlign: "center",
              color: colors.primary,
              textDecorationLine: "underline",
              fontWeight: "700",
            }}
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            Forget Password?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
