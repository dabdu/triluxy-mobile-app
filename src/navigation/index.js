import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../constants/theme";
import { OnBoardingScreen, WelcomeScreen } from "../screens";
import {
  BookedCarDetails,
  ManageBooking,
  ManageCarRentals,
  ManageDishesOrders,
  ManageRestaurantReservations,
  ManageTaxiBookings,
  MenuOrderDetails,
  OrdersDetails,
  RestaurantBookingDetails,
} from "../screens/Bookings";
import {
  ForgetPassword,
  LoginScreen,
  OTPScreen,
  ProfileScreen,
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
  HotelBookingScreen,
  HotelDetailsScreen,
  HotelHome,
  HotelPaymentScreen,
  HotelSearchScreen,
  SearchResult,
  SelectRoomScreen,
} from "../screens/hotels";
import {
  CarDetailsScreen,
  CarHome,
  CarInfoScreen,
  CarPaymentScreen,
  CarSearchResult,
  CarSearchScreen,
} from "../screens/cars";
import {
  BankTransferScreen,
  PaymentScreen,
  PaypalScreen,
  UseCardScreen,
  WalletIndexScreen,
} from "../screens/wallet";
import {
  ChooseRide,
  TaxiDetailsScreen,
  TaxiHome,
  TaxiPayment,
  TaxiSearchResult,
  TaxiSearchScreen,
} from "../screens/taxi";
import { useAuthContext } from "../../context/AuthContext";
import {
  BasketPaymentScreen,
  BasketScreen,
  FoodMenuIndexScreen,
  ResSearchResult,
  RestaurantDetails,
  RestaurantHome,
  SingleRestaurant,
} from "../screens/restaurants";
// const Stack = createNativeStackNavigator();

const Stack = createStackNavigator();
const RootNavigator = () => {
  const { authUser } = useAuthContext();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"HotelHome"}
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
      <Stack.Screen name="SelectRoomScreen" component={SelectRoomScreen} />
      <Stack.Screen name="HotelBookingScreen" component={HotelBookingScreen} />
      <Stack.Screen name="HotelPaymentScreen" component={HotelPaymentScreen} />
      {/* Hotel Screenss Screen Ends HEre*/}
      {/* Car Screens Screens Ends Here */}
      <Stack.Screen name="CarHome" component={CarHome} />
      <Stack.Screen name="CarSearchScreen" component={CarSearchScreen} />
      <Stack.Screen name="CarSearchResult" component={CarSearchResult} />
      <Stack.Screen name="CarDetailsScreen" component={CarDetailsScreen} />
      <Stack.Screen name="CarPaymentScreen" component={CarPaymentScreen} />
      <Stack.Screen
        name="CarInfoScreen"
        component={CarInfoScreen}
        options={{
          headerShown: true,
          headerBackTitle: false,
          headerTitle: "Car Info",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      {/* Car Screenss Screen Ends HEre*/}
      {/* Taxi Screens Screens Ends Here */}
      <Stack.Screen name="TaxiHome" component={TaxiHome} />
      <Stack.Screen name="TaxiSearchScreen" component={TaxiSearchScreen} />
      <Stack.Screen name="ChooseRide" component={ChooseRide} />
      <Stack.Screen name="TaxiSearchResult" component={TaxiSearchResult} />
      <Stack.Screen name="TaxiDetailsScreen" component={TaxiDetailsScreen} />
      <Stack.Screen name="TaxiPayment" component={TaxiPayment} />
      {/* Taxi Screenss Screen Ends HEre*/}
      {/* Wallet Screens Screens Ends Here */}
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      {/* Wallet Screenss Screen Ends HEre*/}
      {/* Wallet Screens Screens Ends Here */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      {/* Wallet Screenss Screen Ends HEre*/}
      {/* Bookings Screens Screens Ends Here */}
      <Stack.Screen
        name="ManageBooking"
        component={ManageBooking}
        options={{
          headerShown: true,
          headerBackTitle: false,
          headerTitle: "Manage Bookings",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="ManageRestaurantReservations"
        component={ManageRestaurantReservations}
        options={{
          headerShown: true,
          headerTitle: "Restaurant Reservations",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="ManageDishesOrders"
        component={ManageDishesOrders}
        options={{
          headerShown: true,
          headerTitle: "Dishes Orders",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="ManageCarRentals"
        component={ManageCarRentals}
        options={{
          headerShown: true,
          headerTitle: "Car Rentals",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="ManageTaxiBookings"
        component={ManageTaxiBookings}
        options={{
          headerShown: true,
          headerTitle: "Taxi Bookings",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="RestaurantBookingDetails"
        component={RestaurantBookingDetails}
        options={{
          headerShown: true,
          headerTitle: "Reservation Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="OrdersDetails"
        component={OrdersDetails}
        options={{
          headerShown: true,
          headerTitle: "Orders Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="BookedCarDetails"
        component={BookedCarDetails}
        options={{
          headerShown: true,
          headerTitle: "Booking Details",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      {/* Bookings Screenss Screen Ends HEre*/}
      {/* Restaurants Screens Screens Ends Here */}
      <Stack.Screen name="RestaurantHome" component={RestaurantHome} />
      <Stack.Screen name="ResSearchResult" component={ResSearchResult} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      <Stack.Screen
        name="SingleRestaurant"
        component={SingleRestaurant}
        options={{
          headerShown: true,
          headerTitle: "Restaurant Details",
          headerTintColor: colors.secondary,
          // headerStyle: { backgroundColor: colors.secondary },
        }}
      />
      <Stack.Screen
        name="FoodMenuIndexScreen"
        component={FoodMenuIndexScreen}
      />
      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTintColor: colors.secondary,
        }}
      />
      <Stack.Screen
        name="BasketPaymentScreen"
        component={BasketPaymentScreen}
      />
      <Stack.Screen name="MenuOrderDetails" component={MenuOrderDetails} />

      {/* Restaurants Screenss Screen Ends HEre*/}

      {/* Wallet Screens Starts Here */}
      <Stack.Screen name="WalletIndexScreen" component={WalletIndexScreen} />
      <Stack.Screen name="PaypalScreen" component={PaypalScreen} />
      <Stack.Screen name="UseCardScreen" component={UseCardScreen} />
      <Stack.Screen
        name="BankTransferScreen"
        component={BankTransferScreen}
        options={{
          headerShown: true,
          headerTitle: "Bank Transfer",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.secondary },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
