import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createUserToken = createAsyncThunk(
  "auth/loginUser",
  async (loginModel, { dispatch }) => {
    const response = await Post("Auth/loginUser", loginModel);
    return response.data;
  }
);

export const createAdminToken = createAsyncThunk(
  "auth/adminLogin",
  async (loginModel, {dispatch}) => {
    const response = await Post("Auth/loginAdmin", loginModel);
    return response.data;
  }
);