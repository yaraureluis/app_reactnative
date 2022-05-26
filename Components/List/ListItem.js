import React, { useEffect } from "react";
import { Text, View, Button, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filteredList, selectListItem } from "../store/actions/listItem.action";

export default function ListItem(props) {
  const dispatch = useDispatch();
  const deseos_seleccionados = useSelector((state) => state.myWishes.fullWishes);
  const listaSeleccionada = useSelector((state) => state.allMyLists.selected);
  const { listItems, onHandlerModal, navigation } = props;
  useEffect(() => {
    console.log("USE EFECT >>> id: ", listaSeleccionada.id);
    dispatch(filteredList(listaSeleccionada.id));
  }, []);

  useEffect(() => {
    // listItems = lista;
  }, [deseos_seleccionados]);

  const handleSelected = (data) => {
    dispatch(selectListItem(data.id));
    console.clear();
    console.log("ITEM SELECCIONADO PARA DETALLE: ", data.title);
    console.log("DATA ENVIADA PARA DETALLE: ", data);
    console.log("LISTA GENERAL", listaSeleccionada);
    console.log("DESEOS SELECCIONADOS", deseos_seleccionados);
    navigation.navigate("Detail", { data });
  };

  const Item = ({ data }) => (
    <>
      {/* <View style={styles.containerLista}>
        <View>
          <Text style={styles.textLista} onPress={() => handleSelected(data.item)}>
            {data.index + 1}. {data.item.title} - ${data.item.price}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn1}>
            <Button title="EliminaRLO" color="#65c4c9" onPress={onHandlerModal.bind(this, data.item.id)} />
          </View>
        </View> */}
      <TouchableOpacity style={styles.containerWishItem} onPress={() => handleSelected(data.item)} onLongPress={onHandlerModal.bind(this, data.item.id)}>
        <Image style={styles.image} source={{ uri: data.item.image }} />
        <View style={styles.info}>
          <Text style={styles.firstText}>{data.item.title}</Text>
          <Text style={styles.secondText}> ${data.item.price}</Text>
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </>
  );

  const renderItem = (data) => <Item data={data} />;

  return (
    <>
      <FlatList data={listItems} renderItem={renderItem} keyExtractor={(item, i) => i} />
    </>
  );
}

const styles = StyleSheet.create({
  containerLista: {
    marginVertical: 10,
  },
  textLista: {
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",
    color: "grey",
    fontSize: 20,
    textAlign: "auto",
    alignContent: "flex-end",
    height: 40,
    backgroundColor: "#F1EEEE",
    textAlignVertical: "center",
    paddingStart: 10,
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#00bcaa",
    borderRadius: 5,
    width: 320,
    fontWeight: "normal",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn1: {
    width: 150,
    marginHorizontal: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
  },
  firstText: {
    color: "grey",
    fontSize: 26,
    fontWeight: "400",
  },
  secondText: {
    color: "grey",
    fontSize: 15,
    fontStyle: "italic",
  },
  info: {
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  containerWishItem: {
    borderBottomColor: "#00bcaa",
    borderBottomWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EEEE",
    width: "100%",
    marginVertical: 8,
  },
});
