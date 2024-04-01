import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route index element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/players" element={<Players />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
