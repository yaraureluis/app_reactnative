import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./Components/Navigation";
import { Provider } from "react-redux";
import store from "./Components/store";
import { init, insertNewList, SelectListas, deleteList } from "./db/index.js";

init()
  .then(() => {
    console.log("Database initialized.");
  })
  .catch((err) => {
    console.log("Database fail connection: " + err.message);
  });

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
