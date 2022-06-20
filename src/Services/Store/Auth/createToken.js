import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createToken = createAsyncThunk(
  "auth/loginUser",
  async (loginModel, { dispatch }) => {
    const { data }  = await Post("Auth/loginUser", loginModel);
    return data;
  }
);