import { Text, View, Button, ImageBackground, StyleSheet, Image, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useDispatch, useSelector } from "react-redux";
import { selectList, createList, setAllLists } from "../store/actions/list.action";
import { filteredList } from "../store/actions/listItem.action";
import React, { useEffect, useState } from "react";

export default function WelcomeScreen({ navigation }) {
  const myLists = useSelector((state) => state.allMyLists.fullLists);
  const lastLists = myLists.slice(-4);
  const dispatch = useDispatch();
  console.log("DATOS EN WELCOME SCREEN LINEA 11", lastLists);

  useEffect(() => {
    dispatch(setAllLists());
  }, []);

  const handledSelectedList = (item) => {
    dispatch(selectList(+item.id));
    dispatch(filteredList(+item.id));
    navigation.navigate("List", { id: +item.id, title: item.title });
  };

  // ----------------------INICIO LOGICA NUEVA LISTA ------------------------/
  const [listTitle, setListTitle] = useState();
  const [showInputTitle, setShowInputTitle] = useState(false);

  const onHandlerChangeListTitle = (text) => {
    setListTitle(text);
  };

  const onHandlerListTitle = () => {
    setShowInputTitle(true);
  };
  const handleCreteList = (new_title) => {
    if (!new_title) {
      console.log("TITULO VACIO");
      alert("Para crear una lista debe escribir un título");
      return false;
    }
    console.log("NUEVO TITULO WelcomeScreen linea 37", new_title);
    const new_date = new Date().toLocaleDateString();
    const item = { date: new_date, title: new_title };
    dispatch(createList(item));
    setListTitle("");
    setShowInputTitle(false);
  };

  // ------------------------ FIN LOGICA NUEVA LISTA ------------------------ /
  const [loaded] = useFonts({
    GrapeNuts: require("../../assets/fonts/GrapeNuts-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const image = require("../../assets/img/wallpaper_patilla2.jpg");
  const logo = require("../../assets/img/logo_patilla.png");

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => handledSelectedList(item)}>
      <Text style={styles.itemList}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.containerKeyboardAvoidingView} behavior={"height"}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.brandText}>Wish List!</Text>
            {!showInputTitle ? (
              <View style={styles.btnNewList}>
                <Button title="Nueva lista!" color="#F79D9D" onPress={() => onHandlerListTitle()} />
              </View>
            ) : (
              <View style={styles.createList}>
                <View style={styles.btnNewList2}>
                  <TextInput style={styles.textInputs} placeholder="Nombre de la lista" value={listTitle} onChangeText={onHandlerChangeListTitle} />
                  <Button title="Crear Lista" color="#F79D9D" onPress={() => handleCreteList(listTitle)} />
                </View>
              </View>
            )}
            <View style={styles.listsContainer}>
              {!lastLists.length ? (
                <>
                  <Text style={styles.createNewListText}>TU LISTA DE HOY, TU COMPRA DE MAÑANA!</Text>
                  <Text style={styles.createNewListText}> CREA TU LISTA DE DESEOS AHORA!</Text>
                </>
              ) : (
                <>
                  <Text style={styles.myLastListsTitle}>Ultimas listas creadas</Text>
                  <View style={styles.listGroup}>
                    <FlatList data={lastLists} renderItem={renderItem} keyExtractor={(item) => item.id} />
                  </View>
                </>
              )}
            </View>
            <Text style={styles.signature}>Powered by Luis Alexander</Text>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerKeyboardAvoidingView: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  logo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "75%",
    resizeMode: "contain",
  },
  brandText: {
    color: "white",
    fontSize: 60,
    lineHeight: 75,
    fontFamily: "GrapeNuts",
    textAlign: "center",
    backgroundColor: "#000000c0",

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
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  myLastListsTitle: {
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
  createNewListText: {
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
    width: "100%",
    paddingHorizontal: 10,
  },
  signature: {
    color: "white",
    fontSize: 10,
    lineHeight: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  btnNewList: {
    width: "70%",
    justifyContent: "center",
    flex: 1,
  },
  btnNewList2: {
    width: "70%",
    justifyContent: "center",
    flex: 1,
  },
  listsContainer: {
    width: "80%",
    backgroundColor: "#FFFFFFc0",
    alignItems: "center",
    height: 30,
    flex: 2,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  textInputs: {
    backgroundColor: "white",
    padding: 5,
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#F79D9D",
    borderRadius: 5,
    fontSize: 16,
    textAlign: "center",
  },
  createList: {
    width: "70%",
    flexDirection: "row",
    flex: 1,
    marginBottom: 15,
  },
});
