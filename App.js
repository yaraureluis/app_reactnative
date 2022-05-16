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
// async function test() {
//   try {
//     await init();
//     // await insertNewList("15/05/2022", "ENSAYO");
//     // let select_listas = await SelectListas();
//     // console.log(select_listas);
//     // await deleteList(2);
//     let select_listas2 = await SelectListas();
//     console.log("SELECT2", select_listas2);
//   } catch (err) {
//     console.log("Database fail connection: " + err.message);
//   }
// }

// test();
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
