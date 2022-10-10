import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CarDetailsScreen,
  CarHome,
  CarInfoScreen,
  CarPaymentScreen,
  CarSearchResult,
  CarSearchScreen,
} from "../screens/cars";

const CarStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
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
    </>
  );
};

export default CarStack;
