import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constants/theme";
import RootNavigator from "./src/navigation";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import "react-native-get-random-values";
import AuthContextProvider, { useAuthContext } from "./context/AuthContext";
import HotelContextProvider from "./context/HotelContext";
import WalletContextProvider from "./context/WalletContext";
import RestaurantContextProvider from "./context/RestaurantContext";
import TaxiContextProvider from "./context/TaxiContext";
import CarContextProvider from "./context/CarContext";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
import { TransparentSpinner } from "./src/components";
import { useEffect } from "react";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  const [loaded] = useFonts({
    OpenSansExtraBold: require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
  });
  const { authUser } = useAuthContext();

  // useEffect(() => {
  //   if (authUser === null) {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: "LoginScreen" }],
  //     });
  //     console.log("APP MPUNT");
  //   }
  // }, []);
  // if (!authUser) return <TransparentSpinner />;
  console.log(authUser);
  if (!loaded) return null;
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <WalletContextProvider>
          <HotelContextProvider>
            <RestaurantContextProvider>
              <TaxiContextProvider>
                <CarContextProvider>
                  <StatusBar
                    backgroundColor={colors.secondary}
                    barStyle="light-content"
                  />
                  {/* {authUser !== null ? <AppStack /> : <AuthStack />} */}
                  {/* <RootNavigator /> */}
                  <AppNavigation />
                  <Toast />
                </CarContextProvider>
              </TaxiContextProvider>
            </RestaurantContextProvider>
          </HotelContextProvider>
        </WalletContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
