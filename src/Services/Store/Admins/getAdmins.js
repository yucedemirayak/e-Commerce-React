import { createAsyncThunk } from "@reduxjs/toolkit";
import { Get } from "../../Utils/Helpers/requestHelpers";

export const getAdmins = createAsyncThunk(
  "Admin/getAdmins",
  async () => {
    const response = await Get("Admin/getAdmins");
    return response.data;
  }
);