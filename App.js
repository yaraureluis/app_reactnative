import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import AddItem from "./Components/AddItem";
import WelcomeScreen from "./Components/WelcomeScreen";

export default function App() {
  const [viendoLista, setViendoLista] = useState(false);

  const onHandleClick = () => {
    setViendoLista(true);
  };

  const onHandleClickBack = () => {
    setViendoLista(false);
  };

  let screen = <WelcomeScreen onHandleClick={onHandleClick} />;

  if (viendoLista)
    screen = (
      <>
        <Header texto={"Wish List!"} onHandleClickBack={onHandleClickBack} />
        <AddItem />
      </>
    );
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>{screen}</View>
    </>
  );
}
