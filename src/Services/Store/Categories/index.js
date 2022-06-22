import { createSlice } from "@reduxjs/toolkit";

export const categoryStore = createSlice({
  name: "categories",
  initialState: [
    {
      name: undefined,
      imgSource: undefined,
      details: undefined,
      subCategories: {
        name: undefined,
        imgSource: undefined,
        details: undefined,
      },
    },
  ],
  reducers: {},
  extraReducers: {},
});

export default categoryStore.reducer;
