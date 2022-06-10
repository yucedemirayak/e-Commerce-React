import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { authStore } from "../Auth";
import { userStore } from "../User";

const rootReducer = combineReducers({
  user: userStore,
  auth: authStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user" , "auth"],
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
