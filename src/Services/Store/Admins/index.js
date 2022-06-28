import { createSlice } from "@reduxjs/toolkit";
import { errorToast, successToast, warningToast } from "../../Utils/Helpers/toastHelper";
import { _setCreated } from "./adminActions";
import { createNewAdmin } from "./createAdmin";
import { deleteAdmin } from "./deleteAdmin";
import { getAdmins } from "./getAdmins";

export const AdminStore = createSlice({
    name: "admins",
    initialState: {
        list: [],
    },
    reducers: {
        setCreated: _setCreated,
    },
    extraReducers: {
        [getAdmins.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
        [getAdmins.rejected]: (state, action) => {
            state.list = undefined;
        },
        [createNewAdmin.fulfilled]: (state, action) => {
            successToast("Admin Created");
        },
        [createNewAdmin.rejected]: (state, action) => {
            errorToast("Failed");
        },
        [deleteAdmin.fulfilled]: (state, action) => {
            warningToast(action.payload);
            successToast("Admin Deleted");
        },
    },
});

export const { setCreated } = AdminStore.actions;

export default AdminStore.reducer;