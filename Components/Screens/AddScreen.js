import react from "react";
import AddItem from "../AddItem";
import Header from "../Header";

export default function AddScreen({ navigation }) {
  return (
    <>
      <Header texto={"Wish List!"} />
      <AddItem navigation={navigation} />
    </>
  );
}
