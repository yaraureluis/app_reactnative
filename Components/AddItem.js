import React, { useEffect, useState, useLayoutEffect } from "react";
import { Text, View, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "./List/ListContainer";
import { addItemtoWishList } from "./store/actions/listItem.action";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import * as Location from "expo-location";
import MapPreview from "./MapPreview";
import MapView, { Marker } from "react-native-maps";
// import { useFocusEffect } from "@react-navigation/native";

export default function AddItem({ navigation }) {
  const dispatch = useDispatch();
  let listaSeleccionada = useSelector((state) => state.todas.selected); //TRAE LA LISTA SELECCIONADA PARA UTILIZAR SU ID
  let deseos_seleccionados = useSelector((state) => state.lista.deseos_seleccionados); // TRAE TODOS LOS DESEOS POR ID_REL
  console.log("LISTA SELECCIONADA ADDITEM LINEA 13", listaSeleccionada);
  console.log("DESEOS SELECCIONADOS ADDITEM LINEA 14", deseos_seleccionados);

  // VALORES QUE SE INGRESAN EN EL INPUT, LUEGO DEBO CAMBIAR LOCATION
  const [textItem, setTextItem] = useState();
  const [priceItem, setPriceItem] = useState();

  //------------SETEO INICIALMENTE LOS ITEMS DE LA LISTA CON EL CONTENIDO DE LA LISTA SELECCIONADA-------/
  let inicial = [];
  inicial = deseos_seleccionados;
  const [listItems, setListItems] = useState(inicial);

  useEffect(() => {
    setListItems(inicial);
  }, [{ navigation }]);

  const onHandlerChangeItem = (texto) => {
    setTextItem(texto);
  };
  const onHandlerChangePrice = (precio) => {
    setPriceItem(precio);
  };

  // ------------------------------------- LÓGICA PARA AGREGAR IMAGEN -------------------------------------/
  const [pickerURI, setPickerURI] = useState();

  const verifyPermissionsCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      Alert.alert("Permisos Insuficientes", "La app necesita acceder a la cámara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOK = await verifyPermissionsCamera();
    if (!isCameraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickerURI(image.uri);
  };

  // ----------------------------------- LÓGICA PARA AGREGAR DIRECCIÓN ------------------------------------/
  const [pickedLocation, setPickedLocation] = useState();
  const [mainLocation, setMainLocation] = useState();

  // --------- ESTADO PARA MOSTRAR LA VISTA PREVIA DEL MAPA, O EL MAPA PARA ELEGIR LA UBICACIÓN --------- /
  const [showMapPreview, setShowMapPreview] = useState(false);
  const [showMapPicker, setShowMapPicker] = useState(false);

  const verifyPermission = async () => {
    const status = await Location.requestForegroundPermissionsAsync();
    console.log("STATUS PERMISOS LOCATION", status);
    if (status.status != "granted") {
      Alert.alert("Permisos insuficientes.", "Necesita dar permisos de ubicacion para utilizar esta aplicacion.", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  //-------------------- ELEMENTOS PARA SELECCIONAR UBICACION DEL USUARIO -------/
  const handlerGeoLocation = async () => {
    const isLocationOk = await verifyPermission();
    if (!isLocationOk) return;

    setShowMapPreview(true); // MUESTRO LA VISTA PREVIA DEL MAPA
    setShowMapPicker(false); // OCULTO LA VISTA PREVIA DEL MAPA NAVEGABLE

    const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
    console.log("LOCATION EN ADDITEM LINEA 100:", location);
    setMainLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
    setPickedLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
    console.log("LATITUD Y LONGITUD MAPPREVIEW.JS LINEA 84", location.coords.latitude, location.coords.longitude);
  };

  //-------------------- ELEMENTOS PARA SELECCIONAR UBICACION DEL MAPA -------/
  const handlerPickOnMap = async () => {
    setShowMapPicker(true); // MUESTRO LA VISTA PREVIA DEL MAPA NAVEGABLE
    setShowMapPreview(false); // OCULTO LA VISTA PREVIA DEL MAPA

    const isLocationOK = await verifyPermission();
    if (!isLocationOK) return;
  };
  const [selectedLocationOnMap, setSelectedLocationOnMap] = useState();
  const initialRegion = {
    latitude: -34.61315,
    longitude: -58.37723,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handlerSelectLocation = (event) => {
    setSelectedLocationOnMap({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
    setPickedLocation({ lat: event.nativeEvent.coordinate.latitude, lng: event.nativeEvent.coordinate.longitude });
    setMainLocation({ lat: event.nativeEvent.coordinate.latitude, lng: event.nativeEvent.coordinate.longitude });
  };

  const MapPickerAreaView = () => (
    <>
      <MapView initialRegion={initialRegion} style={styles.containerMapView} onPress={handlerSelectLocation}>
        {selectedLocationOnMap && (
          <Marker
            title="Ubicacion Seleccionada"
            coordinate={{
              latitude: selectedLocationOnMap.lat,
              longitude: selectedLocationOnMap.lng,
            }}
          />
        )}
      </MapView>
    </>
  );

  const handlerSaveSelection = () => {
    if (setPickedLocation) {
      // oculto el mapita
      setShowMapPicker(false);
      setShowMapPreview(false);
    }
  };
  // -------------------------------- FIN DE LÓGICA PARA AGREGAR DIRECCIÓN --------------------------------/

  const addItemList = () => {
    console.log("LENGTH >>>", listItems.length);
    if (textItem != "" && priceItem != "") {
      setListItems([...listItems, { title: textItem, price: priceItem, image: pickerURI, address: mainLocation, lat: mainLocation.lat, lng: mainLocation.lng, id_rel: listaSeleccionada.id }]);
      setTextItem("");
      setPriceItem("");
      // PASO LOS DATOS AL listItems.action para hacer push a la lista de ese nuevo articulo agregado
      dispatch(addItemtoWishList({ title: textItem, price: priceItem, image: pickerURI, address: mainLocation, lat: mainLocation.lat, lng: mainLocation.lng, id_rel: listaSeleccionada.id }));

      console.log("ITEM AGREGADOO > LISTA: " + listItems);
    }
  };

  useEffect(() => {
    setListItems(listItems);
  }, [listItems, showMapPicker, showMapPreview]);
  return (
    <>
      <ScrollView>
        <View style={styles.listado}>
          <Text style={styles.textNormal}>NUEVO ARTÍCULO</Text>
          <TextInput style={styles.textInputs} placeholder="Nombre" value={textItem} onChangeText={onHandlerChangeItem} />
          <TextInput style={styles.textInputs} placeholder="Precio" value={priceItem} onChangeText={onHandlerChangePrice} />
          {showMapPreview == true ? <MapPreview location={pickedLocation} /> : <></>}
          {showMapPicker == true ? <MapPickerAreaView /> : <></>}
          <View style={styles.btnContainer}>
            <View style={styles.btn1}>
              <Button title="Actual" color="#F79D9D" onPress={handlerGeoLocation} />
            </View>
            <View style={styles.btn1}>
              <Button title="Seleccionar" color="#F79D9D" onPress={handlerPickOnMap} />
            </View>
          </View>
          <View style={styles.btn2}>
            <Button title="Guardar ubicación" color="#00bcaa" onPress={handlerSaveSelection} />
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.btn1}>
              <Button title="Agregar FOTO" color="#F79D9D" onPress={handlerTakeImage} />
            </View>
            <View style={styles.btn1}>
              <Button title="Agregar Deseo" color="#F79D9D" onPress={addItemList} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ListContainer listItems={listItems} setListItems={setListItems} navigation={navigation} />
        </View>
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
    flex: 1,
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
  btn2: {
    width: 310,
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  containerMapView: {
    flex: 1,
    height: 200,
    width: "100%",
    marginBottom: 10,
  },
});
