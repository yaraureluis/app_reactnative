import { SELECT_LIST, CREATE_LIST, SET_ALL_LISTS, DELETE_LIST_BY_ID } from "../actions/list.action";

const initialState = {
  fullLists: [],
  selected: null,
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_LISTS:
      return { ...state, fullLists: action.listsDB };
    case SELECT_LIST:
      const indexList = state.fullLists.findIndex((lista) => lista.id === action.listID);
      if (indexList === -1) return state;
      return { ...state, selected: state.fullLists[indexList] };

    case CREATE_LIST:
      // AL CREAR UNA NUEVA LISTA, SETEO selected CON LO QUE VIENE DE ACTION
      // QUE ES UN OBJETO CON TITULO, ID, FECHA Y UNA LISTA DE ITEMS COMO ARRAY VACÍO
      return { ...state, selected: action.data, fullLists: state.fullLists.concat(action.data) };

    case DELETE_LIST_BY_ID:
      let list_updated = state.fullLists.filter((list) => list.id != action.deleted_list_id);
      return { ...state, fullLists: list_updated };

    default:
      return state;
  }
};

export default ListReducer;
