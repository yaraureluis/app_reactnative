import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompleteListScreen from "../Screens/CompleteListScreen";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();

const CompleteListNavigation = () => {
  const LogoTitle = () => {
    return <Image style={{ width: 50, height: 50, resizeMode: "contain" }} source={require("../../assets/img/logo_patilla_blanco.png")} />;
  };

  return (
    <>
      <Stack.Navigator initialRouteName="Todas mis listas" screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Mis listas" component={CompleteListScreen} options={{ headerStyle: { backgroundColor: "#F79D9D" }, headerTintColor: "white", headerTitle: () => <LogoTitle /> }} />
      </Stack.Navigator>
    </>
  );
};

export default CompleteListNavigation;
