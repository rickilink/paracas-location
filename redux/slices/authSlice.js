import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    name: null,
    phoneNumber: null,
    email: null,
    photoURL: null,
    uid: null,
    favorite: [],
  },
  status: "idle", // idle || loading || succeeded || failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: {
          name: action.payload.name,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
          photoURL: action.payload.photoURL,
          uid: action.payload.uid,
          favorite: action.payload.favorite,
        },
      };
    },
  },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
