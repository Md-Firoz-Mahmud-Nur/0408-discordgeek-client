import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
// import DeveloperDashboard from "./DeveloperDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    {/* <DeveloperDashboard></DeveloperDashboard> */}
  </StrictMode>,
);
