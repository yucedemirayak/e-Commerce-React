import { configureStore } from "@reduxjs/toolkit";
import reducers from "./root";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
