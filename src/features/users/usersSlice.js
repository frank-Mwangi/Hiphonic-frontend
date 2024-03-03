import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:5400/api/users/";
const token = localStorage.getItem("token");
const initialState = { users: [], status: "idle", error: null }; // 'idle' | 'loading' | 'succeeded' | 'failed'
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (user) => {
  try {
    const response = await axios.post(`${USERS_URL}/login`, user);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  try {
    console.log("User is ", user);
    const response = await axios.post(USERS_URL, user);

    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (UserID) => {
    try {
      const response = await axios.delete(`${USERS_URL}/${UserID}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUsers",
  async (user) => {
    try {
      console.log("user is ", user);
      if (token) {
        const response = await axios.put(`${USERS_URL}/${user.id}`, user);
        return response.data;
      } else {
        alert("Unauthorzied request");
        return null;
      }
    } catch (error) {
      return error.message;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.filter(
          (user) => user.UserID !== action.payload.UserID
        );
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export default usersSlice.reducer;
