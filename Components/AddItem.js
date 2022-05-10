import React, { useEffect, useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ListContainer from "./List/ListContainer";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

export default function AddItem({ navigation }) {
  let lista = useSelector((state) => state.lista.filteredList); //NO SE PARA QUE ES TODAVIA
  let listaSeleccionada = useSelector((state) => state.todas.selected); //TRAE LA LISTA SELECCIONADA, SEA CON ITEMS O VACÍA SI ES NUEVA

  console.log("<<<<<<<<<<<<<<<<<<<ADD ITEM>>>>>>>>>>>>>>>>");
  console.log("<<LISTA SELECCIONADA>>", listaSeleccionada);
  console.log("LISTA: ", lista); //NO SE PARA QUE ES TODAVIA

  // VALORES QUE SE INGRESAN EN EL INPUT, LUEGO DEBO CAMBIAR LOCATION
  const [textItem, setTextItem] = useState();
  const [priceItem, setPriceItem] = useState();
  const [location, setLocation] = useState();

  // ########## SETEO INICIALMENTE LOS ITEMS DE LA LISTA CON EL CONTENIDO DE LA LISTA SELECCIONADA
  // ########## SI NO EXISTE LISTA SELECCIONADA, VA COMO UN OBJETO VACÍO
  let inicial = listaSeleccionada.list_items;
  listaSeleccionada.list_items != undefined ? (inicial = listaSeleccionada.list_items) : (inicial = []);
  const [listItem, setListItem] = useState(inicial);

  // CADA VEZ QUE SALGO DE ESTE SCREEN, SETEO listItem a su valor inicial, por ahora no tengo persistencia
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

  // #############################################################################################
  // ############################ LÓGICA PARA AGREGAR IMAGEN #####################################
  const [pickerURI, setPickerURI] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      Alert.alert("Permisos Insuficientes", "La app necesita acceder a la cámara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOK = await verifyPermissions();
    if (!isCameraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickerURI(image.uri);
  };
  // ME FALTA LA LOGICA PARA GUARDAR LA IMAGEN, GUARDAR EL NUEVO ITEM EN LA LISTA, QUE TENGA PERSISTENCIA
  // YA SEA EN EL MISMO TELEFONO (FILE SYSTEM) O EN FIREBASE
  // #############################################################################################

  const addItemList = () => {
    console.log("LENGTH >>>", listItem);
    let contador;
    listItem.length === 0 ? (contador = listItem.length + 1) : (contador = 1);
    if (textItem != "" && priceItem != "") {
      setListItem([...listItem, { id: contador, value: textItem, price: priceItem, lugar: location, foto: pickerURI }]);
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
              <Button title="Agregar FOTO" color="#F79D9D" onPress={handlerTakeImage} />
            </View>
            <View style={styles.btn1}>
              <Button title="Agregar Artículo" color="#F79D9D" onPress={addItemList} />
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
