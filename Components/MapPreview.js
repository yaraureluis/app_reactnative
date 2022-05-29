import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MapsConfig } from "./Constants/Maps";

const MapPreview = ({ location }) => {
  const MapPreviewUrl = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${location.lat},${location.lng}&key=${MapsConfig.API_KEY}` : ``;

  const loadingLocation = <Text>...cargando ubicacion .</Text>;

  return <View style={styles.mapPreviewContainer}>{location ? <Image style={styles.mapImage} source={{ uri: MapPreviewUrl }}></Image> : loadingLocation}</View>;
};
const styles = StyleSheet.create({
  mapPreviewContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 200,
    width: "90%",
    marginBottom: 10,
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
