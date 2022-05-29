import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ModalItem from "../Modal";
import { selectList, deleteItem } from "../store/actions/list.action";
import { filteredList } from "../store/actions/listItem.action";
import React, { useState } from "react";

export default function CompleteListScreen({ navigation }) {
  const myLists = useSelector((state) => state.allMyLists.fullLists);
  const dispatch = useDispatch();
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handledSelectedList = (item) => {
    dispatch(selectList(+item.id));
    dispatch(filteredList(+item.id));

    navigation.navigate("List", { id: +item.id, title: item.title });
  };

  //-------------LOGICA PARA BORRAR UNA LISTA------------------------/

  const onHandlerDelete = (id) => {
    dispatch(deleteItem(id));
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(myLists.filter((item) => item.id === id)[0]); //FIJAR LISTA ACA
    dispatch(selectList(id));
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  //----------FIN LOGICA PARA BORRAR UNA LISTA-------------------/

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.containerListItem} onPress={() => handledSelectedList(item)} onLongPress={onHandlerModal.bind(this, item.id)}>
      <Text style={styles.itemList}>{item.title}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <>
      <Text style={styles.listTitle}>Todas mis listas</Text>
      <View style={styles.listGroup}>
        <FlatList data={myLists} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal} navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  containerListItem: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  listTitle: {
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
  listGroup: {
    flex: 15,
    padding: 10,
  },
});
