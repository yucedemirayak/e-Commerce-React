import { createSlice } from "@reduxjs/toolkit";

export const categoryStore = createSlice({
  name: "categories",
  initialState: [
    {
      name: undefined,
      imgSrc: undefined,
      subCategories: {
        name: undefined,
        imgSrc: undefined,
      },
    },
  ],
  reducers: {},
  extraReducers: {},
});

export default categoryStore.reducer;
