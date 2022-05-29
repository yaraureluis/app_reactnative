import * as FileSystem from "expo-file-system";
import { insertNewItem, SelectItemsByIdRel, deleteItemById } from "../../../db";
import { MapsConfig } from "../../Constants/Maps";

export const SELECT_LIST_ITEM = "SELECT_LIST_ITEM";
export const FILTERED_LIST_ITEM = "FILTERED_LIST_ITEM";
export const ADD_ITEM_TO_SELECTED_LIST = "ADD_ITEM_TO_SELECTED_LIST";
export const DELETE_ITEM_BY_ID = "DELETE_ITEM_BY_ID";

export const selectListItem = (id) => ({
  type: SELECT_LIST_ITEM,
  wishId: id,
});

export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteItemById(id);
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
      dispatch({ type: FILTERED_LIST_ITEM, wishes: result.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

export const addItemtoWishList = ({ title, price, image, address, lat, lng, id_rel }) => {
  return async (dispatch) => {
    // ---------------- OBTENDO LA UBICACIÓN BASADO EN LATITUD Y LONGITUD -------------- /
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MapsConfig.API_KEY}`);
    if (!response.ok) throw new Error("No se ha podido comunicar con la Google Maps API para obtener la ubicación.");

    const resData = await response.json();
    if (!resData.results) throw new Error("No se han encontrado datos para las coordenadas seleccionadas.");
    address = resData.results[0].formatted_address;

    // ----------- MUEVO LA IMAGEN DE RUTA, PASA DE TEMPORAL AL FYLESYSTEM ------------- /
    const imageFileName = image.split("/").pop();
    const imageNewRoute = FileSystem.documentDirectory + imageFileName;
    let newItemInserted;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: imageNewRoute,
      });
      newItemInserted = await insertNewItem(title, price, imageNewRoute, address, lat, lng, id_rel);
    } catch (err) {
      throw err;
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
