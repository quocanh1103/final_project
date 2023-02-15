import { createSlice } from "@reduxjs/toolkit";

export const CheckLoginSlice = createSlice({
  name: "checklogin",
  initialState: {
    idUser: "",
  },
  reducers: {
    addId: (state, action) => {
      const newid = action.payload;
      state.idUser = newid;
    },
    deleteId: (state, action) => {
      const deleteid = action.payload;
      state.idUser = deleteid;
    },
  },
});
