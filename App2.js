import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput, FlatList, Modal } from "react-native";
import styles from "./styles";
import ModalItem from "./Components/Modal";
export default function App() {
  const [textItem, setTextItem] = useState();
  const [listItem, setListItem] = useState([{ id: 1, value: "Carlos" }]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (texto) => {
    setTextItem(texto);
  };
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
  const addItem = () => {
    if (textItem != "") {
      setListItem((items) => [...items, { id: items[items.length - 1].id + 1, value: textItem }]);
      setTextItem("");
    }
  };
  const renderItem = (data) => (
    <Text style={styles.textNormal} onPress={onHandlerModal.bind(this, data.item.id)}>
      {data.item.id}: {data.item.value}
    </Text>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>ARMA TU LISTA DE COMPRAS</Text>
      </View>
      <View style={styles.listado}>
        <Text style={styles.textNormal}>PRODUCTO</Text>
        <TextInput style={styles.textInputs} placeholder="Nombre" value={textItem} onChangeText={onHandlerChangeItem} />
        {/* <TextInput style={styles.textInputs} placeholder="Marca" />
        <TextInput style={styles.textInputs} placeholder="Precio" />
        <TextInput style={styles.textInputs} placeholder="Foto" /> */}
        <Button title="Agregar" onPress={addItem}></Button>
      </View>
      <View style={styles.listado}>
        <Text style={styles.textNormal}>MI LISTADO DE PRODUCTOS</Text>
        <FlatList data={listItem} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <View style={styles.addBtn}>
        <Text style={styles.addBtnText}>+</Text>
      </View>
      <StatusBar style="auto" />
      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal} />
    </View>
  );
}
