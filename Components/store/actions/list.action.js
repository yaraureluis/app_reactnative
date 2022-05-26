import { insertNewList, SelectListas } from "../../../db";
export const SELECT_LIST = "SELECT_LIST";
export const CREATE_LIST = "CREATE_LIST";
export const SET_ALL_LISTS = "SET_ALL_LISTS";

export const setAllLists = () => {
  return async (dispatch) => {
    try {
      const result = await SelectListas();
      console.log(result);
      dispatch({ type: SET_ALL_LISTS, listsDB: result.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
export const selectList = (id) => ({
  type: SELECT_LIST,
  listID: id,
});

// ACCIÓN PARA CREAR UNA NUEVA LISTA, SE EJECUTA EN WelcomeScreen.js, RECIBE EN DATA EL TITULO DE LA LISTA, Y LA FECHA DE CREACIÓN
// ESTA ACCIÓN LA PASO AL list.reducer.js
export const createList = (data) => {
  return async (dispatch) => {
    //
    //
    //
    try {
      let newListInserted = await insertNewList(data.date, data.title);
      console.log("LIST.ACTION  LISTA INSERTADA", newListInserted);

      dispatch({ type: CREATE_LIST, data: [{ id: newListInserted.insertId, date: data.date, title: data.title, list_items: [] }] });
    } catch (err) {
      console.log("ERROR AL INSERTAR NUEVA LISTA EN LIST.ACTION LINEA 20", err);
    }
  };
};
