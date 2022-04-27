import React, { useEffect, useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ListContainer from "./List/ListContainer";

export default function AddItem({ navigation }) {
  let lista = useSelector((state) => state.lista.filteredList);
  let listaSeleccionada = useSelector((state) => state.todas.selected);

  console.log("<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>");
  console.log("LISTA SELECCIONADA: ", listaSeleccionada.list_items.length);
  console.log("LISTA: ", lista);

  const [textItem, setTextItem] = useState();
  const [priceItem, setPriceItem] = useState();
  const [location, setLocation] = useState();

  // ########## SETEO INICIALMENTE LOS ITEMS DE LA LISTA CON EL CONTENIDO DE LA LISTA SELECCIONADA
  // ########## SI NO EXISTE LISTA SELECCIONADA, VA COMO UN OBJETO VACÍO
  let inicial;
  listaSeleccionada = true ? (inicial = listaSeleccionada.list_items) : (inicial = {});
  const [listItem, setListItem] = useState(inicial);

  useEffect(() => {
    setListItem(inicial);
  }, [{ navigation }]);

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
    let contador = listItem.length + 1;
    if (textItem != "" && priceItem != "") {
      setListItem([...listItem, { id: contador, value: textItem, price: priceItem, lugar: location, foto: "https://s3-us-west-2.amazonaws.com/lasaga-blog/media/images/grupo_imagen.original.jpg" }]);
      setTextItem("");
      setPriceItem("");
      setLocation("");

      console.log("ITEM AGREGADOO > LISTA: " + listItem);
    }
  };

  useEffect(() => {
    setListItem(listItem);
  }, [listItem]);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
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
      </ScrollView>
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
