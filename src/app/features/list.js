import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  lists: [],
};

export const getAllLists = createAsyncThunk("list/getAll", () => {
  return axios
    .get("list", {
      headers: {
        "x-auth-token": localStorage.getItem("accessToken"),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const addList = createAsyncThunk("list/add", (data) => {
  return axios
    .post(
      "list",
      {
        listName: data.listName,
      },
      {
        headers: {
          "x-auth-token": localStorage.getItem("accessToken"),
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const listSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllLists.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllLists.fulfilled, (state, { meta, payload }) => {
      state.lists = payload.lists;
      state.loading = false;
    });
    builder.addCase(addList.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(addList.fulfilled, (state, { meta, payload }) => {
      state.loading = false;
      getAllLists();
    });
  },
});

export default listSlice.reducer;
