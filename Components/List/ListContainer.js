import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ModalItem from "../Modal";
import ListItem from "./ListItem";

export default function ListContainer(props) {
  const { listItem, setListItem, navigation } = props;
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerDelete = (id) => {
    console.log("Item Eliminado");
    setListItem((currenItems) => currenItems.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(listItem.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.listadoItems}>
        <Text style={styles.tituloLista}>ARTÍCULOS EN MI LISTA</Text>

        <ListItem onHandlerModal={onHandlerModal} listItem={listItem} navigation={navigation} />
      </View>

      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal} />
    </>
  );
}

const styles = StyleSheet.create({
  listadoItems: {
    borderTopColor: "#00bcaa",
    borderTopWidth: 3,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  tituloLista: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#00bcaa",
    fontSize: 20,
  },
});
