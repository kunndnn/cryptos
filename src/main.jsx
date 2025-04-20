import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <HashRouter basename="/cryptos/">
    {/* The basename prop is used to specify the base URL for all locations. */}
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </HashRouter>
);
