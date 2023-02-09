import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      uid: null,
      displayName: null,
      photoURL: null,
    },
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    },
    logOut: (state) => {
      state.user = {
        uid: null,
        displayName: null,
        photoURL: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://reqres.in/api/users?delay=1");
  return (await response.json()).data;
});
export const { setUser, logOut } = usersSlice.actions;

export default usersSlice.reducer;
