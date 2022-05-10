import { DATOS } from "../../../data/dataList";
import { FILTERED_LIST_ITEM, SELECT_LIST_ITEM } from "../actions/listItem.action";

const initialState = {
  listas: DATOS,
  filteredList: [],
  selected: null,
};

const ListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST_ITEM:
      console.log("<<<<< ENTRO EN SELECTED LIST ITEM >>>>>");
      console.log("SELECT_LIST_ITEM " + action.listItemID);

      return { ...state, selected: action.data };
    case FILTERED_LIST_ITEM:
      // NO LA ESTOY UTILIZANDO OJO ################
      console.log("FILTERED_LIST_ITEM " + action.listID);
      return { ...state, filteredList: state.listas.filter((lista) => lista.id == action.listID) };

    default:
      return state;
  }
};

export default ListItemReducer;
