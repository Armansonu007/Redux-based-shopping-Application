import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {}
  }
});
export const { add, remove } = Cartslice.action;
export default Cartslice.reducers;
dFdvvsd