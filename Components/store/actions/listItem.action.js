import * as FileSystem from "expo-file-system";

export const SELECT_LIST_ITEM = "SELECT_LIST_ITEM";
export const FILTERED_LIST_ITEM = "FILTERED_LIST_ITEM";
export const ADD_ITEM_TO_SELECTED_LIST = "ADD_ITEM_TO_SELECTED_LIST";

export const selectListItem = (data) => ({
  type: SELECT_LIST_ITEM,
  listItemID: data.item_id,
  data: data,
});

export const filteredList = (id) => ({
  type: FILTERED_LIST_ITEM,
  listID: id,
});

export const addItemtoSelectedList = (listaSeleccionada, { id, value, price, lugar, foto }) => {
  return async (dispatch) => {
    console.log("<< AGREGANDO ITEM A UNA LISTA SELECCIONADA DISPATCH >>");

    const fotoFileName = foto.split("/").pop();
    const fotoNewRoute = FileSystem.documentDirectory + fotoFileName;
    console.log("------------------------------------");
    console.log(foto);
    console.log(fotoFileName);
    console.log(fotoNewRoute);
    console.log("------------------------------------");
    try {
      await FileSystem.moveAsync({
        from: foto,
        to: fotoNewRoute,
      });
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: ADD_ITEM_TO_SELECTED_LIST,
      item_to_add: {
        id: id,
        value: value,
        price: price,
        lugar: lugar,
        foto: fotoNewRoute,
      },
      listaSeleccionada: listaSeleccionada,
    });
  };
};
