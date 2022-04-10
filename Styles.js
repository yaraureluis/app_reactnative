import { StyleSheet } from "react-native";
import react from "react";

export default styles = StyleSheet.create({
  listado: {
    backgroundColor: "#F6F6F6",
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  textInputs: {
    backgroundColor: "white",
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#00bcaa",
    borderRadius: 5,
    width: 320,
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn1: {
    width: 150,
    marginHorizontal: 5,
  },
  btn2: {
    width: 100,
    marginHorizontal: 5,
  },

  textNormal: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#00bcaa",
    fontSize: 20,
  },
  tituloLista: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#00bcaa",
    fontSize: 20,
  },
  listadoItems: {
    borderTopColor: "#00bcaa",
    borderTopWidth: 3,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
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
  modalCentered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
  },
  modalView: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#c1e0e0",
    width: 250,
    height: 150,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  tituloModal: {
    flex: 4,
    backgroundColor: "#c1e0e0",
    width: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    textAlignVertical: "center",
  },
  cuerpoModal: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  botonModal: {
    width: 100,
    flex: 2,
    marginHorizontal: 5,
    paddingBottom: 15,
    paddingHorizontal: 5,
    justifyContent: "center",
  },

  addBtn: {
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "red",
    width: 55,
    height: 55,
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  addBtnText: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
});
