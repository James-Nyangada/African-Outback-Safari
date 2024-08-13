import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import ToursContextProvider from "./context/ToursContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToursContextProvider>
      <App />
    </ToursContextProvider>
      
  </BrowserRouter>
);
