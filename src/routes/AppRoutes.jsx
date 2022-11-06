import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "../components/Home/Home";
import LandingPage from "../components/LandingPage/LandingPage";
import Spotify from "../components/Spotify/Spotify";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign_in" element={<LandingPage />} />
        <Route path="/spotify" element={<Spotify />} />
      </Routes>
    </BrowserRouter>
  )
}