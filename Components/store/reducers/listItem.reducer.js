import { SelectItems } from "../../../db";
import { FILTERED_LIST_ITEM, SELECT_LIST_ITEM, ADD_ITEM_TO_SELECTED_LIST, DELETE_ITEM_BY_ID } from "../actions/listItem.action";

const initialState = {
  listas: [],
  deseos_seleccionados: [],
  selected: null,
};

const ListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST_ITEM:
      console.log("<<<<< ENTRO EN SELECTED LIST ITEM >>>>>");
      console.log("SELECT_LIST_ITEM - ID DEL DESEO: ", action.wishId);
      console.log("TODOS MIS DESEOS ", state.deseos_seleccionados);
      const indexWish = state.deseos_seleccionados.findIndex((deseo) => deseo.id === action.wishId);
      console.log("INDEX DESEO: ", indexWish);
      if (indexWish === -1) return state;

      return { ...state, selected: state.deseos_seleccionados[indexWish] };

    case FILTERED_LIST_ITEM:
      console.log("FILTERED_LIST_ITEM linea 19", action.deseos);
      console.log("QUE TENGO EN DESEOS SELECCIONADOS", state.deseos_seleccionados);
      return { ...state, deseos_seleccionados: action.deseos };

    case ADD_ITEM_TO_SELECTED_LIST:
      console.log(">>ENTRÓ EN EL ADD ITEM TO SELECTED LIST DEL LIST REDUCER<<");
      console.log("ITEM EN EL REDUCER", action.item_added);
      console.log("LISTAS PARA PUSH", state.deseos_seleccionados);
      console.log("EJEMPLO DE INSERCIÓN EN DESEOS SELECCIONADOS", [...state.deseos_seleccionados, action.item_added]);
      return { ...state, deseos_seleccionados: state.deseos_seleccionados.concat(action.item_added) };

    case DELETE_ITEM_BY_ID:
      console.log("ID DEL ITEM QUE VIENE DEL ACTION", action.deleted_item_id);
      console.log(
        "EJEMPLO BORRADO listItem.reducer.js linea 31",
        state.deseos_seleccionados.filter((deseo) => deseo.id != action.deleted_item_id)
      );
      let list_updated = state.deseos_seleccionados.filter((deseo) => deseo.id != action.deleted_item_id);
      return { ...state, deseos_seleccionados: list_updated };
    default:
      return state;
  }
};

export default ListItemReducer;
