import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CompleteListScreen from "../Screens/CompleteListScreen";

const Stack = createNativeStackNavigator();

const CompleteListNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Todas mis listas">
        <Stack.Screen name="Mis listas" component={CompleteListScreen} options={{ headerStyle: { backgroundColor: "#F79D9D" }, headerTintColor: "white" }} />
      </Stack.Navigator>
    </>
  );
};

export default CompleteListNavigation;
