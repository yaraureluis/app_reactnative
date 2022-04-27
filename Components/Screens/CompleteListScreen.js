import { Text, View, Button, ImageBackground, StyleSheet, Image, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../store/actions/list.action";

export default function CompleteListScreen({ navigation }) {
  const datos = useSelector((state) => state.todas.listas);
  const dispatch = useDispatch();

  const handledSelectedList = (item) => {
    console.log("<<<<<<<<<<< click en lista de MIS LISTAS >>>>>>>");
    console.log("DATOS ID: " + +item.id);
    console.log("DATOS TITLE: " + item.title);
    dispatch(selectList(+item.id));
    navigation.navigate("List", { id: +item.id, title: item.title });
  };

  const Item = ({ item }) => (
    <View style={styles.containerListItem}>
      <Text style={styles.itemList} onPress={() => handledSelectedList(item)}>
        {item.title}
      </Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <>
      <Text style={styles.tituloLista}>Selecciona una lista</Text>
      <View style={styles.listGroup}>
        <FlatList data={datos} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerListItem: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 2,
  },
  itemDate: {
    color: "grey",
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "left",
    paddingBottom: 2,
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
