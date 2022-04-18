import react from "react";
import { Text, View, Button, Modal, StyleSheet } from "react-native";

export default function ModalItem(props) {
  const { visible, onDelete, item, onCancel } = props;

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modalCentered}>
        <View style={styles.modalView}>
          <View style={styles.tituloModal}>
            <Text style={styles.textNormal}>¡ATENCIÓN!</Text>
          </View>
          <View style={styles.cuerpoModal}>
            <View>
              <Text>Desea borrar el item?</Text>
            </View>
            <View>
              <Text>{item.value}</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.botonModal}>
              <Button title="Confirmar" color="#65c4c9" onPress={onDelete.bind(this, item.id)} />
            </View>
            <View style={styles.botonModal}>
              <Button title="Cancelar" color="#00bcaa" onPress={onCancel.bind(this)} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  textNormal: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#00bcaa",
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: "row",
  },
  botonModal: {
    width: 100,
    flex: 2,
    marginHorizontal: 5,
    paddingBottom: 15,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
});
