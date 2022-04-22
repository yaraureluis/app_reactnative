import { Text, View, Button, ImageBackground, StyleSheet, Image, FlatList } from "react-native";

export default function CompleteListScreen({ navigation }) {
  // aqui todo
  let myLists = [
    { id: 1, title: "Lista de Prueba" },
    { id: 2, title: "Lista de Prueba" },
    { id: 3, title: "Lista de Prueba" },
    { id: 4, title: "Lista de Prueba" },
    { id: 5, title: "Lista de Prueba" },
    { id: 6, title: "Lista de Prueba" },
    { id: 7, title: "Lista de Prueba" },
    { id: 8, title: "Lista de Prueba" },
    { id: 9, title: "Lista de Prueba" },
    { id: 10, title: "Lista de Prueba" },
    { id: 11, title: "Lista de Prueba" },
    { id: 12, title: "Lista de Prueba" },
    { id: 13, title: "Lista de Prueba" },
    { id: 14, title: "Lista de Prueba" },
    { id: 15, title: "Lista de Prueba" },
    { id: 16, title: "Lista de Prueba" },
    { id: 17, title: "Lista de Prueba" },
    { id: 18, title: "Lista de Prueba" },
  ];

  const Item = ({ title }) => (
    <Text style={styles.itemList} onPress={() => navigation.navigate("List")}>
      {title}
    </Text>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <>
      <Text style={styles.tituloLista}>Selecciona una lista</Text>
      <View style={styles.listGroup}>
        <FlatList data={myLists} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandText: {
    color: "white",
    fontSize: 60,
    lineHeight: 75,
    fontFamily: "GrapeNuts",
    textAlign: "center",
    backgroundColor: "#000000c0",
    flex: 1,
    marginTop: 250,
    width: "100%",
  },
  subText: {
    color: "white",
    fontSize: 18,
    lineHeight: 18,
    marginTop: 20,
    marginBottom: 20,
    fontStyle: "italic",
    textAlign: "center",
    flex: 1,
  },
  itemList: {
    color: "#65c4c9",
    fontWeight: "bold",
    lineHeight: 35,
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    padding: 2,
  },
  tituloLista: {
    color: "white",
    fontSize: 22,
    lineHeight: 22,
    paddingVertical: 5,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#00bcaa",
    width: "100%",
    flex: 1,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    textAlignVertical: "center",
  },
  creaTuLista: {
    color: "#65c4c9",
    fontSize: 22,
    lineHeight: 22,
    paddingVertical: 10,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    textAlignVertical: "center",
  },
  listGroup: {
    flex: 15,
    padding: 10,
  },
  signature: {
    color: "white",
    fontSize: 10,
    lineHeight: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  btnNuevaLista: {
    width: "70%",
    justifyContent: "center",
    flex: 1,
  },
  containerListas: {
    width: "80%",
    backgroundColor: "#FFFFFFc0",
    alignItems: "center",
    height: 30,
    flex: 3,
    marginBottom: 10,
    borderRadius: 5,
  },
});
