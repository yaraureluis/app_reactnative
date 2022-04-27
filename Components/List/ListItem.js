import React, { useEffect } from "react";
import { Text, View, Button, FlatList, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filteredList, selectListItem } from "../store/actions/listItem.action";

export default function ListItem(props) {
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.lista.filteredList);
  const listaSeleccionada = useSelector((state) => state.todas.selected);
  const { listItem, onHandlerModal, navigation } = props;

  useEffect(() => {
    console.log("USE EFECT >>> id: " + listaSeleccionada.id);
    dispatch(filteredList(listaSeleccionada.id));
  }, []);

  useEffect(() => {
    // listItem = lista;
  }, [lista]);

  const handleSelected = (data) => {
    dispatch(selectListItem(data, data.item_id));
    console.log("ITEM SELECCIONADO PARA DETALLE: " + data.value);
    console.log("DATA ENVIADA PARA DETALLE: " + data);
    navigation.navigate("Detail", { data });
  };

  const Item = ({ data }) => (
    <>
      <View style={styles.containerLista}>
        <View>
          <Text style={styles.textLista} onPress={() => handleSelected(data.item)}>
            {data.index + 1}. {data.item.value} - ${data.item.price}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn1}>
            <Button title="Eliminar" color="#65c4c9" onPress={onHandlerModal.bind(this, data.item.id)} />
          </View>
          <View style={styles.btn1}>
            <Button title="Ya lo compré" color="#00bcaa" />
          </View>
        </View>
      </View>
    </>
  );

  const renderItem = (data) => <Item data={data} />;

  return (
    <>
      <ScrollView>
        <FlatList data={listItem} renderItem={renderItem} keyExtractor={(item, i) => i} />
      </ScrollView>
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
});
