import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./pages/Login";
import SignupComponent from "./pages/Signup";
import HomeComponent from "./pages/Home";
import TradeList from "./pages/TradeList";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Analysis from "./pages/analysis";

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/dashboard" element={<HomeComponent />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/trades" element={<TradeList />} />
          <Route path="/" element={<LoginComponent />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
