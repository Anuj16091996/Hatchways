/* eslint-disable no-unused-vars */

import { studentData, Decrement } from "./student.reducers";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: { counter: 0 },
  reducers: {
    incer: studentData,
    decrement: Decrement,
  },
});

export const actions = counterSlice.actions;

const dataStore = configureStore({
  reducer: counterSlice.reducer,
});

export default dataStore;
// export default counterSlice.reducer;
// student(state, action) {
//   const updateData = studentData(state, action);
//   return updateData;
// },

// const allReducers = combineReducers({
//   studentData,
// });
// export const { incer } = counterSlice.actions;
// import { combineReducers } from "redux";
