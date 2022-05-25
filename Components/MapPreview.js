import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//--NO IMPORTO MAP PORQUE VOY A PONER MI API KEY DE MAPS DIRECTAMENTE AQUI---/
//-- COLOCAR ACÁ MI API KEY, O EN OTRO COMPONENTE QUE PUEDO IGNORAR EN GIT --/
const API_KEY = "AIzaSyCzIwMwGpVGresrGyKmLX7Bi1zL-NvOMVg";

// COMO PROPS ESTOY NECESITANDO: location, lat, y lng, y la API_KEY
const MapPreview = ({ location }) => {
  const MapPreviewUrl = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${location.lat},${location.lng}&key=${API_KEY}` : ``;

  console.log("UBICACIÓN EN MapPreview.js LINEA 12", MapPreviewUrl);

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
