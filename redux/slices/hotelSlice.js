import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
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
    setFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setFilter: (state) => {
      const filteredHotels = state.hotels.filter((hotel) =>
        state.FeaturesToFilter.every((feature) =>
          hotel.features.includes(feature)
        )
      );

      if (filteredHotels.length > 0) {
        return {
          ...state,
          filter: filteredHotels,
        };
      } else {
        return {
          ...state,
          filter: [],
        };
      }
    },
  },
});

export const { setHotel, setFilter, setFeaturesToFilter } = hotelSlice.actions;

export default hotelSlice.reducer;
