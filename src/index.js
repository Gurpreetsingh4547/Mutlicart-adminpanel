// packages
import React from "react";
import ReactDOM from "react-dom/client";

// component
import DashBoard from "./View/Dashboard";

// css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashBoard />
  </React.StrictMode>
);
