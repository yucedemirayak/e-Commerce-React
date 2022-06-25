import { createSlice } from "@reduxjs/toolkit";
import { getAdmins } from "./getAdmins";

export const AdminStore = createSlice({
    name: "admins",
    initialState: {
        list: []
    },
    reducers: {

    },
    extraReducers: {
        [getAdmins.fulfilled]: (state, action) => {
            state.list = action.payload;
        }
    },
});

export default AdminStore.reducer;