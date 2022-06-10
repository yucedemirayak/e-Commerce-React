import { createSlice } from "@reduxjs/toolkit";
import { _logout } from "./authActions";

export const authStore = createSlice({
    name: "auth",
    initialState: {
        token: undefined,
        role: undefined,
    },
    reducers: {
        logOut: _logout
    },
    extraReducers: {},
})