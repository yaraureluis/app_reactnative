import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./Components/Navigation";
import { Provider } from "react-redux";
import store from "./Components/store";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </View>
    </>
  );
}
