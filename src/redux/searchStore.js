import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const counterSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    /*getData: (state) => {
      return state.value 
    },*/
    sendData: (state, action) => {
      //console.log(`action: ${action.payload}`);
      state.value = action.payload;
      //console.log(`state:${state.value}`);
    },
  },
});

export const { sendData } = counterSlice.actions;
export default counterSlice.reducer;
