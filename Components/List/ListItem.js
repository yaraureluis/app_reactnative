import React, { useState } from "react";
import { Text, View, Button, FlatList, SafeAreaView, Item } from "react-native";
import styles from "../../Styles";

export default function ListItem(props) {
  const { listItem, onHandlerModal } = props;

  const renderItem = (data) => (
    <View style={styles.containerLista}>
      <View>
        <Text style={styles.textLista}>
          {data.index + 1}. {data.item.value} - ${data.item.price}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn1}>
          <Button title="Eliminar" color="#65c4c9" onPress={onHandlerModal.bind(this, data.item.id)} />
        </View>
        <View style={styles.btn1}>
          <Button title="Ya lo compré" color="#00bcaa" />
        </View>
      </View>
    </View>
  );
  return (
    <>
      <SafeAreaView>
        <FlatList data={listItem} renderItem={renderItem} keyExtractor={(item) => item.id} scrollEnabled={true} />
      </SafeAreaView>
    </>
  );
}
