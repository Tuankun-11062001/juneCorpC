import React from "react";
import ReactDOM from "react-dom/client";
import ProviderApp from "./common/provider/index.jsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderApp />
  </React.StrictMode>
);
