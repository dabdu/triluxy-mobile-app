import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { colors } from "./constants/theme";
import RootNavigator from "./src/navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    OpenSansExtraBold: require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <RootNavigator />
    </NavigationContainer>
  );
}
