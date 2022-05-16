import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import AddScreen from "../Screens/AddScreen";
import DetailScreen from "../Screens/DetailScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const LogoTitle = () => {
    return <Image style={{ width: 50, height: 50, resizeMode: "contain" }} source={require("../../assets/img/logo_patilla_blanco.png")} />;
  };
  return (
    <>
      <Stack.Navigator initialRouteName=" " screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name=" " component={WelcomeScreen} options={{ headerStyle: { backgroundColor: "#F79D9D" }, headerTintColor: "white" }} />
        <Stack.Screen name="List" component={AddScreen} options={{ headerStyle: { backgroundColor: "#F79D9D" }, headerTintColor: "white", headerTitle: () => <LogoTitle /> }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerStyle: { backgroundColor: "#F79D9D" }, headerTintColor: "white", headerTitle: () => <LogoTitle /> }} />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigation;
