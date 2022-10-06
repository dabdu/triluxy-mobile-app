import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../../context/AuthContext";
import { TransparentSpinner } from "../components";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";

const AppNavigation = () => {
  const { authUser, splashLoading } = useAuthContext();
  const Stack = createNativeStackNavigator();
  return (
    <>
      {splashLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : authUser ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
};

export default AppNavigation;
