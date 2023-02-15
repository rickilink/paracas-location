import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const exchangeSlice = createSlice({
  name: "exchanges",
  initialState: {
    exchanges: [],
    loading: false,
    filter: [],
    FeaturesToFilter: [],
  },
  reducers: {
    setExchange: (state, action) => {
      const itemExists = state.exchanges.find(
        (i) => i.id === action.payload.id
      );
      if (!itemExists) {
        return {
          ...state,
          exchanges: [...state.exchanges, action.payload],
        };
      } else {
        return state;
      }
    },
    setExchangeFeaturesToFilter: (state, action) => {
      return {
        ...state,
        FeaturesToFilter: action.payload,
      };
    },
    setExchangeFilter: (state) => {
      const filteredExchange = state.exchanges.filter((market) =>
        state.FeaturesToFilter.every((feature) =>
          market.features.includes(feature)
        )
      );

      if (filteredExchange.length > 0) {
        return {
          ...state,
          filter: filteredExchange,
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

export const { setExchange, setExchangeFeaturesToFilter, setExchangeFilter } =
  exchangeSlice.actions;

export function filterExchangeByDiscount(exchanges) {
  return exchanges.filter((exchange) => exchange.discount);
}
export function filterExchangeByName(searchTerm) {
  return exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default exchangeSlice.reducer;
