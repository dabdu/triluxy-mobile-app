import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../constants/theme";
import { OnBoardingScreen, WelcomeScreen } from "../screens";
import {
  ForgetPassword,
  LoginScreen,
  OTPScreen,
  RegisterScreen,
  VerificationScreen,
} from "../screens/auth";
import {
  FlightDetailsScreen,
  FlightHome,
  FlightSearchResult,
  FlightSearchScreen,
} from "../screens/flights";
import {
  HotelDetailsScreen,
  HotelHome,
  HotelSearchScreen,
  SearchResult,
} from "../screens/hotels";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"FlightHome"}
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

      {/* Flight Screens Ends Here */}
      <Stack.Screen name="FlightHome" component={FlightHome} />
      <Stack.Screen name="FlightSearchScreen" component={FlightSearchScreen} />
      <Stack.Screen name="FlightSearchResult" component={FlightSearchResult} />
      <Stack.Screen
        name="FlightDetailsScreen"
        component={FlightDetailsScreen}
      />
      {/* Flights Screen Ends HEre*/}
      {/* Hotel Screens Screens Ends Here */}
      <Stack.Screen name="HotelHome" component={HotelHome} />
      <Stack.Screen name="HotelSearchScreen" component={HotelSearchScreen} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="HotelDetailsScreen" component={HotelDetailsScreen} />
      {/* Hotel Screenss Screen Ends HEre*/}
    </Stack.Navigator>
  );
};

export default RootNavigator;
