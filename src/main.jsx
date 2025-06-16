import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap (JS and CSS)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css"; // Optional if you're using it

// Your custom CSS files
import "./assets/css/bootstrap.min.css"; // Keep this if you're overriding Bootstrap
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/style.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
