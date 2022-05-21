import { DATOS } from "../../../data/dataList";
import { SELECT_LIST, CREATE_LIST, SET_ALL_LISTS } from "../actions/list.action";

const initialState = {
  listas: [],
  selected: null,
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_LISTS:
      return { ...state, listas: action.listas };
    case SELECT_LIST:
      console.log("<<<<<<<<<< ENTRO AL CASO 1 >>>>>>>>>>>");
      console.log("DATOS LENGTH: ", state.listas.length);
      console.log("SELECT_LIST ", action.listID);
      const indexList = state.listas.findIndex((lista) => lista.id === action.listID);
      console.log("INDEX: ", indexList);
      if (indexList === -1) return state;
      return { ...state, selected: state.listas[indexList] };

    case CREATE_LIST:
      // AL CREAR UNA NUEVA LISTA, SETEO selected CON LO QUE VIENE DE ACTION
      // QUE ES UN OBJETO CON TITULO, ID, FECHA Y UNA LISTA DE ITEMS COMO ARRAY VACÍO
      console.log("<<<ENTRÓ AL CASO DE NUEVA LISTA>>>>>>>>");
      console.log("ACTION DATA EN LIST.REDUCER LINEA 24", action.data);
      console.log("EJEMPLO", [...state.listas, action.data]);
      return { ...state, selected: action.data, listas: state.listas.concat(action.data) };

    default:
      return state;
  }
};

export default ListReducer;
