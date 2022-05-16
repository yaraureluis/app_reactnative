import { insertNewList } from "../../../db";
export const SELECT_LIST = "SELECT_LIST";
export const CREATE_LIST = "CREATE_LIST";

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
