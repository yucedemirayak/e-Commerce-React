import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getCategories = createAsyncThunk(
  "Anonymous/allCategories",
  async () => {
    const response = await Get("Anonymous/allCategories");
    return response.data;
  }
);
