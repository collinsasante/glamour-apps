import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import global CSS files
import "./assets/css/bootstrap.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/style.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
