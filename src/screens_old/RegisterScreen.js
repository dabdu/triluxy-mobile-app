import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { SemiRounded } from "../components";
// import { image1 } from "../../constants/theme";
import image1 from "../../constants/images/image1.png";
import { colors, CustomInput } from "../../constants/theme";
import { PrimaryBtn } from "../components/Forms";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <SemiRounded>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={image1}
            style={{ height: 200, width: 200 }}
            resizeMode="contain"
          />
        </View>
      </SemiRounded>
      <View
        style={{
          //   width: "100%",
          marginVertical: 30,
          marginHorizontal: 20,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: colors.darkPrimary,
              fontWeight: "600",
              fontSize: 35,
              marginBottom: 8,
              fontFamily: "OpenSansBold",
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              color: colors.secondary,
              fontWeight: "600",
              fontSize: 16,
              marginBottom: 10,
              fontFamily: "OpenSansMedium",
            }}
          >
            Already Have an Account?{" "}
            <Text
              style={{
                color: colors.primary,
                textDecorationStyle: "solid",
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Login
            </Text>
          </Text>
        </View>

        <View>
          <TextInput style={CustomInput} placeholder="Full Name" />
          <TextInput style={CustomInput} placeholder="Email" />
          <TextInput style={CustomInput} placeholder="Password" />

          <PrimaryBtn text={"Sign Up"} />

          <Text
            style={{
              textAlign: "center",
              color: colors.primary,
              fontSize: 20,
              fontFamily: "OpenSansMedium",
              fontWeight: "600",
            }}
          >
            Forget Password ?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
