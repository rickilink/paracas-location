import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const marketSlice = createSlice({
  name: "markets",
  initialState: {
    markets: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
  },
  reducers: {
    setMarket: (state, action) => {
      const itemExists = state.markets.find((i) => i.id === action.payload.id);
      if (!itemExists) {
        return {
          ...state,
          markets: [...state.markets, action.payload],
        };
      } else {
        return state;
      }
    },
    setMarketFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setMarketFilter: (state) => {
      const filteredMarkets = state.markets.filter((market) =>
        state.FeaturesToFilter.every((feature) =>
          market.features.includes(feature)
        )
      );

      if (filteredMarkets.length > 0) {
        return {
          ...state,
          filter: filteredMarkets,
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

export const { setMarket, setMarketFeaturesToFilter, setMarketFilter } =
  marketSlice.actions;

export function filterMarketsByDiscount(markets) {
  return markets.filter((market) => market.discount);
}
export function filterMarketByName(searchTerm) {
  return markets.filter((market) =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default marketSlice.reducer;
