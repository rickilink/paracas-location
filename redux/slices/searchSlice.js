import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    hotels: [],
    restaurants: [],
  },
  reducers: {
    setSearchResultsByHotel: (state, action) => {
      const foundHotels = action.payload;

      return {
        ...state,
        hotels: foundHotels,
      };
    },
    setSearchResultsByRestaurant: (state, action) => {
      const foundRestaurant = action.payload;

      return {
        ...state,
        restaurants: foundRestaurant,
      };
    },
  },
});

export const { setSearchResultsByHotel, setSearchResultsByRestaurant } =
  searchSlice.actions;

export default searchSlice.reducer;
