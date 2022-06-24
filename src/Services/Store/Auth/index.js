import { createSlice } from "@reduxjs/toolkit";
import { _logout } from "./authActions";
import { createAdminToken, createUserToken } from "./createToken";

export const authStore = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    role: undefined,
  },
  reducers: {
    authLogOut: _logout,
  },
  extraReducers: {
    [createUserToken.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    [createUserToken.rejected]: (state, action) => {
      state.token = undefined;
      state.role = undefined;
    },
    [createAdminToken.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    [createAdminToken.rejected]: (state, action) => {
      state.token = undefined;
      state.role = undefined;
    },
  },
});

export const { authLogOut } = authStore.actions;

export default authStore.reducer;
