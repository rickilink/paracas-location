import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
  },
  reducers: {
    setRestaurant: (state, action) => {
      const itemExists = state.restaurants.find(
        (i) => i.id === action.payload.id
      );
      if (!itemExists) {
        return {
          ...state,
          restaurants: [...state.restaurants, action.payload],
        };
      } else {
        return state;
      }
    },
    setRestaurantFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setRestaurantFilter: (state) => {
      const filteredRestaurants = state.restaurants.filter((restaurant) =>
        state.FeaturesToFilter.every((feature) =>
          restaurant.features.includes(feature)
        )
      );

      if (filteredRestaurants.length > 0) {
        return {
          ...state,
          filter: filteredRestaurants,
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

export const {
  setRestaurant,
  setRestaurantFeaturesToFilter,
  setRestaurantFilter,
} = restaurantSlice.actions;

export function filterRestaurantsByDiscount(restaurants) {
  return restaurants.filter((restaurant) => restaurant.discount);
}
export function filterRestaurantByName(searchTerm) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default restaurantSlice.reducer;
