import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";

import HomePage from "./components/Showform";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WorkContainer from "./components/WorkContainer";
import Profile from "./components/LivePortal";
import Showform from "./components/Showform";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<WorkContainer />} />
          <Route path="/showform" element={<Showform />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
