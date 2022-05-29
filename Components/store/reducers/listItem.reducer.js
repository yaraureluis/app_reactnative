import { FILTERED_LIST_ITEM, SELECT_LIST_ITEM, ADD_ITEM_TO_SELECTED_LIST, DELETE_ITEM_BY_ID } from "../actions/listItem.action";

const initialState = {
  fullWishes: [],
  selected: null,
};

const ListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LIST_ITEM:
      const indexWish = state.fullWishes.findIndex((wish) => wish.id === action.wishId);
      if (indexWish === -1) return state;

      return { ...state, selected: state.fullWishes[indexWish] };

    case FILTERED_LIST_ITEM:
      return { ...state, fullWishes: action.wishes };

    case ADD_ITEM_TO_SELECTED_LIST:
      return { ...state, fullWishes: state.fullWishes.concat(action.item_added) };

    case DELETE_ITEM_BY_ID:
      let list_updated = state.fullWishes.filter((wish) => wish.id != action.deleted_item_id);
      return { ...state, fullWishes: list_updated };
    default:
      return state;
  }
};

export default ListItemReducer;
