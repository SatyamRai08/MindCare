import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "aos/dist/aos.css";

import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>

      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3000,

          style: {
            background: "#16111F",
            color: "#ffffff",
            border: "1px solid #FACC15",
            borderRadius: "14px",
            padding: "14px 18px",
            fontWeight: "600",
            fontSize: "15px",
          },

          success: {
            iconTheme: {
              primary: "#22C55E",
              secondary: "#ffffff",
            },
          },

          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#ffffff",
            },
          },
        }}
      />

    </ThemeProvider>
  </StrictMode>
);