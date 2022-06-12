import { createSlice } from "@reduxjs/toolkit";
import { _logout } from "./authActions";
import { createToken } from "./createToken";

export const authStore = createSlice({
    name: "auth",
    initialState: {
        token: undefined,
        role: undefined,
    },
    reducers: {
        logOut: _logout
    },
    extraReducers: {
        [createToken.fulfilled]: (state, action) => {
            state.token = action.payload.token;
            state.role = action.payload.role;
          },
          [createToken.rejected]: (state, action) => {
            state.token = undefined;
            state.role = undefined;
          },
    },
})

export const { authLogout } = authStore.actions;

export default authStore.reducer;