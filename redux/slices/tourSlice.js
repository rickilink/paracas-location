import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
  },
  reducers: {
    setTour: (state, action) => {
      const itemExists = state.tours.find((i) => i.id === action.payload.id);
      if (!itemExists) {
        return {
          ...state,
          tours: [...state.tours, action.payload],
        };
      } else {
        return state;
      }
    },
    setTourFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setTourFilter: (state) => {
      const filteredTours = state.tours.filter((tour) =>
        state.FeaturesToFilter.every((feature) =>
          tour.features.includes(feature)
        )
      );

      if (filteredTours.length > 0) {
        return {
          ...state,
          filter: filteredTours,
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

export const { setTour, setTourFeaturesToFilter, setTourFilter } =
  tourSlice.actions;

export function filterToursByDiscount(tours) {
  return tours.filter((tour) => tour.discount);
}
export function filterTourByName(searchTerm) {
  return tours.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default tourSlice.reducer;
