import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
  },
  reducers: {
    setService: (state, action) => {
      const itemExists = state.services.find((i) => i.id === action.payload.id);
      if (!itemExists) {
        return {
          ...state,
          services: [...state.services, action.payload],
        };
      } else {
        return state;
      }
    },
    setServiceFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setServiceFilter: (state) => {
      const filteredService = state.services.filter((market) =>
        state.FeaturesToFilter.every((feature) =>
          market.features.includes(feature)
        )
      );

      if (filteredService.length > 0) {
        return {
          ...state,
          filter: filteredService,
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

export const { setService, setServiceFeaturesToFilter, setServiceFilter } =
  serviceSlice.actions;

export function filterServiceByDiscount(services) {
  return services.filter((service) => service.discount);
}
export function filterServiceByName(searchTerm) {
  return services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default serviceSlice.reducer;
