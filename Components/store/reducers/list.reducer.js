import { DATOS } from "../../../data/dataList";
import { SELECT_LIST } from "../actions/list.action";

const initialState = {
  listas: DATOS,
  selected: null,
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST:
      console.log("<<<<<<<<<< ENTRO AL CASO 1 >>>>>>>>>>>");
      console.log("DATOS LENGTH: " + state.listas.length);
      console.log("SELECT_LIST " + action.listID);
      const indexList = state.listas.findIndex((lista) => lista.id === action.listID);
      console.log("INDEX: " + indexList);
      if (indexList === -1) return state;
      return { ...state, selected: state.listas[indexList] };
    default:
      return state;
  }
};

export default ListReducer;
