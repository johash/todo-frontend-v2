import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { showNotification } from "@mantine/notifications";

const initialState = {
  isUserLoggedIn: false,
  loading: false,
  user: null,
  isRegisterError: false,
  isLoginError: false,
};

export const authRegister = createAsyncThunk(
  "auth/register",
  (data, { rejectWithValue }) => {
    return axios
      .post("user/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const authLogin = createAsyncThunk(
  "auth/login",
  (data, { rejectWithValue }) => {
    return axios
      .post("user/login", {
        email: data.loginEmail,
        password: data.loginPassword,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const tryAutoLogin = createAsyncThunk(
  "auth/verify",
  (data, { rejectWithValue }) => {
    return axios
      .get("user/verify", {
        headers: {
          "x-auth-token": localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(authRegister.fulfilled, (state, action) => {
      showNotification({
        title: action.payload.message,
        message: "Please log in to continue",
        color: "green",
      });
      state.loading = false;
      state.isRegisterError = false;
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      showNotification({
        title: action.payload.response.data.message,
        message: "Please use a different email address",
        color: "red",
      });
      state.loading = false;
      state.isRegisterError = true;
    });
    builder.addCase(authLogin.pending, (state, { meta, payload }) => {
      state.loading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, { meta, payload }) => {
      showNotification({
        title: payload.message,
        message: "Congratulations! Now you can start organizing your tasks",
        color: "green",
      });
      state.loading = false;
      state.isLoginError = false;
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("userData", JSON.stringify(payload.user));
      state.isUserLoggedIn = true;
      state.user = payload.user;
    });
    builder.addCase(authLogin.rejected, (state, { meta, payload }) => {
      showNotification({
        title: payload.response.data.message,
        message: "Please use the correct credentials",
        color: "red",
      });
      state.loading = false;
      state.isLoginError = true;
    });
    builder.addCase(tryAutoLogin.fulfilled, (state, { meta, payload }) => {
      if (payload.status === 200) {
        state.isUserLoggedIn = true;
        state.user = JSON.parse(localStorage.getItem("userData"));
      }
    });
    builder.addCase(tryAutoLogin.rejected, (state, { meta, payload }) => {
      state.user = null;
      state.isUserLoggedIn = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
