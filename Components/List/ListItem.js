import React, { useState } from "react";
import { Text, View, Button, FlatList, ScrollView } from "react-native";
import styles from "../../Styles";

export default function ListItem(props) {
  const { listItem, onHandlerModal } = props;

  const renderItem = (data) => (
    <View style={styles.containerLista}>
      <View>
        <Text style={styles.textLista}>
          {data.item.id} - {data.item.value} - ${data.item.price}
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
      <ScrollView>
        <View style={{ flex: 1 }}>
          <FlatList data={listItem} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
      </ScrollView>
    </>
  );
}
