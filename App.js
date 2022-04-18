import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppNavigation from "./Components/Navigation/AppNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        {/* aca va el contenido */}
        <AppNavigation />
      </View>
    </>
  );
}
