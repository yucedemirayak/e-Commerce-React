import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createNewAdmin = createAsyncThunk(
  "Admin/newAdmin",
  async (signUpModel, { dispatch }) => {
    const data = await Post("Admin/newAdmin", signUpModel);
    return data;
  }
);
