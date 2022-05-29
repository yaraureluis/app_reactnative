import { Text, View, Button, Modal, StyleSheet } from "react-native";

export default function ModalItem(props) {
  const { visible, onDelete, item, onCancel, navigation } = props;
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modalCentered}>
        <View style={styles.modalView}>
          <View style={styles.modalTitle}>
            <Text style={styles.textNormal}>¡ATENCIÓN!</Text>
          </View>
          <View style={styles.modalBody}>
            <View>
              <Text>¿Desea borrar el elemento?</Text>
            </View>
            <View>
              <Text>{item.title}</Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.modalButton}>
              <Button title="Confirmar" color="#65c4c9" onPress={onDelete.bind(this, item.id)} />
            </View>
            <View style={styles.modalButton}>
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
  modalTitle: {
    flex: 4,
    backgroundColor: "#c1e0e0",
    width: "100%",
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    textAlignVertical: "center",
  },
  modalBody: {
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
  modalButton: {
    width: 110,
    flex: 2,
    marginHorizontal: 5,
    paddingBottom: 15,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
});
