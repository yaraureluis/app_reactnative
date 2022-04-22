import React from "react";
import { Text, View, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function ListItem(props) {
  const { listItem, onHandlerModal, navigation } = props;

  const renderItem = (data) => (
    <View style={styles.containerLista}>
      <View>
        <Text style={styles.textLista} onPress={() => navigation.navigate("Detail")}>
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
  );
  return (
    <>
      <View>
        <FlatList data={listItem} renderItem={renderItem} keyExtractor={(item) => item.id} scrollEnabled={true} />
      </View>
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
