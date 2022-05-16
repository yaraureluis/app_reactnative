import { DATOS } from "../../../data/dataList";
import { SelectListas } from "../../../db";
import { FILTERED_LIST_ITEM, SELECT_LIST_ITEM, ADD_ITEM_TO_SELECTED_LIST } from "../actions/listItem.action";

const listas_de_db = async () => {
  try {
    const result = await SelectListas();
    console.log("RESULTADO", result);
    return result;
  } catch (err) {
    console.log("ERROR EN LIST.ITEMREDUCER LINEA 8", err);
  }
};

const initialState = {
  listas: listas_de_db(),
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
      console.log("FILTERED_LIST_ITEM " + action.listID);
      return { ...state, filteredList: state.listas.filter((lista) => lista.id == action.listID) };

    case ADD_ITEM_TO_SELECTED_LIST:
      console.log(">>ENTRÓ EN EL ADD ITEM TO SELECTED LIST DEL LIST REDUCER<<");
      console.log("ITEM EN EL REDUCER", action.item_to_add);
      console.log("LISTA SELECCIONADA EN EL REDUCER", action.listaSeleccionada);
      console.log("LISTAS PARA PUSH", state.listas);
      let index_lista_to_push = state.listas.findIndex((lista) => lista.id == action.listaSeleccionada.id);
      console.log("INDICE ENCONTRADO ", index_lista_to_push);
      let lista_actualizada = (state.listas[index_lista_to_push].list_items = [...state.listas[index_lista_to_push].list_items, action.item_to_add]);

      return { ...state, listas: lista_actualizada, filteredList: state.listas[index_lista_to_push].list_items };
    default:
      return state;
  }
};

export default ListItemReducer;
