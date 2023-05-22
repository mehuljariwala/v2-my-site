import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexPage from "./index";

const el = document.getElementById("root");

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
);
