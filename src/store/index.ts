import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // Здесь вы можете добавить свои редюсеры
});

const store = createStore(rootReducer);

export default store;
