import { Text, View, Button, ImageBackground, StyleSheet, Image, FlatList } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function WelcomeScreen({ navigation }) {
  const [loaded] = useFonts({
    GrapeNuts: require("../../assets/fonts/GrapeNuts-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const image = require("../../assets/img/wallpaper_patilla2.jpg");

  let myLists = [
    { id: 1, title: "Lista de Prueba 1" },
    { id: 2, title: "Lista de Prueba 2" },
    { id: 3, title: "Lista de Prueba 3" },
  ];

  const Item = ({ title }) => (
    <Text style={styles.itemList} onPress={() => navigation.navigate("List")}>
      {title}
    </Text>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.brandText}>Wish List!</Text>
          <View style={styles.btnNuevaLista}>
            <Button title="Nueva lista!" color="#F79D9D" onPress={() => navigation.navigate("List")} />
          </View>
          <View style={styles.containerListas}>
            {!myLists.length ? (
              <>
                <Text style={styles.creaTuLista}>TU LISTA DE HOY, TU COMPRA DE MAÑANA!</Text>
                <Text style={styles.creaTuLista}> CREA TU LISTA DE DESEOS AHORA!</Text>
              </>
            ) : (
              <>
                <Text style={styles.tituloLista}>Mis listas</Text>
                <View style={styles.listGroup}>
                  <FlatList data={myLists} renderItem={renderItem} keyExtractor={(item) => item.id} />
                </View>
              </>
            )}
          </View>
          <Text style={styles.signature}>Powered by Luis Alexander</Text>
        </ImageBackground>
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
    lineHeight: 30,
    fontSize: 17,
    width: "100%",
  },
  tituloLista: {
    color: "#65c4c9",
    fontSize: 22,
    lineHeight: 22,
    paddingVertical: 10,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
    borderBottomColor: "#00bcaa",
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
    flex: 9,
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
