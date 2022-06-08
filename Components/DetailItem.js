import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapPreview from "./MapPreview";
import ModalItem from "./Modal";
import { selectListItem, deleteItem } from "./store/actions/listItem.action";

export default function DetailItem({ navigation }) {
  const dispatch = useDispatch();
  const [dolarPrice, setDolarPrice] = useState(0);

  const data = useSelector((state) => state.myWishes.selected);
  const selectListItem = data;

  const [itemSelected, setItemSelected] = useState({});

  const [modalVisible, setModalVisible] = useState(false);
  const onHandlerModal = (id) => {
    setItemSelected(selectListItem.id);
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const onHandlerDelete = (id) => {
    console.log("Item Eliminado");
    dispatch(deleteItem(id));
    setItemSelected({});
    setModalVisible(!modalVisible);
    navigation.navigate("List");
  };

  const calculateDolarPrice = async () => {
    let dolar = await fetch("https://api-dolar-argentina.herokuapp.com/api/dolarblue");
    let response = await dolar.json();
    console.log("RESPONSE", response);
    console.log(parseFloat(response.venta));
    console.log(+selectListItem.price / parseFloat(response.venta));
    let dolarPrice = +selectListItem.price / parseFloat(response.venta);
    setDolarPrice(dolarPrice.toFixed(2));
    return dolarPrice;
  };

  useEffect(() => {
    calculateDolarPrice();
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.infoContainer}>
            <View style={styles.secondInfo}>
              <View>
                <Text style={styles.textNormal}> {selectListItem.title} </Text>

                <Text style={styles.locationText}>{selectListItem.address} </Text>
              </View>
              <View>
                <Text style={styles.price}>$ {selectListItem.price}</Text>
                <Text style={styles.dolarPrice}>USD {dolarPrice}</Text>
              </View>
            </View>
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.detailImg}
              source={{
                uri: selectListItem.image,
              }}
            />
          </View>
          <View style={styles.locationContainer}>
            <MapPreview style={styles.mapa} location={{ lat: selectListItem.lat, lng: selectListItem.lng }} />
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.btn1}>
              <Button title="Eliminar deseo" color="#65c4c9" onPress={onHandlerModal.bind(this, selectListItem.id)} />
            </View>
          </View>
        </View>
      </ScrollView>
      <ModalItem onDelete={onHandlerDelete} item={selectListItem} visible={modalVisible} onCancel={closeModal} />
    </>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "#5fcdcf",
    padding: 15,
    width: "100%",
    alignItems: "flex-end",
  },
  secondInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  textNormal: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "right",
    textAlignVertical: "center",
  },
  price: {
    paddingLeft: 12,
    paddingRight: 3,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    borderLeftColor: "white",
    borderLeftWidth: 1,
  },
  dolarPrice: {
    paddingLeft: 12,
    paddingRight: 3,
    fontSize: 16,
    color: "white",
    textAlign: "right",
    fontWeight: "bold",
    borderLeftColor: "white",
    borderLeftWidth: 1,
  },
  locationText: {
    textAlignVertical: "center",
    fontSize: 12,
    width: 200,
    marginEnd: 4,
    color: "white",
    textAlign: "center",
    textAlign: "right",
    fontStyle: "italic",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btn1: {
    width: "90%",
    marginHorizontal: 5,
  },
  detailImg: {
    width: "95%",
    height: 210,
  },
  mapa: {
    width: "95%",
    height: 210,
    borderRadius: 10,
  },
  imgContainer: {
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  locationContainer: {
    marginTop: 8,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
});
