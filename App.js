import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import MainScreen from "./Components/MainScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <Header texto={"MI LISTA DE COMPRAS"} />
        <MainScreen />
      </View>
    </>
  );
}
