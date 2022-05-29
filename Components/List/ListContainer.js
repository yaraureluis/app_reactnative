import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ModalItem from "../Modal";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectListItem, deleteItem } from "../store/actions/listItem.action";

export default function ListContainer(props) {
  const { listItems, setListItems, navigation } = props;
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const onHandlerDelete = (id) => {
    console.log("Item Eliminado");
    dispatch(deleteItem(id));
    setListItems((currenItems) => currenItems.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(listItems.filter((item) => item.id === id)[0]);
    dispatch(selectListItem(id));
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.itemsList}>
        <Text style={styles.listTitle}>DESEOS EN MI LISTA</Text>

        <ListItem onHandlerModal={onHandlerModal} listItems={listItems} navigation={navigation} />
      </View>

      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal} navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    borderTopColor: "#00bcaa",
    borderTopWidth: 3,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  listTitle: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#00bcaa",
    fontSize: 20,
  },
});
