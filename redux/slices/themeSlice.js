import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    colors: {
      primaryContrast: "#1BC4B9",
      primaryDanger: "#F13E48",
      secondaryContrast: "rgba(27, 0, 192, 0.5)",
      primaryText: "#444A5F",
      primaryBackground: "#EAEDED",
      secondaryBackground: "#D9D9D9",
      buttonText: "#FFFFFF",
      darkPrimaryContrast: "#1BC4B9",
      darkPrimaryBackground: "#061315",
      darkPrimaryText: "#C3C3C3",
      darkSecondaryBackground: "#747474",
      darkButtonText: "#383838",
    },
  },
  reducers: {},
});

export default themeSlice.reducer;
