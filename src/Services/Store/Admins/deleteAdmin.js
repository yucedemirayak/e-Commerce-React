import { createAsyncThunk } from "@reduxjs/toolkit";
import { Delete } from "../../Utils/Helpers/requestHelpers";

export const deleteAdmin = createAsyncThunk(
  "Admin/deleteAdmin?id=",
  async (id, { dispatch }) => {
    const data = await Delete("Admin/deleteAdmin?id=" + id);
    return data;
  }
);
