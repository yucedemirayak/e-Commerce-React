import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import userStore from "../User";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
