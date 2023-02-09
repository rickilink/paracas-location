import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserByCredential = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await userAPI.fetchById(userId); //TODO: firebase auth here
    return response.data;
  }
);

const initialState = {
  user: {
    uid: null,
    displayName: null,
  },
  status: "idle", // idle || loading || succeeded || failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      // Add reducers for additional action types here, and handle loading state as needed
      .addCase(fetchUserByCredential.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserByCredential.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = {
          uid: action.payload.uid,
          name: action.payload.displayName,
        };
      })
      .addCase(fetchUserByCredential.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      });
  },
});

export const getAuth = (state) => state.auth.user;
export const getAuthStatus = (state) => state.auth.status;
export const getAuthError = (state) => state.auth.error;

/* export const { postAdd, reactionAdded } = postSlice.actions; */
export default authSlice.reducer;
