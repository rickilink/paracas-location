import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    name: null,
    phoneNumber: null,
    email: null,
    photoURL: null,
    uid: null,
    favorite: [],
    visited: [],
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
        currentUser: action.payload,
      };
    },
    updateFavorite: (state, action) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorite: [...state.currentUser.favorite, action.payload],
        },
      };
    },

    deleteFavorite: (state, action) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorite: state.currentUser.favorite.filter(
            (item) => item.id !== action.payload.id
          ),
        },
      };
    },
  },
});

export const { setCurrentUser, updateFavorite, deleteFavorite } =
  authSlice.actions;
export default authSlice.reducer;
