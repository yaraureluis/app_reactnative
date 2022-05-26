import * as FileSystem from "expo-file-system";
import { insertNewItem, SelectItemsByIdRel, deleteItemById } from "../../../db";

export const SELECT_LIST_ITEM = "SELECT_LIST_ITEM";
export const FILTERED_LIST_ITEM = "FILTERED_LIST_ITEM";
export const ADD_ITEM_TO_SELECTED_LIST = "ADD_ITEM_TO_SELECTED_LIST";
export const DELETE_ITEM_BY_ID = "DELETE_ITEM_BY_ID";
const API_KEY = "AIzaSyCzIwMwGpVGresrGyKmLX7Bi1zL-NvOMVg";

export const selectListItem = (id) => ({
  type: SELECT_LIST_ITEM,
  wishId: id,
});

export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteItemById(id);
      console.log(result);
      dispatch({ type: DELETE_ITEM_BY_ID, deleted_item_id: id });
    } catch (err) {
      throw err;
    }
  };
};

export const filteredList = (id_rel) => {
  return async (dispatch) => {
    try {
      const result = await SelectItemsByIdRel(id_rel);
      console.log(result);
      dispatch({ type: FILTERED_LIST_ITEM, wishes: result.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
// export const filteredList = (id) => ({
//   type: FILTERED_LIST_ITEM,
//   listID: id,
// });

export const addItemtoWishList = ({ title, price, image, address, lat, lng, id_rel }) => {
  return async (dispatch) => {
    console.log("<< AGREGANDO ITEM A UNA LISTA SELECCIONADA DISPATCH >>");

    // ---------------- OBTENDO LA UBICACIÓN BASADO EN LATITUD Y LONGITUD -------------- /
    console.log("VER LATITUD Y LONGITUD listItem.action LINEA 61", lat, lng);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`);
    if (!response.ok) throw new Error("No se ha podido comunicar con la Google Maps API para obtener la ubicación.");

    const resData = await response.json();
    if (!resData.results) throw new Error("No se han encontrado datos para las coordenadas seleccionadas.");
    address = resData.results[0].formatted_address;
    console.log("UBICACIÓN MODIFICADA CON GEOCODING API listItem.action.js linea 40", address);

    // ----------- MUEVO LA IMAGEN DE RUTA, PASA DE TEMPORAL AL FYLESYSTEM ------------- /
    const imageFileName = image.split("/").pop();
    const imageNewRoute = FileSystem.documentDirectory + imageFileName;
    let newItemInserted;
    console.log("------------------------------------");
    console.log(image);
    console.log(imageFileName);
    console.log(imageNewRoute);
    console.log("------------------------------------");
    try {
      await FileSystem.moveAsync({
        from: image,
        to: imageNewRoute,
      });
      newItemInserted = await insertNewItem(title, price, imageNewRoute, address, lat, lng, id_rel);
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: ADD_ITEM_TO_SELECTED_LIST,
      item_added: {
        id: newItemInserted.insertId,
        title,
        price,
        image: imageNewRoute,
        address,
        lat,
        lng,
        id_rel,
      },
    });
  };
};
