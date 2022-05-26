import { FILTERED_LIST_ITEM, SELECT_LIST_ITEM, ADD_ITEM_TO_SELECTED_LIST, DELETE_ITEM_BY_ID } from "../actions/listItem.action";

const initialState = {
  // listas: [],
  fullWishes: [],
  selected: null,
};

const ListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST_ITEM:
      console.log("<<<<< ENTRO EN SELECTED LIST ITEM >>>>>");
      console.log("SELECT_LIST_ITEM - ID DEL DESEO: ", action.wishId);
      console.log("TODOS MIS DESEOS ", state.fullWishes);
      const indexWish = state.fullWishes.findIndex((wish) => wish.id === action.wishId);
      console.log("INDEX DESEO: ", indexWish);
      if (indexWish === -1) return state;

      return { ...state, selected: state.fullWishes[indexWish] };

    case FILTERED_LIST_ITEM:
      console.log("FILTERED_LIST_ITEM linea 19", action.wishes);
      console.log("QUE TENGO EN DESEOS SELECCIONADOS", state.fullWishes);
      return { ...state, fullWishes: action.wishes };

    case ADD_ITEM_TO_SELECTED_LIST:
      console.log(">>ENTRÓ EN EL ADD ITEM TO SELECTED LIST DEL LIST REDUCER<<");
      console.log("ITEM EN EL REDUCER", action.item_added);
      console.log("LISTAS PARA PUSH", state.fullWishes);
      console.log("EJEMPLO DE INSERCIÓN EN DESEOS SELECCIONADOS", [...state.fullWishes, action.item_added]);
      return { ...state, fullWishes: state.fullWishes.concat(action.item_added) };

    case DELETE_ITEM_BY_ID:
      console.log("ID DEL ITEM QUE VIENE DEL ACTION", action.deleted_item_id);
      console.log(
        "EJEMPLO BORRADO listItem.reducer.js linea 31",
        state.fullWishes.filter((deseo) => deseo.id != action.deleted_item_id)
      );
      let list_updated = state.fullWishes.filter((deseo) => deseo.id != action.deleted_item_id);
      return { ...state, fullWishes: list_updated };
    default:
      return state;
  }
};

export default ListItemReducer;
