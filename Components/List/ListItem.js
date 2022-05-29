import React, { useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filteredList, selectListItem } from "../store/actions/listItem.action";

export default function ListItem(props) {
  const dispatch = useDispatch();
  const selectedWishes = useSelector((state) => state.myWishes.fullWishes);
  const selectedList = useSelector((state) => state.allMyLists.selected);
  const { listItems, onHandlerModal, navigation } = props;
  useEffect(() => {
    dispatch(filteredList(selectedList.id));
  }, []);

  const handleSelected = (data) => {
    dispatch(selectListItem(data.id));
    navigation.navigate("Detail", { data });
  };

  const Item = ({ data }) => (
    <>
      <TouchableOpacity style={styles.containerWishItem} onPress={() => handleSelected(data.item)} onLongPress={onHandlerModal.bind(this, data.item.id)}>
        <Image style={styles.image} source={{ uri: data.item.image }} />
        <View style={styles.info}>
          <Text style={styles.firstText}>{data.item.title}</Text>
          <Text style={styles.secondText}> ${data.item.price}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  const renderItem = (data) => <Item data={data} />;

  return (
    <>
      <FlatList data={listItems} renderItem={renderItem} keyExtractor={(item, i) => i} />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
  },
  firstText: {
    color: "grey",
    fontSize: 26,
    fontWeight: "400",
  },
  secondText: {
    color: "grey",
    fontSize: 15,
    fontStyle: "italic",
  },
  info: {
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  containerWishItem: {
    borderBottomColor: "#00bcaa",
    borderBottomWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EEEE",
    width: "100%",
    marginVertical: 8,
  },
});
