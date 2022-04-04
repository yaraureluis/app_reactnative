import react from "react";
import { Text, View, Button, Modal, StyleSheet } from "react-native";
import styles from "../Styles";

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
