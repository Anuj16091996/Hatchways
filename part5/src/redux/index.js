/* eslint-disable no-unused-vars */

import {
  studentData,
  Decrement,
  postReuestFailed,
  postsRecived,
  postsRequested,
} from "./student.reducers";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  students: [],
  status: "idle", //idle, loading, suceed, failed
  error: "",
  loaded: false,
};

export const fetchPost = createAsyncThunk("fetchPost", async () => {
  try {
    const response = await fetch(
      "https://api.hatchways.io/assessment/students"
    );

    return response.json();
  } catch (error) {
    return error.message;
  }
});

const counterSlice = createSlice({
  name: "Counter",
  initialState: initialState,
  reducers: {
    incer: studentData,
    decrement: Decrement,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, postsRequested)
      .addCase(fetchPost.fulfilled, postsRecived)
      .addCase(fetchPost.rejected, postReuestFailed);
  },
});

export const allStudentsDetails = (state) => state.students;

export const getStatus = (state) => state.status;

export const geterror = (state) => state.error;

export const actions = counterSlice.actions;

const dataStore = configureStore({
  reducer: counterSlice.reducer,
});

export default dataStore;

// function test(){
//   initialState.students.p
// }

// getDefaultMiddleware,

// Requested: postsRequested,
// Recived: postsRecived,
// ReuestFailed: postReuestFailed,
// middleware: [...getDefaultMiddleware(), API],

// import { apiCallBegan } from "./Actions";
// import API from "./middleware/API";

// export const loadAPI = () => (dispatch) => {
//   return dispatch(
//     apiCallBegan({
//       URL,
//       onStart: actions.Requested.type,
//       onSucess: actions.Recived.type,
//       onError: actions.ReuestFailed.type,
//     })
//   );
// };

// const response = await fetch(
//   "https://api.hatchways.io/assessment/students"
// ).then((json_response) => {
//   console.log("2");
//   return json_response.json;
// });
// .then((res) => {
//   console.log("in 2");
// return new Promise((resolve, rejected) => {
//   console.log(res.text);
//   res.json().then((json_response) => {
//     console.log("in 2");
//     return json_response;
//   });
// });
// });
// response.json().then((json_response) => {
//   return json_response;
// });
//problem here
// return response.data;
