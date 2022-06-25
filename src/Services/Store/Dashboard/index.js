import { createSlice } from "@reduxjs/toolkit";
import { _setComponent } from "./dashboardActions";

const dashboardStore = createSlice({
  name: "dComponent",
  initialState: {
    name: "",
  },
  reducers: {
    setComponent: _setComponent,
  },
});

export const { setComponent } = dashboardStore.actions;

export default dashboardStore.reducer;