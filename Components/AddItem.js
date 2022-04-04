import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, Separator } from "react-native";
import styles from "../Styles";
import ListContainer from "./List/ListContainer";

export default function AddItem() {
  const [textItem, setTextItem] = useState();
  const [priceItem, setPriceItem] = useState();
  const [listItem, setListItem] = useState([{ id: 1, value: "Detergente", price: 300 }]);

  const onHandlerChangeItem = (texto) => {
    setTextItem(texto);
  };
  const onHandlerChangePrice = (precio) => {
    setPriceItem(precio);
  };

  const addItem = () => {
    if (textItem != "" && priceItem != "") {
      setListItem((items) => [...items, { id: items[items.length - 1].id + 1, value: textItem, price: priceItem }]);
      setTextItem("");
      setPriceItem("");
    }
  };

  return (
    <>
      <View>
        <View style={styles.listado}>
          <Text style={styles.textNormal}>NUEVO ARTÍCULO</Text>
          <TextInput style={styles.textInputs} placeholder="Nombre" value={textItem} onChangeText={onHandlerChangeItem} />
          <TextInput style={styles.textInputs} placeholder="Precio" value={priceItem} onChangeText={onHandlerChangePrice} />
          <View style={styles.btnContainer}>
            <View style={styles.btn1}>
              <Button title="Foto" color="#65c4c9" />
            </View>
            <View style={styles.btn1}>
              <Button title="Agregar" color="#00bcaa" onPress={addItem} />
            </View>
          </View>
        </View>
        <ListContainer listItem={listItem} setListItem={setListItem} />
      </View>
    </>
  );
}
