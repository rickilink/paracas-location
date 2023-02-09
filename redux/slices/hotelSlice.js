import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    loading: false,
    filter: "isSponsor",
  },
  reducers: {
    setHotel: (state, action) => {
      const itemExists = state.hotels.find((i) => i.id === action.payload.id);
      if (!itemExists) {
        return {
          ...state,
          hotels: [...state.hotels, action.payload],
        };
      } else {
        return state;
      }
    },
  },
});

export const { setHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
