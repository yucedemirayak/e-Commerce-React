import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createToken = createAsyncThunk(
  "auth/loginUser",
  async (loginModel, { dispatch }) => {
    const response = await Post("Auth/loginUser", loginModel);
    return response.data;
  }
);
