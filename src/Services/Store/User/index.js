import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./createNewUser.js";
import { _setEmail, _setPassword } from "./userActions.js";

export const userStore = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    setUserEmail: _setEmail,
    setUserPassword: _setPassword,
  },
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    [createUser.rejected]: (state, action) => {
      state.email = undefined;
      state.password = undefined;
    },
  },
});

export const { setUserEmail, setUserPassword } = userStore.actions;

export default userStore.reducer;
