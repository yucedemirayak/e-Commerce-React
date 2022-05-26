import { createSlice } from "@reduxjs/toolkit";
import { _setEmail, _setPassword } from "../../Actions/User";

export const userStore = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        password: "",
        authToken: "",
    },
    reducers: {
        setUserEmail: _setEmail,
        setUserPassword: _setPassword
    },
    // extraReducers: {

    // },
});

export const { setUserEmail , setUserPassword} = userStore.actions;

export default userStore.reducer;