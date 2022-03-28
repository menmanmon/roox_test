import { createStore } from "redux";
import { usersReducer } from "./users/reducer";

export const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);