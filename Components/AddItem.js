import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import styles from "../Styles";
import ListContainer from "./List/ListContainer";

export default function AddItem() {
  const [textItem, setTextItem] = useState();
  const [priceItem, setPriceItem] = useState();
  const [listItem, setListItem] = useState([]);
  const [ItemCount, setItemCount] = useState(0);

  const onHandlerChangeItem = (texto) => {
    setTextItem(texto);
  };
  const onHandlerChangePrice = (precio) => {
    setPriceItem(precio);
  };

  const addItem = () => {
    let contador = ItemCount + 1;
    if (textItem != "" && priceItem != "") {
      setListItem([...listItem, { id: contador, value: textItem, price: priceItem }]);
      setItemCount(contador);
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
