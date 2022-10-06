import { createStackNavigator } from "@react-navigation/stack";
import { OnBoardingScreen, WelcomeScreen } from "../screens";
import {
  ForgetPassword,
  LoginScreen,
  OTPScreen,
  RegisterScreen,
  VerificationScreen,
} from "../screens/auth";
import { HotelHome } from "../screens/hotels";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"LoginScreen"}
    >
      {/* Auth Screens Starts Here */}
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      {/* Auth Screen Ends HEre*/}
      <Stack.Screen name="HotelHome" component={HotelHome} />
    </Stack.Navigator>
  );
};

export default AuthStack;
