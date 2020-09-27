import { combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistReducer, persistStore } from "redux-persist";
import Volunter from "./volunter";

const reducers = combineReducers({
  Volunter: Volunter,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
