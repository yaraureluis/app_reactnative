import { combineReducers, createStore } from "redux";
import ListReducer from "./reducers/list.reducer";
import ListItemReducer from "./reducers/listItem.reducer";

const RootReducer = {
  todas: ListReducer,
  lista: ListItemReducer,
};

export default createStore(combineReducers(RootReducer));
