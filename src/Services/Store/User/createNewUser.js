import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../Utils/Helpers/requestHelpers";
import { createToken } from "../Auth/createToken";

export const createUser = createAsyncThunk(
  "Anonymous/newUser",
  async (signUpModel, { dispatch }) => {
    const data = await Post("Anonymous/newUser", signUpModel);
    if (data.isSuccess) {
      const loginData = {
        email: signUpModel.email,
        password: signUpModel.password,
      };
      dispatch(createToken(loginData));
    }
    return data;
  }
);
