import { combineReducers, createStore, applyMiddleware } from "redux";
import ListReducer from "./reducers/list.reducer";
import ListItemReducer from "./reducers/listItem.reducer";
import thunk from "redux-thunk";

const RootReducer = {
  todas: ListReducer,
  lista: ListItemReducer,
};

export default createStore(combineReducers(RootReducer), applyMiddleware(thunk));
