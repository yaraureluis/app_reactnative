import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import AddScreen from "../Screens/AddScreen";
import DetailScreen from "../Screens/DetailScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerStyle: { backgroundColor: "#F79D9D" }, headerTintColor: "white" }} />
          <Stack.Screen name="List" component={AddScreen} options={{ headerStyle: { backgroundColor: "#FFD4D4" }, headerTintColor: "white" }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerStyle: { backgroundColor: "#FFD4D4" }, headerTintColor: "white" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
