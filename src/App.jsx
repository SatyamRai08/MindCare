import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Resources from "./pages/Resources";
import Activity from "./pages/Activity";

// New Pages
import Journal from "./pages/Journal";
import Experts from "./pages/Experts";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/articles" element={<Articles />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/activity" element={<Activity />} />

      {/* New Routes */}
      <Route path="/journal" element={<Journal />} />
      <Route path="/experts" element={<Experts />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;