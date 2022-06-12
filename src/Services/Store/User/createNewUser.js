import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";

export const createUser = createAsyncThunk(
    "Anonymous/newUser",
    async (signUpModel, { dispatch }) => {
      const { data } = await Post("Anonymous/newUser", signUpModel);
      return data;
    }
  );