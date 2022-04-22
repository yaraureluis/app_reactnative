import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import ListContainer from "./List/ListContainer";

export default function AddItem({ navigation }) {
  const [textItem, setTextItem] = useState();
  const [priceItem, setPriceItem] = useState();
  const [location, setLocation] = useState();
  const [listItem, setListItem] = useState([]);
  const [ItemCount, setItemCount] = useState(0);

  const onHandlerChangeItem = (texto) => {
    setTextItem(texto);
  };
  const onHandlerChangePrice = (precio) => {
    setPriceItem(precio);
  };
  const onHandlerChangeLocation = (lugar) => {
    setLocation(lugar);
  };

  const addItem = () => {
    let contador = ItemCount + 1;
    if (textItem != "" && priceItem != "") {
      setListItem([...listItem, { id: contador, value: textItem, price: priceItem }]);
      setItemCount(contador);
      setTextItem("");
      setPriceItem("");
      setLocation("");
    }
  };

  return (
    <>
      <View>
        <View style={styles.listado}>
          <Text style={styles.textNormal}>NUEVO ARTÍCULO</Text>
          <TextInput style={styles.textInputs} placeholder="Nombre" value={textItem} onChangeText={onHandlerChangeItem} />
          <TextInput style={styles.textInputs} placeholder="Precio" value={priceItem} onChangeText={onHandlerChangePrice} />
          <TextInput style={styles.textInputs} placeholder="Lugar" value={location} onChangeText={onHandlerChangeLocation} />
          <View style={styles.btnContainer}>
            <View style={styles.btn1}>
              <Button title="Agregar foto" color="#F79D9D" />
            </View>
            <View style={styles.btn1}>
              <Button title="Agregar ARTÍCULO" color="#F79D9D" onPress={addItem} />
            </View>
          </View>
        </View>
        <ListContainer listItem={listItem} setListItem={setListItem} navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  listado: {
    backgroundColor: "#5fcdcf",
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  textNormal: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  textInputs: {
    backgroundColor: "white",
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#F79D9D",
    borderRadius: 5,
    width: 320,
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn1: {
    width: 150,
    marginHorizontal: 5,
  },
});
