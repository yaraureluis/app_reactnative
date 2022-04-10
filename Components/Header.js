import { Text, View, Button, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Header(props) {
  const [loaded] = useFonts({
    GrapeNuts: require("../assets/fonts/GrapeNuts-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const { texto, onHandleClickBack } = props;
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.container}>
          <View style={styles.btnBack}>
            <Button title="Atrás" color="#65c4c9" onPress={onHandleClickBack} />
          </View>
          <Text style={styles.textHeader}>{texto}</Text>
          <View style={styles.btnClear}>
            <Button title="Eliminar" color="#65c4c9" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    width: "90%",
  },
  btnBack: {
    flex: 1,
    alignContent: "flex-start",
  },
  btnClear: {
    flex: 1,
    alignContent: "flex-end",
  },
  headerContainer: {
    backgroundColor: "#F79D9D",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    paddingTop: 40,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
  textHeader: {
    color: "white",
    fontFamily: "GrapeNuts",
    fontSize: 30,
    flex: 2,
    textAlign: "center",
  },
});
