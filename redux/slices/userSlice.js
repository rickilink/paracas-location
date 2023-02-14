import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
    topPlaces: [],
  },
  reducers: {
    setUsers: (state, action) => {
      const itemExists = state.users.find((i) => i.id === action.payload.id);
      if (!itemExists) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      } else {
        return state;
      }
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
