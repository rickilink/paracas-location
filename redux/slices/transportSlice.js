import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const transportSlice = createSlice({
  name: "transports",
  initialState: {
    transports: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
  },
  reducers: {
    setTransport: (state, action) => {
      const itemExists = state.transports.find(
        (i) => i.id === action.payload.id
      );
      if (!itemExists) {
        return {
          ...state,
          transports: [...state.transports, action.payload],
        };
      } else {
        return state;
      }
    },
    setTransportFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setTransportFilter: (state) => {
      const filteredTransport = state.transports.filter((market) =>
        state.FeaturesToFilter.every((feature) =>
          market.features.includes(feature)
        )
      );

      if (filteredTransport.length > 0) {
        return {
          ...state,
          filter: filteredTransport,
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
  setTransport,
  setTransportFeaturesToFilter,
  setTransportFilter,
} = transportSlice.actions;

export function filterTransportByDiscount(transports) {
  return transports.filter((transport) => transport.discount);
}
export function filterTransportByName(searchTerm) {
  return transports.filter((transport) =>
    transport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default transportSlice.reducer;
