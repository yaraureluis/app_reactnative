import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Header(props) {
  const [loaded] = useFonts({
    GrapeNuts: require("../assets/fonts/GrapeNuts-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const { texto } = props;
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.container}>
          <Text style={styles.textHeader}>{texto}</Text>
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
  headerContainer: {
    backgroundColor: "#F79D9D",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
    paddingTop: 20,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
  textHeader: {
    color: "white",
    fontFamily: "GrapeNuts",
    fontSize: 30,
    textAlign: "center",
  },
});
