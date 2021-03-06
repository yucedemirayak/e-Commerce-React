import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authStore from "../Auth";
import categoryStore from "../Categories";
import userStore from "../User";
import dashboardStore from "../Dashboard"
import AdminStore from "../Admins";

const rootReducer = combineReducers({
  user: userStore,
  auth: authStore,
  categories: categoryStore,
  dComponents: dashboardStore,
  admin: AdminStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "auth" , "categories"],
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
