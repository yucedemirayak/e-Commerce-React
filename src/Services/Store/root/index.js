import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authStore from "../Auth";
import categoryStore from "../Categories";
import userStore from "../User";

const rootReducer = combineReducers({
  user: userStore,
  auth: authStore,
  categories: categoryStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "auth" , "categories"],
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
