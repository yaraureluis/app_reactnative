import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

export default function DetailItem() {
  const selectListItem = useSelector((state) => state.lista.selected);

  console.log("VISUALIZANDO DETALLE DEL ITEM: ", selectListItem.value);
  return (
    <>
      <View>
        <View style={styles.infoContainer}>
          <View style={styles.secondInfo}>
            <View>
              <Text style={styles.textNormal}> {selectListItem.value} </Text>

              <Text style={styles.locationText}>{selectListItem.lugar} </Text>
            </View>
            <Text style={styles.price}>$ {selectListItem.price}</Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.detailImg}
            source={{
              uri: selectListItem.foto,
            }}
          />
        </View>
        <View style={styles.locationContainer}>
          <Image
            style={styles.mapa}
            source={{
              uri: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1",
            }}
          />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn1}>
            <Button title="Eliminar" color="#65c4c9" />
          </View>
          <View style={styles.btn1}>
            <Button title="Ya lo compré" color="#00bcaa" />
          </View>
        </View>
      </View>
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
    fontSize: 40,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    borderLeftColor: "white",
    borderLeftWidth: 1,
  },
  locationText: {
    textAlignVertical: "center",
    fontSize: 18,
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
    width: 150,
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
