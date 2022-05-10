export const SELECT_LIST = "SELECT_LIST";
export const CREATE_LIST = "CREATE_LIST";

export const selectList = (id) => ({
  type: SELECT_LIST,
  listID: id,
});

// ACCIÓN PARA CREAR UNA NUEVA LISTA, SE EJECUTA EN AddItem.js, RECIBE EN DATA EL TITULO DE LA LISTA, LA FECHA Y EL NUEVO ID
// ESTA ACCIÓN LA PASO AL list.reducer.js
export const createList = (data) => ({
  type: CREATE_LIST,
  data: [
    {
      id: data.id,
      date: data.date,
      title: data.title,
      list_items: [],
    },
  ],
});
