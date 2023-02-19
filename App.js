import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { store } from "./redux/store";
import { Provider, useSelector } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
