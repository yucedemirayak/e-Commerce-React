import { createSlice } from "@reduxjs/toolkit";
import { _setCategory } from "./categoryActions";
import { getCategories } from "./getCategories";

export const categoryStore = createSlice({
  name: "categories",
  initialState: {
    allCategories: []
  }
  ,
  reducers: {
    setCategory : _setCategory,
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.allCategories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.allCategories = undefined;
    },
  },
});

export const {setCategory} = categoryStore.actions;

export default categoryStore.reducer;
